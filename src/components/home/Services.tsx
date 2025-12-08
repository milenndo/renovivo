import { Link } from "react-router-dom";
import { ArrowRight, Home, Wrench, PenTool, Paintbrush, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// 4 основни карти услуги по заданието
const mainServices = [
  {
    id: "full-renovation",
    icon: Home,
    title: "Цялостни ремонти",
    description: "Поемаме ремонта от А до Я: планиране, координация, изпълнение и контрол. Един екип, един отговорник, един график.",
    subcategories: [
      "Цялостен ремонт на апартамент",
      "Цялостен ремонт на къща",
      "Ремонт на офис/търговски обект",
      "Ремонт на баня като част от голям проект",
    ],
  },
  {
    id: "partial-renovation",
    icon: Wrench,
    title: "Частични ремонти",
    description: "Освежаване на отделни помещения или системи. Когато не е нужен цялостен ремонт, а само конкретни подобрения.",
    subcategories: [
      "Ремонт на една стая / хол",
      "Частичен ремонт на баня или кухня",
      "Смяна на настилки и облицовки",
      "Корекции след предишен ремонт",
    ],
  },
  {
    id: "custom-projects",
    icon: PenTool,
    title: "Индивидуални проекти",
    description: "Работа по индивидуално задание или по проект от дизайнер/архитект. Специални решения за вашия уникален интериор.",
    subcategories: [
      "Работа по готов интериорен проект",
      "Консултация и адаптиране спрямо бюджет",
      "Ниши, осветление, окачени тавани",
      "Скрити инсталации",
    ],
  },
  {
    id: "finishing-works",
    icon: Paintbrush,
    title: "Довършителни дейности",
    description: "Фокус върху визуален завършек и детайл. Перфектното довършване, което прави разликата.",
    subcategories: [
      "Боядисване и шпакловка",
      "Монтаж на гипсокартон",
      "Облицовки и настилки",
      "Монтаж на врати, первази, лайсни",
    ],
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Услуги</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Какво можем да направим за вас
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Изберете услугата, която отговаря на вашите нужди. Всяка категория е съобразена 
            с различни ситуации и бюджети.
          </p>
        </div>

        {/* Services Grid - 4 карти */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((service, index) => (
            <Card
              key={service.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Subcategories */}
                <ul className="space-y-2 mb-6">
                  {service.subcategories.map((sub) => (
                    <li key={sub} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Поискай оферта
                  <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="tel:+359893712919">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              Заяви оглед
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;