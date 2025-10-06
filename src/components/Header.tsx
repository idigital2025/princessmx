import { Ship, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Ship className="w-8 h-8" />
          <h1 className="text-2xl md:text-3xl font-display font-bold">Océano Azul</h1>
        </div>
        
        <nav className="flex items-center gap-6 text-sm md:text-base">
          <a href="#destinos" className="hover:text-accent transition-colors">Destinos</a>
          <a href="#promociones" className="hover:text-accent transition-colors">Promociones</a>
          <a href="#contacto" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">Contacto</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
