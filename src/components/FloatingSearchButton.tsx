import { Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingSearchButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const searchBar = document.getElementById("search-bar");
    
    if (location.pathname === "/" && searchBar) {
      // Si estamos en Home, hacer scroll al buscador
      searchBar.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      // Si estamos en otra página, navegar a Home y luego hacer scroll
      navigate("/");
      setTimeout(() => {
        const searchBar = document.getElementById("search-bar");
        if (searchBar) {
          searchBar.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-accent text-white py-4 px-6 flex items-center justify-center gap-2 font-semibold shadow-lg hover:bg-accent/90 transition-colors"
    >
      <Search className="w-5 h-5" />
      Buscar Crucero
    </button>
  );
};

export default FloatingSearchButton;
