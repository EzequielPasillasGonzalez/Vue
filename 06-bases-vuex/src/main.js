import { createApp } from 'vue'
import App from './App.vue'
import Store from './store'

createApp(App)
    .use(Store) //? Para usar el store
    .mount('#app')
