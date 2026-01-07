import { User, Calculator, FileText, Sparkles, Shield } from "lucide-react";

const reasons = [
  {
    icon: User,
    title: "Личен Проектен Мениджър",
    description: "Един човек отговаря за целия обект и комуникацията.",
  },
  {
    icon: Calculator,
    title: "Фиксиран Бюджет",
    description: "Цената по оферта е крайна. Без скрити такси.",
  },
  {
    icon: FileText,
    title: "Договор и Срокове",
    description: "Работим с ясни неустойки при забавяне.",
  },
  {
    icon: Sparkles,
    title: "Чистота До Ключ",
    description: "Професионално почистване след края на ремонта.",
  },
  {
    icon: Shield,
    title: "Писмена Гаранция",
    description: "Пълна гаранция за всяка извършена работа.",
  },
];

const PeaceOfMind = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-label text-muted-foreground">Защо ние</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-heading-lg text-foreground">
            5 причини да спите спокойно
          </h2>
        </div>

        {/* Reasons Grid - Luxe minimal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-luxe-lg transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors duration-500">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
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

export default PeaceOfMind;
