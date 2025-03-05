# Israel A Gomes Website

Este é um projeto desenvolvido com Nuxt.js, Vue.js e Tailwind CSS. Ele inclui componentes reutilizáveis, integração com FontAwesome e uma estrutura bem organizada para facilitar o desenvolvimento e a manutenção.

## Documentação

Para saber mais sobre o Nuxt 3, consulte a documentação oficial.

## Estrutura do Projeto

```plaintext
my-website
├─ assets
│  ├─ css
│  │  └─ main.css
│  └─ img
│     └─ picture.jpeg
├─ components
│  ├─ ButtonAction.vue
│  └─ ProfileInfo.vue
├─ pages
│  └─ index.vue
├─ plugins
│  └─ fontawesome.client.js
├─ public
│  └─ favicon.ico
├─ server
├─ .gitignore
├─ nuxt.config.ts
├─ package-lock.json
├─ package.json
├─ README.md
├─ tailwind.config.js
└─ tsconfig.json
```

### Descrição dos Diretórios

- **.nuxt**: Diretório gerado automaticamente pelo Nuxt.js durante a construção do projeto.
- **assets**: Contém arquivos estáticos como CSS e imagens.
  - **css/main.css**: Arquivo CSS principal.
  - **img/picture.jpeg**: Minha foto de apresentação profissional.
  - **js/professionalSummary.js**: Resumo do meu histórico profissional.
- **components**: Componentes Vue reutilizáveis.
  - **ButtonAction.vue**: Componentização dos botões.
  - **ProfileInfo.vue**: Um componente de informações de perfil.
  - **Popup.vue**: Um componente do pop-up do históricon profissional.
- **pages**: Páginas do seu aplicativo.
  - **index.vue**: A página inicial.
- **plugins**: Plugins do Nuxt.js.
  - **fontawesome.client.js**: Plugin para FontAwesome.
- **public**: Arquivos públicos acessíveis diretamente.
  - **favicon.ico**: Ícone defaut do Nuxt para o modo de execução "dev".
- **server**: Diretório para código do servidor (se aplicável).
- **.gitignore**: Arquivo para ignorar arquivos no controle de versão.
- **nuxt.config.ts**: Configurações do Nuxt.js.
- **package-lock.json** e **package.json**: Arquivos de configuração de dependências.
- **README.md**: Documentação do projeto.
- **tailwind.config.js**: Configurações do Tailwind CSS.
- **tsconfig.json**: Configurações do TypeScript.

## Configuração

Certifique-se de instalar as dependências:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento em `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Produção

Construa a aplicação para produção:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Pré-visualize a build de produção localmente:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Confira a documentação de deployment para mais informações.

## Sobre o Projeto

Este projeto utiliza Nuxt.js com Vue.js e Tailwind CSS, uma combinação poderosa para o desenvolvimento web moderno. Ele inclui:

- **Componentes reutilizáveis**: Facilita a manutenção e a escalabilidade do código.
- **Integração com FontAwesome**: Para ícones e gráficos vetoriais.
- **Configuração de Tailwind CSS**: Para um design responsivo e moderno.

