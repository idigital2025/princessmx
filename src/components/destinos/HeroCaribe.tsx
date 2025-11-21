const HeroCaribe = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center overflow-hidden">
      {/* Caribbean Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')" }}
      />
      <div className="absolute inset-0 bg-primary/20"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 md:mb-8 animate-fade-in text-left">
          Vive el Caribe con Princess Cruises
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in">
          <button className="cta-button-accent">
            Descubre Caribe
          </button>
          <button className="cta-button-outline">
            Ver cruceros disponibles
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCaribe;
