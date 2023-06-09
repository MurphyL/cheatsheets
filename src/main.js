import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './core/app.v1.vue'
import router from './router/router.v1'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
