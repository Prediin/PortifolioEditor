import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base keeps assets working both locally and inside a GitHub Pages repo subpath.
  base: './',
})
