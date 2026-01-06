import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animations': ['gsap']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    cssMinify: 'lightningcss',
    assetsInlineLimit: 4096,
    reportCompressedSize: false
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      minify: true
    }
  }
});
