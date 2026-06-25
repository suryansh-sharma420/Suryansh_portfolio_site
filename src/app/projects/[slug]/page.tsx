'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArchitectureGraph from '@/components/ArchitectureGraph';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { PROJECTS } from '@/data/projects';

export default function ProjectDrillDown({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  const descParagraphs = project.detailedDescription.technical;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Chapter header */}
      <div className="pt-14 bg-[#F5F0E8] border-b-4 border-[#0a0a0a]">
        <div className="chapter-bar">
          <span className="chapter-num">Mission File</span>
          <div className="flex-1 h-px bg-white/15" />
          <span className="chapter-title">{project.title}</span>
        </div>
      </div>

      <main className="bg-[#0a0a0a] flex-grow">
        {/* Back link + header */}
        <div className="p-1">
          <div className="manga-panel p-4 sm:p-8 relative overflow-hidden">
            <div className="halftone-overlay" />
            <div className="relative z-[1]">
              <div className="flex items-center justify-between mb-8">
                <Link href="/projects" className="font-space-grotesk text-xs font-semibold tracking-[0.15em] uppercase text-[#0a0a0a] border-b-2 border-[#0a0a0a] pb-0.5 hover:text-[#CC1111] hover:border-[#CC1111] transition-colors flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  All Missions
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-xs tracking-[0.2em] text-[#CC1111] uppercase border-2 border-[#CC1111] px-2 py-0.5" style={{ fontFamily: 'var(--font-bangers)' }}>
                    {project.category === 'SHIPPED' ? 'S-Class' : 'A-Class'}
                  </span>
                  <span className="font-space-grotesk text-[10px] font-semibold tracking-[0.15em] uppercase text-black/45">
                    {project.status}
                  </span>
                </div>
              </div>

              <h1
                className="text-[clamp(48px,8vw,90px)] tracking-[0.04em] leading-[0.85] text-[#0a0a0a] uppercase mb-6"
                style={{ fontFamily: 'var(--font-bangers)', textShadow: '4px 4px 0 rgba(0,0,0,.08)' }}
              >
                {project.title}
              </h1>

              <p className="font-space-grotesk text-base leading-relaxed text-[#0a0a0a] max-w-3xl">
                {project.description.technical}
              </p>
            </div>
          </div>
        </div>

        {/* Spec table */}
        <div className="p-1 pt-0">
          <div className="manga-panel overflow-hidden">
            <div className="bg-[#0a0a0a] py-3 px-6">
              <span className="text-sm tracking-[0.2em] text-white uppercase" style={{ fontFamily: 'var(--font-bangers)' }}>Specifications</span>
            </div>
            {[
              { key: 'Scope', value: project.category },
              { key: 'Status', value: project.status },
              { key: 'Stack', value: project.stack.join(', ') },
            ].map((row, i) => (
              <div key={i} className="flex items-baseline justify-between py-4 px-6 border-b-2 border-[#0a0a0a]/10 last:border-0">
                <span className="text-sm tracking-[0.15em] text-[#CC1111] uppercase" style={{ fontFamily: 'var(--font-bangers)' }}>{row.key}</span>
                <span className="font-space-grotesk text-sm font-medium text-[#0a0a0a] text-right max-w-[65%]">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="p-1 pt-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[2px] bg-[#0a0a0a] border-[3px] border-[#0a0a0a] overflow-hidden">
            {project.metrics.map((m, i) => (
              <div key={i} className="py-4 sm:py-6 px-3 sm:px-4 text-center bg-white">
                <div className="text-4xl text-[#CC1111] leading-none" style={{ fontFamily: 'var(--font-bangers)' }}>{m.value}</div>
                <div className="font-space-grotesk text-[10px] font-semibold tracking-[0.15em] uppercase text-black/38 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-point summary */}
        <div className="p-1 pt-0">
          <div className="manga-panel p-4 sm:p-8 relative overflow-hidden">
            <div className="halftone-overlay" />
            <div className="relative z-[1]">
              <div className="text-sm tracking-[0.2em] text-[#CC1111] uppercase mb-6" style={{ fontFamily: 'var(--font-bangers)' }}>Mission Summary</div>
              <div className="space-y-4">
                {project.summary.map((point, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <span className="text-lg text-[#CC1111] shrink-0" style={{ fontFamily: 'var(--font-bangers)' }}>
                      0{i + 1}
                    </span>
                    <p className="font-space-grotesk text-[15px] text-[#0a0a0a] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed description */}
        <div className="p-1 pt-0">
          <div className="manga-panel p-4 sm:p-8 relative overflow-hidden">
            <div className="halftone-overlay" />
            <div className="relative z-[1]">
              <div className="text-sm tracking-[0.2em] text-[#CC1111] uppercase mb-6" style={{ fontFamily: 'var(--font-bangers)' }}>
                Architecture &amp; Implementation
              </div>
              <div className="space-y-5 font-space-grotesk text-[15px] text-[#0a0a0a]/70 leading-relaxed max-w-3xl">
                {descParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What I learned */}
        {project.learned && (
          <div className="p-1 pt-0">
            <div className="manga-panel p-4 sm:p-8">
              <div className="text-sm tracking-[0.2em] text-[#CC1111] uppercase mb-6" style={{ fontFamily: 'var(--font-bangers)' }}>
                Lessons Learned
              </div>
              <div className="space-y-3">
                {project.learned.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-base text-[#CC1111] shrink-0" style={{ fontFamily: 'var(--font-bangers)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-space-grotesk text-sm text-[#0a0a0a]/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Architecture Graph */}
        <div className="p-1 pt-0">
          <div className="manga-panel p-4 sm:p-8">
            <div className="text-sm tracking-[0.2em] text-[#CC1111] uppercase mb-6" style={{ fontFamily: 'var(--font-bangers)' }}>Architecture</div>
            <ArchitectureGraph nodes={project.graphNodes} edges={project.graphEdges} />
          </div>
        </div>

        {/* Links */}
        <div className="p-1 pt-0 pb-1">
          <div className="manga-panel p-4 sm:p-6 flex flex-col sm:flex-row gap-3 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base tracking-[0.12em] uppercase text-white bg-[#0a0a0a] py-3 px-8 inline-flex items-center gap-2 border-[3px] border-[#0a0a0a]"
                style={{ fontFamily: 'var(--font-bangers)' }}
              >
                <span className="material-symbols-outlined text-sm">open_in_new</span>
                View on GitHub
              </a>
            )}
            <Link
              href="/projects"
              className="text-base tracking-[0.12em] uppercase text-[#0a0a0a] bg-white py-3 px-8 inline-flex items-center gap-2 border-[3px] border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-bangers)' }}
            >
              All Missions
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
