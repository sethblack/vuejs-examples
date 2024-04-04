(function () {
    const ButtonCounter = {
        // normal Vue component options here
        props: {
            clicksLabel: { type: String, default: "Clix" }
        },

        emits: {},

        // template is just a string of html elements
        template: `<button @click="count++">{{ count }} {{ clicksLabel }}</button>`,

        // defineCustomElement only: CSS to be injected into shadow root
        styles: [`button { color: blue; }`],

        setup: () => {
            // Vue 3 Composition API setup here
            return {
                count: Vue.ref(0)
            }
        }
    }

    // Register the custom element.
    // After registration, all `<my-vue-element>` tags
    // on the page will be upgraded.
    customElements.define('button-counter', Vue.defineCustomElement(ButtonCounter))
})()