import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Vorteile', href: '#vorteile' },
    { label: "So funktioniert's", href: '#so-funktionierts' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#') return;

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // NEUE FUNKTION: Scrollt zur Demo-Sektion
  const scrollToDemo = () => {
    setMobileMenuOpen(false); // Mobile Menü schließen
    const element = document.getElementById('demo-booking'); // Sucht nach ID "demo-booking"
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn("Ziel-Sektion mit ID 'demo-booking' nicht gefunden! Bitte in App.tsx prüfen.");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
      <nav
        className={`w-full max-w-4xl transition-all duration-500 ease-in-out rounded-full ${
          isScrolled || mobileMenuOpen
            ? 'glass-nav py-2.5 px-5'
            : 'bg-transparent py-4 px-6 border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden">
                <img 
                  src="https://i.postimg.cc/tJtx86QT/ImmomatchrLogo1.jpg" 
                  alt="Immomatchr Logo"
                  className="w-full h-full object-contain relative z-10"
                />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-brand-100 transition-colors">
              Immomatchr
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-5 py-1.5 text-base font-medium text-slate-400 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={scrollToDemo} // HIER IST DIE VERKNÜPFUNG
              className="btn-primary group relative px-5 py-2 rounded-full text-sm font-bold transition-all overflow-hidden hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1">
                Demo buchen <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2 animate-fade-in-up">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-400 hover:text-white py-3 px-4 hover:bg-white/5 rounded-lg transition-colors text-sm font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <hr className="border-white/10 my-2" />
            <button 
              onClick={scrollToDemo} // AUCH HIER VERKNÜPFEN
              className="btn-primary w-full py-3 rounded-xl font-bold text-sm shadow-lg"
            >
              Demo buchen
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;