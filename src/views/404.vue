<template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">页面不存在</h2>
      <p class="error-message">抱歉，您访问的页面不存在</p>
      <el-button type="primary" @click="goHome">返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-color);
}

.error-content {
  text-align: center;
  padding: 2rem;
}

.error-code {
  font-size: 6rem;
  color: var(--primary-color);
  margin: 0;
  font-weight: bold;
}

.error-title {
  font-size: 2rem;
  color: var(--text-color);
  margin: 1rem 0;
}

.error-message {
  color: var(--text-color);
  margin-bottom: 2rem;
  opacity: 0.7;
}
</style> 