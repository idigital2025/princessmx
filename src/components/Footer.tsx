import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logoDiscoverCruises from "@/assets/logo-discover-cruises.svg";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logoDiscoverCruises} alt="Discover Cruises" className="h-8 w-auto" />
            </div>
            <div className="text-primary-foreground/80 text-xs md:text-sm">
              <p className="font-semibold mb-1">Horario de atención</p>
              <p>Lunes a Viernes 09:00 – 18:00 hrs.</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#destinos" className="text-primary-foreground/80 hover:text-accent transition-colors">Destinos</a></li>
              <li><a href="/promociones" className="text-primary-foreground/80 hover:text-accent transition-colors">Promociones</a></li>
              <li><a href="/novedades" className="text-primary-foreground/80 hover:text-accent transition-colors">Novedades</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 text-primary" />
                </div>
                <a href="tel:+525585263163" className="hover:text-accent transition-colors">+52 55 8526-3163</a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3 h-3 text-primary" />
                </div>
                <a href="mailto:contacto@princesscruises.mx" className="hover:text-accent transition-colors">contacto@princesscruises.mx</a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3 text-primary" />
                </div>
                <span>Av. Insurgentes Sur 1602, CDMX, México</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3 h-3 text-primary" />
                </div>
                <a href="mailto:citas@discovercruises.mx" className="hover:text-accent transition-colors">Programar una cita</a>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com/discovercruisesmx" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a href="https://instagram.com/discovercruisesmx" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a href="https://youtube.com/@discovercruisesmx" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                <Youtube className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70 text-xs md:text-sm">
          <p>&copy; 2025 Discover Cruises. Representante oficial de Princess Cruises en México. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
