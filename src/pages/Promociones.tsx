import { ShoppingBag, Calendar, Gift, Tag, Clock, UserPlus, DollarSign, ArrowRight, CheckCircle, AlertCircle, Info } from "lucide-react";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FloatingSearchButton from "@/components/FloatingSearchButton";
import PromoCard from "@/components/PromoCard";
import { Button } from "@/components/ui/button";
import heroPromoImage from "@/assets/hero-promociones.jpg";
import promoPrincessImage from "@/assets/promo-princess.png";
import promoCruiseDealsImage from "@/assets/promo-cruise-deals.webp";
import isotipoPrincess from "@/assets/isotipo-princess.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Promociones = () => {
  const scrollToPromociones = () => {
    const element = document.getElementById('promocion-principal');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen">
      <StickyHeader />
      
      <main>
        {/* Hero Section - Princess Brand Guidelines */}
        <section className="relative bg-white py-4 md:py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-[40%_60%] gap-0 overflow-hidden">
              {/* Left Side - Image with rounded top-left corner only */}
              <div className="relative h-64 md:h-auto md:min-h-[250px] rounded-tl-[62.5px] overflow-hidden">
                <img 
                  src={heroPromoImage}
                  alt="Crucero de lujo navegando en aguas turquesas al atardecer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Right Side - Content with straight edges */}
              <div className="bg-primary px-8 md:px-12 py-8 md:py-10 flex flex-col justify-start items-start relative">
                {/* Princess Logo - aligned with CTA cap height */}
                <div className="absolute top-10 right-8 md:right-12">
                  <img src={isotipoPrincess} alt="Princess Cruises" className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                
                {/* Headline - aligned with top of image */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight mt-2">
                  Ofertas
                  <br />
                  Exclusivas.
                </h1>
                
                {/* Description */}
                <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed max-w-md">
                  Descubre nuestras promociones especiales y aprovecha descuentos increíbles en cruceros de lujo.
                </p>
                
                {/* CTA Button */}
                <div>
                  <button
                    onClick={scrollToPromociones}
                    className="bg-accent hover:bg-accent/90 text-white font-bold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg"
                  >
                    VER PROMOCIONES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promociones Vigentes Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Promociones Vigentes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Princess Cruises Promo */}
              <div className="group cursor-pointer" onClick={() => {
                const element = document.getElementById('promocion-principal');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                <div className="relative w-full aspect-square max-w-[350px] mx-auto rounded-tl-[62.5px] overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <img 
                    src={promoPrincessImage}
                    alt="Promoción Princess Cruises - Hasta 50% OFF"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                      <span>Ver Promoción</span>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-primary text-center mt-4">
                  Promoción Princess Cruises
                </h3>
              </div>

              {/* Cruise Deals Promo */}
              <div className="group cursor-pointer" onClick={() => {
                const element = document.getElementById('cruise-deals');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                <div className="relative w-full aspect-square max-w-[350px] mx-auto rounded-tl-[62.5px] overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <img 
                    src={promoCruiseDealsImage}
                    alt="Último Minuto: Cruise Deals - Ahorros hasta $400"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                      <span>Ver Promoción</span>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-primary text-center mt-4">
                  Último Minuto: Cruise Deals
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Promoción Princess Cruises */}
        <section id="promocion-principal" className="py-16 px-4 bg-secondary">
          <div className="container mx-auto max-w-7xl">
            {/* Header de la sección */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src={isotipoPrincess} alt="Princess Cruises" className="w-10 h-10" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                  Promoción Princess Cruises
                </h2>
              </div>
              <div className="flex items-center justify-center gap-2 text-foreground/70">
                <Calendar className="w-5 h-5" />
                <p className="text-lg">
                  Vigencia: del 2 de septiembre al 11 de noviembre de 2025
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
              {/* Promo Card */}
              <div className="lg:sticky lg:top-24">
                <PromoCard
                  mainPercentage="50%"
                  topText="hasta"
                  bottomText="OFF"
                  highlights={[
                    {
                      icon: <UserPlus className="w-8 h-8" />,
                      text: "3er y 4to pasajero",
                    },
                    {
                      icon: <DollarSign className="w-8 h-8" />,
                      text: "$0 Depósito en salidas seleccionadas 2026/2027",
                    },
                  ]}
                  ctaText="Ver Salidas"
                  ctaLink="https://reservas.princesscruises.mx/search?sortBy=Recommended&#038;priceByCabin=false&#038;taxAndFeesIncluded=false"
                  exceptionNote="Aplica sobre la tarifa base publicada. No aplica a paquetes Princess Plus o Princess Premier. Los CTAs pueden ser ajustados según necesidad."
                />
              </div>

              {/* Detalles de la promoción */}
              <div className="bg-white rounded-3xl shadow-card p-8 md:p-12">
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Viajar con Princess nunca fue tan fácil ni tan conveniente. Ahora puedes aprovechar 
                  grandes descuentos y beneficios exclusivos en tus próximas vacaciones en alta mar.
                </p>

                {/* Beneficios principales */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Gift className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-display font-bold text-primary">
                      ¿Qué incluye la promoción?
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-accent">Hasta 40% OFF</CardTitle>
                        <CardDescription>
                          En tarifas de crucero para los dos primeros pasajeros de cada cabina
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-accent">Hasta USD $200</CardTitle>
                        <CardDescription>
                          De ahorro instantáneo según la duración del crucero y categoría de cabina
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-accent">Hasta 50% OFF</CardTitle>
                        <CardDescription>
                          En tarifas para 3º y 4º pasajero en salidas seleccionadas
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-accent">Depósito $0</CardTitle>
                        <CardDescription>
                          En salidas seleccionadas de 2026 y 2027 para 3º y 4º pasajero
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>

                {/* Tabla de ahorros */}
                <div className="mb-12">
                  <h3 className="text-2xl font-display font-bold text-primary mb-6">
                    Detalle de los ahorros instantáneos por persona
                  </h3>
                  
                  <div className="overflow-x-auto rounded-2xl border-2 border-primary/20">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="py-4 px-6 text-left font-semibold">Categoría de Cabina</th>
                          <th className="py-4 px-6 text-center font-semibold">2–5 días</th>
                          <th className="py-4 px-6 text-center font-semibold">6–8 días</th>
                          <th className="py-4 px-6 text-center font-semibold">9+ días</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-primary/10 hover:bg-secondary/50 transition-colors">
                          <td className="py-4 px-6 font-medium">Interior / Exterior</td>
                          <td className="py-4 px-6 text-center text-accent font-bold">USD $25</td>
                          <td className="py-4 px-6 text-center text-accent font-bold">USD $25</td>
                          <td className="py-4 px-6 text-center text-accent font-bold">USD $50</td>
                        </tr>
                        <tr className="border-b border-primary/10 hover:bg-secondary/50 transition-colors">
                          <td className="py-4 px-6 font-medium">Balcón</td>
                          <td className="py-4 px-6 text-center text-accent font-bold">USD $50</td>
                          <td className="py-4 px-6 text-center text-accent font-bold">USD $50</td>
                          <td className="py-4 px-6 text-center text-accent font-bold">USD $75</td>
                        </tr>
                        <tr className="hover:bg-secondary/50 transition-colors">
                          <td className="py-4 px-6 font-medium">Mini-Suite / Suite</td>
                          <td className="py-4 px-6 text-center text-accent font-bold">USD $50</td>
                          <td className="py-4 px-6 text-center text-accent font-bold">USD $75</td>
                          <td className="py-4 px-6 text-center text-accent font-bold">USD $100</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Nota: el ahorro instantáneo se aplica únicamente a los primeros 2 pasajeros por cabina 
                    y ya está reflejado en la tarifa publicada.
                  </p>
                </div>


                {/* Condiciones - Accordion */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-display font-bold text-primary">
                      Condiciones importantes
                    </h3>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="descuento-40" className="border-2 border-primary/10 rounded-xl px-4">
                      <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          <span>Hasta 50% OFF</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-primary/80 pt-2">
                        Aplica sobre la tarifa base publicada (Launch Fare), no sobre cargos obligatorios 
                        ni impuestos gubernamentales. No aplica a paquetes Princess Plus o Princess Premier.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="descuento-50" className="border-2 border-primary/10 rounded-xl px-4">
                      <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          <span>Hasta 50% OFF (3º y 4º pasajero)</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-primary/80 pt-2">
                        Disponible solo en salidas seleccionadas de verano 2026 y 2027. El descuento 
                        varía según destino y categoría de cabina.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="deposito" className="border-2 border-primary/10 rounded-xl px-4">
                      <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          <span>Depósito $0</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-primary/80 pt-2">
                        Exclusivo para 3º y 4º pasajero en determinadas salidas de 2026 y 2027. Los primeros 
                        dos pasajeros deben abonar el depósito estándar. No disponible en cruceros mundiales, 
                        viajes de 45+ días ni en reservas ya con pago final.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ahorro-instantaneo" className="border-2 border-primary/10 rounded-xl px-4">
                      <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          <span>Ahorro instantáneo</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-primary/80 pt-2">
                        Se aplica por persona según la duración y tipo de cabina (ver tabla). Para cabinas 
                        en ocupación individual, aplica la mitad del monto correspondiente.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="cobertura" className="border-2 border-primary/10 rounded-xl px-4">
                      <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          <span>Cobertura y periodo de viaje</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-primary/80 pt-2">
                        Promoción válida en todas las categorías de cabinas, incluyendo Sanctuary. 
                        Aplica para cruceros publicados que salgan entre diciembre de 2025 y noviembre de 2027, 
                        siempre que no hayan llegado a fecha de pago final.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Notas adicionales */}
                <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-primary">Notas adicionales</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-primary/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Tarifas en base a ocupación doble.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>No aplican para pasajeros individuales.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Los precios incluyen impuestos y tasas gubernamentales, pero están sujetos a cambios.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Princess Cruises se reserva el derecho de ajustar los cargos obligatorios en caso de incrementos posteriores.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Códigos promocionales: Base LTO: NQS | NQP | NNQ | Sanctuary: NFQ | Extra Savings: 2CA</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Footer */}
                <div className="mt-8 text-center">
                  <p className="text-primary/80 mb-4 flex items-center justify-center gap-2">
                    <img src={isotipoPrincess} alt="" className="w-5 h-5" />
                    <span>Reserva tu crucero con Discover Cruises en{" "}
                    <a 
                      href="https://www.discovercruises.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent font-semibold hover:underline"
                    >
                      www.discovercruises.net
                    </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cruise Deals - Último Minuto */}
        <section id="cruise-deals" className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Header de la sección */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-10 h-10 text-accent" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                  Último Minuto: Cruise Deals
                </h2>
              </div>
              <p className="text-lg text-foreground/70">
                La promoción ideal para viajeros que buscan flexibilidad y beneficios únicos
              </p>
            </div>

            <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
              {/* Promo Card */}
              <div className="lg:sticky lg:top-24">
                <PromoCard
                  mainPercentage="$400"
                  topText="ahorros hasta"
                  bottomText="por persona"
                  highlights={[
                    {
                      icon: <Tag className="w-8 h-8" />,
                      text: "Tarifas reducidas",
                    },
                    {
                      icon: <Clock className="w-8 h-8" />,
                      text: "Actualización quincenal",
                    },
                  ]}
                  ctaText="Ver Ofertas"
                  ctaLink="https://reservas.princesscruises.mx/search?sortBy=Recommended&#038;priceByCabin=false&#038;taxAndFeesIncluded=false"
                  exceptionNote="Tarifas con mayor disponibilidad. La lista de salidas se actualiza cada quincena con nuevas opciones."
                />
              </div>

              {/* Detalles de la promoción */}
              <div className="bg-white rounded-3xl shadow-card p-8 md:p-12">
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Con tarifas reducidas y ahorros instantáneos, esta oferta es perfecta para planificar 
                  tu próximo crucero con beneficios exclusivos.
                </p>

                {/* Beneficios Cruise Deals */}
                <div className="mb-10">
                  <h3 className="text-2xl font-display font-bold text-primary mb-6">
                    Esta promoción tiene beneficios como:
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-2 border-accent/20 hover:border-accent/50 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-primary">Ahorros instantáneos</CardTitle>
                        <CardDescription>
                          Hasta $400 por persona, dependiendo de la duración del crucero
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="text-accent font-bold">•</span>
                            <span>Viajes de 1-3 días: <strong>$25 por huésped</strong></span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-accent font-bold">•</span>
                            <span>Viajes de 4-6 días: <strong>$50 por huésped</strong></span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-accent font-bold">•</span>
                            <span>Viajes de 7-11 días: <strong>$100 por huésped</strong></span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-accent font-bold">•</span>
                            <span>Viajes de 12+ días: <strong>$200 por huésped</strong></span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-accent/20 hover:border-accent/50 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-primary">Ventajas exclusivas</CardTitle>
                        <CardDescription>
                          Beneficios diseñados para tu comodidad
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-accent font-bold mt-1">✓</span>
                            <span>Tarifas con mayor disponibilidad para cada tipo de viajero</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent font-bold mt-1">✓</span>
                            <span>Renovación quincenal de salidas con nuevas oportunidades</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent font-bold mt-1">✓</span>
                            <span>Desde escapadas cortas hasta aventuras épicas</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">
                    ¡No pierdas esta oportunidad!
                  </h3>
                  <p className="text-foreground/80 mb-6">
                    Desde escapadas cortas hasta aventuras épicas, Cruise Deals tiene algo para todos. 
                    Reserva hoy y asegura tu lugar con tarifas exclusivas y ahorros incomparables.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    La lista de salidas se actualiza cada quincena, ofreciéndote siempre nuevas opciones 
                    para explorar destinos increíbles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
      <FloatingSearchButton />
    </div>
  );
};

export default Promociones;
