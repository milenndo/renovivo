import { Link } from "react-router-dom";
import { Home, Paintbrush, Lightbulb, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const mainServices = [
  {
    id: "full-renovation",
    icon: Home,
    title: "Цялостен Ремонт",
    description: "Пълна трансформация на стари жилища. Къртене, реконструкция и нови инсталации.",
  },
  {
    id: "finishing-works",
    icon: Paintbrush,
    title: "Довършителни Работи",
    description: "Решения за ново строителство (БДС). Шпакловка, настилки и боядисване до съвършенство.",
  },
  {
    id: "innovative-solutions",
    icon: Lightbulb,
    title: "Иновативни Решения",
    description: "Смарт инсталации, енергийна ефективност, шумоизолация и модерни материали.",
  },
  {
    id: "interior-design",
    icon: PenTool,
    title: "Интериор & Дизайн",
    description: "Окачени тавани, декоративни мазилки, осветление и внимание към детайла.",
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

        {/* Services Grid - 2x2 on mobile, 4 in a row on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {mainServices.map((service, index) => (
            <Card
              key={service.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-5 md:p-6 text-center">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Title & Description */}
                <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
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
