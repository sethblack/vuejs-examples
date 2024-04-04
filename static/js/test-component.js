// Components are reusable Vue instances with a name: in this case, <test-component>.
(function () {
    const TestComponent = {
        template: `<span>Hello from Test Component</span>`,
    }

    const app = Vue.createApp({
        data: () => ({ someData: 'prop' }),
    })

    app.component('test-component', TestComponent)

    app.mount('#app')
})()