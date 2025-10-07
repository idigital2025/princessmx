import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import PromoDealsSection from "@/components/PromoDealsSection";
import FeaturedCruises from "@/components/FeaturedCruises";
import FavoriteDestinations from "@/components/FavoriteDestinations";
import BadgesSection from "@/components/BadgesSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import DiscoverPrincessSection from "@/components/DiscoverPrincessSection";
import WaveTransition from "@/components/WaveTransition";
import IncludedBenefitsSection from "@/components/IncludedBenefitsSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <main>
        <HeroSection />
        <PromoDealsSection />
        <FeaturedCruises />
        <FavoriteDestinations />
        <SubscriptionSection />
        <BadgesSection />
        <WaveTransition />
        <DiscoverPrincessSection />
        <IncludedBenefitsSection />
        <NewsSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
