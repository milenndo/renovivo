import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useInspectionRequest } from "@/contexts/InspectionRequestContext";
import ctaBackground from "@/assets/images/cta-background.jpg";

const CTA = () => {
  const { openModal } = useInspectionRequest();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBackground}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading-lg text-primary-foreground mb-6">
            Готови за промяна?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Свържете се с нас за безплатен оглед и оферта в София и района.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={openModal}
              className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-6 h-auto font-medium"
            >
              <Phone className="h-5 w-5 mr-2" />
              Заяви оглед
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 py-6 h-auto font-medium"
              >
                Изпратете запитване
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
