// client/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // backend we made in Week 6 runs on 5001
      '/api': 'http://127.0.0.1:5001'
    }
  }
})
