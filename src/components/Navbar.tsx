import React, { useState } from 'react';
import { Gamepad2, Menu, X, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { REGISTRATION_URL } from '../data/games';

interface NavbarProps {
  onOpenAdmin: () => void;
  exchangeRate: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin, exchangeRate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Magemu', href: '#magemu' },
    { label: 'Malipo ya Wateja', href: '#malipo' },
    { label: 'Mitandao ya Pesa', href: '#mitandao' },
    { label: 'Jinsi Inavyofanya Kazi', href: '#jinsi-inavyofanya-kazi' },
    { label: 'Maswali (FAQ)', href: '#maswali' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080c16]/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          
          {/* Zone 1: Single text element brand wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 flex items-center justify-center shadow-lg shadow-purple-900/40 ring-1 ring-purple-500/30 group-hover:scale-105 transition-transform">
                <Gamepad2 className="w-5 h-5 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                  GAMES <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">PAY</span>
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                  PLAY • ENJOY • EARN
                </span>
              </div>
            </a>
          </div>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action & admin quick trigger */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAdmin}
              title="Jopo la Usimamizi na Kiwango cha Pesa"
              className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-slate-800"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-md shadow-purple-950/50 transition-all hover:shadow-purple-700/30 active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>Sajili Profile (TSh 15,000)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAdmin}
              aria-label="Fungua Usimamizi"
              className="p-2 text-slate-400 hover:text-amber-400 rounded-lg border border-slate-800"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0b101e] px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="pt-2 border-t border-slate-800/80">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-md"
            >
              <span>Gusa Hapa Kutengeneza Profile</span>
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </a>
            <div className="mt-2 text-center text-[11px] text-slate-400">
              Kiwango: $1 = TSh {exchangeRate.toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
