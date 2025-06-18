import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/pages/about/about.html'),
        services: resolve(__dirname, 'src/pages/services/services.html'),
				merits: resolve(__dirname, 'src/pages/merits/merits.html'),
				studios: resolve(__dirname, 'src/pages/studios/studios.html')
        // добавляй другие страницы сюда
      }
    }
  }
});
