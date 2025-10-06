import badge1 from "@/assets/badge-1.png";
import badge2 from "@/assets/badge-2.png";
import badge3 from "@/assets/badge-3.png";

const BadgesSection = () => {
  return (
    <section className="py-12 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <img src={badge1} alt="Travel Weekly Award" className="h-24 md:h-32 object-contain" />
          <img src={badge2} alt="Wine Spectator Award" className="h-24 md:h-32 object-contain" />
          <img src={badge3} alt="Recommend Magazine Award" className="h-24 md:h-32 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default BadgesSection;
