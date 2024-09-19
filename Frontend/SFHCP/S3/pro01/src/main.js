import { createApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/pinia.js'
import '@/global.css'


createApp(App)
.use(pinia)
.mount('#app')
