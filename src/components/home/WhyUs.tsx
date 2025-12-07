import { Clock, BadgeCheck, Banknote, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Спазваме сроковете",
    description: "Ценим вашето време и се ангажираме с конкретни срокове, които спазваме стриктно.",
  },
  {
    icon: BadgeCheck,
    title: "Гаранция за качество",
    description: "Предоставяме гаранция на всички извършени услуги и използвани материали.",
  },
  {
    icon: Banknote,
    title: "Честни цени",
    description: "Прозрачно ценообразуване без скрити такси. Знаете точно за какво плащате.",
  },
  {
    icon: Headphones,
    title: "Поддръжка 24/7",
    description: "Винаги сме на линия за вашите въпроси и притеснения, дори след завършване на проекта.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Защо да изберете нас</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Вашето доверие е наш приоритет
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Избирайки Renovivo, вие избирате партньор, който се грижи за вашия проект 
            като за свой собствен.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <reason.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
