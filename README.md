# Pedro Luis — Portfólio de Editor de Vídeo

Portfólio profissional de **Pedro Luis Bezerra Lima**, criado para apresentar trabalhos de edição de vídeo, motion design e conteúdo para redes sociais. O site reúne projetos para clientes e produções autorais em uma experiência visual, responsiva e focada em levar potenciais clientes da apresentação do trabalho até o pedido de orçamento.

O projeto é uma **Single Page Application (SPA)** feita em React. Todo o conteúdo aparece em uma única página, com navegação por seções, filtros e reprodução de vídeos sem recarregar o documento.

## Objetivo

O site funciona como vitrine profissional e canal de contato. Seus objetivos são:

- demonstrar experiência com vídeos longos, Shorts, Reels, TikTok, gameplay, conteúdo comercial e motion design;
- apresentar projetos reais de clientes e trabalhos autorais;
- informar as ferramentas usadas e o nível de domínio de cada uma;
- explicar a abordagem criativa aplicada à edição;
- facilitar pedidos de orçamento por Gmail, WhatsApp ou aplicativo de e-mail;
- manter uma experiência rápida mesmo com vários vídeos incorporados.

## Funcionalidades

### Apresentação e navegação

- cabeçalho responsivo com menu para telas menores;
- seção inicial com chamada profissional e projeto principal em destaque;
- navegação por âncoras para trabalhos, apresentação, ferramentas e contato;
- layout adaptado para computadores, tablets e celulares;
- identidade visual própria, com logo, favicon, tipografia, cores e componentes reutilizáveis.

### Portfólio

- seleção de trabalhos em destaque;
- arquivo geral com filtros por projetos de clientes, autorais, long-form e short-form;
- cards com título, cliente, descrição, software, tags, miniatura e link original;
- coleções horizontais de vídeos verticais;
- ordenação automática dos edits por quantidade de visualizações;
- destaque dos três vídeos mais assistidos quando há dados disponíveis.

### Reprodução de vídeo

Os vídeos são carregados em um modal somente após a interação do visitante, evitando abrir todos os players externos junto com a página.

- **YouTube:** player com `youtube-nocookie.com`;
- **TikTok:** player oficial criado a partir do ID do vídeo;
- **Instagram:** incorporação do Reel;
- **arquivos locais:** suporte opcional a MP4 dentro de `public/media/`;
- **fallback:** acesso ao conteúdo original quando a plataforma bloqueia a incorporação;
- fechamento pelo botão, pela tecla `Esc` ou por clique fora do conteúdo;
- bloqueio temporário da rolagem enquanto o player está aberto.

### Contato

O formulário organiza nome, contato, tipo de projeto, orçamento, prazo e descrição em uma mensagem pronta. O visitante pode:

- abrir uma nova mensagem no Gmail Web;
- enviar a mesma mensagem pelo WhatsApp;
- usar o cliente de e-mail configurado no dispositivo;
- copiar o endereço de e-mail com um clique.

O formulário não possui backend e não armazena informações. Os dados permanecem no navegador e são usados somente para montar os links de contato.

### Movimento e experiência

- entrada progressiva das seções com `IntersectionObserver`;
- animações em sequência nos cards;
- leve inclinação com o ponteiro em dispositivos compatíveis;
- indicador de progresso de rolagem;
- animação das barras de domínio das ferramentas;
- detecção de elementos inseridos dinamicamente com `MutationObserver`;
- respeito a `prefers-reduced-motion`;
- tela amigável para erros de renderização por meio de um React Error Boundary.

## Tecnologias e linguagens

| Tecnologia | Uso no projeto |
| --- | --- |
| **HTML5** | Documento inicial, metadados, SEO básico e fallback de carregamento |
| **CSS3** | Layout, responsividade, identidade visual, animações e interações |
| **JavaScript (ES Modules)** | Dados, filtros, players, formulário e comportamento da interface |
| **React 19** | Componentização, estado e renderização da aplicação |
| **React DOM** | Montagem da aplicação no navegador |
| **Vite 8** | Servidor de desenvolvimento e build otimizado |
| **GitHub Actions** | Automação do build e do deploy |
| **GitHub Pages** | Hospedagem estática |

O projeto usa CSS próprio, sem framework visual ou biblioteca externa de animação. Também não utiliza roteador, banco de dados ou servidor, pois toda a experiência acontece em uma única página estática.

## Arquitetura

```text
PortifolioEditor/
├── .github/workflows/
│   └── deploy.yml              # Build e publicação no GitHub Pages
├── public/
│   ├── media/                  # Vídeos locais opcionais
│   ├── profiles/               # Fotos dos perfis
│   ├── thumbnails/             # Capas personalizadas
│   ├── favicon.png
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FeaturedWork.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Logo.jsx
│   │   ├── MotionEffects.jsx
│   │   ├── ProfileBadge.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ShortCollection.jsx
│   │   ├── Skills.jsx
│   │   ├── VideoModal.jsx
│   │   └── WorkArchive.jsx
│   ├── data/
│   │   └── portfolio.js        # Conteúdo central do site
│   ├── App.jsx                 # Seções e estado do player
│   ├── main.jsx                # Entrada do React e tratamento de erros
│   ├── refinements.css         # Ajustes visuais complementares
│   └── styles.css              # Estilos principais
├── index.html                  # Documento base e metadados
├── package.json                # Dependências e scripts
└── vite.config.js              # Configuração do Vite
```

Os dados pessoais, serviços, ferramentas, filtros e projetos ficam centralizados em `src/data/portfolio.js`. Os componentes recebem essas informações por propriedades, mantendo conteúdo e apresentação separados. O `App.jsx` controla qual projeto está ativo no modal e distribui os dados entre as seções.

## Executar localmente

### Pré-requisitos

- Node.js compatível com Vite 8;
- npm.

```bash
git clone https://github.com/Prediin/PortifolioEditor.git
cd PortifolioEditor
npm install
npm run dev
```

O terminal exibirá o endereço local. Para gerar e testar a versão de produção:

```bash
npm run build
npm run preview
```

O build é criado em `dist/` e não deve ser editado manualmente.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão otimizada em `dist/` |
| `npm run preview` | Abre uma prévia local do build |

## Personalização do conteúdo

### Perfil, serviços e ferramentas

Edite `src/data/portfolio.js`. O arquivo contém:

- `profile`: nome, profissão, apresentação e contatos;
- `skills`: softwares, plataforma e percentual de domínio;
- `services`: tipos de serviço oferecidos;
- `projects`: portfólio principal;
- `brawlShorts` e `motionEdits`: coleções de vídeos verticais;
- `filters`: opções do arquivo de trabalhos.

### Adicionar um projeto

Inclua um objeto no array `projects`, seguindo a estrutura dos itens existentes:

```js
{
  id: 'identificador-unico',
  kind: 'client',             // client ou personal
  format: 'long',             // long ou short
  featured: false,
  title: 'Título do projeto',
  client: 'Nome do cliente',
  description: 'Resumo do trabalho realizado.',
  software: 'Adobe Premiere Pro',
  tags: ['YouTube', 'Gameplay'],
  url: 'https://link-do-video',
  ...youtube('ID_DO_VIDEO'),
}
```

Os utilitários `youtube`, `instagram` e `tiktok` geram os endereços de incorporação. Em imagens e vídeos locais, use caminhos relativos a `public/`, sem uma barra no início.

### Visualizações dos edits

Cada item de `editVideos` possui `viewCount`. Use um número inteiro, sem pontos ou abreviações:

```js
{ videoId: 'ID_DO_TIKTOK', viewCount: 320800 }
```

A interface formata o valor no padrão brasileiro, ordena os vídeos do maior para o menor e marca os três primeiros como `TOP`. Se o valor não for numérico, a página solicita atualização manual.

### Arquivos locais e imagens

- MP4: coloque em `public/media/` e use `localFile: 'media/arquivo.mp4'`;
- avatar: coloque em `public/profiles/` e use `profileImage: 'profiles/foto.jpg'`;
- capa: coloque em `public/thumbnails/` e use `thumbnail: 'thumbnails/capa.jpg'`.

Alguns projetos possuem caminhos de fallback configurados mesmo que o MP4 não esteja no repositório. Nesse caso, o player tenta a incorporação da plataforma ou oferece o link original.

## Desempenho e acessibilidade

- players externos carregam somente quando um projeto é aberto;
- imagens não prioritárias usam carregamento tardio e decodificação assíncrona;
- o destaque principal recebe prioridade de carregamento;
- animações usam CSS e APIs nativas do navegador;
- botões e navegação possuem rótulos ARIA e estados acessíveis;
- resultados dos filtros são anunciados por uma região `aria-live`;
- o modal tem semântica de diálogo, aceita `Esc` e recebe foco ao abrir;
- a preferência por movimento reduzido é respeitada;
- o HTML define idioma, viewport, descrição e metadados Open Graph básicos.

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy.yml` roda a cada push em `main` ou `master`. Ele:

1. baixa o código;
2. configura Node.js e cache do npm;
3. instala dependências com `npm ci`;
4. gera o build;
5. verifica se `dist/index.html` usa os arquivos compilados;
6. envia o artefato e publica no GitHub Pages.

No GitHub, acesse **Settings → Pages → Build and deployment** e selecione **GitHub Actions**. O modo **Deploy from a branch** pode publicar os fontes em vez do build do React. Consulte `GITHUB-PAGES.md` para diagnóstico.

O `vite.config.js` usa `base: './'`, gerando caminhos relativos e permitindo hospedar o site em um subdiretório do GitHub Pages sem codificar o nome do repositório nos assets.

## Limitações conhecidas

- Instagram e TikTok podem bloquear embeds dependendo do navegador ou da plataforma;
- o formulário encaminha a mensagem, mas não confirma seu envio;
- as visualizações do TikTok são informadas manualmente e não usam API;
- arquivos MP4 grandes aumentam o repositório e o consumo de banda;
- não há painel administrativo: mudanças são feitas no código e publicadas novamente.

## Licença e uso

Este repositório contém código, identidade visual, textos e trabalhos pessoais. Nenhuma licença pública de reutilização foi definida; o conteúdo não deve ser considerado livre para cópia, redistribuição ou uso comercial sem autorização.

## Autor e contato

**Pedro Luis Bezerra Lima** — Editor de vídeo

- Instagram: [@predoarts1389](https://www.instagram.com/predoarts1389/)
- E-mail: [daxstudios.comissions@gmail.com](mailto:daxstudios.comissions@gmail.com)
- Repositório: [github.com/Prediin/PortifolioEditor](https://github.com/Prediin/PortifolioEditor)
