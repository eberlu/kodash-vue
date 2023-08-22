import './assets/app.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// global components
import Box from '@/components/Box.vue'
import BoxTitle from '@/components/BoxTitle.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import VueFeather from 'vue-feather'

const app = createApp(App)

app.use(router)

// register global components (a-z)
app.component('Box', Box)
app.component('BoxTitle', BoxTitle)
app.component('DefaultLayout', DefaultLayout)
app.component('FtIcon', VueFeather)

app.mount('#app')