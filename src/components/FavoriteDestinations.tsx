import alaskaImg from "@/assets/destination-alaska.jpg";
import caribbeanImg from "@/assets/destination-caribbean.jpg";
import mediterraneanImg from "@/assets/destination-mediterranean.jpg";
import hawaiiImg from "@/assets/destination-hawaii.jpg";
import japanImg from "@/assets/destination-japan.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FavoriteDestinations = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const destinations = [
    { name: "Alaska", image: alaskaImg },
    { name: "Asia / Japón", image: japanImg },
    { name: "Caribe", image: caribbeanImg },
    { name: "Mediterráneo", image: mediterraneanImg },
    { name: "Norte de Europa", image: mediterraneanImg }, // Placeholder image
    { name: "Sudamérica", image: caribbeanImg }, // Placeholder image
    { name: "Canadá y N. Inglaterra", image: alaskaImg }, // Placeholder image
    { name: "Australia y Pacífico", image: hawaiiImg }, // Placeholder image
  ];

  return (
    <section ref={ref} className={`py-16 px-4 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12 text-center">
          Destinos
        </h2>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {destinations.map((destination) => (
              <CarouselItem key={destination.name} className="md:basis-1/2 lg:basis-1/4">
                <div className="asymmetric-card overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer group h-64">
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                        <h3 className="text-sm md:text-base font-display font-bold text-primary">
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
    </section>
  );
};

export default FavoriteDestinations;
