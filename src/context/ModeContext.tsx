'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Mode = 'executive' | 'technical';

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('executive');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-mode') as Mode | null;
    if (saved === 'technical' || saved === 'executive') setMode(saved);
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'executive' ? 'technical' : 'executive';
      localStorage.setItem('portfolio-mode', next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}
