// Detta är ditt plugin objekt. det kan exporteras för att användas vartsom
const Plugin = {
    // install metoden är allt som behöver existera på plugin-objektet.
    // Det tar det globala Vue-objektet såväl som användardefinierade alternativ.
    install(Vue, options) {
        // Vi kallar Vue.mixin () här för att injicera funktionalitet i alla komponenter.
        Vue.mixin({
            // Allt som läggs till en mixin injiceras i alla komponenter.
            // I det här fallet körs mounted() metoden när komponenten läggs till DOM.
            mounted() {
                console.log('Mixin Plugin')
            }
        })
    }
}
export default Plugin
