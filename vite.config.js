import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Caminhos relativos tornam o build portátil no GitHub Pages,
  // independentemente do nome do repositório.
  base: './',
})
