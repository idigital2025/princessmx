import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Landmark, Fish, Sailboat } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import excursionStingray from "@/assets/excursion-stingray-cayman.jpg";
import excursionMayan from "@/assets/excursion-mayan-ruins.jpg";
import excursionBelize from "@/assets/excursion-belize-reef.jpg";
import excursionCatamaran from "@/assets/excursion-catamaran-sunset.jpg";

const ShoreExcursions = () => {
  const { ref, isVisible } = useScrollAnimation();

  const excursions = [
    {
      icon: Waves,
      title: "Nado con rayas",
      location: "Gran Caimán",
      description: "Sumérgete en aguas cristalinas y nada junto a mantarrayas en su hábitat natural. Una experiencia única e inolvidable.",
      image: excursionStingray,
      alt: "nadando con mantarrayas en aguas cristalinas de Gran Caimán"
    },
    {
      icon: Landmark,
      title: "Ruinas mayas",
      location: "Cozumel",
      description: "Descubre la fascinante historia de la civilización maya explorando antiguas ruinas y templos milenarios.",
      image: excursionMayan,
      alt: "antiguas ruinas mayas rodeadas de selva en Cozumel"
    },
    {
      icon: Fish,
      title: "Segunda barrera de coral del mundo",
      location: "Belice",
      description: "Explora uno de los arrecifes de coral más impresionantes del planeta, hogar de vida marina espectacular.",
      image: excursionBelize,
      alt: "arrecife de coral colorido con peces tropicales en Belice"
    },
    {
      icon: Sailboat,
      title: "Catamarán al atardecer",
      location: "Antigua",
      description: "Navega por aguas turquesas mientras disfrutas de un atardecer caribeño desde la cubierta de un catamarán.",
      image: excursionCatamaran,
      alt: "catamarán navegando al atardecer en aguas caribeñas de Antigua"
    }
  ];

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 bg-background transition-all duration-1000 overflow-x-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary text-left md:text-center mb-8 md:mb-12">
          Excursiones y experiencias en tierra
        </h2>

        <p className="text-lg md:text-xl text-left md:text-center text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto">
          Explora el auténtico Caribe:
        </p>

        {/* Carousel para Desktop y Mobile */}
        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {excursions.map((excursion, index) => (
                <CarouselItem key={index}>
                  <Card className="asymmetric-card overflow-hidden bg-primary border-primary">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Contenido a la izquierda */}
                      <CardContent className="p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 flex items-center justify-center">
                            <excursion.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
                              {excursion.title}
                            </h3>
                            <p className="text-sm md:text-base text-white/80 font-medium">
                              {excursion.location}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-white/90 leading-relaxed">
                          {excursion.description}
                        </p>
                      </CardContent>

                      {/* Imagen a la derecha */}
                      <div className="aspect-[4/3] md:aspect-auto overflow-hidden order-1 md:order-2">
                        <img 
                          src={excursion.image}
                          alt={excursion.alt}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-16" />
            <CarouselNext className="-right-4 md:-right-16" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
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
    </section>
  );
};

export default ShoreExcursions;
