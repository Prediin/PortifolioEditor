# Publicar no GitHub Pages

Este projeto usa React + Vite. O GitHub Pages NÃO deve publicar diretamente os arquivos `src/` da branch.
O Vite precisa executar `npm run build` primeiro e publicar a pasta `dist/`.

## 1. Envie TODO o projeto ao GitHub

Confirme que o repositório contém também este arquivo oculto:

```text
.github/workflows/deploy.yml
```

A estrutura no GitHub deve começar aproximadamente assim:

```text
.github/
  workflows/
    deploy.yml
public/
src/
.gitignore
GITHUB-PAGES.md
index.html
package.json
vite.config.js
```

## 2. Configure o Pages

No repositório do GitHub:

1. Abra `Settings`.
2. Abra `Pages`.
3. Em `Build and deployment`, procure `Source`.
4. Selecione **GitHub Actions**.

Não use `Deploy from a branch` para o código-fonte deste projeto Vite.

## 3. Execute o deploy

Depois de enviar os arquivos:

1. Abra a aba `Actions` do repositório.
2. Abra `Deploy portfolio to GitHub Pages`.
3. Aguarde aparecer o símbolo verde de sucesso.

Se o workflow ainda não tiver iniciado, faça qualquer pequeno commit na branch `main`, ou abra o workflow e clique em `Run workflow`.

## 4. Se der erro

Abra `Actions` > execução que falhou > etapa vermelha e copie a mensagem de erro.

Erros importantes:

- `Install dependencies`: problema ao instalar os pacotes npm.
- `Build Vite application`: problema no código ou no build.
- `Deploy to GitHub Pages`: problema na configuração do Pages/permissões.

## 5. URL

Para um repositório chamado `meu-portfolio`, normalmente será:

```text
https://SEU-USUARIO.github.io/meu-portfolio/
```

O `vite.config.js` detecta automaticamente o nome do repositório durante o GitHub Actions e configura o caminho correto dos assets.
