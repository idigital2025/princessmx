const HeroCaribe = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center overflow-hidden">
      {/* Caribbean Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/caribe-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/20"></div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-0 text-white max-w-7xl">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-6 md:mb-8 animate-fade-in text-left">
          Vive el Caribe<br />con Princess Cruises
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start animate-fade-in">
          <button 
            className="px-6 py-3 md:px-8 md:py-4 bg-accent text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-elegant text-sm md:text-base w-auto"
            onClick={() => {
              const section = document.getElementById('caribe-experience');
              section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Descubre Caribe
          </button>
          <a 
            href="https://reservas.princesscruises.mx/search?destinations=7&sortBy=Recommended_WithTax&priceByCabin=false&taxAndFeesIncluded=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 md:px-8 md:py-4 bg-background/10 text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 text-sm md:text-base w-auto"
          >
            Ver cruceros disponibles
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroCaribe;
