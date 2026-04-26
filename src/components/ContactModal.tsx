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
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg glass-panel p-8 md:p-12 animate-in zoom-in-95 duration-300">
        <div className="corner-bracket-tl"></div>
        <div className="corner-bracket-br"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-primary-container/60 hover:text-primary-container transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <header className="mb-12 space-y-2">
          <span className="font-space-grotesk text-primary-container text-[10px] tracking-[0.4em] uppercase block">
            {mode === 'technical' ? 'ESTABLISHING_LINK...' : 'CONNECT_WITH_ME'}
          </span>
          <h2 className="font-space-grotesk text-3xl font-bold text-on-surface uppercase tracking-tight">
            Get_In_Touch
          </h2>
        </header>

        <div className="space-y-6">
          {contacts.map((contact) => (
            <a 
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-4 bg-surface-container-low border border-outline-variant/10 hover:border-primary-container/40 hover:bg-surface-container-high transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary-container/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="w-12 h-12 flex items-center justify-center border border-primary-container/20 group-hover:border-primary-container/60 transition-colors">
                <span className="material-symbols-outlined text-primary-container text-xl">{contact.icon}</span>
              </div>
              <div className="relative z-10">
                <span className="font-space-grotesk text-[9px] text-primary-container uppercase tracking-widest block mb-1 opacity-60">
                  {contact.name}
                </span>
                <span className="font-space-grotesk text-sm font-bold text-on-surface group-hover:text-primary-container transition-colors">
                  {contact.value}
                </span>
              </div>
              <span className="material-symbols-outlined ml-auto text-primary-container opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                arrow_forward
              </span>
            </a>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t border-outline-variant/10 flex justify-between items-center">
          <div className="font-space-grotesk text-[9px] text-on-surface-variant uppercase tracking-widest">
            {mode === 'technical' ? 'PORT: 8080 // SECURE' : 'Available for opportunities'}
          </div>
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary-container/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary-container/20"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
