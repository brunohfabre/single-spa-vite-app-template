import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/mfe-template.tsx',
      preserveEntrySignatures: 'strict',
      output: {
        format: 'system',
        entryFileNames: 'mfe-template.js',
      },
    },
  },
  plugins: [react()],
})
