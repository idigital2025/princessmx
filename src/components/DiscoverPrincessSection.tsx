import princessShip from "@/assets/princess-ship.jpg";

const DiscoverPrincessSection = () => {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Descubre Princess Cruises
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold">
              ¿Qué tiene Princess que sea especial?
            </h3>
            <div className="space-y-4 text-lg">
              <p>
                Desde actividades relajantes y enriquecedoras hasta entretenimiento de primer nivel y cocina gourmet, cuando usted sube a bordo, está marcando rumbo a un mundo de maravillosos nuevos descubrimientos.
              </p>
              <p>
                Princess cuenta con una flota de 18 barcos. Cada barco de Princess es un destino en sí mismo, con una amplia gama de comodidades, experiencias culinarias de primer nivel y actividades encantadoras.
              </p>
            </div>
          </div>
          
          <div className="asymmetric-card overflow-hidden shadow-elegant">
            <img
              src={princessShip}
              alt="Princess Cruises ship at Dawes Glacier Alaska"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverPrincessSection;
