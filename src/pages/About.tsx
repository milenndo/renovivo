import { Helmet } from "react-helmet-async";
import { Check, CheckCircle2, Award, Shield, Phone, Heart, Handshake, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useInspectionRequest } from "@/contexts/InspectionRequestContext";
import VisualBreadcrumb from "@/components/VisualBreadcrumb";
import aboutTeamImg from "@/assets/images/about-team.jpg";
import qualityWorkImg from "@/assets/images/quality-work.jpg";

const AboutPage = () => {
  const { openModal } = useInspectionRequest();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Начало", item: "https://renovivo.bg" },
      { "@type": "ListItem", position: 2, name: "За нас", item: "https://renovivo.bg/about" },
    ],
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "За Renovivo",
    description: "Ремонтна фирма в София с фокус върху доверие, спокойствие и отговорност. 127 завършени проекта, 94% препоръки, 5 години гаранция.",
    mainEntity: {
      "@type": "Organization",
      name: "Renovivo",
      foundingDate: "2025",
      slogan: "Ремонт без хаос. Само спокойствие.",
    },
  };

  return (
    <>
      <Helmet>
        <title>За нас | Renovivo - Ремонт без хаос, само спокойствие</title>
        <meta
          name="description"
          content="Renovivo е ремонтна фирма в София, създадена с една цел - да ви спестим притесненията. 127 завършени проекта, 94% препоръки, 5 години гаранция."
        />
        <meta
          name="keywords"
          content="ремонтна фирма София, Renovivo, ремонти без стрес, надеждни майстори, ремонти с гаранция София"
        />
        <link rel="canonical" href="https://renovivo.bg/about" />
        <meta property="og:title" content="За нас | Renovivo - Ремонт без хаос" />
        <meta
          property="og:description"
          content="127 завършени проекта. 94% препоръки. 5 години гаранция. Ремонт без стрес."
        />
        <meta property="og:url" content="https://renovivo.bg/about" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(aboutSchema)}</script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <VisualBreadcrumb 
              items={[{ label: "За нас" }]} 
              className="mb-6 [&_a]:text-background/70 [&_a:hover]:text-primary [&_span[role=link]]:text-background [&_svg]:text-background/50"
            />
            <div className="max-w-3xl">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">За нас</span>
              <h1 className="text-3xl md:text-4xl font-bold text-background mt-3 mb-6">
                Ремонтът не трябва да бъде стресиращ
              </h1>
              <p className="text-background/90 text-lg leading-relaxed mb-4">
                Знаем колко притеснително може да бъде да поверите дома си на непознати. 
                Точно затова създадохме Renovivo - за да имате партньор, на когото можете да разчитате.
              </p>
              <p className="text-background/70 text-base leading-relaxed">
                Не обещаваме чудеса. Обещаваме честност, редовна комуникация и спазване на думата ни.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Stats */}
        <section className="py-12 bg-secondary/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="text-3xl font-bold text-primary">127</span>
                </div>
                <p className="text-muted-foreground text-sm font-medium">Завършени проекти</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-3xl font-bold text-primary">94%</span>
                </div>
                <p className="text-muted-foreground text-sm font-medium">Препоръчват ни</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-3xl font-bold text-primary">5 години</span>
                </div>
                <p className="text-muted-foreground text-sm font-medium">Гаранция</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach - Image Left */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <div className="relative">
                <img 
                  src={aboutTeamImg} 
                  alt="Екипът на Renovivo обсъжда проект" 
                  className="rounded-2xl shadow-xl w-full" 
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Нашият подход</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                  Спокойствие за вас, отговорност за нас
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Вярваме, че добрият ремонт започва с добра комуникация. Затова от първия ден 
                  ще имате ясна представа какво, кога и как ще се случи. Без изненади, без скрити разходи.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Всеки член от екипа ни е специалист в своята област. Координираме се помежду си, 
                  за да не се налага вие да правите това. Вашата единствена работа е да ни кажете какво искате.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: MessageSquare, text: "Редовни ъпдейти - знаете какво се случва" },
                    { icon: Clock, text: "Спазваме сроковете - ценим времето ви" },
                    { icon: Handshake, text: "Държим на думата си - това, което обещаем, изпълняваме" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Image Right */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Нашите ценности</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                  Доверие се гради с действия
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Не вярваме в празните обещания. Вярваме, че доверието се печели проект след проект, 
                  клиент след клиент. Всеки завършен ремонт е доказателство за това, на което сме способни.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Прозрачно ценообразуване",
                    "Никакви скрити такси",
                    "Почистване след работа",
                    "Отзивчив екип",
                    "Гаранция 5 години",
                    "Безплатна консултация",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative order-1 lg:order-2">
                <img 
                  src={qualityWorkImg} 
                  alt="Качествено изпълнение на ремонт" 
                  className="rounded-2xl shadow-xl w-full" 
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Simple CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom text-center">
            <div className="max-w-2xl mx-auto">
              <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Искаме да сме различни
              </h2>
              <p className="text-background/80 text-lg mb-8 leading-relaxed">
                Чували сме достатъчно истории за лош опит с ремонти. Нашата цел е да покажем, 
                че може и по друг начин - с уважение, отговорност и внимание към детайла.
              </p>
              <p className="text-background/60 mb-8">
                Ако това резонира с вас, нека поговорим.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  onClick={openModal}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Заявете безплатен оглед
                </Button>
                <Link to="/portfolio">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-background/30 bg-transparent text-background hover:bg-background/10 font-semibold"
                  >
                    Вижте нашите проекти
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutPage;
