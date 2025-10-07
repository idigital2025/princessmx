import { Search, MapPin, Calendar, Anchor, Clock } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdvancedSearchBar = () => {
  const [destination, setDestination] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [port, setPort] = useState("");
  const [duration, setDuration] = useState("");

  const handleSearch = () => {
    console.log("Buscando crucero:", { destination, monthYear, port, duration });
  };

  return (
    <div className="search-card w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
            <MapPin className="w-4 h-4" />
            Destino
          </label>
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona destino" />
            </SelectTrigger>
          <SelectContent>
            <SelectItem value="caribe">Caribe</SelectItem>
            <SelectItem value="mediterraneo">Mediterráneo</SelectItem>
            <SelectItem value="alaska">Alaska</SelectItem>
            <SelectItem value="asia">Asia / Japón</SelectItem>
          </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
            <Calendar className="w-4 h-4" />
            Mes/Año
          </label>
          <Select value={monthYear} onValueChange={setMonthYear}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona fecha" />
            </SelectTrigger>
          <SelectContent>
            <SelectItem value="10/2025">10/2025</SelectItem>
            <SelectItem value="11/2025">11/2025</SelectItem>
            <SelectItem value="12/2025">12/2025</SelectItem>
            <SelectItem value="01/2026">01/2026</SelectItem>
            <SelectItem value="02/2026">02/2026</SelectItem>
            <SelectItem value="03/2026">03/2026</SelectItem>
            <SelectItem value="04/2026">04/2026</SelectItem>
            <SelectItem value="05/2026">05/2026</SelectItem>
            <SelectItem value="06/2026">06/2026</SelectItem>
            <SelectItem value="07/2026">07/2026</SelectItem>
            <SelectItem value="08/2026">08/2026</SelectItem>
            <SelectItem value="09/2026">09/2026</SelectItem>
            <SelectItem value="10/2026">10/2026</SelectItem>
            <SelectItem value="11/2026">11/2026</SelectItem>
            <SelectItem value="12/2026">12/2026</SelectItem>
            <SelectItem value="01/2027">01/2027</SelectItem>
            <SelectItem value="02/2027">02/2027</SelectItem>
            <SelectItem value="03/2027">03/2027</SelectItem>
            <SelectItem value="04/2027">04/2027</SelectItem>
            <SelectItem value="05/2027">05/2027</SelectItem>
            <SelectItem value="06/2027">06/2027</SelectItem>
            <SelectItem value="07/2027">07/2027</SelectItem>
            <SelectItem value="08/2027">08/2027</SelectItem>
            <SelectItem value="09/2027">09/2027</SelectItem>
            <SelectItem value="10/2027">10/2027</SelectItem>
            <SelectItem value="11/2027">11/2027</SelectItem>
          </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
            <Anchor className="w-4 h-4" />
            Puerto de salida
          </label>
          <Select value={port} onValueChange={setPort}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona puerto" />
            </SelectTrigger>
          <SelectContent>
            <SelectItem value="sudafrica">Sudáfrica</SelectItem>
            <SelectItem value="argentina">Argentina</SelectItem>
            <SelectItem value="australia">Australia</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="chile">Chile</SelectItem>
            <SelectItem value="china">China</SelectItem>
            <SelectItem value="dinamarca">Dinamarca</SelectItem>
            <SelectItem value="espana">España</SelectItem>
            <SelectItem value="usa">Estados Unidos</SelectItem>
            <SelectItem value="grecia">Grécia</SelectItem>
            <SelectItem value="inglaterra">Inglaterra</SelectItem>
            <SelectItem value="italia">Italia</SelectItem>
            <SelectItem value="japon">Japón</SelectItem>
            <SelectItem value="nuevazelanda">Nueva Zelanda</SelectItem>
            <SelectItem value="puertorico">Puerto Rico</SelectItem>
            <SelectItem value="singapur">Singapur</SelectItem>
            <SelectItem value="turquia">Turquía</SelectItem>
          </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
            <Clock className="w-4 h-4" />
            Duración
          </label>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona duración" />
            </SelectTrigger>
          <SelectContent>
            <SelectItem value="3-5">3 - 5 noches</SelectItem>
            <SelectItem value="6-11">6 - 11 noches</SelectItem>
            <SelectItem value="12plus">12 o más</SelectItem>
          </SelectContent>
          </Select>
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
      
      <div className="text-center">
        <button className="text-sm text-primary underline hover:text-accent transition-colors">
          Búsqueda Avanzada
        </button>
      </div>
    </div>
  );
};

export default AdvancedSearchBar;
