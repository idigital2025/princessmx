import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Ship } from "lucide-react";

const DestinationOffers = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-5xl text-center">
        <Ship className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 text-primary" />
        
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
          Explora todas las salidas al Caribe
        </h3>
        
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
          Filtra tu viaje al Caribe con todas las opciones disponibles: itinerarios cortos y largos, fechas flexibles, 
          distintos barcos y puertos de embarque. Encuentra la experiencia ideal para disfrutar del Caribe a tu ritmo.
        </p>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
          En cada salida descubrirás actividades únicas, opciones familiares, escapadas románticas y aventuras 
          pensadas para todos los tipos de viajero.
        </p>

        <button className="cta-button-accent">
          Ver cruceros disponibles
        </button>
      </div>
    </section>
  );
};

export default DestinationOffers;
