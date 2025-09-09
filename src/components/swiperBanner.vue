<template>
  <div class="swiper-banner-wrapper">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="false"
      :navigation="{
        nextEl: '.swiper-button-next-banner',
        prevEl: '.swiper-button-prev-banner',
      }"
      :effect="'fade'"
      :speed="800"
      class="swiper-banner-swiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in items" :key="item.id">
        <div class="banner-slide-container" @click="handleImageClick(item.id)">
          <img 
            :src="item.image" 
            :alt="`轮播图 ${index + 1}`"
            class="banner-slide-image"
            draggable="false"
          />
          <div class="banner-slide-overlay"></div>
        </div>
      </swiper-slide>
    </swiper>
    
    <!-- 自定义导航按钮 -->
    <div class="swiper-button-prev-banner">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
    <div class="swiper-button-next-banner">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
    <!-- 自定义分页器 -->
    <div class="custom-pagination">
      <div 
        v-for="(_, index) in items" 
        :key="index"
        class="custom-bullet"
        :class="{ active: activeIndex === index }"
        @mouseenter="handleBulletHover(index)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import type { BannerItem } from '@/types'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

export default defineComponent({
  name: 'SwiperBanner',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    items: {
      type: Array as () => BannerItem[],
      required: true
    }
  },
  setup() {
    const router = useRouter()
    const modules = [Autoplay, Pagination, Navigation, EffectFade]
    const swiperRef = ref()
    const activeIndex = ref(0)
    
    const onSwiper = (swiper: any) => {
      swiperRef.value = swiper
    }
    
    const onSlideChange = (swiper: any) => {
      activeIndex.value = swiper.realIndex
    }
    
    // 添加hover切换功能
    const handleBulletHover = (index: number) => {
      if (swiperRef.value) {
        swiperRef.value.slideTo(index)
        activeIndex.value = index
      }
    }
    
    // 处理图片点击事件
    const handleImageClick = (id: string) => {
      router.push(`/image/${id}`)
    }
    
    return {
      modules,
      onSwiper,
      onSlideChange,
      handleBulletHover,
      handleImageClick,
      activeIndex
    }
  }
})
</script>

<style lang="scss" scoped>
.swiper-banner-wrapper {
  position: relative;
  width: 100%;
  height: 650px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.swiper-banner-swiper {
  width: 100%;
  height: 100%;
}

.banner-slide-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.banner-slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
}

.banner-slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 1;
}



// 自定义导航按钮样式
:deep(.swiper-button-prev-banner),
:deep(.swiper-button-next-banner) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-50%) scale(1.05);
  }
  
  &.swiper-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
    
    &:hover {
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.3);
    }
  }
}

:deep(.swiper-button-prev-banner) {
  left: 20px;
}

:deep(.swiper-button-next-banner) {
  right: 20px;
}

// 自定义分页器样式
.custom-pagination {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 10;
}

.custom-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.7;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: scale(1.4);
    opacity: 1;
  }
  
  &.active {
    background: white;
    transform: scale(1.2);
    opacity: 1;
  }
}


// 响应式设计
@media (max-width: 768px) {
  .swiper-banner-wrapper {
    height: 450px;
  }
  
  
  // 移动端隐藏左右切换按钮
  :deep(.swiper-button-prev-banner),
  :deep(.swiper-button-next-banner) {
    display: none;
  }
}
</style>