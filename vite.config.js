import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function getBasePath() {
  const repository = process.env.GITHUB_REPOSITORY

  if (!repository) {
    return '/'
  }

  const repositoryName = repository.split('/')[1]

  // Repositórios no formato usuario.github.io são publicados na raiz.
  if (repositoryName?.endsWith('.github.io')) {
    return '/'
  }

  // Projetos comuns do GitHub Pages ficam em /nome-do-repositorio/.
  return `/${repositoryName}/`
}

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
})
