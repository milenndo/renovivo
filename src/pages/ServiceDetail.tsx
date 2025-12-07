import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ArrowLeft, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getServiceById, services } from "@/data/services";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? getServiceById(id) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const currentIndex = services.findIndex((s) => s.id === id);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{service.title} | Renovivo - Ремонтни услуги</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="container-custom relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Обратно към услугите
            </Link>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-background mb-4">
                  {service.title}
                </h1>
                <p className="text-background/80 text-lg max-w-2xl">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Main Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 md:h-96 object-cover rounded-xl"
                />

                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Описание</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Какво включва</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Нашият процес</h2>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                            {step.step}
                          </div>
                          {index < service.process.length - 1 && (
                            <div className="w-0.5 flex-grow bg-border mt-2" />
                          )}
                        </div>
                        <div className="pb-6">
                          <h3 className="font-semibold mb-1">{step.title}</h3>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Галерия</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.gallery.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${service.title} ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* CTA Card */}
                <Card className="border-0 shadow-lg sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Имате нужда от тази услуга?</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Свържете се с нас за безплатна консултация и индивидуална оферта.
                    </p>
                    <a href="tel:+359888123456" className="block mb-4">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                        <Phone className="h-4 w-4 mr-2" />
                        Обадете се
                      </Button>
                    </a>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full">
                        Изпратете запитване
                      </Button>
                    </Link>

                    <div className="mt-6 pt-6 border-t">
                      <p className="text-sm text-muted-foreground mb-2">Работно време:</p>
                      <p className="font-medium text-sm">Пон - Пет: 08:00 - 18:00</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Other Services */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Други услуги</h3>
                    <div className="space-y-3">
                      {services
                        .filter((s) => s.id !== id)
                        .slice(0, 5)
                        .map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.id}`}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors"
                          >
                            <s.icon className="h-5 w-5 text-primary" />
                            <span className="text-sm">{s.title}</span>
                          </Link>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t">
              {prevService ? (
                <Link
                  to={`/services/${prevService.id}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="text-sm">{prevService.title}</span>
                </Link>
              ) : (
                <div />
              )}
              {nextService && (
                <Link
                  to={`/services/${nextService.id}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-sm">{nextService.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServiceDetail;
