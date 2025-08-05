// API相关类型
export * from './api'

// 组件相关类型
export * from './component'

// 路由相关类型
export * from './router'

// 状态管理相关类型
export * from './store'

// 全局类型声明
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_VERSION: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TIMEOUT: string
  readonly VITE_DEV_MODE: string
  readonly VITE_ENABLE_MOCK: string
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_SENTRY_DSN: string
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}

// 通用类型
export interface BaseResponse<T = any> {
  code: number
  message: string
  data: T
}

// 分页类型
export interface Pagination {
  page: number
  pageSize: number
  total: number
}

// 通用用户类型（兼容旧版本）
export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

// 分页响应类型（兼容旧版本）
export interface PaginatedResponse<T> {
  list: T[]
  pagination: Pagination
} 