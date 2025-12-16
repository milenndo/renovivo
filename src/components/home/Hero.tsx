import { useState } from "react";
import { Bot, Calculator, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background with video and dark overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient while video loads */}
        <div
          className={`absolute inset-0 bg-foreground transition-opacity duration-700 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? "opacity-40" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-background.webm" type="video/webm" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      {/* Centered Content */}
      <div className="container-custom relative z-10 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium tracking-wide">
              Цялостни ремонти в София и района
            </span>
          </div>

          {/* Large Uppercase H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background uppercase tracking-tight leading-[1.1] mb-6">
            Ремонти без изненади
            <span className="block text-primary mt-2">От проект до ключ</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-background/70 mb-12 leading-relaxed max-w-2xl mx-auto">
            Вашият дом заслужава безкомпромисно качество. Цялостни решения за
            ремонт и довършителни дейности с гаранция.
          </p>

          {/* Three Buttons in a Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-6 py-6 h-auto"
              >
                <Bot className="h-5 w-5 mr-2" />
                AI консултация за ремонт
              </Button>
            </Link>

            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 bg-transparent text-primary hover:bg-primary/10 font-semibold text-base px-6 py-6 h-auto"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Цени и ориентировъчни оферти
              </Button>
            </Link>

            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-background hover:bg-background/10 font-semibold text-base px-6 py-6 h-auto"
              >
                <FolderOpen className="h-5 w-5 mr-2" />
                Реализирани проекти
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
