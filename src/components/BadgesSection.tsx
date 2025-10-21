import badge1 from "@/assets/badge-1.png";
import badge2 from "@/assets/badge-2.png";
import badge3 from "@/assets/badge-3.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const BadgesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-12 px-4 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto">
        {/* Desktop: Flex layout */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <img src={badge1} alt="Travel Weekly Award" className="h-24 md:h-32 object-contain" />
          <img src={badge2} alt="Wine Spectator Award" className="h-24 md:h-32 object-contain" />
          <img src={badge3} alt="Recommend Magazine Award" className="h-24 md:h-32 object-contain" />
        </div>
        
        {/* Mobile: Horizontal Carousel */}
        <div className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-8 pb-4 justify-center min-w-max px-4">
            <img src={badge1} alt="Travel Weekly Award" className="h-24 object-contain snap-center" />
            <img src={badge2} alt="Wine Spectator Award" className="h-24 object-contain snap-center" />
            <img src={badge3} alt="Recommend Magazine Award" className="h-24 object-contain snap-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadgesSection;
