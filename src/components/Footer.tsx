'use client';

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-outline-variant mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
        <span className="font-mono text-sm font-bold text-primary-container tracking-tight">[Suryansh]</span>
        <p className="font-space-grotesk text-[10px] tracking-[0.15em] uppercase text-on-surface-variant">
          &copy; 2026 Suryansh Sharma
        </p>
      </div>
    </footer>
  );
}
