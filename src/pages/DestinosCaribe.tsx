import { useEffect } from "react";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import HeroCaribe from "@/components/destinos/HeroCaribe";
import CaribeExperience from "@/components/destinos/CaribeExperience";
import WhyCruiseCaribe from "@/components/destinos/WhyCruiseCaribe";
import EmblematicPorts from "@/components/destinos/EmblematicPorts";
import PrincessExperience from "@/components/destinos/PrincessExperience";
import SeaInspiration from "@/components/destinos/SeaInspiration";
import ShoreExcursions from "@/components/destinos/ShoreExcursions";
import MoreAshore from "@/components/destinos/MoreAshore";
import PlanYourTrip from "@/components/destinos/PlanYourTrip";
import DestinationOffers from "@/components/destinos/DestinationOffers";
import ExploreDestinations from "@/components/destinos/ExploreDestinations";
import FloatingButtons from "@/components/FloatingButtons";

const DestinosCaribe = () => {
  useEffect(() => {
    // Set page meta tags for SEO
    document.title = "Cruceros al Caribe con Princess Cruises | Descubre 23 Islas desde México";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Vive el Caribe con Princess Cruises: playas turquesas, cultura vibrante y más de 23 islas por descubrir. Encuentra itinerarios 2025, promociones y cruceros desde México.");
    }

    // Add schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      "name": "Caribe — Cruceros Princess Cruises",
      "description": "Cruceros por el Caribe con Princess Cruises: 23 islas, excursiones, gastronomía y cultura.",
      "touristType": "Travelers, Families, Couples",
      "geo": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 18.2208,
          "longitude": -66.5901
        },
        "geoRadius": "2000 km"
      },
      "url": "https://www.princesscruises.mx/destinos/caribe"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <main>
        <HeroCaribe />
        <CaribeExperience />
        <WhyCruiseCaribe />
        <ShoreExcursions />
        <MoreAshore />
        <EmblematicPorts />
        <PrincessExperience />
        <SeaInspiration />
        <PlanYourTrip />
        <DestinationOffers />
        <ExploreDestinations />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default DestinosCaribe;
