import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets/',
      '@components': '/src/components/index.ts',
      '@pages': '/src/pages/index.ts',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react()],
});
