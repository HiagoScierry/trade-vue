import './assets/main.css'

import { createApp } from 'vue'
import Store from './store'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
