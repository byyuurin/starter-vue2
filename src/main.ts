import '@unocss/reset/tailwind.css'
import 'uno.css'
import '/src/styles/main.css'

import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
// import VueRouter from 'vue-router'
// import routes from 'virtual:generated-pages'
import App from './App.vue'
import router from './router'

Vue.use(VueCompositionAPI)
// Vue.use(VueRouter)

// const router = new VueRouter({
//   mode: 'history',
//   base: import.meta.env.BASE_URL,
//   routes,
// })

const app = createApp({ router, render: () => h(App) })
app.mount('#app')
