import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

const DestinationOffers = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <Tag className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 text-primary" />
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-8">
          Ofertas y promociones
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
          Descubre promociones exclusivas para el Caribe: descuentos, beneficios familiares y ahorros instantáneos.
        </p>

        <Button size="lg" className="cta-button-accent">
          Ver todas las promociones
        </Button>
      </div>
    </section>
  );
};

export default DestinationOffers;
