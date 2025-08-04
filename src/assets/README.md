# 源码资源目录

这个目录下的文件会被 Vite 处理，支持优化和压缩。

## 目录结构：
```
src/assets/
├── images/          # 图片资源
│   ├── logo.png
│   ├── icons/
│   └── backgrounds/
├── icons/           # 图标文件
└── fonts/           # 字体文件
```

## 使用场景：
- 组件相关的图片
- 需要优化的图片
- 动态导入的图片

## 引用方式：
```vue
<template>
  <!-- 方式1：直接导入 -->
  <img :src="logoUrl" alt="Logo">
  
  <!-- 方式2：动态导入 -->
  <img :src="getImageUrl('logo.png')" alt="Logo">
</template>

<script setup lang="ts">
// 方式1：直接导入
import logoUrl from '@/assets/images/logo.png'

// 方式2：动态导入
const getImageUrl = (name: string) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}
</script>
``` 