import { useState } from "react";
import { Search, MapPin, Calendar, Ship, Users, ArrowRight, DollarSign, Bed } from "lucide-react";

const AlaskaSearchFilters = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-elegant p-6 md:p-8 border border-white/20">
      {/* Main Search Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Duration */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-primary flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Duración
          </label>
          <select className="w-full bg-white border-2 border-primary/20 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium">
            <option>Cualquier duración</option>
            <option>3-5 días</option>
            <option>6-8 días</option>
            <option>9-12 días</option>
            <option>13+ días</option>
          </select>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-primary flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Fecha
          </label>
          <select className="w-full bg-white border-2 border-primary/20 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium">
            <option>Cualquier fecha</option>
            <option>Mayo 2025</option>
            <option>Junio 2025</option>
            <option>Julio 2025</option>
            <option>Agosto 2025</option>
            <option>Septiembre 2025</option>
          </select>
        </div>

        {/* Ship */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-primary flex items-center gap-2">
            <Ship className="w-4 h-4" />
            Barco
          </label>
          <select className="w-full bg-white border-2 border-primary/20 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium">
            <option>Cualquier barco</option>
            <option>Island Princess</option>
            <option>Discovery Princess</option>
            <option>Royal Princess</option>
            <option>Crown Princess</option>
            <option>Ruby Princess</option>
          </select>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-primary flex items-center gap-2">
            <Users className="w-4 h-4" />
            Huéspedes
          </label>
          <select className="w-full bg-white border-2 border-primary/20 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium">
            <option>2 huéspedes</option>
            <option>1 huésped</option>
            <option>3 huéspedes</option>
            <option>4 huéspedes</option>
            <option>5+ huéspedes</option>
          </select>
        </div>
      </div>

      {/* Port Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Departure Port */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-primary flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Salida
          </label>
          <select className="w-full bg-white border-2 border-primary/20 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium">
            <option>Cualquier puerto</option>
            <option>Vancouver, Canada</option>
            <option>Whittier, Estados Unidos</option>
            <option>Seattle, Estados Unidos</option>
          </select>
        </div>

        {/* Arrival Port */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-primary flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Llegada
          </label>
          <select className="w-full bg-white border-2 border-primary/20 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium">
            <option>Cualquier puerto</option>
            <option>Vancouver, Canada</option>
            <option>Whittier, Estados Unidos</option>
            <option>Seattle, Estados Unidos</option>
          </select>
        </div>

        {/* Pass Through */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-primary flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Pasar por
          </label>
          <select className="w-full bg-white border-2 border-primary/20 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium">
            <option>Cualquier puerto</option>
            <option>Ketchikan</option>
            <option>Juneau</option>
            <option>Skagway</option>
            <option>Glacier Bay</option>
          </select>
        </div>
      </div>

      {/* Advanced Filters Toggle */}
      <div className="border-t border-primary/20 pt-4">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2"
        >
          {showAdvanced ? "Ocultar filtros avanzados" : "Mostrar filtros avanzados"}
          <ArrowRight className={`w-4 h-4 transition-transform ${showAdvanced ? "rotate-90" : ""}`} />
        </button>

        {showAdvanced && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 p-6 bg-primary/5 rounded-2xl">
            {/* Cabin Type */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-primary flex items-center gap-2">
                <Bed className="w-4 h-4" />
                Tipo de cabina
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-primary/30 text-accent focus:ring-accent" defaultChecked />
                  <span className="text-sm font-medium">Interior</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-primary/30 text-accent focus:ring-accent" defaultChecked />
                  <span className="text-sm font-medium">Exterior</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-primary/30 text-accent focus:ring-accent" defaultChecked />
                  <span className="text-sm font-medium">Balcón</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-primary/30 text-accent focus:ring-accent" defaultChecked />
                  <span className="text-sm font-medium">Suite</span>
                </label>
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Precio
              </label>
              <div className="space-y-2">
                <input
                  type="number"
                  placeholder="Desde US$"
                  className="w-full bg-white border-2 border-primary/20 rounded-xl px-4 py-2 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <input
                  type="number"
                  placeholder="Hasta US$"
                  className="w-full bg-white border-2 border-primary/20 rounded-xl px-4 py-2 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            {/* Price Per */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary">
                Precio por
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="priceBy" value="guest" className="text-accent focus:ring-accent" defaultChecked />
                  <span className="text-sm font-medium">Huésped</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="priceBy" value="cabin" className="text-accent focus:ring-accent" />
                  <span className="text-sm font-medium">Cabina</span>
                </label>
              </div>
            </div>

            {/* Taxes */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary">
                Tasas
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-primary/30 text-accent focus:ring-accent" defaultChecked />
                <span className="text-sm font-medium">Incluir impuestos</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-6">
        <button className="cta-button-accent text-lg px-12 py-4 flex items-center gap-3">
          <Search className="w-5 h-5" />
          Buscar
        </button>
      </div>
    </div>
  );
};

export default AlaskaSearchFilters;
