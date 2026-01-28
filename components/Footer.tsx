import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02040a] border-t border-white/[0.05] pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND & LOGO */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 select-none">
              {/* LOGO FIX: Hier ist der korrekte Link aus deiner Navbar */}
              <div className="h-10 w-10 flex items-center justify-center rounded-lg overflow-hidden bg-white/5 border border-white/10">
                  <img 
                    src="https://i.postimg.cc/tJtx86QT/ImmomatchrLogo1.jpg" 
                    alt="Immomatchr"
                    className="w-full h-full object-contain"
                  />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Immomatchr
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Die KI-Software für Immobilienmakler. Verwandeln Sie Ihre Datenbank in aktiven Umsatz.
            </p>
          </div>

          {/* 2. PLATZHALTER (Damit Kontakt weiter rechts steht) */}
          <div className="hidden lg:block"></div>

          {/* 3. KONTAKT */}
          <div>
            <h3 className="font-bold text-white mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hallo@immomatchr.de" className="flex items-center gap-3 text-slate-400 hover:text-brand-400 transition-colors text-sm group">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-brand-500/10 transition-colors">
                    <Mail size={16} />
                  </div>
                  <span>hallo@immomatchr.de</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm group">
                <div className="p-2 rounded-lg bg-white/5 mt-[-4px]">
                  <MapPin size={16} />
                </div>
              </li>
            </ul>
          </div>

          {/* 4. RECHTLICHES (Nur die wichtigen 3) */}
          <div>
            <h3 className="font-bold text-white mb-6">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <a href="/impressum" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/agb" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} Immomatchr. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-400 text-xs font-medium">System operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;