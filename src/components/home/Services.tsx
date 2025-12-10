import { Link } from "react-router-dom";
import { Home, Paintbrush, Lightbulb, PenTool, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const mainServices = [
  {
    id: "full-renovation",
    path: "/services/full-renovation",
    icon: Home,
    title: "Цялостен Ремонт",
    description: "Пълна трансформация на жилища - от проект до реализация с фиксиран бюджет.",
  },
  {
    id: "finishing-works",
    path: "/services/shpaklovka",
    icon: Paintbrush,
    title: "Довършителни Работи",
    description: "Шпакловка, боядисване, плочки и настилки с внимание към всеки детайл.",
  },
  {
    id: "installations",
    path: "/services/electrical",
    icon: PenTool,
    title: "Инсталации",
    description: "Електро, ВиК, сухо строителство и окачени тавани от сертифицирани майстори.",
  },
  {
    id: "innovative-solutions",
    path: "/innovative-coatings",
    icon: Lightbulb,
    title: "Иновативни Покрития",
    description: "Микроцимент, Terrazzo, Flake Floor, каменен килим - модерни решения.",
  },
  {
    id: "interior-design",
    path: "/services/interior-design",
    icon: Palette,
    title: "Интериорен Дизайн",
    description: "Цялостна концепция за вашия дом с 3D визуализация.",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Услуги</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Какво можем да направим за вас
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Изберете услугата, която отговаря на вашите нужди.
          </p>
        </div>

        {/* Services Grid - 2 on mobile, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {mainServices.map((service, index) => (
            <Link
              key={service.id}
              to={service.path}
              className="block group"
            >
              <Card
                className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 md:p-6 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Hover Arrow Indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-primary mx-auto" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Secondary Button */}
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" size="lg" className="font-semibold">
              Разгледайте всички услуги
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;