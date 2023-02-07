import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/org-template.tsx',
      preserveEntrySignatures: 'strict',
      output: {
        format: 'system',
        entryFileNames: 'org-template.js',
      },
    },
  },
  plugins: [react()],
})
