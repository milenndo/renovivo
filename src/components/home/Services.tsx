import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Paintbrush,
  Droplets,
  Hammer,
  Layers,
  Grid3X3,
  Zap,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Service images
import fullRenovationImg from "@/assets/images/services/full-renovation.jpg";
import bathroomImg from "@/assets/images/services/bathroom.jpg";
import kitchenImg from "@/assets/images/services/kitchen.jpg";
import microcementImg from "@/assets/images/services/microcement.jpg";
import terrazzoImg from "@/assets/images/services/terrazzo.jpg";
import flakeFloorImg from "@/assets/images/services/flake-floor.jpg";
import stoneCarpetImg from "@/assets/images/services/stone-carpet.jpg";
import karteneImg from "@/assets/images/services/kartene.png";
import paintingImg from "@/assets/images/services/painting.jpg";
import flooringImg from "@/assets/images/services/flooring.jpg";
import electricalImg from "@/assets/images/services/electrical.jpg";
import plumbingImg from "@/assets/images/services/plumbing.jpg";

const Services = () => {
  const { t } = useLanguage();

  const categories = [
    {
      id: "full-renovations",
      titleKey: "services.category.full",
      bgClass: "bg-background",
      services: [
        {
          id: "full-renovation",
          path: "/services/full-renovation",
          icon: Home,
          titleKey: "service.fullRenovation.title",
          descKey: "service.fullRenovation.desc",
          image: fullRenovationImg,
        },
        {
          id: "bathroom",
          path: "/services/bathroom",
          icon: Droplets,
          titleKey: "service.bathroom.title",
          descKey: "service.bathroom.desc",
          image: bathroomImg,
        },
        {
          id: "kitchen",
          path: "/services/kitchen",
          icon: Grid3X3,
          titleKey: "service.kitchen.title",
          descKey: "service.kitchen.desc",
          image: kitchenImg,
        },
      ],
    },
    {
      id: "specialized-coatings",
      titleKey: "services.category.coatings",
      bgClass: "bg-muted/30",
      services: [
        {
          id: "microcement",
          path: "/services/microcement",
          icon: Layers,
          titleKey: "service.microcement.title",
          descKey: "service.microcement.desc",
          image: microcementImg,
        },
        {
          id: "terrazzo",
          path: "/services/terrazzo",
          icon: Layers,
          titleKey: "service.terrazzo.title",
          descKey: "service.terrazzo.desc",
          image: terrazzoImg,
        },
        {
          id: "flake-floor",
          path: "/services/flake-floor",
          icon: Layers,
          titleKey: "service.flakeFloor.title",
          descKey: "service.flakeFloor.desc",
          image: flakeFloorImg,
        },
        {
          id: "stone-carpet",
          path: "/services/stone-carpet",
          icon: Layers,
          titleKey: "service.stoneCarpet.title",
          descKey: "service.stoneCarpet.desc",
          image: stoneCarpetImg,
        },
      ],
    },
    {
      id: "preparation-finishing",
      titleKey: "services.category.finishing",
      bgClass: "bg-secondary/20",
      services: [
        {
          id: "demolition",
          path: "/services/demolition",
          icon: Hammer,
          titleKey: "service.demolition.title",
          descKey: "service.demolition.desc",
          image: karteneImg,
        },
        {
          id: "painting",
          path: "/services/shpaklovka",
          icon: Paintbrush,
          titleKey: "service.painting.title",
          descKey: "service.painting.desc",
          image: paintingImg,
        },
        {
          id: "flooring",
          path: "/services/flooring",
          icon: Grid3X3,
          titleKey: "service.flooring.title",
          descKey: "service.flooring.desc",
          image: flooringImg,
        },
        {
          id: "electrical",
          path: "/services/electrical",
          icon: Zap,
          titleKey: "service.electrical.title",
          descKey: "service.electrical.desc",
          image: electricalImg,
        },
        {
          id: "plumbing",
          path: "/services/plumbing",
          icon: Wrench,
          titleKey: "service.plumbing.title",
          descKey: "service.plumbing.desc",
          image: plumbingImg,
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-foreground font-semibold text-sm uppercase tracking-wider">
            {t('services.label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Main Layout - Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Sidebar - Category Navigation */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="sticky top-24 space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "w-full text-left px-5 py-4 rounded-xl transition-all duration-300 group",
                    activeCategory === category.id
                      ? "bg-foreground text-background shadow-lg"
                      : "bg-muted/50 hover:bg-muted text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "block font-semibold text-base transition-colors",
                      activeCategory === category.id
                        ? "text-primary"
                        : "group-hover:text-primary"
                    )}
                  >
                    {t(category.titleKey)}
                  </span>
                  <span
                    className={cn(
                      "text-sm mt-1 block",
                      activeCategory === category.id
                        ? "text-background/70"
                        : "text-muted-foreground"
                    )}
                  >
                    {category.services.length} {t('services.count')}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Panel */}
          <div className={cn("flex-1 rounded-2xl p-6 md:p-8", currentCategory.bgClass)}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              {t(currentCategory.titleKey)}
            </h3>

            {/* Services Grid - Asymmetric Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {currentCategory.services.map((service, index) => (
                <Link
                  key={service.id}
                  to={service.path}
                  className={cn(
                    "group relative overflow-hidden rounded-xl bg-card shadow-sm hover:shadow-xl transition-all duration-300",
                    // Make first item larger on larger screens
                    index === 0 && currentCategory.services.length > 2 && "md:col-span-2"
                  )}
                >
                  <div
                    className={cn(
                      "flex",
                      index === 0 && currentCategory.services.length > 2
                        ? "flex-col md:flex-row"
                        : "flex-col"
                    )}
                  >
                    {/* Image */}
                    <div
                      className={cn(
                        "relative overflow-hidden",
                        index === 0 && currentCategory.services.length > 2
                          ? "h-48 md:h-auto md:w-1/2"
                          : "h-40"
                      )}
                      style={{ aspectRatio: index === 0 && currentCategory.services.length > 2 ? '3/2' : '16/9' }}
                    >
                      <img
                        src={service.image}
                        alt={t(service.titleKey)}
                        width={600}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '3/2' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div
                      className={cn(
                        "p-5",
                        index === 0 && currentCategory.services.length > 2
                          ? "md:w-1/2 md:flex md:flex-col md:justify-center"
                          : ""
                      )}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <service.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {t(service.titleKey)}
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(service.descKey)}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                        <span>{t('services.learnMore')}</span>
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg" className="font-semibold">
              {t('services.viewAll')}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
