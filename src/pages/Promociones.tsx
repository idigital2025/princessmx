import { ShoppingBag, Calendar, Gift, Ship, Tag, Clock } from "lucide-react";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Promociones = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-accent py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Tag className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Promociones Exclusivas
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Aprovecha nuestras ofertas especiales y descuentos increíbles en los mejores cruceros. 
              Tu aventura soñada está más cerca de lo que imaginas.
            </p>
          </div>
        </section>

        {/* Promoción Princess Cruises */}
        <section className="py-16 px-4 bg-secondary">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-3xl shadow-elegant overflow-hidden">
              {/* Header de la promoción */}
              <div className="bg-gradient-to-r from-primary to-accent p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Ship className="w-10 h-10" />
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    Promoción Princess Cruises
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Calendar className="w-5 h-5" />
                  <p className="text-lg">
                    Vigencia: del 2 de septiembre al 11 de noviembre de 2025
                  </p>
                </div>
              </div>

              <div className="p-8 md:p-12">
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

                {/* CTA Principal */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 mb-12 text-center">
                  <p className="text-lg mb-6 text-foreground/80">
                    ¡No dejes pasar esta oportunidad única de ahorrar en tus vacaciones soñadas!
                  </p>
                  <Button 
                    asChild
                    className="cta-button-accent text-lg px-12 py-6 h-auto"
                  >
                    <a 
                      href="https://reservas.princesscruises.mx/search?sortBy=Recommended&#038;priceByCabin=false&#038;taxAndFeesIncluded=false"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Ver Salidas Disponibles
                    </a>
                  </Button>
                </div>

                {/* Condiciones - Accordion */}
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-6">
                    📌 Condiciones importantes
                  </h3>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="descuento-40" className="border-2 border-primary/10 rounded-xl px-4">
                      <AccordionTrigger className="text-left font-semibold hover:text-accent">
                        🔹 Hasta 40% OFF
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 pt-2">
                        Aplica sobre la tarifa base publicada (Launch Fare), no sobre cargos obligatorios 
                        ni impuestos gubernamentales. No aplica a paquetes Princess Plus o Princess Premier.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="descuento-50" className="border-2 border-primary/10 rounded-xl px-4">
                      <AccordionTrigger className="text-left font-semibold hover:text-accent">
                        🔹 Hasta 50% OFF (3º y 4º pasajero)
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 pt-2">
                        Disponible solo en salidas seleccionadas de verano 2026 y 2027. El descuento 
                        varía según destino y categoría de cabina.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="deposito" className="border-2 border-primary/10 rounded-xl px-4">
                      <AccordionTrigger className="text-left font-semibold hover:text-accent">
                        🔹 Depósito $0
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 pt-2">
                        Exclusivo para 3º y 4º pasajero en determinadas salidas de 2026 y 2027. Los primeros 
                        dos pasajeros deben abonar el depósito estándar. No disponible en cruceros mundiales, 
                        viajes de 45+ días ni en reservas ya con pago final.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ahorro-instantaneo" className="border-2 border-primary/10 rounded-xl px-4">
                      <AccordionTrigger className="text-left font-semibold hover:text-accent">
                        🔹 Ahorro instantáneo
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 pt-2">
                        Se aplica por persona según la duración y tipo de cabina (ver tabla). Para cabinas 
                        en ocupación individual, aplica la mitad del monto correspondiente.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="cobertura" className="border-2 border-primary/10 rounded-xl px-4">
                      <AccordionTrigger className="text-left font-semibold hover:text-accent">
                        🔹 Cobertura y periodo de viaje
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 pt-2">
                        Promoción válida en todas las categorías de cabinas, incluyendo Sanctuary. 
                        Aplica para cruceros publicados que salgan entre diciembre de 2025 y noviembre de 2027, 
                        siempre que no hayan llegado a fecha de pago final.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Notas adicionales */}
                <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                  <h4 className="font-semibold text-primary mb-3">⚓ Notas adicionales</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>🔹 Tarifas en base a ocupación doble.</li>
                    <li>🔹 No aplican para pasajeros individuales.</li>
                    <li>🔹 Los precios incluyen impuestos y tasas gubernamentales, pero están sujetos a cambios.</li>
                    <li>🔹 Princess Cruises se reserva el derecho de ajustar los cargos obligatorios en caso de incrementos posteriores.</li>
                    <li>🔹 Códigos promocionales: Base LTO: NQS | NQP | NNQ | Sanctuary: NFQ | Extra Savings: 2CA</li>
                  </ul>
                </div>

                {/* CTA Footer */}
                <div className="mt-8 text-center">
                  <p className="text-foreground/80 mb-4">
                    🔹 Reserva tu crucero con Discover Cruises en{" "}
                    <a 
                      href="https://www.discovercruises.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent font-semibold hover:underline"
                    >
                      www.discovercruises.net
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cruise Deals - Último Minuto */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl shadow-elegant overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-accent to-primary p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-10 h-10" />
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    Último Minuto: Cruise Deals
                  </h2>
                </div>
                <p className="text-lg text-white/90">
                  La promoción ideal para viajeros que buscan flexibilidad y beneficios únicos
                </p>
              </div>

              <div className="p-8 md:p-12">
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
                <div className="bg-white rounded-2xl p-8 text-center shadow-card">
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
    </div>
  );
};

export default Promociones;
