'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useMode } from '@/context/ModeContext';
import Link from 'next/link';

type ProjectTier = 1 | 2;
type ProjectLabel = 'RESEARCH' | 'POC' | 'IDEATION' | 'ACTIVE';

interface Project {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  description: {
    technical: string;
    executive: string;
  };
  metrics?: Record<string, string>;
  category: string;
  icon: string;
  tier: ProjectTier;
  label?: ProjectLabel;
  githubUrl?: string;
}

const TIER1_PROJECTS: Project[] = [
  {
    id: '0xZ001',
    title: 'Zorvyn — Financial Backend',
    slug: 'zorvyn',
    category: 'Backend Systems',
    icon: 'account_balance',
    tier: 1,
    tags: ['FastAPI', 'SQLAlchemy', 'JWT', 'RBAC', 'Pytest'],
    githubUrl: 'https://github.com/suryansh-sharma420/Finance-Data-Processing-and-Access-Control-Backend',
    description: {
      technical: 'Clean 3-layer FastAPI backend (Routes → Services → Repositories) with RBAC (Admin/Analyst/Viewer), JWT auth, and an analytics engine computing MoM growth, savings rates, and net balance. 100% Pytest coverage with in-memory StaticPool isolation.',
      executive: 'Secure financial management API with role-based access control. Analysts get read-only dashboards, admins get full control, viewers see only their own data. Complete with automated test coverage.'
    },
    metrics: { 'Test Coverage': '100%', 'Auth': 'JWT + RBAC' }
  },
  {
    id: '0xS002',
    title: 'Sagepilot — AI Order Supervisor',
    slug: 'sagepilot',
    category: 'AI Agents',
    icon: 'smart_toy',
    tier: 1,
    tags: ['FastAPI', 'PostgreSQL', 'Llama-3', 'Groq', 'Alembic'],
    githubUrl: 'https://github.com/suryansh-sharma420/AI_Supervisor',
    description: {
      technical: 'Autonomous agent system where each e-commerce order gets a dedicated Llama-3.3-70b supervisor. Agent watches for events (payment failure, shipment updates) and takes actions. Llama-3.1-8b classifier routes events. FastAPI + PostgreSQL + React frontend.',
      executive: 'Each customer order gets its own AI supervisor that monitors delivery, flags payment issues, and keeps teams informed — automatically. Built with large language models and a full web interface.'
    },
    metrics: { 'Agent Model': 'Llama-3.3-70b', 'Pattern': 'Event-Driven' }
  },
  {
    id: '0xP003',
    title: 'Propaganda Detection Engine',
    slug: 'propaganda-detection',
    category: 'NLP / Research',
    icon: 'monitoring',
    tier: 1,
    label: 'RESEARCH',
    tags: ['PyTorch', 'XLM-RoBERTa', 'LoRA', 'PEFT', 'Hugging Face'],
    githubUrl: 'https://github.com/suryansh-sharma420/Propaganda-Detection-Project',
    description: {
      technical: 'Sequential transfer learning pipeline: XLM-RoBERTa pretrained on clean SemEval news data, then DAPT on noisy tweets (HQP). Mitigated 5.5:1 class imbalance with custom Focal Loss. Cross-lingual EN/HI classification.',
      executive: 'AI system detecting manipulative content in social media posts across English and Hindi. Training on clean data first — then adapting to real-world noisy tweets — produced a model with zero false positives on neutral content.'
    },
    metrics: { 'Recall': '75.3%', 'Specificity': '100%' }
  },
  {
    id: '0xR004',
    title: 'LLM Red Teaming Platform',
    slug: 'red-teaming-platform',
    category: 'AI Safety',
    icon: 'security',
    tier: 1,
    tags: ['Node.js', 'Garak', 'React', 'Vite', 'LLM Eval'],
    description: {
      technical: 'Full-stack adversarial evaluation platform. Express.js backend orchestrates Garak probe runs with a proxy layer intercepting model calls for attack injection. React/Vite frontend for running evals, chatbot testing, and document-based attack configs.',
      executive: 'A platform that automatically attacks AI models to find security weaknesses — before bad actors do. Covers prompt injection, jailbreaking, and recursive encoding bypasses. Results delivered as structured vulnerability reports.'
    },
    metrics: { 'Attack Types': '15+', 'Interface': 'Full UI' }
  }
];

const TIER2_PROJECTS: Project[] = [
  {
    id: '0xD005',
    title: 'DSA Submissions Tracker',
    slug: 'dsa-tracker',
    category: 'Practice',
    icon: 'code',
    tier: 2,
    label: 'ACTIVE',
    tags: ['NeetCode', 'GitHub Actions', 'Python'],
    githubUrl: 'https://github.com/suryansh-sharma420/neetcode-submissions-28x1abk4',
    description: {
      technical: 'NeetCode auto-pushes solutions to GitHub. Live record of DSA problem-solving activity across arrays, graphs, DP, and more.',
      executive: 'Consistent, tracked practice in data structures and algorithms — automatically synced to GitHub.'
    }
  },
  {
    id: '0xC006',
    title: 'Scam-Proof Ordering App',
    slug: 'scam-proof-app',
    category: 'Full Stack',
    icon: 'verified_user',
    tier: 2,
    label: 'POC',
    tags: ['FastAPI', 'React', 'Vite', 'Web Scraping'],
    description: {
      technical: 'URL crawler that extracts safety signals from an online store\'s pages and generates an explainable scam risk report. FastAPI backend + React frontend.',
      executive: 'Paste a shopping URL, get an instant safety verdict. Crawls the store and checks for scam indicators before you buy.'
    }
  },
  {
    id: '0xB007',
    title: 'Unified Billing Engine',
    slug: 'billing-engine',
    category: 'Backend Systems',
    icon: 'payments',
    tier: 2,
    label: 'POC',
    tags: ['FastAPI', 'PostgreSQL', 'Docker', 'Strategy Pattern'],
    description: {
      technical: 'Multi-tenant billing engine supporting Hybrid/Per-Trip/Fixed models using Strategy Pattern. Built during MoveInSync internship. Needs update to current standards.',
      executive: 'Enterprise billing system supporting multiple pricing models in one unified platform. Early-stage proof of concept.'
    }
  },
  {
    id: '0xV008',
    title: 'Real-time Video Enhancement',
    slug: 'video-enhancement',
    category: 'Computer Vision',
    icon: 'video_stable',
    tier: 2,
    label: 'IDEATION',
    tags: ['OpenCV', 'PyTorch', 'CUDA', 'Super-Res'],
    description: {
      technical: 'CUDA-accelerated deep learning super-resolution on live video streams targeting 60+ FPS at <15ms latency. Implementation in progress.',
      executive: 'AI-powered tool to sharpen low-quality live video in real time — security cameras, sensor feeds, low-bandwidth streams.'
    }
  },
  {
    id: '0xG009',
    title: 'Recipe Generator',
    slug: 'recipe-generator',
    category: 'Generative AI',
    icon: 'restaurant',
    tier: 2,
    label: 'IDEATION',
    tags: ['RAG', 'LangChain', 'FAISS', 'React'],
    description: {
      technical: 'RAG-based recipe generator: input ingredients/constraints → semantic retrieval → LLM generates step-by-step recipe. Targeting deployment with polished UI.',
      executive: 'Tell the AI what you have in your fridge. Get a full recipe with steps, alternatives, and nutritional context.'
    }
  }
];

const LABEL_STYLES: Record<ProjectLabel, string> = {
  RESEARCH: 'text-purple-400 border-purple-400/30 bg-purple-400/5',
  POC: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  IDEATION: 'text-outline border-outline/30 bg-outline/5',
  ACTIVE: 'text-green-400 border-green-400/30 bg-green-400/5',
};

export default function ProjectsPage() {
  const { mode } = useMode();

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 space-y-20">
        <header className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-space-grotesk text-primary-container text-xs tracking-[0.3em] uppercase mb-4 block">
                {mode === 'technical' ? 'SYSTEM_STATUS: OPERATIONAL' : 'STRATEGIC_OVERVIEW'}
              </span>
              <h1 className="font-space-grotesk text-5xl md:text-8xl font-bold tracking-tighter text-on-surface uppercase">
                {mode === 'technical' ? 'PROJECT_OPERATIONS' : 'THE_PORTFOLIO'}
              </h1>
            </div>
            <div className="md:text-right font-space-grotesk">
              <p className="text-outline text-xs uppercase tracking-widest mb-1">
                {mode === 'technical' ? 'Access Level: Administrator' : 'Executive Summary'}
              </p>
              <p className="text-on-surface-variant text-sm uppercase">
                {TIER1_PROJECTS.length} Featured · {TIER2_PROJECTS.length} Exploring
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-primary-container/40 to-transparent mt-8"></div>
        </header>

        {/* Tier 1 */}
        <section className="space-y-8">
          <h2 className="font-space-grotesk text-xs text-primary-container uppercase tracking-[0.4em]">
            {mode === 'technical' ? '// CORE_SYSTEMS' : 'Featured Work'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TIER1_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} mode={mode} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-outline-variant/20"></div>
          <span className="font-space-grotesk text-[10px] text-outline uppercase tracking-[0.3em]">
            {mode === 'technical' ? 'EXTENDED_MODULES' : 'Also Exploring'}
          </span>
          <div className="h-px flex-1 bg-outline-variant/20"></div>
        </div>

        {/* Tier 2 */}
        <section className="space-y-8">
          <p className="font-body text-sm text-on-surface-variant max-w-xl">
            {mode === 'technical'
              ? 'Experimental systems, active research, and ideas in development. Honest about maturity level.'
              : 'A mix of proof-of-concepts, ongoing practice, and early-stage ideas. Raw but real.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIER2_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} mode={mode} compact />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ProjectCard({ project, mode, compact = false }: { project: Project; mode: 'technical' | 'executive'; compact?: boolean }) {
  return (
    <div className={`glass-panel relative ${compact ? 'p-6' : 'p-8'} group hover:bg-surface-container-highest/60 transition-all duration-300`}>
      <div className="corner-bracket-tl"></div>
      <div className="corner-bracket-br"></div>

      <div className="flex justify-between items-start mb-5">
        <div className="w-10 h-10 rounded border border-primary-container/30 flex items-center justify-center bg-surface-container-low">
          <span className="material-symbols-outlined text-primary-container text-xl">{project.icon}</span>
        </div>
        <div className="flex items-center gap-2">
          {project.label && (
            <span className={`font-space-grotesk text-[9px] border px-2 py-0.5 uppercase tracking-wider ${LABEL_STYLES[project.label]}`}>
              {project.label}
            </span>
          )}
          <span className="font-space-grotesk text-[9px] text-primary-container/50 border border-primary-container/15 px-2 py-0.5 uppercase tracking-tight">
            {project.category}
          </span>
        </div>
      </div>

      <h3 className={`font-space-grotesk ${compact ? 'text-base' : 'text-xl'} font-bold mb-2 text-on-surface uppercase tracking-tight`}>
        {project.title}
      </h3>

      <p className="font-body text-sm text-on-surface-variant mb-5 leading-relaxed">
        {mode === 'technical' ? project.description.technical : project.description.executive}
      </p>

      {!compact && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="font-space-grotesk text-[9px] uppercase tracking-wider bg-surface-container px-2 py-1 text-on-surface-variant border border-outline-variant/20">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <Link
          href={`/projects/${project.slug}`}
          className="flex-1 py-2.5 bg-surface-container-highest border border-outline-variant/30 text-primary-container font-space-grotesk text-[10px] tracking-widest uppercase hover:bg-primary-container hover:text-on-primary transition-all active:scale-95 text-center font-bold"
        >
          {mode === 'technical' ? 'Deep_Dive' : 'View Details'}
        </Link>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 border border-outline-variant/30 text-on-surface-variant font-space-grotesk text-[10px] hover:border-primary-container hover:text-primary-container transition-all flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        )}
      </div>
    </div>
  );
}
