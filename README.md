# 🏗️ TMS Engenharia — Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge">
  <img src="https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge">
  <img src="https://img.shields.io/badge/Tailwind_CSS%20v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind Badge">
</div>

---

Website institucional e portfólio profissional responsivo de alta performance desenvolvido para a **TMS Engenharia** (Thais Meirelles - Engenheira Civil), especialista em orçamentos e suprimentos para a Construção Civil.

Este é um **projeto comercial real de produção** desenvolvido como freelancer para estabelecer a presença digital e funil de prospecção da profissional, destacando seus diferenciais de lucratividade e excelência operacional.

---

## 🎯 Funcionalidades & Arquitetura de Código

O projeto foi construído focando em modularidade, velocidade de carregamento e UX intuitiva:

- **Navegação Dinâmica com Active Section:** Menu de navegação inteligente que detecta a posição de rolagem da página (`window.scrollY`) e destaca dinamicamente a seção ativa através de cálculos de interseção nativos (`getBoundingClientRect`).
- **Scroll Suave (Smooth Scroll):** Transições suaves ao navegar pelas seções da página utilizando métodos nativos de navegação do navegador.
- **Funil de Prospecção Integrado:** Pontos de contato estratégicos com CTAs (Call to Actions) dinâmicos vinculados diretamente ao WhatsApp comercial da profissional, com mensagens pré-configuradas para conversão de leads.
- **Visual Grid Moderno:** Utilização de grids complexos, gradientes de cor sofisticados e elementos semitransparentes (efeito glassmorphism) configurados via Tailwind CSS.
- **Mobile-First & Otimização:** Componentização limpa em React com tipagem estática rigorosa do TypeScript e compilação instantânea do Vite.

---

## 📂 Organização das Pastas

```bash
/
├── src/
│   ├── assets/       # Imagens e ativos visuais da página
│   ├── App.tsx       # Componente principal contendo a estrutura da landing page
│   ├── main.tsx      # Ponto de entrada do React
│   ├── App.css       # Estilos adicionais e específicos
│   ├── index.css     # Diretivas de importação do Tailwind CSS v4
│   └── vite-env.d.ts # Declarações globais de tipos do Vite
├── public/           # Logotipo institucional e recursos acessíveis diretamente
├── index.html        # Estrutura HTML base
├── vite.config.ts    # Configuração do Vite com suporte a Tailwind e React
├── package.json      # Dependências e scripts npm
└── tsconfig.json     # Configuração principal do compilador TypeScript
```

---

## 🛠️ Tecnologias Utilizadas

- **Bundler & Dev Server:** Vite 7
- **Biblioteca SPA:** React 19
- **Tipagem:** TypeScript
- **Estilização:** Tailwind CSS v4 (compilador nativo integrado ao Vite via `@tailwindcss/vite`)
- **Biblioteca de Ícones:** Lucide React

---

## 🔧 Execução do Projeto Localmente

### 1. Clonar o Repositório e Instalar Dependências
```bash
git clone git@github.com:robertofmarins/tms-portfolio-website.git
cd tms-portfolio-website
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
O Vite iniciará o servidor local em `http://localhost:5173`.

### 3. Compilar para Produção (Build)
Para compilar e otimizar os arquivos estáticos (HTML, JS, CSS) para publicação:
```bash
npm run build
```
Os arquivos gerados serão salvos na pasta `/dist`.
