# Pedro Luis — Portfólio de Editor de Vídeo

SPA em React + Vite criada para apresentar trabalhos de edição de vídeo com foco em desempenho, visual limpo e reprodução sob demanda.

## Stack

- React 19
- Vite 8
- CSS puro (sem framework visual pesado)
- GitHub Actions + GitHub Pages

## Rodar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie os arquivos deste projeto para a branch `main`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment → Source**, escolha **GitHub Actions**.
5. Faça um push para `main`.
6. O workflow `.github/workflows/deploy.yml` fará o build e o deploy automaticamente.

> **Importante:** se aparecer apenas “Carregando portfólio…”, confira se o GitHub Pages está em **Settings → Pages → Source → GitHub Actions**. O modo **Deploy from a branch** publica o `index.html` fonte e pode sobrescrever o build correto. Veja `GITHUB-PAGES.md`.

O `vite.config.js` usa `base: './'`, deixando os assets relativos e evitando precisar colocar manualmente o nome do repositório no código.

## Onde editar seus trabalhos

Tudo fica centralizado em:

```text
src/data/portfolio.js
```

Você pode editar:
- títulos
- descrições
- links
- softwares
- tags
- perfil/canal
- vídeos em destaque
- visualizações dos edits

## TikTok: visualizações

Os 8 vídeos de `@lgf.predo` têm o campo:

```js
viewCount: null
```

Não foram colocados números inventados. Para exibir o valor real, altere por exemplo para:

```js
viewCount: 128000
```

Quando houver números preenchidos, a seção ordena automaticamente os vídeos do maior para o menor e marca os 3 mais vistos como destaque.

## Fallback de vídeos sociais

YouTube usa iframe com `youtube-nocookie.com`.
TikTok com URL completa usa o player oficial `tiktok.com/player/v1/{id}`.
Instagram usa `/reel/{code}/embed/`.

Se Instagram/TikTok bloquear o embed no navegador, o modal sempre oferece o link original.

Para usar um arquivo local, coloque o `.mp4` em:

```text
public/media/
```

e ajuste `localFile` em `src/data/portfolio.js`.

### Short links do TikTok

Os vídeos do perfil `@predo._.0` foram enviados como links `vt.tiktok.com`, sem o ID final do vídeo. Por isso o projeto deixa um slot de MP4 local pronto para cada item e também mantém o link original clicável.

## Fotos de perfil

Por padrão, o site usa monogramas leves (WC, P, LC etc.) em vez de puxar avatares externos.

Para adicionar fotos:

1. Coloque a imagem em `public/profiles/`.
2. Em `src/data/portfolio.js`, troque:

```js
profileImage: null
```

por:

```js
profileImage: 'profiles/worldcel.jpg'
```

## Logo e favicon

O projeto inclui uma marca vetorial simples `PL` em:

```text
public/logo.svg
public/favicon.svg
```

Se você quiser usar sua logo PNG original, basta colocar por exemplo:

```text
public/logo.png
```

e substituir o componente `src/components/Logo.jsx` por uma tag `<img>` apontando para `${import.meta.env.BASE_URL}logo.png`.

Para favicon PNG, altere a linha `<link rel="icon">` em `index.html`.

## Formulário de contato

Como GitHub Pages é hospedagem estática, o formulário não usa servidor e não armazena dados. Ele monta uma mensagem personalizada com `mailto:` e também oferece WhatsApp.

Isso evita API key, backend e dependências externas. Se no futuro você quiser envio silencioso direto no navegador, será necessário adicionar um serviço de formulário ou backend.

## Animações e interação

O componente `src/components/MotionEffects.jsx` adiciona um sistema leve de motion inspirado em interfaces móveis modernas:

- entrada suave das seções conforme aparecem na tela;
- pequenos atrasos em sequência nos cards;
- inclinação muito sutil dos cards com o ponteiro em desktop;
- resposta de pressão nos botões;
- abertura suave do modal;
- barra de progresso no topo durante a rolagem;
- animação das barras de domínio das ferramentas;
- respeito automático a `prefers-reduced-motion`.

A maior parte da aparência está no final de `src/styles.css`, na seção `MOTION SYSTEM`.

## Performance

- Nenhum player social é carregado antes do clique.
- Thumbnails do YouTube usam `loading="lazy"` fora dos destaques.
- Animações próprias em CSS + `IntersectionObserver`, sem biblioteca pesada de animação.
- Sem router, porque o portfólio é uma única página com seções.
- `prefers-reduced-motion` respeitado.
- Imagens usam `decoding="async"`.

## Estrutura

```text
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── FeaturedWork.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Logo.jsx
│   ├── MotionEffects.jsx
│   ├── ProfileBadge.jsx
│   ├── ProjectCard.jsx
│   ├── ShortCollection.jsx
│   ├── Skills.jsx
│   ├── VideoModal.jsx
│   └── WorkArchive.jsx
├── data/
│   └── portfolio.js
├── App.jsx
├── main.jsx
└── styles.css
```
