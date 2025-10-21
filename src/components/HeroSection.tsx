import AdvancedSearchBar from "./AdvancedSearchBar";
import heroImage from "@/assets/hero-cruise-sunset.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-10 md:py-13 flex flex-col justify-between h-full">
        {/* Promo Banner */}
        <div className="text-center mb-4 md:mb-5 animate-fade-in">
          {/* H1 Title */}
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 drop-shadow-lg">
            Viajes inolvidables. Ahorros inolvidables.
          </h1>
          
          {/* Offer Columns */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-2">
            {/* Left Column - Discount */}
            <div className="text-center">
              <p className="text-white/80 text-sm uppercase tracking-wider mb-0.5">Hasta</p>
              <p className="text-7xl md:text-8xl font-display font-bold text-white leading-none mb-0.5">40%</p>
              <p className="text-white text-lg font-normal uppercase">OFF</p>
            </div>
            
            {/* Separator */}
            <div className="w-0.5 h-32 bg-white hidden md:block"></div>
            
            {/* Right Column - Cash Credit */}
            <div className="text-center">
              <p className="text-white/80 text-sm uppercase tracking-wider mb-0.5">Hasta</p>
              <p className="text-7xl md:text-8xl font-display font-bold text-white leading-none mb-0.5">$200</p>
              <p className="text-white text-lg font-normal uppercase">En Dctos Instantáneos</p>
            </div>
          </div>
          
          {/* Additional Benefits Box */}
          <div className="inline-block bg-primary/90 backdrop-blur-sm px-8 py-3 rounded-lg mb-2">
            <p className="text-white font-bold text-lg md:text-xl mb-1">
              Beneficios extras para 3er y 4to pasajero:
            </p>
            <p className="text-white text-base md:text-lg mb-2">
              Hasta 50% OFF y depósito $0
            </p>
            <p className="text-white/80 text-xs">
              En salidas seleccionadas 2026 y 2027. Aplica para todas las categorías.
            </p>
          </div>
          
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
