import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import destinationAlaska from "@/assets/destination-alaska.jpg";
import destinationMediterranean from "@/assets/destination-mediterranean.jpg";
import destinationJapan from "@/assets/destination-japan.jpg";
import destinationHawaii from "@/assets/destination-hawaii.jpg";

const ExploreDestinations = () => {
  const { ref, isVisible } = useScrollAnimation();

  const destinations = [
    {
      name: "Alaska",
      image: destinationAlaska,
      link: "/destinos/alaska",
      alt: "glaciares y paisajes de Alaska"
    },
    {
      name: "Mediterráneo",
      image: destinationMediterranean,
      link: "/destinos/mediterraneo",
      alt: "costa mediterránea"
    },
    {
      name: "Japón",
      image: destinationJapan,
      link: "/destinos/japon",
      alt: "cultura y paisajes de Japón"
    },
    {
      name: "Hawái",
      image: destinationHawaii,
      link: "/destinos/hawaii",
      alt: "playas y volcanes de Hawái"
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
          ¿Aún no te decides por el Caribe?
        </h2>

        <p className="text-base md:text-lg text-center text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto">
          Explora otros destinos inspiracionales de Princess Cruises:
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="asymmetric-card overflow-hidden hover-scale">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <CardContent className="p-6 w-full">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      {destination.name}
                    </h3>
                    <Button 
                      variant="secondary" 
                      className="w-full"
                      onClick={() => window.location.href = destination.link}
                    >
                      Explorar
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {destinations.map((destination, index) => (
                <CarouselItem key={index}>
                  <Card className="asymmetric-card overflow-hidden">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <CardContent className="p-6 w-full">
                          <h3 className="text-2xl font-display font-bold text-white mb-4">
                            {destination.name}
                          </h3>
                          <Button 
                            variant="secondary" 
                            className="w-full"
                            onClick={() => window.location.href = destination.link}
                          >
                            Explorar
                          </Button>
                        </CardContent>
                      </div>
                    </div>
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

export default ExploreDestinations;
