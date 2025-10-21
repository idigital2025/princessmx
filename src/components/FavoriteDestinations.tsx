import alaskaImg from "@/assets/destination-alaska.jpg";
import caribbeanImg from "@/assets/destination-caribbean.jpg";
import mediterraneanImg from "@/assets/destination-mediterranean.jpg";
import hawaiiImg from "@/assets/destination-hawaii.jpg";
import japanImg from "@/assets/destination-japan.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FavoriteDestinations = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const destinations = [
    { name: "Alaska", image: alaskaImg },
    { name: "Caribe", image: caribbeanImg },
    { name: "Mediterráneo", image: mediterraneanImg },
    { name: "Hawai", image: hawaiiImg },
    { name: "Japón", image: japanImg }
  ];

  return (
    <section ref={ref} className={`py-16 px-4 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">
          Destinos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="asymmetric-card overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-4">
                  <h3 className="text-2xl font-display font-bold text-white">
                    {destination.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteDestinations;
