'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useMode } from '@/context/ModeContext';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

type ProjectLabel = 'RESEARCH' | 'POC' | 'IDEATION' | 'ACTIVE';

interface ProjectDetail {
  title: string;
  id: string;
  category: string;
  status: string;
  tier: 1 | 2;
  label?: ProjectLabel;
  githubUrl?: string;
  stack: string[];
  metrics?: { label: string; value: string }[];
  description: {
    technical: string[];
    executive: string[];
  };
  learned?: string[];
  codeInsight?: { file: string; content: string };
  icon: string;
}

const LABEL_STYLES: Record<ProjectLabel, string> = {
  RESEARCH: 'text-purple-400 border-purple-400/30 bg-purple-400/5',
  POC: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  IDEATION: 'text-outline border-outline/30 bg-outline/5',
  ACTIVE: 'text-green-400 border-green-400/30 bg-green-400/5',
};

const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  // ── TIER 1 ──────────────────────────────────────────────────────────────
  'zorvyn': {
    id: '0xZ001',
    title: 'Zorvyn — Financial Backend',
    category: 'Backend Systems',
    status: 'Production-Ready',
    tier: 1,
    icon: 'account_balance',
    githubUrl: 'https://github.com/suryansh-sharma420/Finance-Data-Processing-and-Access-Control-Backend',
    stack: ['FastAPI', 'Pydantic', 'SQLAlchemy', 'SQLite', 'JWT', 'Pytest', 'Streamlit'],
    metrics: [
      { label: 'Test Coverage', value: '100%' },
      { label: 'Auth', value: 'JWT + RBAC' },
      { label: 'Roles', value: '3 (Admin / Analyst / Viewer)' },
      { label: 'Analytics', value: 'MoM Growth, Savings Rate' },
    ],
    description: {
      technical: [
        'Clean 3-layer architecture: API routes handle HTTP only, Services own business logic, Repositories own all DB queries. No logic bleeds between layers.',
        'RBAC enforced at the dependency level — Admin has global access, Analyst gets read-only global visibility, Viewer is strictly isolated to their own records. JWT Bearer token validated and cross-referenced against the DB on every request.',
        'Analytics engine computes Net Balance, Savings Rate %, and Month-over-Month Income/Expense Growth on-the-fly using SQLite strftime grouping — no pre-aggregated tables.',
        '100% Pytest coverage using an in-memory StaticPool SQLite environment completely decoupled from the production database.',
      ],
      executive: [
        'A secure financial management API with three distinct user tiers: full-control admins, read-only analysts, and privacy-isolated viewers.',
        'Automatically calculates financial trends — net balance, savings rate, and month-over-month growth — from raw transaction data without manual reporting.',
        'Built with complete automated test coverage to ensure reliability at every layer.',
      ],
    },
    learned: [
      'Enforcing strict layered architecture end-to-end — not just on paper',
      'Full FastAPI + SQLAlchemy stack: routing, ORM, dependency injection',
      'API design iteration using Swagger UI',
      'Writing isolated Pytest suites with in-memory DB (StaticPool — no prod dependency)',
    ],
    codeInsight: {
      file: 'dependencies.py',
      content: `async def get_current_active_superuser(
    current_user: User = Depends(get_current_user),
) -> User:
    if not current_user.is_superuser:
        raise HTTPException(403, "Not enough permissions")
    return current_user`,
    },
  },

  'sagepilot': {
    id: '0xS002',
    title: 'Sagepilot — AI Order Supervisor',
    category: 'AI Agents',
    status: 'Stable',
    tier: 1,
    icon: 'smart_toy',
    githubUrl: 'https://github.com/suryansh-sharma420/AI_Supervisor',
    stack: ['FastAPI', 'PostgreSQL', 'Alembic', 'Groq', 'Llama-3.3-70b', 'Llama-3.1-8b', 'asyncpg', 'React'],
    metrics: [
      { label: 'Agent Model', value: 'Llama-3.3-70b' },
      { label: 'Classifier', value: 'Llama-3.1-8b' },
      { label: 'Pattern', value: 'Agent-per-Entity' },
      { label: 'DB', value: 'PostgreSQL + Alembic' },
    ],
    description: {
      technical: [
        'Each order spawns a dedicated autonomous supervisor agent running Llama-3.3-70b via Groq. The agent runs a persistent loop — watching for domain events (payment failure, shipment update, delivery confirmation) and deciding actions (notify team, create note, sleep until next check-in).',
        'A lightweight Llama-3.1-8b classifier routes incoming events to the correct handler before the main agent processes them, reducing context overhead.',
        'PostgreSQL + Alembic for schema migrations. asyncpg for async DB access. React frontend provides an order dashboard and agent activity log.',
      ],
      executive: [
        'Every customer order gets its own AI brain. It watches for problems — payment failures, delayed shipments, delivery issues — and keeps the right people informed automatically.',
        'Built with two AI models working together: a fast classifier that identifies what type of event just happened, and a larger reasoning model that decides what to do about it.',
        'Full web interface for monitoring order status and agent decisions in real time.',
      ],
    },
    learned: [
      'Order lifecycle management in e-commerce systems',
      'Job schedulers and long-running async agent loops',
      'Test-driven development in practice',
      'PostgreSQL connection + query optimization with asyncpg',
      'Scaling considerations for agent-per-entity patterns',
      'Context window optimization for LLM agents',
    ],
    codeInsight: {
      file: 'agent.py',
      content: `async def run_supervisor(order_id: str):
    while order.status != "completed":
        event = await wait_for_event(order_id)
        action = await llm.decide(event, context=order.history)
        await execute(action)
        await asyncio.sleep(action.next_check_in)`,
    },
  },

  'propaganda-detection': {
    id: '0xP003',
    title: 'Propaganda Detection Engine',
    category: 'NLP / Research',
    status: 'Research Complete',
    tier: 1,
    label: 'RESEARCH',
    icon: 'monitoring',
    githubUrl: 'https://github.com/suryansh-sharma420/Propaganda-Detection-Project',
    stack: ['PyTorch', 'XLM-RoBERTa', 'PEFT', 'LoRA', 'Hugging Face Transformers'],
    metrics: [
      { label: 'Recall (Propaganda)', value: '75.3%' },
      { label: 'Specificity', value: '100%' },
      { label: 'Eval Sample', value: '185 verified' },
      { label: 'Class Imbalance', value: '5.5 : 1' },
    ],
    description: {
      technical: [
        'Sequential transfer learning pipeline: XLM-RoBERTa first trained on clean SemEval news articles, then domain-adaptive pretraining (DAPT) on noisy tweet corpus (HQP), then fine-tuned back on SemEval only. Clean-first approach produced significantly better generalization than training directly on tweets.',
        'Severe 5.5:1 class imbalance mitigated with a custom PyTorch Focal Loss function — down-weights easy negatives, focuses training on hard propaganda examples.',
        'Cross-lingual generalization: XLM-RoBERTa\'s multilingual pretraining enables EN/HI classification without separate Hindi training data.',
        'Final model: 75.3% propaganda recall with zero false positives on 100 verified neutral samples — acts as a high-precision "Loaded Language Detector".',
      ],
      executive: [
        'AI system that detects manipulative and propaganda content in social media posts across English and Hindi.',
        'Key insight: training on clean news articles first — before exposing the model to messy tweet data — produced far better results than training on tweets directly.',
        'The model achieves zero false positives on neutral content, meaning it only flags something as propaganda when it is highly confident.',
      ],
    },
    learned: [
      'Fine-tuning BERT-family models end-to-end',
      'Dataset quality matters more than model architecture',
      'Sequential transfer learning: clean domain → noisy domain adaptation',
      'LoRA for parameter-efficient fine-tuning (fewer trainable params, same performance)',
      'Multilingual models (XLM-RoBERTa) for cross-lingual generalization without parallel data',
    ],
  },

  'red-teaming-platform': {
    id: '0xR004',
    title: 'LLM Red Teaming Platform',
    category: 'AI Safety',
    status: 'Internal / WIP',
    tier: 1,
    icon: 'security',
    stack: ['Node.js', 'Express', 'Garak', 'React', 'Vite', 'LiteLLM'],
    metrics: [
      { label: 'Attack Types', value: '15+' },
      { label: 'Interface', value: 'Full Web UI' },
      { label: 'Backend', value: 'Express + Garak' },
      { label: 'Output', value: 'JSON Vuln Reports' },
    ],
    description: {
      technical: [
        'Express.js backend orchestrates Garak probe runs programmatically. A proxy layer sits between the UI and the target model — intercepting calls for attack injection, logging, and result capture.',
        'Multi-route architecture: /run (execute eval), /models (target selection), /chat (direct chatbot testing), /documents (upload attack configs), /evaluation (results viewer), /chatbot (interactive adversarial session).',
        'Structured JSON vulnerability reports per eval run, stored to disk for audit trails. React/Vite frontend for full UI access without needing the terminal.',
      ],
      executive: [
        'A platform that automatically attacks AI models to discover security vulnerabilities — prompt injection, jailbreaking, recursive encoding bypasses — before bad actors can exploit them.',
        'Brings AI security testing into a web interface, replacing command-line tools with a structured, repeatable workflow.',
        'Produces clear vulnerability reports that security teams can act on directly.',
      ],
    },
    learned: [
      'Red teaming methodology: attack types, probes, strategies, and what actually matters',
      'How to orchestrate Garak programmatically (not just CLI)',
      'Building a proxy interception layer for LLM call capture',
      'Iterative attack strategy development and refinement',
    ],
  },

  // ── TIER 2 ──────────────────────────────────────────────────────────────
  'dsa-tracker': {
    id: '0xD005',
    title: 'DSA Submissions Tracker',
    category: 'Practice',
    status: 'Active',
    tier: 2,
    label: 'ACTIVE',
    icon: 'code',
    githubUrl: 'https://github.com/suryansh-sharma420/neetcode-submissions-28x1abk4',
    stack: ['NeetCode', 'GitHub Actions', 'Python'],
    description: {
      technical: ['NeetCode auto-pushes solutions to GitHub on every submission. Live record of DSA problem-solving across arrays, graphs, dynamic programming, trees, and more.'],
      executive: ['Consistent, tracked practice in data structures and algorithms — automatically synced to GitHub on every solved problem.'],
    },
  },

  'scam-proof-app': {
    id: '0xC006',
    title: 'Scam-Proof Ordering App',
    category: 'Full Stack',
    status: 'POC',
    tier: 2,
    label: 'POC',
    icon: 'verified_user',
    stack: ['FastAPI', 'React', 'Vite', 'SQLite', 'Web Scraping'],
    description: {
      technical: [
        'URL crawler that scrapes an online store\'s pages and internal links, extracts safety signals (trust indicators, suspicious patterns), and generates a structured scam risk report. FastAPI backend + React/Vite frontend.',
        'Proof-of-concept — not yet fully tested or deployed. Core scanning logic functional.',
      ],
      executive: ['Paste a shopping URL, get an instant safety verdict. Scans the store for scam indicators before you make a purchase. Early-stage prototype.'],
    },
  },

  'billing-engine': {
    id: '0xB007',
    title: 'Unified Billing Engine',
    category: 'Backend Systems',
    status: 'POC',
    tier: 2,
    label: 'POC',
    icon: 'payments',
    stack: ['FastAPI', 'PostgreSQL', 'Docker', 'Strategy Pattern', 'Redis'],
    description: {
      technical: [
        'Multi-tenant billing engine supporting Hybrid, Per-Trip, and Fixed pricing models via the Strategy Pattern — decoupled billing logic per model type. Built during a MoveInSync internship engagement.',
        'Current version is dated. Strategy Pattern architecture is sound but needs update to current FastAPI and testing standards.',
      ],
      executive: ['Enterprise billing system that handles multiple pricing models in one platform. Early-stage proof of concept built for a real logistics company use case.'],
    },
  },

  'video-enhancement': {
    id: '0xV008',
    title: 'Real-time Video Enhancement',
    category: 'Computer Vision',
    status: 'Ideation',
    tier: 2,
    label: 'IDEATION',
    icon: 'video_stable',
    stack: ['OpenCV', 'PyTorch', 'CUDA', 'Super-Resolution'],
    description: {
      technical: [
        'Concept: CUDA-accelerated deep learning super-resolution pipeline on live video streams. Target: 60+ FPS at <15ms latency for surveillance and sensor imagery.',
        'Explored existing super-resolution architectures. Implementation does not yet produce reliable results — idea and direction are clear, execution is in progress.',
      ],
      executive: ['AI-powered tool to sharpen low-quality live video in real time — security cameras, sensors, low-bandwidth feeds. Currently in the experimentation phase.'],
    },
  },

  'recipe-generator': {
    id: '0xG009',
    title: 'Recipe Generator',
    category: 'Generative AI',
    status: 'Ideation',
    tier: 2,
    label: 'IDEATION',
    icon: 'restaurant',
    stack: ['RAG', 'LangChain', 'FAISS', 'LLM', 'React'],
    description: {
      technical: [
        'Planned RAG pipeline: user inputs ingredients/dietary constraints → FAISS semantic retrieval over recipe corpus → LLM generates step-by-step recipe with alternatives.',
        'Deployed reference exists externally. Goal: build own version with polished UI and independent deployment.',
      ],
      executive: ['Tell the AI what\'s in your fridge and get a full recipe with steps, substitutions, and context. Planning to build and deploy an own version with a clean interface.'],
    },
  },
};

export default function ProjectDrillDown({ params }: { params: Promise<{ slug: string }> }) {
  const { mode } = useMode();
  const { slug } = use(params);
  const project = PROJECT_DETAILS[slug];

  if (!project) notFound();

  const isTier1 = project.tier === 1;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <header className="space-y-4">
          <Link href="/projects" className="font-space-grotesk text-[10px] text-primary-container uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            {mode === 'technical' ? 'RETURN_TO_PROJECT_GRID' : 'Back to Projects'}
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-space-grotesk text-primary-container text-xs tracking-[0.3em] uppercase">
                  {mode === 'technical' ? `NODE: ${project.id}` : project.category}
                </span>
                {project.label && (
                  <span className={`font-space-grotesk text-[9px] border px-2 py-0.5 uppercase tracking-wider ${LABEL_STYLES[project.label]}`}>
                    {project.label}
                  </span>
                )}
              </div>
              <h1 className="font-space-grotesk text-4xl md:text-7xl font-bold tracking-tighter text-on-surface uppercase leading-none">
                {project.title}
              </h1>
            </div>
            <div className="flex items-center gap-3 md:flex-col md:items-end md:text-right">
              <p className="text-outline text-xs uppercase tracking-widest font-space-grotesk">Status: {project.status}</p>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-primary-container/30 text-primary-container font-space-grotesk text-[10px] uppercase tracking-wider hover:bg-primary-container/10 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  View on GitHub
                </a>
              )}
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-primary-container/40 to-transparent mt-4"></div>
        </header>

        {isTier1 ? <Tier1Content project={project} mode={mode} /> : <Tier2Content project={project} mode={mode} />}
      </main>

      <Footer />
    </div>
  );
}

function Tier1Content({ project, mode }: { project: ProjectDetail; mode: 'technical' | 'executive' }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Left */}
      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="font-space-grotesk text-xl font-bold uppercase tracking-tight flex items-center gap-4">
            <span className="text-primary-container">01</span>
            {mode === 'technical' ? 'Architecture & Implementation' : 'Overview & Impact'}
          </h2>
          <div className="font-body text-on-surface-variant leading-relaxed space-y-5">
            {(mode === 'technical' ? project.description.technical : project.description.executive).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {project.metrics && (
          <section className="grid grid-cols-2 gap-4">
            {project.metrics.map((m, i) => (
              <div key={i} className="glass-panel p-5 border-l-2 border-primary-container">
                <p className="font-space-grotesk text-[10px] text-outline uppercase tracking-[0.2em] mb-1">{m.label}</p>
                <p className="font-space-grotesk text-xl font-bold text-primary-container uppercase tracking-tight">{m.value}</p>
              </div>
            ))}
          </section>
        )}

        <section className="space-y-3">
          <h4 className="font-space-grotesk text-xs text-primary-container uppercase tracking-widest">Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tag => (
              <span key={tag} className="font-space-grotesk text-[10px] uppercase tracking-wider bg-surface-container px-3 py-1 text-on-surface border border-outline-variant/20">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Right */}
      <div className="space-y-8">
        {project.learned && (
          <section className="glass-panel p-8 space-y-4">
            <div className="corner-bracket-tl"></div>
            <h3 className="font-space-grotesk text-xs text-primary-container uppercase tracking-widest">
              {mode === 'technical' ? 'What_I_Learned' : 'Key Takeaways'}
            </h3>
            <ul className="space-y-3">
              {project.learned.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-on-surface-variant">
                  <span className="text-primary-container/50 font-space-grotesk text-[10px] mt-1 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.codeInsight && (
          <section className="glass-panel p-8 space-y-4">
            <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
              <span className="font-space-grotesk text-xs text-primary-container uppercase">Code_Insight</span>
              <span className="font-space-grotesk text-[10px] text-outline">{project.codeInsight.file}</span>
            </div>
            <pre className="bg-surface-container-lowest p-5 font-mono text-[11px] text-on-surface-variant overflow-x-auto whitespace-pre leading-relaxed rounded-sm">
              {project.codeInsight.content}
            </pre>
          </section>
        )}
      </div>
    </div>
  );
}

function Tier2Content({ project, mode }: { project: ProjectDetail; mode: 'technical' | 'executive' }) {
  return (
    <div className="max-w-2xl space-y-10">
      <section className="space-y-5">
        <div className="font-body text-on-surface-variant leading-relaxed space-y-4">
          {(mode === 'technical' ? project.description.technical : project.description.executive).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h4 className="font-space-grotesk text-xs text-primary-container uppercase tracking-widest">Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.stack.map(tag => (
            <span key={tag} className="font-space-grotesk text-[10px] uppercase tracking-wider bg-surface-container px-3 py-1 text-on-surface border border-outline-variant/20">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary-container/30 text-primary-container font-space-grotesk text-xs uppercase tracking-wider hover:bg-primary-container/10 transition-all"
        >
          <span className="material-symbols-outlined text-sm">open_in_new</span>
          View on GitHub
        </a>
      )}
    </div>
  );
}
