# 公共资源目录

这个目录下的文件会被直接复制到构建输出目录，不会被处理。

## 使用场景：
- 网站图标 (favicon.ico)
- 静态图片
- 第三方库文件
- robots.txt
- manifest.json

## 引用方式：
```html
<!-- 在模板中 -->
<img src="/logo.png" alt="Logo">

<!-- 在 CSS 中 -->
.logo {
  background-image: url('/logo.png');
}
``` 