import { Search, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("2");

  const handleSearch = () => {
    console.log("Buscando crucero:", { destination, date, passengers });
  };

  return (
    <div className="search-card w-full max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6 text-center">
        Encuentra tu Crucero Ideal
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Destino
          </label>
          <Input
            placeholder="Caribe, Mediterráneo..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border-primary/20 focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Fecha de Salida
          </label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-primary/20 focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            Pasajeros
          </label>
          <Input
            type="number"
            min="1"
            max="10"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="border-primary/20 focus:border-primary"
          />
        </div>
        
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="cta-button-accent w-full flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Buscar
          </button>
        </div>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>🎁 <span className="font-semibold text-accent">Promoción Especial:</span> 20% de descuento en cruceros seleccionados</p>
      </div>
    </div>
  );
};

export default SearchBar;
