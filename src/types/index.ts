// 全局类型声明

// 环境变量类型
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_VERSION: string
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}

// 通用类型
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

// 用户类型
export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

// 分页类型
export interface Pagination {
  page: number
  pageSize: number
  total: number
}

// 分页响应类型
export interface PaginatedResponse<T> {
  list: T[]
  pagination: Pagination
} 