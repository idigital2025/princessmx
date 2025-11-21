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
      
      <div className="relative z-10 container mx-auto px-4 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 md:mb-8 animate-fade-in text-left">
          Vive el Caribe<br />con Princess Cruises
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
