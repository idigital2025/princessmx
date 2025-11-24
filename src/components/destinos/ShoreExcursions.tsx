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

const ShoreExcursions = () => {
  const { ref, isVisible } = useScrollAnimation();

  const excursions = [
    {
      icon: Waves,
      title: "Nado con rayas",
      location: "Gran Caimán",
      alt: "vida marina en arrecife del Caribe"
    },
    {
      icon: Landmark,
      title: "Ruinas mayas",
      location: "Cozumel",
      alt: "ruinas mayas en México"
    },
    {
      icon: Fish,
      title: "Segunda barrera de coral del mundo",
      location: "Belice",
      alt: "vida marina en arrecife del Caribe"
    },
    {
      icon: Sailboat,
      title: "Catamarán al atardecer",
      location: "Antigua",
      alt: "puesta de sol caribeña desde un barco"
    }
  ];

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 bg-background transition-all duration-1000 ${
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

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {excursions.map((excursion, index) => (
            <Card 
              key={index} 
              className="asymmetric-card hover-scale group overflow-hidden"
            >
              <CardContent className="p-8 flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <excursion.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-2">
                    {excursion.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {excursion.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-[calc(100vw-3rem)] mx-auto">
            <CarouselContent>
              {excursions.map((excursion, index) => (
                <CarouselItem key={index}>
                  <Card className="asymmetric-card">
                    <CardContent className="p-4 text-center">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <excursion.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-display font-bold text-primary mb-2">
                          {excursion.title}
                        </h3>
                        <p className="text-base text-muted-foreground">
                          {excursion.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
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
