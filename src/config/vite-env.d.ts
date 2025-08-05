/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 路径别名类型声明
declare module '@/stores' {
  export { useCounterStore } from '../stores/counter'
}

declare module '@/stores/*' {
  const store: any
  export default store
} 