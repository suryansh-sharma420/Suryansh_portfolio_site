'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '@/data/projects';
import type { Project } from '@/data/projects';

type Filter = 'ALL' | 'SHIPPED' | 'R&D';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('ALL');
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('manga-active');
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addRevealRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const filtered = filter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  const filters: { label: string; value: Filter }[] = [
    { label: 'All Missions', value: 'ALL' },
    { label: 'Shipped', value: 'SHIPPED' },
    { label: 'R&D', value: 'R&D' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Chapter header */}
      <div className="pt-14 bg-[#F5F0E8] border-b-4 border-[#0a0a0a]">
        <div className="chapter-bar">
          <span className="chapter-num">Chapter 04</span>
          <div className="flex-1 h-px bg-white/15" />
          <span className="chapter-title">Mission Files</span>
        </div>
      </div>

      <main className="bg-[#F5F0E8] flex-grow">
        {/* Filter Tabs */}
        <div className="p-1 pb-0 bg-[#0a0a0a]">
          <div className="manga-panel p-6 flex gap-2 items-center">
            <span className="text-xs tracking-[0.25em] uppercase text-black/35 mr-4" style={{ fontFamily: 'var(--font-bangers)' }}>
              Filter:
            </span>
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`text-sm tracking-[0.1em] uppercase border-[2px] border-[#0a0a0a] px-4 py-1.5 transition-colors duration-200 ${
                  filter === f.value
                    ? 'bg-[#0a0a0a] text-white'
                    : 'text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white'
                }`}
                style={{ fontFamily: 'var(--font-bangers)' }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-1 bg-[#0a0a0a]">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} addRevealRef={addRevealRef} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProjectCard({ project, addRevealRef }: { project: Project; addRevealRef: (el: HTMLDivElement | null) => void }) {
  const MAX_CHIPS = 4;
  const visibleTags = project.stack.slice(0, MAX_CHIPS);
  const overflow = project.stack.length - MAX_CHIPS;

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <div ref={addRevealRef} className="manga-reveal proj-panel manga-panel overflow-hidden">
        {/* Header bar */}
        <div className="bg-[#0a0a0a] py-2.5 px-5 flex justify-between items-center">
          <span className="text-xs tracking-[0.2em] text-white/45 uppercase" style={{ fontFamily: 'var(--font-bangers)' }}>
            {project.id}
          </span>
          <span className="text-sm tracking-[0.12em] text-[#CC1111] uppercase" style={{ fontFamily: 'var(--font-bangers)' }}>
            {project.category === 'SHIPPED' ? 'S-Class' : 'A-Class'}
          </span>
        </div>

        <div className="p-6 relative overflow-hidden">
          <div className="halftone-overlay" />
          <div className="relative z-[1]">
            <h3
              className="text-[28px] tracking-[0.06em] uppercase text-[#0a0a0a] mb-3 leading-none"
              style={{ fontFamily: 'var(--font-bangers)' }}
            >
              {project.title}
            </h3>
            <p className="font-space-grotesk text-[13px] leading-[1.7] text-[#0a0a0a] mb-4">
              {project.description.technical.slice(0, 120)}...
            </p>

            {/* Stack */}
            <div className="font-space-grotesk text-[10px] font-bold tracking-[0.14em] uppercase text-black/38 mb-4">
              {visibleTags.join(' · ')}
              {overflow > 0 && ` +${overflow}`}
            </div>

            {/* Metrics bar */}
            <div className="flex gap-[2px] bg-[#0a0a0a] border-2 border-[#0a0a0a] overflow-hidden mb-4">
              {project.metrics.map((met, i) => (
                <div key={i} className="flex-1 py-2.5 px-2 text-center bg-white">
                  <div className="text-xl text-[#CC1111] leading-none" style={{ fontFamily: 'var(--font-bangers)' }}>
                    {met.value}
                  </div>
                  <div className="font-space-grotesk text-[9px] font-semibold tracking-[0.14em] uppercase text-black/38 mt-0.5">
                    {met.label}
                  </div>
                </div>
              ))}
            </div>

            <span className="text-sm tracking-[0.12em] uppercase text-[#0a0a0a] border-b-2 border-[#0a0a0a] pb-0.5" style={{ fontFamily: 'var(--font-bangers)' }}>
              Read More &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
