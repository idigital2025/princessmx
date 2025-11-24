import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Ship } from "lucide-react";
import portFortLauderdale from "@/assets/port-fort-lauderdale.jpg";
import portCanaveral from "@/assets/port-canaveral.jpg";
import portMiami from "@/assets/port-miami.jpg";
import portCozumel from "@/assets/port-cozumel.jpg";
import portNassau from "@/assets/port-nassau.jpg";
import portAruba from "@/assets/port-aruba.jpg";

const EmblematicPorts = () => {
  const { ref, isVisible } = useScrollAnimation();

  const departurePorts = [
    {
      name: "Port Everglades – Fort Lauderdale, Florida (EE.UU.)",
      description: "Uno de los puertos más importantes para el Caribe. Salidas frecuentes, conexión aérea sencilla, embarque ágil y acceso directo a rutas del Caribe Oriental y Occidental.",
      note: "(Puerto oficial de salida de Princess Cruises.)",
      image: portFortLauderdale,
      alt: "Puerto de Fort Lauderdale Florida"
    },
    {
      name: "Port Canaveral – Orlando, Florida (EE.UU.)",
      description: "Ideal para familias y viajeros que desean combinar vacaciones en crucero con parques temáticos. Desde aquí zarpan itinerarios al Caribe con múltiples duraciones.",
      note: "(Puerto oficial de salida de Princess Cruises.)",
      image: portCanaveral,
      alt: "Puerto de Canaveral Orlando Florida"
    },
    {
      name: "Miami, Florida (EE.UU.)",
      description: "Capital del crucerismo mundial. Conexiones aéreas perfectas desde México y una amplia oferta de itinerarios al Caribe.",
      note: "(Puerto oficial utilizado en varias temporadas de Princess.)",
      image: portMiami,
      alt: "Puerto de Miami Florida"
    }
  ];

  const visitPorts = [
    {
      name: "Cozumel, México",
      description: "Arrecifes espectaculares, ruinas mayas y una vibrante cultura local. Uno de los puertos más visitados por Princess.",
      image: portCozumel,
      alt: "Cozumel México con arrecifes y cultura maya"
    },
    {
      name: "Nassau, Bahamas",
      description: "Playas turquesa, vida marina abundante y un ambiente perfecto para excursiones y actividades acuáticas.",
      image: portNassau,
      alt: "Nassau Bahamas con playas turquesas"
    },
    {
      name: "Aruba",
      description: "Paisajes áridos únicos, aguas cristalinas y una mezcla cultural fascinante.",
      image: portAruba,
      alt: "Isla de Aruba con paisajes únicos"
    }
  ];

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary text-left md:text-center mb-6 md:mb-8">
          Puertos de salida populares
        </h2>

        <p className="text-base md:text-lg text-left md:text-center text-muted-foreground mb-12 md:mb-16 max-w-4xl mx-auto font-sans">
          Princess Cruises navega el Caribe desde algunos de los puertos de salida más importantes y accesibles del mundo. Estos puntos de partida te permiten conectar fácilmente desde México hacia itinerarios que recorren las islas más hermosas de la región.
        </p>

        {/* Departure Ports - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {departurePorts.map((port, index) => (
            <Card key={index} className="asymmetric-card overflow-hidden hover-scale">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={port.image} 
                  alt={port.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <Ship className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-display font-bold" style={{ color: '#003595' }}>
                    {port.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  {port.description}
                </p>
                <p className="text-xs text-muted-foreground italic">
                  {port.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Departure Ports - Mobile Carousel */}
        <div className="md:hidden mb-16">
          <Carousel className="w-full max-w-[calc(100vw-3rem)] mx-auto">
            <CarouselContent>
              {departurePorts.map((port, index) => (
                <CarouselItem key={index}>
                  <Card className="asymmetric-card overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={port.image} 
                        alt={port.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 text-left">
                      <div className="flex items-start gap-2 mb-3">
                        <Ship className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <h3 className="text-lg font-display font-bold" style={{ color: '#003595' }}>
                          {port.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                        {port.description}
                      </p>
                      <p className="text-xs text-muted-foreground italic">
                        {port.note}
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

        {/* Visit Ports Section */}
        <h3 className="text-2xl md:text-3xl font-display font-bold text-primary text-left md:text-center mb-8 md:mb-12">
          Puertos de visita destacados en el Caribe
        </h3>

        {/* Visit Ports - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {visitPorts.map((port, index) => (
            <Card key={index} className="asymmetric-card overflow-hidden hover-scale">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={port.image} 
                  alt={port.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <Ship className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-display font-bold" style={{ color: '#003595' }}>
                    {port.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {port.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visit Ports - Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-[calc(100vw-3rem)] mx-auto">
            <CarouselContent>
              {visitPorts.map((port, index) => (
                <CarouselItem key={index}>
                  <Card className="asymmetric-card overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={port.image} 
                        alt={port.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 text-left">
                      <div className="flex items-start gap-2 mb-3">
                        <Ship className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <h3 className="text-lg font-display font-bold" style={{ color: '#003595' }}>
                          {port.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
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
