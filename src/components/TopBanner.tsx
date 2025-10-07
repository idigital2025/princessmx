import { Mail, UserCircle, PhoneCall, HelpCircle } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-xs">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-left">
          Operated by Discover Cruises. Princess Cruises trusted partner since 2004.
        </p>
        
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
          <a href="mailto:contacto@princesscruises.mx" className="flex items-center gap-1 hover:text-accent transition-colors">
            <Mail className="w-3 h-3 fill-white" />
            <span>contacto@princesscruises.mx</span>
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-accent transition-colors">
            <UserCircle className="w-3 h-3 fill-white" />
            <span>Sesión Agencia</span>
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-accent transition-colors">
            <HelpCircle className="w-3 h-3 fill-white" />
            <span>Ayuda</span>
          </a>
          <a href="tel:+525585263163" className="flex items-center gap-1 hover:text-accent transition-colors">
            <PhoneCall className="w-3 h-3 fill-white" />
            <span>+52 55 8526-3163</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
