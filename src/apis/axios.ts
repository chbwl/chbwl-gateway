import axios, { type AxiosInstance, type InternalAxiosRequestConfig, type AxiosResponse, type AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

// 扩展AxiosRequestConfig类型
export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  showLoading?: boolean
}

// 创建axios实例
const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
http.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    // 添加token
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // 添加loading状态
    if (config.showLoading !== false) {
      // 这里可以触发全局loading状态
      console.log('Request started:', config.url)
    }
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 隐藏loading状态
    console.log('Request completed:', response.config.url)
    
    const { data } = response
    
    // 统一处理响应数据
    if (data.code === 200) {
      return data.data
    } else {
      ElMessage.error(data.message || '请求失败')
      return Promise.reject(new Error(data.message || '请求失败'))
    }
  },
  (error) => {
    // 隐藏loading状态
    console.log('Request failed:', error.config?.url)
    
    // 统一错误处理
    let message = '网络错误'
    
    if (error.response) {
      const { status, data } = error.response
      
      switch (status) {
        case 401:
          message = '未授权，请重新登录'
          // 清除token并跳转到登录页
          localStorage.removeItem('token')
          window.location.href = '/login'
          break
        case 403:
          message = '拒绝访问'
          break
        case 404:
          message = '请求地址出错'
          break
        case 500:
          message = '服务器内部错误'
          break
        default:
          message = data?.message || `请求失败: ${status}`
      }
    } else if (error.request) {
      message = '网络连接失败'
    } else {
      message = error.message || '请求配置错误'
    }
    
    ElMessage.error(message as any)
    return Promise.reject(error)
  }
)

// 封装常用请求方法
export const request = {
  get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return http.get(url, config)
  },
  
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return http.post(url, data, config)
  },
  
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return http.put(url, data, config)
  },
  
  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return http.delete(url, config)
  },
  
  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return http.patch(url, data, config)
  }
}

export default http 