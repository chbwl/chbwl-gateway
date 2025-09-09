<template>
  <div class="image-detail-container">
    <!-- 图片容器 -->
    <div class="image-wrapper" v-if="imageData">
      <img 
        :src="imageData.image" 
        :alt="`图片详情 - ${imageData.id}`"
        class="detail-image"
      />
      
      <!-- 图片信息 -->
      <div class="image-info">
        <h3 class="image-title">{{ imageData.id }}</h3>
      </div>
    </div>
    
    <!-- 加载状态 -->
    <div v-else-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>
    
    <!-- 错误状态 -->
    <div v-else class="error-container">
      <div class="error-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h3>图片未找到</h3>
      <p>请检查链接是否正确</p>
      <button class="retry-button" @click="goBack">返回</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { bannerData } from '@/constants/banner'
import type { BannerItem } from '@/types'

export default defineComponent({
  name: 'ImageDetail',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const imageData = ref<BannerItem | null>(null)
    const loading = ref(true)
    
    // 获取图片数据
    const fetchImageData = async () => {
      try {
        loading.value = true
        const id = route.params.id as string
        
        // 模拟异步加载
        await new Promise(resolve => setTimeout(resolve, 300))
        
        const data = bannerData.find(item => item.id === id)
        if (data) {
          imageData.value = data
        } else {
          throw new Error(`未找到ID为 ${id} 的轮播图数据`)
        }
      } catch (error) {
        console.error('获取图片数据失败:', error)
        imageData.value = null
      } finally {
        loading.value = false
      }
    }
    
    // 返回上一页
    const goBack = () => {
      router.back()
    }
    
    // 键盘事件处理
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        goBack()
      }
    }
    
    onMounted(() => {
      fetchImageData()
      document.addEventListener('keydown', handleKeydown)
      // 禁用页面滚动
      document.body.style.overflow = 'hidden'
    })
    
    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown)
      // 恢复页面滚动
      document.body.style.overflow = 'auto'
    })
    
    return {
      imageData,
      loading,
      goBack
    }
  }
})
</script>

<style lang="scss" scoped>
.image-detail-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
}

.image-wrapper {
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.detail-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}


.image-info {
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
}

.image-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.image-description {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.loading-container,
.error-container {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-icon {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 16px;
}

.error-container h3 {
  font-size: 1.5rem;
  margin: 0 0 8px 0;
}

.error-container p {
  opacity: 0.8;
  margin: 0 0 24px 0;
}

.retry-button {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
}

// 响应式设计
@media (max-width: 768px) {
  .image-wrapper {
    max-width: 98vw;
    max-height: 98vh;
  }
  
  .image-info {
    bottom: -60px;
  }
  
  .image-title {
    font-size: 1.2rem;
  }
  
  .image-description {
    font-size: 0.8rem;
  }
}
</style>
