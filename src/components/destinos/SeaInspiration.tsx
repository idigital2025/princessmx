import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import cruiseCaribbean from "@/assets/cruise-caribbean.jpg";
import destinationCaribbean from "@/assets/destination-caribbean.jpg";

const SeaInspiration = () => {
  const { ref, isVisible } = useScrollAnimation();

  const images = [
    {
      src: cruiseCaribbean,
      alt: "crucero Princess navegando por el Caribe"
    },
    {
      src: destinationCaribbean,
      alt: "puesta de sol caribeña desde un barco"
    },
    {
      src: cruiseCaribbean,
      alt: "isla tropical del Caribe vista desde el mar"
    }
  ];

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-6 bg-muted/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary text-center mb-12 md:mb-16">
          Inspiración desde el mar
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="asymmetric-card overflow-hidden shadow-elegant aspect-[16/10] bg-background">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      style={{ borderRadius: '0 0 3rem 0' }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SeaInspiration;
