// Store 基础状态类型
export interface BaseState {
  loading?: boolean
  error?: string | null
}

// 用户状态类型
export interface UserState extends BaseState {
  token: string
  userInfo: UserInfo | null
  isLoggedIn: boolean
  permissions: string[]
  roles: string[]
}

// 主题状态类型
export interface ThemeState extends BaseState {
  mode: 'light' | 'dark' | 'auto'
  primaryColor: string
  fontSize: 'small' | 'medium' | 'large'
  compact: boolean
}

// 应用状态类型
export interface AppState extends BaseState {
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  device: 'desktop' | 'mobile'
  size: 'large' | 'default' | 'small'
  language: string
  tagsView: {
    visitedViews: TabItem[]
    cachedViews: string[]
  }
}

// 权限状态类型
export interface PermissionState extends BaseState {
  routes: AppRouteRecordRaw[]
  addRoutes: AppRouteRecordRaw[]
  permissions: string[]
  roles: string[]
}

// Store 模块类型
export interface StoreModule {
  namespaced?: boolean
  state: () => any
  getters?: Record<string, any>
  actions?: Record<string, any>
  mutations?: Record<string, any>
}

// Store 插件类型
export interface StorePlugin {
  install: (store: any) => void
}

// 持久化配置类型
export interface PersistOptions {
  key?: string
  storage?: Storage
  paths?: string[]
  beforeRestore?: (context: any) => void
  afterRestore?: (context: any) => void
  serializer?: {
    serialize: (value: any) => string
    deserialize: (value: string) => any
  }
}

// Store 订阅类型
export interface StoreSubscription {
  unsubscribe: () => void
}

// Store 监听器类型
export interface StoreWatcher {
  (newValue: any, oldValue: any): void
}

// Store 计算属性类型
export interface StoreComputed<T = any> {
  (state: any, getters: any): T
} 