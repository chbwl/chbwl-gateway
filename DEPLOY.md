# Vercel 部署指南

## 快速开始

### 1. 安装 Vercel CLI
```bash
npm install -g vercel
```

### 2. 登录 Vercel
```bash
vercel login
```

### 3. 部署项目

#### 方法一：使用脚本（推荐）
```bash
# 部署到生产环境
pnpm deploy:prod

# 部署到预览环境
pnpm deploy:preview

# 或者直接使用脚本
./scripts/deploy.sh production
```

#### 方法二：直接使用 Vercel CLI
```bash
# 首次部署
vercel

# 部署到生产环境
vercel --prod

# 预览部署
vercel
```

## 常用命令

### 查看部署状态
```bash
vercel ls
```

### 查看项目信息
```bash
vercel info
```

### 管理域名
```bash
# 查看域名列表
vercel domains

# 添加自定义域名
vercel domains add your-domain.com

# 删除域名
vercel domains rm your-domain.com
```

### 环境变量管理
```bash
# 添加环境变量
vercel env add VITE_API_URL

# 查看环境变量
vercel env ls

# 删除环境变量
vercel env rm VITE_API_URL
```

### 查看部署日志
```bash
vercel logs
```

## 配置说明

### vercel.json
- `buildCommand`: 构建命令
- `outputDirectory`: 输出目录
- `framework`: 框架类型
- `rewrites`: URL重写规则（支持SPA路由）
- `headers`: 自定义HTTP头

## 域名配置

1. 在腾讯云DNS控制台添加CNAME记录：
   - **类型**: CNAME
   - **主机记录**: @ (或子域名)
   - **记录值**: 你的Vercel域名 (如: your-project.vercel.app)

2. 在Vercel控制台添加自定义域名：
   ```bash
   vercel domains add your-domain.com
   ```

## 自动部署

项目已配置为支持自动部署：
- 推送到 `main` 分支会自动触发生产环境部署
- 创建Pull Request会触发预览环境部署

## 故障排除

### 构建失败
1. 检查 `pnpm build` 是否成功
2. 查看构建日志：`vercel logs`
3. 确保所有依赖都已安装

### 路由问题
确保 `vercel.json` 中的 `rewrites` 配置正确，支持SPA路由。

### 环境变量
如果项目需要环境变量，请在Vercel控制台或使用CLI设置：
```bash
vercel env add VITE_API_URL production
```

## 性能优化

- 静态资源已配置缓存头
- 启用了代码分割和懒加载
- 配置了安全头 