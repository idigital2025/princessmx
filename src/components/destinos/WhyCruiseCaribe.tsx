import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Waves, Palmtree, Music, UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import WaveTransition from "@/components/WaveTransition";
import caribbeanBeach from "@/assets/caribbean-dream-beach.jpg";
import caribbeanSnorkeling from "@/assets/caribbean-snorkeling.jpg";
import caribbeanCulture from "@/assets/caribbean-culture.jpg";
import caribbeanFood from "@/assets/caribbean-food.jpg";

const WhyCruiseCaribe = () => {
  const { ref, isVisible } = useScrollAnimation();

  const reasons = [
    {
      icon: Waves,
      title: "Playas de ensueño",
      description: "El Caribe es sinónimo de arena blanca, aguas cálidas y un sol eterno. Las playas de Bahamas, Jamaica o Aruba están consideradas entre las más hermosas del mundo.",
      alt: "playas del Caribe con aguas turquesas",
      image: caribbeanBeach
    },
    {
      icon: Palmtree,
      title: "Aventura natural",
      description: "Haz snorkel en arrecifes llenos de vida, explora manglares, navega hacia barcos hundidos o adéntrate en la selva tropical.",
      alt: "vida marina en arrecife del Caribe",
      image: caribbeanSnorkeling
    },
    {
      icon: Music,
      title: "Cultura vibrante",
      description: "Ritmos afrocaribeños, mercados locales, artesanías y festivales.",
      alt: "puerto colorido del Caribe",
      image: caribbeanCulture
    },
    {
      icon: UtensilsCrossed,
      title: "Gastronomía memorable",
      description: "Jerk jamaiquino, pescados frescos, coco, plátano y especias tradicionales.",
      alt: "gastronomía caribeña típica",
      image: caribbeanFood
    }
  ];

  return (
    <section 
      ref={ref} 
      className={`relative bg-primary transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <WaveTransition />
      <div className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white text-left md:text-center mb-12 md:mb-16">
            ¿Por qué hacer un crucero por el Caribe?
          </h2>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="asymmetric-card hover-scale bg-white overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={reason.image} 
                    alt={reason.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-primary flex-1">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed text-left">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-[calc(100vw-2rem)] mx-auto">
            <CarouselContent>
                {reasons.map((reason, index) => (
                <CarouselItem key={index}>
                  <Card className="asymmetric-card bg-white overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={reason.image} 
                        alt={reason.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <reason.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-display font-bold text-primary flex-1">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed text-left">
                        {reason.description}
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
      </div>
    </section>
  );
};

export default WhyCruiseCaribe;
