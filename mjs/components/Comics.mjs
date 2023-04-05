import { ref, watch, onMounted } from "vue"
import { QueryXkcdComics } from "../dtos.mjs"
import { useClient, useUtils } from "@servicestack/vue"
import { queryString } from "@servicestack/client"

export const ModalComic = {
    template:`<ModalDialog v-if="comic" @done="$emit('done')" class="z-30">
        <div class="p-8">
            <h2 class="text-center mb-8 font-display text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-200">{{ comic.title }}</h2>
            <div class="p-8 flex justify-center">
                <div class="pr-8">
                    <p v-if="comic.url" class="text-center mb-2">
                        <TextLink class="text-sm" :href="comic.url" target="_blank">{{comic.url}}</TextLink>
                    </p>
                    <a :href="comic.url" :title="comic.url" target="_blank" class="block cursor-pointer hover:shadow-lg hover:bg-slate-50 dark:hover:bg-slate-900">
                        <img :src="comic.imageUrl" :width="comic.width" :height="comic.height" :aria-description="comic.explanation" :alt="comic.transcript">
                    </a>
                    <div class="my-2 text-sm font-semibold block text-center">{{comic.width}} x {{comic.height}}</div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold font-mono">Transcript:</h3>
                    <p v-if="comic.transcript" class="pr-4 mb-2 sm:max-w-prose text-sm text-gray-600 dark:text-gray-300 font-mono text-xs">
                        {{comic.transcript}}
                    </p>
                </div>
            </div>
            <div v-if="comic.explanation && formatExplanation(comic.explanation).join('').length">
                <h3 class="mb-4 text-lg font-semibold">Explanation</h3>
                <p class="mt-4" v-for="(string, index) in formatExplanation(comic.explanation)" :key="index">{{ string }}</p>
            </div>
        </div>      
    </ModalDialog>`,
    emits:['done'],
    props:['comic'],
    setup(props) {
        function formatExplanation(explanation) {
            const sentences = explanation.split('. ')
            const paragraphs = []
            let currentParagraph = ""
            let sentenceCount = 0;
            for (let i = 0; i < sentences.length; i++) {
                if (sentences[i].length < 4) {
                    currentParagraph += sentences[i] + ". "
                    continue
                }
                if (i === sentences.length - 1)
                    continue
                currentParagraph += sentences[i] + ". "
                sentenceCount++;

                if (sentenceCount % 3 === 0) {
                    paragraphs.push(currentParagraph)
                    currentParagraph = ""
                }
            }

            if (paragraphs.length === 0 || currentParagraph.length > 0)
                paragraphs.push(currentParagraph);

            return paragraphs;
        }
        return { formatExplanation }
    }
}

export const Comics = {
    template: `
<div class="flex flex-1 flex-col overflow-hidden">
    <div class="mb-8 mx-auto w-96">
        <h2 class="text-center mb-4 max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-200">search xkcd</h2>
        <TextInput class="w-full w-prose w-100" type="search" v-model="searchTerm" placeholder="search xkcd comic titles" />
    </div>
    <div>
        <div v-if="!loading && hasInit" class="w-full pb-4 bg-white dark:bg-black border border-black flex flex-wrap">
            <div v-if="comics.length" class="border-2 border-slate-700 ml-4 mt-4 p-4 flex justify-center items-center hover:shadow-lg hover:bg-slate-50 dark:hover:bg-slate-900 max-w-[48%]" v-for="comic in comics">
                <div @click="showModal(comic)" class="cursor-pointer">
                    <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">{{ comic.title }}</h2>
                    <img :src="comic.imageUrl" :width="comic.width" :height="comic.height" class="h-48 object-cover" :aria-description="comic.explanation" :alt="comic.transcript" loading="lazy">
                </div>
            </div>
            <div v-else class="w-full">
                <h4 class="text-center text-lg pt-8 pb-4">query returned no results</h4>            
            </div>
        </div>
        <div v-else class="flex justify-center items-center pt-8">
            <Loading>searching xkcd...</Loading>
        </div>
    </div>
    <ModalComic v-if="selected" :comic="selected" @done="done" />
</div>
`,
    setup(props) {
        const comics = ref(props.comics || [])
        const qs = queryString(location.search)
        const searchTerm = ref(qs.q || '')
        const client = useClient()
        const { pushState } = useUtils()
        const selected = ref()
        
        const loading = ref(false)
        const hasInit = ref(false)

        onMounted(async () => {
            if (qs.q) {
                let api = await client.api(new QueryXkcdComics({ titleContains:searchTerm.value, orderByDesc:'id' }))
                comics.value = api.response.results
                if (qs.id) {
                    showModal(comics.value.find(x => x.id == qs.id))
                }
            } else {
                await init()
            }
            hasInit.value = true
        })
        
        async function init() {
            loading.value = true;
            let randomIds = generateRandomNumbers(1,2630,12);
            let results = await client.api(new QueryXkcdComics({ ids:randomIds }))
            comics.value = results.response.results
            loading.value = false
        }

        const searchApi = createDebounce(async (query) => {
            if (!query || query.length === 0) {
                pushState({ q: undefined })
                let randomIds = generateRandomNumbers(1,2630,12);
                let api = await client.api(new QueryXkcdComics({ ids:randomIds }))
                if (api.succeeded) {
                    comics.value = api.response.results
                }
            } else {
                pushState({ q: searchTerm.value })
                
                await (async (titleContains) => {
                    let api = await client.api(new QueryXkcdComics({ titleContains, orderByDesc:'id' }))
                    // discard any invalidated api responses
                    if (titleContains === searchTerm.value) {
                        comics.value = api.response.results
                    }
                })(searchTerm.value)
            }
            loading.value = false
        },250)

        watch(searchTerm, async(newValue,oldValue) => {
            loading.value = true
            searchApi(newValue)
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
            pushState({ id:comic?.id || undefined })
        }
        function done() {
            showModal(null)
        }

        function generateRandomNumbers(low, high, count) {
            const result = [];
            for (let i = 0; i < count; i++) {
                result.push(Math.floor(Math.random() * (high - low + 1) + low));
            }
            return result;
        }
        
        return { comics, searchTerm, hasInit, loading, selected, showModal, done }
    },
}