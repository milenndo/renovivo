import { Eye, FileText, Hammer, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowWeWork = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Eye,
      number: "01",
      titleKey: 'howWeWork.step1.title',
      descKey: 'howWeWork.step1.desc',
    },
    {
      icon: FileText,
      number: "02",
      titleKey: 'howWeWork.step2.title',
      descKey: 'howWeWork.step2.desc',
    },
    {
      icon: Hammer,
      number: "03",
      titleKey: 'howWeWork.step3.title',
      descKey: 'howWeWork.step3.desc',
    },
    {
      icon: ShieldCheck,
      number: "04",
      titleKey: 'howWeWork.step4.title',
      descKey: 'howWeWork.step4.desc',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('howWeWork.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('howWeWork.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:border-primary/50 transition-colors relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/50" aria-hidden="true">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
