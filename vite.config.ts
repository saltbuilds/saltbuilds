
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/SALT/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  define: {
    'process.env': {
      API_KEY: process.env.API_KEY || ''
    }
  }
});
