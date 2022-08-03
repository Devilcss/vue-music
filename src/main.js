import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVent from './plugins'
import lazyPlugin from 'vue3-lazy'

const app=createApp(App)
getVent(app)
app.use(store)
app.use(router).use(lazyPlugin,{
    loading: require('@/assets/cd.png')
}).mount('#app')
