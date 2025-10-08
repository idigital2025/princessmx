import { useState } from "react";
import { Search, MapPin, Calendar, Ship, Users, ArrowRight, DollarSign, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";

const AlaskaSearchFilters = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="bg-card rounded-2xl shadow-elegant p-6 md:p-8">
      {/* Main Search Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Duration */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Duración
          </label>
          <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-primary transition-all">
            <option>Cualquier duración</option>
            <option>3-5 días</option>
            <option>6-8 días</option>
            <option>9-12 días</option>
            <option>13+ días</option>
          </select>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Fecha
          </label>
          <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-primary transition-all">
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
          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Ship className="w-4 h-4" />
            Barco
          </label>
          <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-primary transition-all">
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
          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Users className="w-4 h-4" />
            Huéspedes
          </label>
          <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-primary transition-all">
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
          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Salida
          </label>
          <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-primary transition-all">
            <option>Cualquier puerto</option>
            <option>Vancouver, Canada</option>
            <option>Whittier, Estados Unidos</option>
            <option>Seattle, Estados Unidos</option>
          </select>
        </div>

        {/* Arrival Port */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Llegada
          </label>
          <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-primary transition-all">
            <option>Cualquier puerto</option>
            <option>Vancouver, Canada</option>
            <option>Whittier, Estados Unidos</option>
            <option>Seattle, Estados Unidos</option>
          </select>
        </div>

        {/* Pass Through */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Pasar por
          </label>
          <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-primary transition-all">
            <option>Cualquier puerto</option>
            <option>Ketchikan</option>
            <option>Juneau</option>
            <option>Skagway</option>
            <option>Glacier Bay</option>
          </select>
        </div>
      </div>

      {/* Advanced Filters Toggle */}
      <div className="border-t border-border pt-4">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-primary font-medium hover:underline flex items-center gap-2"
        >
          {showAdvanced ? "Ocultar filtros avanzados" : "Mostrar filtros avanzados"}
          <ArrowRight className={`w-4 h-4 transition-transform ${showAdvanced ? "rotate-90" : ""}`} />
        </button>

        {showAdvanced && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {/* Cabin Type */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Bed className="w-4 h-4" />
                Tipo de cabina
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Interior</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Exterior</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Balcón</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Suite</span>
                </label>
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Precio
              </label>
              <div className="space-y-2">
                <input
                  type="number"
                  placeholder="Desde US$"
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm text-foreground"
                />
                <input
                  type="number"
                  placeholder="Hasta US$"
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm text-foreground"
                />
              </div>
            </div>

            {/* Price Per */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Precio por
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="priceBy" value="guest" defaultChecked />
                  <span className="text-sm">Huésped</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="priceBy" value="cabin" />
                  <span className="text-sm">Cabina</span>
                </label>
              </div>
            </div>

            {/* Taxes */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Tasas
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-sm">Incluir impuestos</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-6">
        <Button size="lg" className="cta-button text-lg px-12 py-6">
          <Search className="w-5 h-5 mr-2" />
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default AlaskaSearchFilters;
