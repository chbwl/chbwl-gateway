import { defineStore } from 'pinia'

type ThemeMode = 'light' | 'dark' | 'auto'

interface ThemeState {
  mode: ThemeMode
  primaryColor: string
  fontSize: 'small' | 'medium' | 'large'
  compact: boolean
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    mode: 'light',
    primaryColor: '#667eea',
    fontSize: 'medium',
    compact: false
  }),
  
  getters: {
    // 获取当前主题模式
    currentMode: (state) => {
      if (state.mode === 'auto') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      return state.mode
    },
    
    // 获取主题CSS变量
    themeVariables: (state) => {
      const isDark = state.mode === 'dark' || 
        (state.mode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      return {
        '--primary-color': state.primaryColor,
        '--font-size': state.fontSize === 'small' ? '14px' : state.fontSize === 'large' ? '18px' : '16px',
        '--compact-spacing': state.compact ? '0.5rem' : '1rem',
        '--bg-color': isDark ? '#1a1a1a' : '#ffffff',
        '--text-color': isDark ? '#ffffff' : '#333333',
        '--border-color': isDark ? '#333333' : '#e0e0e0'
      }
    }
  },
  
  actions: {
    // 切换主题模式
    toggleMode() {
      const modes: ThemeMode[] = ['light', 'dark', 'auto']
      const currentIndex = modes.indexOf(this.mode)
      const nextIndex = (currentIndex + 1) % modes.length
      this.mode = modes[nextIndex]!
      this.applyTheme()
    },
    
    // 设置主题模式
    setMode(mode: ThemeMode) {
      this.mode = mode
      this.applyTheme()
    },
    
    // 设置主色调
    setPrimaryColor(color: string) {
      this.primaryColor = color
      this.applyTheme()
    },
    
    // 设置字体大小
    setFontSize(size: 'small' | 'medium' | 'large') {
      this.fontSize = size
      this.applyTheme()
    },
    
    // 切换紧凑模式
    toggleCompact() {
      this.compact = !this.compact
      this.applyTheme()
    },
    
    // 应用主题到DOM
    applyTheme() {
      const variables = this.themeVariables
      const root = document.documentElement
      
      Object.entries(variables).forEach(([key, value]) => {
        root.style.setProperty(key, value)
      })
      
      // 添加主题类名
      root.classList.remove('theme-light', 'theme-dark')
      root.classList.add(`theme-${this.currentMode}`)
    },
    
    // 初始化主题
    initTheme() {
      // 监听系统主题变化
      if (this.mode === 'auto') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', () => {
          this.applyTheme()
        })
      }
      
      this.applyTheme()
    }
  },
  
  // 持久化配置
  persist: {
    key: 'theme-store',
    storage: localStorage,
    paths: ['mode', 'primaryColor', 'fontSize', 'compact']
  }
}) 