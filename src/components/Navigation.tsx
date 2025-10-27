import { UserRound, Menu, PhoneCall, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoPrincess from "@/assets/logo-princess.svg";
import argentinaFlag from "@/assets/argentina-flag.svg";
import brasilFlag from "@/assets/brasil-flag.svg";
import chileFlag from "@/assets/chile-flag.svg";
import colombiaFlag from "@/assets/colombia-flag.svg";
import mexicoFlag from "@/assets/mexico-flag.svg";
import uruguayFlag from "@/assets/uruguay-flag.svg";
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
            <img src={logoPrincess} alt="Princess Cruises" className="h-8 md:h-10 w-auto md:scale-100 scale-[1.15]" />
          </div>
          <div className="flex items-center gap-3 relative z-10 py-3">
            <img src={logoPrincess} alt="Princess Cruises" className="h-8 md:h-10 w-auto opacity-0 md:scale-100 scale-[1.15]" />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-lg md:text-xl text-primary py-3 px-4 md:px-8 font-serif h-full">
          <Link to="/" className="hover:text-primary transition-colors font-semibold relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</Link>
          
          <DropdownMenu open={isDestinosOpen} onOpenChange={setIsDestinosOpen}>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors outline-none font-semibold relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Destinos <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white z-50">
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/destinos/alaska" className="w-full">Alaska</Link>
              </DropdownMenuItem>
              {destinos.slice(1).map((destino) => (
                <DropdownMenuItem key={destino} className="cursor-pointer">
                  {destino}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/promociones" className="hover:text-primary transition-colors font-semibold relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Promociones</Link>
          <Link to="/novedades" className="hover:text-primary transition-colors font-semibold relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Novedades</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 px-4 h-10 text-sm font-semibold text-foreground hover:text-accent transition-colors border-2 border-accent hover:border-primary rounded-full">
            <UserRound className="w-4 h-4" />
            <span className="uppercase">Sesión Agencias</span>
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="cta-button-accent px-4 py-2 text-sm font-semibold flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              Ventas
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-white shadow-lg z-50">
              <DropdownMenuItem>
                <a href="tel:+525585263163" className="flex items-center gap-3 w-full py-2">
                  <img src={mexicoFlag} alt="México" className="w-5 h-5 object-contain flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">México</span>
                    <span className="text-xs text-muted-foreground">+52 55 8526 3163</span>
                  </div>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="tel:+5411527416000" className="flex items-center gap-3 w-full py-2">
                  <img src={argentinaFlag} alt="Argentina" className="w-5 h-5 object-contain flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">Argentina</span>
                    <span className="text-xs text-muted-foreground">+ 54 11 5274 1600</span>
                  </div>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="tel:+56225830338" className="flex items-center gap-3 w-full py-2">
                  <img src={chileFlag} alt="Chile" className="w-5 h-5 object-contain flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">Chile</span>
                    <span className="text-xs text-muted-foreground">+ 56 2 2583 0338</span>
                  </div>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="tel:+5760191846000" className="flex items-center gap-3 w-full py-2">
                  <img src={colombiaFlag} alt="Colombia" className="w-5 h-5 object-contain flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">Colombia</span>
                    <span className="text-xs text-muted-foreground">+57 601 9184 600</span>
                  </div>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="tel:+1140630881" className="flex items-center gap-3 w-full py-2">
                  <img src={brasilFlag} alt="Brasil" className="w-5 h-5 object-contain flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">Brasil</span>
                    <span className="text-xs text-muted-foreground">+11 4063 0881</span>
                  </div>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="tel:+59894401928" className="flex items-center gap-3 w-full py-2">
                  <img src={uruguayFlag} alt="Uruguay" className="w-5 h-5 object-contain flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">Uruguay</span>
                    <span className="text-xs text-muted-foreground">+598 9440 1928</span>
                  </div>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="border-t mt-1 pt-2">
                <a href="https://wa.me/" className="flex items-center gap-3 w-full py-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <PhoneCall className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">Whatsapp</span>
                    <span className="text-xs text-muted-foreground">Contáctanos</span>
                  </div>
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
                <Menu className="w-8 h-8" />
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
                    <Link 
                      to="/destinos/alaska" 
                      className="text-base hover:text-accent transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Alaska
                    </Link>
                    {destinos.slice(1).map((destino) => (
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
