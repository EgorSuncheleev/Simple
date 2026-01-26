import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/style/global/mixins.scss" as *;`, 
      }
    }
  }
});