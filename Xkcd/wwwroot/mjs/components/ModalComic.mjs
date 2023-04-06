export default {
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
