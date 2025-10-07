import promo1 from "@/assets/promo-1.png";
import promo2 from "@/assets/promo-2.webp";

const PromoDealsSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">
          Encuentra la oferta de crucero perfecta para ti
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="asymmetric-card overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 h-[400px]">
            <img
              src={promo1}
              alt="Promoción especial de cruceros"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="asymmetric-card overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 h-[400px]">
            <img
              src={promo2}
              alt="Ofertas de cruceros"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoDealsSection;
