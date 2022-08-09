import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: (process.env.NODE_ENV === 'poduction')
    ? '/vue-github-test/' : './',
  build: {
    outDir: 'docs'
  },
  plugins: [vue()]
})
