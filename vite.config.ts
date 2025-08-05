import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  plugins: [
    vue(),
    // 自动导入API
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core'
      ],
      dts: 'src/config/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      }
    }),
    // 组件自动导入
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'src/config/components.d.ts',
      dirs: ['src/components', 'src/views'], // 明确指定扫描目录
      extensions: ['vue'], // 只扫描vue文件
      deep: true, // 深度扫描子目录
      include: [/\.vue$/, /\.vue\?vue/], // 只包含vue文件
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/] // 排除目录
    }),
    // 文件路由
    Pages({
      dirs: 'src/views',
      extensions: ['vue']
    }),
    // 布局系统
    Layouts({
      layoutsDirs: 'src/components/layouts',
      defaultLayout: 'default'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@views': resolve(__dirname, 'src/views'),
      '@stores': resolve(__dirname, 'src/stores'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@types': resolve(__dirname, 'src/types'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@apis': resolve(__dirname, 'src/apis'),
      '@config': resolve(__dirname, 'src/config')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/variables.scss" as *;
          @use "@/styles/mixins.scss" as *;
        `
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          utils: ['lodash']
        }
      }
    }
  },
  define: {
    __VUE_PROD_DEVTOOLS__: false
  }
}) 