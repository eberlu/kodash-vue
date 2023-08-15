import './assets/app.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import VueFeather from 'vue-feather'

const app = createApp(App)

app.use(router)

app.component('DefaultLayout', DefaultLayout)
app.component('FtIcon', VueFeather)

app.mount('#app')