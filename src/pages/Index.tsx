import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCruises from "@/components/FeaturedCruises";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCruises />
        <PromoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
