import { ref, watch, onMounted } from "vue"
import { QueryXkcdComics } from "../dtos.mjs"
import { useClient, useUtils } from "@servicestack/vue"
import { queryString } from "@servicestack/client"

export default {
    template: `
<div class="flex flex-1 flex-col overflow-hidden">    
    <div class="mb-8 mx-auto w-96">
        <h2 class="text-center mb-4 max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-200">search xkcd</h2>
        <TextInput class="w-full w-prose w-100" type="search" v-model="searchTerm" placeholder="search xkcd comic titles" />
    </div>
    <div>
        <div v-if="!loading" class="w-full pb-4 bg-white dark:bg-black border border-black flex flex-wrap">
            <div v-if="comics.length" class="border-2 border-slate-700 ml-4 mt-4 p-4 flex justify-center items-center hover:shadow-lg hover:bg-slate-50" v-for="comic in comics">
                <div @click="showModal(comic)" class="cursor-pointer">
                    <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">{{ comic.title }}</h2>
                    <img :src="comic.imageUrl" :width="comic.width" :height="comic.height" class="h-44 object-cover" :aria-description="comic.explanation" :alt="comic.transcript" />
                </div>
            </div>
            <div v-else>
                <h4 class="text-center text-lg pt-8">query returned no results</h4>            
            </div>
        </div>
        <div v-else class="flex justify-center items-center pt-8">
            <Loading>searching xkcd...</Loading>
        </div>
    </div>
    <ModalDialog v-if="selected" @done="selected=null" class="z-30">
        <div>
            <h2 class="text-center my-8 font-display text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-200">{{ selected.title }}</h2>
            <div class="px-8 flex justify-center">
                <div class="pr-8">
                    <a :href="selected.url" target="_blank" class="block hover:shadow-lg hover:bg-slate-50">
                        <img :src="selected.imageUrl" :width="selected.width" :height="selected.height" :aria-description="selected.explanation" :alt="selected.transcript" />
                    </a>
                    <div class="my-2 text-sm font-semibold block text-center">{{selected.width}} x {{selected.height}}</div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold font-mono">Transcript:</h3>
                    <p class="pr-4 sm:max-w-prose text-sm text-gray-600 font-mono text-xs">
                        {{selected.transcript}}
                    </p>
                </div>
            </div>
            <div class="p-8">
                <h3 class="mb-4 text-lg font-semibold">Explanation</h3>
                <p class="mt-4" v-for="(string, index) in formatExplanation(selected.explanation)" :key="index">{{ string }}</p>
            </div>
        </div>      
    </ModalDialog>
</div>
`,
    setup(props) {
        const comics = ref(props.comics || [])
        const searchTerm = ref()
        const client = useClient()
        const { pushState } = useUtils()
        const selected = ref()
        
        const loading = ref(false)

        onMounted(async () => {
            const qs = queryString(location.search)
            searchTerm.value = qs.q
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
                pushState({ q: undefined })
                let randomIds = generateRandomNumbers(1,2630,12);
                let api = await client.api(new QueryXkcdComics({ids: randomIds}))
                if (api.succeeded) {
                    comics.value = api.response.results
                }
            } else {
                pushState({ q: searchTerm.value })
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
        
        function showModal(comic) {
            selected.value = comic;
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

        
        return { comics, searchTerm, loading, selected, showModal, formatExplanation }
    },
}