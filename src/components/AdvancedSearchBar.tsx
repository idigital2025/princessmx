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
            <SelectItem value="2025-01">Enero 2025</SelectItem>
            <SelectItem value="2025-02">Febrero 2025</SelectItem>
            <SelectItem value="2025-03">Marzo 2025</SelectItem>
            <SelectItem value="2025-04">Abril 2025</SelectItem>
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
            <SelectItem value="miami">Miami</SelectItem>
            <SelectItem value="barcelona">Barcelona</SelectItem>
            <SelectItem value="venice">Venecia</SelectItem>
            <SelectItem value="los-angeles">Los Ángeles</SelectItem>
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
            <SelectItem value="3-5">3-5 noches</SelectItem>
            <SelectItem value="6-9">6-9 noches</SelectItem>
            <SelectItem value="10-14">10-14 noches</SelectItem>
            <SelectItem value="15+">15+ noches</SelectItem>
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
