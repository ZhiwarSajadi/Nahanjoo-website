export type Language = 'en' | 'fa';

export const translations = {
  en: {
    // Top status rail
    statusVersion: "Nahanjoo Core Release: v1.0.0 Stable",
    statusSecurity: "100% Air-Gapped & Compliant",
    statusSubtitle: "Nahanjoo",

    // Navigation
    navOverview: "Overview",
    navSecurity: "Security & Benchmarks",
    navArchitecture: "How it Works",
    navGuide: "Get Started",
    navTrySecurity: "Security Hub",
    secBadge: "Enterprise",

    // Hero Section
    heroBadge: "The Ultimate Secure Offline Retrieval Solution",
    heroTitlePart1: "Your Documents.",
    heroTitlePart2: "Your Browser.",
    heroTitleHighlight: "100% Offline AI.",
    heroDesc: "Nahanjoo (نهانجو) is a portable, ultra-secure, client-side RAG application. Process sensitive documents, generate embeddings, and query them completely locally. No API keys, no subscriptions, and zero database queries leaving your machine.",
    heroCtaSecurity: "Explore Security & Benchmarks",
    heroCtaGithub: "View GitHub Code",
    heroFeatureNoServers: "No Servers",
    heroFeatureNoAccount: "No Account Required",
    heroFeatureCompliant: "HIPAA & GDPR Compliant",

    // Hero Mock App
    mockWindowFile: "local_environment_security.sh",
    mockEmbeddingsDb: "Local Embeddings DB",
    mockOnlineZeroKb: "ONLINE (0KB sent)",
    mockHardwareEngine: "Embedding Hardware Engine",

    // Feature Section
    featuresHeading: "Uncompromising Security, Local Efficiency",
    featuresSubheading: "By keeping all computations client-side, Nahanjoo is designed to answer the security demands of critical enterprises, healthcare teams, and legal professionals.",
    
    feature1Title: "Zero Cloud Leakage",
    feature1Desc: "Absolutely zero cloud dependency. Your personal tax records, legal drafts, and medical papers never pass through corporate servers or network logs. Fully local.",
    
    feature2Title: "Local Embedding Models",
    feature2Desc: "Nahanjoo embeds tiny, ultra-optimized transformer embedding models (like Xenova/all-MiniLM-L6-v2) directly inside your browser cache. Local tokenization and local vector creation.",
    
    feature3Title: "The Portable HTML Trick",
    feature3Desc: "A standalone web wrapper. Export Nahanjoo as a single independent HTML file package. Throw it on an air-gapped secure computer, double click to run, and analyze documents immediately offline.",
    
    feature4Title: "Browser-native Vector DB",
    feature4Desc: "Uses IndexedDB and standard client-side storage structures to maintain structured indices. Instantly search hundreds of pages of document chunks in milliseconds using Cosine Similarity.",
    
    feature5Title: "No Subscription Costs",
    feature5Desc: "You are not renting computing power on a third-party server. All data rendering and semantic generation happens on your own CPU/GPU cores. Infinite free document search.",
    
    feature6Title: "Rich Asset Support",
    feature6Desc: "Drag-and-drop support for PDF documents, Word `.docx` documents, custom Markdown structures, and raw txt log sheets. Quick parsing and metadata categorization.",

    // CTA Banner
    ctaTitle: "Need Enterprise Air-Gapped Security?",
    ctaDesc: "Explore our interactive Security Matrix, run real-time browser WebGPU hardware diagnostics, calculate vector memory footprints, and generate air-gap deployment configurations.",
    ctaOpenSecurity: "Explore Security Hub",
    ctaGetGuide: "Get Offline Bundle Guide",

    // FAQ Section
    faqBadge: "Got Questions?",
    faqHeading: "Frequently Asked Questions",
    faqSubheading: "Everything you need to know about local RAG technology, data security, and offline document analysis.",
    faqs: [
      {
        q: "How does local RAG differ from traditional cloud-based AI tools?",
        a: "Traditional RAG sends your uploaded documents over the internet to remote cloud servers for vector embedding and retrieval. Nahanjoo performs document parsing, vector generation, and semantic similarity searching 100% locally inside your browser using WebGPU and WebAssembly. Zero bytes leave your machine."
      },
      {
        q: "Is my document data completely private and safe from AI training?",
        a: "Yes! Absolute privacy is enforced by physical architecture. Because Nahanjoo processes all files inside your browser's local memory and IndexedDB storage, no third party, cloud server, or AI training pipeline ever receives your documents or search queries."
      },
      {
        q: "What file formats and sizes are supported?",
        a: "Nahanjoo supports PDF documents, Microsoft Word files (.docx), Markdown files (.md), and plain text logs (.txt). There are no artificial paywall limits; processing performance scales with your device's browser memory (RAM), easily handling hundreds of document pages."
      },
      {
        q: "Do I need an active internet connection or specialized GPU?",
        a: "No! Once loaded, Nahanjoo operates completely offline without any internet connection. It utilizes ultra-lightweight transformer models (like all-MiniLM-L6-v2) engineered to run smoothly on standard laptop CPUs and integrated graphics."
      },
      {
        q: "Can Nahanjoo be deployed in air-gapped or restricted corporate networks?",
        a: "Yes. You can compile Nahanjoo into a single standalone HTML bundle (index.html). Transfer this bundle to an air-gapped workstation via a secure flash drive and run full document RAG without installing local servers, Node.js, or CLI dependencies."
      },
      {
        q: "Are there any subscription fees or query limits?",
        a: "None. You are utilizing your own computer's processing power rather than renting remote cloud servers. All semantic search and document retrieval is 100% free with unlimited local queries."
      }
    ],

    // Security & Compliance Hub Tab
    securityTitle: "Enterprise Security, Compliance & Benchmarks",
    securitySubtitle: "Evaluate Nahanjoo's air-gapped security posture, run live browser hardware diagnostics, calculate local vector storage footprints, and export air-gap deployment policies.",
    
    // Security Matrix Comparison
    matrixHeading: "1. Security & Architecture Posture Matrix",
    matrixSubheading: "Compare Nahanjoo against traditional public AI clouds, enterprise private clouds, and local server solutions.",
    matrixColFeature: "Security Vector",
    matrixColNahanjoo: "Nahanjoo (Client RAG)",
    matrixColPublicCloud: "Public Cloud AI (SaaS)",
    matrixColPrivateCloud: "Private Cloud LLM",
    matrixColLocalServer: "Local Server (Ollama)",

    matrixRow1Label: "Data Transmission",
    matrixRow1Nahanjoo: "Zero Network Sockets (0 KB)",
    matrixRow1PublicCloud: "Public Internet Payload",
    matrixRow1PrivateCloud: "VPC / TLS Tunnel",
    matrixRow1LocalServer: "Local Host Loopback",

    matrixRow2Label: "HIPAA / PHI Safety",
    matrixRow2Nahanjoo: "Native Air-Gapped Compliant",
    matrixRow2PublicCloud: "Requires BAA Agreement",
    matrixRow2PrivateCloud: "Configurable BAA",
    matrixRow2LocalServer: "Compliance Dependent",

    matrixRow3Label: "GDPR Right to Erase",
    matrixRow3Nahanjoo: "Instant (Clear Local Storage)",
    matrixRow3PublicCloud: "30-90 Day Provider SLA",
    matrixRow3PrivateCloud: "Manual DB Purge",
    matrixRow3LocalServer: "Local File Delete",

    matrixRow4Label: "AI Model Retraining",
    matrixRow4Nahanjoo: "Impossible (No Ingestion)",
    matrixRow4PublicCloud: "Risk of Training Data Ingestion",
    matrixRow4PrivateCloud: "Contractual Non-Training",
    matrixRow4LocalServer: "Impossible",

    matrixRow5Label: "Infrastructure Cost",
    matrixRow5Nahanjoo: "$0 (Uses Client Hardware)",
    matrixRow5PublicCloud: "Per-Token API Subscription",
    matrixRow5PrivateCloud: "High Hourly GPU Server Billing",
    matrixRow5LocalServer: "Local Hardware Purchase",

    // Industry Compliance Evaluator
    evaluatorHeading: "2. Industry Regulatory Compliance Assessment",
    evaluatorSubheading: "Select your industry sector to review specific data residency rules, regulatory protections, and air-gap deployment guidelines.",
    selectSectorLabel: "Select Industry / Regulatory Framework:",
    sectors: {
      healthcare: "Healthcare & Life Sciences (HIPAA / HITECH)",
      legal: "Legal, Banking & Financial Services (SOC 2 / SEC)",
      defense: "Defense & Government (Air-Gapped / FedRAMP)",
      corporate: "Corporate R&D & IP Protection (ISO 27001)"
    },
    complianceScoreLabel: "Air-Gapped Compliance Score",
    dataResidencyLabel: "Data Residency Guarantee",
    riskFactorLabel: "Cloud Risk Mitigation",
    recommendedPolicyLabel: "Recommended Deployment Strategy",

    // Hardware Benchmark Diagnostic Tool
    benchmarkHeading: "3. Live Browser Hardware & Accelerator Diagnostic",
    benchmarkSubheading: "Inspect your browser's local processing engine, WebGPU hardware acceleration, WebAssembly thread pool, and estimated vector throughput.",
    runDiagnosticBtn: "Run Browser Environment Diagnostic",
    diagnosticRunning: "Analyzing Hardware Pipeline...",
    webgpuStatusLabel: "WebGPU Acceleration",
    webgpuSupported: "Hardware Accelerated (Active)",
    webgpuFallback: "Fallback to CPU WASM Engine",
    wasmThreadsLabel: "WebAssembly Multi-Threading",
    wasmActive: "SharedArrayBuffer Multi-Thread Active",
    wasmSingle: "Single-Thread Standard",
    memoryLimitLabel: "Available Browser Heap Storage",
    estimatedThroughputLabel: "Est. Vector Throughput",
    tokensPerSec: "tokens/sec",
    queryLatencyLabel: "Est. Local Vector Query Latency",

    // Memory Footprint Calculator
    calcHeading: "4. Document Memory & Storage Footprint Calculator",
    calcSubheading: "Estimate IndexedDB vector database size, RAM allocation, and search speed based on your target document page count.",
    pageCountLabel: "Document Page Count:",
    pagesUnit: "pages",
    estChunksLabel: "Text Chunks Generated",
    estVectorDbSizeLabel: "IndexedDB Storage Size",
    estRamConsumptionLabel: "Peak RAM Usage",
    estSearchLatencyLabel: "Cosine Search Speed",

    // Deployment Configurator
    deployHeading: "5. Air-Gap Deployment Configurator",
    deploySubheading: "Copy production-ready deployment configurations for restricted enterprise environments.",
    tabSingleHtml: "Single HTML Bundle",
    tabDocker: "Docker Offline Nginx",
    tabPolicy: "Chrome Policy JSON",
    tabTauri: "Tauri Desktop Config",
    copyConfigBtn: "Copy Configuration",
    configCopied: "Copied to Clipboard!",

    // How It Works / Architecture Tab
    archTitle: "How Nahanjoo Works Client-Side",
    archSub: "Unlike traditional cloud LLMs that require sending your documents over public servers, Nahanjoo runs its pipeline entirely inside your local device processor.",
    
    archStep1Num: "STEP 01",
    archStep2Num: "STEP 02",
    archStep3Num: "STEP 03",
    archStep4Num: "STEP 04",

    archStep1Title: "File Ingress & Parse",
    archStep1Desc: "A PDF, Word, or TXT file is dragged directly into the window. The browser pulls the binary array into memory with zero server transmission.",
    
    archStep2Title: "Local Chunking",
    archStep2Desc: "Plaintext content is divided into tiny overlapping chunk tokens. This helps maintain context during similarity scans.",
    
    archStep3Title: "On-device Modeling",
    archStep3Desc: "Lightweight embedder models run locally using WebGPU or WebAssembly. Each chunk is mapped into a vector representing its semantics.",
    
    archStep4Title: "Interactive RAG",
    archStep4Desc: "When queried, the browser calculates mathematical similarities, pulls matching chunks, and feeds them locally to an offline client-side LLM.",

    embeddingConceptBadge: "Vector Embeddings Concept",
    embeddingConceptTitle: "What are Vector Embeddings?",
    embeddingConceptSimple: "Vector embeddings translate text into numerical coordinates representing meaning. Sentences with similar meanings get placed close to each other in mathematical space, allowing the AI to search by concepts rather than matching exact words!",

    embeddingTooltipStep1: "In Step 1, your document's raw text is extracted locally in memory so it can be transformed into vector embeddings (numerical maps of meaning) in Step 3.",
    embeddingTooltipStep2: "Text is broken into smaller chunks so that each vector embedding accurately captures a single focused concept without losing detail.",
    embeddingTooltipStep3: "The local AI converts text chunks into lists of numbers (vectors). Phrases with similar meanings end up close together in mathematical space!",
    embeddingTooltipStep4: "Your question is also converted into a vector. The browser compares your question vector against document vectors to find the most relevant paragraphs instantly.",

    underTheHood: "Under the Hood Stack",
    onnxTitle: "ONNX Runtime & Transformers.js",
    onnxDesc: "Leverages WebAssembly execution threads and WebGPU pipelines to accelerate neural network operations. Runs standard models at high speeds directly in modern Chrome, Firefox, and Safari, requiring no drivers or CLI configs.",
    htmlCompilationTitle: "The Single HTML compilation",
    htmlCompilationDesc: "Nahanjoo bundles code, assets, UI styles, and logic files into a single standalone page wrapper. Perfect for secure operations, highly structured industrial air-gaps, or absolute backup scenarios.",

    // Get Started Tab
    guideTitle: "Get Started with Nahanjoo",
    guideSub: "Get Nahanjoo running locally on your own machine. No server installation or complex Python dependencies required. Just clone, compile, or double click the single HTML.",
    cmdTitle: "Command Line Setup",
    copiedBtn: "Copied!",
    copyCmdBtn: "Copy CMD",

    guideStep1Title: "Clone & Open",
    guideStep1Desc: "Simply clone the repository from GitHub. The codebase is highly modular, readable, and structured using clean React, TypeScript, and Vite.",

    guideStep2Title: "Export Raw Standalone File",
    guideStep2Desc: "Build the standalone distribution bundle. Run `npm run build:offline` inside the workspace. The compiler will aggregate all required modules and produce a lightweight, singular HTML layout you can open with any web client.",

    guideStep3Title: "Air-Gapped Privacy Deployment",
    guideStep3Desc: "Copy the single HTML bundle or folder compilation to any secure workstation or private server directory. Enjoy complete retrieval and querying capabilities without ever connecting to an online socket.",

    contributeTitle: "Contribute & Stars",
    contributeDesc: "Nahanjoo is an open-source, community-driven project created to defend data privacy. If you find this utility helpful, please star the repository, open pull requests, and share suggestions to improve local offline AI model support!",
    starGithubBtn: "Star on GitHub",

    // Footer
    footerPlatform: "100% Client-Side Private AI Platform",
    footerCoreRepo: "Nahanjoo Core",
    footerWebsiteRepo: "Website Repo"
  },

  fa: {
    // Top status rail
    statusVersion: "نسخه اصلی نهانجو: v1.0.0 پایدار",
    statusSecurity: "۱۰۰٪ ایزوله و منطبق با استانداردهای امنیتی",
    statusSubtitle: "نهانجو",

    // Navigation
    navOverview: "معرفی کلی",
    navSecurity: "امنیت و ارزیابی کارایی",
    navArchitecture: "نحوه کارکرد",
    navGuide: "راهنمای شروع",
    navTrySecurity: "مرکز امنیت",
    secBadge: "سازمانی",

    // Hero Section
    heroBadge: "راهکار امن و نهایی بازیابی اطلاعات بدون اینترنت",
    heroTitlePart1: "اسناد شما.",
    heroTitlePart2: "مرورگر شما.",
    heroTitleHighlight: "هوش مصنوعی ۱۰۰٪ آفلاین.",
    heroDesc: "نهانجو (Nahanjoo) یک برنامه کاربردی RAG فوق‌العاده امن، قابل حمل و کاملاً سمت کاربر است. اسناد حساس خود را پردازش کنید، بردارسازی کنید و کاملاً محلی از آن‌ها سوال بپرسید. بدون نیاز به کلید API، اشتراک، یا ارسال حتی یک کوئری به بیرون.",
    heroCtaSecurity: "بررسی امنیت و ارزیابی کارایی",
    heroCtaGithub: "مشاهده کد در گیت‌هاب",
    heroFeatureNoServers: "بدون سرور",
    heroFeatureNoAccount: "بدون نیاز به حساب کاربری",
    heroFeatureCompliant: "منطبق با استاندارد HIPAA و GDPR",

    // Hero Mock App
    mockWindowFile: "محیط_امن_محلی.sh",
    mockEmbeddingsDb: "پایگاه داده بردارهای محلی",
    mockOnlineZeroKb: "فعال (۰ کیلوبایت ارسال)",
    mockHardwareEngine: "موتور سخت‌افزاری پردازش بردار",

    // Feature Section
    featuresHeading: "امنیت بی‌نظیر، کارایی فوق‌العاده محلی",
    featuresSubheading: "با نگه داشتن تمامی محاسبات در سمت کاربر، نهانجو برای پاسخگویی به نیازهای امنیتی سازمان‌های حساس، تیم‌های پزشکی و حقوقی طراحی شده است.",
    
    feature1Title: "صفر درصد نشت ابری",
    feature1Desc: "کاملاً مستقل از ابر. پرونده‌های مالیاتی، پیش‌نویس‌های قانونی و مدارک پزشکی شما هرگز از سرورهای شرکتی یا شبکه رد نمی‌شوند.",
    
    feature2Title: "مدل‌های بردارساز محلی",
    feature2Desc: "نهانجو مدل‌های مینیاتوری بهینه‌شده ترنسفورمر (مانند Xenova/all-MiniLM-L6-v2) را مستقیماً در حافظه پنهان مرورگر شما اجرا می‌کند.",
    
    feature3Title: "فایل تک‌صفحه‌ای HTML قابل حمل",
    feature3Desc: "امکان خروجی گرفتن از نهانجو به صورت یک فایل HTML مستقل. آن را روی سیستم ایزوله و بدون اینترنت اجرا کنید و سند را بلافاصله تحلیل نمایید.",
    
    feature4Title: "پایگاه داده برداری بومی مرورگر",
    feature4Desc: "استفاده از IndexedDB و ساختارهای ذخیره‌سازی سمت کاربر برای جستجوی میلی‌ثانیه‌ای در صدها صفحه سند با شباهت کسینوسی.",
    
    feature5Title: "بدون هزینه اشتراک",
    feature5Desc: "شما پردازنده سرورهای ثالث را اجاره نمی‌کنید. تمامی پردازش‌ها و تولید مفاهیم روی پردازنده گرافیکی/اصلی دستگاه خودتان انجام می‌شود.",
    
    feature6Title: "پشتیبانی از انواع فایل‌ها",
    feature6Desc: "پشتیبانی از فایل‌های PDF، Word (docx)، فرمت‌های Markdown و متون خام text با پارس سریع و دسته‌بندی خودکار.",

    // CTA Banner
    ctaTitle: "نیازمند امنیت سازمانی در محیط ایزوله هستید؟",
    ctaDesc: "ماتریس تعاملی امنیت را بررسی کنید، تست سخت‌افزاری مرورگر خود را اجرا نمایید، میزان حافظه مصرفی را محاسبه کرده و فایل‌های تنظیمات استقرار را دریافت کنید.",
    ctaOpenSecurity: "ورود به مرکز امنیت",
    ctaGetGuide: "راهنمای فایل آفلاین",

    // FAQ Section
    faqBadge: "سوالات متداول",
    faqHeading: "پرسش‌های متداول درباره نهانجو",
    faqSubheading: "همه چیز درباره فناوری RAG محلی، امنیت داده‌ها و تحلیل اسناد بدون نیاز به اینترنت.",
    faqs: [
      {
        q: "تفاوت RAG محلی نهانجو با ابزارهای ابری هوش مصنوعی چیست؟",
        a: "در ابزارهای ابری، اسناد شما از طریق اینترنت به سرورهای خارجی ارسال می‌شوند. اما نهانجو فرآیند استخراج سند، تولید بردارها و جستجوی شباهت معنایی را ۱۰۰٪ به صورت محلی در مرورگر شما (با فناوری WebGPU و WebAssembly) انجام می‌دهد و حتی یک بایت داده از دستگاه شما خارج نمی‌شود."
      },
      {
        q: "آیا اسناد من کاملاً خصوصی و امن باقی می‌مانند؟",
        a: "بله! امنیت و حریم خصوصی در نهانجو بر اساس معماری فیزیکی تضمین شده است. از آنجا که کلیه فایل‌ها درون حافظه موقت مرورگر و پایگاه داده IndexedDB دستگاه شما پردازش می‌شوند، هیچ سرور ابری، شخص ثالث یا سیستم آموزش هوش مصنوعی به اسناد یا سوالات شما دسترسی ندارد."
      },
      {
        q: "چه فرمت‌ها و حجم‌هایی از فایل پشتیبانی می‌شوند؟",
        a: "نهانجو از فایل‌های PDF، Word (.docx)، فایل‌های Markdown (.md) و متون خام (.txt) پشتیبانی می‌کند. هیچ محدودیت پرداختی وجود ندارد و سرعت پردازش مستقیماً به حافظه رم دستگاه شما بستگی دارد که به راحتی صدها صفحه سند را مدیریت می‌کند."
      },
      {
        q: "آیا برای استفاده به اینترنت یا کارت گرافیک قدرتمند نیاز است؟",
        a: "خیر! پس از بارگذاری اولیه صفحه، نهانجو به طور کامل بدون اتصال به اینترنت کار می‌کند. این ابزار از مدل‌های هوش مصنوعی فوق‌العاده سبک استفاده می‌کند که روی پردازنده‌های معمولی لپ‌تاپ و موبایل روان اجرا می‌شوند."
      },
      {
        q: "آیا امکان استفاده در شبکه‌های ایزوله (Air-Gapped) و سازمانی وجود دارد؟",
        a: "بله. می‌توانید نهانجو را به صورت یک فایل HTML تک‌صفحه‌ای (index.html) خروجی بگیرید. این فایل را با یک حافظه فلش به رایانه ایزوله منتقل کنید و بدون نیاز به نصب هیچ نرم‌افزار جانبی یا سرور محلی، اسناد خود را کاوش نمایید."
      },
      {
        q: "آیا هزینه‌ای برای اشتراک یا محدودیت در تعداد پرسش‌ها وجود دارد؟",
        a: "خیر، هیچ هزینه یا محدودیتی وجود ندارد. شما از قدرت پردازشی دستگاه خودتان استفاده می‌کنید و نیازی به اجاره سرورهای ابری نیست. تمامی جستجوها و پرسش‌ها به صورت کاملاً رایگان و نامحدود انجام می‌شوند."
      }
    ],

    // Security & Compliance Hub Tab
    securityTitle: "امنیت سازمانی، انطباق‌پذیری و ارزیابی کارایی",
    securitySubtitle: "ارزیابی معماری ایزوله نهانجو، اجرای تست‌های سخت‌افزاری مرورگر، محاسبه میزان حافظه مصرفی و دریافت پیکربندی‌های استقرار سازمانی.",
    
    // Security Matrix Comparison
    matrixHeading: "۱. ماتریس مقایسه‌ای معماری و امنیت",
    matrixSubheading: "مقایسه ویژگی‌های امنیتی نهانجو در برابر سرویس‌های ابری عمومی، ابر اختصاصی و سرورهای محلی.",
    matrixColFeature: "معیار امنیتی",
    matrixColNahanjoo: "نهانجو (RAG سمت مرورگر)",
    matrixColPublicCloud: "هوش مصنوعی ابری عمومی",
    matrixColPrivateCloud: "ابر اختصاصی سازمانی",
    matrixColLocalServer: "سرور محلی (Ollama)",

    matrixRow1Label: "انتقال داده‌ها در شبکه",
    matrixRow1Nahanjoo: "بدون ارتباط شبکه‌ای (۰ کیلوبایت)",
    matrixRow1PublicCloud: "ارسال بایت‌ها روی اینترنت عمومی",
    matrixRow1PrivateCloud: "تونل VPC / TLS اختصاصی",
    matrixRow1LocalServer: "ارتباط شبکه داخلی (Loopback)",

    matrixRow2Label: "انطباق با HIPAA و PHI",
    matrixRow2Nahanjoo: "بومی و ایزوله کامل",
    matrixRow2PublicCloud: "نیازمند توافق‌نامه BAA",
    matrixRow2PrivateCloud: "قابل تنظیم با BAA",
    matrixRow2LocalServer: "نیازمند پیکربندی دستی",

    matrixRow3Label: "حق فراموشی (GDPR)",
    matrixRow3Nahanjoo: "فوری (پاکسازی مرورگر)",
    matrixRow3PublicCloud: "مهلت ۳۰ تا ۹۰ روزه سرور",
    matrixRow3PrivateCloud: "حذف دستی پایگاه داده",
    matrixRow3LocalServer: "حذف فایل محلی",

    matrixRow4Label: "آموزش مجدد مدل‌های AI",
    matrixRow4Nahanjoo: "غیرممکن (عدم ارسال داده)",
    matrixRow4PublicCloud: "ریسک استفاده در آموزش",
    matrixRow4PrivateCloud: "تضمین قراردادی عدم آموزش",
    matrixRow4LocalServer: "غیرممکن",

    matrixRow5Label: "هزینه زیرساخت",
    matrixRow5Nahanjoo: "۰ دلار (پردازش روی دستگاه)",
    matrixRow5PublicCloud: "اشتراک و پرداخت بر اساس توکن",
    matrixRow5PrivateCloud: "اجاره ساعتی و سنگین GPU",
    matrixRow5LocalServer: "خرید سخت‌افزار سرور محلی",

    // Industry Compliance Evaluator
    evaluatorHeading: "۲. ارزیابی انطباق‌پذیری مقرراتی صنایع",
    evaluatorSubheading: "حوزه کاری خود را انتخاب کنید تا استانداردهای نگهداری داده، الزامات امنیتی و استراتژی استقرار مناسب را مشاهده کنید.",
    selectSectorLabel: "انتخاب صنعت / چارچوب قانونی:",
    sectors: {
      healthcare: "بهداشت و درمان (HIPAA / HITECH)",
      legal: "خدمات حقوقی، مالی و بانکداری (SOC 2 / SEC)",
      defense: "دفاعی، نظامی و حکومتی (شبکه‌های ایزوله / FedRAMP)",
      corporate: "تحقیق و توسعه و مالکیت فکری (ISO 27001)"
    },
    complianceScoreLabel: "امتیاز انطباق با محیط ایزوله",
    dataResidencyLabel: "تضمین اقامتگاه داده‌ها",
    riskFactorLabel: "کاهش خطرات ابری",
    recommendedPolicyLabel: "استراتژی استقرار پیشنهادی",

    // Hardware Benchmark Diagnostic Tool
    benchmarkHeading: "۳. عیب‌یابی و سنجش سخت‌افزار مرورگر",
    benchmarkSubheading: "بررسی قدرت پردازشی مرورگر، شتاب‌دهنده سخت‌افزاری WebGPU، پردازش چندنخی WebAssembly و سرعت تخمینی بردارسازی.",
    runDiagnosticBtn: "اجرای ارزیابی سخت‌افزار مرورگر",
    diagnosticRunning: "در حال تحلیل پردازنده...",
    webgpuStatusLabel: "شتاب‌دهنده WebGPU",
    webgpuSupported: "شتاب‌دهنده سخت‌افزاری فعال است",
    webgpuFallback: "حالت پشتیبان موتور پردازشی WASM",
    wasmThreadsLabel: "پردازش چندنخی WebAssembly",
    wasmActive: "پردازش چندنخی SharedArrayBuffer فعال است",
    wasmSingle: "حالت تک‌نخی استاندارد",
    memoryLimitLabel: "حافظه در دسترس مرورگر",
    estimatedThroughputLabel: "سرعت تخمینی بردارسازی",
    tokensPerSec: "توکن در ثانیه",
    queryLatencyLabel: "تاخیر تخمینی جستجوی برداری",

    // Memory Footprint Calculator
    calcHeading: "۴. محاسبه‌گر میزان حافظه و فضای ذخیره‌سازی",
    calcSubheading: "تخمین حجم پایگاه داده برداری IndexedDB، میزان مصرف حافظه RAM و سرعت جستجو بر اساس تعداد صفحات اسناد.",
    pageCountLabel: "تعداد صفحات سند:",
    pagesUnit: "صفحه",
    estChunksLabel: "تعداد تکه‌های متنی تولیدی",
    estVectorDbSizeLabel: "حجم پایگاه داده IndexedDB",
    estRamConsumptionLabel: "حداکثر حافظه RAM مورد نیاز",
    estSearchLatencyLabel: "سرعت جستجوی کسینوسی",

    // Deployment Configurator
    deployHeading: "۵. تولیدکننده پیکربندی استقرار ایزوله",
    deploySubheading: "کپی دستورالعمل‌ها و فایل‌های پیکربندی آماده برای محیط‌های ایزوله و سازمانی.",
    tabSingleHtml: "بسته تک فایل HTML",
    tabDocker: "کانتینر Docker Nginx",
    tabPolicy: "خط‌مشی Chrome JSON",
    tabTauri: "پیکربندی Tauri Desktop",
    copyConfigBtn: "کپی پیکربندی",
    configCopied: "کپی شد!",

    // How It Works / Architecture Tab
    archTitle: "نهانجو چگونه در سمت کاربر کار می‌کند؟",
    archSub: "برخلاف سرویس‌های ابری هوش مصنوعی که مستلزم ارسال اسناد شما به سرورهای عمومی هستند، نهانجو تمام مراحل را درون پردازنده دستگاه محلی شما اجرا می‌کند.",
    
    archStep1Num: "گام ۰۱",
    archStep2Num: "گام ۰۲",
    archStep3Num: "گام ۰۳",
    archStep4Num: "گام ۰۴",

    archStep1Title: "ورود و پارس فایل",
    archStep1Desc: "فایل PDF یا Word مستقیماً وارد پنجره می‌شود. مرورگر بایت‌های فایل را بدون ارسال به هیچ سروری خوانده و پردازش می‌کند.",
    
    archStep2Title: "تکه‌تکه‌سازی محلی",
    archStep2Desc: "متن به تکه‌های کوچک دارای همپوشانی تقسیم می‌شود تا بافت متن هنگام اسکن شباهت حفظ شود.",
    
    archStep3Title: "مدل‌سازی روی دستگاه",
    archStep3Desc: "مدل‌های سبک هوش مصنوعی با WebAssembly و WebGPU اجرا می‌شوند. هر تکه به یک بردار ریاضی تبدیل می‌شود.",
    
    archStep4Title: "بازیابی و پاسخگویی تعاملی",
    archStep4Desc: "هنگام پرسش، مرورگر شباهت‌های ریاضی را محاسبه کرده، تکه‌های مرتبط را استخراج نموده و پاسخ را به صورت محلی تولید می‌کند.",

    embeddingConceptBadge: "مفهوم بردارهای معنایی",
    embeddingConceptTitle: "بردارهای معنایی چیست؟",
    embeddingConceptSimple: "بردارهای معنایی، متن را به مختصات عددی تبدیل می‌کنند که معنا و مفهوم آن را نشان می‌دهد. عبارات با معانی مشابه در فاصله ریاضی نزدیک به هم قرار می‌گیرند تا هوش مصنوعی به جای تطبیق کلمات دقیق، مفاهیم را جستجو کند!",

    embeddingTooltipStep1: "در گام ۱، متن سند مستقیماً در حافظه دستگاه استخراج می‌شود تا در مراحل بعدی به بردارهای معنایی (نقشه‌های عددی از مفاهیم) تبدیل شود.",
    embeddingTooltipStep2: "متن به تکه‌های کوچک‌تر تقسیم می‌شود تا هر بردار معنایی بدون از دست رفتن جزییات، بر روی یک مفهوم مشخص تمرکز کند.",
    embeddingTooltipStep3: "هوش مصنوعی محلی، تکه‌های متن را به مجموعه‌ای از اعداد (بردار) تبدیل می‌کند. عبارات هم‌معنی در فضای ریاضی نزدیک یکدیگر قرار می‌گیرند!",
    embeddingTooltipStep4: "سوال شما نیز به بردار تبدیل می‌شود. مرورگر بردار سوال را با بردارهای سند مقایسه کرده و نزدیک‌ترین بخش را بلافاصله پیدا می‌کند.",

    underTheHood: "فناوری‌های زیربنایی",
    onnxTitle: "محیط اجرا ONNX و Transformers.js",
    onnxDesc: "استفاده از نخ‌های پردازشی WebAssembly و خط لوله WebGPU برای شتاب‌دهی شبکه عصبی در کروم، فایرفاکس و سافاری بدون نیاز به نصب درایور.",
    htmlCompilationTitle: "کامپایل به فایل تک‌صفحه‌ای HTML",
    htmlCompilationDesc: "نهانجو تمامی کدها، استایل‌ها و منطق برنامه را در یک فایل HTML یکپارچه بسته‌بندی می‌کند که برای سیستم‌های کاملاً ایزوله ایده‌آل است.",

    // Get Started Tab
    guideTitle: "شروع به کار با نهانجو",
    guideSub: "نهانجو را روی سیستم خود به صورت محلی اجرا کنید. بدون نیاز به نصب سرور یا وابستگی‌های پیچیده پایتون. فقط کلون کنید، کامپایل کنید یا فایل HTML را باز کنید.",
    cmdTitle: "دستورات خط فرمان",
    copiedBtn: "کپی شد!",
    copyCmdBtn: "کپی دستورات",

    guideStep1Title: "کلون و اجرا",
    guideStep1Desc: "مخزن را از گیت‌هاب کلون کنید. کدها بسیار ساختاریافته، ماژولار و با React و TypeScript نوشته شده‌اند.",

    guideStep2Title: "خروجی فایل مستقل تک‌صفحه‌ای",
    guideStep2Desc: "دستور `npm run build:offline` را اجرا کنید تا تمام کدهای برنامه به یک فایل HTML سبُک تبدیل شوند که با هر مرورگری باز می‌شود.",

    guideStep3Title: "استقرار در محیط‌های کاملاً ایزوله",
    guideStep3Desc: "فایل HTML تولید شده را روی سیستم بدون اینترنت خود کپی کرده و از قابلیت‌های کامل جستجوی هوشمند بدون اتصال به اینترنت لذت ببرید.",

    contributeTitle: "مشارکت و ستاره دادن",
    contributeDesc: "نهانجو یک پروژه متن‌باز و جامعه‌محور برای دفاع از حریم خصوصی داده‌هاست. اگر این پروژه برای شما مفید بود، لطفاً به مخزن گیت‌هاب ستاره بدهید و نظرات خود را به اشتراک بگذارید!",
    starGithubBtn: "ستاره در گیت‌هاب",

    // Footer
    footerPlatform: "پلتفرم اختصاصی هوش مصنوعی ۱۰۰٪ سمت کاربر",
    footerCoreRepo: "سورس اصلی نهانجو",
    footerWebsiteRepo: "مخزن وب‌سایت"
  }
};
