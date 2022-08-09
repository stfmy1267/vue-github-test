import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-github-test/',
  // base: (process.env.NODE_ENV === 'poduction') ? '/vue-github-test/' : './',
  resolve: {
    // @/ によるimportをできるようにする。
    alias: {
      '@': path.resolve('__dirname', '/src')
    }
  },
  build: {
    outDir: 'docs'
  },
  plugins: [vue()]
})
