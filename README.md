#  ✈ Passeio App

Um projeto Angular para listar categorias e lugares (passeios), com uma API fake usando `json-server` para desenvolvimento e testes.

---

## 📌 Visão geral

**Passeio App** é um app front-end construído em Angular que consome uma API mock (`json-server`) para gerenciar `categorias` e `lugares`. O repositório contém dois arquivos de dados (`api/db.json` e `api/db.production.json`) e scripts NPM para rodar servidor de desenvolvimento e simular um ambiente de produção.

---

## ⚙️ Principais funcionalidades

- Listagem de categorias e lugares
- Estrutura modular Angular (módulos para categorias, lugares, galeria, etc.)
- API mock com `json-server` (simula endpoints REST)
- Ambientes (development / production) via `src/environments`

---

## 🧰 Tecnologias

- Angular 19
- json-server (para API mock)
- TailwindCSS (configuração presente)
- TypeScript

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js (14+ recomendado)
- npm

### Instalação

```bash
# instale dependências
npm install
```

### Rodando a aplicação (dev)

```bash
# iniciar o front-end (Angular dev server)
npm run start

# iniciar json-server com dados de desenvolvimento (porta 3000)
npm run server
```

A API de desenvolvimento usa `api/db.json` e expõe endpoints como:

- http://localhost:3000/categorias
- http://localhost:3000/lugares

### Simulando produção (json-server)

```bash
# inicia json-server apontando para o arquivo de produção (porta 4000)
npm run server:production
```

> Observação: por padrão `server:production` serve `api/db.production.json` — se esse arquivo tiver recursos diferentes (por exemplo `posts`, `comments`, `profile`) você verá apenas esses endpoints em `:4000`. Se deseja os mesmos recursos do `db.json`, copie/mescle os dados para `db.production.json`.

### Build para produção

```bash
# build angular em modo production
npm run build -- --configuration production
```

---

## 📁 Estrutura relevante

- `src/` — código Angular
- `src/environments/` — arquivos de ambiente (`environment.ts`, `environment.production.ts`, `environment.development.ts`)
- `api/db.json` — dados usados no ambiente de desenvolvimento
- `api/db.production.json` — dados para `server:production` (atenção: pode diferir de `db.json`)
- `package.json` — scripts úteis

---

## 📝 Scripts principais (exemplos)

- `npm run start` — Angular dev server
- `npm run build` — build do app
- `npm run server` — json-server (`api/db.json`) na porta 3000
- `npm run server:production` — json-server (`api/db.production.json`) na porta 4000
