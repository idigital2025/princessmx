import CruiseCard from "./CruiseCard";
import caribbeanImage from "@/assets/cruise-caribbean.jpg";
import mediterraneanImage from "@/assets/cruise-mediterranean.jpg";
import alaskaImage from "@/assets/cruise-alaska.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FeaturedCruises = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const cruises = [
    {
      title: "Paraíso Caribeño",
      destination: "Caribe Oriental - 7 islas",
      duration: "7 noches",
      price: "desde $899",
      image: caribbeanImage,
      rating: 5,
      ship: "Regal Princess"
    },
    {
      title: "Mediterráneo Clásico",
      destination: "Grecia, Italia, España",
      duration: "10 noches",
      price: "desde $1,299",
      image: mediterraneanImage,
      rating: 5,
      ship: "Sky Princess"
    },
    {
      title: "Aventura en Alaska",
      destination: "Glaciares y Naturaleza",
      duration: "8 noches",
      price: "desde $1,099",
      image: alaskaImage,
      rating: 5,
      ship: "Discovery Princess"
    }
  ];

  return (
    <section ref={ref} id="destinos" className={`py-16 px-4 bg-secondary transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 leading-tight">
            Salidas seleccionadas para ti
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora nuestros cruceros más populares y descubre el viaje perfecto para ti
          </p>
        </div>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {cruises.map((cruise, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <CruiseCard {...cruise} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        <div className="text-center mt-12">
          <button className="cta-button-outline px-8 md:px-12 py-3 md:py-4 text-base md:text-lg">
            Ver Todos los Cruceros
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCruises;
