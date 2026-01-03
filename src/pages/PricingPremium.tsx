import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, Clock, Ruler, Crown, Home, Phone, Shield, Sparkles, Users, FileCheck } from "lucide-react";

const PricingPremium = () => {
  const includedServices = [
    "Всичко от пакет Comfort",
    "Материали на труда (настилки, плочки, бои)",
    "Санитария и обков",
    "Осветителни тела",
    "Интериорен дизайн проект",
    "3D визуализации на всички помещения",
    "Авторски надзор от дизайнер",
    "Персонален проектен мениджър",
    "Седмични отчети с фотодокументация",
    "Координация на всички доставчици",
    "Контрол на качеството на всеки етап",
    "Приемане на материали и проверка за дефекти",
    "Смарт домашна автоматизация (опция)",
    "Климатизация и отопление (опция)",
    "Почистване след ремонт",
    "Гаранция 5+ години",
  ];

  const premiumBenefits = [
    { 
      icon: Crown, 
      title: "Пълна отговорност", 
      desc: "Ние поемаме цялата отговорност за проекта – от дизайна до последния детайл. Вие не се занимавате с нищо." 
    },
    { 
      icon: Users, 
      title: "Персонален мениджър", 
      desc: "Имате един контакт за всичко. Вашият проектен мениджър координира всички аспекти на ремонта." 
    },
    { 
      icon: FileCheck, 
      title: "Инвеститорски контрол", 
      desc: "Действаме като ваш представител на обекта. Контролираме качеството и защитаваме вашите интереси." 
    },
    { 
      icon: Sparkles, 
      title: "Дизайн и визуализации", 
      desc: "Пълен интериорен проект с 3D визуализации. Виждате крайния резултат преди да започнем." 
    },
  ];

  const idealFor = [
    "Собственици, които искат безгрижен процес",
    "Хора с натоварен график без време за координация",
    "Луксозни и високобюджетни проекти",
    "Инвеститори в недвижими имоти",
    "Клиенти, които държат на детайлите и качеството",
    "Проекти, изискващи интериорен дизайн",
  ];

  const processSteps = [
    { title: "Първоначална среща", desc: "Обсъждаме вашата визия, начин на живот, предпочитания и бюджет. Посещаваме обекта заедно." },
    { title: "Интериорен проект", desc: "Нашият дизайнер създава пълен проект с планове, чертежи и фотореалистични 3D визуализации." },
    { title: "Одобрение и договор", desc: "Представяме финалния проект с детайлна оферта. След одобрение подписваме договор." },
    { title: "Подготовка и доставки", desc: "Организираме всички материали и координираме доставките според графика." },
    { title: "Изпълнение с надзор", desc: "Работим по проекта с постоянен авторски надзор. Седмични отчети и фотодокументация." },
    { title: "Предаване и обслужване", desc: "Детайлен финален оглед, протокол и разширена гаранция. Поддръжка след ремонта." },
  ];

  return (
    <>
      <Helmet>
        <title>Renovivo Premium - Пълна отговорност | Renovivo</title>
        <meta 
          name="description" 
          content="Renovivo Premium - луксозен пакет с пълна отговорност и инвеститорски контрол. Цени от 332-460+ €/м². Включва материали, дизайн проект, персонален мениджър." 
        />
        <link rel="canonical" href="https://renovivo.bg/pricing/premium" />
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
                <span className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  <Crown className="h-4 w-4 inline mr-1" />
                  Премиум пакет
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-3 mb-6">
                Renovivo Premium
              </h1>
              <p className="text-background/80 text-xl mb-8">
                Пълна отговорност и инвеститорски контрол. Ние се грижим за абсолютно всичко – 
                от дизайна и материалите до последния детайл. Вие само избирате и одобрявате.
              </p>
              <div className="flex flex-wrap gap-6 text-background/90">
                <div className="flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">332–460+ €/м²</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-muted-foreground">(650–900+ лв./м²)</span>
                </div>
              </div>
              <p className="text-background/60 text-sm mt-2">(включва материали и дизайн проект)</p>
            </div>
          </div>
        </section>

        {/* Premium Benefits */}
        <section className="py-12 bg-gradient-to-b from-amber-50 to-background">
          <div className="container-custom">
            <h2 className="text-xl font-bold mb-6 text-center">Защо да изберете Premium?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {premiumBenefits.map((item, index) => (
                <Card key={index} className="border-amber-200 bg-white">
                  <CardContent className="p-5">
                    <item.icon className="h-8 w-8 text-amber-600 mb-3" />
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
                    <Crown className="h-6 w-6 text-amber-600" />
                    Какво включва пакетът
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {includedServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                        <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
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
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 shrink-0" />
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
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{step.title}</h3>
                          <p className="text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guarantee */}
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
                  <div className="flex items-start gap-4">
                    <Shield className="h-10 w-10 text-amber-600 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Разширена гаранция 5+ години</h3>
                      <p className="text-muted-foreground">
                        Пакет Renovivo Premium включва разширена гаранция на всички дейности и материали. 
                        Освен стандартната 5-годишна гаранция, предлагаме и следгаранционна поддръжка 
                        за вашето пълно спокойствие.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Design Process */}
                <div className="bg-muted/30 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Интериорен дизайн включен
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Пакетът включва пълен интериорен проект, създаден от професионален дизайнер:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Концептуална разработка на стила
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Планиране на функционални зони
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      3D визуализации на всяко помещение
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Спецификация на всички материали
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Работни чертежи за изпълнение
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Авторски надзор по време на ремонта
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Sticky CTA */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="border-2 border-amber-400 bg-gradient-to-b from-amber-50 to-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Crown className="h-5 w-5 text-amber-600" />
                        <span className="text-sm font-medium text-amber-700">Премиум пакет</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Renovivo Premium</h3>
                      <p className="text-muted-foreground mb-4">Пълна отговорност и инвеститорски контрол</p>
                      <div className="text-3xl font-bold text-amber-700 mb-1">332–460+ €/м²</div>
                      <div className="text-lg text-muted-foreground mb-1">(650–900+ лв./м²)</div>
                      <div className="text-sm text-muted-foreground mb-6">(с материали и дизайн)</div>
                      
                      <div className="space-y-3 mb-6">
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white" size="lg" asChild>
                          <a href="/contact">Запазете среща</a>
                        </Button>
                        <Button variant="outline" className="w-full border-amber-300 hover:bg-amber-50" size="lg" asChild>
                          <a href="tel:+359893712919">
                            <Phone className="h-4 w-4 mr-2" />
                            Обадете се
                          </a>
                        </Button>
                      </div>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        * Цените са без ДДС и са ориентировъчни. Точната цена се определя след оглед и дизайн проект.
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
              <Link to="/pricing/comfort">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">Най-популярен</div>
                    <h3 className="text-xl font-bold mb-2">Renovivo Comfort</h3>
                    <p className="text-muted-foreground mb-4">Цялостен ремонт на апартамент</p>
                    <div className="font-bold text-primary">230–332 €/м²</div>
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

export default PricingPremium;
