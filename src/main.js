import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVent from './plugins'
const app=createApp(App)
getVent(app)
app.use(store)
app.use(router).mount('#app')
