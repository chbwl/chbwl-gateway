# chbwl-gateway
门户

## 技术栈
- Vue 3
- TypeScript
- Vite
- Vue Router 4
- Pinia
- SCSS

## 开发命令

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

# 清理并重新安装
pnpm clean
pnpm reinstall
```

## 项目结构
```
src/
├── main.ts          # 应用入口
├── App.vue          # 根组件
├── router/          # 路由配置
├── views/           # 页面组件
├── components/      # 公共组件
├── styles/          # SCSS 样式文件
│   ├── variables.scss  # 全局变量
│   └── mixins.scss     # 混合器
├── assets/          # 静态资源
│   ├── images/      # 图片资源
│   └── icons/       # 图标文件
├── utils/           # 工具函数
├── types/           # 类型定义
└── style.scss       # 全局样式

public/              # 公共资源
├── favicon.ico      # 网站图标
└── images/          # 静态图片
```
