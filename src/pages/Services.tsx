import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Home, Bath, ChefHat, Paintbrush, Layers, Wrench, Zap, Droplets, Square, Sparkles, Hexagon, Mountain, Palette } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PriceTable from "@/components/PriceTable";

// Service categories with their items
const serviceCategories = [
  {
    id: "design",
    title: "Проект & Дизайн",
    description: "Цялостна концепция за вашия интериор",
    icon: Palette,
    items: [
      { name: "Интериорен дизайн", path: "/services/interior-design", description: "Концепция и визуализация" },
      { name: "3D проектиране", path: "/services/full-renovation", description: "Реалистична визуализация на проекта" },
      { name: "Консултации", path: "/contact", description: "Професионални съвети и насоки" },
    ]
  },
  {
    id: "renovation",
    title: "Ремонтни дейности",
    description: "Цялостни и частични ремонти",
    icon: Home,
    items: [
      { name: "Цялостен ремонт", path: "/services/full-renovation", description: "Пълна трансформация на жилище" },
      { name: "Ремонт на баня", path: "/services/bathroom", description: "Модерни бани с внимание към детайла" },
      { name: "Ремонт на кухня", path: "/services/kitchen", description: "Функционални и стилни кухни" },
      { name: "Малки ремонти", path: "/services/small-repairs", description: "Бързи и надеждни решения" },
    ]
  },
  {
    id: "finishing",
    title: "Довършителни работи",
    description: "Шпакловка, боядисване, настилки",
    icon: Paintbrush,
    items: [
      { name: "Боядисване", path: "/services/painting", description: "Професионално боядисване с качествени бои" },
      { name: "Подови настилки", path: "/services/flooring", description: "Ламинат, паркет, теракота" },
      { name: "Шпакловане", path: "/services/painting", description: "Гладки и перфектни стени" },
      { name: "Декоративни техники", path: "/services/painting", description: "Уникални текстури и ефекти" },
    ]
  },
  {
    id: "innovation",
    title: "Иновативни покрития",
    description: "Модерни материали за уникален интериор",
    icon: Sparkles,
    items: [
      { name: "Микроцимент", path: "/services/microcement", description: "Безшевно покритие за стени и подове" },
      { name: "Terrazzo", path: "/services/terrazzo", description: "Мозаечни подове с естествени камъни" },
      { name: "Flake Floor", path: "/services/flake-floor", description: "Декоративна настилка с цветни флейки" },
      { name: "Каменен килим", path: "/services/stone-carpet", description: "Идеално за тераси и балкони" },
    ]
  },
  {
    id: "installations",
    title: "Инсталации",
    description: "Електро, ВиК и техническо оборудване",
    icon: Zap,
    items: [
      { name: "Електрически инсталации", path: "/services/electrical", description: "Ново окабеляване и ремонт" },
      { name: "ВиК услуги", path: "/services/plumbing", description: "Водопровод и канализация" },
      { name: "Отопление", path: "/services/plumbing", description: "Отоплителни системи" },
      { name: "Смарт инсталации", path: "/services/electrical", description: "Умен дом и автоматизация" },
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
        <title>Ремонтни услуги София | Renovivo - Цялостен ремонт, бани, кухни</title>
        <meta 
          name="description" 
          content="Професионални ремонтни услуги в София - цялостен ремонт на апартаменти, ремонт на бани и кухни, боядисване, подови настилки, ВиК и електро. Гаранция за качество!" 
        />
        <meta name="keywords" content="ремонтни услуги София, ремонт апартамент, ремонт баня, ремонт кухня, боядисване, подови настилки, ВиК услуги, електро услуги, микроцимент" />
        <link rel="canonical" href="https://renovivo.bg/services" />
        <meta property="og:title" content="Ремонтни услуги София | Renovivo" />
        <meta property="og:description" content="Пълен спектър ремонтни услуги - цялостен ремонт, бани, кухни, боядисване, подови настилки." />
        <meta property="og:url" content="https://renovivo.bg/services" />
        <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="container-custom relative z-10">
            <div className="max-w-2xl">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Каталог услуги</span>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-3 mb-6">
                Всички услуги
              </h1>
              <p className="text-background/80 text-lg">
                Разгледайте пълния спектър от ремонтни и строителни услуги, които предлагаме в София и региона.
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

        {/* Pricing Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container-custom">
            <div className="text-center mb-8">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Ценоразпис</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">Ориентировъчни цени</h2>
              <p className="text-muted-foreground mt-2">Прозрачно ценообразуване за всички услуги</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <PriceTable showAll={true} title="Всички услуги" />
            </div>
          </div>
        </section>

        {/* Quick Access - Innovative Solutions */}
        <section className="py-12">
          <div className="container-custom">
            <div className="text-center mb-8">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Препоръчано</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">Иновативни покрития</h2>
              <p className="text-muted-foreground mt-2">Модерни материали за уникален интериор и екстериор</p>
            </div>
            <div className="flex justify-center">
              <Link to="/innovative-coatings">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Разгледайте иновациите
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
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