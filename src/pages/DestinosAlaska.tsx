import { useState } from "react";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AlaskaSearchFilters from "@/components/AlaskaSearchFilters";
import CruiseResultCard from "@/components/CruiseResultCard";
import { Ship } from "lucide-react";
import alaskaHero from "@/assets/destination-alaska.jpg";

// Sample cruise data
const cruiseResults = [
  {
    id: 1,
    route: "Ketchikan",
    departure: "Vancouver, Canada",
    arrival: "Vancouver, Canada",
    stops: ["Ketchikan"],
    duration: "7 días / 6 noches",
    dates: "Mayo 2025",
    priceFrom: 550,
    prices: {
      interior: 550,
      exterior: 600,
      balcony: 750,
      suite: 950
    },
    ship: "Island Princess"
  },
  {
    id: 2,
    route: "Ketchikan, Juneau, Glacier Bay Park, Icy Strait Point, College",
    departure: "Vancouver, Canada",
    arrival: "Whittier, Estados Unidos",
    stops: ["Ketchikan", "Juneau", "Glacier Bay Park", "Icy Strait Point", "College"],
    duration: "7 días / 6 noches",
    dates: "Junio 2025",
    priceFrom: 674,
    prices: {
      interior: 674,
      exterior: 842,
      balcony: 1520,
      suite: 1805
    },
    ship: "Discovery Princess"
  },
  {
    id: 3,
    route: "Ketchikan, Juneau, Skagway, Glacier Bay Park, College",
    departure: "Vancouver, Canada",
    arrival: "Whittier, Estados Unidos",
    stops: ["Ketchikan", "Juneau", "Skagway", "Glacier Bay Park", "College"],
    duration: "7 días / 6 noches",
    dates: "Julio 2025",
    priceFrom: 734,
    prices: {
      interior: 734,
      exterior: 874,
      balcony: 1719,
      suite: 1944
    },
    ship: "Royal Princess"
  },
  {
    id: 4,
    route: "Hubbard, Glacier Bay Park, Skagway, Juneau, Ketchikan",
    departure: "Whittier, Estados Unidos",
    arrival: "Vancouver, Canada",
    stops: ["Hubbard", "Glacier Bay Park", "Skagway", "Juneau", "Ketchikan"],
    duration: "7 días / 6 noches",
    dates: "Agosto 2025",
    priceFrom: 744,
    prices: {
      interior: 744,
      exterior: 869,
      balcony: 2269,
      suite: 2824
    },
    ship: "Crown Princess"
  },
  {
    id: 5,
    route: "Ketchikan, Endicott Arm y Dawes Glacier, Juneau, Skagway",
    departure: "Vancouver, Canada",
    arrival: "Vancouver, Canada",
    stops: ["Ketchikan", "Endicott Arm y Dawes Glacier", "Juneau", "Skagway"],
    duration: "7 días / 6 noches",
    dates: "Septiembre 2025",
    priceFrom: 774,
    prices: {
      interior: 774,
      exterior: 1056,
      balcony: 1449,
      suite: 1874
    },
    ship: "Ruby Princess"
  }
];

const DestinosAlaska = () => {
  const [filteredResults, setFilteredResults] = useState(cruiseResults);

  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      
      {/* Hero Header */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={alaskaHero}
          alt="Alaska Cruises"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <Ship className="w-16 h-16 mb-4" strokeWidth={1.5} />
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-center">
            Destinos Alaska
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl opacity-95">
            Descubre la belleza natural de Alaska en crucero
          </p>
        </div>
      </section>

      {/* Search Filters */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <AlaskaSearchFilters />
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h2 className="text-3xl font-display font-bold text-primary">
            {filteredResults.length} resultados encontrados
          </h2>
          <div className="flex gap-2 items-center text-sm">
            <span className="font-semibold text-primary">Ordenar por:</span>
            <select className="bg-white border-2 border-primary/20 rounded-xl px-4 py-2 text-foreground font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
              <option>Recomendado</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
              <option>Duración</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {filteredResults.map((cruise) => (
            <CruiseResultCard key={cruise.id} cruise={cruise} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="px-3 py-2 rounded-xl border-2 border-primary/20 hover:bg-primary hover:text-white transition-all font-bold">
            ««
          </button>
          <button className="px-3 py-2 rounded-xl border-2 border-primary/20 hover:bg-primary hover:text-white transition-all font-bold">
            «
          </button>
          <button className="px-5 py-2 rounded-xl bg-accent text-white font-bold shadow-md">
            1
          </button>
          <button className="px-5 py-2 rounded-xl border-2 border-primary/20 hover:bg-primary hover:text-white transition-all font-bold">
            2
          </button>
          <button className="px-5 py-2 rounded-xl border-2 border-primary/20 hover:bg-primary hover:text-white transition-all font-bold">
            3
          </button>
          <button className="px-5 py-2 rounded-xl border-2 border-primary/20 hover:bg-primary hover:text-white transition-all font-bold">
            4
          </button>
          <button className="px-3 py-2 rounded-xl border-2 border-primary/20 hover:bg-primary hover:text-white transition-all font-bold">
            »
          </button>
          <button className="px-3 py-2 rounded-xl border-2 border-primary/20 hover:bg-primary hover:text-white transition-all font-bold">
            »»
          </button>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6 font-medium">
          Mostrando de 1 a 5
        </p>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default DestinosAlaska;
