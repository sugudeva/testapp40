import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // React 19 compiler runtime workaround
      'react/compiler-runtime': 'react/jsx-runtime',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
