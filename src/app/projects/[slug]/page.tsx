'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useMode } from '@/context/ModeContext';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface ProjectDetail {
  title: string;
  id: string;
  category: string;
  status: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  description: {
    technical: string[];
    executive: string[];
  };
  codeInsight?: {
    file: string;
    content: string;
  };
  icon: string;
}

const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  'red-teaming-platform': {
    id: '0x8FA2',
    title: 'LLM Red Teaming & Eval Platform',
    category: 'AI Safety / Security',
    status: 'Operational',
    icon: 'security',
    metrics: [
      { label: 'Coverage', value: '98%' },
      { label: 'Latency', value: '< 200ms' }
    ],
    stack: ['Garak', 'PromptFoo', 'FastAPI', 'LiteLLM', 'Groq', 'Python'],
    description: {
      technical: [
        'Engineered an automated security testing pipeline integrating Garak and PromptFoo to simulate adversarial attacks including prompt injection, jailbreaking, and recursive encoding bypasses.',
        'Developed a FastAPI orchestration layer to execute configuration-driven workflows, parsing complex evaluation runs into structured JSON vulnerability reports for security auditing.'
      ],
      executive: [
        'Built a comprehensive AI safety platform that automatically tests large language models for security flaws and harmful behaviors.',
        'This system provides clear, actionable reports on where an AI might be vulnerable to malicious manipulation, ensuring enterprise-grade safety before deployment.'
      ]
    },
    codeInsight: {
      file: 'adversarial_runner.py',
      content: 'def run_red_team(model_id, probes):\n  results = garak.scan(model_id, probes)\n  report = promptfoo.eval(results)\n  return format_vulnerability_report(report)'
    }
  },
  'billing-engine': {
    id: '0xCC12',
    title: 'Multi-Tenant Billing Engine',
    category: 'Distributed Systems',
    status: 'Stable',
    icon: 'payments',
    metrics: [
      { label: 'Uptime', value: '99.99%' },
      { label: 'Latency', value: '< 15ms' }
    ],
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Alembic'],
    description: {
      technical: [
        'Built a high-throughput billing engine supporting Hybrid, Per-Trip, and Fixed models using the Strategy Pattern for decoupled logic.',
        'Optimized persistence with connection pooling and raw SQL for high-load operations, supplemented by LRU caching to minimize database round-trips.'
      ],
      executive: [
        'Developed a unified financial system capable of handling complex enterprise contracts and thousands of transactions per second.',
        'The architecture ensures 100% accuracy in billing across different clients while maintaining high availability and rapid response times.'
      ]
    },
    codeInsight: {
      file: 'StrategyFactory.ts',
      content: 'class BillingFactory {\n  static getModel(type: string) {\n    switch (type) {\n      case "per-trip": return new PerTripModel();\n      case "fixed": return new FixedModel();\n      default: throw new Error("Invalid type");\n    }\n  }\n}'
    }
  },
  'ai-pm-tool': {
    id: '0x2B41',
    title: 'AI Project Management Tool',
    category: 'AI Systems Architecture',
    status: 'Beta',
    icon: 'account_tree',
    metrics: [
      { label: 'Efficiency', value: '+30%' },
      { label: 'Drift_Detection', value: 'Real-time' }
    ],
    stack: ['Python', 'Llama-3', 'SQLAlchemy', 'Agentic', 'PostgreSQL', 'React'],
    description: {
      technical: [
        'Engineered Generative AI pipelines for real-time "Scope Drift" auditing and predictive readiness scoring using Llama-3 and dynamic state synchronization.',
        'Architected a secure, high-throughput API layer with robust relational models to orchestrate state transitions across the application lifecycle.'
      ],
      executive: [
        'An intelligence layer for project managers that predicts delays and automatically flags when a project is moving away from its original goals.',
        'Leverages advanced AI to synchronize team updates and provide a unified view of project health and resource allocation.'
      ]
    }
  },
  'propaganda-detection': {
    id: '0x992E',
    title: 'Propaganda Detection Engine',
    category: 'NLP Systems',
    status: 'Research_Stable',
    icon: 'monitoring',
    metrics: [
      { label: 'Precision', value: '92%' },
      { label: 'Class_Imbalance', value: '5.5:1' }
    ],
    stack: ['PyTorch', 'XLM-RoBERTa', 'PEFT', 'LoRA', 'Hugging Face'],
    description: {
      technical: [
        'Architected a Sequential Transfer Learning pipeline using XLM-RoBERTa to enable cross-lingual (English/Hindi) classification of manipulative text.',
        'Mitigated a severe 5.5:1 class imbalance by engineering a custom PyTorch Focal Loss function and a synthetic data augmentation pipeline.'
      ],
      executive: [
        'Advanced multilingual AI system designed to detect manipulative social media content across different languages with high precision.',
        'The system uses cutting-edge language models to identify propaganda even when it is translated or subtly changed.'
      ]
    }
  },
  'video-enhancement': {
    id: '0x4F91',
    title: 'Real-time Video Enhancement',
    category: 'Computer Vision',
    status: 'Performance_Build',
    icon: 'video_stable',
    metrics: [
      { label: 'Latency', value: '< 15ms' },
      { label: 'FPS', value: '60+' }
    ],
    stack: ['OpenCV', 'PyTorch', 'Super-Res', 'CUDA', 'Python'],
    description: {
      technical: [
        'Implemented a real-time deep learning-based super-resolution pipeline optimized for frame-level execution on low-latency live streams.',
        'Utilized CUDA-accelerated preprocessing to ensure consistent 60+ FPS performance even on high-definition input sources.'
      ],
      executive: [
        'AI-powered video tool that sharpens and improves the quality of live video feeds instantly.',
        'Perfect for enhancing grainy security footage or sensor imagery without any noticeable delay.'
      ]
    }
  },
  'multimodal-rag': {
    id: '0x7E33',
    title: 'Multimodal RAG Generator',
    category: 'Generative AI',
    status: 'Stable',
    icon: 'hub',
    metrics: [
      { label: 'Retrieval', value: 'Semantic' },
      { label: 'Output', value: 'Multi-Modal' }
    ],
    stack: ['FAISS', 'LLaMA', 'Diffusion', 'LangChain', 'Python'],
    description: {
      technical: [
        'Built a Retrieval-Augmented Generation (RAG) pipeline using FAISS and LLaMA with semantic retrieval to ensure coherent, context-aware content generation.',
        'Extended the architecture to support multimodal outputs, generating step-by-step images and cooking videos using diffusion-based models.'
      ],
      executive: [
        'A "smart" content generator that reads through vast amounts of information and creates text, images, and even videos to explain it.',
        'Uses context-aware retrieval to ensure the generated media is accurate and relevant to the source data.'
      ]
    }
  }
};

export default function ProjectDrillDown({ params }: { params: Promise<{ slug: string }> }) {
  const { mode } = useMode();
  const { slug } = use(params);
  
  const project = PROJECT_DETAILS[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 space-y-20">
        <header className="space-y-4">
          <Link href="/projects" className="font-space-grotesk text-[10px] text-primary-container uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            {mode === 'technical' ? 'RETURN_TO_PROJECT_GRID' : 'Back to Projects'}
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-space-grotesk text-primary-container text-xs tracking-[0.3em] uppercase mb-4 block">
                {mode === 'technical' ? `SYSTEM_DEEP_DIVE: ${project.id}_v1.0` : `CASE STUDY: ${project.category}`}
              </span>
              <h1 className="font-space-grotesk text-5xl md:text-8xl font-bold tracking-tighter text-on-surface uppercase leading-none">
                {project.title}
              </h1>
            </div>
            <div className="md:text-right font-space-grotesk">
              <p className="text-outline text-xs uppercase tracking-widest mb-1">Status: {project.status}</p>
              <p className="text-on-surface-variant text-sm uppercase">Node: {project.id}</p>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-primary-container/40 to-transparent mt-8"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <section className="space-y-6">
              <h2 className="font-space-grotesk text-2xl font-bold uppercase tracking-tight flex items-center gap-4">
                <span className="text-primary-container">01</span>
                {mode === 'technical' ? 'THE_ARCHITECTURE' : 'Overview & Impact'}
              </h2>
              <div className="font-body text-on-surface-variant leading-relaxed space-y-6">
                {(mode === 'technical' ? project.description.technical : project.description.executive).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-2 gap-6">
              {project.metrics.map((m, i) => (
                <div key={i} className="glass-panel p-6 relative border-l-2 border-primary-container shadow-[0_0_20px_rgba(0,240,255,0.05)]">
                  <p className="font-space-grotesk text-[10px] text-outline uppercase tracking-[0.2em] mb-1">{m.label}</p>
                  <p className="font-space-grotesk text-3xl font-bold text-primary-container uppercase tracking-tight">{m.value}</p>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <h4 className="font-space-grotesk text-xs text-primary-container uppercase tracking-widest">Tech_Stack_Audit</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tag => (
                  <span key={tag} className="font-space-grotesk text-[10px] uppercase tracking-wider bg-surface-container px-3 py-1 text-on-surface border border-outline-variant/20">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="glass-panel p-8 relative overflow-hidden aspect-square flex items-center justify-center">
              <div className="corner-bracket-tl"></div>
              <div className="corner-bracket-br"></div>
              <div className="absolute inset-0 technical-grid opacity-20"></div>
              
              {/* Architecture Visualization */}
              <div className="relative w-full h-full flex items-center justify-center opacity-80 scale-90">
                <div className="w-32 h-32 rounded-full border-2 border-primary-container/40 flex items-center justify-center relative z-20">
                  <div className="w-24 h-24 rounded-full border border-primary-container flex items-center justify-center bg-primary-container/5 animate-pulse">
                    <span className="material-symbols-outlined text-4xl text-primary-container">{project.icon}</span>
                  </div>
                </div>
                {/* HUD Satellite Elements */}
                <div className="absolute top-10 left-10 w-16 h-16 border border-primary-container/30 flex items-center justify-center rotate-45">
                  <span className="material-symbols-outlined -rotate-45 text-primary-container/60">hub</span>
                </div>
                <div className="absolute top-10 right-10 w-16 h-16 border border-primary-container/30 flex items-center justify-center -rotate-12">
                  <span className="material-symbols-outlined rotate-12 text-primary-container/60">database</span>
                </div>
                <div className="absolute bottom-10 right-20 w-20 h-20 border border-primary-container/30 flex items-center justify-center rotate-12">
                  <span className="material-symbols-outlined -rotate-12 text-primary-container/60">monitoring</span>
                </div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                  <line opacity="0.3" stroke="#00f0ff" strokeDasharray="4" strokeWidth="1" x1="200" x2="60" y1="200" y2="60"></line>
                  <line opacity="0.3" stroke="#00f0ff" strokeDasharray="4" strokeWidth="1" x1="200" x2="340" y1="200" y2="60"></line>
                  <line opacity="0.3" stroke="#00f0ff" strokeDasharray="4" strokeWidth="1" x1="200" x2="300" y1="200" y2="340"></line>
                </svg>
              </div>
            </div>

            {project.codeInsight && (
              <div className="glass-panel p-8 space-y-4">
                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
                  <span className="font-space-grotesk text-xs text-primary-container uppercase">System_Code_Insight</span>
                  <span className="font-space-grotesk text-[10px] text-outline">{project.codeInsight.file}</span>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-sm font-mono text-[11px] text-on-surface-variant overflow-x-auto whitespace-pre leading-relaxed">
                  {project.codeInsight.content}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
