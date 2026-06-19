'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Chapter header */}
      <div className="pt-14 bg-[#F5F0E8] border-b-4 border-[#0a0a0a]">
        <div className="chapter-bar">
          <span className="chapter-num">Side Story</span>
          <div className="flex-1 h-px bg-white/15" />
          <span className="chapter-title">The Blog</span>
        </div>
      </div>

      <main className="bg-[#0a0a0a] flex-grow">
        <div className="p-1">
          <div className="manga-panel relative overflow-hidden min-h-[70vh] flex flex-col items-center justify-center p-12">
            {/* Speed lines from center */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-conic-gradient(from 0deg at 50% 50%, rgba(0,0,0,.05) 0deg 1.2deg, transparent 1.2deg 10deg)' }} />
            {/* White radial center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(255,255,255,1) 28%, transparent 72%)' }} />

            <div className="relative z-[1] text-center space-y-8">
              <div
                className="text-[clamp(60px,10vw,120px)] leading-[0.85] tracking-[0.03em] text-[#0a0a0a] uppercase"
                style={{ fontFamily: 'var(--font-bangers)', textShadow: '4px 4px 0 rgba(0,0,0,.08)' }}
              >
                Coming<br />Soon!
              </div>

              <div className="text-xl tracking-[0.18em] text-[#CC1111] uppercase" style={{ fontFamily: 'var(--font-bangers)' }}>
                This chapter is being written...
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl mx-auto opacity-30">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-[3px] border-[#0a0a0a] border-dashed p-6 bg-[#F5F0E8]">
                    <div className="h-3 w-2/3 bg-[#0a0a0a]/10 mb-3"></div>
                    <div className="h-3 w-full bg-[#0a0a0a]/5 mb-2"></div>
                    <div className="h-3 w-1/2 bg-[#0a0a0a]/5"></div>
                  </div>
                ))}
              </div>

              <div className="max-w-md w-full mx-auto border-[3px] border-[#0a0a0a] p-8 bg-white space-y-5">
                <div className="text-center">
                  <h3 className="text-2xl uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--font-bangers)' }}>Stay Updated</h3>
                  <p className="font-space-grotesk text-sm text-black/45">Get notified when the blog goes live.</p>
                </div>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#F5F0E8] border-[2px] border-[#0a0a0a] px-4 py-3 font-space-grotesk text-sm focus:border-[#CC1111] outline-none transition-all text-[#0a0a0a]"
                  />
                  <button
                    className="w-full py-3.5 bg-[#0a0a0a] text-white text-lg uppercase tracking-[0.12em] hover:bg-[#CC1111] active:scale-95 transition-all border-[2px] border-[#0a0a0a] hover:border-[#CC1111]"
                    style={{ fontFamily: 'var(--font-bangers)' }}
                  >
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
