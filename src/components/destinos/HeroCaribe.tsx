import { Button } from "@/components/ui/button";
import heroCruise from "@/assets/cruise-caribbean.jpg";

const HeroCaribe = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroCruise})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 md:mb-8 animate-fade-in">
          Vive el Caribe con Princess Cruises
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="cta-button-primary">
            Descubre Caribe
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary">
            Ver cruceros disponibles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroCaribe;
