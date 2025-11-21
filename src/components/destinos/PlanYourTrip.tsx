import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Sun, Luggage, Ship } from "lucide-react";

const PlanYourTrip = () => {
  const { ref, isVisible } = useScrollAnimation();

  const sections = [
    {
      icon: Plane,
      title: "Traslados y llegada",
      tips: [
        "Elige vuelos con llegada 1 día antes de tu crucero para evitar imprevistos.",
        "Prefiere taxis oficiales, transporte autorizado del aeropuerto o servicios de rideshare con buena reputación.",
        "Lleva a mano tu documentación de embarque, pasaporte y comprobantes."
      ]
    },
    {
      icon: Sun,
      title: "Clima y mejores meses",
      tips: [
        "El Caribe mantiene temperaturas cálidas todo el año: 24°C a 30°C.",
        "Temporada más estable: diciembre a abril.",
        "Temporada húmeda: junio a noviembre (revisa pronóstico y clima del puerto de salida)."
      ]
    },
    {
      icon: Luggage,
      title: "Equipaje recomendado",
      tips: [
        "Ropa ligera, traje de baño, sandalias, bloqueador solar, lentes de sol.",
        "Un abrigo liviano para interiores con aire acondicionado.",
        "Tenida semi-formal para cenas especiales.",
        "Mochila pequeña para excursiones en tierra.",
        "Medicinas personales y cargadores portátiles."
      ]
    },
    {
      icon: Ship,
      title: "Consejos para embarcar sin estrés",
      tips: [
        "Llega al muelle con anticipación y sigue las indicaciones del personal.",
        "Identifica tu equipaje con etiquetas claras.",
        "Mantén objetos de valor, documentos y artículos esenciales en tu equipaje de mano."
      ]
    }
  ];

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 bg-muted/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary text-center mb-6">
          Planifica tu viaje al Caribe
        </h3>

        <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-4xl mx-auto font-sans">
          Viajar al Caribe es emocionante, y una buena preparación puede hacer tu experiencia aún más cómoda y relajada. 
          Aquí encontrarás consejos prácticos para que tu aventura en crucero comience sin estrés.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card key={index} className="asymmetric-card hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-primary">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-sm md:text-base text-foreground/90 flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanYourTrip;
