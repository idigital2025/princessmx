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
          {/* H1 Title */}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 drop-shadow-lg">
            Viajes inolvidables. Ahorros inolvidables.
          </h1>
          
          {/* Offer Columns */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
            {/* Left Column - Discount */}
            <div className="text-center">
              <p className="text-white/80 text-sm uppercase tracking-wider mb-2">Hasta</p>
              <p className="text-7xl md:text-8xl font-display font-bold text-white leading-none mb-2">40%</p>
              <p className="text-white text-lg font-semibold uppercase">OFF</p>
            </div>
            
            {/* Separator */}
            <div className="text-white text-5xl font-light hidden md:block">+</div>
            
            {/* Right Column - Cash Credit */}
            <div className="text-center">
              <p className="text-white/80 text-sm uppercase tracking-wider mb-2">Hasta</p>
              <p className="text-7xl md:text-8xl font-display font-bold text-white leading-none mb-2">$200</p>
              <p className="text-white text-lg font-semibold uppercase">En Dctos Instantáneos</p>
            </div>
          </div>
          
          {/* Additional Benefits Box */}
          <div className="inline-block bg-primary/90 backdrop-blur-sm px-8 py-4 rounded-lg mb-4">
            <p className="text-white font-bold text-lg md:text-xl mb-1">
              Beneficios extras para 3er y 4to pasajero:
            </p>
            <p className="text-white text-base md:text-lg">
              Hasta 50% OFF y depósito $0
            </p>
          </div>
          
          {/* Disclaimer */}
          <p className="text-white/80 text-sm mb-8 max-w-2xl mx-auto">
            En salidas seleccionadas 2026 y 2027. Aplica para todas las categorías.
          </p>
          
          {/* CTA Button */}
          <button className="cta-button-accent text-lg px-12 py-4">
            Reserva ahora
          </button>
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
