
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workflow from './components/Workflow';
import SocialProof from './components/SocialProof';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import MainCTA from './components/MainCTA';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'scale-95');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10', 'scale-95');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};

const App: React.FC = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-brand-500/30 selection:text-white font-sans overflow-x-hidden relative">
      
      {/* Fixed Global Background with Bluish Graphic */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Deep Dark Blue Tint */}
        <div className="absolute inset-0 bg-[#02040a]"></div>
        
        {/* Grid Texture */}
        <div className="absolute inset-0 bg-grid opacity-[0.15]"></div>

        {/* Ambient Blue Glow Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vh] bg-brand-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vh] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen"></div>

        {/* The "Equinox" Bluish Graphic Waves/Streaks */}
        <div className="absolute inset-0 opacity-30">
           <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(14, 165, 233, 0)" />
                  <stop offset="50%" stopColor="rgba(14, 165, 233, 0.4)" />
                  <stop offset="100%" stopColor="rgba(14, 165, 233, 0)" />
                </linearGradient>
                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
                  <stop offset="50%" stopColor="rgba(56, 189, 248, 0.3)" />
                  <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                </linearGradient>
              </defs>
              {/* Flowing Curves */}
              <path d="M-100,0 C400,400 800,0 1600,800" stroke="url(#grad1)" strokeWidth="2" fill="none" className="animate-float" style={{animationDuration: '20s'}} />
              <path d="M-200,200 C300,600 900,100 1800,900" stroke="url(#grad2)" strokeWidth="1.5" fill="none" className="animate-float" style={{animationDuration: '25s'}} />
              <path d="M0,400 C500,100 1000,800 1500,300" stroke="url(#grad1)" strokeWidth="1" fill="none" opacity="0.5" className="animate-float" style={{animationDuration: '30s'}} />
           </svg>
        </div>

        {/* Grain Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-0">
        <Navbar />
        <main>
          <Hero />
          {/* Workflow Animation - Full Width & Seamless */}
          <section className="w-full bg-[#0B0F19] py-10 relative z-10 border-t border-white/5 overflow-hidden">
             <div className="w-full">
                <Workflow />
             </div>
          </section>
          <SocialProof />
          <ProblemSection />
          <SolutionSection />
          <HowItWorks />
          <Features />
          <Testimonials />
          <Team />
          <MainCTA />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
