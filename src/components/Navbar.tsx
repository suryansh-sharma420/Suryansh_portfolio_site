'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'CH.01 — INTRO', path: '/' },
    { name: 'CH.02 — PROJECTS', path: '/projects' },
    { name: 'CH.03 — BLOG', path: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] bg-white border-b-[3px] border-[#0a0a0a] px-8 h-14 flex items-center justify-between">
      <div className="font-[var(--font-bangers)] text-xl tracking-[0.08em] text-[#0a0a0a]" style={{ fontFamily: 'var(--font-bangers)' }}>
        SURYANSH SHARMA
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`text-sm tracking-[0.1em] border-[2px] border-[#0a0a0a] px-2.5 py-0.5 transition-colors duration-200 ${
              pathname === link.path
                ? 'bg-[#0a0a0a] text-white'
                : 'text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white'
            }`}
            style={{ fontFamily: 'var(--font-bangers)' }}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="mailto:ssuryansh7003@gmail.com"
          className="text-sm tracking-[0.1em] text-white bg-[#CC1111] border-[2px] border-[#CC1111] px-2.5 py-0.5"
          style={{ fontFamily: 'var(--font-bangers)' }}
        >
          CONTACT
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden md:block font-space-grotesk text-[11px] font-semibold tracking-[0.18em] uppercase text-black/35">
          Vol. 01
        </span>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#0a0a0a]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-xl">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-white border-b-[3px] border-[#0a0a0a] p-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg tracking-[0.1em] border-[2px] border-[#0a0a0a] px-4 py-2 text-center ${
                pathname === link.path ? 'bg-[#0a0a0a] text-white' : 'text-[#0a0a0a]'
              }`}
              style={{ fontFamily: 'var(--font-bangers)' }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="mailto:ssuryansh7003@gmail.com"
            className="text-lg tracking-[0.1em] text-white bg-[#CC1111] border-[2px] border-[#CC1111] px-4 py-2 text-center"
            style={{ fontFamily: 'var(--font-bangers)' }}
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}
