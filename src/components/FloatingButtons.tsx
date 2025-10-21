import { MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/525585263163"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-elegant hover:scale-110 transition-transform duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-44 md:bottom-6 right-6 z-50 bg-accent text-white w-14 h-14 rounded-full flex items-center justify-center shadow-elegant hover:scale-110 transition-all duration-300 animate-fade-in"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-7 h-7" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
