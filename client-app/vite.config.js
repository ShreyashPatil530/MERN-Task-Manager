import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // --- ADD THIS SERVER CONFIGURATION ---
  server: {
    proxy: {
      // This proxies any request starting with /api
      // from localhost:5173 to localhost:5001
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true, // Recommended for virtual hosts
        secure: false,      // Recommended if backend is not https
      }
    }
  }
})