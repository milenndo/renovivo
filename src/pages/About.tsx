import { Helmet } from "react-helmet-async";
import { Check, Award, Users, Shield, Target, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Прецизност",
    description: "Внимание към всеки детайл във всеки проект.",
  },
  {
    icon: Shield,
    title: "Качество",
    description: "Използваме само висококачествени материали.",
  },
  {
    icon: Heart,
    title: "Отдаденост",
    description: "Работим с любов към занаята.",
  },
  {
    icon: Users,
    title: "Екипност",
    description: "Силен екип от опитни професионалисти.",
  },
];

const timeline = [
  { year: "2014", title: "Основаване", description: "Renovivo стартира с екип от 3 души." },
  { year: "2016", title: "100 проекта", description: "Завършихме първите 100 проекта." },
  { year: "2018", title: "Разширяване", description: "Екипът нарасна на 15 души." },
  { year: "2020", title: "300 проекта", description: "Преминахме 300 успешни проекта." },
  { year: "2024", title: "500+ проекта", description: "Продължаваме да растем." },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>За нас | Renovivo - Вашият надежден партньор за ремонт</title>
        <meta 
          name="description" 
          content="Научете повече за Renovivo - над 10 години опит в ремонтните услуги, екип от професионалисти и стотици доволни клиенти." 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="container-custom relative z-10">
            <div className="max-w-2xl">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">За нас</span>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-3 mb-6">
                Every Detail Matters
              </h1>
              <p className="text-background/80 text-lg">
                Ние сме екип от професионалисти, които превръщат обикновените пространства в изключителни.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                  alt="Renovivo екип"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Нашата история</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                  Над 10 години опит в създаването на мечтани домове
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Renovivo е основана през 2014 година с една проста мисия - да предоставяме 
                  ремонтни услуги с качество, което надминава очакванията. Започнахме като 
                  малък екип от трима ентусиазирани майстори, а днес сме едни от водещите 
                  компании в бранша.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Нашият подход е прост - слушаме внимателно нуждите на клиентите, 
                  планираме детайлно всеки проект и изпълняваме с прецизност всяка задача. 
                  "Every Detail Matters" не е просто слоган - това е нашата философия.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <span className="text-3xl font-bold text-primary">10+</span>
                    <p className="text-muted-foreground text-sm mt-1">Години опит</p>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-primary">500+</span>
                    <p className="text-muted-foreground text-sm mt-1">Проекти</p>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-primary">15+</span>
                    <p className="text-muted-foreground text-sm mt-1">Специалисти</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Нашите ценности</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">Какво ни движи</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="text-center border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Нашият път</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">Развитие през годините</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-grow bg-border mt-4" />
                    )}
                  </div>
                  <div className="pt-2 pb-8">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Защо да изберете нас</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                  Качество, на което можете да разчитате
                </h2>
                <p className="text-background/80 mb-8">
                  Избирайки Renovivo, вие избирате партньор, който се грижи за вашия проект 
                  като за свой собствен.
                </p>

                <div className="space-y-4">
                  {[
                    "Гаранция на всички извършени услуги",
                    "Използване на висококачествени материали",
                    "Прозрачно ценообразуване без скрити такси",
                    "Спазване на договорените срокове",
                    "Почистване след приключване на работа",
                    "Безплатна консултация и оглед",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <span className="text-background/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
                  alt="Качествена работа"
                  className="rounded-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-primary rounded-xl p-6">
                  <Award className="h-8 w-8 text-primary-foreground mb-2" />
                  <span className="text-primary-foreground font-bold text-2xl block">100%</span>
                  <span className="text-primary-foreground/90 text-sm">Доволни клиенти</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutPage;
