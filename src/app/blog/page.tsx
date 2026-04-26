'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useMode } from '@/context/ModeContext';

export default function BlogPage() {
  const { mode } = useMode();

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 flex-grow flex flex-col justify-center w-full py-20">
        <header className="mb-20 text-center space-y-4">
          <span className="font-space-grotesk text-primary-container text-xs tracking-[0.4em] uppercase block">
            {mode === 'technical' ? 'TERMINAL_LOGS: INCOMING_DATA_STREAM' : 'FUTURE_INSIGHTS'}
          </span>
          <h1 className="font-space-grotesk text-5xl md:text-8xl font-bold tracking-tighter text-on-surface uppercase">
            {mode === 'technical' ? 'DECRYPTING_FEED...' : 'COMING_SOON'}
          </h1>
        </header>

        <section className="flex flex-col items-center justify-center space-y-16">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-2 border-primary-container/20 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-primary-container flex items-center justify-center bg-primary-container/5 animate-pulse shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <span className="material-symbols-outlined text-4xl text-primary-container">sensors</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-surface-container-highest border border-primary-container/30 px-3 py-1 rounded-sm">
              <span className="font-space-grotesk text-[10px] text-primary-container uppercase animate-pulse">Scanning...</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full opacity-40">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-panel p-8 border-dashed border-outline-variant/40 relative">
                <div className="corner-bracket-tl opacity-20"></div>
                <div className="h-4 w-2/3 bg-outline-variant/20 mb-4"></div>
                <div className="h-4 w-full bg-outline-variant/10 mb-2"></div>
                <div className="h-4 w-1/2 bg-outline-variant/10"></div>
                <div className="mt-8 flex justify-between items-center">
                  <div className="h-2 w-12 bg-primary-container/20"></div>
                  <div className="h-2 w-8 bg-primary-container/10"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-md w-full glass-panel p-8 space-y-6 relative">
            <div className="corner-bracket-tl"></div>
            <div className="corner-bracket-br"></div>
            <div className="text-center">
              <h3 className="font-space-grotesk text-xl font-bold uppercase tracking-tight">Stay_Synchronized</h3>
              <p className="text-sm text-on-surface-variant font-body">Get notified when the data stream goes live.</p>
            </div>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder={mode === 'technical' ? 'ENTER_TARGET_EMAIL' : 'Enter your email'}
                className="w-full bg-surface-container-lowest border border-outline-variant/30 px-4 py-3 font-space-grotesk text-sm focus:border-primary-container outline-none transition-all text-on-surface"
              />
              <button className="w-full py-4 bg-primary-container text-on-primary font-space-grotesk font-bold uppercase tracking-widest text-xs glow-cyan hover:brightness-110 active:scale-95 transition-all">
                {mode === 'technical' ? 'Subscribe_to_Webhook' : 'Notify Me'}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
