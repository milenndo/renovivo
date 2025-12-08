import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

const ServicesPage = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ремонтни услуги",
    "description": "Професионални ремонтни услуги в София",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "url": `https://renovivo.bg/services/${service.id}`,
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
            <div className="space-y-8">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? '' : ''}`}>
                    {/* Image */}
                    <Link 
                      to={`/services/${service.id}`}
                      className={`relative h-64 lg:h-auto min-h-[300px] block cursor-pointer overflow-hidden group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                      <div className="absolute top-4 left-4">
                        <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                          <service.icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                      </div>
                    </Link>

                    {/* Content */}
                    <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.shortDescription}</p>
                      
                      {/* Features preview */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.slice(0, 4).map((feature) => (
                          <span 
                            key={feature}
                            className="px-3 py-1 bg-secondary text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 4 && (
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            +{service.features.length - 4} още
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Link to={`/services/${service.id}`}>
                          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                            Научете повече
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                        <a href="tel:+359888123456">
                          <Button variant="outline">
                            <Phone className="h-4 w-4 mr-2" />
                            Обадете се
                          </Button>
                        </a>
                      </div>
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
