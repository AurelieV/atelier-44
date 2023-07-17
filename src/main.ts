import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from "@unhead/vue"
import Separator from '@/components/Separator.vue'
import { Icon } from '@iconify/vue';

const app = createApp(App)

app.use(router)
app.use(createHead())
app.component('Separator', Separator)
app.component('Icon', Icon)

app.mount('#app')
