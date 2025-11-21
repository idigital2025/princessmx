import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Ship } from "lucide-react";
import cruiseCaribbean from "@/assets/cruise-caribbean.jpg";
import destinationCaribbean from "@/assets/destination-caribbean.jpg";
import destinationHawaii from "@/assets/destination-hawaii.jpg";
import destinationMediterranean from "@/assets/destination-mediterranean.jpg";
import destinationAlaska from "@/assets/destination-alaska.jpg";
import destinationJapan from "@/assets/destination-japan.jpg";

const EmblematicPorts = () => {
  const { ref, isVisible } = useScrollAnimation();

  const ports = [
    {
      name: "Bahamas",
      description: "Islas de arena blanca, aguas cristalinas y vibrante cultura local.",
      image: cruiseCaribbean,
      alt: "Playas paradisíacas de las Bahamas con aguas turquesa"
    },
    {
      name: "Jamaica",
      description: "Reggae, playas espectaculares y aventuras en cascadas tropicales.",
      image: destinationCaribbean,
      alt: "Costas tropicales de Jamaica con vegetación exuberante"
    },
    {
      name: "San Juan (Puerto Rico)",
      description: "Historia colonial, fortalezas antiguas y cultura vibrante del Caribe.",
      image: destinationHawaii,
      alt: "Puerto de San Juan con arquitectura colonial histórica"
    },
    {
      name: "Aruba",
      description: "Sol constante, playas de ensueño y aguas perfectas para snorkel.",
      image: destinationAlaska,
      alt: "Playas de Aruba con aguas cristalinas y arena blanca"
    },
    {
      name: "Cozumel",
      description: "Arrecifes de coral, cultura maya y la mejor gastronomía mexicana.",
      image: destinationMediterranean,
      alt: "Costa de Cozumel con arrecifes de coral y aguas turquesa"
    },
    {
      name: "Saint Lucia",
      description: "Montañas volcánicas, playas románticas y naturaleza impresionante.",
      image: destinationJapan,
      alt: "Montañas Pitons de Saint Lucia con vegetación tropical"
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
            <Card key={index} className="overflow-hidden hover-scale asymmetric-card">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={port.image} 
                  alt={port.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold text-primary mb-2 flex items-center gap-2">
                  <Ship className="w-5 h-5 text-primary" />
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
                  <Card className="overflow-hidden asymmetric-card">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={port.image} 
                        alt={port.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-bold text-primary mb-2 flex items-center gap-2">
                        <Ship className="w-5 h-5 text-primary" />
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
