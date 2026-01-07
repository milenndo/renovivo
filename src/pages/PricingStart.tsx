import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, ArrowLeft, Clock, Ruler, Paintbrush, Home, Phone } from "lucide-react";

const PricingStart = () => {
  const includedServices = [
    "Боядисване на стени и тавани",
    "Освежаване на съществуващи настилки",
    "Малки козметични ремонти",
    "Смяна на контакти и ключове",
    "Смяна на врати (без каса)",
    "Почистване след ремонт",
    "Консултация с интериорен дизайнер",
    "Гаранция 2 години",
  ];

  const notIncluded = [
    "Смяна на ВиК инсталации",
    "Смяна на електрическа инсталация",
    "Груби строителни работи",
    "Преустройства и събаряне на стени",
    "Интериорен дизайн проект",
  ];

  const idealFor = [
    "Апартаменти, които се нуждаят от освежаване",
    "Имоти преди продажба или отдаване под наем",
    "Жилища с добра основа, но остарял визуален вид",
    "Бърза трансформация без голям бюджет",
    "Единични помещения (спалня, хол, коридор)",
  ];

  return (
    <>
      <Helmet>
        <title>Renovivo Start - Частичен ремонт | Renovivo</title>
        <meta 
          name="description" 
          content="Renovivo Start - идеален за освежаване и частичен ремонт. Цени от 46-72 €/м². Боядисване, козметични ремонти, бързо изпълнение."
        />
        <link rel="canonical" href="https://renovivo.bg/pricing/start" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 bg-foreground">
          <div className="container-custom relative z-10">
            <Link 
              to="/pricing" 
              className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Обратно към ценови пакети
            </Link>
            <div className="max-w-3xl">
              <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Пакет за освежаване
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-3 mb-6">
                Renovivo Start
              </h1>
              <p className="text-background/80 text-xl mb-8">
                Частичен ремонт и освежаване на вашето жилище без мащабни интервенции. 
                Идеален избор, когато основата е добра, но визията се нуждае от обновяване.
              </p>
              <div className="flex flex-wrap gap-6 text-background/90">
                <div className="flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">46–72 €/м²</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-muted-foreground">(90–140 лв./м²)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* What's Included */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Paintbrush className="h-6 w-6 text-primary" />
                    Какво включва пакетът
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {includedServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Not Included */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <X className="h-6 w-6 text-muted-foreground" />
                    Какво НЕ включва
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {notIncluded.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    За тези услуги препоръчваме пакет <Link to="/pricing/comfort" className="text-primary hover:underline">Renovivo Comfort</Link> или <Link to="/pricing/premium" className="text-primary hover:underline">Renovivo Premium</Link>.
                  </p>
                </div>

                {/* Ideal For */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Home className="h-6 w-6 text-primary" />
                    Идеален избор за
                  </h2>
                  <div className="space-y-3">
                    {idealFor.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    Как протича процесът
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                      <div>
                        <h3 className="font-semibold mb-1">Безплатен оглед</h3>
                        <p className="text-muted-foreground">Посещаваме обекта, оценяваме състоянието и обсъждаме вашите очаквания.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                      <div>
                        <h3 className="font-semibold mb-1">Детайлна оферта</h3>
                        <p className="text-muted-foreground">Получавате точна цена с описание на всички дейности и срокове.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                      <div>
                        <h3 className="font-semibold mb-1">Изпълнение</h3>
                        <p className="text-muted-foreground">Работим бързо и ефективно. Типичен срок: 1-2 седмици за апартамент.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                      <div>
                        <h3 className="font-semibold mb-1">Предаване и гаранция</h3>
                        <p className="text-muted-foreground">Финален оглед, почистване и 2-годишна гаранция на всички дейности.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sticky CTA */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Renovivo Start</h3>
                      <p className="text-muted-foreground mb-4">Частичен ремонт / освежаване</p>
                      <div className="text-3xl font-bold text-primary mb-1">46–72 €/м²</div>
                      <div className="text-lg text-muted-foreground mb-6">(90–140 лв./м²)</div>
                      
                      <div className="space-y-3 mb-6">
                        <Button className="w-full" size="lg" asChild>
                          <a href="/contact">Заяви безплатен оглед</a>
                        </Button>
                        <Button variant="outline" className="w-full" size="lg" asChild>
                          <a href="tel:+359893712919">
                            <Phone className="h-4 w-4 mr-2" />
                            Обадете се
                          </a>
                        </Button>
                      </div>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        * Цените са без ДДС и са ориентировъчни. Точната цена се определя след оглед.
                        <br />
                        Курс: 1 EUR = 1.95583 лв. (фиксинг на БНБ)
                      </p>
                    </CardContent>
                  </Card>

                  {/* Compare Link */}
                  <div className="mt-6 text-center">
                    <Link 
                      to="/pricing" 
                      className="text-primary hover:underline text-sm"
                    >
                      Сравни с другите пакети →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Packages */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8 text-center">Разгледайте и другите пакети</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link to="/pricing/comfort">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">Най-популярен</div>
                    <h3 className="text-xl font-bold mb-2">Renovivo Comfort</h3>
                    <p className="text-muted-foreground mb-4">Цялостен ремонт на апартамент</p>
                    <div className="font-bold text-primary">161–232 €/м²</div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/pricing/premium">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Renovivo Premium</h3>
                    <p className="text-muted-foreground mb-4">Пълна отговорност и инвеститорски контрол</p>
                    <div className="font-bold text-primary">332–460+ €/м²</div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
};

export default PricingStart;
