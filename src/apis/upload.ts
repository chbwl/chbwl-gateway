import { request } from './axios'
import type { UploadResponse } from '@/types'
import type { AxiosProgressEvent } from 'axios'

// 文件上传相关API
export const uploadApi = {
  // 上传单个文件
  uploadFile: (file: File, onProgress?: (progress: number) => void): Promise<UploadResponse> => {
    const formData = new FormData()
    formData.append('file', file)
    
    return request.post('/upload/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          onProgress(progress)
        }
      }
    })
  },

  // 上传多个文件
  uploadFiles: (files: File[], onProgress?: (progress: number) => void): Promise<UploadResponse[]> => {
    const formData = new FormData()
    files.forEach((file, index) => {
      formData.append(`files[${index}]`, file)
    })
    
    return request.post('/upload/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          onProgress(progress)
        }
      }
    })
  },

  // 上传图片
  uploadImage: (file: File, onProgress?: (progress: number) => void): Promise<UploadResponse> => {
    const formData = new FormData()
    formData.append('image', file)
    
    return request.post('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          onProgress(progress)
        }
      }
    })
  },

  // 删除文件
  deleteFile: (filename: string): Promise<void> => {
    return request.delete(`/upload/file/${filename}`)
  },

  // 获取文件信息
  getFileInfo: (filename: string): Promise<UploadResponse> => {
    return request.get(`/upload/file/${filename}`)
  }
} 