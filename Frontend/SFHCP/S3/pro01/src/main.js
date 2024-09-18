import { createApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/pinia.js'


createApp(App)
.use(pinia)
.mount('#app')
