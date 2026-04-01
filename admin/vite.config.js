import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // allow external access (important for server/VM)
    port: 3097,
    strictPort: true   // fail if port busy (no random port)
  }
})

