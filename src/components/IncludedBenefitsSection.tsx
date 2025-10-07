import { Ship, Utensils, Wifi, Sparkles, Music, Dumbbell, Wine, Users, MapPin, Star } from "lucide-react";
import { useRef } from "react";

const IncludedBenefitsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            ¿Qué incluye mi viaje con Princess?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Subtítulo que complementa la sección con acotación. Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex-none w-64 snap-start bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IncludedBenefitsSection;
