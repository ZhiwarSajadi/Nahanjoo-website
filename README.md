# Nahanjoo Website (نه‌هانجو)

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

The official public landing page and interactive client-side simulator for **[Nahanjoo (نه‌هانجو)](https://github.com/ZhiwarSajadi/Nahanjoo)** — a portable, ultra-secure, 100% client-side offline Retrieval-Augmented Generation (RAG) platform.

---

## 🌟 Overview

**Nahanjoo Website** serves as the public introduction and interactive sandbox for the core Nahanjoo project. It allows visitors to explore the privacy-first architecture of Nahanjoo, test an interactive browser-based RAG simulation (parsing, chunking, embedding, and semantic similarity search), and learn how to run Nahanjoo in air-gapped or sensitive environments.

### Key Highlights
- **Interactive Sandbox Demo**: Test RAG indexing and similarity querying right in the browser with preset confidential medical/technical documents or custom text.
- **Architecture Breakdown**: Deep dive into how client-side ONNX Runtime, Transformers.js, and WebAssembly deliver zero-server AI retrieval.
- **Responsive Dark/Light UI**: Built with React, Tailwind CSS, Lucide Icons, and Motion transitions.
- **Zero API Key Requirements for Basic Exploration**: Demonstrates client-side document processing in complete isolation.

---

## 🔗 Related Repositories

| Repository | Purpose | Link |
| :--- | :--- | :--- |
| **Nahanjoo Core** | The offline, portable client-side RAG application source code | [github.com/ZhiwarSajadi/Nahanjoo](https://github.com/ZhiwarSajadi/Nahanjoo) |
| **Nahanjoo Website** | The public introduction page & interactive showcase (this repository) | [github.com/ZhiwarSajadi/Nahanjoo-website](https://github.com/ZhiwarSajadi/Nahanjoo-website) |

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ZhiwarSajadi/Nahanjoo-website.git
   cd Nahanjoo-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for Production**
   ```bash
   npm run build
   ```
   The compiled static files will be placed in the `dist/` directory.

---

## ⚡ Deployment on Vercel

This repository is optimized for one-click deployment on **Vercel**.

### Option 1: Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Import the `ZhiwarSajadi/Nahanjoo-website` repository from GitHub.
3. Configure the build parameters (auto-detected by `vercel.json`):
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Vercel will build and host the site with automatic HTTPS.

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## 🛠️ Built With

- **Framework**: [React 19](https://react.dev/) & [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).
