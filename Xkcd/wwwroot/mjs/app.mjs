import { createApp, nextTick, reactive, ref } from "vue"
import { JsonApiClient, combinePaths, $1, $$ } from "@servicestack/client"
import ServiceStackVue, { useMetadata } from "@servicestack/vue"
import ModalComic from "./components/ModalComic.mjs"
import CopyLine from "./components/CopyLine.mjs";

const BaseUrl = globalThis.BaseUrl = location.origin === 'http://localhost:5100' || location.origin === 'http://localhost:8080'
    ? 'https://localhost:5001'
    : 'https://ssg-examples.netcore.io/'
let client = null, Apps = []
let AppData = {
    init:false
}
export { client, Apps }

/** Shared Components */
const Components = {
    ModalComic,
    CopyLine
}

const alreadyMounted = el => el.__vue_app__ 

/** Mount Vue3 Component
 * @param sel {string|Element} - Element or Selector where component should be mounted
 * @param component 
 * @param [props] {any} */
export function mount(sel, component, props) {
    if (!AppData.init) {
        init(globalThis)
    }
    const el = $1(sel)
    if (alreadyMounted(el)) return
    const app = createApp(component, props)
    app.provide('client', client)
    Object.keys(Components).forEach(name => {
        app.component(name, Components[name])
    })
    app.use(ServiceStackVue)
    app.component('RouterLink', ServiceStackVue.component('RouterLink'))
    app.mount(el)
    Apps.push(app)
    return app
}

export function mountAll() {
    $$('[data-component]').forEach(el => {
        if (alreadyMounted(el)) return
        let componentName = el.getAttribute('data-component')
        if (!componentName) return
        let component = Components[componentName] || ServiceStackVue.component(componentName)
        if (!component) {
            console.error(`Could not create component ${componentName}`)
            return
        }

        let propsStr = el.getAttribute('data-props')
        let props = propsStr && new Function(`return (${propsStr})`)() || {}
        mount(el, component, props)
    })
}

/** @param {any} [exports] */
export function init(exports) {
    if (AppData.init) return
    client = JsonApiClient.create(BaseUrl)
    AppData = reactive(AppData)
    AppData.init = true
    mountAll()
    
    nextTick(() => {
        const { loadMetadata } = useMetadata()
        loadMetadata({
            resolvePath: combinePaths(client.baseUrl, 'metadata', 'app.json'),
            olderThan: location.search.includes('clear=metadata') ? 0 : 60 * 60 * 1000 //1hr 
        })
    })

    if (exports) {
        exports.client = client
        exports.Apps = Apps
    }
}
