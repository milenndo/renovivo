import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

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
            <div className="space-y-8">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? '' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-64 lg:h-auto min-h-[300px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
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
