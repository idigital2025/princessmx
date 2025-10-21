import { UserRound, Menu, PhoneCall, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoPrincess from "@/assets/logo-princess.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isDestinosOpen, setIsDestinosOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="bg-white relative overflow-hidden">
      <div className="container mx-auto flex items-stretch justify-between py-0 relative">
        <div className="flex items-center relative h-full">
          <div className="bg-primary px-8 rounded-br-[3rem] absolute left-0 top-0 bottom-0 -ml-[100vw] pl-[100vw] flex items-center">
            <img src={logoPrincess} alt="Princess Cruises" className="h-8 md:h-10 w-auto" />
          </div>
          <div className="flex items-center gap-3 relative z-10 py-3">
            <img src={logoPrincess} alt="Princess Cruises" className="h-8 md:h-10 w-auto opacity-0" />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-lg md:text-xl text-primary py-3 px-4 md:px-8 font-serif h-full">
          <Link to="/" className="hover:text-accent transition-colors font-semibold">Home</Link>
          
          <DropdownMenu open={isDestinosOpen} onOpenChange={setIsDestinosOpen}>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-accent transition-colors outline-none font-semibold">
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
          
          <Link to="/promociones" className="hover:text-accent transition-colors font-semibold">Promociones</Link>
          <Link to="/novedades" className="hover:text-accent transition-colors font-semibold">Novedades</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary hover:text-accent transition-colors border border-primary hover:border-accent rounded-lg">
            <UserRound className="w-4 h-4" />
            Login Agencias
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="cta-button-accent px-4 py-2 text-sm font-semibold flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              Ventas
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <a href="tel:+525585263163" className="flex flex-col">
                  <span className="font-semibold">México</span>
                  <span className="text-xs">+52 55 8526-3163</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="tel:+5511999999999" className="flex flex-col">
                  <span className="font-semibold">Brasil</span>
                  <span className="text-xs">+55 11 9999-9999</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center py-3 px-4">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="text-primary font-display">Menú</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8 text-lg text-primary font-serif">
                <Link 
                  to="/" 
                  className="hover:text-accent transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-primary">Destinos</span>
                  <div className="flex flex-col gap-2 ml-4">
                    {destinos.map((destino) => (
                      <a 
                        key={destino} 
                        href="#" 
                        className="text-base hover:text-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {destino}
                      </a>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/promociones" 
                  className="hover:text-accent transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Promociones
                </Link>
                
                <Link 
                  to="/novedades" 
                  className="hover:text-accent transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Novedades
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
