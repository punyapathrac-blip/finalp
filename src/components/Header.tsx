import { motion } from 'motion/react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems: { label: string; value: Page }[] = [
    { label: 'HOME', value: 'home' },
    { label: 'COL', value: 'collection' },
    { label: 'INFO', value: 'about' },
    { label: 'CONTACT', value: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FFD25A]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <img 
            src="/image/IMG_1016.png" 
            alt="Six Flavors Spirits Logo" 
            className="h-14 w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-xs font-black tracking-[0.2em] transition-colors ${
                currentPage === item.value || (currentPage === 'process' && item.value === 'collection')
                  ? 'text-brand-brown'
                  : 'text-brand-brown/60 hover:text-brand-brown'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="md:hidden p-2 text-brand-brown">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
}
