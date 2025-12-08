import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with video overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-2xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium">Професионални ремонтни услуги</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
            Трансформираме 
            <span className="text-primary"> вашето пространство</span> 
            <br />в мечтан дом
          </h1>

          {/* Description */}
          <p className="text-lg text-background/80 mb-8 leading-relaxed max-w-xl">
            С над 10 години опит и внимание към всеки детайл, ние превръщаме 
            вашите идеи в реалност. Качество, прецизност и професионализъм.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="tel:+359888123456">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base">
                <Phone className="h-5 w-5 mr-2" />
                Обадете се сега
              </Button>
            </a>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-background/30 text-primary hover:bg-background/10 font-semibold text-base">
                Вижте нашите проекти
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-background/20">
            <div>
              <span className="text-3xl md:text-4xl font-bold text-primary">10+</span>
              <p className="text-background/70 text-sm mt-1">Години опит</p>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-bold text-primary">500+</span>
              <p className="text-background/70 text-sm mt-1">Завършени проекти</p>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-bold text-primary">100%</span>
              <p className="text-background/70 text-sm mt-1">Доволни клиенти</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
