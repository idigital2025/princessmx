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
        
        {/* Mobile: Animated Carousel - One per screen, 2s per slide */}
        <div className="md:hidden relative overflow-hidden">
          <div className="flex animate-[scroll_8s_linear_infinite]">
            <div className="flex-shrink-0 w-full flex justify-center px-4">
              <img src={badge1} alt="Travel Weekly Award" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0 w-full flex justify-center px-4">
              <img src={badge2} alt="Wine Spectator Award" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0 w-full flex justify-center px-4">
              <img src={badge3} alt="Recommend Magazine Award" className="h-24 object-contain" />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex-shrink-0 w-full flex justify-center px-4">
              <img src={badge1} alt="Travel Weekly Award" className="h-24 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadgesSection;
