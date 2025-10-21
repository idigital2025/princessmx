import { Ship, Utensils, Wifi, Sparkles, Music, Dumbbell, Wine, Users, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const IncludedBenefitsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    { icon: Ship, title: "Alojamiento", description: "Cabinas cómodas y elegantes con vistas al mar" },
    { icon: Utensils, title: "Comidas Gourmet", description: "Restaurantes de clase mundial incluidos" },
    { icon: Wifi, title: "WiFi a bordo", description: "Mantente conectado durante tu viaje" },
    { icon: Sparkles, title: "Entretenimiento", description: "Shows en vivo y actividades diarias" },
    { icon: Music, title: "Música en Vivo", description: "Presentaciones todas las noches" },
    { icon: Dumbbell, title: "Gimnasio", description: "Instalaciones fitness de última generación" },
    { icon: Wine, title: "Bares y Lounges", description: "Variedad de opciones de bebidas" },
    { icon: Users, title: "Actividades", description: "Programas para todas las edades" },
    { icon: MapPin, title: "Excursiones", description: "Tours guiados en cada puerto" },
    { icon: Star, title: "Servicio Premium", description: "Atención personalizada 24/7" }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollPosition = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={ref} className={`py-16 px-4 bg-primary transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            ¿Qué incluye mi viaje con Princess?
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Subtítulo que complementa la sección con acotación. Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white/90 shadow-lg"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white/90 shadow-lg"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex-none w-64 snap-start bg-card p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
                  style={{ borderRadius: '0 2rem 0 0' }}
                >
                  <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedBenefitsSection;
