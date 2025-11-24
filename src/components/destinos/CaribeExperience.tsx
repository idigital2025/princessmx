import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import destinationCaribbean from "@/assets/destination-caribbean.jpg";

const CaribeExperience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const hasAnimated = useRef(false);

  const stats = [
    { target: 23, label: "Islas\npor temporada" },
    { target: 11, label: "Barcos navegando\nel Caribe" },
    { target: 5, label: "Puertos\nde embarque clave" },
    { target: 100, label: "Itinerarios\npara explorar", suffix: "+" },
  ];

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = stat.target;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(current);
              return newCounts;
            });
          }
        }, 30);
      });
    }
  }, [isVisible]);

  return (
    <section 
      id="caribe-experience"
      ref={ref} 
      className={`py-16 md:py-24 px-4 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center lg:items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary text-left">
              La experiencia caribeña perfecta
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed text-left">
              El Caribe es un universo de colores, sabores y sensaciones que envuelve desde el primer instante. 
              Aguas turquesas que parecen no terminar, playas de arena suave como polvo dorado, pueblos vibrantes 
              llenos de música y un ambiente cálido que solo este rincón del mundo sabe entregar.
            </p>

            <p className="text-base md:text-lg text-foreground/90 leading-relaxed text-left">
              Cada mañana despertarás frente a un paisaje distinto; cada tarde se transformará en una postal 
              inolvidable. Un crucero por el Caribe no es solo un destino: es vivir varias vacaciones en una sola.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-left animate-count-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-2">
                    {counts[index]}{stat.suffix || ''}
                  </div>
                  <div className="text-sm md:text-base text-foreground/80 tracking-wide whitespace-pre-line capitalize">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-12">
              <a 
                href="https://reservas.princesscruises.mx/search?destinations=7&sortBy=Recommended_WithTax&priceByCabin=false&taxAndFeesIncluded=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 md:px-8 md:py-4 bg-accent text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-elegant text-sm md:text-base"
              >
                Ver cruceros disponibles
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="asymmetric-card overflow-hidden shadow-elegant">
            <img 
              src={destinationCaribbean} 
              alt="playas del Caribe con aguas turquesas"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaribeExperience;
