# SBMF 2026 Website

Site oficial do 29th Brazilian Symposium on Formal Methods (SBMF 2026), construido com Astro + Tailwind.

## Visao Geral

A pagina principal do projeto e [src/pages/index.astro](src/pages/index.astro).
Ela monta a home importando e injetando secoes em componentes de pagina, como:

- [src/pages/about.astro](src/pages/about.astro)
- [src/pages/program.astro](src/pages/program.astro)
- [src/pages/scope_topics.astro](src/pages/scope_topics.astro)
- [src/pages/talks.astro](src/pages/talks.astro)
- [src/pages/important-date.astro](src/pages/important-date.astro)
- [src/pages/registration.astro](src/pages/registration.astro)
- [src/pages/committees.astro](src/pages/committees.astro)
- [src/pages/submission.astro](src/pages/submission.astro)

## Commands

Todos os comandos devem ser executados na raiz do projeto.

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| npm install         | Instala dependencias                        |
| npm run dev         | Inicia servidor local em localhost:4321     |
| npm run build       | Gera build de producao em ./dist            |
| npm run preview     | Sobe preview local da build                 |
| npm run check       | Executa verificacoes (Astro, ESLint, etc.)  |
| npm run fix         | Corrige lint e formata arquivos             |
| npm run astro ...   | Executa comandos da CLI do Astro            |

## Configuration

Arquivo principal de configuracao:

./src/config.yaml

Arquivos importantes relacionados:

- [astro.config.ts](astro.config.ts)
- [src/navigation.ts](src/navigation.ts)
- [tailwind.config.js](tailwind.config.js)

## Estrutura Principal

- [src/pages](src/pages): secoes e paginas usadas pela home
- [src/layouts](src/layouts): layouts base
- [src/components](src/components): componentes reutilizaveis
- [src/assets](src/assets): imagens, estilos e arquivos estaticos do app
- [public](public): arquivos publicos servidos diretamente

## Deploy

# 🚀 Deploy do Projeto (Astro + GitHub Pages)

Este projeto utiliza **Astro** com deploy automático via **GitHub Pages** usando **GitHub Actions**.

---

## 📦 Como funciona o deploy

O deploy é **automático**:

* Sempre que houver um `push` na branch `main`
* O GitHub executa o workflow (`.github/workflows/deploy.yml`)
* O projeto é buildado (`npm run build`)
* A pasta `dist/` é publicada no GitHub Pages

---

## 🧭 URL do site

Após o deploy, o site estará disponível em:

```
https://sbmf2026.github.io
```

---

## 🛠️ Pré-requisitos

Antes de fazer deploy, garanta:

### 1. Configuração do Astro

Arquivo `astro.config.ts`:

```ts
export default defineConfig({
  output: 'static',
  site: 'https://sbmf2026.github.io',
});
```

---

### 2. Configuração do template (Astrowind)

Arquivo `src/config.yaml`:

```yaml
site:
  base: '/sbmf2026'
```

---

## 🚀 Como fazer deploy

### 1. Fazer alterações no código

Edite normalmente seus arquivos (`src/`, conteúdo, layout, etc).

---

### 2. Testar localmente (recomendado)

```bash
npm install
npm run build
npm run preview
```

Acesse:

```
http://localhost:4321/sbmf2026/
```

---

### 3. Commit e push

```bash
git add .
git commit -m "sua mensagem"
git push origin master
```

---

### 4. Deploy automático

Após o `push`:

1. Vá até a aba **Actions** no GitHub
2. Verifique o workflow **"Deploy Astro to GitHub Pages"**
3. Aguarde o status:

```
Deploy successful
```

---

## 🔁 Fluxo resumido

```text
Editar código → Build local → Push master → GitHub Actions → Deploy automático
```

---

## ⚠️ Problemas comuns

### ❌ Layout quebrado

* Verifique `base` no `astro.config.ts`
* Verifique `base` no `config.yaml`

---

### ❌ CSS ou imagens não carregam

* Evite caminhos absolutos (`/images/...`)
* Prefira caminhos relativos ou baseados no `base`

---

### ❌ Deploy não rodou

* Confirme se o push foi feito na branch `master`
* Verifique se o workflow `.github/workflows/deploy.yml` existe

---

## 📁 Estrutura relevante

```
.github/workflows/deploy.yml   # Pipeline de deploy
astro.config.ts               # Configuração do Astro
src/config.yaml               # Configuração do template
dist/                         # Gerado no build (não versionado)
```

---

## ✅ Conclusão

* Deploy é automático via GitHub Actions
* Basta fazer push na branch `master`
* Sempre valide localmente antes de subir

---

## 💡 Dica

Se algo quebrar no deploy, compare com o `npm run preview`:

👉 Se funciona local mas não no GitHub → problema de `base` ou paths
