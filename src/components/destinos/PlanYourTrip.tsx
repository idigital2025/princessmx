import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Plane, Hotel, Bus } from "lucide-react";

const PlanYourTrip = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Plane,
      title: "Vuelos EZAir®",
      description: "Encuentra las mejores opciones de vuelo para conectar con tu crucero.",
      alt: "servicio de vuelos para cruceros"
    },
    {
      icon: Hotel,
      title: "Crucero + Hotel",
      description: "Combina tu crucero con estadías pre o post viaje.",
      alt: "paquetes de hotel y crucero"
    },
    {
      icon: Bus,
      title: "Traslado aeropuerto–barco",
      description: "Viaja cómodamente desde el aeropuerto hasta el puerto de embarque.",
      alt: "traslados para cruceros"
    }
  ];

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 bg-muted/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary text-center mb-8 md:mb-12">
          ¿Cómo planificar tu viaje?
        </h2>

        <p className="text-base md:text-lg text-center text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto">
          Aunque Princess México no vende vuelos ni traslados, orientamos al viajero:
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale">
              <CardContent className="p-6 text-center">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-display font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
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

export default PlanYourTrip;
