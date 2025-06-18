import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/pages/about/about.html'),
        services: resolve(__dirname, 'src/pages/services/services.html')
        // добавляй другие страницы сюда
      }
    }
  }
});
