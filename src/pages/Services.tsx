import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Home, Bath, ChefHat, Paintbrush, Layers, Wrench, Sparkles, Timer, Sofa, Frame, DoorOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PriceTable from "@/components/PriceTable";
import VisualBreadcrumb from "@/components/VisualBreadcrumb";

// Service categories restructured per user specifications
const serviceCategories = [
  {
    id: "finishing-works",
    title: "Цялостни довършителни работи",
    description: "Ново строителство - готови към обитаване",
    icon: Paintbrush,
    items: [
      { name: "Довършителни работи", path: "/services/finishing-works", description: "Пълен цикъл от грубо строителство до завършен дом" },
      { name: "Сухо строителство", path: "/services/drywall-construction", description: "Гипсокартон, окачени тавани, преградни стени" },
      { name: "Мебели по поръчка", path: "/services/custom-furniture", description: "Изработка по индивидуални размери и специфики" },
      { name: "Смяна на дограма", path: "/services/windows-doors", description: "Демонтаж и монтаж на прозорци и врати" },
      { name: "Монтаж на врати", path: "/services/doors-installation", description: "Интериорни, плъзгащи и входни врати" },
    ]
  },
  {
    id: "full-renovation",
    title: "Основен ремонт",
    description: "Пълна реновация на жилища \"Старо строителство\"",
    icon: Home,
    items: [
      { name: "Апартамент (ЕПК, панел, тухла)", path: "/services/apartment-renovation", description: "Специализиран подход според типа конструкция" },
      { name: "Къща", path: "/services/house-renovation", description: "Цялостна реновация на еднофамилни къщи" },
    ]
  },
  {
    id: "partial-renovations",
    title: "Частични ремонти",
    description: "Целеви решения за отделни помещения и зони",
    icon: Wrench,
    items: [
      { name: "Ремонт на баня", path: "/services/bathroom", description: "Модернизиране на санитарни помещения" },
      { name: "Ремонт на кухня", path: "/services/kitchen", description: "Функционални и стилни кухненски пространства" },
      { name: "Ремонт на всекидневна", path: "/services/living-room", description: "Трансформация на жилищни зони" },
      { name: "Бърз освежителен ремонт", path: "/services/quick-refresh", description: "До 1 седмица - боядисване, настилки, малки корекции" },
    ]
  },
  {
    id: "innovation",
    title: "Специални иновативни решения",
    description: "Висок клас финишни покрития и умни технологии",
    icon: Sparkles,
    items: [
      { name: "Микроцимент", path: "/services/microcement", description: "Безшевно покритие с минималистичен дизайн" },
      { name: "Terrazzo", path: "/services/terrazzo", description: "Класически мозаечни подове с модерен облик" },
      { name: "Flake Floor", path: "/services/flake-floor", description: "Декоративна и устойчива настилка" },
      { name: "Каменен килим", path: "/services/stone-carpet", description: "За външни зони и басейни" },
      { name: "Смарт инсталации 2025", path: "/services/smart-installations", description: "Умен дом с Matter протокол и автоматизация" },
    ]
  },
];

const ServicesPage = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ремонтни услуги",
    "description": "Професионални ремонтни услуги в София",
    "itemListElement": serviceCategories.flatMap((category, catIndex) =>
      category.items.map((item, itemIndex) => ({
        "@type": "ListItem",
        "position": catIndex * 10 + itemIndex + 1,
        "item": {
          "@type": "Service",
          "name": item.name,
          "description": item.description,
          "url": `https://renovivo.bg${item.path}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Renovivo"
          },
          "areaServed": {
            "@type": "City",
            "name": "София"
          }
        }
      }))
    )
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Начало", "item": "https://renovivo.bg" },
      { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://renovivo.bg/services" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ремонтни услуги София | Renovivo - Цялостен ремонт, бани, кухни, иновативни покрития</title>
        <meta 
          name="description" 
          content="Професионални ремонтни услуги в София - цялостен ремонт на апартаменти, частични ремонти, довършителни работи, микроцимент, terrazzo, flake floor. Гаранция за качество!" 
        />
        <meta name="keywords" content="ремонтни услуги София, цялостен ремонт апартамент, ремонт баня, ремонт кухня, микроцимент, terrazzo, flake floor, смарт дом" />
        <link rel="canonical" href="https://renovivo.bg/services" />
        <meta property="og:title" content="Ремонтни услуги София | Renovivo" />
        <meta property="og:description" content="Цялостен ремонт, частични ремонти, иновативни покрития - превърнете вашия дом в идеално място за живот." />
        <meta property="og:url" content="https://renovivo.bg/services" />
        <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <VisualBreadcrumb 
              items={[{ label: "Услуги" }]} 
              className="mb-6 [&_a]:text-background/70 [&_a:hover]:text-primary [&_span[role=link]]:text-background [&_svg]:text-background/50"
            />
            <div className="max-w-2xl">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Каталог услуги</span>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-3 mb-6">
                Всички услуги
              </h1>
              <p className="text-background/80 text-lg">
                Разгледайте пълния спектър от ремонтни решения - от довършителни работи до специализирани иновативни покрития.
              </p>
            </div>
          </div>
        </section>

        {/* Services Directory */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12">
              {serviceCategories.map((category) => (
                <div key={category.id} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 border-b border-border pb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  {/* Category Items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="group"
                      >
                        <Card className="h-full border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                          <CardContent className="p-5">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">
                                  {item.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
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
            <a href="tel:+359893712919">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                +359 89 371 29 19
              </Button>
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServicesPage;
