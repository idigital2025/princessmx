import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logoPrincess from "@/assets/logo-princess.svg";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logoPrincess} alt="Princess Cruises" className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Discover Cruises, somos representante oficial de Princess Cruises en México.
            </p>
            <div className="text-primary-foreground/80 text-sm">
              <p className="font-semibold mb-1">Horario de atención</p>
              <p>Lunes a Viernes 08:00 – 20:00 hrs.</p>
              <p>Domingos y Feriados 08:00 – 16:00 hrs.</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#destinos" className="text-primary-foreground/80 hover:text-accent transition-colors">Destinos</a></li>
              <li><a href="#promociones" className="text-primary-foreground/80 hover:text-accent transition-colors">Promociones</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4 text-accent" />
                <span>+52 55 8526 3163</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4 text-accent" />
                <span>contacto@princesscruises.mx</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span>123 Ocean Drive, Miami, FL 33139</span>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; 2025 Princess Cruises México. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
