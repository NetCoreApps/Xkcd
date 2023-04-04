import { ref, onMounted } from "vue"
import { QueryXkcdComics } from "../../mjs/dtos.mjs"
import { useClient } from "@servicestack/vue"
export default {
    template: `
<DataGrid :items="comics" 
          :selected-columns="imageUrl,transcript" 
          :header-titles="{ imageUrl:'Comic',transcript: 'Description' }"
          class="max-w-screen-lg mx-auto">
    <template #imageUrl="{ imageUrl, title }">
        <h2 class="text-lg font-semibold text-gray-900">{{ title }}</h2>
        <img :src="imageUrl" class="h-48" /> 
    </template>
    <template #transcript="{ transcript }">
        <p class="whitespace-normal break-words">{{ transcript }}</p>
    </template>
</DataGrid>`,
    props: { comics:Array },
    setup(props) {
        const comics = ref(props.comics || [])
        const client = useClient()

        onMounted(async () => {
            await initializeData();
        })
        async function initializeData() {
            let results = await client.api(new QueryXkcdComics({take: 10}))
            comics.value = results.response.results
        }
        
        return {comics}
    },
}