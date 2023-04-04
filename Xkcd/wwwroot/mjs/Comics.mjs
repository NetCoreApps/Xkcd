import { ref, watch, onMounted } from "vue"
import { QueryXkcdComics } from "../../mjs/dtos.mjs"
import { useClient } from "@servicestack/vue"

export default {
    template: `
<div class="flex flex-1 flex-col overflow-hidden">
    <header class="w-full">
        <div class="relative z-10 flex h-16">
            <div class="flex flex-1 justify-between px-4 sm:px-6">
                <div class="flex flex-1">
                    <input id="comic-search" type="text" v-model="searchTerm"
                        class="h-full w-full border-0 py-2 pl-8 pr-3 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:block dark:bg-gray-900"
                          placeholder="Search for a comic" />
                </div>
            </div>
        </div>
    </header>
    <div class="flex flex-1 overflow-hidden">
        <div class="hidden w-full overflow-y-auto border-l border-gray-200 dark:border-gray-800 bg-white p-8 lg:block rounded-lg mt-2 dark:bg-black">
            <div class="grid grid-cols-12" v-if="!loading">
                <div class="col-span-4" v-for="comic in comics">
                    <div class="flex flex-col items-center justify-center h-full">
                        <div class="relative sm:p-2 flex flex-col cursor-pointer items-center">
                            <a href="#" v-on:click="showModal">
                                <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">{{ comic.title }}</h2>
                                <img :id="'comic-' + comic.id" :src="comic.imageUrl" class="h-48" :alt="comic.transcript" :aria-description="comic.explanation" :title="comic.transcript" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ModalDialog v-if="selectedComic" @done="selectedComic = null" class="z-30">
        <div class="pb-8">
            <a :href="selectedComic.url" target="_blank">
                <h2 class="mt-8 text-2xl text-center">{{ selectedComic.title }}</h2>
                <div class="relative p-2 w-max flex flex-col mx-auto">
                    <img :id="'modal-' + selectedComic.id" :src="selectedComic.imageUrl" class="h-full" :alt="selectedComic.transcript" :aria-description="selectedComic.explanation" :title="selectedComic.transcript" />
                </div>
            </a>
            <div class="my-8 flex flex-col items-center">
                <p class="mx-4 pt-4" v-for="(string, index) in formatExplanation(selectedComic.explanation)" :key="index">{{ string }}</p>
            </div>
        </div>      
    </ModalDialog>
</div>
`,
    setup(props) {
        const comics = ref(props.comics || [])
        const searchTerm = ref()
        const client = useClient()
        const selectedComic = ref();
        
        const loading = ref(false)

        onMounted(async () => {
            await initializeData();
        })
        
        async function initializeData() {
            loading.value = true;
            let randomIds = generateRandomNumbers(1,2630,12);
            let results = await client.api(new QueryXkcdComics({ids: randomIds}))
            comics.value = results.response.results
            loading.value = false;
        }

        const searchApi = createDebounce(async (query) => {
            if(!query || query.length === 0) {
                let randomIds = generateRandomNumbers(1,2630,12);
                let api = await client.api(new QueryXkcdComics({ids: randomIds}))
                if (api.succeeded) {
                    comics.value = api.response.results
                }
            } else {
                let api = await client.api(new QueryXkcdComics({titleContains: searchTerm.value, orderByDesc: 'id'}))
                comics.value = api.response.results
            }
            loading.value = false;
        },250);

        watch(searchTerm, async(newValue,oldValue) => {
            loading.value = true;
            searchApi(newValue);
        })

        function createDebounce(fnc, delayMs) {
            let timeout = null;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    fnc(...args);
                }, delayMs || 500);
            };
        }
        
        function showModal(e) {
            let comicId = e.target.id.replace('comic-','');
            selectedComic.value = comics.value.find(c => c.id == comicId);
        }

        function generateRandomNumbers(low, high, count) {
            const result = [];
            for (let i = 0; i < count; i++) {
                result.push(Math.floor(Math.random() * (high - low + 1) + low));
            }
            return result;
        }
        
        function formatExplanation(explanation) {
            const sentences = explanation.split('. ')
            const paragraphs = [];
            let currentParagraph = "";
            let sentenceCount = 0;
            for (let i = 0; i < sentences.length; i++) {
                if(sentences[i].length < 4){
                    currentParagraph += sentences[i] + ". ";
                    continue;
                }
                if(i === sentences.length - 1)
                    continue;
                currentParagraph += sentences[i] + ". ";
                sentenceCount++;
                
                if(sentenceCount % 3 === 0) {
                    paragraphs.push(currentParagraph);
                    currentParagraph = "";
                }
            }
            
            if(paragraphs.length === 0 || currentParagraph.length > 0)
                paragraphs.push(currentParagraph);
            
            return paragraphs;
        }

        
        return {comics, searchTerm, loading, selectedComic, showModal, formatExplanation}
    },
}