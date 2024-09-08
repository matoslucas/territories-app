import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";`, // other configurations here
        // Disable warnings
        quietDeps: true,  // This silences warnings from dependencies like Bootstrap
      },
    },
  },
})
