// API 响应基础类型
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

// 分页响应类型
export interface PaginatedResponse<T = any> {
  list: T[]
  total: number
  page: number
  pageSize: number
}

// 用户相关类型
export interface UserInfo {
  id: number
  username: string
  email: string
  avatar?: string
  roles: string[]
  permissions: string[]
}

// 登录请求类型
export interface LoginRequest {
  username: string
  password: string
}

// 登录响应类型
export interface LoginResponse {
  token: string
  userInfo: UserInfo
}

// 用户信息更新类型
export interface UpdateUserInfoRequest {
  username?: string
  email?: string
  avatar?: string
}

// 文件上传响应类型
export interface UploadResponse {
  url: string
  filename: string
  size: number
}

// 通用列表查询参数
export interface ListQueryParams {
  page?: number
  pageSize?: number
  keyword?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

// 通用删除参数
export interface DeleteParams {
  id: number | string
}

// 通用ID参数
export interface IdParams {
  id: number | string
}

// 角色相关类型
export interface Role {
  id: number
  name: string
  code: string
  description?: string
  permissions: string[]
}

// 权限相关类型
export interface Permission {
  id: number
  name: string
  code: string
  description?: string
  module: string
}

// API菜单项类型（重命名避免冲突）
export interface ApiMenuItem {
  id: number
  name: string
  path: string
  icon?: string
  component?: string
  parentId?: number
  sort: number
  children?: ApiMenuItem[]
  permissions?: string[]
} 