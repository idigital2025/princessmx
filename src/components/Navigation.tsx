import { Ship, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isDestinosOpen, setIsDestinosOpen] = useState(false);

  const destinos = [
    "Alaska",
    "Asia / Japón",
    "Caribe",
    "Mediterráneo",
    "Norte de Europa",
    "Sudamérica",
    "Canadá y Nueva Inglaterra",
    "Australia y Pacífico"
  ];

  return (
    <nav className="bg-white border-b border-border relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative">
        <div className="flex items-center relative h-full">
          <div className="bg-primary px-8 py-6 rounded-br-[3rem] absolute left-0 -ml-[100vw] pl-[100vw] top-0 bottom-0 flex items-center">
            <div className="flex items-center gap-3">
              <Ship className="w-8 h-8 text-white" />
              <h1 className="text-xl md:text-2xl font-display font-bold text-white">PRINCESS</h1>
            </div>
          </div>
          <div className="flex items-center gap-3 relative z-10 py-6">
            <Ship className="w-8 h-8 text-white opacity-0" />
            <h1 className="text-xl md:text-2xl font-display font-bold text-white opacity-0">PRINCESS</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-lg md:text-xl text-primary py-6 px-4 md:px-8 font-serif">
          <a href="#" className="hover:text-accent transition-colors">Home</a>
          
          <DropdownMenu open={isDestinosOpen} onOpenChange={setIsDestinosOpen}>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-accent transition-colors outline-none">
              Destinos <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white z-50">
              {destinos.map((destino) => (
                <DropdownMenuItem key={destino} className="cursor-pointer">
                  {destino}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a href="#promociones" className="hover:text-accent transition-colors">Promociones</a>
          <a href="#novedades" className="hover:text-accent transition-colors">Novedades</a>
          
          <button className="cta-button-outline flex items-center gap-2 !text-primary !border-accent hover:!bg-accent hover:!text-white">
            <Search className="w-4 h-4" />
            Buscar crucero
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
