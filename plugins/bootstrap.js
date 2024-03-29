
import * as bootsrtap from "bootstrap";
export default defineNuxtPlugin((nuxtApp) => {
    // nuxtApp.vueApp.use(domtoimage)
    return {
        provide: {
            bootsrtap
        }
    }
})