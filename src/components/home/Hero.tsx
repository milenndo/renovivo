import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useInspectionRequest } from "@/contexts/InspectionRequestContext";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { openModal } = useInspectionRequest();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with video overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient background while video loads */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 transition-opacity duration-700 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
        />

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <source src="/videos/hero-background.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-2xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium">Цялостни ремонти в София и района</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
            Ремонти без изненади.
            <br />
            <span className="text-primary">От проект до ключ.</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-background/80 mb-8 leading-relaxed max-w-xl">
            Вашият дом заслужава безкомпромисно качество. Цялостни решения за ремонт и довършителни дейности с гаранция.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={openModal}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
            >
              <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
              Заявете безплатен оглед
            </Button>
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 bg-transparent text-primary hover:bg-primary/10 font-semibold text-base"
              >
                Вижте нашите проекти
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
