import TopBanner from "./TopBanner";
import Navigation from "./Navigation";

const StickyHeader = () => {
  return (
    <header className="sticky top-0 z-40 shadow-md">
      <TopBanner />
      <Navigation />
    </header>
  );
};

export default StickyHeader;
