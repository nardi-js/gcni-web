import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks - separate large libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'firebase-core': ['firebase/app', 'firebase/analytics'],
          'firebase-auth': ['firebase/auth'],
          'firebase-firestore': ['firebase/firestore'],
          'firebase-storage': ['firebase/storage'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase limit to 600KB
  },
})
