import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import destinationCaribbean from "@/assets/destination-caribbean.jpg";

const EmblematicPorts = () => {
  const { ref, isVisible } = useScrollAnimation();

  const ports = [
    {
      name: "Bahamas",
      description: "Playas perfectas y arrecifes para snorkel.",
      image: destinationCaribbean,
      alt: "isla tropical del Caribe vista desde el mar"
    },
    {
      name: "Jamaica",
      description: "Cataratas, ritmo y cultura vibrante.",
      image: destinationCaribbean,
      alt: "playas del Caribe con aguas turquesas"
    },
    {
      name: "San Juan (Puerto Rico)",
      description: "Historia colonial y gastronomía local.",
      image: destinationCaribbean,
      alt: "puerto colorido del Caribe"
    },
    {
      name: "Aruba",
      description: "Aguas turquesas y paisajes áridos únicos.",
      image: destinationCaribbean,
      alt: "playas del Caribe con aguas turquesas"
    },
    {
      name: "Cozumel",
      description: "Arrecifes, snorkel y ruinas mayas.",
      image: destinationCaribbean,
      alt: "vida marina en arrecife del Caribe"
    },
    {
      name: "Saint Lucia",
      description: "Montañas Pitons y selva tropical.",
      image: destinationCaribbean,
      alt: "isla tropical del Caribe vista desde el mar"
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary text-center mb-12 md:mb-16">
          Puertos emblemáticos del Caribe
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ports.map((port, index) => (
            <Card key={index} className="overflow-hidden hover-scale">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={port.image} 
                  alt={port.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {port.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {port.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {ports.map((port, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={port.image} 
                        alt={port.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">
                        {port.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {port.description}
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

export default EmblematicPorts;
