<template>
  <div class="layout-default">
    <header class="layout-header">
      <div class="header-content">
        <h1 class="logo">CHBWL Gateway</h1>
        <nav class="nav">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/about" class="nav-link">关于</router-link>
        </nav>
        <div class="header-actions">
          <el-button @click="toggleTheme" circle>
            <component :is="themeIcon" />
          </el-button>
        </div>
      </div>
    </header>
    
    <main class="layout-main">
      <router-view />
    </main>
    
    <footer class="layout-footer">
      <p>&copy; 2024 CHBWL Gateway. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { Moon, Sunny } from '@element-plus/icons-vue'

const themeStore = useThemeStore()

const themeIcon = computed(() => {
  return themeStore.currentMode === 'dark' ? Moon : Sunny
})

const toggleTheme = () => {
  themeStore.toggleMode()
}
</script>

<style scoped lang="scss">
.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-header {
  background: var(--bg-color);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
  
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
    margin: 0;
  }
  
  .nav {
    display: flex;
    gap: 2rem;
    
    .nav-link {
      color: var(--text-color);
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: all 0.3s ease;
      
      &:hover {
        background: var(--primary-color);
        color: white;
      }
      
      &.router-link-active {
        background: var(--primary-color);
        color: white;
      }
    }
  }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

.layout-main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
}

.layout-footer {
  background: var(--bg-color);
  border-top: 1px solid var(--border-color);
  padding: 1rem 0;
  text-align: center;
  color: var(--text-color);
}
</style> 