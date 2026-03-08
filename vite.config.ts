import relay from 'vite-plugin-relay'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [relay, react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (id.includes('/node_modules/lexical/') || id.includes('/node_modules/@lexical/')) {
            return 'vendor-lexical'
          }
        },
      },
    },
  },
})
