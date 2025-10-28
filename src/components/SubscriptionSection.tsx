import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const SubscriptionSection = () => {
  const [email, setEmail] = useState("");
  const { ref, isVisible } = useScrollAnimation();

  const handleSubscribe = () => {
    console.log("Suscripción:", email);
  };

  return (
    <section ref={ref} className={`py-16 px-4 bg-gradient-ocean text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto max-w-4xl text-center">
        <Mail className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6" />
        <h2 className="text-2xl md:text-5xl font-display font-bold mb-3 md:mb-4">
          ¡Suscríbete y recibe ofertas especiales!
        </h2>
        <p className="text-base md:text-xl mb-6 md:mb-8">Quiero suscribirme</p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white text-foreground"
          />
          <button onClick={handleSubscribe} className="cta-button-accent">
            Suscribirse
          </button>
        </div>
        
        <div className="border-t border-white/30 pt-6 md:pt-8 mt-6 md:mt-8">
          <p className="text-sm md:text-lg mb-2">¿Eres agente de viajes? <a href="https://agencias.princesscruises.mx/auth/login" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Regístrate aquí!</a></p>
          <p className="text-xs md:text-sm opacity-90">Boletín exclusivo para profesionales</p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
