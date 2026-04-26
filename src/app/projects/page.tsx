'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useMode } from '@/context/ModeContext';
import Link from 'next/link';

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
}

const PROJECTS: Project[] = [
  {
    id: '0x8FA2',
    title: 'LLM Red Teaming & Eval Platform',
    slug: 'red-teaming-platform',
    category: 'AI Safety / Security',
    icon: 'security',
    tags: ['Garak', 'PromptFoo', 'FastAPI', 'LiteLLM'],
    description: {
      technical: 'Automated security testing platform integrating Garak and PromptFoo to simulate adversarial attacks (prompt injection, jailbreaks) with structured JSON vulnerability reporting.',
      executive: 'Enterprise-grade AI safety platform that identifies and mitigates security risks in LLM deployments through automated adversarial testing.'
    },
    metrics: { 'Coverage': '98%', 'Attacks': '15+ Types' }
  },
  {
    id: '0xCC12',
    title: 'Multi-Tenant Billing Engine',
    slug: 'billing-engine',
    category: 'Distributed Systems',
    icon: 'payments',
    tags: ['FastAPI', 'PostgreSQL', 'Docker', 'Strategy Pattern'],
    description: {
      technical: 'High-throughput billing engine supporting Hybrid/Per-Trip models using the Strategy Pattern. Optimized with connection pooling, raw SQL, and LRU caching.',
      executive: 'Scalable financial infrastructure that unified disparate billing models into a single, fault-tolerant system processing complex enterprise contracts.'
    },
    metrics: { 'Uptime': '99.99%', 'Throughput': 'High-Load' }
  },
  {
    id: '0x2B41',
    title: 'AI Project Management Tool',
    slug: 'ai-pm-tool',
    category: 'AI Systems Architecture',
    icon: 'account_tree',
    tags: ['Python', 'Llama-3', 'SQLAlchemy', 'Agentic'],
    description: {
      technical: 'Generative AI pipelines for real-time "Scope Drift" auditing and predictive readiness scoring using Llama-3 and dynamic state synchronization.',
      executive: 'Intelligence layer for project management that predicts delays and audits scope changes automatically using advanced language models.'
    },
    metrics: { 'Efficiency': '+30%', 'State': 'Real-time' }
  },
  {
    id: '0x992E',
    title: 'Propaganda Detection Engine',
    slug: 'propaganda-detection',
    category: 'NLP Systems',
    icon: 'monitoring',
    tags: ['PyTorch', 'XLM-RoBERTa', 'PEFT', 'LoRA'],
    description: {
      technical: 'Sequential Transfer Learning pipeline using XLM-RoBERTa for cross-lingual (EN/HI) classification. Mitigated 5.5:1 imbalance via custom Focal Loss.',
      executive: 'Advanced multilingual AI system designed to detect manipulative social media content across different languages with high precision.'
    },
    metrics: { 'Precision': '92%', 'Imbalance': '5.5:1' }
  },
  {
    id: '0x4F91',
    title: 'Real-time Video Enhancement',
    slug: 'video-enhancement',
    category: 'Computer Vision',
    icon: 'video_stable',
    tags: ['OpenCV', 'PyTorch', 'Super-Res', 'CUDA'],
    description: {
      technical: 'Deep learning-based super-resolution pipeline for live video enhancement. Optimized preprocessing and frame-level execution for low-latency streams.',
      executive: 'AI-powered video quality enhancement tool that sharpens low-resolution surveillance and sensor imagery in real-time.'
    },
    metrics: { 'Latency': '< 15ms', 'FPS': '60+' }
  },
  {
    id: '0x7E33',
    title: 'Multimodal RAG Generator',
    slug: 'multimodal-rag',
    category: 'Generative AI',
    icon: 'hub',
    tags: ['FAISS', 'LLaMA', 'Diffusion', 'LangChain'],
    description: {
      technical: 'RAG pipeline with semantic retrieval ensuring context-aware generation. Extended with multimodal outputs (images/videos) via diffusion models.',
      executive: 'Context-aware AI generator that creates rich, multi-modal content (text, images, video) based on private document repositories.'
    },
    metrics: { 'Retrieval': 'Semantic', 'Output': 'Multi-Modal' }
  }
];

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
                {mode === 'technical' ? 'SECURE_NODE_04 // PORT: 8080' : 'High-Impact Deliverables'}
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-primary-container/40 to-transparent mt-8"></div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} mode={mode} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ProjectCard({ project, mode }: { project: Project, mode: 'technical' | 'executive' }) {
  return (
    <div className="glass-panel relative p-8 group hover:bg-surface-container-highest/60 transition-all duration-300">
      <div className="corner-bracket-tl"></div>
      <div className="corner-bracket-br"></div>
      
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded border border-primary-container/30 flex items-center justify-center bg-surface-container-low">
          <span className="material-symbols-outlined text-primary-container">{project.icon}</span>
        </div>
        <span className="font-space-grotesk text-[10px] text-primary-container/60 border border-primary-container/20 px-2 py-1 rounded uppercase tracking-tighter">
          {mode === 'technical' ? `NODE_${project.id}` : project.category}
        </span>
      </div>

      <h3 className="font-space-grotesk text-xl font-bold mb-2 text-on-surface uppercase tracking-tight">
        {project.title}
      </h3>
      
      <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed min-h-[80px]">
        {mode === 'technical' ? project.description.technical : project.description.executive}
      </p>

      <div className="flex flex-wrap gap-2 mb-8 h-[48px]">
        {project.tags.map(tag => (
          <span key={tag} className="font-space-grotesk text-[9px] uppercase tracking-wider bg-surface-container px-2 py-1 text-on-surface-variant border border-outline-variant/20">
            {tag}
          </span>
        ))}
      </div>

      <Link 
        href={`/projects/${project.slug}`}
        className="block w-full py-3 bg-surface-container-highest border border-outline-variant/30 text-primary-container font-space-grotesk text-xs tracking-widest uppercase hover:bg-primary-container hover:text-on-primary transition-all active:scale-95 text-center font-bold"
      >
        {mode === 'technical' ? 'Execute_Module_DeepDive' : 'View Project Details'}
      </Link>
    </div>
  );
}
