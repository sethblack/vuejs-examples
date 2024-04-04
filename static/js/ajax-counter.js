(function () {
    async function incrementClicks() {
        const response = await fetch('/api/clicks', {
            method: 'POST'
        })
        const data = await response.json()
        this.count = data.clicks
    }

    async function getInitialClicks() {
        const response = await fetch('/api/clicks', {
            method: 'GET'
        })
        const data = await response.json()
        this.count = data.clicks
    }

    const AjaxCounter = {
        // normal Vue component options here
        props: {
            clicksLabel: { type: String, default: "Clix" }
        },

        emits: {},

        // template is just a string of html elements
        template: `<button @click="incrementClicks">{{ count }} {{ clicksLabel }}</button>`,

        // defineCustomElement only: CSS to be injected into shadow root
        styles: [`button { color: blue; }`],

        setup: function () {
            // Vue 3 Composition API setup here
            return {
                count: Vue.ref(0)
            }
        },

        methods: {
            incrementClicks
        },

        mounted: getInitialClicks
    }

    // Register the custom element.
    // After registration, all `<my-vue-element>` tags
    // on the page will be upgraded.
    customElements.define('ajax-counter', Vue.defineCustomElement(AjaxCounter))
})()