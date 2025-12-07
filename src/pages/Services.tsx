import { Helmet } from "react-helmet-async";
import { Phone, Home, Bath, ChefHat, Paintbrush, Layers, Wrench, Zap, Droplets } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Цялостен ремонт",
    description: "Пълна трансформация на вашия дом от проект до реализация. Включва всички видове строително-ремонтни дейности, координация на различни специалисти и цялостен контрол на качеството.",
    features: ["Проектиране", "Демонтаж", "Изграждане", "Довършителни работи", "Почистване"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Bath,
    title: "Ремонт на баня",
    description: "Модерни бани с внимание към всеки детайл. Предлагаме цялостен ремонт - от подмяна на тръби до полагане на плочки и монтаж на санитарно оборудване.",
    features: ["Хидроизолация", "Полагане на плочки", "Монтаж на сантехника", "Вентилация", "LED осветление"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: ChefHat,
    title: "Ремонт на кухня",
    description: "Функционални и стилни кухни, създадени по вашите изисквания. Монтаж на кухненски мебели, плотове, електроуреди и всички инсталации.",
    features: ["Планиране на пространство", "Монтаж на мебели", "Електро инсталация", "ВиК инсталация", "Облицоване"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Paintbrush,
    title: "Боядисване",
    description: "Професионално боядисване на стени, тавани и дървени повърхности. Използваме висококачествени бои за дълготраен и красив резултат.",
    features: ["Подготовка на повърхности", "Грундиране", "Боядисване", "Декоративни техники", "Защитни покрития"],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Layers,
    title: "Подови настилки",
    description: "Монтаж на всички видове подови покрития - ламинат, паркет, теракота, мозайка. Включително изравняване и подготовка на основата.",
    features: ["Ламинат", "Паркет", "Теракота", "Винил", "Изравняване"],
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Zap,
    title: "Електро инсталации",
    description: "Изграждане и ремонт на електрически инсталации от сертифицирани електротехници. Монтаж на осветление, контакти и електротабла.",
    features: ["Окабеляване", "Контакти и ключове", "Осветление", "Електротабла", "Сертификати"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Droplets,
    title: "ВиК инсталации",
    description: "Водопроводни и канализационни инсталации. Монтаж на батерии, мивки, тоалетни, бойлери и всичко свързано с водоснабдяването.",
    features: ["Тръбни инсталации", "Сантехника", "Бойлери", "Отопление", "Аварийни ремонти"],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Wrench,
    title: "Малки ремонти",
    description: "Бързи и ефективни решения за дребни ремонти. Монтаж на врати, мебели, рафтове, карнизи и други битови задачи.",
    features: ["Монтаж на врати", "Сглобяване на мебели", "Монтаж на аксесоари", "Дребни поправки", "Профилактика"],
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Услуги | Renovivo - Професионални ремонтни услуги в София</title>
        <meta 
          name="description" 
          content="Пълен спектър ремонтни услуги - цялостен ремонт, бани, кухни, боядисване, подови настилки, електро и ВиК. Качество и гаранция." 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="container-custom relative z-10">
            <div className="max-w-2xl">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Нашите услуги</span>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-3 mb-6">
                Професионални ремонтни услуги
              </h1>
              <p className="text-background/80 text-lg">
                Предлагаме пълен спектър от ремонтни услуги с гаранция за качество и спазване на сроковете.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="overflow-hidden border-0 shadow-lg"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                          <service.icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <span 
                            key={feature}
                            className="px-3 py-1 bg-secondary text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <a href="tel:+359888123456">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-fit">
                          <Phone className="h-4 w-4 mr-2" />
                          Поискайте оферта
                        </Button>
                      </a>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Имате въпроси?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Свържете се с нас за безплатна консултация и индивидуална оферта за вашия проект.
            </p>
            <a href="tel:+359888123456">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                +359 888 123 456
              </Button>
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServicesPage;
