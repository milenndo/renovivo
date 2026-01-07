import { useState, useEffect } from "react";
import { Bot, Calculator, FolderOpen, CheckCircle2, Award, Shield } from "lucide-react";
import heroPoster from "@/assets/images/hero-poster.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useChat } from "@/contexts/ChatContext";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { openChat } = useChat();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background with video and dark overlay */}
      <div className="absolute inset-0 z-0">
        {/* LCP Poster image - Critical for above-the-fold, explicit dimensions for CLS */}
        <img
          src={heroPoster}
          alt="Renovivo - професионални ремонти в София"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="sync"
          loading="eager"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded && !prefersReducedMotion ? "opacity-0" : "opacity-40"
          }`}
          style={{ aspectRatio: '16/9' }}
        />
        {/* Video - only render if user doesn't prefer reduced motion */}
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
            aria-label="Видео на луксозна трансформация на пентхаус интериор"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              videoLoaded ? "opacity-40" : "opacity-0"
            }`}
            style={{ aspectRatio: '16/9' }}
          >
            <source src="/videos/hero-background.webm?v=2" type="video/webm" />
            <track kind="captions" src="" label="Без субтитри" default />
          </video>
        )}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Centered Content */}
      <div className="container-custom relative z-10 py-20 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Badge - Psychological Hook */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-primary/30">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium tracking-wide">
              Цялостни ремонти в София и района
            </span>
          </div>

          {/* NEW: Transformation Headline - PSYCHOLOGICAL POWER */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-background uppercase tracking-tight leading-[1.1] mb-6 sm:mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            <span className="text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">РЕМОНТ БЕЗ ХАОС</span><br />
            <span className="text-background block mt-2 sm:mt-3">САМО СПОКОЙСТВИЕ</span>
          </h1>

          {/* NEW: Power Subheading - Addresses Main Fear */}
          <p className="text-base sm:text-lg md:text-xl text-background mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] px-4">
            Без нерви, без скрити такси. Само резултати с пълна гаранция.
          </p>

          {/* CTA Buttons - Mobile optimized */}
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-2">
            <Button
              size="lg"
              onClick={openChat}
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-7 h-auto rounded-lg shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              <Bot className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
              🧠 Renovivo AI
            </Button>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-background/60 bg-background/20 text-background hover:bg-background/40 font-bold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-7 h-auto rounded-lg backdrop-blur-md transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-lg hover:shadow-xl hover:border-background"
                >
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                  Вижте цени и оферти
                </Button>
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-background/60 bg-background/20 text-background hover:bg-background/40 font-bold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-7 h-auto rounded-lg backdrop-blur-md transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-lg hover:shadow-xl hover:border-background"
                >
                  <FolderOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                  Преди/След проекти
                </Button>
              </Link>
            </div>
          </div>

          {/* NEW: Trust Badges - Social Proof Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-8 bg-background/5 rounded-xl backdrop-blur-sm border border-background/10">
            {/* Badge 1 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold text-primary">127</span>
              </div>
              <p className="text-background/70 text-sm font-medium">Завършени проекти</p>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold text-primary">94%</span>
              </div>
              <p className="text-background/70 text-sm font-medium">Препоръчват нас</p>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold text-primary">5 години</span>
              </div>
              <p className="text-background/70 text-sm font-medium">Гаранция</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="text-primary/60 text-xs font-medium mb-2">Скролирайте за още</div>
        <svg className="w-6 h-6 text-primary/60 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
