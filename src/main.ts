import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import pinia from './stores'
import App from './App.vue'

// 导入全局样式和SASS变量/混合器
import './styles/global.scss'
import './style.scss'

// 导入主题系统
import { useThemeStore } from './stores/theme'

const app = createApp(App)

// 使用插件
app.use(pinia)
app.use(router)
app.use(ElementPlus)

// 初始化主题
const themeStore = useThemeStore()
themeStore.initTheme()

app.mount('#app') 