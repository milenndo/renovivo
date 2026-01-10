import { Check, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutTeamImg from "@/assets/images/about-team.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const features = [
    'about.feature1',
    'about.feature2',
    'about.feature3',
    'about.feature4',
    'about.feature5',
    'about.feature6',
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={aboutTeamImg}
                alt="Renovivo team at work"
                width={665}
                height={499}
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-xl w-full"
                style={{ aspectRatio: '665/499' }}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-foreground font-semibold text-sm uppercase tracking-wider">{t('about.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t('about.p2')}
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((featureKey) => (
                <div key={featureKey} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">{t(featureKey)}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-6 mb-8 p-6 bg-secondary/50 rounded-xl">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <span className="font-semibold block">127 {t('about.projects')}</span>
                  <span className="text-sm text-muted-foreground">94% {t('about.recommend')}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <span className="font-semibold block">5 {t('about.warranty')}</span>
                  <span className="text-sm text-muted-foreground">{t('about.warrantyAll')}</span>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                {t('about.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
