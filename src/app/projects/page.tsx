'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useMode } from '@/context/ModeContext';
import Link from 'next/link';
import { useState } from 'react';
import { PROJECTS } from '@/data/projects';
import type { Project } from '@/data/projects';

type Filter = 'ALL' | 'SHIPPED' | 'R&D';

export default function ProjectsPage() {
  const { mode } = useMode();
  const [filter, setFilter] = useState<Filter>('ALL');

  const filtered = filter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  const filters: { label: string; value: Filter }[] = [
    { label: 'Show All', value: 'ALL' },
    { label: 'Shipped', value: 'SHIPPED' },
    { label: 'R&D', value: 'R&D' },
  ];

  return (
    <div className="min-h-screen pt-28 pb-12">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 space-y-12">
        <header className="space-y-6">
          <div>
            <span className="font-space-grotesk text-on-surface-variant text-xs tracking-[0.2em] uppercase mb-3 block">
              {mode === 'technical' ? 'System Overview' : 'Portfolio'}
            </span>
            <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter text-on-surface">
              Projects
            </h1>
          </div>
          <div className="h-px w-full bg-outline-variant"></div>
        </header>

        {/* Filter Tabs */}
        <div className="flex gap-0">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`font-space-grotesk text-[11px] uppercase tracking-[0.15em] font-bold px-5 py-2.5 border transition-colors duration-200 ${
                filter === f.value
                  ? 'bg-primary-container text-on-primary border-primary-container'
                  : 'bg-white text-on-surface-variant border-outline-variant hover:text-primary-container'
              } ${f.value === 'ALL' ? '' : '-ml-px'}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} mode={mode} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProjectCard({ project, mode }: { project: Project; mode: 'technical' | 'executive' }) {
  const MAX_CHIPS = 4;
  const visibleTags = project.stack.slice(0, MAX_CHIPS);
  const overflow = project.stack.length - MAX_CHIPS;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border border-outline-variant bg-white hover:border-primary-container/40 transition-all duration-200"
    >
      {/* Product screenshot area */}
      <div className="w-full aspect-[16/9] bg-surface-container flex items-center justify-center">
        <span className="material-symbols-outlined text-5xl text-outline/30">{project.icon}</span>
      </div>

      <div className="p-6 space-y-4">
        {/* Category + Status badges */}
        <div className="flex items-center gap-2 font-space-grotesk text-[10px] uppercase tracking-[0.15em] text-on-surface-variant">
          <span className="border border-outline-variant px-2 py-0.5">{project.category}</span>
          <span className="text-outline-variant">·</span>
          <span>{project.status}</span>
        </div>

        {/* Title */}
        <h3 className="font-space-grotesk text-2xl font-bold text-on-surface tracking-tight group-hover:text-primary-container transition-colors">
          {project.title}
        </h3>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-4 py-3 border-t border-b border-outline-variant/50">
          {project.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="font-space-grotesk text-xl font-bold text-on-surface">{m.value}</div>
              <div className="font-space-grotesk text-[9px] uppercase tracking-[0.1em] text-on-surface-variant mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="font-space-grotesk text-[10px] uppercase tracking-wider border border-outline-variant px-2.5 py-1 text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
          {overflow > 0 && (
            <span className="font-space-grotesk text-[10px] uppercase tracking-wider border border-outline-variant px-2.5 py-1 text-on-surface-variant">
              +{overflow}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
