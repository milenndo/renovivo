import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Home, Paintbrush, Wrench, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VisualBreadcrumb from "@/components/VisualBreadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesPage = () => {
  const { t, language } = useLanguage();

  const serviceCategories = [
    {
      id: "finishing-works",
      title: t('services.cat.finishing'),
      description: t('services.cat.finishing.desc'),
      icon: Paintbrush,
      items: [
        { name: t('services.item.finishingWorks'), path: "/services/finishing-works", description: t('services.item.finishingWorks.desc') },
        { name: t('services.item.drywall'), path: "/services/drywall-construction", description: t('services.item.drywall.desc') },
        { name: t('services.item.furniture'), path: "/services/custom-furniture", description: t('services.item.furniture.desc') },
        { name: t('services.item.windows'), path: "/services/windows-doors", description: t('services.item.windows.desc') },
        { name: t('services.item.doorsInstall'), path: "/services/doors-installation", description: t('services.item.doorsInstall.desc') },
      ]
    },
    {
      id: "full-renovation",
      title: t('services.cat.renovation'),
      description: t('services.cat.renovation.desc'),
      icon: Home,
      items: [
        { name: t('services.item.apartment'), path: "/services/apartment-renovation", description: t('services.item.apartment.desc') },
        { name: t('services.item.house'), path: "/services/house-renovation", description: t('services.item.house.desc') },
      ]
    },
    {
      id: "partial-renovations",
      title: t('services.cat.partial'),
      description: t('services.cat.partial.desc'),
      icon: Wrench,
      items: [
        { name: t('services.item.bathroom'), path: "/services/bathroom", description: t('services.item.bathroom.desc') },
        { name: t('services.item.kitchen'), path: "/services/kitchen", description: t('services.item.kitchen.desc') },
        { name: t('services.item.livingRoom'), path: "/services/living-room", description: t('services.item.livingRoom.desc') },
        { name: t('services.item.quickRefresh'), path: "/services/quick-refresh", description: t('services.item.quickRefresh.desc') },
      ]
    },
    {
      id: "innovation",
      title: t('services.cat.innovation'),
      description: t('services.cat.innovation.desc'),
      icon: Sparkles,
      items: [
        { name: t('services.item.microcement'), path: "/services/microcement", description: t('services.item.microcement.desc') },
        { name: t('services.item.terrazzo'), path: "/services/terrazzo", description: t('services.item.terrazzo.desc') },
        { name: t('services.item.flakeFloor'), path: "/services/flake-floor", description: t('services.item.flakeFloor.desc') },
        { name: t('services.item.stoneCarpet'), path: "/services/stone-carpet", description: t('services.item.stoneCarpet.desc') },
        { name: t('services.item.smart'), path: "/services/smart-installations", description: t('services.item.smart.desc') },
      ]
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": t('breadcrumb.home'), "item": "https://renovivo.bg" },
      { "@type": "ListItem", "position": 2, "name": t('services.page.title'), "item": "https://renovivo.bg/services" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{language === 'bg' ? 'Ремонтни услуги София | Renovivo' : 'Renovation Services Sofia | Renovivo'}</title>
        <meta 
          name="description" 
          content={language === 'bg' 
            ? "Професионални ремонтни услуги в София - цялостен ремонт на апартаменти, частични ремонти, довършителни работи, микроцимент, terrazzo, flake floor."
            : "Professional renovation services in Sofia - complete apartment renovations, partial renovations, finishing works, microcement, terrazzo, flake floor."
          } 
        />
        <link rel="canonical" href="https://renovivo.bg/services" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="container-custom relative z-10">
            <VisualBreadcrumb 
              items={[{ label: t('services.page.title') }]} 
              className="mb-6 [&_a]:text-background/70 [&_a:hover]:text-primary [&_span[role=link]]:text-background [&_svg]:text-background/50"
            />
            <div className="max-w-2xl">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">{t('services.page.catalog')}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-3 mb-6">
                {t('services.page.allServices')}
              </h1>
              <p className="text-background/80 text-lg">
                {t('services.page.description')}
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
                  <div className="flex items-center gap-4 border-b border-border pb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.items.map((item) => (
                      <Link key={item.name} to={item.path} className="group">
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
              {t('services.page.cta.title')}
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              {t('services.page.cta.description')}
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
