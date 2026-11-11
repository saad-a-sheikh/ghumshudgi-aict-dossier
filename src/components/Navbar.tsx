import React, { useState, useEffect } from 'react';
import { ShieldAlert, Menu, X, Play, FileWarning } from 'lucide-react';
import { DecodeText } from './DecodeText';

interface NavbarProps {
  onOpenFilm: () => void;
}

const NAV_ITEMS = [
  { label: '[01. DOSSIER]', href: '#dossier' },
  { label: '[02. CHARACTERS]', href: '#characters' },
  { label: '[03. SCENES]', href: '#scenes' },
  { label: '[04. PIPELINE]', href: '#pipeline' },
  { label: '[05. CREDITS]', href: '#credits' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenFilm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#dossier');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0A0A0C]/90 backdrop-blur-md border-[#2A2B30] py-3 shadow-dossier'
          : 'bg-[#0A0A0C]/70 backdrop-blur-sm border-[#2A2B30]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Monospaced Branding */}
        <a
          href="#top"
          className="group flex items-center gap-3 font-mono text-xs sm:text-sm tracking-wider text-[#E3E1D9] hover:text-white transition-colors"
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#121316] border border-[#2A2B30] group-hover:border-[#C2272D] transition-colors">
            <FileWarning className="w-3.5 h-3.5 text-[#C2272D]" />
          </span>
          <div className="flex flex-col">
            <span className="font-bold tracking-widest">
              GHUMSHUDGI <span className="text-[#C2272D]">//</span> AICT-LAB-01
            </span>
            <span className="text-[10px] text-[#9CA3AF] hidden sm:inline">
              CASE FILE: 26F-CS-A3 • DUET KARACHI
            </span>
          </div>
        </a>

        {/* Center: Jump Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveHash(item.href)}
              className={`px-3 py-1.5 font-mono text-xs tracking-wider rounded border transition-all duration-200 ${
                activeHash === item.href
                  ? 'border-[#C2272D]/60 bg-[#C2272D]/10 text-[#E3E1D9]'
                  : 'border-transparent text-[#9CA3AF] hover:text-[#E3E1D9] hover:border-red-600/60 hover:bg-[#121316]'
              }`}
            >
              <DecodeText text={item.label} />
            </a>
          ))}
        </nav>

        {/* Right: Status Badge + Quick Film Trigger */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded bg-[#121316] border border-[#C2272D]/40 font-mono text-[11px] tracking-widest text-[#E3E1D9]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2272D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C2272D]"></span>
            </span>
            <span className="text-[#9CA3AF]">STATUS:</span>
            <span className="text-[#C2272D] font-bold">RESTRICTED ACCESS</span>
          </div>

          <button
            onClick={onOpenFilm}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#C2272D]/15 hover:bg-[#C2272D] text-[#E3E1D9] hover:text-white border border-[#C2272D]/70 font-mono text-xs tracking-wider transition-all duration-200"
            title="Launch Short Film Player"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>[PLAY FILM]</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Dossier Menu"
            className="lg:hidden p-2 rounded bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 text-[#E3E1D9]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0C]/95 backdrop-blur-xl border-b border-[#2A2B30] px-4 pt-3 pb-5 space-y-3">
          <div className="flex items-center justify-between px-3 py-2 rounded bg-[#121316] border border-[#C2272D]/40 font-mono text-xs">
            <span className="flex items-center gap-2 text-[#C2272D] font-bold">
              <ShieldAlert className="w-4 h-4" />
              STATUS: RESTRICTED ACCESS
            </span>
            <span className="text-[#9CA3AF] text-[10px]">[26F-CS-A3]</span>
          </div>

          <div className="grid grid-cols-1 gap-1.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveHash(item.href);
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2.5 rounded bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 font-mono text-xs tracking-wider text-[#E3E1D9] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[#C2272D] text-[10px]">INSPECT →</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenFilm();
            }}
            className="w-full py-2.5 rounded bg-[#C2272D] text-white font-mono text-xs font-bold tracking-widest flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            [ WATCH SHORT FILM ]
          </button>
        </div>
      )}
    </header>
  );
};
