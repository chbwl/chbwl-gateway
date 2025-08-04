<template>
  <div class="image-example">
    <h3>图片使用示例</h3>
    
    <!-- 方式1：直接导入 -->
    <div class="image-section">
      <h4>直接导入图片</h4>
      <img :src="logoUrl" alt="Logo" class="example-image">
    </div>
    
    <!-- 方式2：动态导入 -->
    <div class="image-section">
      <h4>动态导入图片</h4>
      <img :src="getImageUrl('example.png')" alt="Example" class="example-image">
    </div>
    
    <!-- 方式3：公共资源 -->
    <div class="image-section">
      <h4>公共资源图片</h4>
      <img src="/images/public-logo.png" alt="Public Logo" class="example-image">
    </div>
    
    <!-- 方式4：CSS 背景图片 -->
    <div class="image-section">
      <h4>CSS 背景图片</h4>
      <div class="bg-image"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 方式1：直接导入（需要实际图片文件）
// import logoUrl from '@/assets/images/logo.png'

// 方式2：动态导入
const getImageUrl = (name: string): string => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

// 临时使用占位图片
const logoUrl = 'https://via.placeholder.com/200x100/667eea/ffffff?text=Logo'
</script>

<style lang="scss" scoped>
.image-example {
  padding: $spacing-lg;
  
  h3 {
    color: $primary-color;
    margin-bottom: $spacing-md;
  }
  
  .image-section {
    margin-bottom: $spacing-lg;
    
    h4 {
      color: $text-color;
      margin-bottom: $spacing-sm;
    }
  }
  
  .example-image {
    max-width: 200px;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .bg-image {
    width: 200px;
    height: 100px;
    background-image: url('https://via.placeholder.com/200x100/764ba2/ffffff?text=Background');
    background-size: cover;
    background-position: center;
    border-radius: 4px;
  }
}
</style> 