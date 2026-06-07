'use client';

import { useMode } from '@/context/ModeContext';
import { useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { mode } = useMode();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const contacts = [
    {
      name: 'GitHub',
      value: 'github.com/suryansh-sharma420',
      link: 'https://github.com/suryansh-sharma420',
      icon: 'terminal'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/suryansh-sharma-7b8302293',
      link: 'https://linkedin.com/in/suryansh-sharma-7b8302293',
      icon: 'database'
    },
    {
      name: 'Email',
      value: 'ssuryansh7003@gmail.com',
      link: 'mailto:ssuryansh7003@gmail.com',
      icon: 'alternate_email'
    }
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-white/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white border border-outline-variant p-8 md:p-12">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary-container transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <header className="mb-10 space-y-2">
          <span className="font-space-grotesk text-on-surface-variant text-[10px] tracking-[0.3em] uppercase block">
            {mode === 'technical' ? 'Establishing Link...' : 'Connect With Me'}
          </span>
          <h2 className="font-space-grotesk text-3xl font-bold text-on-surface uppercase tracking-tight">
            Get In Touch
          </h2>
        </header>

        <div className="space-y-4">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-4 border border-outline-variant hover:border-primary-container transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-outline-variant group-hover:border-primary-container transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container text-lg transition-colors">{contact.icon}</span>
              </div>
              <div>
                <span className="font-space-grotesk text-[9px] text-on-surface-variant uppercase tracking-widest block mb-0.5">
                  {contact.name}
                </span>
                <span className="font-space-grotesk text-sm font-bold text-on-surface group-hover:text-primary-container transition-colors">
                  {contact.value}
                </span>
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-10 pt-6 border-t border-outline-variant text-center">
          <span className="font-space-grotesk text-[9px] text-on-surface-variant uppercase tracking-widest">
            Available for opportunities
          </span>
        </footer>
      </div>
    </div>
  );
}
