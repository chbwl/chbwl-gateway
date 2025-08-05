// 导出HTTP客户端
export { default as http, request } from './http'

// 导出具体API模块
export { uploadApi } from './upload'

// 统一导出所有API
import { uploadApi } from './upload'

export const api = {
  upload: uploadApi
} 