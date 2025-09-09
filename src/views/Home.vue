<template>
  <div class="home-page">
    <!-- 轮播图区域 -->
    <section class="hero-section">
      <swiperBanner :items="bannerItems" />
    </section>
    
    <!-- 内容区域 -->
    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <!-- 特色功能 -->
          <div class="feature-section">
            <h2 class="section-title">核心功能</h2>
            <div class="features-grid">
              <div class="feature-card" v-for="feature in features" :key="feature.id">
                <div class="feature-icon">
                  <component :is="feature.icon" />
                </div>
                <h3 class="feature-title">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
              </div>
            </div>
          </div>
          
          <!-- 统计数据 -->
          <div class="stats-section">
            <h2 class="section-title">平台数据</h2>
            <div class="stats-grid">
              <div class="stat-item" v-for="stat in stats" :key="stat.id">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import swiperBanner from '@components/swiperBanner.vue'
import { bannerData } from '@constants/index'
import { 
  Promotion, 
  Lock, 
  Lightning, 
  User, 
  Connection, 
  Key 
} from '@element-plus/icons-vue'

// 轮播图数据
const bannerItems = ref(bannerData)

// 特色功能数据
const features = ref([
  {
    id: 1,
    icon: Promotion,
    title: '高性能',
    description: '基于最新技术栈，支持高并发访问，响应时间毫秒级'
  },
  {
    id: 2,
    icon: Lock,
    title: '安全可靠',
    description: '多层次安全防护，企业级安全保障，7x24小时监控'
  },
  {
    id: 3,
    icon: Lightning,
    title: '智能路由',
    description: '智能负载均衡，自动故障转移，确保服务高可用'
  },
  {
    id: 4,
    icon: User,
    title: '易于管理',
    description: '可视化配置界面，丰富的监控指标，简化运维管理'
  },
  {
    id: 5,
    icon: Connection,
    title: '多协议支持',
    description: '支持HTTP、HTTPS、WebSocket等多种协议接入'
  },
  {
    id: 6,
    icon: Key,
    title: '权限控制',
    description: '细粒度权限管理，支持多种认证方式，灵活配置'
  }
])

// 统计数据
const stats = ref([
  {
    id: 1,
    number: '99.9%',
    label: '服务可用性'
  },
  {
    id: 2,
    number: '< 10ms',
    label: '平均响应时间'
  },
  {
    id: 3,
    number: '1000+',
    label: '企业用户'
  },
  {
    id: 4,
    number: '24/7',
    label: '技术支持'
  }
])
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
}

.hero-section {
  width: 100%;
  margin-bottom: 4rem;
}

.content-section {
  padding: 4rem 0;
  background: var(--bg-color);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-grid {
  display: grid;
  gap: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 2px;
  }
}

// 特色功能区域
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: var(--primary-color);
    
    &::before {
      transform: scaleX(1);
    }
  }
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.feature-description {
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
}

// 统计数据区域
.stats-section {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 16px;
  padding: 3rem 2rem;
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 500;
}

// 响应式设计
@media (max-width: 768px) {
  .hero-section {
    margin-bottom: 2rem;
  }
  
  .content-section {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .content-grid {
    gap: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  
  .stats-section {
    padding: 2rem 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}
</style>