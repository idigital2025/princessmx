import { Gift, Clock, Percent, CreditCard } from "lucide-react";

const PromoSection = () => {
  const benefits = [
    {
      icon: Percent,
      title: "Hasta 30% OFF",
      description: "En cruceros seleccionados"
    },
    {
      icon: Gift,
      title: "Upgrades Gratis",
      description: "Mejora de cabina sin costo"
    },
    {
      icon: CreditCard,
      title: "Cuotas sin Interés",
      description: "Hasta 12 cuotas"
    },
    {
      icon: Clock,
      title: "Cancelación Flexible",
      description: "Cambia tus planes sin cargo"
    }
  ];

  return (
    <section id="promociones" className="py-16 px-4 bg-gradient-ocean text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Promociones Especiales
          </h2>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Aprovecha nuestras ofertas exclusivas y ahorra en tu próxima aventura
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="cta-button-accent">
            Explorar Ofertas
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
