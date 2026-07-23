# Nahanjoo Website (نهانجو)

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

The official public landing page and architecture showcase for **[Nahanjoo (نهانجو)](https://github.com/ZhiwarSajadi/Nahanjoo)** — a fully offline, privacy-first local Retrieval-Augmented Generation (RAG) desktop application for Persian PDF document analysis powered by PySide6, Qwen 2.5 3B, and FAISS.

---

## 🌟 Overview

**Nahanjoo Website** serves as the public introduction and interactive showcase for the core **Nahanjoo** desktop project ([github.com/ZhiwarSajadi/Nahanjoo](https://github.com/ZhiwarSajadi/Nahanjoo)). It allows visitors to explore the air-gapped architecture of Nahanjoo, learn how custom Persian text normalization and FAISS vector retrieval function locally, inspect hardware benchmarks, and access setup instructions.

### Key Highlights
- **Official Introduction to Nahanjoo Core**: Details the PySide6 (Qt6) desktop assistant for Persian PDF document analysis.
- **Persian Text Normalization Breakdown**: Explains how `PersianNormalizer` fixes PyMuPDF extraction quirks, RTL rendering, ZWNJ spaces (`نیم‌فاصله`), and character encoding inconsistencies.
- **Local AI Architecture**: Highlights local CPU inference via **Qwen 2.5 3B Instruct** GGUF (`llama-cpp-python`) and **FAISS** vector indexing with multilingual embeddings (`paraphrase-multilingual-MiniLM-L12-v2`).
- **Interactive Security & Hardware Hub**: Evaluates hardware specs, vector RAM consumption, and deployment specs.
- **Bilingual Interface**: Seamless switching between English (`LTR`) and Persian (`RTL`) languages.

---

## 🔗 Related Repositories

| Repository | Purpose | Link |
| :--- | :--- | :--- |
| **Nahanjoo Core** | The 100% offline, PySide6/Qwen 2.5 3B/FAISS desktop application source code | [github.com/ZhiwarSajadi/Nahanjoo](https://github.com/ZhiwarSajadi/Nahanjoo) |
| **Nahanjoo Website** | The public introduction page & showcase website (this repository) | [github.com/ZhiwarSajadi/Nahanjoo-website](https://github.com/ZhiwarSajadi/Nahanjoo-website) |

---

## 🚀 Quick Start (Website Development)

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Steps

1. **Clone the Website Repository**
   ```bash
   git clone https://github.com/ZhiwarSajadi/Nahanjoo-website.git
   cd Nahanjoo-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Local Development Server**
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

1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Import the `ZhiwarSajadi/Nahanjoo-website` repository from GitHub.
3. Build command: `npm run build` | Output directory: `dist`.
4. Click **Deploy**.

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).
