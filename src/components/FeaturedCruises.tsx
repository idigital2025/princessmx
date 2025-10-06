import CruiseCard from "./CruiseCard";
import caribbeanImage from "@/assets/cruise-caribbean.jpg";
import mediterraneanImage from "@/assets/cruise-mediterranean.jpg";
import alaskaImage from "@/assets/cruise-alaska.jpg";

const FeaturedCruises = () => {
  const cruises = [
    {
      title: "Paraíso Caribeño",
      destination: "Caribe Oriental - 7 islas",
      duration: "7 noches",
      price: "desde $899",
      image: caribbeanImage,
      rating: 5,
      passengers: "Hasta 4,000"
    },
    {
      title: "Mediterráneo Clásico",
      destination: "Grecia, Italia, España",
      duration: "10 noches",
      price: "desde $1,299",
      image: mediterraneanImage,
      rating: 5,
      passengers: "Hasta 3,500"
    },
    {
      title: "Aventura en Alaska",
      destination: "Glaciares y Naturaleza",
      duration: "8 noches",
      price: "desde $1,099",
      image: alaskaImage,
      rating: 5,
      passengers: "Hasta 2,500"
    }
  ];

  return (
    <section id="destinos" className="py-16 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Salidas seleccionadas para ti
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora nuestros cruceros más populares y descubre el viaje perfecto para ti
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cruises.map((cruise, index) => (
            <CruiseCard key={index} {...cruise} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="cta-button-primary">
            Ver Todos los Cruceros
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCruises;
