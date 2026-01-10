import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import svgr from '@svgr/rollup'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),

      '@app': path.resolve(__dirname, './src/app'),

      '@assets': path.resolve(__dirname, './src/assets'),
        '@icons': path.resolve(__dirname, './src/assets/icons'),
        '@images': path.resolve(__dirname, './src/assets/images/'),

      '@components': path.resolve(__dirname, './src/components'),

        '@footer': path.resolve(__dirname, './src/components/footer'),
        '@layout': path.resolve(__dirname, './src/components/layout'),
        '@navigation': path.resolve(__dirname, './src/components/navigation'),
        '@sections': path.resolve(__dirname, './src/components/sections'),
          '@auth': path.resolve(__dirname, './src/components/sections/auth'),
          '@home': path.resolve(__dirname, './src/components/sections/home'),
          '@newsletter': path.resolve(__dirname, './src/components/sections/newsletter'),
        '@ui': path.resolve(__dirname, './src/components/ui'),
          '@cards': path.resolve(__dirname, './src/components/ui/cards'),
          '@Carousel': path.resolve(__dirname, './src/components/ui/Carousel'),
          '@product': path.resolve(__dirname, './src/components/ui/product'),
          '@ProductCarousel': path.resolve(__dirname, './src/components/ui/ProductCarousel'),
          '@blog': path.resolve(__dirname, './src/components/ui/blog'),

      '@data': path.resolve(__dirname, './src/data'),
        '@products': path.resolve(__dirname, './src/data/products'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
})

