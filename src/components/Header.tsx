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
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="/image/4b05ea2d-2672-4def-a800-e3c2585a3473__1_-removebg-preview.png" 
              alt="Logo" 
              className="w-8 h-8 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-white text-sm">Six Flavors</span>
            <span className="font-display font-bold text-white text-[8px] tracking-widest">SPIRITS</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-[10px] font-black tracking-widest transition-colors ${
                currentPage === item.value || (currentPage === 'process' && item.value === 'collection')
                  ? 'text-brand-brown border-b-2 border-brand-brown'
                  : 'text-brand-brown/80 hover:text-brand-brown'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="md:hidden p-2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
}
