# GitHub Pages — configuração correta deste portfólio

Este projeto usa **React + Vite**. O arquivo `index.html` que fica na raiz do repositório é um arquivo-fonte para o Vite; ele **não deve ser publicado diretamente** pelo modo "Deploy from a branch".

## O problema que foi encontrado no repositório

No repositório `Prediin/PortifolioEditor` estavam aparecendo dois workflows diferentes:

- `Deploy portfolio to GitHub Pages` — o workflow correto deste projeto;
- `pages-build-deployment` — workflow automático criado quando Pages está configurado para publicar diretamente uma branch.

O primeiro workflow estava terminando com sucesso e gerando o build do Vite. Depois, o workflow automático da branch também executava e podia publicar por cima o `index.html` fonte. Como esse arquivo aponta para `/src/main.jsx`, o navegador não recebe o bundle compilado e a página fica presa em **"Carregando portfólio…"**.

## Ajuste obrigatório no GitHub

Faça uma única vez:

1. Abra o repositório no GitHub.
2. Entre em **Settings**.
3. No menu lateral, abra **Pages**.
4. Em **Build and deployment** → **Source**, escolha **GitHub Actions**.
5. Não deixe **Deploy from a branch**.
6. Vá até **Actions**.
7. Abra `Deploy portfolio to GitHub Pages`.
8. Execute novamente o workflow ou faça um novo `git push`.

Depois disso, o workflow automático `pages-build-deployment` deixa de ser o método de publicação do site e o build correto em `dist/` passa a ser usado.

## O workflow agora faz verificações extras

`.github/workflows/deploy.yml` agora:

- usa `npm ci` para reproduzir exatamente o `package-lock.json`;
- verifica o modo atual do GitHub Pages e mostra um aviso se ainda estiver em `legacy`/branch;
- roda `npm run build`;
- confirma que `dist/index.html` existe;
- falha se o arquivo final ainda apontar para `/src/main.jsx`;
- publica somente a pasta `dist`.

## Teste antes de enviar

No computador:

```bash
npm install
npm run build
npm run preview
```

Se `npm run build` terminar sem erro, a pasta `dist/` será criada localmente. Não é necessário enviar a pasta `dist` ao GitHub quando o Pages está configurado para **GitHub Actions**.
