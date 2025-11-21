import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import destinationAlaska from "@/assets/destination-alaska.jpg";
import destinationMediterranean from "@/assets/destination-mediterranean.jpg";
import destinationJapan from "@/assets/destination-japan.jpg";
import destinationNorthernEurope from "@/assets/destination-northern-europe.jpg";
import destinationSouthAmerica from "@/assets/destination-south-america.jpg";
import destinationCanadaNewEngland from "@/assets/destination-canada-new-england.jpg";
import destinationAustraliaPacific from "@/assets/destination-australia-pacific.jpg";

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
      name: "Norte de Europa",
      image: destinationNorthernEurope,
      link: "/destinos/norte-europa",
      alt: "fiordos y arquitectura del Norte de Europa"
    },
    {
      name: "Sudamérica",
      image: destinationSouthAmerica,
      link: "/destinos/sudamerica",
      alt: "paisajes y cultura de Sudamérica"
    },
    {
      name: "Canadá y Nueva Inglaterra",
      image: destinationCanadaNewEngland,
      link: "/destinos/canada-nueva-inglaterra",
      alt: "otoño en Canadá y Nueva Inglaterra"
    },
    {
      name: "Australia y Pacífico",
      image: destinationAustraliaPacific,
      link: "/destinos/australia-pacifico",
      alt: "Gran Barrera de Coral y Pacífico"
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
            <div 
              key={index} 
              className="relative overflow-hidden hover-scale cursor-pointer transition-transform duration-300"
              style={{ borderRadius: '0 0 3rem 0' }}
              onClick={() => window.location.href = destination.link}
            >
              <div className="aspect-[3/4] relative overflow-hidden" style={{ borderRadius: '0 0 3rem 0' }}>
                <img 
                  src={destination.image} 
                  alt={destination.alt}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '0 0 3rem 0' }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg">
                    <h3 className="text-lg font-display font-bold text-primary text-center">
                      {destination.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {destinations.map((destination, index) => (
                <CarouselItem key={index}>
                  <div 
                    className="relative overflow-hidden cursor-pointer"
                    style={{ borderRadius: '0 0 3rem 0' }}
                    onClick={() => window.location.href = destination.link}
                  >
                    <div className="aspect-[3/4] relative overflow-hidden" style={{ borderRadius: '0 0 3rem 0' }}>
                      <img 
                        src={destination.image} 
                        alt={destination.alt}
                        className="w-full h-full object-cover"
                        style={{ borderRadius: '0 0 3rem 0' }}
                      />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white px-4 py-2 rounded-full shadow-lg">
                          <h3 className="text-lg font-display font-bold text-primary text-center">
                            {destination.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
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
