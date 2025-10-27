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
        href="https://web.whatsapp.com/send?phone=5491164229372&text=Hola%20Princess%20Cruises!%20Estoy%20interesado%20en%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20He%20visitado%20https%3A%2F%2Fwww.princesscruises.mx%2Fpreguntas-frecuentes%2F%20en%20su%20sitio%20web"
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
