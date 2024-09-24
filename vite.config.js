import { defineConfig } from 'vite';

export default defineConfig({
  base: './', 
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',   
        about: 'about.html',
        contact: 'contact.html'
      },
      output: {
        assetFileNames: 'assets/[name].[hash][extname]', // Настройка имен ассетов
      },
    },
  },
});
