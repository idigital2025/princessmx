import { MapPin, Calendar, Ship, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface CruiseCardProps {
  title: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  rating: number;
  ship: string;
}

const CruiseCard = ({ title, destination, duration, price, image, rating, ship }: CruiseCardProps) => {
  return (
    <div className="cruise-card-shape overflow-hidden bg-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white text-primary px-4 py-2 rounded-full font-bold">
          {price}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-display font-bold text-primary mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">{destination}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ship className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm">{ship}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
              />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">({rating}.0)</span>
          </div>
          
          <button className="cta-button-accent text-sm px-6 py-2">
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default CruiseCard;
