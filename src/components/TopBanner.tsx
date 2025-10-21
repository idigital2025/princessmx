import { MailIcon, UserRound, PhoneCall, CircleHelp, Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TopBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-xs">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[8px] md:text-xs text-center md:text-left whitespace-nowrap">
          Operated by Discover Cruises. Princess Cruises trusted partner since 2004.
        </p>
        
        <div className="hidden md:flex items-center gap-4 flex-wrap justify-center md:justify-end">
          <a href="mailto:contacto@princesscruises.mx" className="flex items-center gap-1 hover:text-accent transition-colors">
            <MailIcon className="w-4 h-4" strokeWidth={2.5} />
            <span className="hidden md:inline">contacto@princesscruises.mx</span>
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-accent transition-colors">
            <CircleHelp className="w-4 h-4" strokeWidth={2.5} />
            <span className="hidden md:inline">Ayuda</span>
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-accent transition-colors focus:outline-none">
              <Globe className="w-4 h-4" strokeWidth={2.5} />
              <span className="hidden md:inline">ES</span>
              <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem>Español (ES)</DropdownMenuItem>
              <DropdownMenuItem>Português (PT-BR)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
