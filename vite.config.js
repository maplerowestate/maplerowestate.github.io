// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/', // Changed to '/' for user/organization page
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      'react-simple-maps': path.resolve(__dirname, 'node_modules/react-simple-maps')
    }
  },
  server: {
    port: 3000,
  },
})
