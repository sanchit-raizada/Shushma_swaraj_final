import { defineConfig } from 'vite'

export default defineConfig({
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
         about: './about-us.html'  
      }
    }
  },
  server: {
    port: 3000
  }
})