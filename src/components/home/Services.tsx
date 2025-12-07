import { Link } from "react-router-dom";
import { ArrowRight, Home, Bath, ChefHat, Paintbrush, Layers, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Цялостен ремонт",
    description: "Пълна трансформация на вашия дом от проект до реализация с висококачествени материали.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Bath,
    title: "Ремонт на баня",
    description: "Модерни бани с внимание към всеки детайл - от плочки до сантехника.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: ChefHat,
    title: "Ремонт на кухня",
    description: "Функционални и стилни кухни, създадени по ваш вкус и нужди.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Paintbrush,
    title: "Боядисване",
    description: "Професионално боядисване с качествени бои за дълготраен резултат.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Layers,
    title: "Подови настилки",
    description: "Ламинат, паркет, теракота - монтаж на всички видове подови покрития.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Wrench,
    title: "Електро и ВиК",
    description: "Електрически и водопроводни инсталации от сертифицирани специалисти.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Нашите услуги</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Професионални ремонтни услуги
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Предлагаме пълен спектър от ремонтни услуги с гаранция за качество 
            и спазване на сроковете.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Научете повече
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" variant="outline" className="font-semibold">
              Вижте всички услуги
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
