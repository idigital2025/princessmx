import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Waves, Landmark, Fish, Sailboat } from "lucide-react";

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
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary text-center mb-8 md:mb-12">
          Excursiones y experiencias en tierra
        </h2>

        <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto">
          Explora el auténtico Caribe:
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {excursions.map((excursion, index) => (
            <Card key={index} className="hover-scale">
              <CardContent className="p-6 text-center">
                <excursion.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {excursion.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {excursion.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {excursions.map((excursion, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <excursion.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-lg font-display font-bold text-foreground mb-2">
                        {excursion.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {excursion.location}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ShoreExcursions;
