import { Calendar, ArrowRight, Facebook, Instagram } from "lucide-react";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FloatingSearchButton from "@/components/FloatingSearchButton";
import heroPromoImage from "@/assets/hero-promociones.jpg";
import isotipoPrincess from "@/assets/isotipo-princess.png";

const Novedades = () => {
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const categories = [
    { id: 'suena-un-viaje', name: 'Soñando un Próximo Viaje', hashtag: '#sueñaunviaje' },
    { id: 'curiosidades-abordo', name: 'Curiosidades a Bordo', hashtag: '#curiosidadesabordo' },
    { id: 'princess-gourmet', name: 'Princess Gourmet', hashtag: '#princessgourmet' },
    { id: 'historias-crucero', name: 'Historias de Crucero', hashtag: '#historiasdecrucero' },
    { id: 'viajes-virtuales', name: 'Viajes Virtuales', hashtag: '#viajesvirtuales' },
    { id: 'trivias-entretenimiento', name: 'Aprendemos Jugando', hashtag: '#triviasyentretenimiento' },
  ];

  return (
    <div className="min-h-screen">
      <StickyHeader />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-white py-4 md:py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-[40%_60%] gap-0 overflow-hidden">
              {/* Left Side - Image */}
              <div className="relative h-64 md:h-auto md:min-h-[250px] rounded-tl-[62.5px] overflow-hidden">
                <img 
                  src={heroPromoImage}
                  alt="Princess Cruises - Blog Discover"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Right Side - Content */}
              <div className="bg-primary px-8 md:px-12 py-8 md:py-10 flex flex-col justify-start items-start relative">
                <div className="absolute top-10 right-8 md:right-12">
                  <img src={isotipoPrincess} alt="Princess Cruises" className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight mt-2">
                  Novedades.
                </h1>
                
                <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed max-w-md">
                  Diviérte, aprende, inspírate. Viaja a través de guías y recorridos virtuales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Discover Intro */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              #BLOGDISCOVER
            </h2>
            <p className="text-xl text-foreground/80 mb-4 leading-relaxed">
              Diviérte, aprende, inspírate.
            </p>
            <p className="text-lg text-foreground/70 mb-4">
              Viaja a través de guías y recorridos virtuales. Saborea el mundo con las mejores recetas que puedes recrear en casa. Entretente con juegos, historias y maravillosos artistas.
            </p>
            <p className="text-base font-semibold text-primary uppercase tracking-wider">
              Una guía semanal para que disfrutes de información de viajes, estés donde estés
            </p>
          </div>
        </section>

        {/* Categories Navigation */}
        <section className="py-12 px-4 bg-secondary">
          <div className="container mx-auto max-w-7xl">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8 text-center">
              Categorías
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className="group bg-white hover:bg-primary text-primary hover:text-white p-6 rounded-xl shadow-card transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-sm font-semibold opacity-70 mb-1">{category.hashtag}</p>
                      <p className="font-bold text-lg">{category.name}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Soñando un Próximo Viaje */}
        <section id="suena-un-viaje" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-lg mb-2">#sueñaunviaje</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Soñando un Próximo Viaje
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-6">
                Cumplimos nuestro propio sueño haciéndote soñar tu próximo viaje. La buena información nos inspira y estimula nuestra imaginación. Es un buen momento para que te permitas soñar un próximo destino.
              </p>
              <p className="text-base text-foreground/70 mb-6">
                Encuentra notas destacadas y guías de viaje cada semana gracias a nuestra asociación con <span className="font-semibold">DISCOVER TRAVEL NEWS</span>.
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm font-semibold text-primary">Sigue a Discover Travel News</span>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6 text-primary hover:text-accent" />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-primary hover:text-accent" />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Okinawa, el Caribe japonés', category: 'Guías de Viaje' },
                { title: 'Taormina, Sicilia', category: 'Guías de Viaje' },
                { title: 'Qué hacer las islas Turks & Caicos', category: 'Guías de Viaje' },
                { title: 'Aruba, una visita perfecta', category: 'Guías de Viaje' },
                { title: '5 razones para viajar con Princess a Australia y Nueva Zelanda', category: 'Guías de Viaje' },
                { title: 'Un día en Halifax, Canadá', category: 'Guías de Viaje' },
              ].map((article, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="asymmetric-card overflow-hidden shadow-card group-hover:shadow-elegant transition-all mb-4 bg-secondary h-56"></div>
                  <p className="text-sm font-semibold text-accent mb-2">{article.category}</p>
                  <h3 className="text-xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Curiosidades a Bordo */}
        <section id="curiosidades-abordo" className="py-16 px-4 bg-secondary">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-lg mb-2">#curiosidadesabordo</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Curiosidades a Bordo
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                A bordo de nuestros barcos encontrarás lugares para los gustos de todos los viajeros. Restaurantes de especialidades, bares, espacios con distinta música en vivo, teatros, piscinas, spa, e inclusive tu propio santuario privado en cada habitación.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Spotlight Bar, el nuevo show a bordo del Discovery Princess', category: 'A bordo' },
                { title: '10 lugares en Caribe para excursiones en familia', category: 'A bordo' },
                { title: 'Cruceros a Hawái: programa Aloha Spirit', category: 'A bordo' },
                { title: 'MedallionNet, el mejor Wi-Fi en el mar', category: 'A bordo' },
                { title: 'Qué empacar para un crucero por Alaska?', category: 'A bordo' },
                { title: 'Nuevos platos con frutos de mar en Alaska', category: 'A bordo' },
              ].map((article, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="asymmetric-card overflow-hidden shadow-card group-hover:shadow-elegant transition-all mb-4 bg-white h-56"></div>
                  <p className="text-sm font-semibold text-accent mb-2">{article.category}</p>
                  <h3 className="text-xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Princess Gourmet */}
        <section id="princess-gourmet" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-lg mb-2">#princessgourmet</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Princess Gourmet
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Te acercamos las receta de nuestros premiados chefs, las mismas que se sirven a bordo de los barcos de Princess Cruises. Sigue el paso a paso, aprende, practica y comparte tus inquietudes, fotos y recetas en nuestras redes sociales con el hashtag <span className="font-semibold text-accent">#princessmasterchef</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Moqueca de Peixe, un guiso de pescado tradicional', category: 'Princess Gourmet' },
                { title: 'CheeseCake estilo New York', category: 'Princess Gourmet' },
                { title: 'Pasta con Caponata y Berenjena', category: 'Princess Gourmet' },
                { title: 'Disfrutando de los sabores de Grecia', category: 'Princess Gourmet' },
                { title: 'Bistro Sur La Mer by Emmanuel Renaut', category: 'A bordo, Princess Gourmet' },
                { title: 'Casa de jengibre navideña', category: 'Princess Gourmet' },
              ].map((article, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="asymmetric-card overflow-hidden shadow-card group-hover:shadow-elegant transition-all mb-4 bg-secondary h-56"></div>
                  <p className="text-sm font-semibold text-accent mb-2">{article.category}</p>
                  <h3 className="text-xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Historias de Crucero */}
        <section id="historias-crucero" className="py-16 px-4 bg-secondary">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-lg mb-2">#historiasdecrucero</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Historias de Crucero
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Invitamos personalidades del mundo de la cultura, las artes, expertos en alguna materia o temática, o simplemente amigos, para que nos cuenten alguna historia vivida a bordo de un crucero. De lugares, de experiencias y de anécdotas se nutre este segmento. Escucha sus voces que compartimos aquí.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Historia de Whittier: su papel en la Segunda Guerra Mundial', category: 'Historias de crucero' },
                { title: 'Celebrando las fiestas a bordo', category: 'Historias de crucero' },
                { title: 'Alaska a través de las cámaras', category: 'Historias de crucero' },
                { title: 'La historia sobre la tradicional pintura de los huevos de Pascua', category: 'Historias de crucero' },
                { title: 'Historias de cervezas', category: 'Historias de crucero' },
                { title: 'Casa del Árbol en Alaska', category: 'Historias de crucero' },
              ].map((article, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="asymmetric-card overflow-hidden shadow-card group-hover:shadow-elegant transition-all mb-4 bg-white h-56"></div>
                  <p className="text-sm font-semibold text-accent mb-2">{article.category}</p>
                  <h3 className="text-xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Viajes Virtuales */}
        <section id="viajes-virtuales" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-lg mb-2">#viajesvirtuales</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Viajes Virtuales
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-6">
                Seguimos alimentando tus ansias de viajar a través de recorridos virtuales alrededor del mundo. Ingresa con nosotros a un museo, un castillo, o un palacio. Camina entre las montañas, la selva, en invierno o verano. En asociación con Discover Travel News te acercamos el mundo de una manera diferente.
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm font-semibold text-primary">Sigue a Discover Travel News</span>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6 text-primary hover:text-accent" />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-primary hover:text-accent" />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Castillos de Irlanda', category: 'Viajes virtuales' },
                { title: 'Descubriendo Grecia a través de la cámara', category: 'Viajes virtuales' },
                { title: 'Antártida virtual', category: 'Viajes virtuales' },
                { title: 'Casa del Parlamento virtual', category: 'Viajes virtuales' },
                { title: 'Visita el Royal Yacht Britannia durante tu estadía en Edimburgo', category: 'Viajes virtuales' },
                { title: 'El Metro de Moscú, el Palacio del pueblo', category: 'Viajes virtuales' },
              ].map((article, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="asymmetric-card overflow-hidden shadow-card group-hover:shadow-elegant transition-all mb-4 bg-secondary h-56"></div>
                  <p className="text-sm font-semibold text-accent mb-2">{article.category}</p>
                  <h3 className="text-xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Trivias y Entretenimiento */}
        <section id="trivias-entretenimiento" className="py-16 px-4 bg-secondary">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-lg mb-2">#triviasyentretenimiento</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Aprendemos Jugando
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Te ponemos a prueba y alentamos a desafía a tu familia y amigos con nuestros juegos. Y para eso te facilitamos test, acertijos y pasatiempos que activarán tu mente. Siempre hay tiempo para aprender y divertirse.
              </p>
            </div>

            <div className="text-center py-12">
              <p className="text-xl font-display font-bold text-primary">
                Próximamente: Trivias y entretenimientos
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
      <FloatingSearchButton />
    </div>
  );
};

export default Novedades;
