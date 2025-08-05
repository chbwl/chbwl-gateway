# CHBWL Gateway

一个现代化的Vue 3 + TypeScript + Vite项目，集成了完整的开发工具链和最佳实践。

## 🚀 特性

### 开发体验
- ⚡️ **Vite** - 极速的开发服务器和构建工具
- 🔥 **Vue 3** - 渐进式JavaScript框架
- 📝 **TypeScript** - 类型安全的JavaScript
- 🎨 **Element Plus** - Vue 3的组件库
- 🎯 **自动导入** - 自动导入Vue API和组件
- 📁 **文件路由** - 基于文件系统的路由
- 🎨 **主题系统** - 支持明暗主题切换

### 状态管理
- 🗂️ **Pinia** - Vue的状态管理库
- 💾 **持久化存储** - 自动保存状态到localStorage

### 网络请求
- 🌐 **Axios** - HTTP客户端
- 🔄 **请求拦截器** - 统一的错误处理和loading状态

### 代码质量
- 📏 **ESLint** - 代码质量检查
- 💅 **Prettier** - 代码格式化

## 📦 安装

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview

# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 类型检查
pnpm type-check
```

## 🏗️ 项目结构

```
src/
├── apis/            # API接口
│   ├── upload.ts    # 文件上传API
│   ├── http.ts      # HTTP客户端配置
│   └── index.ts     # API统一导出
├── assets/          # 静态资源
├── components/      # 公共组件
│   └── layouts/     # 布局组件
├── router/          # 路由配置
├── stores/          # 状态管理
├── styles/          # 样式文件
├── types/           # 类型定义
├── utils/           # 工具函数
├── views/           # 页面组件
├── App.vue          # 根组件
└── main.ts          # 入口文件
```

## 🔧 配置说明

### 环境变量
项目使用Vite的环境变量系统，支持以下变量：

- `VITE_APP_TITLE` - 应用标题
- `VITE_API_BASE_URL` - API基础URL
- `VITE_API_TIMEOUT` - API超时时间
- `VITE_DEV_MODE` - 开发模式
- `VITE_ENABLE_MOCK` - 启用Mock数据

### 主题系统
项目支持明暗主题切换，主题配置存储在localStorage中：

- 支持 `light`、`dark`、`auto` 三种模式
- 自动跟随系统主题
- 支持自定义主色调
- 支持字体大小调整
- 支持紧凑模式

### 自动导入
项目配置了自动导入功能：

- Vue 3 Composition API
- Vue Router
- Pinia
- VueUse
- Element Plus组件

## 🎨 主题定制

项目使用CSS变量实现主题系统，可以通过以下方式定制：

```scss
// 在组件中使用主题变量
.my-component {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}
```

## 📝 开发规范

### 代码风格
- 使用ESLint进行代码检查
- 使用Prettier进行代码格式化
- 遵循Vue 3 Composition API最佳实践

### 提交规范
- 使用语义化的提交信息
- 提交前自动运行代码检查
- 支持自动生成更新日志

## 🚀 部署

项目支持多种部署方式：

### 静态部署
```bash
pnpm build
# 将dist目录部署到静态服务器
```

### Docker部署
```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## �� 许可证

MIT License
