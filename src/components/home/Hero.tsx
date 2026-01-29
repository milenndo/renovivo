import { useState, useEffect, useRef } from "react";
import { Calculator, FolderOpen, CheckCircle2, Award, Shield, Sparkles, ChevronDown } from "lucide-react";
import heroPoster from "@/assets/images/hero-poster.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// Premium Golden Particle component
const GoldenParticle = ({ delay, duration, left, size }: { delay: number; duration: number; left: string; size: number }) => (
  <div
    className="absolute rounded-full animate-float-gentle"
    style={{
      left,
      top: `${20 + Math.random() * 40}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      width: size,
      height: size,
      background: `radial-gradient(circle, hsl(var(--primary) / 0.8) 0%, hsl(var(--primary) / 0) 70%)`,
      boxShadow: `0 0 ${size * 2}px hsl(var(--primary) / 0.3)`,
    }}
  />
);

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    
    // Trigger animations after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      mediaQuery.removeEventListener("change", handler);
      clearTimeout(timer);
    };
  }, []);

  const stats = [
    { icon: CheckCircle2, value: "127", labelKey: 'hero.stats.projects' },
    { icon: Award, value: "94%", labelKey: 'hero.stats.recommend' },
    { icon: Shield, value: "5", labelKey: 'hero.stats.warranty' },
  ];

  // Particle configurations for premium effect
  const particles = [
    { delay: 0, duration: 8, left: "10%", size: 4 },
    { delay: 1.5, duration: 10, left: "25%", size: 6 },
    { delay: 0.5, duration: 9, left: "40%", size: 3 },
    { delay: 2, duration: 11, left: "55%", size: 5 },
    { delay: 1, duration: 8, left: "70%", size: 4 },
    { delay: 2.5, duration: 10, left: "85%", size: 6 },
    { delay: 0.8, duration: 9, left: "15%", size: 3 },
    { delay: 1.8, duration: 12, left: "90%", size: 4 },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* LCP Poster image */}
        <img
          src={heroPoster}
          alt="Renovivo - professional renovations in Sofia"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="sync"
          loading="eager"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            videoLoaded && !prefersReducedMotion ? "opacity-0 scale-105" : "opacity-50"
          }`}
          style={{ aspectRatio: '16/9' }}
        />
        
        {/* Video with cinematic reveal */}
        {!prefersReducedMotion && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            width={1920}
            height={1080}
            poster={heroPoster}
            onCanPlay={() => setVideoLoaded(true)}
            aria-label="Luxury penthouse interior transformation video"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
              videoLoaded ? "opacity-50 scale-100" : "opacity-0 scale-110"
            }`}
            style={{ aspectRatio: '16/9' }}
          >
            <source src="/videos/hero-background.webm?v=2" type="video/webm" />
            <track kind="captions" src="" label="No subtitles" default />
          </video>
        )}
        
        {/* Premium Cinematic Overlay - vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-foreground/50 to-foreground/95" />
        
        {/* Radial vignette for cinematic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,transparent_10%,rgba(0,0,0,0.7)_100%)]" />
        
        {/* Golden gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        
        {/* Animated golden orbs - more refined */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-golden-pulse" />
        <div className="absolute bottom-1/3 right-1/5 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-golden-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Subtle elegant grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />
      </div>

      {/* Premium Golden Particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <GoldenParticle key={i} {...p} />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="container-custom relative z-10 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Premium Badge with Golden Shimmer */}
          <div 
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-primary/15 via-primary/25 to-primary/15 backdrop-blur-xl px-7 py-3.5 rounded-full mb-12 border border-primary/30 relative overflow-hidden transition-all duration-1000 animate-golden-shimmer ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Shine sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full animate-shimmer" style={{ animationDuration: '3s' }} />
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase relative z-10">
              {t('hero.badge')}
            </span>
          </div>

          {/* Epic Split-Text Headline */}
          <h1 className="mb-10">
            {/* First line - Golden accent */}
            <span 
              className={`block heading-display transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              <span className="relative inline-block text-primary drop-shadow-[0_0_80px_rgba(245,190,50,0.4)]">
                {t('hero.title1')}
                {/* Elegant golden underline */}
                <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-80" />
              </span>
            </span>
            
            {/* Second line - Light text */}
            <span 
              className={`block heading-display mt-4 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              <span className="text-background drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                {t('hero.title2')}
              </span>
            </span>
          </h1>

          {/* Elegant Subtitle with Decorative Lines */}
          <div 
            className={`flex items-center justify-center gap-8 mb-14 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="hidden sm:block h-px w-28 bg-gradient-to-r from-transparent via-primary/60 to-primary" />
            <p className="text-lg sm:text-xl md:text-2xl text-background/85 font-medium tracking-wide max-w-lg leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="hidden sm:block h-px w-28 bg-gradient-to-l from-transparent via-primary/60 to-primary" />
          </div>

          {/* Premium CTA Buttons with Golden Effects */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-5 mb-20 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Primary CTA - Golden Shimmer */}
            <Link to="/pricing" className="w-full sm:w-auto group">
              <Button
                size="lg"
                className="relative w-full overflow-hidden bg-primary hover:bg-primary text-primary-foreground font-bold text-base sm:text-lg px-10 py-7 h-auto rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-golden-shimmer"
              >
                {/* Button shine sweep */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-background/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Calculator className="h-5 w-5 sm:h-6 sm:w-6 mr-3 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">{t('hero.cta.pricing')}</span>
              </Button>
            </Link>
            
            {/* Secondary CTA - Glass Effect */}
            <Link to="/portfolio" className="w-full sm:w-auto group">
              <Button
                size="lg"
                variant="outline"
                className="relative w-full overflow-hidden border-2 border-background/40 bg-background/10 text-background hover:bg-background hover:text-foreground font-bold text-base sm:text-lg px-10 py-7 h-auto rounded-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:border-background"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <FolderOpen className="h-5 w-5 sm:h-6 sm:w-6 mr-3 group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10">{t('hero.cta.portfolio')}</span>
              </Button>
            </Link>
          </div>

          {/* Premium Stats Cards with Golden Accents */}
          <div 
            className={`grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-[800ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-background/15 via-background/5 to-transparent backdrop-blur-xl border border-background/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 overflow-hidden golden-border"
              >
                {/* Corner accent - top left */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Corner accent - bottom right */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tabular-nums drop-shadow-[0_0_20px_rgba(245,190,50,0.3)]">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-background/70 group-hover:text-background/90 text-xs sm:text-sm font-medium tracking-wider transition-colors uppercase">
                    {t(stat.labelKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade - smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      {/* Minimalist Golden Scroll Indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <button 
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
          className="flex flex-col items-center gap-4 group cursor-pointer"
          aria-label={t('hero.scroll')}
        >
          <span className="text-primary/80 text-xs font-semibold tracking-[0.25em] uppercase group-hover:text-primary transition-colors">
            {t('hero.scroll')}
          </span>
          <div className="relative flex flex-col items-center">
            <div className="w-6 h-10 rounded-full border border-primary/40 group-hover:border-primary/70 transition-colors flex justify-center">
              <div className="w-1 h-2.5 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
            <ChevronDown className="h-4 w-4 text-primary/50 group-hover:text-primary animate-bounce transition-colors mt-2" style={{ animationDelay: '0.15s' }} />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
