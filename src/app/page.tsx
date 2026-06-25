'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const revealRefs = useRef<HTMLDivElement[]>([]);
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ssuryansh7003@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const experience = [
    {
      company: 'Tech Mahindra',
      role: 'Associate Analyst // GenAI',
      date: 'Feb 2026 — Present',
      description:
        'Architecting GCP-based RAG workflows and autonomous data extraction systems. Performing adversarial red teaming on foundation models. Building enterprise-scale AI solutions for global clients.',
    },
    {
      company: 'Naxxatra Sciences',
      role: 'Data Science & ML Intern',
      date: 'Jun — Aug 2025',
      description:
        'Developed a scientific imaging CNN achieving 99% accuracy in MRI classification. Engineered robust end-to-end data pipelines for medical imaging analysis and production-ready model deployment workflows.',
    },
  ];

  const skills = [
    { name: 'Python / FastAPI', pct: 90 },
    { name: 'Agentic AI', pct: 88 },
    { name: 'LangChain', pct: 85 },
    { name: 'RAG', pct: 88 },
    { name: 'SQL', pct: 83 },
    { name: 'Prompt Engineering', pct: 86 },
    { name: 'PyTorch', pct: 82 },
    { name: 'Full-Stack Apps', pct: 80 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ══════ COVER ══════ */}
      <section className="min-h-screen relative bg-white border-b-4 border-[#0a0a0a] overflow-hidden flex flex-col md:flex-row items-stretch pt-14">
        {/* Speed lines */}
        <div className="speed-lines" style={{ backgroundImage: 'repeating-conic-gradient(from 0deg at 65% 50%, rgba(0,0,0,.065) 0deg 1.2deg, transparent 1.2deg 8deg)' }} />
        {/* White fade from left */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,.96) 32%, rgba(255,255,255,.3) 58%, transparent 72%)' }} />

        {/* LEFT: Title */}
        <div className="flex-1 md:flex-[0_0_50%] flex flex-col justify-between p-6 sm:p-10 md:p-14 relative z-[2]">
          <div>
            <div
              className="text-[11px] tracking-[0.35em] text-[#CC1111] border-2 border-[#CC1111] inline-block px-2.5 py-0.5 mb-2.5"
              style={{ fontFamily: 'var(--font-bangers)' }}
            >
              VOL. 01
            </div>
            <div className="font-space-grotesk text-[11px] font-semibold tracking-[0.22em] uppercase text-black/30">
              The Portfolio — Complete Edition
            </div>
          </div>

          <div className="my-8 md:my-0">
            <h1
              className="text-[clamp(56px,11vw,156px)] leading-[0.85] tracking-[0.04em] text-[#0a0a0a] uppercase"
              style={{ fontFamily: 'var(--font-bangers)', textShadow: '5px 5px 0 rgba(0,0,0,.1)' }}
            >
              SURYANSH<br />SHARMA
            </h1>
            <div
              className="text-xl sm:text-[26px] tracking-[0.2em] text-[#CC1111] mt-3.5 uppercase"
              style={{ fontFamily: 'var(--font-bangers)' }}
            >
              The Software Engineer
            </div>
            <p className="font-space-grotesk text-[13px] text-black/45 mt-3.5 leading-[1.7] max-w-[310px]">
              FastAPI &middot; Agentic AI &middot; PyTorch &middot; RAG Pipelines &middot; LangChain
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <a
              href="#ch01"
              className="text-lg sm:text-xl tracking-[0.1em] text-white bg-[#0a0a0a] py-3 sm:py-3.5 px-6 sm:px-7 inline-block uppercase border-[3px] border-[#0a0a0a] text-center sm:text-left w-full sm:w-auto"
              style={{ fontFamily: 'var(--font-bangers)' }}
            >
              Begin Reading &darr;
            </a>
            <div className="font-space-grotesk text-[11px] font-semibold tracking-[0.18em] uppercase text-black/28">
              github.com/suryansh-sharma420
            </div>
          </div>
        </div>

        {/* RIGHT: Photo panel */}
        <div className="flex-1 relative border-t-4 md:border-t-0 md:border-l-4 border-[#0a0a0a] overflow-hidden z-[2] min-h-[400px] md:min-h-0">
          <div className="manga-photo h-full min-h-[400px] md:min-h-[600px]">
            <Image
              src="/images/IMG-20260613-WA0326.jpg"
              alt="Suryansh Sharma"
              fill
              className="object-cover object-top"
              style={{ filter: 'grayscale(100%) contrast(1.3) brightness(0.88)' }}
              unoptimized
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[28%] pointer-events-none z-[1]" style={{ background: 'linear-gradient(to top, #fff, transparent)' }} />
          {/* SFX */}
          <div
            className="absolute top-[12%] left-[8%] text-[48px] sm:text-[64px] md:text-[84px] text-[#CC1111] z-[2] leading-none pointer-events-none"
            style={{ fontFamily: 'var(--font-bangers)', textShadow: '4px 4px 0 rgba(180,0,0,.25)', animation: 'sfx-float 3.5s ease-in-out infinite' }}
          >
            EXECUTE!
          </div>
        </div>
      </section>

      {/* ══════ THE PROTAGONIST ══════ */}
      <section id="ch01" className="bg-[#F5F0E8] border-b-4 border-[#0a0a0a]">
        <div className="chapter-bar">
          <span className="chapter-num">CH.01</span>
          <div className="flex-1 h-px bg-white/15" />
          <span className="chapter-title">The Protagonist</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] md:grid-rows-[auto_auto] gap-1 p-1 bg-[#0a0a0a]">
          {/* Bio panel */}
          <div ref={addRevealRef} className="manga-reveal md:row-span-2 manga-panel p-6 sm:p-8 md:p-11 relative overflow-hidden">
            <div className="halftone-overlay" />
            <div className="relative z-[1]">
              <div className="bg-[#0a0a0a] text-white text-[10px] sm:text-[11px] tracking-[0.3em] uppercase py-1.5 px-3.5 inline-block mb-5 sm:mb-7" style={{ fontFamily: 'var(--font-bangers)' }}>
                Subject Profile — Analysis Active
              </div>

              <h2
                className="text-[clamp(36px,5vw,68px)] tracking-[0.03em] leading-[0.9] text-[#0a0a0a] uppercase mb-6 sm:mb-8"
                style={{ fontFamily: 'var(--font-bangers)' }}
              >
                Who Is<br />This Guy?
              </h2>

              {/* Speech bubble 1 */}
              <div className="relative bg-white border-[3px] border-[#0a0a0a] p-4 sm:p-5 mb-4 sm:mb-5">
                <div className="absolute left-7 -top-4 w-0 h-0 border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-b-[16px] border-b-[#0a0a0a]" />
                <div className="absolute left-[31px] -top-2.5 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[12px] border-b-white" />
                <p className="font-space-grotesk text-sm sm:text-[15px] leading-[1.75] text-[#0a0a0a]">
                  Final-year B.Tech CSE student and Software Engineer. Passionate about building scalable, production-ready AI applications that solve real-world problems. Works at the intersection of <strong>Deep Learning, Generative AI</strong>, and core Software Development.
                </p>
              </div>

              {/* Speech bubble 2 */}
              <div className="relative bg-[#F5F0E8] border-[3px] border-[#0a0a0a] p-4 sm:p-5 mb-6 sm:mb-9">
                <p className="font-space-grotesk text-sm sm:text-[15px] leading-[1.75] text-[#0a0a0a]">
                  Currently at <strong>Tech Mahindra</strong> — architecting GCP-based RAG workflows and red teaming foundation models. Previously at <strong>Naxxatra Sciences</strong> — developed a CNN achieving <strong className="text-[#CC1111]">99% accuracy</strong> in MRI classification.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-[3px] border-[3px] border-[#0a0a0a] overflow-hidden">
                <div className="bg-[#0a0a0a] text-white p-3 sm:p-4.5 text-center">
                  <div className="text-[28px] sm:text-[38px] tracking-[0.05em] leading-none text-[#FFD700]" style={{ fontFamily: 'var(--font-bangers)' }}>8.49</div>
                  <div className="font-space-grotesk text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-white/55 mt-1">GPA / 10</div>
                </div>
                <div className="bg-white border-l-[3px] border-[#0a0a0a] p-3 sm:p-4.5 text-center">
                  <div className="text-[28px] sm:text-[38px] tracking-[0.05em] leading-none text-[#CC1111]" style={{ fontFamily: 'var(--font-bangers)' }}>AI/ML</div>
                  <div className="font-space-grotesk text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-black/45 mt-1">Focus Area</div>
                </div>
                <div className="bg-white border-t-[3px] border-[#0a0a0a] p-3 sm:p-4.5 text-center">
                  <div className="text-[28px] sm:text-[38px] tracking-[0.05em] leading-none text-[#0a0a0a]" style={{ fontFamily: 'var(--font-bangers)' }}>4+</div>
                  <div className="font-space-grotesk text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-black/45 mt-1">Projects</div>
                </div>
                <div className="bg-[#CC1111] border-t-[3px] border-l-[3px] border-[#0a0a0a] p-3 sm:p-4.5 text-center">
                  <div className="text-[28px] sm:text-[34px] tracking-[0.05em] leading-none text-white" style={{ fontFamily: 'var(--font-bangers)' }}>&infin;</div>
                  <div className="font-space-grotesk text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-white/80 mt-1">Improvement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo panel */}
          <div ref={addRevealRef} className="manga-reveal bg-[#0a0a0a] border-[3px] border-[#0a0a0a] overflow-hidden">
            <div className="manga-photo h-[250px] sm:h-[320px] relative">
              <Image
                src="/images/IMG-20260613-WA0194.jpg"
                alt="Suryansh Sharma"
                fill
                className="object-cover object-top"
                style={{ filter: 'grayscale(100%) contrast(1.3) brightness(0.88)' }}
                unoptimized
              />
            </div>
            <div className="p-3.5 px-4 bg-[#0a0a0a]">
              <div className="text-base tracking-[0.1em] text-white uppercase" style={{ fontFamily: 'var(--font-bangers)' }}>B.Tech CSE</div>
              <div className="font-space-grotesk text-[10px] font-semibold tracking-[0.15em] uppercase text-[#CC1111] mt-0.5">Protagonist</div>
            </div>
          </div>

          {/* Contact panel */}
          <div ref={addRevealRef} className="manga-reveal bg-[#F5F0E8] border-[3px] border-[#0a0a0a] p-5 flex flex-col gap-2.5 justify-center">
            <div className="text-xs tracking-[0.25em] uppercase text-black/35 mb-1" style={{ fontFamily: 'var(--font-bangers)' }}>Contact Intel</div>
            <a href="https://github.com/suryansh-sharma420" target="_blank" rel="noopener noreferrer" className="font-space-grotesk text-xs font-semibold text-[#0a0a0a] border-b-2 border-black/20 pb-2 block break-all">
              github.com/suryansh-sharma420
            </a>
            <a href="https://linkedin.com/in/suryansh-sharma-7b8302293" target="_blank" rel="noopener noreferrer" className="font-space-grotesk text-xs font-semibold text-[#0a0a0a] border-b-2 border-black/20 pb-2 block break-all">
              in/suryansh-sharma-7b8302293
            </a>
            <a href="mailto:ssuryansh7003@gmail.com" className="font-space-grotesk text-xs font-bold text-[#CC1111] block">
              ssuryansh7003@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ══════ BATTLE RECORD ══════ */}
      <section className="bg-[#F5F0E8] border-b-4 border-[#0a0a0a]">
        <div className="chapter-bar">
          <span className="chapter-num">Battle Record</span>
          <div className="flex-1 h-px bg-white/15" />
          <span className="chapter-title">Experience</span>
        </div>

        <div className="flex flex-col gap-1 p-1 bg-[#0a0a0a]">
          {experience.map((exp, i) => (
            <div key={i} ref={addRevealRef} className="manga-reveal bg-white border-[3px] border-[#0a0a0a] overflow-hidden">
              <div className="bg-[#0a0a0a] py-3 sm:py-3.5 px-4 sm:px-7 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="text-xl sm:text-[26px] tracking-[0.06em] text-white uppercase" style={{ fontFamily: 'var(--font-bangers)' }}>
                  {exp.company}
                </span>
                <span className="text-[13px] sm:text-[15px] tracking-[0.1em] text-[#CC1111]" style={{ fontFamily: 'var(--font-bangers)' }}>
                  {exp.date}
                </span>
              </div>
              <div className="py-5 sm:py-7 px-4 sm:px-8 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-conic-gradient(from 0deg at 100% 0%, rgba(0,0,0,.025) 0deg 1deg, transparent 1deg 14deg)' }} />
                <div className="relative z-[1]">
                  <div className="text-sm tracking-[0.22em] text-[#CC1111] uppercase mb-3.5" style={{ fontFamily: 'var(--font-bangers)' }}>
                    {exp.role}
                  </div>
                  <p className="font-space-grotesk text-sm sm:text-[15px] leading-[1.8] text-[#0a0a0a]">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ SPECIAL MOVES ══════ */}
      <section className="bg-[#F5F0E8] border-b-4 border-[#0a0a0a]">
        <div className="chapter-bar">
          <span className="chapter-num">Special Moves</span>
          <div className="flex-1 h-px bg-white/15" />
          <span className="chapter-title">Skills</span>
        </div>

        <div className="p-1 bg-[#0a0a0a]">
          <div ref={addRevealRef} className="manga-reveal manga-panel p-5 sm:p-8 md:p-11 relative overflow-hidden">
            {/* BG SFX */}
            <div
              className="absolute top-4 right-4 sm:right-8 text-[40px] sm:text-[60px] md:text-[80px] text-black/[0.055] leading-none pointer-events-none tracking-[0.04em]"
              style={{ fontFamily: 'var(--font-bangers)', transform: 'rotate(-8deg)' }}
            >
              MASTERED!
            </div>

            <div className="text-[10px] sm:text-xs tracking-[0.28em] uppercase text-black/35 mb-6 sm:mb-9" style={{ fontFamily: 'var(--font-bangers)' }}>
              Technical Power — Live Readings
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">
              {skills.map((skill) => (
                <div key={skill.name} className="grid grid-cols-[120px_1fr_36px] sm:grid-cols-[180px_1fr_40px] md:grid-cols-[220px_1fr_44px] items-center gap-2 sm:gap-4">
                  <span className="text-sm sm:text-base md:text-lg tracking-[0.05em] text-[#0a0a0a] uppercase truncate" style={{ fontFamily: 'var(--font-bangers)' }}>
                    {skill.name}
                  </span>
                  <div className="h-3 sm:h-3.5 border-2 border-[#0a0a0a] bg-[#F5F0E8] relative overflow-hidden">
                    <div
                      className="absolute top-0 bottom-0 left-0 bg-[#0a0a0a] transition-all duration-[1.4s]"
                      style={{ width: `${skill.pct}%`, transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </div>
                  <span className="text-base sm:text-lg md:text-xl text-[#CC1111] text-right leading-none" style={{ fontFamily: 'var(--font-bangers)' }}>
                    {skill.pct}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CONNECT ══════ */}
      <section className="bg-[#F5F0E8]">
        <div className="chapter-bar">
          <span className="chapter-num">Final Chapter</span>
          <div className="flex-1 h-px bg-white/15" />
          <span className="chapter-title">Connect</span>
        </div>

        <div className="p-1 bg-[#0a0a0a]">
          <div ref={addRevealRef} className="manga-reveal manga-panel p-8 sm:p-12 md:p-[90px_60px] relative overflow-hidden text-center min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
            {/* Speed lines from center */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-conic-gradient(from 0deg at 50% 50%, rgba(0,0,0,.07) 0deg 1.2deg, transparent 1.2deg 10deg)' }} />
            {/* White radial center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[480px] h-[300px] sm:h-[400px] md:h-[480px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(255,255,255,1) 28%, transparent 72%)' }} />

            <div className="relative z-[1]">
              <div
                className="text-[clamp(48px,12vw,160px)] leading-[0.85] tracking-[0.03em] text-[#0a0a0a] uppercase mb-2"
                style={{ fontFamily: 'var(--font-bangers)', textShadow: '5px 5px 0 rgba(0,0,0,.1)' }}
              >
                CONNECT!
              </div>
              <div className="text-lg sm:text-2xl tracking-[0.18em] text-[#CC1111] mb-8 sm:mb-11 uppercase" style={{ fontFamily: 'var(--font-bangers)' }}>
                Let&apos;s Build Something Great
              </div>

              {/* Email - visible, clickable, copyable */}
              <div className="mb-6 sm:mb-8 flex flex-col items-center gap-2">
                <a
                  href="mailto:ssuryansh7003@gmail.com"
                  className="font-space-grotesk text-sm sm:text-lg font-bold text-[#0a0a0a] hover:text-[#CC1111] transition-colors select-all break-all"
                >
                  ssuryansh7003@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="font-space-grotesk text-[10px] font-semibold tracking-[0.15em] uppercase text-black/40 hover:text-[#CC1111] transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">{copied ? 'check' : 'content_copy'}</span>
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap mb-8 sm:mb-11">
                <a
                  href="mailto:ssuryansh7003@gmail.com"
                  className="text-base sm:text-lg tracking-[0.12em] uppercase text-white bg-[#0a0a0a] py-3 sm:py-3.5 px-7 sm:px-9 inline-block border-[3px] border-[#0a0a0a]"
                  style={{ fontFamily: 'var(--font-bangers)' }}
                >
                  Send Message
                </a>
                <a
                  href="/SURYANSH_SHARMA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg tracking-[0.12em] uppercase text-[#CC1111] bg-white py-3 sm:py-3.5 px-7 sm:px-9 inline-block border-[3px] border-[#CC1111]"
                  style={{ fontFamily: 'var(--font-bangers)' }}
                >
                  View R&eacute;sum&eacute;
                </a>
              </div>

              <div className="flex justify-center gap-5 sm:gap-9 mb-8 sm:mb-14 flex-wrap">
                <a href="https://github.com/suryansh-sharma420" target="_blank" rel="noopener noreferrer" className="font-space-grotesk text-xs font-semibold tracking-[0.18em] uppercase text-[#0a0a0a] border-b-2 border-[#0a0a0a] pb-1">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/suryansh-sharma-7b8302293" target="_blank" rel="noopener noreferrer" className="font-space-grotesk text-xs font-semibold tracking-[0.18em] uppercase text-[#0a0a0a] border-b-2 border-[#0a0a0a] pb-1">
                  LinkedIn
                </a>
                <a href="mailto:ssuryansh7003@gmail.com" className="font-space-grotesk text-xs font-semibold tracking-[0.18em] uppercase text-[#CC1111] border-b-2 border-[#CC1111] pb-1">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
