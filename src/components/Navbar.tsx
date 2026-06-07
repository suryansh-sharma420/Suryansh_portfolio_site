'use client';

import { useMode } from '@/context/ModeContext';
import Link from 'next/link';
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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-5xl">
      <div className="bg-white border border-outline-variant rounded-full px-6 h-14 flex items-center justify-between">
        {/* Bracket logo */}
        <Link href="/" className="font-mono text-sm font-bold text-primary-container tracking-tight hover:opacity-70 transition-opacity">
          [Suryansh]
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-space-grotesk uppercase tracking-[0.15em] text-[11px] font-bold transition-colors duration-200 ${
                pathname === link.path
                  ? 'text-primary-container'
                  : 'text-on-surface-variant hover:text-primary-container'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Mode toggle pill */}
          <button
            onClick={toggleMode}
            aria-label="Toggle view mode"
            className="relative flex items-center h-7 rounded-full border border-outline-variant bg-surface-container overflow-hidden"
            style={{ width: '140px' }}
          >
            <span
              className="absolute top-0 bottom-0 w-1/2 bg-primary-container rounded-full transition-transform duration-300 ease-in-out"
              style={{ transform: mode === 'executive' ? 'translateX(0%)' : 'translateX(100%)' }}
            />
            <span className={`relative z-10 flex-1 text-center font-space-grotesk text-[9px] uppercase tracking-widest font-bold transition-colors duration-300 ${mode === 'executive' ? 'text-on-primary' : 'text-on-surface-variant'}`}>
              Executive
            </span>
            <span className={`relative z-10 flex-1 text-center font-space-grotesk text-[9px] uppercase tracking-widest font-bold transition-colors duration-300 ${mode === 'technical' ? 'text-on-primary' : 'text-on-surface-variant'}`}>
              Engineer
            </span>
          </button>

          {/* Contact button — desktop */}
          <Link
            href="mailto:ssuryansh7003@gmail.com"
            className="hidden sm:inline-block font-space-grotesk text-[11px] uppercase tracking-[0.15em] font-bold border border-primary-container text-primary-container px-4 py-1.5 rounded-full hover:bg-primary-container hover:text-on-primary transition-all duration-200"
          >
            Contact
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary-container"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-xl">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white border border-outline-variant rounded-2xl p-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`font-space-grotesk uppercase tracking-[0.15em] text-sm font-bold ${
                pathname === link.path ? 'text-primary-container' : 'text-on-surface-variant'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="mailto:ssuryansh7003@gmail.com"
            className="font-space-grotesk text-[11px] uppercase tracking-[0.15em] font-bold border border-primary-container text-primary-container px-4 py-2 text-center rounded-full hover:bg-primary-container hover:text-on-primary transition-all"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
