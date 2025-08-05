import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// 导入全局样式和SASS变量/混合器
import './styles/global.scss'
import './style.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app') 