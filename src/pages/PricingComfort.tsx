import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, ArrowLeft, Clock, Ruler, Wrench, Home, Phone, Star, Shield } from "lucide-react";

const PricingComfort = () => {
  const includedServices = [
    "Пълно обновяване на всички помещения",
    "Нова електрическа инсталация",
    "Нова ВиК инсталация",
    "Шпакловки и изравняване на стени",
    "Полагане на настилки (ламинат, теракот, гранитогрес)",
    "Полагане на фаянс в бани и кухни",
    "Боядисване с латекс",
    "Монтаж на интериорни врати с каси",
    "Монтаж на санитария",
    "Монтаж на осветителни тела",
    "Изграждане на окачени тавани (при нужда)",
    "Координация на всички дейности",
    "Почистване след ремонт",
    "Гаранция 5 години",
  ];

  const notIncluded = [
    "Материали (плочки, настилки, бои и др.)",
    "Санитария и обзавеждане",
    "Интериорен дизайн проект (по желание)",
    "Смарт домашна автоматизация",
    "Климатизация и отопление",
  ];

  const idealFor = [
    "Старо строителство, нуждаещо се от цялостна реновация",
    "Панелни, тухлени и ЕПК апартаменти",
    "Имоти, закупени за инвестиция",
    "Семейства, желаещи модерен и функционален дом",
    "Проекти с бюджет за качествен ремонт",
  ];

  const whyPopular = [
    { title: "Оптимално съотношение цена/качество", desc: "Получавате цялостен ремонт на разумна цена без компромис с качеството." },
    { title: "Пълна координация", desc: "Ние се грижим за всички майстори, доставки и графици – вие не се занимавате с нищо." },
    { title: "5 години гаранция", desc: "Дългосрочна гаранция, която ви дава спокойствие след приключване на ремонта." },
    { title: "Прозрачно ценообразуване", desc: "Знаете точно какво плащате и няма скрити разходи или изненади." },
  ];

  return (
    <>
      <Helmet>
        <title>Renovivo Comfort - Цялостен ремонт | Renovivo</title>
        <meta 
          name="description" 
          content="Renovivo Comfort - най-популярният пакет за цялостен ремонт на апартамент. Цени от 230-332 €/м². Нова инсталация, настилки, боядисване, 5 години гаранция." 
        />
        <link rel="canonical" href="https://renovivo.bg/pricing/comfort" />
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
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4 inline mr-1" />
                  Най-популярен
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-3 mb-6">
                Renovivo Comfort
              </h1>
              <p className="text-background/80 text-xl mb-8">
                Цялостен ремонт на апартамент с нова инсталация, настилки и довършителни работи. 
                Най-търсеният пакет за пълна реновация на жилища в старо строителство.
              </p>
              <div className="flex flex-wrap gap-6 text-background/90">
                <div className="flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">230–332 €/м²</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-muted-foreground">(450–650 лв./м²)</span>
                </div>
              </div>
              <p className="text-background/60 text-sm mt-2">(без материали)</p>
            </div>
          </div>
        </section>

        {/* Why Most Popular */}
        <section className="py-12 bg-primary/5">
          <div className="container-custom">
            <h2 className="text-xl font-bold mb-6 text-center">Защо Comfort е най-избираният пакет?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyPopular.map((item, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
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
                    <Wrench className="h-6 w-6 text-primary" />
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
                    Какво НЕ включва (заплаща се отделно)
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
                    За пълен пакет с материали и инвеститорски контрол, разгледайте <Link to="/pricing/premium" className="text-primary hover:underline">Renovivo Premium</Link>.
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
                        <h3 className="font-semibold mb-1">Оглед и консултация</h3>
                        <p className="text-muted-foreground">Посещаваме обекта, анализираме състоянието на инсталациите и обсъждаме вашите цели и бюджет.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                      <div>
                        <h3 className="font-semibold mb-1">Техническо задание и оферта</h3>
                        <p className="text-muted-foreground">Изготвяме детайлна оферта с пълен списък на дейностите, график и цена.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                      <div>
                        <h3 className="font-semibold mb-1">Договор и старт</h3>
                        <p className="text-muted-foreground">Подписваме договор с фиксирана цена и започваме работа. Типичен срок: 4-8 седмици.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                      <div>
                        <h3 className="font-semibold mb-1">Изпълнение с отчетност</h3>
                        <p className="text-muted-foreground">Получавате редовни ъпдейти и снимки от обекта. Имате пълна видимост на напредъка.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">5</div>
                      <div>
                        <h3 className="font-semibold mb-1">Предаване и гаранция</h3>
                        <p className="text-muted-foreground">Финален оглед, подписване на приемо-предавателен протокол и 5-годишна гаранция.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="bg-primary/5 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <Shield className="h-10 w-10 text-primary shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">5 години гаранция</h3>
                      <p className="text-muted-foreground">
                        Пакет Renovivo Comfort включва 5-годишна гаранция на всички извършени дейности. 
                        Ако забележите проблем, ние се ангажираме да го отстраним безплатно в рамките на гаранционния срок.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sticky CTA */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="border-2 border-primary ring-2 ring-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">Най-популярен</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Renovivo Comfort</h3>
                      <p className="text-muted-foreground mb-4">Цялостен ремонт на апартамент</p>
                      <div className="text-3xl font-bold text-primary mb-1">230–332 €/м²</div>
                      <div className="text-lg text-muted-foreground mb-1">(450–650 лв./м²)</div>
                      <div className="text-sm text-muted-foreground mb-6">(без материали)</div>
                      
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
              <Link to="/pricing/start">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Renovivo Start</h3>
                    <p className="text-muted-foreground mb-4">Частичен ремонт / освежаване</p>
                    <div className="font-bold text-primary">92–143 €/м²</div>
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

export default PricingComfort;
