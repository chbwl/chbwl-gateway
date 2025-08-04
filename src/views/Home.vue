<template>
  <div class="home">
    <h1>Hello, World!</h1>
    <p>欢迎来到 CHBWL Gateway 门户</p>
    
    <!-- Pinia 计数器示例 -->
    <div class="counter">
      <h3>计数器: {{ counter.count }}</h3>
      <button @click="counter.increment">+1</button>
      <button @click="counter.decrement">-1</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores'

// 使用 Pinia store
const counter = useCounterStore()
</script>

<style lang="scss" scoped>
// 全局变量和混合器已在 style.scss 中导入，这里可以直接使用

.home {
  @include flex-column;
  @include flex-center;
  @include gradient-bg;
  height: 100vh;
  color: $white;
  
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
    
    @include responsive(md) {
      font-size: $font-size-base;
    }
  }
  
  .counter {
    margin-top: $spacing-lg;
    text-align: center;
    
    h3 {
      margin-bottom: $spacing-sm;
      color: $white;
    }
    
    button {
      margin: 0 $spacing-xs;
      padding: $spacing-xs $spacing-sm;
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: $white;
      border-radius: 4px;
      cursor: pointer;
      @include transition;
      
      &:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.05);
      }
    }
  }
}
</style> 