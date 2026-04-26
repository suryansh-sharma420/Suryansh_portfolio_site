'use client';

import { useMode } from '@/context/ModeContext';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const { mode, toggleMode } = useMode();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-background/80 backdrop-blur-xl border-b border-primary-container/20 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16 w-full">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-primary-container group-hover:rotate-90 transition-transform duration-500">terminal</span>
            <span className="font-space-grotesk font-bold tracking-tighter text-primary-container uppercase">
              {mode === 'technical' ? 'NEURAL_ARCHIVE' : 'STRATEGY_PORTFOLIO'}
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path}
              className={`font-space-grotesk uppercase tracking-widest text-[11px] font-bold transition-all duration-300 pb-1 border-b-2 ${
                pathname === link.path 
                  ? 'text-primary-container border-primary-container' 
                  : 'text-on-surface-variant border-transparent hover:text-primary-container'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleMode}
            className="flex items-center gap-2 px-3 py-1.5 bg-primary-container/5 border border-primary-container/20 hover:bg-primary-container/10 transition-all rounded-sm group"
          >
            <div className={`w-2 h-2 rounded-full ${mode === 'technical' ? 'bg-primary-container animate-pulse shadow-[0_0_8px_#00f0ff]' : 'bg-on-surface-variant'}`}></div>
            <span className="font-space-grotesk text-[10px] uppercase tracking-widest font-bold text-on-surface">
              {mode === 'technical' ? '[TECH]' : '[EXEC]'}
            </span>
          </button>
          
          <div className="w-8 h-8 rounded-sm bg-surface-container border border-primary-container/20 overflow-hidden hidden sm:block">
            <Image 
              alt="Suryansh Sharma" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              src="/suryansh_profile.png"
              width={32}
              height={32}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary-container material-symbols-outlined"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-surface-container/95 backdrop-blur-2xl border-b border-primary-container/20 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`font-space-grotesk uppercase tracking-[0.2em] text-sm font-bold ${
                pathname === link.path ? 'text-primary-container' : 'text-on-surface-variant'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
