import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Moon } from "lucide-react";

const MoreAshore = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 bg-gradient-ocean text-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <Moon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6" />
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8">
          More Ashore: La vida nocturna caribeña
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-6">
          Disfruta de noches más largas en Aruba, Curaçao, Puerto Rico o Santo Tomás.
        </p>

        <p className="text-base md:text-lg opacity-90">
          Baila, come local, aprende tambores metálicos.
        </p>
      </div>
    </section>
  );
};

export default MoreAshore;
