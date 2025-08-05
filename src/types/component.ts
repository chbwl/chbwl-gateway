// 组件Props基础类型
export interface BaseProps {
  class?: string
  style?: string | Record<string, any>
}

// 表单组件Props
export interface FormProps extends BaseProps {
  model?: Record<string, any>
  rules?: Record<string, any>
  labelWidth?: string | number
  labelPosition?: 'left' | 'right' | 'top'
  size?: 'large' | 'default' | 'small'
  disabled?: boolean
}

// 表格组件Props
export interface TableProps extends BaseProps {
  data?: any[]
  columns?: TableColumn[]
  loading?: boolean
  pagination?: boolean | PaginationProps
  rowKey?: string | ((record: any) => string)
  selection?: boolean
  stripe?: boolean
  border?: boolean
  size?: 'large' | 'default' | 'small'
}

// 表格列定义
export interface TableColumn {
  prop?: string
  label: string
  width?: string | number
  minWidth?: string | number
  fixed?: boolean | 'left' | 'right'
  sortable?: boolean
  resizable?: boolean
  showOverflowTooltip?: boolean
  align?: 'left' | 'center' | 'right'
  headerAlign?: 'left' | 'center' | 'right'
  render?: (row: any, column: TableColumn, index: number) => any
}

// 分页组件Props
export interface PaginationProps {
  currentPage?: number
  pageSize?: number
  total?: number
  pageSizes?: number[]
  layout?: string
  background?: boolean
  small?: boolean
  hideOnSinglePage?: boolean
}

// 对话框组件Props
export interface DialogProps extends BaseProps {
  visible?: boolean
  title?: string
  width?: string | number
  fullscreen?: boolean
  top?: string
  modal?: boolean
  appendToBody?: boolean
  lockScroll?: boolean
  closeOnClickModal?: boolean
  closeOnPressEscape?: boolean
  showClose?: boolean
  beforeClose?: (done: () => void) => void
}

// 抽屉组件Props
export interface DrawerProps extends BaseProps {
  visible?: boolean
  title?: string
  size?: string | number
  direction?: 'rtl' | 'ltr' | 'ttb' | 'btt'
  modal?: boolean
  appendToBody?: boolean
  lockScroll?: boolean
  closeOnClickModal?: boolean
  closeOnPressEscape?: boolean
  showClose?: boolean
  withHeader?: boolean
  beforeClose?: (done: () => void) => void
}

// 消息提示Props
export interface MessageProps {
  message?: string
  type?: 'success' | 'warning' | 'info' | 'error'
  duration?: number
  showClose?: boolean
  center?: boolean
  dangerouslyUseHTMLString?: boolean
  grouping?: boolean
  offset?: number
}

// 通知Props
export interface NotificationProps {
  title?: string
  message?: string
  type?: 'success' | 'warning' | 'info' | 'error'
  duration?: number
  showClose?: boolean
  dangerouslyUseHTMLString?: boolean
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  offset?: number
}

// 加载Props
export interface LoadingProps {
  target?: string | HTMLElement
  body?: boolean
  fullscreen?: boolean
  lock?: boolean
  text?: string
  spinner?: string
  background?: string
  customClass?: string
}

// 上传组件Props
export interface UploadProps {
  action?: string
  headers?: Record<string, any>
  data?: Record<string, any>
  name?: string
  multiple?: boolean
  drag?: boolean
  withCredentials?: boolean
  showFileList?: boolean
  accept?: string
  fileList?: UploadFile[]
  autoUpload?: boolean
  listType?: 'text' | 'picture' | 'picture-card'
  disabled?: boolean
  limit?: number
  onExceed?: (files: File[], uploadFiles: UploadFile[]) => void
  beforeUpload?: (file: File) => boolean | Promise<File | Blob | boolean>
  beforeRemove?: (file: UploadFile, uploadFiles: UploadFile[]) => boolean | Promise<boolean>
  onRemove?: (file: UploadFile, uploadFiles: UploadFile[]) => void
  onPreview?: (file: UploadFile) => void
  onSuccess?: (response: any, file: UploadFile, uploadFiles: UploadFile[]) => void
  onError?: (error: Error, file: UploadFile, uploadFiles: UploadFile[]) => void
  onProgress?: (evt: ProgressEvent, file: UploadFile, uploadFiles: UploadFile[]) => void
  onChange?: (file: UploadFile, uploadFiles: UploadFile[]) => void
}

// 上传文件类型
export interface UploadFile {
  name: string
  url?: string
  status?: 'ready' | 'uploading' | 'success' | 'fail'
  percentage?: number
  uid: number
  raw?: File
  size?: number
  response?: any
} 