import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

const CaribeExperience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { number: "23", label: "islas por temporada" },
    { number: "11", label: "barcos navegando el Caribe" },
    { number: "5", label: "puertos de embarque clave" },
    { number: "100+", label: "itinerarios para explorar" },
  ];

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary text-center mb-8 md:mb-12">
          La experiencia caribeña perfecta
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl text-foreground/90 text-center mb-12 md:mb-16 leading-relaxed">
          El Caribe es un universo de colores, sabores y sensaciones que envuelve desde el primer instante. 
          Aguas turquesas que parecen no terminar, playas de arena suave como polvo dorado, pueblos vibrantes 
          llenos de música y un ambiente cálido que solo este rincón del mundo sabe entregar.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-4 bg-gradient-ocean rounded-lg shadow-elegant"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-base md:text-lg text-foreground/90 text-center mb-8 leading-relaxed">
          Cada mañana despertarás frente a un paisaje distinto; cada tarde se transformará en una postal 
          inolvidable. Un crucero por el Caribe no es solo un destino: es vivir varias vacaciones en una sola.
        </p>

        <div className="text-center">
          <Button size="lg" className="cta-button-accent">
            Ver cruceros disponibles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaribeExperience;
