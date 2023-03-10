import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/org-template.tsx',
      preserveEntrySignatures: 'strict',
      external: ['react', 'react-dom'],
      output: {
        format: 'system',
        entryFileNames: 'org-template.js',
      },
    },
  },
  plugins: [react()],
})
