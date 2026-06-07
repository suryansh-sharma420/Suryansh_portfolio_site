'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useMode } from '@/context/ModeContext';

export default function BlogPage() {
  const { mode } = useMode();

  return (
    <div className="min-h-screen pt-28 pb-12 flex flex-col">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 flex-grow flex flex-col justify-center w-full py-20">
        <header className="mb-20 text-center space-y-4">
          <span className="font-space-grotesk text-on-surface-variant text-xs tracking-[0.3em] uppercase block">
            {mode === 'technical' ? 'Data Stream' : 'Future Insights'}
          </span>
          <h1 className="font-space-grotesk text-5xl md:text-8xl font-bold tracking-tighter text-on-surface">
            Coming Soon
          </h1>
        </header>

        <section className="flex flex-col items-center justify-center space-y-16">
          <div className="relative">
            <div className="w-24 h-24 border border-outline-variant flex items-center justify-center bg-surface-container">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant">sensors</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full opacity-30">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-outline-variant border-dashed p-8 relative bg-white">
                <div className="h-4 w-2/3 bg-surface-container-high mb-4"></div>
                <div className="h-4 w-full bg-surface-container mb-2"></div>
                <div className="h-4 w-1/2 bg-surface-container"></div>
                <div className="mt-8 flex justify-between items-center">
                  <div className="h-2 w-12 bg-surface-container-high"></div>
                  <div className="h-2 w-8 bg-surface-container"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-md w-full border border-outline-variant p-8 space-y-6 bg-white">
            <div className="text-center">
              <h3 className="font-space-grotesk text-xl font-bold uppercase tracking-tight">Stay Updated</h3>
              <p className="text-sm text-on-surface-variant font-body">Get notified when the blog goes live.</p>
            </div>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-surface-container border border-outline-variant px-4 py-3 font-space-grotesk text-sm focus:border-primary-container outline-none transition-all text-on-surface"
              />
              <button className="w-full py-4 bg-primary-container text-on-primary font-space-grotesk font-bold uppercase tracking-widest text-xs hover:opacity-90 active:scale-95 transition-all">
                Notify Me
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
