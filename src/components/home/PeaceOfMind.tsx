import { User, Calculator, FileText, Sparkles, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const PeaceOfMind = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: User,
      titleKey: 'peace.manager.title',
      descKey: 'peace.manager.desc',
    },
    {
      icon: Calculator,
      titleKey: 'peace.budget.title',
      descKey: 'peace.budget.desc',
    },
    {
      icon: FileText,
      titleKey: 'peace.contract.title',
      descKey: 'peace.contract.desc',
    },
    {
      icon: Sparkles,
      titleKey: 'peace.clean.title',
      descKey: 'peace.clean.desc',
    },
    {
      icon: Shield,
      titleKey: 'peace.warranty.title',
      descKey: 'peace.warranty.desc',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('peace.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeaceOfMind;
