<template>
  <div class="home">
    <h1>Hello, World!</h1>
    <p>欢迎来到 CHBWL Gateway 门户</p>
    
    <div class="features">
      <div class="feature-card">
        <h3>🚀 现代化技术栈</h3>
        <p>基于 Vue 3 + TypeScript + Vite 构建</p>
      </div>
      
      <div class="feature-card">
        <h3>🎨 主题系统</h3>
        <p>支持明暗主题切换，自动跟随系统主题</p>
      </div>
      
      <div class="feature-card">
        <h3>📱 响应式设计</h3>
        <p>完美适配各种设备屏幕</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Home 页面组件
</script>

<style lang="scss" scoped>
.home {
  @include flex-column;
  @include flex-center;
  @include gradient-bg;
  min-height: 100vh;
  color: $white;
  padding: 2rem;
  
  h1 {
    font-size: $font-size-xl;
    margin-bottom: $spacing-sm;
    @include text-shadow;
    @include transition(transform);
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  p {
    font-size: $font-size-large;
    opacity: 0.9;
    margin-bottom: $spacing-lg;
    
    @include responsive(md) {
      font-size: $font-size-base;
    }
  }
  
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-lg;
    max-width: 800px;
    width: 100%;
    
    .feature-card {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      padding: $spacing-lg;
      text-align: center;
      @include transition;
      
      &:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-5px);
      }
      
      h3 {
        margin-bottom: $spacing-sm;
        color: $white;
        font-size: $font-size-large;
      }
      
      p {
        opacity: 0.8;
        font-size: $font-size-base;
        margin: 0;
      }
    }
  }
}
</style> 