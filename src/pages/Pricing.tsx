import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import VisualBreadcrumb from "@/components/VisualBreadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{language === 'bg' ? 'Цени за ремонт | Renovivo' : 'Renovation Prices | Renovivo'}</title>
      </Helmet>
      <Layout>
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container-custom">
            <VisualBreadcrumb 
              items={[{ label: language === 'bg' ? 'Цени' : 'Pricing' }]} 
              className="mb-8"
            />
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('pricing.page.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('pricing.page.subtitle')}
              </p>
              <Button size="lg" asChild>
                <a href="/contact">{t('pricing.page.cta')}</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-center">{t('pricing.page.control.title')}</h2>
            <div className="bg-muted rounded-lg p-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>{t('pricing.page.control.item1')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>{t('pricing.page.control.item2')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>{t('pricing.page.control.item3')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>{t('pricing.page.control.item4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('pricing.page.packages')}</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              <Link to="/pricing/start" className="group">
                <div className="bg-background rounded-lg shadow-lg p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-primary/20">
                  <h3 className="text-2xl font-bold mb-2">{t('pricing.package.start')}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t('pricing.package.start.desc')}</p>
                  <div className="text-2xl font-bold text-primary mb-1">46–72 €/m²<br /><span className="text-lg text-muted-foreground">(90–140 {language === 'bg' ? 'лв.' : 'BGN'}/m²)</span></div>
                  <div className="text-sm text-muted-foreground mb-6">{t('pricing.package.noMaterials')}</div>
                  <div className="flex items-center justify-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    {t('pricing.package.learnMore')} <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>

              <Link to="/pricing/comfort" className="group">
                <div className="bg-background rounded-lg shadow-lg p-8 ring-2 ring-primary transform md:scale-105 h-full hover:shadow-xl transition-all">
                  <div className="bg-primary text-primary-foreground text-center py-2 -mx-8 -mt-8 mb-6 rounded-t-lg font-semibold">
                    {t('pricing.package.popular')}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t('pricing.package.comfort')}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t('pricing.package.comfort.desc')}</p>
                  <div className="text-2xl font-bold text-primary mb-1">161–232 €/m²<br /><span className="text-lg text-muted-foreground">(315–455 {language === 'bg' ? 'лв.' : 'BGN'}/m²)</span></div>
                  <div className="text-sm text-muted-foreground mb-6">{t('pricing.package.noMaterials')}</div>
                  <div className="flex items-center justify-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    {t('pricing.package.learnMore')} <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>

              <Link to="/pricing/premium" className="group">
                <div className="bg-background rounded-lg shadow-lg p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-amber-300">
                  <h3 className="text-2xl font-bold mb-2">{t('pricing.package.premium')}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t('pricing.package.premium.desc')}</p>
                  <div className="text-2xl font-bold text-primary mb-6">332–460+ €/m²<br /><span className="text-lg text-muted-foreground">(650–900+ {language === 'bg' ? 'лв.' : 'BGN'}/m²)</span></div>
                  <div className="flex items-center justify-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    {t('pricing.package.learnMore')} <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>

            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              {t('pricing.page.vatNote')}
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-center">{t('pricing.page.process')}</h2>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{step}</div>
                  <div>
                    <h3 className="font-bold mb-2">{t(`pricing.process.step${step}.title`)}</h3>
                    <p className="text-muted-foreground">{t(`pricing.process.step${step}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">{t('pricing.page.exactPrice')}</h2>
            <p className="text-xl mb-8">{t('pricing.page.exactPrice.desc')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">{t('pricing.page.bookInspection')}</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="/contact">{t('pricing.page.freeConsultation')}</a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Pricing;
