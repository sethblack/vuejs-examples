(function () {
    const TestElement = {
        // normal Vue component options here
        props: {},
        emits: {},
        template: `<span>Hello from the Test Element!</span>`,

        // defineCustomElement only: CSS to be injected into shadow root
        styles: [`span { color: red; }`],
    }

    // Register the custom element.
    // After registration, all `<my-vue-element>` tags
    // on the page will be upgraded.
    customElements.define('test-element', Vue.defineCustomElement(TestElement))
})()