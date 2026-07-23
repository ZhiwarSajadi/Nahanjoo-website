export type Language = 'en' | 'fa';

export const translations = {
  en: {
    // Top status rail
    statusVersion: "Nahanjoo Core Release: v1.0.0 Stable",
    statusSecurity: "100% Offline PySide6 & Qwen 2.5 3B",
    statusSubtitle: "Nahanjoo Desktop",

    // Navigation
    navOverview: "Overview",
    navSecurity: "Security & Benchmarks",
    navArchitecture: "System Architecture",
    navGuide: "Get Started",
    navTrySecurity: "Security Hub",
    secBadge: "Enterprise",

    // Hero Section
    heroBadge: "Local RAG Desktop Assistant for Persian Documents",
    heroTitlePart1: "Your Documents.",
    heroTitlePart2: "Your Hardware.",
    heroTitleHighlight: "100% Local Persian AI.",
    heroDesc: "Nahanjoo (نهانجو) is a privacy-first, fully offline Retrieval-Augmented Generation (RAG) desktop application built with PySide6, Qwen 2.5 3B Instruct, FAISS vector search, and a specialized Persian Text Normalizer. Index confidential Persian PDFs and query them completely on your local computer.",
    heroCtaSecurity: "Explore Architecture & Security",
    heroCtaGithub: "View Core Repo on GitHub",
    heroFeatureNoServers: "No External APIs",
    heroFeatureNoAccount: "100% Offline (No Internet)",
    heroFeatureCompliant: "Air-Gapped & Privacy-First",

    // Hero Mock App
    mockWindowFile: "main.py (PySide6 Qt6 GUI)",
    mockEmbeddingsDb: "FAISS Vector Store (MiniLM-L12-v2)",
    mockOnlineZeroKb: "LOCAL CPU (0 KB sent)",
    mockHardwareEngine: "Qwen 2.5 3B GGUF (llama-cpp-python)",

    // Feature Section
    featuresHeading: "Engineered for Persian PDF Processing & Local Privacy",
    featuresSubheading: "Designed specifically to overcome Persian PDF text extraction quirks, RTL rendering challenges, and cloud data privacy risks.",
    
    feature1Title: "100% Offline & Privacy-Preserving",
    feature1Desc: "All text extraction, vector embeddings, similarity search, and LLM inference occur strictly locally on CPU/RAM. Zero cloud API calls or network telemetry.",
    
    feature2Title: "Persian Ligature & Unicode Normalizer",
    feature2Desc: "Custom regex & dictionary pipeline (PersianNormalizer) fixing PyMuPDF extraction bugs, RTL rendering, ZWNJ space handling, and character unification.",
    
    feature3Title: "Quantized Local LLM (Qwen 2.5 3B)",
    feature3Desc: "High-speed local CPU inference with Qwen 2.5 3B Instruct (Q4_K_M GGUF) via llama-cpp-python, offering real-time token streaming with zero latency lag.",
    
    feature4Title: "FAISS High-Precision Vector Store",
    feature4Desc: "Powered by HuggingFace paraphrase-multilingual-MiniLM-L12-v2 embeddings and chunk deduplication to retrieve highly accurate source context passages.",
    
    feature5Title: "Bilingual PySide6 Desktop GUI",
    feature5Desc: "Sleek dark-themed Qt6 interface with an instant language toggle (🌐 English / 🌐 فارسی) switching between Persian (RTL) and English (LTR) layouts.",
    
    feature6Title: "Portable USB Runtime Builder",
    feature6Desc: "Includes build_usb_portable.py to package an isolated Python 3.12 runtime, pre-cached models, and FAISS index into a self-contained portable USB folder.",

    // CTA Banner
    ctaTitle: "Need Air-Gapped Persian Document Analysis?",
    ctaDesc: "Explore Nahanjoo's system architecture, run local hardware diagnostics, calculate vector storage footprints, and inspect setup instructions.",
    ctaOpenSecurity: "Explore Security Hub",
    ctaGetGuide: "Get Setup & USB Guide",

    // FAQ Section
    faqBadge: "Got Questions?",
    faqHeading: "Frequently Asked Questions",
    faqSubheading: "Everything you need to know about Nahanjoo desktop application, local RAG technology, and Persian PDF processing.",
    faqs: [
      {
        q: "What makes Nahanjoo different from standard PDF RAG tools?",
        a: "Standard PDF tools fail on Persian text due to RTL rendering quirks, broken ligatures (like 'ال' vs 'لا'), character encoding mismatches, and cloud privacy risks. Nahanjoo features a dedicated PersianTextNormalizer, runs 100% offline via PySide6, FAISS, and Qwen 2.5 3B Instruct on your local CPU."
      },
      {
        q: "Does Nahanjoo send any document data to cloud servers?",
        a: "No! Absolute privacy is enforced physically. PDF parsing, text normalization, vector embedding generation (paraphrase-multilingual-MiniLM-L12-v2), FAISS indexing, and LLM text generation (Qwen 2.5 3B) happen entirely on your computer's local hardware without any network connections."
      },
      {
        q: "What hardware is required to run Nahanjoo Desktop?",
        a: "Nahanjoo runs smoothly on standard modern computers (Windows 10/11) with 8GB or more RAM. The LLM is quantized in Q4_K_M GGUF format and runs efficiently on local CPU cores using llama-cpp-python without requiring an expensive dedicated GPU."
      },
      {
        q: "How does the bilingual query and CoT answering system work?",
        a: "Nahanjoo features an automatic query language detector. If you ask a question in English, it responds in English with structured Chain-of-Thought (CoT) sections ('Analysis:' / 'Final Answer:'). If asked in Persian, it responds in Persian ('تحلیل:' / 'پاسخ نهایی:')."
      },
      {
        q: "Can I run Nahanjoo from a USB flash drive on an air-gapped machine?",
        a: "Yes! Nahanjoo includes a portable runtime builder (`python build_usb_portable.py`). It compiles an isolated Python environment and pre-caches the model files into a single portable folder that can be run from a USB drive on any air-gapped PC."
      },
      {
        q: "Where are chat logs and document vector indices saved?",
        a: "Document vector indices are stored locally in `./VectorStore`, document metadata tracking in `source_metadata.json`, and chat history in `./Chats` as structured JSON files. You can reload, switch, or delete past sessions anytime."
      }
    ],

    // Security & Compliance Hub Tab
    securityTitle: "Enterprise Security, Compliance & System Metrics",
    securitySubtitle: "Evaluate Nahanjoo's air-gapped desktop security posture, run live hardware diagnostics, calculate vector storage footprints, and inspect local deployment specs.",
    
    // Security Matrix Comparison
    matrixHeading: "1. Security & Architecture Posture Matrix",
    matrixSubheading: "Compare Nahanjoo's local desktop architecture against public cloud AI, private cloud LLMs, and remote API gateways.",
    matrixColFeature: "Security Vector",
    matrixColNahanjoo: "Nahanjoo Desktop (Local PySide6)",
    matrixColPublicCloud: "Public Cloud AI (SaaS)",
    matrixColPrivateCloud: "Private Cloud LLM",
    matrixColLocalServer: "Remote API Gateway",

    matrixRow1Label: "Data Transmission",
    matrixRow1Nahanjoo: "Zero Network Calls (0 KB)",
    matrixRow1PublicCloud: "Public Internet Payload",
    matrixRow1PrivateCloud: "VPC / TLS Tunnel",
    matrixRow1LocalServer: "Local Network Sockets",

    matrixRow2Label: "Persian Text Accuracy",
    matrixRow2Nahanjoo: "Custom PersianNormalizer Pipeline",
    matrixRow2PublicCloud: "Generic / Broken Ligatures",
    matrixRow2PrivateCloud: "Standard Tokenizer",
    matrixRow2LocalServer: "Unoptimized for Persian",

    matrixRow3Label: "Data Privacy & SLA",
    matrixRow3Nahanjoo: "100% Local (Inside CPU/RAM)",
    matrixRow3PublicCloud: "30-90 Day Provider SLA",
    matrixRow3PrivateCloud: "Manual DB Purge",
    matrixRow3LocalServer: "Local File Logs",

    matrixRow4Label: "AI Model Retraining",
    matrixRow4Nahanjoo: "Impossible (No External Ingestion)",
    matrixRow4PublicCloud: "Risk of Training Data Ingestion",
    matrixRow4PrivateCloud: "Contractual Non-Training",
    matrixRow4LocalServer: "Impossible",

    matrixRow5Label: "Infrastructure Cost",
    matrixRow5Nahanjoo: "$0 (Uses Local Computer CPU/RAM)",
    matrixRow5PublicCloud: "Per-Token API Billing",
    matrixRow5PrivateCloud: "Heavy Hourly GPU Server Cost",
    matrixRow5LocalServer: "Hardware Purchasing",

    // Industry Compliance Evaluator
    evaluatorHeading: "2. Industry Regulatory Compliance Assessment",
    evaluatorSubheading: "Select your industry sector to review specific data residency rules, regulatory protections, and air-gap deployment guidelines.",
    selectSectorLabel: "Select Industry / Regulatory Framework:",
    sectors: {
      healthcare: "Healthcare & Life Sciences (HIPAA / HITECH)",
      legal: "Legal, Banking & Financial Services (SOC 2 / SEC)",
      defense: "Defense & Government (Air-Gapped / SCIF)",
      corporate: "Corporate R&D & IP Protection (ISO 27001)"
    },
    complianceScoreLabel: "Air-Gapped Compliance Score",
    dataResidencyLabel: "Data Residency Guarantee",
    riskFactorLabel: "Cloud Risk Mitigation",
    recommendedPolicyLabel: "Recommended Deployment Strategy",

    // Hardware Benchmark Diagnostic Tool
    benchmarkHeading: "3. Live Computer Hardware Diagnostic",
    benchmarkSubheading: "Inspect your computer's local processing capability, available RAM, multi-threading support, and estimated local token throughput for Qwen 2.5 3B.",
    runDiagnosticBtn: "Run Computer Hardware Diagnostic",
    diagnosticRunning: "Analyzing Local Hardware...",
    webgpuStatusLabel: "CPU Multi-Threading (llama-cpp)",
    webgpuSupported: "AVX2 / Hardware Accelerated",
    webgpuFallback: "Standard CPU Execution",
    wasmThreadsLabel: "PySide6 Qt6 GUI Engine",
    wasmActive: "Asynchronous QThread Active",
    wasmSingle: "Single-Threaded",
    memoryLimitLabel: "Available Computer Memory",
    estimatedThroughputLabel: "Est. Token Streaming Speed",
    tokensPerSec: "tokens/sec",
    queryLatencyLabel: "Est. FAISS Vector Search Latency",

    // Memory Footprint Calculator
    calcHeading: "4. Document Memory & FAISS Storage Calculator",
    calcSubheading: "Estimate FAISS vector database size, RAM allocation, and search speed based on your PDF page count.",
    pageCountLabel: "PDF Page Count:",
    pagesUnit: "pages",
    estChunksLabel: "Text Chunks (800 char)",
    estVectorDbSizeLabel: "FAISS Storage Size",
    estRamConsumptionLabel: "Peak RAM Allocation",
    estSearchLatencyLabel: "FAISS Search Speed",

    // Deployment Configurator
    deployHeading: "5. Environment & Portable Deployment Specs",
    deploySubheading: "Copy execution and deployment specifications for Nahanjoo local desktop and portable USB build.",
    tabSingleHtml: "Python Local Execution",
    tabDocker: "USB Portable Builder",
    tabPolicy: "FAISS Indexing Spec",
    tabTauri: "PySide6 Qt6 UI Spec",
    copyConfigBtn: "Copy Configuration",
    configCopied: "Copied to Clipboard!",

    // How It Works / Architecture Tab
    archTitle: "Nahanjoo System Architecture & Pipelines",
    archSub: "Nahanjoo operates through two primary execution pipelines: Document Ingestion & Indexing and RAG Query Retrieval & CoT Generation.",
    
    archStep1Num: "PIPELINE 01 - STEP 1",
    archStep2Num: "PIPELINE 01 - STEP 2",
    archStep3Num: "PIPELINE 01 - STEP 3",
    archStep4Num: "PIPELINE 02 - QUERY",

    archStep1Title: "Persian PDF Ingestion & PyMuPDF",
    archStep1Desc: "PDFs in ./Documents are parsed via PyMuPDF (fitz) and passed through the specialized PersianNormalizer (NFKC, ZWNJ, ligature fixes).",
    
    archStep2Title: "Recursive Text Splitting",
    archStep2Desc: "Normalized text is divided into overlapping chunks (800 chars, 200 overlap) to preserve semantic context across sentences.",
    
    archStep3Title: "FAISS Vector Store Indexing",
    archStep3Desc: "HuggingFace paraphrase-multilingual-MiniLM-L12-v2 computes embeddings on CPU. Vectors are stored in ./VectorStore with SHA metadata tracking.",
    
    archStep4Title: "Qwen 2.5 3B CoT Querying",
    archStep4Desc: "Queries are auto-detected for language, matched via FAISS Top-K (k=5), formatted into strict CoT system prompts, and streamed via llama-cpp-python.",

    embeddingConceptBadge: "Persian RAG Concept",
    embeddingConceptTitle: "Why is Persian Text Normalization Essential?",
    embeddingConceptSimple: "Standard PDF text extractors scramble Persian ligatures (e.g. 'ال' vs 'لا'), break zero-width non-joiners (ZWNJ/نیم‌فاصله), and confuse Arabic/Persian numbers. Nahanjoo's PersianNormalizer cleans all text before embedding generation!",

    embeddingTooltipStep1: "In Step 1, PyMuPDF extracts raw text and PersianNormalizer fixes ligatures, NFKC unicode, and ZWNJ spaces.",
    embeddingTooltipStep2: "Text chunks are generated with 800-character windows and 200-character overlaps for precise vector embedding.",
    embeddingTooltipStep3: "The multilingual embedding model translates chunks into 384-dimensional vectors stored inside FAISS local vector indices.",
    embeddingTooltipStep4: "Qwen 2.5 3B Instruct analyzes top matched FAISS passages and streams a zero-hallucination Chain-of-Thought answer with page citations.",

    underTheHood: "Technical Under-the-Hood Stack",
    onnxTitle: "Qwen 2.5 3B Instruct & llama-cpp-python",
    onnxDesc: "Utilizes quantized Q4_K_M GGUF format for ultra-fast local CPU inference with zero latency lag, streaming tokens in real time without cloud servers.",
    htmlCompilationTitle: "PySide6 Qt6 GUI & Portable USB Builder",
    htmlCompilationDesc: "Cross-platform Qt6 dark-themed interface with async QThread execution, bundled into a self-contained portable USB environment via build_usb_portable.py.",

    // Get Started Tab
    guideTitle: "Get Started with Nahanjoo Desktop",
    guideSub: "Run Nahanjoo locally on your Windows machine or create a portable USB distribution folder in a few simple steps.",
    cmdTitle: "Python Environment Quick Start",
    copiedBtn: "Copied!",
    copyCmdBtn: "Copy Commands",

    guideStep1Title: "Clone Repository & Prerequisites",
    guideStep1Desc: "Ensure Python 3.10+ is installed on your computer. Clone the repository from GitHub: https://github.com/ZhiwarSajadi/Nahanjoo.git",

    guideStep2Title: "Install Python Dependencies",
    guideStep2Desc: "Install PySide6, PyMuPDF, FAISS, sentence-transformers, and llama-cpp-python using: pip install -r requirements.txt",

    guideStep3Title: "Run Nahanjoo Desktop App",
    guideStep3Desc: "Launch the application by running `python main.py`. Place your Persian PDF files in ./Documents to automatically build the vector index!",

    contributeTitle: "Open Source & Contributions",
    contributeDesc: "Nahanjoo is an open-source project created as a capstone project at Azad University of Sanandaj to advance privacy-first Persian AI document retrieval. Star the repo or open PRs on GitHub!",
    starGithubBtn: "Star Core Repo on GitHub",

    // Footer
    footerPlatform: "100% Offline PySide6 Desktop RAG App",
    footerCoreRepo: "Nahanjoo Core (Python)",
    footerWebsiteRepo: "Website Showcase"
  },

  fa: {
    // Top status rail
    statusVersion: "نسخه اصلی نهانجو: v1.0.0 پایدار",
    statusSecurity: "۱۰۰٪ آفلاین — PySide6 و Qwen 2.5 3B",
    statusSubtitle: "نهانجو دسکتاپ",

    // Navigation
    navOverview: "معرفی کلی",
    navSecurity: "امنیت و ارزیابی کارایی",
    navArchitecture: "معماری سیستم",
    navGuide: "راهنمای نصب و اجرا",
    navTrySecurity: "مرکز امنیت",
    secBadge: "سازمانی",

    // Hero Section
    heroBadge: "دستیار هوشمند و آفلاین تحلیل اسناد فارسی",
    heroTitlePart1: "اسناد شما.",
    heroTitlePart2: "سخت‌افزار شما.",
    heroTitleHighlight: "هوش مصنوعی ۱۰۰٪ محلی فارسی.",
    heroDesc: "نهانجو (Nahanjoo) یک نرم‌افزار دسکتاپ بازیابی اطلاعات (RAG) ۱۰۰٪ آفلاین و حفظ‌کننده حریم خصوصی است که با PySide6، مدل Qwen 2.5 3B، پایگاه داده FAISS و نرمال‌ساز اختصاصی متون فارسی ساخته شده است.",
    heroCtaSecurity: "بررسی معماری و امنیت",
    heroCtaGithub: "مشاهده سورس کد در گیت‌هاب",
    heroFeatureNoServers: "بدون API خارجی",
    heroFeatureNoAccount: "۱۰۰٪ آفلاین (بدون اینترنت)",
    heroFeatureCompliant: "کاملاً ایزوله و حفظ حریم خصوصی",

    // Hero Mock App
    mockWindowFile: "main.py (واسط کاربری PySide6 Qt6)",
    mockEmbeddingsDb: "پایگاه داده برداری FAISS (MiniLM-L12-v2)",
    mockOnlineZeroKb: "پردازنده محلی (۰ کیلوبایت خروجی)",
    mockHardwareEngine: "Qwen 2.5 3B GGUF (llama-cpp-python)",

    // Feature Section
    featuresHeading: "طراحی شده برای پردازش اسناد PDF فارسی و حفظ کامل حریم خصوصی",
    featuresSubheading: "طراحی شده به طور اختصاصی برای حل چالش‌های استخراج متن فارسی، فونت‌ها، نیم‌فاصله‌ها و مخاطرات امنیتی ابر.",
    
    feature1Title: "۱۰۰٪ آفلاین و حفظ حریم خصوصی",
    feature1Desc: "کلیه فرآیندهای استخراج متن، تولید بردارها، جستجوی شباهت و استنتاج هوش مصنوعی به طور کامل روی پردازنده و رم محلی انجام می‌شود. بدون ارتباط شبکه‌ای.",
    
    feature2Title: "نرمال‌ساز اختصاصی حروف و نیم‌فاصله فارسی",
    feature2Desc: "خط‌لوله‌ی پردازشی regex و دیکشنری (PersianNormalizer) برای اصلاح اشکالات PyMuPDF، حروف عربی/فارسی، نیم‌فاصله (ZWNJ) و لیگاتورها.",
    
    feature3Title: "مدل هوش مصنوعی محلی (Qwen 2.5 3B)",
    feature3Desc: "اجرای پرسرعت مدل کوانتایز شده Qwen 2.5 3B Instruct (Q4_K_M GGUF) روی CPU با کتابخانه llama-cpp-python و استریم زنده پاسخ‌ها.",
    
    feature4Title: "پایگاه داده برداری دقیق FAISS",
    feature4Desc: "قدرت گرفته از مدل بردارساز چندزبانه paraphrase-multilingual-MiniLM-L12-v2 و سیستم حذف داده‌های تکراری برای استخراج دقیق‌ترین پاراگراف‌ها.",
    
    feature5Title: "رابط کاربری دسکتاپ دو زبانه PySide6",
    feature5Desc: "محیط کاربری مدرن و تاریک Qt6 با دکمه تغییر زبان آنی (🌐 English / 🌐 فارسی) با پشتیبانی کامل از راست‌به‌چپ (RTL) و چپ‌به‌راست (LTR).",
    
    feature6Title: "سازنده نسخه قابل حمل روی فلش USB",
    feature6Desc: "شامل اسکریپت build_usb_portable.py برای بسته‌بندی محیط پایتون، مدل‌ها و FAISS به صورت یک پوشه کامل قابل حمل روی فلش مموری.",

    // CTA Banner
    ctaTitle: "نیازمند تحلیل اسناد فارسی در محیط کاملاً ایزوله هستید؟",
    ctaDesc: "معماری سیستم نهانجو را بررسی کنید، تست سخت‌افزاری کامپیوتر را اجرا کرده و راهنمای نصب و راه‌اندازی را مشاهده نمایید.",
    ctaOpenSecurity: "ورود به مرکز امنیت",
    ctaGetGuide: "راهنمای نصب و نسخه USB",

    // FAQ Section
    faqBadge: "سوالات متداول",
    faqHeading: "پرسش‌های متداول درباره نهانجو دسکتاپ",
    faqSubheading: "همه چیز درباره نرم‌افزار دسکتاپ نهانجو، فناوری RAG محلی و پردازش اسناد PDF فارسی.",
    faqs: [
      {
        q: "چه چیزی نهانجو را از سایر ابزارهای ابری RAG متفاوت می سازد؟",
        a: "ابزارهای استاندارد در خواندن متون فارسی به دلیل بهم‌ریختگی حروف، نیم‌فاصله‌ها و کلمات بهم چسبیده دچار خطا می‌شوند. نهانجو دارای موتور اختصاصی PersianNormalizer است و ۱۰۰٪ آفلاین با PySide6، FAISS و Qwen 2.5 3B روی سیستم شما اجرا می‌شود."
      },
      {
        q: "آیا اسناد من به سرورهای ابری ارسال می‌شوند؟",
        a: "خیر! امنیت و حریم خصوصی به صورت فیزیکی تضمین شده است. استخراج PDF، نرمال‌سازی متن، بردارسازی، جستجوی FAISS و تولید پاسخ توسط Qwen 2.5 3B تماماً روی پردازنده کامپیوتر خودتان انجام می‌گیرد."
      },
      {
        q: "چه سخت‌افزاری برای اجرای نهانجو دسکتاپ مورد نیاز است؟",
        a: "نهانجو روی کامپیوترهای معمولی (ویندوز ۱۰/۱۱) با حداقل ۸ گیگابایت رم به راحتی اجرا می‌شود. مدل هوش مصنوعی با فرمت GGUF بهینه‌سازی شده و نیازی به کارت گرافیک گران‌قیمت ندارد."
      },
      {
        q: "سیستم پاسخ‌دهی دو زبانه و زنجیره تفکر (CoT) چگونه کار می‌کند؟",
        a: "نهانجو زبان سوال شما را به طور خودکار تشخیص می‌دهد. اگر سوال انگلیسی بپرسید، پاسخ انگلیسی با بخش‌های 'Analysis:' / 'Final Answer:' دریافت می‌کنید و اگر فارسی بپرسید پاسخ فارسی با 'تحلیل:' / 'پاسخ نهایی:' تولید می‌شود."
      },
      {
        q: "آیا امکان اجرای برنامه از روی فلش مموری USB وجود دارد؟",
        a: "بله! نهانجو شامل اسکریپت `python build_usb_portable.py` است که محیط پایتون و مدل‌ها را درون یک پوشه پرتابل بسته‌بندی می‌کند تا بدون نیاز به اینترنت روی هر کامپیوتری اجرا شود."
      },
      {
        q: "تاریخچه چت‌ها و بردارهای اسناد در کجا ذخیره می‌شوند؟",
        a: "بردارهای اسناد در پوشه محلی `./VectorStore`، متادیتاها در `source_metadata.json` و چت‌ها در پوشه `./Chats` به صورت فایل‌های JSON ذخیره می‌شوند."
      }
    ],

    // Security & Compliance Hub Tab
    securityTitle: "امنیت سازمانی، انطباق‌پذیری و مشخصات سیستم",
    securitySubtitle: "ارزیابی معماری دسکتاپ ایزوله نهانجو، اجرای تست‌های سخت‌افزاری کامپیوتر، محاسبه میزان حافظه مصرفی و بررسی مشخصات استقرار.",
    
    // Security Matrix Comparison
    matrixHeading: "۱. ماتریس مقایسه‌ای معماری و امنیت",
    matrixSubheading: "مقایسه معماری محلی دسکتاپ نهانجو در برابر سرویس‌های ابری عمومی، ابر اختصاصی و درگاه‌های API.",
    matrixColFeature: "معیار امنیتی",
    matrixColNahanjoo: "نهانجو دسکتاپ (PySide6 محلی)",
    matrixColPublicCloud: "هوش مصنوعی ابری عمومی",
    matrixColPrivateCloud: "ابر اختصاصی سازمانی",
    matrixColLocalServer: "درگاه API ریموت",

    matrixRow1Label: "انتقال داده‌ها در شبکه",
    matrixRow1Nahanjoo: "بدون ارتباط شبکه‌ای (۰ کیلوبایت)",
    matrixRow1PublicCloud: "ارسال داده روی اینترنت عمومی",
    matrixRow1PrivateCloud: "تونل VPC / TLS اختصاصی",
    matrixRow1LocalServer: "سوکت‌های شبکه داخلی",

    matrixRow2Label: "دقت پردازش متون فارسی",
    matrixRow2Nahanjoo: "خط‌لوله اختصاصی PersianNormalizer",
    matrixRow2PublicCloud: "عمومی / بهم‌ریختگی حروف",
    matrixRow2PrivateCloud: "توکنایزر استاندارد",
    matrixRow2LocalServer: "غیربهینه برای فارسی",

    matrixRow3Label: "حریم خصوصی و نگهداشت داده",
    matrixRow3Nahanjoo: "۱۰۰٪ محلی (درون CPU/RAM)",
    matrixRow3PublicCloud: "مهلت ۳۰ تا ۹۰ روزه سرور",
    matrixRow3PrivateCloud: "حذف دستی پایگاه داده",
    matrixRow3LocalServer: "لاگ‌های فایل محلی",

    matrixRow4Label: "آموزش مجدد مدل‌های AI",
    matrixRow4Nahanjoo: "غیرممکن (عدم خروج داده)",
    matrixRow4PublicCloud: "ریسک استفاده در آموزش",
    matrixRow4PrivateCloud: "تضمین قراردادی عدم آموزش",
    matrixRow4LocalServer: "غیرممکن",

    matrixRow5Label: "هزینه زیرساخت",
    matrixRow5Nahanjoo: "۰ دلار (پردازش روی کامپیوتر محلی)",
    matrixRow5PublicCloud: "اشتراک و پرداخت بر اساس توکن",
    matrixRow5PrivateCloud: "اجاره ساعتی و سنگین GPU",
    matrixRow5LocalServer: "خرید تجهیزات سخت‌افزاری",

    // Industry Compliance Evaluator
    evaluatorHeading: "۲. ارزیابی انطباق‌پذیری مقرراتی صنایع",
    evaluatorSubheading: "حوزه کاری خود را انتخاب کنید تا استانداردهای نگهداری داده، الزامات امنیتی و استراتژی استقرار مناسب را مشاهده کنید.",
    selectSectorLabel: "انتخاب صنعت / چارچوب قانونی:",
    sectors: {
      healthcare: "بهداشت و درمان (HIPAA / HITECH)",
      legal: "خدمات حقوقی، مالی و بانکداری (SOC 2 / SEC)",
      defense: "دفاعی، نظامی و حکومتی (شبکه‌های ایزوله / SCIF)",
      corporate: "تحقیق و توسعه و مالکیت فکری (ISO 27001)"
    },
    complianceScoreLabel: "امتیاز انطباق با محیط ایزوله",
    dataResidencyLabel: "تضمین اقامتگاه داده‌ها",
    riskFactorLabel: "کاهش خطرات ابری",
    recommendedPolicyLabel: "استراتژی استقرار پیشنهادی",

    // Hardware Benchmark Diagnostic Tool
    benchmarkHeading: "۳. تست سخت‌افزاری کامپیوتر محلی",
    benchmarkSubheading: "بررسی توان پردازشی کامپیوتر، حافظه رم در دسترس، پردازش چندنخی و سرعت استریم توکن‌های مدل Qwen 2.5 3B.",
    runDiagnosticBtn: "اجرای ارزیابی سخت‌افزار کامپیوتر",
    diagnosticRunning: "در حال آنالیز سخت‌افزار محلی...",
    webgpuStatusLabel: "پردازش چندنخی CPU (llama-cpp)",
    webgpuSupported: "شتاب‌دهی AVX2 / سخت‌افزاری",
    webgpuFallback: "اجرای استاندارد CPU",
    wasmThreadsLabel: "موتور واسط کاربری PySide6 Qt6",
    wasmActive: "پردازش ناهمگام QThread فعال",
    wasmSingle: "تک‌نخی",
    memoryLimitLabel: "حافظه رم در دسترس",
    estimatedThroughputLabel: "سرعت برآوردی استریم توکن",
    tokensPerSec: "توکن در ثانیه",
    queryLatencyLabel: "تاخیر جستجوی برداری FAISS",

    // Memory Footprint Calculator
    calcHeading: "۴. محاسبه‌گر حافظه رم و پایگاه داده FAISS",
    calcSubheading: "تخمین حجم پایگاه داده FAISS، میزان مصرف حافظه رم و سرعت جستجو بر اساس تعداد صفحات PDF.",
    pageCountLabel: "تعداد صفحات PDF:",
    pagesUnit: "صفحه",
    estChunksLabel: "تکه‌های متن (۸۰۰ کاراکتر)",
    estVectorDbSizeLabel: "حجم پایگاه داده FAISS",
    estRamConsumptionLabel: "حداکثر رم مورد نیاز",
    estSearchLatencyLabel: "سرعت جستجوی FAISS",

    // Deployment Configurator
    deployHeading: "۵. مشخصات اجرا و نسخه قابل حمل USB",
    deploySubheading: "مشاهده دستورات اجرا و تنظیمات بسته‌بندی پرتابل نرم‌افزار نهانجو.",
    tabSingleHtml: "اجرای محلی پایتون",
    tabDocker: "سازنده نسخه USB",
    tabPolicy: "مشخصات نمایه FAISS",
    tabTauri: "مشخصات PySide6 Qt6",
    copyConfigBtn: "کپی پیکربندی",
    configCopied: "کپی شد!",

    // How It Works / Architecture Tab
    archTitle: "معماری سیستم و خط‌لوله‌های اجرا در نهانجو",
    archSub: "نهانجو از طریق دو خط‌لوله اصلی اجرا می‌شود: پردازش اسناد و نمایه و استخراج پاسخ با هوش مصنوعی.",
    
    archStep1Num: "خط‌لوله ۰۱ — گام ۱",
    archStep2Num: "خط‌لوله ۰۱ — گام ۲",
    archStep3Num: "خط‌لوله ۰۱ — گام ۳",
    archStep4Num: "خط‌لوله ۰۲ — پرسش",

    archStep1Title: "استخراج و نرمال‌سازی PDF فارسی",
    archStep1Desc: "فایل‌های PDF با PyMuPDF خوانده شده و از نرمال‌ساز اختصاصی PersianNormalizer (اصلاح حروف، نیم‌فاصله‌ها و لیگاتورها) عبور می‌کنند.",
    
    archStep2Title: "تقسیم‌بندی متون (Chunking)",
    archStep2Desc: "متن نرمال‌شده به تکه‌های ۸۰۰ کاراکتری با ۲۰۰ کاراکتر همپوشانی تقسیم می‌شود تا پیوستگی کلمات حفظ گردد.",
    
    archStep3Title: "نمایه‌سازی برداری FAISS",
    archStep3Desc: "مدل چندزبانه paraphrase-multilingual-MiniLM-L12-v2 بردارها را تولید کرده و در پوشه ./VectorStore ذخیره می‌نماید.",
    
    archStep4Title: "پاسخ‌دهی با Qwen 2.5 3B",
    archStep4Desc: "زبان سوال تشخیص داده شده، K سند برتر از FAISS فراخوانی شده و مدل Qwen 2.5 3B پاسخ زنجیره تفکر را استریم می‌کند.",

    embeddingConceptBadge: "مفهوم پردازش متن فارسی",
    embeddingConceptTitle: "چرا نرمال‌سازی متن فارسی ضروری است؟",
    embeddingConceptSimple: "استخراج‌کننده‌های عادی PDF متون فارسی را دچار بهم‌ریختگی حروف، قطع نیم‌فاصله‌ها و اشتباه در اعداد عربی/فارسی می‌کنند. موتور PersianNormalizer نهانجو کلیه متون را پیش از بردارسازی اصلاح می‌کند!",

    embeddingTooltipStep1: "در گام ۱، متون PDF خوانده شده و نرمال‌ساز نهانجو اشکالات حروف و نیم‌فاصله‌ها را رفع می‌کند.",
    embeddingTooltipStep2: "متن به تکه‌های ۸۰۰ کاراکتری برای بردارسازی دقیق تقسیم می‌شود.",
    embeddingTooltipStep3: "مدل بردارساز چندزبانه، متون را به بردارهای ۳۸۴ بعدی در پایگاه داده FAISS تبدیل می‌کند.",
    embeddingTooltipStep4: "مدل Qwen 2.5 3B با تحلیل اسناد، پاسخ دقیق و بدون توهم به همراه ارجاع به شماره صفحه ارائه می‌دهد.",

    underTheHood: "پشته فنی نرم‌افزار نهانجو",
    onnxTitle: "Qwen 2.5 3B Instruct و llama-cpp-python",
    onnxDesc: "استفاده از فرمت GGUF کوانتایز شده Q4_K_M برای استنتاج فوق‌العاده سریع محلی روی CPU با استریم زنده توکن‌ها.",
    htmlCompilationTitle: "واسط کاربری PySide6 Qt6 و نسخه USB",
    htmlCompilationDesc: "رابط دسکتاپ تاریک و مدرن Qt6 با اجرای چندنخی QThread، قابل بسته‌بندی روی فلش USB با build_usb_portable.py.",

    // Get Started Tab
    guideTitle: "راهنمای نصب و اجرای نهانجو دسکتاپ",
    guideSub: "نهانجو را به راحتی روی کامپیوتر ویندوزی خود اجرا کنید یا یک نسخه پرتابل روی فلش USB بسازید.",
    cmdTitle: "دستورات راه اندازی در محیط پایتون",
    copiedBtn: "کپی شد!",
    copyCmdBtn: "کپی دستورات",

    guideStep1Title: "کلون مخزن و پیش‌نیازها",
    guideStep1Desc: "مطمئن شوید پایتون 3.10 یا بالاتر نصب است. مخزن اصلی را کلون کنید: https://github.com/ZhiwarSajadi/Nahanjoo.git",

    guideStep2Title: "نصب کتابخانه‌های پایتون",
    guideStep2Desc: "کتابخانه‌های PySide6، PyMuPDF، FAISS، sentence-transformers و llama-cpp-python را با دستور pip install -r requirements.txt نصب کنید.",

    guideStep3Title: "اجرای نرم‌افزار نهانجو",
    guideStep3Desc: "برنامه را با دستور python main.py اجرا کنید. اسناد PDF فارسی خود را در پوشه ./Documents قرار دهید تا نمایه برداری خودکار ساخته شود!",

    contributeTitle: "متن‌باز و مشارکت",
    contributeDesc: "نهانجو یک پروژه متن‌باز است که به عنوان پروژه پایانی کارشناسی در دانشگاه آزاد اسلامی واحد سنندج توسعه یافته است. در گیت‌هاب به ما ستاره دهید!",
    starGithubBtn: "ستاره دادن در گیت‌هاب",

    // Footer
    footerPlatform: "نرم‌افزار دسکتاپ RAG ۱۰۰٪ آفلاین",
    footerCoreRepo: "مخزن اصلی نهانجو (پایتون)",
    footerWebsiteRepo: "ویترین وب‌سایت"
  }
};
