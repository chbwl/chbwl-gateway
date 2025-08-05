import type { RouteRecordRaw } from 'vue-router'

// 扩展路由元信息类型
export interface RouteMeta {
  title?: string
  icon?: string
  requiresAuth?: boolean
  permissions?: string | string[]
  roles?: string | string[]
  keepAlive?: boolean
  hidden?: boolean
  breadcrumb?: boolean
  activeMenu?: string
  noCache?: boolean
  affix?: boolean
  alwaysShow?: boolean
}

// 扩展路由记录类型
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  meta?: RouteMeta
  children?: AppRouteRecordRaw[]
}

// 菜单项类型
export interface MenuItem {
  id: number
  name: string
  path: string
  component?: string
  redirect?: string
  meta?: RouteMeta
  children?: MenuItem[]
}

// 面包屑项类型
export interface BreadcrumbItem {
  name: string
  path?: string
  icon?: string
}

// 标签页项类型
export interface TabItem {
  name: string
  path: string
  title: string
  icon?: string
  closable?: boolean
  affix?: boolean
}

// 权限检查结果类型
export interface PermissionResult {
  hasPermission: boolean
  missingPermissions?: string[]
  missingRoles?: string[]
}

// 路由守卫类型
export interface RouteGuard {
  beforeEach?: (to: any, from: any, next: any) => void
  afterEach?: (to: any, from: any) => void
  onError?: (error: any) => void
} 