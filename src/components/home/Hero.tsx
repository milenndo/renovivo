import { useState, useEffect } from "react";
import { Bot, Calculator, FolderOpen, CheckCircle2, Award, Shield, ArrowRight, Sparkles } from "lucide-react";
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
        {/* Premium dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Centered Content */}
      <div className="container-custom relative z-10 py-20 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/30 to-primary/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-primary/40 shadow-lg shadow-primary/10">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Цялостни ремонти в София и района
            </span>
          </div>

          {/* Premium Headline with elegant typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight leading-[1.05] mb-6 sm:mb-8">
            <span className="text-primary drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] block">
              РЕМОНТ БЕЗ ХАОС
            </span>
            <span className="text-background drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] block mt-2 sm:mt-4">
              САМО СПОКОЙСТВИЕ
            </span>
          </h1>

          {/* Elegant subheading with separator */}
          <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-primary/60" />
            <p className="text-base sm:text-lg md:text-xl text-background/90 font-medium tracking-wide">
              Без нерви. Без скрити такси. Само резултати.
            </p>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-primary/60" />
          </div>

          {/* Premium CTA Section */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 mb-12 sm:mb-16 px-2">
            {/* Primary CTA - Maximum Impact */}
            <Button
              size="lg"
              onClick={openChat}
              className="group relative w-full sm:w-auto bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 h-auto rounded-xl shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 active:scale-95 overflow-hidden"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center gap-3">
                <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
                🧠 Говорете с Renovivo AI
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="group w-full border-2 border-primary/50 bg-foreground/30 text-background hover:bg-primary hover:text-primary-foreground hover:border-primary font-bold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl backdrop-blur-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-xl"
                >
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
                  Вижте цени и оферти
                </Button>
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="group w-full border-2 border-background/40 bg-foreground/20 text-background hover:bg-background hover:text-foreground hover:border-background font-bold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl backdrop-blur-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-xl"
                >
                  <FolderOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                  Преди/След проекти
                </Button>
              </Link>
            </div>
          </div>

          {/* Premium Trust Badges */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 px-2 sm:px-4 py-6 sm:py-8 bg-gradient-to-r from-background/5 via-background/10 to-background/5 rounded-2xl backdrop-blur-md border border-background/20 shadow-2xl">
            {/* Badge 1 */}
            <div className="flex flex-col items-center group">
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">127</span>
              </div>
              <p className="text-background/80 text-xs sm:text-sm font-medium">Завършени проекти</p>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center group">
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">94%</span>
              </div>
              <p className="text-background/80 text-xs sm:text-sm font-medium">Препоръчват нас</p>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center group">
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">5 год.</span>
              </div>
              <p className="text-background/80 text-xs sm:text-sm font-medium">Гаранция</p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-10 pointer-events-none" />
      
      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer group">
          <span className="text-primary text-xs font-medium tracking-widest uppercase">Скролирайте</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;