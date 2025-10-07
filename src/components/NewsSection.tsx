import { Calendar } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

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
      excerpt: "Nuevas experiencias agregadas a una colección sin precedentes de colaboradores famosos a bordo del Sun Princess"
    }
  ];

  return (
    <section id="novedades" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">
          Novedades Princess
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="asymmetric-card overflow-hidden bg-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  {article.title}
                </h3>
                <p className="text-muted-foreground">{article.excerpt}</p>
                <button className="text-accent font-semibold hover:underline">
                  Leer más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
