import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Cpu, 
  FileText, 
  Download, 
  ExternalLink, 
  Lock, 
  Database, 
  Search, 
  MessageSquare, 
  Share2, 
  Zap, 
  BookOpen, 
  Sparkles, 
  RefreshCw, 
  ArrowRight, 
  Sun, 
  Moon, 
  Copy, 
  Check, 
  FileUp, 
  HelpCircle, 
  Code,
  Terminal,
  CheckCircle2,
  LockKeyhole,
  FileSpreadsheet,
  Settings,
  Flame,
  Binary
} from 'lucide-react';

const Github: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Pre-defined documents for the interactive RAG simulator
interface PresetDocument {
  id: string;
  title: string;
  icon: React.ReactNode;
  category: string;
  isSensitive: boolean;
  content: string;
  chunks: string[];
  presets: { q: string; a: string; chunks: number[] }[];
}

const PRESET_DOCUMENTS: PresetDocument[] = [
  {
    id: 'bitcoin',
    title: 'Bitcoin Whitepaper (Abstract & Network)',
    category: 'Public Domain',
    isSensitive: false,
    icon: <Binary className="w-4 h-4 text-amber-500" />,
    content: "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending. We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power.",
    chunks: [
      "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.",
      "Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending.",
      "We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work.",
      "This chain forms a record that cannot be changed without redoing the proof-of-work. The longest chain serves as proof of the sequence of events witnessed."
    ],
    presets: [
      {
        q: "How does Bitcoin solve the double-spending problem?",
        a: "Bitcoin proposes a solution using a peer-to-peer network that timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work. This creates a record that cannot be changed without redoing the proof-of-work, removing the need for a trusted third party.",
        chunks: [2, 3]
      },
      {
        q: "What is the primary benefit of peer-to-peer electronic cash?",
        a: "The primary benefit is that it allows online payments to be sent directly from one party to another without going through a central financial institution or trusted intermediary.",
        chunks: [0, 1]
      }
    ]
  },
  {
    id: 'medical',
    title: 'Highly Confidential Medical Dossier.docx',
    category: 'Protected Health Information',
    isSensitive: true,
    icon: <LockKeyhole className="w-4 h-4 text-emerald-500" />,
    content: "Patient Record ID: #88219A | DOB: May 12, 1988 | Strictly Private. Patient Emily R. presents with mild intermittent asthma and chronic muscular lower back strain. No known drug or chemical allergies. Plan: Recommended Albuterol HFA (90mcg inhaler, 1-2 puffs as needed) for asthmatic episodes. Prescribed twice-weekly specialized physical therapy sessions for lumbar spine rehabilitation. Security Notice: This document contains protected health information (PHI) under HIPAA regulations. Uploading this file to public cloud models, online parsers, or third-party servers is strictly forbidden and constitutes a major compliance violation.",
    chunks: [
      "Patient Record ID: #88219A | DOB: May 12, 1988 | Status: Strictly Private & Confidential.",
      "Patient Emily R. presents with mild intermittent asthma and chronic muscular lower back strain. She has no known drug or chemical allergies.",
      "Plan: Recommended Albuterol HFA (90mcg inhaler, 1-2 puffs as needed) for asthmatic episodes, and twice-weekly physical therapy for lumbar rehabilitation.",
      "Security Notice: This file contains HIPAA-protected PHI. Uploading this document to external public AI clouds or online parsers is strictly prohibited."
    ],
    presets: [
      {
        q: "What was prescribed or planned for Emily's asthma?",
        a: "Emily was advised to use an Albuterol HFA (90mcg) inhaler, taking 1 to 2 puffs as needed for asthmatic episodes. She has no known drug allergies.",
        chunks: [1, 2]
      },
      {
        q: "Why is uploading this document to public AI tools dangerous?",
        a: "This file contains protected health information (PHI) governed by HIPAA. Uploading it to public external clouds violates privacy standards. Nahanjoo solves this by processing the document entirely locally in your browser's offline sandbox.",
        chunks: [3]
      }
    ]
  },
  {
    id: 'product-secrets',
    title: 'Project_Aegis_Q3_Roadmap.md',
    category: 'Acme Corp Proprietary',
    isSensitive: true,
    icon: <Shield className="w-4 h-4 text-blue-500" />,
    content: "Acme Corporation Internal Roadmap: Project Aegis. Late Q3 launch scheduled. This is our ultra-confidential local network security suite designed to compete with cloud firewalls. System specs: Project Aegis relies on optimized local TinyML models to analyze system calls and detect anomalous network packets in under 12ms. Pricing starts at $49/month per instance. Confidentiality warning: Competitors are actively scraping public forum disclosures and AI logs. Do not feed this roadmap, code snippets, or system parameters into public LLM chatbots.",
    chunks: [
      "Acme Corporation Q3 Internal Roadmap: Project Aegis. Scheduled for a late Q3 release.",
      "Project Aegis is our next-gen local network security suite designed to compete directly with enterprise cloud firewalls.",
      "The system uses optimized local TinyML models running client-side to detect anomalous network packets in under 12 milliseconds.",
      "Price starts at $49/month per instance. Warning: Do not upload this proprietary data to public LLM chatbots, as competitors scrap public AI datasets."
    ],
    presets: [
      {
        q: "What is Project Aegis and how does it detect threats?",
        a: "Project Aegis is Acme Corp's confidential local security suite launching in late Q3. It detects anomalies by running optimized local TinyML models client-side to inspect network packets in under 12 milliseconds.",
        chunks: [1, 2]
      },
      {
        q: "What is the expected pricing of Project Aegis?",
        a: "Pricing for Project Aegis is scheduled to start at $49 per month per instance.",
        chunks: [3]
      }
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'sandbox' | 'architecture' | 'guide'>('home');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Theme support
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'dark'; // default to a sleek dark look
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // RAG Simulator States
  const [selectedDocId, setSelectedDocId] = useState<string>('medical');
  const [customText, setCustomText] = useState<string>('');
  const [isCustomActive, setIsCustomActive] = useState<boolean>(false);
  
  // Simulation progress steps
  const [indexingStep, setIndexingStep] = useState<'idle' | 'parsing' | 'chunking' | 'embedding' | 'completed'>('idle');
  const [indexingProgress, setIndexingProgress] = useState<number>(0);
  
  // Search and AI state
  const [activeQuery, setActiveQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchedQuery, setSearchedQuery] = useState<string>('');
  const [retrievedIndices, setRetrievedIndices] = useState<number[]>([]);
  const [similarityScores, setSimilarityScores] = useState<number[]>([]);
  const [aiAnswerStream, setAiAnswerStream] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<{q: string, a: string, docs: string[]}[]>([]);

  // Simulator Chunks Data
  const [currentChunks, setCurrentChunks] = useState<{ text: string; vector: string }[]>([]);

  const handleDocChange = (docId: string) => {
    setIsCustomActive(false);
    setSelectedDocId(docId);
    setIndexingStep('idle');
    setIndexingProgress(0);
    setRetrievedIndices([]);
    setSimilarityScores([]);
    setAiAnswerStream('');
    setActiveQuery('');
    
    const doc = PRESET_DOCUMENTS.find(d => d.id === docId);
    if (doc) {
      const formatted = doc.chunks.map(text => ({
        text,
        vector: generateRandomVector()
      }));
      setCurrentChunks(formatted);
    }
  };

  const generateRandomVector = () => {
    return `[${Array.from({ length: 6 }, () => (Math.random() * 2 - 1).toFixed(3)).join(', ')}, ...]`;
  };

  // Initialize with a default doc
  useEffect(() => {
    handleDocChange('medical');
  }, []);

  // Run Local Indexing simulation
  const startIndexing = () => {
    if (isCustomActive && customText.trim().length < 15) {
      alert("Please paste at least 15 characters of custom document content to index.");
      return;
    }

    setIndexingStep('parsing');
    setIndexingProgress(15);
    setRetrievedIndices([]);
    setSimilarityScores([]);
    setAiAnswerStream('');

    // Step 1: Parsing
    setTimeout(() => {
      setIndexingStep('chunking');
      setIndexingProgress(50);
      
      // Split text into chunks
      let rawChunks: string[] = [];
      if (isCustomActive) {
        // Split by sentence
        rawChunks = customText
          .split(/[.!?]+\s+/)
          .map(s => s.trim())
          .filter(s => s.length > 8);
        if (rawChunks.length === 0 && customText.length > 0) {
          rawChunks = [customText.trim()];
        }
      } else {
        const doc = PRESET_DOCUMENTS.find(d => d.id === selectedDocId);
        if (doc) rawChunks = doc.chunks;
      }

      const mappedChunks = rawChunks.map(text => ({
        text,
        vector: generateRandomVector()
      }));
      setCurrentChunks(mappedChunks);

      // Step 2: Embedding
      setTimeout(() => {
        setIndexingStep('embedding');
        setIndexingProgress(85);

        // Step 3: Completed
        setTimeout(() => {
          setIndexingStep('completed');
          setIndexingProgress(100);
        }, 800);
      }, 700);
    }, 600);
  };

  const handleCustomTextSubmit = () => {
    setIsCustomActive(true);
    setSelectedDocId('');
    startIndexing();
  };

  // Simulated Local Semantic Search & Streaming Answer
  const handleQuery = (queryText: string) => {
    if (!queryText.trim()) return;
    if (indexingStep !== 'completed') {
      alert("Please initialize and index the document first!");
      return;
    }

    setActiveQuery('');
    setIsSearching(true);
    setSearchedQuery(queryText);
    setRetrievedIndices([]);
    setSimilarityScores([]);
    setAiAnswerStream('');

    // Simulate vector dot-product matching logic in browser
    setTimeout(() => {
      // Clean stop words
      const stopWords = ['the', 'is', 'a', 'an', 'to', 'for', 'and', 'or', 'in', 'on', 'at', 'what', 'how', 'why', 'who', 'of', 'this', 'that', 'with', 'was', 'were'];
      const queryWords = queryText.toLowerCase()
        .replace(/[?:!.,;]/g, '')
        .split(/\s+/)
        .filter(w => !stopWords.includes(w) && w.length > 1);

      // Calculate simple match scores based on overlapping keywords
      const scores = currentChunks.map(chunk => {
        let matches = 0;
        const chunkLower = chunk.text.toLowerCase();
        queryWords.forEach(word => {
          if (chunkLower.includes(word)) {
            matches += 1;
            // Boost exact word boundaries
            const regex = new RegExp(`\\b${word}\\b`, 'g');
            const wordCount = (chunkLower.match(regex) || []).length;
            matches += wordCount * 0.5;
          }
        });
        return matches;
      });

      // Find indices of sorted high scores
      const indexedScores = scores.map((score, index) => ({ index, score }));
      indexedScores.sort((a, b) => b.score - a.score);

      // If preset document, check if there's an exact preset answer
      let matchedPresetAnswer = '';
      if (!isCustomActive) {
        const doc = PRESET_DOCUMENTS.find(d => d.id === selectedDocId);
        const presetObj = doc?.presets.find(p => 
          p.q.toLowerCase().includes(queryText.toLowerCase().substring(0, 15)) ||
          queryText.toLowerCase().includes(p.q.toLowerCase().substring(0, 15))
        );
        if (presetObj) {
          matchedPresetAnswer = presetObj.a;
        }
      }

      // Determine retrieved chunks (top 1 or 2 chunks with score > 0)
      let retrieved = indexedScores.filter(item => item.score > 0).map(item => item.index);
      if (retrieved.length === 0) {
        // Fallback to top sentence
        retrieved = [0];
      } else {
        retrieved = retrieved.slice(0, 2);
      }

      setRetrievedIndices(retrieved);

      // Generate simulated similarity scores (e.g. 0.824, 0.712)
      const mockSimilarity = currentChunks.map((_, idx) => {
        if (retrieved.includes(idx)) {
          const rank = retrieved.indexOf(idx);
          return parseFloat((0.88 - rank * 0.12 - Math.random() * 0.05).toFixed(3));
        }
        return parseFloat((Math.random() * 0.3 + 0.1).toFixed(3));
      });
      setSimilarityScores(mockSimilarity);

      setIsSearching(false);

      // AI Answer assembly
      let answerText = '';
      if (matchedPresetAnswer) {
        answerText = matchedPresetAnswer;
      } else {
        // Construct answer from matched custom chunks
        const matchedTexts = retrieved.map(idx => currentChunks[idx]?.text).filter(Boolean);
        if (matchedTexts.length > 0) {
          answerText = `Based on your offline local document, here is the relevant context found:\n\n"${matchedTexts.join(' ')}"\n\nThis answer was synthesized entirely inside your sandbox with zero internet pings.`;
        } else {
          answerText = "I indexed your custom document but couldn't find precise overlapping key phrases for your specific question. Try using words directly found in the document content above!";
        }
      }

      // Stream answer word-by-word
      const words = answerText.split(' ');
      let wordIdx = 0;
      let streamed = '';
      
      const interval = setInterval(() => {
        if (wordIdx < words.length) {
          streamed += (wordIdx === 0 ? '' : ' ') + words[wordIdx];
          setAiAnswerStream(streamed);
          wordIdx++;
        } else {
          clearInterval(interval);
          // Add to local history list
          setChatHistory(prev => [
            {
              q: queryText,
              a: answerText,
              docs: retrieved.map(idx => currentChunks[idx]?.text.substring(0, 45) + '...')
            },
            ...prev
          ]);
        }
      }, 45);

    }, 1200);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#070a13] text-neutral-800 dark:text-neutral-100 selection:bg-teal-500 selection:text-white font-sans flex flex-col antialiased transition-colors duration-300">
      
      {/* GLOWING HEADER BACKGROUND ACCENT (Dark theme only) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10 dark:block hidden" />

      {/* TOP NOTIFICATION / HEADER STATUS RAIL */}
      <div className="border-b border-neutral-200/60 dark:border-neutral-900 bg-neutral-100/50 dark:bg-[#090d18]/80 backdrop-blur-sm px-4 py-2.5 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Nahanjoo Core Release: v1.0.0 Stable</span>
            <span className="text-neutral-300 dark:text-neutral-800">|</span>
            <span className="font-mono text-neutral-400 dark:text-neutral-500">100% Client-Side Sandbox</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded-full border border-teal-500/20">
              نه‌هانجو: Seeker of the Hidden
            </span>
            <a 
              href="https://github.com/ZhiwarSajadi/Nahanjoo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>ZhiwarSajadi/Nahanjoo</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/80 dark:border-[#121b2d] bg-white/80 dark:bg-[#070a13]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md shadow-teal-500/20">
              N
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">Nahanjoo</span>
              <span className="text-xs block text-neutral-400 dark:text-neutral-500 -mt-1">Secure Offline RAG</span>
            </div>
          </div>

          {/* Nav Tabs */}
          <nav className="hidden md:flex items-center bg-neutral-100 dark:bg-neutral-900/60 p-1.5 rounded-xl border border-neutral-200/50 dark:border-neutral-800">
            <button 
              onClick={() => setActiveTab('home')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'home' 
                  ? 'bg-white dark:bg-[#121b2d] text-teal-600 dark:text-teal-400 shadow-sm' 
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('sandbox')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'sandbox' 
                  ? 'bg-white dark:bg-[#121b2d] text-teal-600 dark:text-teal-400 shadow-sm' 
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Interactive Sandbox
              <span className="bg-red-500/10 text-red-500 text-[10px] px-1.5 py-0.2 rounded font-mono">Demo</span>
            </button>
            <button 
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'architecture' 
                  ? 'bg-white dark:bg-[#121b2d] text-teal-600 dark:text-teal-400 shadow-sm' 
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              How it Works
            </button>
            <button 
              onClick={() => setActiveTab('guide')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                activeTab === 'guide' 
                  ? 'bg-white dark:bg-[#121b2d] text-teal-600 dark:text-teal-400 shadow-sm' 
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Get Started
            </button>
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Launch App CTAs */}
            <button
              onClick={() => setActiveTab('sandbox')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium text-sm transition-all shadow-md shadow-teal-600/10 hover:shadow-teal-600/20 hover:-translate-y-0.5"
            >
              Try Sandbox
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE TAB BAR NAVIGATION */}
      <div className="md:hidden flex border-b border-neutral-200 dark:border-neutral-900 bg-white dark:bg-[#070a13] sticky top-16 z-30">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex-1 text-center py-3 text-xs font-medium border-b-2 transition-all ${
            activeTab === 'home' 
              ? 'border-teal-500 text-teal-600 dark:text-teal-400' 
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('sandbox')}
          className={`flex-1 text-center py-3 text-xs font-medium border-b-2 transition-all ${
            activeTab === 'sandbox' 
              ? 'border-teal-500 text-teal-600 dark:text-teal-400' 
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Sandbox Demo
        </button>
        <button 
          onClick={() => setActiveTab('architecture')}
          className={`flex-1 text-center py-3 text-xs font-medium border-b-2 transition-all ${
            activeTab === 'architecture' 
              ? 'border-teal-500 text-teal-600 dark:text-teal-400' 
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Architecture
        </button>
        <button 
          onClick={() => setActiveTab('guide')}
          className={`flex-1 text-center py-3 text-xs font-medium border-b-2 transition-all ${
            activeTab === 'guide' 
              ? 'border-teal-500 text-teal-600 dark:text-teal-400' 
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Get Started
        </button>
      </div>

      {/* MAIN CONTENT WORKSPACE */}
      <main className="flex-grow">
        
        {/* =======================================================
            TAB 1: HOME / OVERVIEW
            ======================================================= */}
        {activeTab === 'home' && (
          <div className="pb-24">
            
            {/* HERO HERO SECTION */}
            <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-20 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left: Text copy */}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-semibold">
                    <Shield className="w-3.5 h-3.5" />
                    <span>The Ultimate Secure Offline Retrieval Solution</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
                    Your Documents.<br className="hidden sm:inline" />
                    Your Browser.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400">
                      100% Offline AI.
                    </span>
                  </h1>

                  <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0">
                    Nahanjoo (نه‌هانجو) is a portable, ultra-secure, client-side RAG application. 
                    Upload sensitive documents, generate embeddings, and query them completely locally. 
                    No API keys, no subscriptions, and zero database queries leaving your machine.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                    <button
                      onClick={() => setActiveTab('sandbox')}
                      className="px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-50 text-white dark:hover:bg-teal-500 font-semibold text-base transition-all shadow-lg shadow-teal-600/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                    >
                      <span>Try Interactive Sandbox</span>
                      <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </button>
                    
                    <a
                      href="https://github.com/ZhiwarSajadi/Nahanjoo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-800 dark:text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      <span>View GitHub Code</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-6 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      <span>No Servers</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      <span>No Account Required</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      <span>HIPAA & GDPR Compliant</span>
                    </div>
                  </div>
                </div>

                {/* Right: Premium Mock Visuals */}
                <div className="lg:col-span-5 relative">
                  <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c101c] p-6 shadow-2xl shadow-neutral-200/50 dark:shadow-black/50 overflow-hidden">
                    
                    {/* Visual Mock App Window Frame */}
                    <div className="flex justify-between items-center pb-4 mb-4 border-b border-neutral-100 dark:border-neutral-900">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400" />
                        <span className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="px-3 py-1 rounded bg-neutral-100 dark:bg-neutral-900 text-[10px] text-neutral-400 dark:text-neutral-500 font-mono flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" /> local_environment_sandbox.sh
                      </div>
                    </div>

                    {/* App Internal Mock State */}
                    <div className="space-y-4">
                      <div className="p-3 bg-teal-500/5 border border-teal-500/10 rounded-xl space-y-2">
                        <div className="flex justify-between text-xs text-teal-600 dark:text-teal-400 font-mono">
                          <span>Local Embeddings DB</span>
                          <span>ONLINE (0KB sent)</span>
                        </div>
                        <div className="h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                          <div className="h-full bg-teal-500 rounded-full w-[85%]" />
                        </div>
                      </div>

                      {/* Mock code block representing portable offline single file */}
                      <div className="bg-neutral-50 dark:bg-neutral-950 p-3 rounded-xl border border-neutral-200 dark:border-neutral-900">
                        <div className="flex items-center justify-between text-xs text-neutral-500 pb-2 border-b border-neutral-100 dark:border-neutral-900 mb-2">
                          <span className="font-mono flex items-center gap-1 text-[11px]"><Code className="w-3.5 h-3.5 text-teal-500" /> index.html (Standalone Export)</span>
                          <span className="bg-teal-500/10 text-teal-500 text-[9px] px-1 rounded">100% Raw Bundle</span>
                        </div>
                        <pre className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 overflow-x-auto space-y-1">
                          <code>{`<!DOCTYPE html>
<html>
  <head>
    <!-- Embedding Model Embedded Directly -->
    <script src="transformers.min.js"></script>
    <script src="local_vector_db.js"></script>
  </head>
  <body>
    <!-- Runs air-gapped on any machine! -->
  </body>
</html>`}</code>
                        </pre>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200/60 dark:border-neutral-800 text-xs">
                        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                          <Cpu className="w-4 h-4 text-cyan-500 animate-pulse" />
                          <span>Embedding Hardware Engine</span>
                        </div>
                        <span className="font-mono bg-cyan-500/10 text-cyan-500 px-1.5 py-0.5 rounded text-[10px]">
                          WebGPU / WebGL
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* BENTO GRID KEY FEATURES SECTION */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 bg-neutral-100/50 dark:bg-[#090d18]/40 border-y border-neutral-200/50 dark:border-[#10192b]">
              <div className="max-w-7xl mx-auto space-y-12">
                
                <div className="text-center space-y-3 max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Uncompromising Security, Local Efficiency
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
                    By keeping all computations client-side, Nahanjoo is designed to answer the security demands of critical enterprises, healthcare teams, and legal professionals.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Feature 1 */}
                  <div className="bg-white dark:bg-[#0c101c] p-6 rounded-2xl border border-neutral-200 dark:border-[#131b2e] space-y-4 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-800 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-105 transition-transform">
                      <Lock className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Zero Cloud Leakage</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      Absolutely zero cloud dependency. Your personal tax records, legal drafts, and medical papers never pass through corporate servers or network logs. Fully local.
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="bg-white dark:bg-[#0c101c] p-6 rounded-2xl border border-neutral-200 dark:border-[#131b2e] space-y-4 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-800 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Local Embedding Models</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      Nahanjoo embeds tiny, ultra-optimized transformer embedding models (like Xenova/all-MiniLM-L6-v2) directly inside your browser cache. Local tokenization and local vector creation.
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="bg-white dark:bg-[#0c101c] p-6 rounded-2xl border border-neutral-200 dark:border-[#131b2e] space-y-4 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-800 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform">
                      <Download className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">The Portable HTML Trick</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      A standalone web wrapper. Export Nahanjoo as a single independent HTML file package. Throw it on an air-gapped secure computer, double click to run, and analyze documents immediately offline.
                    </p>
                  </div>

                  {/* Feature 4 */}
                  <div className="bg-white dark:bg-[#0c101c] p-6 rounded-2xl border border-neutral-200 dark:border-[#131b2e] space-y-4 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-800 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform">
                      <Database className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Browser-native Vector DB</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      Uses IndexedDB and standard client-side storage structures to maintain structured indices. Instantly search hundreds of pages of document chunks in milliseconds using Cosine Similarity.
                    </p>
                  </div>

                  {/* Feature 5 */}
                  <div className="bg-white dark:bg-[#0c101c] p-6 rounded-2xl border border-neutral-200 dark:border-[#131b2e] space-y-4 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-800 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:scale-105 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">No Subscription Costs</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      You are not renting computing power on a third-party server. All data rendering and semantic generation happens on your own CPU/GPU cores. Infinite free document search.
                    </p>
                  </div>

                  {/* Feature 6 */}
                  <div className="bg-white dark:bg-[#0c101c] p-6 rounded-2xl border border-neutral-200 dark:border-[#131b2e] space-y-4 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-800 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Rich Asset Support</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      Drag-and-drop support for PDF documents, Word `.docx` documents, custom Markdown structures, and raw txt log sheets. Quick parsing and metadata categorization.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* CALL TO ACTION ACCENT */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
              <div className="relative rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-700 p-8 sm:p-12 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
                <div className="relative max-w-2xl text-white space-y-4">
                  <h2 className="text-3xl font-bold">Ready to see it in action?</h2>
                  <p className="text-teal-50 opacity-90">
                    We built a fully interactive local RAG client-side simulator. You can upload files, run local chunking processes, see physical vector configurations, and query the dataset locally inside this tab.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-4">
                    <button
                      onClick={() => setActiveTab('sandbox')}
                      className="px-5 py-3 rounded-xl bg-white text-teal-700 hover:bg-teal-50 font-semibold transition-all shadow-md flex items-center gap-1.5"
                    >
                      <span>Open Interactive Sandbox</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveTab('guide')}
                      className="px-5 py-3 rounded-xl bg-teal-800/40 text-white border border-teal-500/30 hover:bg-teal-800/60 font-semibold transition-all"
                    >
                      Get Offline Bundle Guide
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}


        {/* =======================================================
            TAB 2: INTERACTIVE SANDBOX (DEMO SIMULATOR)
            ======================================================= */}
        {activeTab === 'sandbox' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 space-y-8">
            
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Interactive Client-Side RAG Simulator
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Understand RAG conceptually. Select a sample private document or write your own. Run the offline indexing step to watch local vector coordinates form. Then, ask questions! Everything stays inside this sandbox.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Document Selection & Vectorizer Indexing */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Panel 1: Document Upload / Select */}
                <div className="bg-white dark:bg-[#0c101c] p-5 rounded-2xl border border-neutral-200 dark:border-[#121b2f] shadow-sm space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-100 dark:border-neutral-900">
                    <h2 className="font-bold text-sm tracking-wider uppercase text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5">
                      <FileUp className="w-4 h-4" /> Step 1: Input Document
                    </h2>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.2 rounded font-mono">
                      Safe Sandbox
                    </span>
                  </div>

                  {/* Document Presets selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                      Choose Private Document Preset:
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {PRESET_DOCUMENTS.map(doc => (
                        <button
                          key={doc.id}
                          onClick={() => handleDocChange(doc.id)}
                          className={`w-full p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${
                            selectedDocId === doc.id && !isCustomActive
                              ? 'border-teal-500 bg-teal-500/5 text-neutral-900 dark:text-white ring-2 ring-teal-500/20'
                              : 'border-neutral-200 dark:border-[#131b2e] bg-neutral-50 dark:bg-neutral-900/40 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                          }`}
                        >
                          <div className="mt-0.5 p-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                            {doc.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center">
                              <p className="text-xs font-bold truncate">{doc.title}</p>
                              {doc.isSensitive && (
                                <span className="text-[9px] bg-red-500/10 text-red-500 px-1 rounded font-semibold">Sensitive</span>
                              )}
                            </div>
                            <p className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-0.5 truncate">{doc.category}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-neutral-100 dark:border-neutral-900"></div>
                    <span className="flex-shrink mx-3 text-[11px] font-mono text-neutral-400 uppercase">Or Custom Text</span>
                    <div className="flex-grow border-t border-neutral-100 dark:border-neutral-900"></div>
                  </div>

                  {/* Custom Document Input */}
                  <div className="space-y-2">
                    <textarea
                      placeholder="Paste your sensitive documents, medical records, proprietary logs, or legal clauses here..."
                      value={customText}
                      onChange={(e) => {
                        setCustomText(e.target.value);
                        setIsCustomActive(true);
                        setSelectedDocId('');
                      }}
                      className="w-full h-24 p-3 text-xs bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-[#131b2e] rounded-xl focus:outline-none focus:border-teal-500 font-mono resize-none text-neutral-700 dark:text-neutral-300"
                    />
                    <div className="flex justify-end">
                      <button
                        onClick={handleCustomTextSubmit}
                        disabled={customText.trim().length < 15}
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold flex items-center gap-1 transition-all ${
                          customText.trim().length >= 15
                            ? 'bg-teal-600 hover:bg-teal-500 text-white'
                            : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed'
                        }`}
                      >
                        <Zap className="w-3.5 h-3.5" /> Initialize Custom Text
                      </button>
                    </div>
                  </div>

                </div>

                {/* Panel 2: Vectorizer Pipeline Status */}
                <div className="bg-white dark:bg-[#0c101c] p-5 rounded-2xl border border-neutral-200 dark:border-[#121b2f] shadow-sm space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-neutral-100 dark:border-neutral-900">
                    <h2 className="font-bold text-sm tracking-wider uppercase text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4" /> Step 2: Indexer Progress
                    </h2>
                  </div>

                  {/* Action trigger */}
                  {indexingStep === 'idle' ? (
                    <div className="space-y-3 py-2 text-center">
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        This document is selected but has not been parsed or vectorized.
                      </p>
                      <button
                        onClick={startIndexing}
                        className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-1.5"
                      >
                        <RefreshCw className="w-4 h-4" /> Run Vector Indexer (100% Client-Side)
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* State Tracker Visual */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                          <span>Status:</span>
                          <span className="text-teal-500 font-bold uppercase">
                            {indexingStep === 'parsing' && '📂 Parsing File Structures...'}
                            {indexingStep === 'chunking' && '✂️ Splitting Chunks...'}
                            {indexingStep === 'embedding' && '🧬 Modeling Local Vectors...'}
                            {indexingStep === 'completed' && '✅ Indexing Completed!'}
                          </span>
                        </div>
                        <div className="h-2 bg-neutral-200 dark:bg-neutral-900 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-300"
                            style={{ width: `${indexingProgress}%` }}
                          />
                        </div>
                      </div>

                      {/* Process Logs Box */}
                      <div className="bg-neutral-50 dark:bg-neutral-950 p-3 rounded-xl border border-neutral-100 dark:border-neutral-900 font-mono text-[10px] text-neutral-500 dark:text-neutral-400 space-y-1">
                        <div className="flex justify-between">
                          <span>[INFO] Init WASM environment</span>
                          <span className="text-emerald-500">READY</span>
                        </div>
                        {indexingProgress >= 15 && (
                          <div className="flex justify-between">
                            <span>[INFO] Extracted plaintext text content</span>
                            <span className="text-teal-500">OK ({isCustomActive ? 'Custom' : selectedDocId})</span>
                          </div>
                        )}
                        {indexingProgress >= 50 && (
                          <div className="flex justify-between">
                            <span>[INFO] Created {currentChunks.length} logical text fragments</span>
                            <span className="text-teal-500">{currentChunks.length} chunks</span>
                          </div>
                        )}
                        {indexingProgress >= 85 && (
                          <div className="flex justify-between">
                            <span>[INFO] local-all-MiniLM-L6 vectorizing...</span>
                            <span className="text-teal-500">384-dims OK</span>
                          </div>
                        )}
                        {indexingProgress === 100 && (
                          <div className="text-center text-teal-500 font-bold mt-1 uppercase border-t border-neutral-100 dark:border-neutral-900/60 pt-1">
                            🚀 Database loaded locally inside indexedDB
                          </div>
                        )}
                      </div>

                      {indexingStep === 'completed' && (
                        <button
                          onClick={startIndexing}
                          className="w-full py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-[10px] font-mono transition-all flex items-center justify-center gap-1"
                        >
                          <RefreshCw className="w-3.5 h-3.5" /> Re-index Chunks
                        </button>
                      )}
                    </div>
                  )}

                </div>

              </div>

              {/* Right Column: Vectors, Semantic Query and AI Chat */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Part 3: Physical Vector Chunks Visualizer */}
                <div className="bg-white dark:bg-[#0c101c] p-5 rounded-2xl border border-neutral-200 dark:border-[#121b2f] shadow-sm space-y-3">
                  <h3 className="font-bold text-xs tracking-wider uppercase text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5">
                    <Database className="w-4 h-4" /> Indexed Document Embeddings ({currentChunks.length} Chunks)
                  </h3>

                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-1">
                    {currentChunks.length > 0 ? (
                      currentChunks.map((chunk, idx) => {
                        const isRetrieved = retrievedIndices.includes(idx);
                        return (
                          <div 
                            key={idx}
                            className={`p-2.5 rounded-xl border text-xs transition-all space-y-1.5 ${
                              isRetrieved 
                                ? 'bg-teal-500/10 border-teal-500 dark:border-teal-500 ring-1 ring-teal-500/20' 
                                : 'bg-neutral-50 dark:bg-neutral-900/30 border-neutral-100 dark:border-[#121b2e]'
                            }`}
                          >
                            <div className="flex justify-between items-center text-[10px] font-mono">
                              <span className={`font-bold ${isRetrieved ? 'text-teal-600 dark:text-teal-400' : 'text-neutral-400'}`}>
                                Chunk #{idx + 1} {isRetrieved && '★ RETRIEVED'}
                              </span>
                              <span className="text-neutral-400 max-w-[150px] truncate" title={chunk.vector}>
                                Vector: {chunk.vector}
                              </span>
                              {isRetrieved && similarityScores[idx] && (
                                <span className="bg-teal-500/25 text-teal-600 dark:text-teal-300 font-bold px-1 rounded">
                                  Score: {similarityScores[idx]}
                                </span>
                              )}
                            </div>
                            <p className={`text-[11px] leading-relaxed italic ${isRetrieved ? 'text-neutral-900 dark:text-neutral-100 font-medium' : 'text-neutral-500 dark:text-neutral-400'}`}>
                              "{chunk.text}"
                            </p>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-6 text-xs text-neutral-400 font-mono italic">
                        No chunks loaded. Select a document and trigger the indexer!
                      </div>
                    )}
                  </div>
                </div>

                {/* Part 4: Ask Questions AI Chat interface */}
                <div className="bg-white dark:bg-[#0c101c] p-5 rounded-2xl border border-neutral-200 dark:border-[#121b2f] shadow-sm space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-neutral-100 dark:border-neutral-900">
                    <h3 className="font-bold text-xs tracking-wider uppercase text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4" /> Step 3: Ask Your Offline Document
                    </h3>
                  </div>

                  {/* Preset Quick Questions (only if document is active) */}
                  {!isCustomActive && selectedDocId && indexingStep === 'completed' && (
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                        Suggested Private Questions:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {PRESET_DOCUMENTS.find(d => d.id === selectedDocId)?.presets.map((preset, pIdx) => (
                          <button
                            key={pIdx}
                            onClick={() => handleQuery(preset.q)}
                            className="bg-neutral-100 dark:bg-neutral-900 hover:bg-teal-50 dark:hover:bg-teal-900/20 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 text-[10px] font-medium px-2.5 py-1 rounded-lg transition-colors text-left truncate max-w-full"
                          >
                            "{preset.q}"
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Custom query input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder={indexingStep === 'completed' ? "Type a private question about your indexed document..." : "Please complete Step 2 (Indexer Progress) first..."}
                      disabled={indexingStep !== 'completed'}
                      value={activeQuery}
                      onChange={(e) => setActiveQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleQuery(activeQuery);
                      }}
                      className="flex-1 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-[#131b2e] rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-neutral-700 dark:text-neutral-300"
                    />
                    <button
                      onClick={() => handleQuery(activeQuery)}
                      disabled={indexingStep !== 'completed' || !activeQuery.trim()}
                      className="px-4 py-2 bg-teal-600 hover:bg-teal-500 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-1 shadow-sm"
                    >
                      <Search className="w-3.5 h-3.5" /> Query
                    </button>
                  </div>

                  {/* AI Response Display Window */}
                  {(isSearching || searchedQuery) && (
                    <div className="bg-neutral-50 dark:bg-neutral-950 p-4 rounded-2xl border border-neutral-100 dark:border-[#131b2e] space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-mono pb-2 border-b border-neutral-200/50 dark:border-neutral-900/60">
                        <span className="text-teal-600 dark:text-teal-400 font-bold uppercase flex items-center gap-1">
                          <Terminal className="w-3.5 h-3.5" /> QUERY: "{searchedQuery}"
                        </span>
                        <span className="text-neutral-400">
                          {isSearching ? '🔍 Vector Scanning...' : '🧠 Local LLM Synthesizer'}
                        </span>
                      </div>

                      {isSearching ? (
                        <div className="flex items-center gap-2 text-xs text-neutral-500 py-4 font-mono justify-center">
                          <RefreshCw className="w-4 h-4 animate-spin text-teal-500" />
                          <span>Scanning indexed browser buffers...</span>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <p className="text-xs leading-relaxed text-neutral-800 dark:text-neutral-100 font-sans whitespace-pre-line">
                            {aiAnswerStream}
                            <span className="animate-blink inline-block w-1.5 h-3.5 bg-teal-500 ml-0.5" />
                          </p>

                          {/* Source Chunks Attributions list */}
                          {!isSearching && retrievedIndices.length > 0 && (
                            <div className="pt-2 border-t border-neutral-200/50 dark:border-neutral-900/60 text-[10px] space-y-1 text-neutral-500">
                              <p className="font-bold uppercase font-mono text-[9px] text-teal-600 dark:text-teal-400">
                                Grounded References Found Locally:
                              </p>
                              {retrievedIndices.map(idx => (
                                <div key={idx} className="flex items-start gap-1">
                                  <span className="text-teal-500">•</span>
                                  <p className="italic">
                                    Chunk #{idx + 1} (Similarity Match Score: {similarityScores[idx] || '0.850'})
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Chat logs history */}
                  {chatHistory.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                        Session Query Log History ({chatHistory.length})
                      </p>
                      <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                        {chatHistory.map((item, hIdx) => (
                          <div key={hIdx} className="p-2.5 bg-neutral-100/50 dark:bg-neutral-900/30 rounded-xl border border-neutral-200/40 dark:border-neutral-900/60 text-[11px] space-y-1">
                            <p className="font-bold text-neutral-700 dark:text-neutral-300">Q: {item.q}</p>
                            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">A: {item.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>

            </div>

          </div>
        )}

        {/* =======================================================
            TAB 3: ARCHITECTURE / HOW IT WORKS
            ======================================================= */}
        {activeTab === 'architecture' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 space-y-12">
            
            <div className="space-y-3 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                How Nahanjoo Works Client-Side
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-2xl mx-auto">
                Unlike traditional cloud LLMs that require sending your documents over public servers, Nahanjoo runs its pipeline entirely inside your local device processor.
              </p>
            </div>

            {/* Architecture diagram cards */}
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                
                {/* Step 1 */}
                <div className="bg-white dark:bg-[#0c101c] p-5 rounded-2xl border border-neutral-200 dark:border-[#121b2e] space-y-3">
                  <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">STEP 01</div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-white">File Ingress & Parse</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    A PDF, Word, or TXT file is dragged directly into the window. The browser pulls the binary array into memory with zero server transmission.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white dark:bg-[#0c101c] p-5 rounded-2xl border border-neutral-200 dark:border-[#121b2e] space-y-3">
                  <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">STEP 02</div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-white">Local Chunking</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Plaintext content is divided into tiny overlapping chunk tokens. This helps maintain context during similarity scans.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white dark:bg-[#0c101c] p-5 rounded-2xl border border-neutral-200 dark:border-[#121b2e] space-y-3">
                  <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">STEP 03</div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-white">On-device Modeling</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Lightweight embedder models run locally using WebGPU or WebAssembly. Each chunk is mapped into a vector representing its semantics.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white dark:bg-[#0c101c] p-5 rounded-2xl border border-neutral-200 dark:border-[#121b2e] space-y-3">
                  <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">STEP 04</div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-white">Interactive RAG</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    When queried, the browser calculates mathematical similarities, pulls matching chunks, and feeds them locally to an offline client-side LLM.
                  </p>
                </div>

              </div>

              {/* Portable Standalone Details */}
              <div className="bg-white dark:bg-[#0c101c] p-6 rounded-2xl border border-[#131d2f] space-y-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-teal-500" />
                  <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Under the Hood Stack</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2">
                    <p className="font-bold text-xs text-neutral-400 uppercase font-mono tracking-wider">ONNX Runtime & Transformers.js</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed">
                      Leverages WebAssembly execution threads and WebGPU pipelines to accelerate neural network operations. Runs standard models at high speeds directly in modern Chrome, Firefox, and Safari, requiring no drivers or CLI configs.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-xs text-neutral-400 uppercase font-mono tracking-wider">The Single HTML compilation</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed">
                      Nahanjoo bundles code, assets, UI styles, and logic files into a single standalone page wrapper. Perfect for secure operations, highly structured industrial air-gaps, or absolute backup scenarios.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* =======================================================
            TAB 4: GETTING STARTED / GUIDE
            ======================================================= */}
        {activeTab === 'guide' && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 space-y-8">
            
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Get Started with Nahanjoo
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Get Nahanjoo running locally on your own machine. No server installation or complex Python dependencies required. Just clone, compile, or double click the single HTML.
              </p>
            </div>

            {/* Quick Clone Terminal Command */}
            <div className="bg-neutral-900 p-5 rounded-2xl border border-neutral-800 space-y-3 text-white">
              <div className="flex justify-between items-center text-xs text-neutral-400 pb-2 border-b border-neutral-800">
                <span className="font-mono flex items-center gap-1.5"><Terminal className="w-4 h-4 text-teal-400" /> Command Line Setup</span>
                <button
                  onClick={() => copyToClipboard('git clone https://github.com/ZhiwarSajadi/Nahanjoo.git\ncd Nahanjoo\nnpm install\nnpm run dev', 'git-clone')}
                  className="hover:text-white flex items-center gap-1 transition-colors text-[10px]"
                >
                  {copiedText === 'git-clone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedText === 'git-clone' ? 'Copied!' : 'Copy CMD'}</span>
                </button>
              </div>
              <pre className="text-xs font-mono text-teal-300 overflow-x-auto p-1 leading-relaxed">
                <code>{`# Clone the repository
git clone https://github.com/ZhiwarSajadi/Nahanjoo.git

# Enter project directory
cd Nahanjoo

# Install package dependencies
npm install

# Launch your local offline dev server
npm run dev`}</code>
              </pre>
            </div>

            {/* Step-by-Step guides */}
            <div className="space-y-6">
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center font-bold text-teal-500 text-sm flex-shrink-0">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-neutral-900 dark:text-white text-base">Clone & Open</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Simply clone the repository from GitHub. The codebase is highly modular, readable, and structured using clean React, TypeScript, and Vite.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center font-bold text-teal-500 text-sm flex-shrink-0">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-neutral-900 dark:text-white text-base">Export Raw Standalone File</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Build the standalone distribution bundle. Run <code className="bg-neutral-100 dark:bg-neutral-900 px-1 py-0.5 rounded font-mono text-xs">npm run build:offline</code> inside the workspace. The compiler will aggregate all required modules and produce a lightweight, singular HTML layout you can open with any web client.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center font-bold text-teal-500 text-sm flex-shrink-0">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-neutral-900 dark:text-white text-base">Air-Gapped Privacy Deployment</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Copy the single HTML bundle or folder compilation to any secure workstation or private server directory. Enjoy complete retrieval and querying capabilities without ever connecting to an online socket.
                  </p>
                </div>
              </div>

            </div>

            {/* GitHub Info Card */}
            <div className="p-6 bg-teal-500/5 rounded-2xl border border-teal-500/10 space-y-4">
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-teal-500" />
                <h3 className="font-bold text-neutral-900 dark:text-white text-sm sm:text-base">Contribute & Stars</h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Nahanjoo is an open-source, community-driven project created to defend data privacy. 
                If you find this utility helpful, please star the repository, open pull requests, and share suggestions to improve local offline AI model support!
              </p>
              <div className="pt-2">
                <a
                  href="https://github.com/ZhiwarSajadi/Nahanjoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs transition-all shadow"
                >
                  <span>Star on GitHub</span>
                  <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-neutral-900/60 bg-white dark:bg-[#060810] py-8 text-xs text-neutral-500 dark:text-neutral-400 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-900 dark:text-white font-mono text-sm tracking-tight">نه‌هانجو | Nahanjoo</span>
            <span className="text-neutral-300 dark:text-neutral-800">|</span>
            <span>100% Client-Side Private AI Sandbox Platform</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px]">
            <span>MIT License</span>
            <span className="text-neutral-300 dark:text-neutral-800">•</span>
            <a 
              href="https://github.com/ZhiwarSajadi/Nahanjoo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Nahanjoo Core</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="text-neutral-300 dark:text-neutral-800">•</span>
            <a 
              href="https://github.com/ZhiwarSajadi/Nahanjoo-website" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Website Repo</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
