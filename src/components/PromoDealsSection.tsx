import promo1 from "@/assets/promo-1.png";
import promo2 from "@/assets/promo-2.webp";
import promoCruiseDeals from "@/assets/promo-cruise-deals.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PromoDealsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const promos = [
    {
      image: promo1,
      alt: "Promoción especial de cruceros"
    },
    {
      image: promo2,
      alt: "Ofertas de cruceros"
    },
    {
      image: promoCruiseDeals,
      alt: "Grandes ofertas de cruceros"
    }
  ];

  return (
    <section ref={ref} className={`py-16 px-4 bg-secondary transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-12 text-center">
          Encuentra la oferta de crucero perfecta para ti
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {promos.map((promo, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="asymmetric-card overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 h-[400px]">
                  <img
                    src={promo.image}
                    alt={promo.alt}
                    className="w-full h-full object-cover"
                  />
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

export default PromoDealsSection;
