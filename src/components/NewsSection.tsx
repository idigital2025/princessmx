import { Calendar } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const NewsSection = () => {
  const articles = [
    {
      title: "Nuevas rutas para 2025",
      image: blog1,
      date: "15 Enero 2025",
      excerpt: "Descubre los emocionantes destinos que hemos agregado a nuestra flota para la próxima temporada."
    },
    {
      title: "Experiencia Culinaria Premium",
      image: blog2,
      date: "10 Enero 2025",
      excerpt: "Nuestros nuevos menús gourmet diseñados por chefs reconocidos internacionalmente."
    },
    {
      title: "Entretenimiento de Primer Nivel",
      image: blog3,
      date: "5 Enero 2025",
      excerpt: "Shows exclusivos y actividades que harán de tu viaje una experiencia inolvidable."
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
