import { Search, MapPin, Calendar, Anchor, Clock, Ship, Users } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AdvancedSearchBar = () => {
  const [destination, setDestination] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [port, setPort] = useState("");
  const [duration, setDuration] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  
  // Advanced search fields
  const [ship, setShip] = useState("");
  const [guests, setGuests] = useState("2");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [stopover, setStopover] = useState("");

  const handleSearch = () => {
    console.log("Buscando crucero:", { destination, monthYear, port, duration });
  };

  return (
    <div id="search-bar" className="search-card w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        <div>
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger className="w-full">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <SelectValue placeholder="Selecciona destino" />
              </div>
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
          <Select value={monthYear} onValueChange={setMonthYear}>
            <SelectTrigger className="w-full">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <SelectValue placeholder="Selecciona mes/año" />
              </div>
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
          <Select value={port} onValueChange={setPort}>
            <SelectTrigger className="w-full">
              <div className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-muted-foreground" />
                <SelectValue placeholder="Selecciona salida" />
              </div>
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
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="w-full">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <SelectValue placeholder="Selecciona duración" />
              </div>
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
            className="cta-button-accent w-full flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Buscar</span>
            <span className="sm:hidden">OK</span>
          </button>
        </div>
      </div>
      
      <div className="text-center">
        <Dialog open={advancedOpen} onOpenChange={setAdvancedOpen}>
          <DialogTrigger asChild>
            <button className="text-sm text-primary underline hover:text-accent transition-colors">
              Búsqueda Avanzada
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display text-primary">Búsqueda Avanzada</DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {/* Destinos */}
              <div>
                <label className="text-sm font-semibold text-primary mb-2 block">destinos</label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <SelectValue placeholder="Cualquier destino" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="cualquier">Cualquier destino</SelectItem>
                    <SelectItem value="caribe">Caribe</SelectItem>
                    <SelectItem value="mediterraneo">Mediterráneo</SelectItem>
                    <SelectItem value="alaska">Alaska</SelectItem>
                    <SelectItem value="asia">Asia / Japón</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Duración */}
              <div>
                <label className="text-sm font-semibold text-primary mb-2 block">duración</label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <SelectValue placeholder="Cualquier duración" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="cualquier">Cualquier duración</SelectItem>
                    <SelectItem value="3-5">3 - 5 noches</SelectItem>
                    <SelectItem value="6-11">6 - 11 noches</SelectItem>
                    <SelectItem value="12plus">12 o más</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Fecha */}
              <div>
                <label className="text-sm font-semibold text-primary mb-2 block">fecha</label>
                <Select value={monthYear} onValueChange={setMonthYear}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <SelectValue placeholder="Cualquier fecha" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="cualquier">Cualquier fecha</SelectItem>
                    <SelectItem value="10/2025">10/2025</SelectItem>
                    <SelectItem value="11/2025">11/2025</SelectItem>
                    <SelectItem value="12/2025">12/2025</SelectItem>
                    <SelectItem value="01/2026">01/2026</SelectItem>
                    <SelectItem value="02/2026">02/2026</SelectItem>
                    <SelectItem value="03/2026">03/2026</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Compañía o barco */}
              <div>
                <label className="text-sm font-semibold text-primary mb-2 block">compañía o barco</label>
                <Select value={ship} onValueChange={setShip}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-2">
                      <Ship className="w-4 h-4 text-muted-foreground" />
                      <SelectValue placeholder="Cualquier barco" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="cualquier">Cualquier barco</SelectItem>
                    <SelectItem value="majestic">Majestic Princess</SelectItem>
                    <SelectItem value="discovery">Discovery Princess</SelectItem>
                    <SelectItem value="enchanted">Enchanted Princess</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Huésped */}
              <div>
                <label className="text-sm font-semibold text-primary mb-2 block">huésped</label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <SelectValue placeholder="2 huéspedes" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="1">1 huésped</SelectItem>
                    <SelectItem value="2">2 huéspedes</SelectItem>
                    <SelectItem value="3">3 huéspedes</SelectItem>
                    <SelectItem value="4">4 huéspedes</SelectItem>
                    <SelectItem value="5">5+ huéspedes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Salida */}
              <div>
                <label className="text-sm font-semibold text-primary mb-2 block">salida</label>
                <Select value={departure} onValueChange={setDeparture}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-2">
                      <Anchor className="w-4 h-4 text-muted-foreground" />
                      <SelectValue placeholder="Cualquier puerto" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="cualquier">Cualquier puerto</SelectItem>
                    <SelectItem value="miami">Miami</SelectItem>
                    <SelectItem value="barcelona">Barcelona</SelectItem>
                    <SelectItem value="seattle">Seattle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Llegada */}
              <div>
                <label className="text-sm font-semibold text-primary mb-2 block">llegada</label>
                <Select value={arrival} onValueChange={setArrival}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-2">
                      <Anchor className="w-4 h-4 text-muted-foreground" />
                      <SelectValue placeholder="Cualquier puerto" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="cualquier">Cualquier puerto</SelectItem>
                    <SelectItem value="miami">Miami</SelectItem>
                    <SelectItem value="barcelona">Barcelona</SelectItem>
                    <SelectItem value="seattle">Seattle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pasar por */}
              <div>
                <label className="text-sm font-semibold text-primary mb-2 block">pasar por</label>
                <Select value={stopover} onValueChange={setStopover}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <SelectValue placeholder="Cualquier puerto" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="cualquier">Cualquier puerto</SelectItem>
                    <SelectItem value="cozumel">Cozumel</SelectItem>
                    <SelectItem value="nassau">Nassau</SelectItem>
                    <SelectItem value="santorini">Santorini</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setAdvancedOpen(false)}
                className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  handleSearch();
                  setAdvancedOpen(false);
                }}
                className="cta-button-accent flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Buscar
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdvancedSearchBar;
