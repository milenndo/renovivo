import { useState, useEffect, useRef } from "react";
import { Bot, ArrowRight, ChevronDown } from "lucide-react";
import heroPoster from "@/assets/images/hero-poster.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useChat } from "@/contexts/ChatContext";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { openChat } = useChat();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!prefersReducedMotion) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  const parallaxOffset = scrollY * 0.4;
  const opacityFade = Math.max(0, 1 - scrollY / 600);

  const scrollToContent = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax video */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        {/* LCP Poster image */}
        <img
          src={heroPoster}
          alt="Renovivo - луксозни ремонти в София"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="sync"
          loading="eager"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded && !prefersReducedMotion ? "opacity-0" : "opacity-100"
          }`}
          style={{ aspectRatio: "16/9" }}
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
            aria-label="Видео на луксозна трансформация на интериор"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ aspectRatio: "16/9" }}
          >
            <source src="/videos/hero-background.webm?v=2" type="video/webm" />
            <track kind="captions" src="" label="Без субтитри" default />
          </video>
        )}
        {/* Luxe overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content with opacity fade on scroll */}
      <div
        className="container-custom relative z-10 pt-20 pb-32"
        style={{ opacity: opacityFade }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Luxe label */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in-up">
            <div className="w-12 h-px bg-primary" />
            <span className="text-label text-primary-foreground/80">
              Интериорно студио София
            </span>
          </div>

          {/* Main headline - Luxury typography */}
          <h1 className="text-display text-primary-foreground mb-8 opacity-0 animate-fade-in-up stagger-1">
            <span className="block">Пространства</span>
            <span className="block text-primary">без компромис</span>
          </h1>

          {/* Subheading */}
          <p className="text-subheading text-primary-foreground/70 max-w-xl mb-12 opacity-0 animate-fade-in-up stagger-2">
            Цялостни ремонти с внимание към всеки детайл. 
            Без стрес, без скрити такси — само резултати с пълна гаранция.
          </p>

          {/* CTA Buttons - Minimal luxury style */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16 opacity-0 animate-fade-in-up stagger-3">
            <Button
              size="lg"
              onClick={openChat}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base px-8 py-6 h-auto rounded-full shadow-luxe-lg transition-all duration-500 hover:shadow-luxe-xl hover:scale-[1.02]"
            >
              <Bot className="h-5 w-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
              AI Консултант
            </Button>
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="group border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-medium text-base px-8 py-6 h-auto rounded-full transition-all duration-500"
              >
                Разгледайте проекти
                <ArrowRight className="h-5 w-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Stats - Minimal inline style */}
          <div className="flex flex-wrap items-center gap-8 text-primary-foreground/60 opacity-0 animate-fade-in-up stagger-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-semibold text-primary">127+</span>
              <span className="text-sm">завършени<br />проекта</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div className="flex items-center gap-3">
              <span className="text-3xl font-semibold text-primary">94%</span>
              <span className="text-sm">препоръчват<br />нас</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div className="flex items-center gap-3">
              <span className="text-3xl font-semibold text-primary">5</span>
              <span className="text-sm">години<br />гаранция</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary transition-colors duration-300 opacity-0 animate-fade-in stagger-5"
        aria-label="Скролирайте надолу"
      >
        <span className="text-label">Открийте повече</span>
        <ChevronDown className="h-5 w-5 animate-float" />
      </button>
    </section>
  );
};

export default Hero;
