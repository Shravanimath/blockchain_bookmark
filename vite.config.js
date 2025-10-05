import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["ethers"]
  },
  build: {
    rollupOptions: {
      external: []
    }
  },
  base: process.env.VITE_BASE_PATH || "./",
})
