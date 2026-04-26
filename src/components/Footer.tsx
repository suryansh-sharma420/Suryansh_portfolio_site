'use client';

import { useMode } from '@/context/ModeContext';

export default function Footer() {
  const { mode } = useMode();

  return (
    <footer className="w-full py-12 border-t border-outline-variant/20 bg-surface-container-lowest mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-8">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-black text-on-surface font-space-grotesk uppercase tracking-tighter">SURYANSH SHARMA</span>
          <p className="font-space-grotesk text-[10px] tracking-[0.2em] uppercase font-medium text-primary-container">
            © 2026 {mode === 'technical' ? 'SYSTEM_OVERRIDE' : 'PORTFOLIO_CORE'} {"//"} ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </div>
    </footer>
  );
}
