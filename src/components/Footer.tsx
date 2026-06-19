'use client';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-[3px] border-[#0a0a0a]">
      <div className="manga-panel border-[3px] border-[#0a0a0a] m-1 p-12 relative overflow-hidden text-center">
        <div className="halftone-overlay" />
        <div className="relative z-10 space-y-4">
          <div
            className="text-3xl tracking-[0.22em] text-black/30 uppercase"
            style={{ fontFamily: 'var(--font-bangers)' }}
          >
            — To Be Continued —
          </div>
          <div className="font-space-grotesk text-[11px] font-semibold tracking-[0.2em] uppercase text-black/22">
            &copy; 2026 Suryansh Sharma &middot; Vol. 01 Complete
          </div>
        </div>
      </div>
    </footer>
  );
}
