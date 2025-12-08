import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ctaBackground from "@/assets/images/cta-background.jpg";

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBackground}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Готови ли сте да започнете?
        </h2>
        <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
          Свържете се с нас днес за безплатна консултация и оферта. 
          Нашият екип е готов да превърне вашите идеи в реалност.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+359893712919">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              Обадете се сега
            </Button>
          </a>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
              Изпратете запитване
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
