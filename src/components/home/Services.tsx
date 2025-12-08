import { Link } from "react-router-dom";
import { ArrowRight, Square, Sparkles, Hexagon, Mountain, Home, Bath, ChefHat, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import images
import microcementImg from "@/assets/images/services/microcement.jpg";
import terrazzoImg from "@/assets/images/services/terrazzo.jpg";
import flakeFloorImg from "@/assets/images/services/flake-floor.jpg";
import stoneCarpetImg from "@/assets/images/services/stone-carpet.jpg";
import fullRenovationImg from "@/assets/images/services/full-renovation.jpg";
import bathroomImg from "@/assets/images/services/bathroom.jpg";
import kitchenImg from "@/assets/images/services/kitchen.jpg";

// Иновативни услуги - "Син океан" - уникални решения на пазара
const innovativeServices = [
  {
    id: "microcement",
    icon: Square,
    title: "Микроцимент",
    description: "Безшевно покритие за стени и подове - минималистичен дизайн с характер и автентичност.",
    image: microcementImg,
    isInnovative: true,
  },
  {
    id: "terrazzo",
    icon: Sparkles,
    title: "Terrazzo",
    description: "Висококачествен циментов под с модерен террацо дизайн - естествени камъни в безкрайни комбинации.",
    image: terrazzoImg,
    isInnovative: true,
  },
  {
    id: "flake-floor",
    icon: Hexagon,
    title: "Flake Floor",
    description: "Декоративни епоксидни подове с флейки - висока устойчивост за гаражи и търговски обекти.",
    image: flakeFloorImg,
    isInnovative: true,
  },
  {
    id: "stone-carpet",
    icon: Mountain,
    title: "Каменен килим",
    description: "Декоративно покритие с естествени камъчета - перфектно за тераси и външни пространства.",
    image: stoneCarpetImg,
    isInnovative: true,
  },
];

// Традиционни ремонтни услуги
const traditionalServices = [
  {
    id: "full-renovation",
    icon: Home,
    title: "Цялостен ремонт",
    description: "Пълна трансформация на вашия дом от проект до реализация с висококачествени материали.",
    image: fullRenovationImg,
    isInnovative: false,
  },
  {
    id: "bathroom",
    icon: Bath,
    title: "Ремонт на баня",
    description: "Модерни бани с внимание към всеки детайл - от плочки до сантехника.",
    image: bathroomImg,
    isInnovative: false,
  },
  {
    id: "kitchen",
    icon: ChefHat,
    title: "Ремонт на кухня",
    description: "Функционални и стилни кухни, създадени по ваш вкус и нужди.",
    image: kitchenImg,
    isInnovative: false,
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Innovative Services Section - Blue Ocean */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Sparkle className="h-4 w-4" />
              <span className="font-medium text-sm uppercase tracking-wider">Иновативни решения</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Специализирани декоративни покрития
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Уникални решения за вашия дом, които съчетават естетика, издръжливост и иновации. 
              Технологии от ново поколение за неповторим интериор и екстериор.
            </p>
          </div>

          {/* Innovative Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovativeServices.map((service, index) => (
              <Card
                key={service.id}
                className="group overflow-hidden border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-background to-primary/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    <Sparkle className="h-3 w-3 mr-1" />
                    Иновация
                  </Badge>
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                      <service.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
                  >
                    Научете повече
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Traditional Services Section */}
        <div>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Ремонтни услуги</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Професионални ремонти
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Пълен спектър от ремонтни услуги с гаранция за качество и спазване на сроковете.
            </p>
          </div>

          {/* Traditional Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {traditionalServices.map((service, index) => (
              <Card
                key={service.id}
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
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
                  >
                    Научете повече
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
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
