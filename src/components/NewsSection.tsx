import { Calendar } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NewsSection = () => {
  const articles = [
    {
      title: "Rail & Sail: Princess + Brightline",
      image: blog1,
      date: "Abril 10, 2024",
      excerpt: "Ofreciendo transporte asequible y conveniente y servicio de equipaje exprés para huéspedes que naveguen desde puertos de Florida"
    },
    {
      title: "Sun Princess mejora la experiencia de compras a bordo",
      image: blog2,
      date: "Febrero 28, 2024",
      excerpt: "Las tiendas de Princess ofrecen una experiencia minorista premium en el mar con Chanel, TAG Heuer, Breitling, Shaun Leane y más"
    },
    {
      title: "Más experiencias a bordo del nuevo Sun Princess",
      image: blog3,
      date: "Febrero 28, 2024",
      excerpt: "Nuevas agregadas a una colección sin precedentes de colaboradores famosos a bordo del Sun Princess"
    }
  ];

  return (
    <section id="novedades" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-12 text-center">
          Novedades Princess
        </h2>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {articles.map((article, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="asymmetric-card overflow-hidden bg-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer group h-full">
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-4 md:p-6 space-y-2 md:space-y-3">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-foreground">
                      {article.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">{article.excerpt}</p>
                    <button className="text-accent font-semibold hover:underline text-sm md:text-base">
                      Leer más →
                    </button>
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

export default NewsSection;
