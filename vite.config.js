import { defineConfig } from 'vite';
import { resolve } from 'path';

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProd ? '/video-lesson/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about/about.html'),
        // добавляй другие страницы сюда
      }
    }
  }
});
