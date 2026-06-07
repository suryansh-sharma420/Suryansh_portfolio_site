'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useMode } from '@/context/ModeContext';
import Image from 'next/image';

export default function Home() {
  const { mode } = useMode();

  return (
    <div className="min-h-screen pt-28 pb-12 flex flex-col">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 space-y-32 flex-grow">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[70vh]">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 text-on-surface-variant px-3 py-1 border-l-2 border-primary-container">
              <span className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] font-bold">
                {mode === 'technical' ? 'System Identity' : 'Executive Profile'}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.8] tracking-tighter text-on-surface uppercase">
                SURYANSH <br/>
                <span className="text-on-surface-variant">SHARMA</span>
              </h1>
              <h2 className="font-space-grotesk text-2xl md:text-4xl text-on-surface-variant font-light tracking-tight">
                {mode === 'technical'
                  ? '// Engineering High-Performance AI Systems'
                  : '// Architecting Strategic Digital Solutions'}
              </h2>
            </div>

            <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {mode === 'technical'
                ? 'Hi, I am Suryansh Sharma, a final-year B.Tech student, and a Software Engineer. I am passionate about building scalable, production-ready AI applications that solve real-world problems. My work focuses on the intersection of Deep Learning, Generative AI and core Software Development. I am currently working as an Associate Analyst at Tech Mahindra, where I am involved in developing and deploying AI solutions for enterprise clients. Previously, I interned at Naxxatra Sciences, where I worked on developing a deep learning model for medical imaging analysis. I am new to the world of Open Source and continuously learning and improving my skills in the ever-evolving field of Artificial Intelligence. The next time you see this, you wont recognize it.'
                : 'Passionate about solving real-world problems using AI at scale. Bridging the gap between complex engineering and business growth through robust architectures and approaches that iteratively improve.'}
            </p>

            <div className="space-y-10">
              <div className="flex flex-wrap gap-4 font-space-grotesk">
                <a href="/SURYANSH_SHARMA.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-primary-container text-on-primary font-bold uppercase tracking-widest text-xs hover:opacity-90 active:scale-95 transition-all inline-block">
                  View Resume
                </a>
              </div>

              <div className="relative border border-outline-variant bg-white p-1">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
                  <a href="https://github.com/suryansh-sharma420" target="_blank" rel="noopener noreferrer" className="p-6 hover:bg-surface-container transition-all group flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant">terminal</span>
                      <span className="font-space-grotesk text-[9px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/60">GitHub</span>
                    </div>
                    <span className="font-space-grotesk text-sm font-bold text-on-surface tracking-tight group-hover:text-primary-container transition-colors">github.com/suryansh-sharma420</span>
                  </a>

                  <a href="https://linkedin.com/in/suryansh-sharma-7b8302293" target="_blank" rel="noopener noreferrer" className="p-6 hover:bg-surface-container transition-all group flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant">database</span>
                      <span className="font-space-grotesk text-[9px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/60">LinkedIn</span>
                    </div>
                    <span className="font-space-grotesk text-sm font-bold text-on-surface tracking-tight group-hover:text-primary-container transition-colors">in/suryansh-sharma-7b8302293</span>
                  </a>

                  <a href="mailto:ssuryansh7003@gmail.com" className="p-6 hover:bg-surface-container transition-all group flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant">alternate_email</span>
                      <span className="font-space-grotesk text-[9px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/60">Email</span>
                    </div>
                    <span className="font-space-grotesk text-sm font-bold text-on-surface tracking-tight group-hover:text-primary-container transition-colors">ssuryansh7003@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="relative border border-outline-variant p-2 overflow-hidden bg-white">
              <Image
                alt="Suryansh Sharma"
                className="w-full aspect-square object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                src="/suryansh_profile.png"
                width={800}
                height={800}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-16">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="font-space-grotesk text-4xl font-bold text-on-surface sticky top-32">
                <span className="text-on-surface-variant font-light">01_</span><br/>
                {mode === 'technical' ? 'Experience' : 'The Experience'}
              </h2>
            </div>
            <div className="md:w-2/3 space-y-12">
              <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  My journey is defined by the intersection of <span className="text-on-surface font-medium">AI and SDE</span> and industrial-grade implementation. I engineer systems that handle complexity at scale, from high-load billing engines to security testing frameworks.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {[
                    { label: 'Foundation', value: 'B.Tech CSE' },
                    { label: 'GPA', value: '8.36 / 10' },
                    { label: 'Focus', value: 'AI/ML Systems' },
                    { label: 'Mission', value: 'Infinite Improvement' }
                  ].map(item => (
                    <div key={item.label} className="border border-outline-variant p-4 relative bg-white">
                      <div className="font-space-grotesk text-[9px] text-on-surface-variant mb-1 tracking-widest uppercase">{item.label}</div>
                      <div className="text-on-surface font-bold uppercase text-xs tracking-tight">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    company: 'Tech Mahindra',
                    role: 'Associate Analyst // GenAI',
                    date: 'FEB 2026 - PRESENT',
                    description: 'Architecting GCP-based RAG workflows and autonomous data extraction systems. Performing adversarial red teaming on foundation models.'
                  },
                  {
                    company: 'Naxxatra Sciences',
                    role: 'Data Science & ML Intern',
                    date: 'JUNE - AUG 2025',
                    description: 'Developed a scientific imaging CNN achieving 99% accuracy in MRI classification. Engineered robust end-to-end data pipelines.'
                  }
                ].map((exp, i) => (
                  <div key={i} className="border border-outline-variant p-8 relative border-l-2 border-l-primary-container hover:bg-surface-container transition-all group bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-space-grotesk text-xl font-bold uppercase text-on-surface tracking-tight">{exp.company}</h3>
                      <span className="font-space-grotesk text-[10px] text-on-surface-variant tracking-widest">{exp.date}</span>
                    </div>
                    <p className="text-on-surface-variant font-space-grotesk text-[11px] uppercase tracking-widest mb-4 font-bold">{exp.role}</p>
                    <p className="text-sm text-on-surface-variant font-body leading-relaxed max-w-xl">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="text-center mb-16 space-y-4">
            <span className="text-on-surface-variant font-space-grotesk text-sm tracking-[0.5em] block uppercase">Core Stack</span>
            <h2 className="font-space-grotesk text-4xl font-bold text-on-surface uppercase tracking-tight">Technical Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'hub', title: 'Full-Stack Development', desc: 'Building with React.js, Next.js, FastAPI and Postgres.' },
              { icon: 'memory', title: 'RAG Pipelines', desc: 'Advanced Retrieval Augmented Generation with vector databases and semantic search.' },
              { icon: 'security', title: 'LLM Safety', desc: 'Adversarial testing and alignment for foundation models to prevent hallucinations.' },
              { icon: 'bolt', title: 'FastAPI', desc: 'Ultra-fast asynchronous REST APIs with strict Pydantic validation.' },
              { icon: 'model_training', title: 'PyTorch', desc: 'Custom neural network design and efficient GPU training orchestration.' },
              { icon: 'monitoring', title: 'System Design', desc: 'Technical leadership focused on ROI and sustainable engineering practices.' }
            ].map((skill, i) => (
              <div key={i} className="bg-white border border-outline-variant p-8 relative border-l-2 border-l-primary-container/30 hover:border-l-primary-container transition-all group">
                <span className="material-symbols-outlined text-on-surface-variant mb-6 text-4xl group-hover:text-primary-container transition-colors">{skill.icon}</span>
                <h3 className="font-space-grotesk text-lg font-bold text-on-surface mb-3 uppercase tracking-tight">{skill.title}</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
