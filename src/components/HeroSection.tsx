import AdvancedSearchBar from "./AdvancedSearchBar";
import heroImage from "@/assets/hero-cruise.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Crucero de lujo navegando en aguas cristalinas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 flex flex-col justify-between h-full">
        {/* Promo Banner */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block bg-accent/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <p className="text-accent-foreground font-bold text-sm md:text-base uppercase tracking-wider">
              ⚓ Oferta Limitada - Hasta 30% de Descuento
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg">
            Navega Hacia Tus Sueños
          </h1>
          <p className="text-xl md:text-3xl text-white/95 max-w-3xl mx-auto drop-shadow-md mb-8">
            Descubre destinos increíbles con Princess Cruises
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="animate-fade-in mt-auto" style={{ animationDelay: "0.2s" }}>
          <AdvancedSearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
