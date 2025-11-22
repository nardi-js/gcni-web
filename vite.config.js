import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'firebase-vendor': ['firebase/app', 'firebase/firestore', 'firebase/auth'],
          'motion-vendor': ['framer-motion'],
          
          // Page chunks
          'pages-home': ['./src/pages/Home.jsx'],
          'pages-berita': ['./src/pages/Berita.jsx'],
          'pages-artikel': ['./src/pages/Artikel.jsx'],
          'pages-program': ['./src/pages/Program.jsx'],
          'pages-pendaftaran': ['./src/pages/Pendaftaran.jsx'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
