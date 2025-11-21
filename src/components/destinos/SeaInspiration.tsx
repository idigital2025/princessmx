import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import cruiseCaribbean from "@/assets/cruise-caribbean.jpg";

const SeaInspiration = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 bg-muted/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary text-center mb-12 md:mb-16">
          Inspiración desde el mar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="aspect-video md:aspect-square overflow-hidden rounded-lg shadow-elegant">
            <img 
              src={cruiseCaribbean} 
              alt="crucero Princess navegando por el Caribe"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video md:aspect-square overflow-hidden rounded-lg shadow-elegant">
            <img 
              src={cruiseCaribbean} 
              alt="puesta de sol caribeña desde un barco"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video md:aspect-square overflow-hidden rounded-lg shadow-elegant md:col-span-2">
            <img 
              src={cruiseCaribbean} 
              alt="isla tropical del Caribe vista desde el mar"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeaInspiration;
