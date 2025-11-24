import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Ship, Globe, Calendar, Award, Smartphone, Sunset } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const PrincessExperience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    { icon: Globe, text: "23 islas por temporada" },
    { icon: Ship, text: "11 barcos navegando la región" },
    { icon: Calendar, text: "Itinerarios todo el año" },
    { icon: Award, text: "Experiencias gastronómicas premiadas" },
    { icon: Smartphone, text: "Tecnología MedallionClass®" },
    { icon: Sunset, text: "Programa More Ashore" },
  ];

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 bg-primary text-primary-foreground transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-left md:text-center mb-8 md:mb-12">
          Vive la experiencia Princess
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl text-left md:text-center mb-12 md:mb-16 leading-relaxed">
          Viajar por el Caribe con Princess es hacerlo acompañado de una tripulación experta, servicios de 
          primer nivel y un estándar de excelencia que transforma cada día del viaje.
        </p>

        {/* Desktop: Carousel with arrows */}
        <div className="hidden md:block mb-12">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <feature.icon className="w-12 h-12 mb-4" />
                      <p className="text-base font-medium">
                        {feature.text}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-primary-foreground text-primary" />
            <CarouselNext className="bg-primary-foreground text-primary" />
          </Carousel>
        </div>

        {/* Mobile: Grid */}
        <div className="md:hidden grid grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-4"
            >
              <feature.icon className="w-10 h-10 mb-3" />
              <p className="text-sm font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
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

export default PrincessExperience;
