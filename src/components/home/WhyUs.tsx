import { Users, Focus, MessageSquare, Calculator, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Users,
      titleKey: 'whyUs.experts.title',
      descKey: 'whyUs.experts.desc',
    },
    {
      icon: Focus,
      titleKey: 'whyUs.detail.title',
      descKey: 'whyUs.detail.desc',
    },
    {
      icon: MessageSquare,
      titleKey: 'whyUs.communication.title',
      descKey: 'whyUs.communication.desc',
    },
    {
      icon: Calculator,
      titleKey: 'whyUs.budget.title',
      descKey: 'whyUs.budget.desc',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-foreground font-semibold text-sm uppercase tracking-wider">{t('whyUs.label')}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.titleKey}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <reason.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{t(reason.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(reason.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Sofia badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-6 py-3 rounded-full">
            <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="font-semibold">{t('whyUs.location')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
