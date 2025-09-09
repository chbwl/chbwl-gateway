<template>
  <div class="contact-page">
    <div class="container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">联系我们</h1>
        <p class="page-subtitle">我们期待与您建立联系，为您提供专业的技术支持和服务</p>
      </div>
      
      <!-- 联系信息卡片 -->
      <div class="contact-cards">
        <div class="contact-card">
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2"/>
              <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="card-title">技术支持</h3>
          <p class="card-description">专业的技术团队为您提供7x24小时技术支持服务</p>
          <div class="card-content">
            <p><strong>服务时间：</strong>7x24小时</p>
            <p><strong>响应时间：</strong>&lt; 1小时</p>
            <p><strong>联系方式：</strong>support@chbwl.com</p>
          </div>
        </div>
        
        <div class="contact-card">
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h3 class="card-title">商务合作</h3>
          <p class="card-description">欢迎与我们建立长期合作关系，共创美好未来</p>
          <div class="card-content">
            <p><strong>合作咨询：</strong>business@chbwl.com</p>
            <p><strong>联系电话：</strong>400-888-8888</p>
            <p><strong>工作时间：</strong>周一至周五 9:00-18:00</p>
          </div>
        </div>
        
        <div class="contact-card">
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h3 class="card-title">意见反馈</h3>
          <p class="card-description">您的宝贵意见是我们持续改进的动力</p>
          <div class="card-content">
            <p><strong>反馈邮箱：</strong>feedback@chbwl.com</p>
            <p><strong>产品建议：</strong>product@chbwl.com</p>
            <p><strong>问题报告：</strong>bug@chbwl.com</p>
          </div>
        </div>
      </div>
      
      <!-- 公司信息 -->
      <div class="company-info">
        <div class="info-section">
          <h3 class="info-title">公司地址</h3>
          <p class="info-content">北京市朝阳区科技园区创新大厦A座1001室</p>
        </div>
        
        <div class="info-section">
          <h3 class="info-title">官方网站</h3>
          <p class="info-content">
            <a href="https://www.chbwl.com" target="_blank" rel="noopener noreferrer">
              https://www.chbwl.com
            </a>
          </p>
        </div>
        
        <div class="info-section">
          <h3 class="info-title">关注我们</h3>
          <div class="social-links">
            <a href="#" class="social-link" title="微信公众号">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" class="social-link" title="微博">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" class="social-link" title="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- 待开发提示 -->
      <div class="coming-soon">
        <div class="coming-soon-content">
          <h3 class="coming-soon-title">更多功能即将上线</h3>
          <p class="coming-soon-description">
            我们正在开发在线客服、实时聊天、工单系统等更多便捷的联系方式，
            敬请期待！
          </p>
          <div class="coming-soon-features">
            <span class="feature-tag">在线客服</span>
            <span class="feature-tag">实时聊天</span>
            <span class="feature-tag">工单系统</span>
            <span class="feature-tag">视频会议</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Contact 页面组件
</script>

<style lang="scss" scoped>
.contact-page {
  min-height: 100vh;
  padding: 4rem 0;
  background: var(--bg-color);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 2px;
  }
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--text-color);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.contact-card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.5rem;
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

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.card-description {
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.card-content {
  text-align: left;
  
  p {
    margin-bottom: 0.5rem;
    color: var(--text-color);
    
    strong {
      color: var(--primary-color);
    }
  }
}

.company-info {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 4rem;
  color: white;
}

.info-section {
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.info-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.info-content {
  opacity: 0.9;
  line-height: 1.6;
  
  a {
    color: white;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    
    &:hover {
      border-bottom-color: white;
    }
  }
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
}

.coming-soon {
  background: var(--bg-color);
  border: 2px dashed var(--border-color);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
}

.coming-soon-content {
  max-width: 600px;
  margin: 0 auto;
}

.coming-soon-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.coming-soon-description {
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.coming-soon-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.feature-tag {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

// 响应式设计
@media (max-width: 768px) {
  .contact-page {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .page-header {
    margin-bottom: 2rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .contact-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .contact-card {
    padding: 2rem;
  }
  
  .company-info {
    padding: 2rem;
    margin-bottom: 2rem;
  }
  
  .coming-soon {
    padding: 2rem;
  }
  
  .coming-soon-features {
    gap: 0.25rem;
  }
  
  .feature-tag {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>
