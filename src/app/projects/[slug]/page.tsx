'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useMode } from '@/context/ModeContext';
import ArchitectureGraph from '@/components/ArchitectureGraph';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { PROJECTS } from '@/data/projects';

export default function ProjectDrillDown({ params }: { params: Promise<{ slug: string }> }) {
  const { mode } = useMode();
  const { slug } = use(params);
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  const descParagraphs =
    mode === 'technical' ? project.detailedDescription.technical : project.detailedDescription.executive;

  return (
    <div className="min-h-screen pt-28 pb-12">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Header bar */}
        <div className="flex items-center justify-between font-space-grotesk text-[11px] uppercase tracking-[0.15em] text-on-surface-variant">
          <Link href="/projects" className="flex items-center gap-1.5 hover:text-primary-container transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back
          </Link>
          <span className="font-mono text-xs font-bold text-primary-container">[Suryansh]</span>
          <span>Case Study</span>
        </div>

        {/* Breadcrumb + Title */}
        <header className="space-y-6">
          <div className="flex items-center gap-2 font-space-grotesk text-[10px] uppercase tracking-[0.15em] text-on-surface-variant">
            <span className="border border-outline-variant px-2 py-0.5">{project.category}</span>
            <span className="text-outline-variant">·</span>
            <span>{project.status}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter text-on-surface lg:max-w-[65%]">
              {project.title}
            </h1>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed lg:max-w-[35%] lg:pt-3">
              {mode === 'technical' ? project.description.technical : project.description.executive}
            </p>
          </div>

          {/* Screenshot placeholder */}
          <div className="w-full aspect-[21/9] bg-surface-container border border-outline-variant flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-outline/20">{project.icon}</span>
          </div>
        </header>

        {/* Spec table */}
        <section className="space-y-0">
          {[
            { key: 'Scope', value: project.category },
            { key: 'Status', value: project.status },
            { key: 'Languages', value: mode === 'technical' ? 'TypeScript, Python' : 'Multiple' },
            { key: 'Stack', value: project.stack.join(', ') },
          ].map((row, i) => (
            <div key={i} className="flex items-baseline justify-between py-4 border-b border-outline-variant">
              <span className="font-space-grotesk text-[11px] uppercase tracking-[0.15em] text-on-surface-variant">{row.key}</span>
              <span className="font-space-grotesk text-sm font-medium text-on-surface text-right max-w-[65%]">{row.value}</span>
            </div>
          ))}
        </section>

        {/* 5-point summary */}
        <section className="space-y-6">
          <h2 className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-on-surface-variant">Summary</h2>
          <div className="space-y-4">
            {project.summary.map((point, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="font-space-grotesk text-[11px] text-on-surface-variant tracking-wider shrink-0 pt-0.5">
                  // 0{i + 1}
                </span>
                <p className="font-body text-on-surface leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed description */}
        <section className="space-y-6">
          <h2 className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-on-surface-variant">
            {mode === 'technical' ? 'Architecture & Implementation' : 'Overview'}
          </h2>
          <div className="space-y-5 font-body text-on-surface-variant leading-relaxed max-w-3xl">
            {descParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Metrics */}
        <section className="grid grid-cols-3 gap-6">
          {project.metrics.map((m, i) => (
            <div key={i} className="border border-outline-variant p-6 text-center">
              <div className="font-space-grotesk text-3xl font-bold text-on-surface">{m.value}</div>
              <div className="font-space-grotesk text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mt-1">{m.label}</div>
            </div>
          ))}
        </section>

        {/* What I learned */}
        {project.learned && (
          <section className="space-y-6">
            <h2 className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-on-surface-variant">
              {mode === 'technical' ? 'What I Learned' : 'Key Takeaways'}
            </h2>
            <div className="space-y-3">
              {project.learned.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-space-grotesk text-[10px] text-on-surface-variant mt-1 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-body text-sm text-on-surface-variant">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Architecture Graph */}
        <section className="space-y-6">
          <h2 className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-on-surface-variant">Architecture</h2>
          <ArchitectureGraph nodes={project.graphNodes} edges={project.graphEdges} />
        </section>

        {/* Links */}
        <div className="flex gap-4 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-space-grotesk text-[11px] uppercase tracking-[0.15em] font-bold border border-primary-container text-primary-container px-6 py-3 hover:bg-primary-container hover:text-on-primary transition-all"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              View on GitHub
            </a>
          )}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-space-grotesk text-[11px] uppercase tracking-[0.15em] font-bold border border-outline-variant text-on-surface-variant px-6 py-3 hover:border-primary-container hover:text-primary-container transition-all"
          >
            All Projects
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
