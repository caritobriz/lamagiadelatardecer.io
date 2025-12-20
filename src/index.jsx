import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Sunset,
  Menu,
  X,
  Check,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Users,
  Compass,
  Sparkles,
  BookOpen,
  Mail,
  Heart,
  Waves,
  ArrowDown,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Mountain,
  ArrowRight,
  Star,
  ArrowUp,
  Bed,
  Utensils,
  Bath,
  MessageCircle,
  Camera,
  Anchor,
  Coffee,
  Navigation,
  HeartHandshake,
  ShoppingBag,
  Bus,
  Map as MapIcon,
  Laptop,
  Building2,
} from "lucide-react";

// === COMPONENTES AUXILIARES ===

const TikTokIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const ImageCarousel = ({ images, alt, className = "h-64", onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0)
    return <div className={`bg-stone-200 ${className}`} />;

  return (
    <div
      className={`relative w-full h-full overflow-hidden group cursor-pointer ${className}`}
      onClick={onClick}
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt={`${alt} ${idx}`}
            className="w-full h-full object-cover transition-transform duration-[10000ms] scale-110 group-hover:scale-100"
          />
        </div>
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 w-6 rounded-full transition-all duration-500 ${
                idx === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Lightbox = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  if (!images || images.length === 0) return null;
  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div
      className="fixed inset-0 z-[600] bg-black/98 flex items-center justify-center animate-fade-in cursor-pointer"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-[610] transition-transform hover:scale-110 active:scale-90"
      >
        <X size={48} />
      </button>
      <div
        className="relative max-w-5xl w-full px-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt="Galería"
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl transition-all duration-500"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-4 transition-colors"
            >
              <ChevronLeft size={64} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-4 transition-colors"
            >
              <ChevronRight size={64} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// === DATOS MAESTROS ===
const SITE_DATA = {
  general: {
    name: "LA MAGIA DEL ATARDECER",
    location: "Taganga, Colombia",
    phone: "+57 321 202 1448",
    email: "lamagiadelatardecer@gmail.com",
    bookingEngineLink: "https://engine.lobbypms.com/la-magia-del-atardecer",
    airbnbLink:
      "https://www.airbnb.com.co/users/profile/1470174458191076107?previous_page_name=PdpHomeMarketplace",
    googleMapsLink: "https://maps.app.goo.gl/ALbBC1PZXEYG2yFQA",
    rating: "4.92",
    youtubeCTA: "https://youtube.com/@lamagiadelatardecer?si=xItOWa06LJwWV4me",
  },
  social: {
    instagram:
      "https://www.instagram.com/sunsetmagicstay?igsh=MWgyaTd2bzF4aXFzMA%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1Q6f8sJWch/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@sunsetmagicstay?_r=1&_t=ZS-92NqkHnE4KV",
    youtube: "https://youtu.be/xo2c9JENscc?si=tujGTupy_s8F91V0",
  },
  translations: {
    es: {
      menu: {
        home: "Inicio",
        about: "Nosotros",
        activities: "Actividades",
        location: "Ubicación",
        experiences: "Experiencias",
        rent: "Empresas",
        gallery: "Vistas",
        blog: "Blog",
      },
      footerDesc:
        "Un refugio consciente en las colinas de Taganga, donde la arquitectura y la naturaleza convergen en paz.",
      rights: "© 2026 LA MAGIA DEL ATARDECER. Todos los derechos reservados.",
    },
  },
  hero: {
    title: { es: "¿Y tú, dónde quieres estar?" },
    images: [
      "https://i.postimg.cc/kXL6VZLy/IMG_6805_Original.jpg",
      "https://i.postimg.cc/zBZs5rWs/IMG_6489_EDIT.jpg",
      "https://i.postimg.cc/L4VcdGXd/IMG_1945.jpg",
      "https://i.postimg.cc/P5vVq7tQ/IMG_0452_(1).jpg",
    ],
  },
  blog: [
    {
      id: 1,
      title: "La esencia de Taganga",
      date: "Octubre 20, 2025",
      excerpt:
        "Descubre por qué este pueblo de pescadores se ha convertido en el santuario de los buscadores de paz.",
      content:
        "Taganga es mucho más que un destino turístico; es un estado mental. Situado en una herradura de montañas que abrazan el mar Caribe, este antiguo asentamiento de pescadores conserva una mística que atrae a viajeros de todo el mundo. Desde nuestras colinas, observamos el ritmo pausado de los botes que regresan al atardecer, una danza que se ha repetido por generaciones. En este post exploramos los rincones ocultos y la gastronomía local que hacen de este lugar algo único en el mundo.",
      image: "https://i.postimg.cc/zBZs5rWs/IMG_6489_EDIT.jpg",
      category: "Cultura",
    },
    {
      id: 2,
      title: "Vivir despacio: Slow Travel",
      date: "Noviembre 12, 2025",
      excerpt:
        "Nuestra filosofía de vida en la montaña explicada paso a paso para reconectar con lo natural.",
      content:
        "El 'Slow Travel' no se trata solo de viajar lento, sino de viajar consciente. En La Magia del Atardecer, fomentamos que nuestros huéspedes dejen a un lado las listas de tareas y simplemente habiten el espacio. Despertar con el sonido de los pájaros, desayunar viendo el horizonte sin prisa por llegar a ningún lado, y dedicar horas a contemplar cómo cambian los colores de la montaña. Aquí te damos 5 consejos para practicar la desconexión total durante tu estancia.",
      image: "https://i.postimg.cc/hGbrzWNb/IMG_3151.jpg",
      category: "Bienestar",
    },
    {
      id: 3,
      title: "Secretos del Tayrona",
      date: "Diciembre 05, 2025",
      excerpt:
        "Guía práctica para visitar las playas más vírgenes desde nuestra ubicación privilegiada.",
      content:
        "La cercanía con el Parque Nacional Natural Tayrona es uno de nuestros mayores tesoros. Sin embargo, hay rutas y horarios que solo los locales conocemos. En esta entrada te revelamos cómo llegar a playas como Sisiguaca o Granate evitando las multitudes, qué equipo de snorkel es indispensable y cómo planificar una caminata de regreso bajo la luz de la luna llena. Prepárate para descubrir el lado más salvaje y puro del Caribe colombiano.",
      image: "https://i.postimg.cc/P5vVq7tQ/IMG_0452_(1).jpg",
      category: "Aventura",
    },
  ],
  apartments: [
    {
      id: "studio-1",
      name: "STUDIO 1",
      level: "Apartaestudio Privado",
      specs: {
        rooms: "1 Hab.",
        kitchen: "Cocina Privada",
        bath: "Baño Privado",
        view: "Vista Jardín",
      },
      longDesc:
        "Privacidad absoluta con cocina propia. Recién remodelado con cama circular y Wi-Fi de alta velocidad.",
      images: [
        "https://i.postimg.cc/qqCpVnPp/34f0f156_eda6_4006_926c_c9093adf6047.jpg",
        "https://i.postimg.cc/LhK2H5pr/522727ce_c67c_4565_96a5_cb30c49bbf0c.jpg",
      ],
      video: "xo2c9JENscc",
      amenities: ["Wi-Fi 300 Mbps", "AC", "Cama Circular", "Cocina Privada"],
      bookingLink:
        "https://engine.lobbypms.com/la-magia-del-atardecer/room/48360",
    },
    {
      id: "studio-2",
      name: "STUDIO 2",
      level: "Refugio Privado",
      specs: {
        rooms: "1 Hab.",
        kitchen: "Cocina Privada",
        bath: "Baño Privado",
        view: "Vista Jardín",
      },
      longDesc:
        "Espacio diseñado para el descanso y la productividad. Cocina privada equipada y Wi-Fi de 300 Mbps.",
      images: [
        "https://i.postimg.cc/cLd6Ykq0/638df492_e49a_4e6f_8175_1ecf8f4f2b65.jpg",
        "https://i.postimg.cc/rwqzWZ6d/1506b5aa_ed7f_43d5_92c9_912f75c62299.jpg",
      ],
      video: "xo2c9JENscc",
      amenities: ["Wi-Fi 300 Mbps", "Escritorio", "Cocina Privada"],
      bookingLink:
        "https://engine.lobbypms.com/la-magia-del-atardecer/room/48361",
    },
    {
      id: "apto-3",
      name: "APARTAMENTO 3",
      level: "Refugio Familiar",
      specs: {
        rooms: "1 Hab.",
        kitchen: "Cocina",
        bath: "Baño Privado",
        view: "Vista Mar & Montaña",
        extra: "Salida a Terraza",
      },
      longDesc:
        "Espacio acogedor ideal para grupos o familias pequeñas. Camas artesanales, hamaca interna y mucha luz natural.",
      images: [
        "https://i.postimg.cc/jS90KChS/08d634de_1a4d_4ba1_89f9_a485de45902d6.jpg",
        "https://i.postimg.cc/fRFnZkvw/12941755_5b30_4ffb_ab02_589d7ae25b37.jpg",
      ],
      video: "xo2c9JENscc",
      amenities: [
        "Capacidad 7 pers.",
        "Cocina a Gas",
        "Hamaca",
        "Terraza Compartida",
      ],
      bookingLink:
        "https://engine.lobbypms.com/la-magia-del-atardecer/room/48363",
    },
    {
      id: "studio-3-1",
      name: "STUDIO 3.1",
      level: "PENTHOUSE",
      specs: {
        rooms: "1 Hab.",
        kitchen: "Cocina Privada",
        bath: "Baño Privado",
        view: "Vista Mar Directa",
        extra: "Salida a Terraza",
      },
      longDesc:
        "Punto más alto del refugio con terraza panorámica y vistas 360°. El bungalow de la cima.",
      images: [
        "https://i.postimg.cc/mg9VzDss/13931daa_6d25_4806_8b8b_266595022e61_(1).jpg",
        "https://i.postimg.cc/kgSw64dk/3571c83a_4dd7_4641_bb18_9e574b70f6f9_(1).jpg",
      ],
      video: "xo2c9JENscc",
      amenities: ["Vistas 360°", "Cama Circular", "Terraza Privada"],
      bookingLink:
        "https://engine.lobbypms.com/la-magia-del-atardecer/room/48365",
    },
    {
      id: "campesina",
      name: "CAMPESINA",
      level: "Cabaña Privada",
      specs: {
        rooms: "1 Hab.",
        kitchen: "Nevera",
        bath: "Baño Privado",
        extra: "Balcón & Baño Externo Privado",
      },
      longDesc:
        "Cabaña exclusiva con balcón privado con vista parcial al mar. Dispone de nevera para snacks y bebidas.",
      images: [
        "https://i.postimg.cc/HnWb6YR4/00846291_b59e_4789_8091_4df58c329e9b.jpg",
        "https://i.postimg.cc/rwqzWZ6d/1506b5aa_ed7f_43d5_92c9_912f75c62299.jpg",
      ],
      video: "xo2c9JENscc",
      amenities: ["Balcón Mar", "Baño Externo", "Privado", "Nevera"],
      bookingLink:
        "https://engine.lobbypms.com/la-magia-del-atardecer/room/48362",
    },
  ],
  viewGallery: [
    "https://i.postimg.cc/kXL6VZLy/IMG_6805_Original.jpg",
    "https://i.postimg.cc/zBZs5rWs/IMG_6489_EDIT.jpg",
    "https://i.postimg.cc/L4VcdGXd/IMG_1945.jpg",
    "https://i.postimg.cc/P5vVq7tQ/IMG_0452_(1).jpg",
    "https://i.postimg.cc/hGbrzWNb/IMG_3151.jpg",
  ],
  timeline: [
    {
      year: "2001",
      title: "Nuestras Raíces",
      desc: "Llegamos hace más de 20 años a Taganga. Aprendimos a vivir despacio.",
      img: "https://i.postimg.cc/zBZs5rWs/IMG_6489_EDIT.jpg",
    },
    {
      year: "2021",
      title: "Apertura",
      desc: "Abrimos las puertas para compartir nuestro hogar con el mundo. Proyecto familiar construido con conciencia.",
      img: "https://i.postimg.cc/L4VcdGXd/IMG_1945.jpg",
    },
    {
      year: "Hoy",
      title: "Santuario Consciente",
      desc: "Un refugio para reconectar, sanar y descubrir la esencia de Colombia.",
      img: "https://i.postimg.cc/hGbrzWNb/IMG_3151.jpg",
    },
  ],
};

// MAPA DE ICONOS PARA EL MENÚ
const MENU_ICONS_MAP = {
  home: Sunset,
  about: Users,
  activities: Compass,
  location: MapPin,
  experiences: Sparkles,
  rent: Building2,
  gallery: Camera,
  blog: BookOpen,
};

const App = () => {
  const [lang, setLang] = useState("es");
  const [mode, setMode] = useState("vacation");
  const [activePage, setActivePage] = useState("home");
  const [selectedApt, setSelectedApt] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [lightbox, setLightbox] = useState({
    open: false,
    index: 0,
    images: [],
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeActivityTab, setActiveActivityTab] = useState("mar");

  const t = SITE_DATA.translations[lang] || SITE_DATA.translations["es"];
  const getText = (obj) => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    const val = obj[lang] || obj["es"] || "";
    return typeof val === "string" ? val : "";
  };

  const actionLabel = mode === "coliving" ? "Consultar" : "Reservar Ahora";

  const handleBookingAction = (link, aptName = "") => {
    if (mode === "coliving") {
      const message = aptName
        ? `Hola, solicito información sobre el coliving en ${aptName}`
        : "Hola, solicito información sobre el coliving";
      window.open(
        `https://wa.me/573212021448?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } else {
      window.open(link, "_blank");
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToPage = (id) => {
    setSelectedApt(null);
    setSelectedPost(null);
    setActivePage(id);
    setIsSideMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleSelectApt = (apt) => {
    if (!apt) return;
    setSelectedApt(apt);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const handleSelectPost = (post) => {
    if (!post) return;
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleCloseDetail = () => {
    setSelectedApt(null);
  };
  const handleClosePost = () => {
    setSelectedPost(null);
  };

  // --- Funciones de Renderizado ---

  const renderFooter = (onBackAction) => (
    <footer className="bg-[#0a0a0a] text-white pt-8 pb-12 px-6 border-t border-white/5 relative z-10 text-left italic">
      <div className="container mx-auto max-w-7xl italic">
        <div className="flex justify-center mb-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex flex-col items-center gap-2 text-stone-500 hover:text-orange-500 transition-all duration-500"
          >
            <div className="p-3 rounded-full border border-stone-800 group-hover:border-orange-500 group-hover:bg-orange-500/5 transition-all shadow-lg">
              <ArrowUp
                size={20}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">
              Volver Arriba
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-4 items-start border-t border-white/5 pt-12">
          <div className="md:col-span-7 lg:col-span-8 space-y-8">
            <h3 className="text-2xl font-serif italic text-stone-300">
              "{t.footerDesc}"
            </h3>
            <div className="flex gap-12 text-[10px] uppercase font-black tracking-widest text-orange-600 w-fit">
              <div className="flex flex-col">
                <span className="opacity-50 mb-1 italic">Trayectoria</span>
                <span>20 Años</span>
              </div>
              <div className="flex flex-col">
                <span className="opacity-50 mb-1 italic">Valoración</span>
                <span>{SITE_DATA.general.rating} / 5.0</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-end gap-10">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-right w-full sm:w-auto">
              {[
                "about",
                "activities",
                "location",
                "experiences",
                "rent",
                "gallery",
                "blog",
              ].map((id) => (
                <button
                  key={id}
                  onClick={() =>
                    onBackAction ? onBackAction() : navigateToPage(id)
                  }
                  className="text-[11px] uppercase font-bold tracking-[0.15em] text-stone-400 hover:text-white transition-colors uppercase"
                >
                  {t.menu[id]}
                </button>
              ))}
            </div>
            <div className="space-y-4 text-right w-full sm:w-auto border-t border-white/5 pt-6 italic">
              <div className="flex items-center justify-end gap-3 group text-xs text-stone-400 hover:text-white transition-colors">
                <Mail size={16} className="text-orange-500" />
                <a href={`mailto:${SITE_DATA.general.email}`}>
                  {SITE_DATA.general.email}
                </a>
              </div>
              <div className="flex items-center justify-end gap-3 group text-xs font-bold">
                <MessageCircle size={16} className="text-green-500" />
                <a
                  href={`https://wa.me/573212021448`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  {SITE_DATA.general.phone}
                </a>
              </div>
              <div className="flex justify-end gap-6 pt-6 border-t border-white/5">
                <a
                  href={SITE_DATA.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-500 hover:text-orange-500 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={SITE_DATA.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-500 hover:text-orange-500 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={SITE_DATA.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-500 hover:text-orange-500 transition-colors"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href={SITE_DATA.social.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-500 hover:text-orange-500 transition-colors"
                >
                  <TikTokIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  const renderHomeView = () => (
    <div className="animate-fade-in font-sans italic text-left">
      <header className="h-screen relative w-full overflow-hidden flex flex-col items-center bg-[#0a0a0a]">
        <div className="absolute inset-0 w-full h-full">
          <ImageCarousel
            images={SITE_DATA.hero.images}
            alt="Hero"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/15 z-[15]" />
        <div className="absolute inset-0 flex flex-col items-center pt-32 md:pt-40 px-6 pointer-events-none text-center italic z-[20]">
          <span className="bg-orange-600 px-3 py-1 text-[8px] font-bold uppercase text-white mb-4 inline-block tracking-[0.5em] shadow-2xl rounded-sm italic">
            Taganga, Colombia
          </span>
          <h1 className="text-xl md:text-3xl font-serif font-bold text-white drop-shadow-2xl leading-none tracking-widest uppercase italic">
            {getText(SITE_DATA.hero.title)}
          </h1>
        </div>
        <div className="absolute bottom-10 right-10 z-[25] pointer-events-auto">
          <button
            onClick={() =>
              setLightbox({
                open: true,
                images: SITE_DATA.viewGallery,
                index: 0,
              })
            }
            className="flex items-center gap-3 text-white/70 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.4em] group italic"
          >
            <Camera
              size={18}
              className="group-hover:scale-110 transition-transform"
            />{" "}
            Ver Vistas
          </button>
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-white/60 z-[20]">
          <ArrowDown size={24} className="animate-bounce" />
        </div>
      </header>

      <section className="py-20 bg-[#fcfcfc] text-center italic">
        <div className="container mx-auto px-6 max-w-5xl italic">
          <a
            href={SITE_DATA.general.airbnbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center mb-10 gap-3 hover:scale-105 transition-transform cursor-pointer italic"
          >
            <div className="flex items-center gap-1 text-orange-500 italic">
              {[...Array(5)].map((_, i) => (
                <Star key={`rating-h-${i}`} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-500 group-hover:text-orange-600 transition-colors italic">
              VALORACIÓN:{" "}
              <span className="text-orange-600">
                {SITE_DATA.general.rating} / 5.0
              </span>{" "}
              EN AIRBNB
            </p>
          </a>

          <div className="flex justify-center mb-16 italic">
            <div className="bg-stone-100 p-1.5 rounded-full flex shadow-inner border border-stone-200 max-w-[340px] w-full overflow-hidden italic">
              <button
                onClick={() => setMode("vacation")}
                className={`flex-1 py-3.5 px-4 rounded-full text-[9px] font-black uppercase transition-all duration-500 ${
                  mode === "vacation"
                    ? "bg-orange-600 text-white shadow-lg"
                    : "text-stone-400 hover:text-stone-600"
                }`}
              >
                Vacaciones
              </button>
              <button
                onClick={() => setMode("coliving")}
                className={`flex-1 py-3.5 px-4 rounded-full text-[9px] font-black uppercase transition-all duration-500 ${
                  mode === "coliving"
                    ? "bg-orange-600 text-white shadow-lg"
                    : "text-stone-400 hover:text-stone-600"
                }`}
              >
                Co-Living
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-12 md:gap-20 max-w-4xl mx-auto italic">
            {SITE_DATA.apartments.map((apt) => (
              <div
                key={apt.id}
                id={`apt-card-${apt.id}`}
                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-stone-50 group flex flex-col hover:shadow-orange-500/10 transition-all duration-700 relative cursor-pointer text-left italic"
                onClick={() => handleSelectApt(apt)}
              >
                <div className="h-96 relative overflow-hidden italic">
                  <img
                    src={(apt.images && apt.images[0]) || ""}
                    alt={apt.name}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 italic"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all italic" />
                  <div className="absolute top-8 left-8 italic">
                    <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#0a0a0a] italic">
                      Premium Stay
                    </div>
                  </div>
                </div>
                <div className="p-10 italic">
                  <div className="flex justify-between items-center mb-6 italic italic">
                    <span className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.5em] italic">
                      {apt.level}
                    </span>
                    <div className="flex items-center gap-1 text-orange-400 italic">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={`star-c-${apt.id}-${i}`}
                          size={14}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#0a0a0a] mb-6 tracking-tighter uppercase leading-none italic italic">
                    {apt.name}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4 mb-10 pb-8 border-b border-stone-50 italic italic">
                    {apt.specs.rooms && (
                      <div className="flex items-center gap-3 italic">
                        <Bed size={16} className="text-orange-600 opacity-80" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600 italic">
                          {apt.specs.rooms}
                        </span>
                      </div>
                    )}
                    {apt.specs.kitchen && (
                      <div className="flex items-center gap-3 italic">
                        <Utensils
                          size={16}
                          className="text-orange-600 opacity-80"
                        />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600 italic">
                          {apt.specs.kitchen}
                        </span>
                      </div>
                    )}
                    {apt.specs.bath && (
                      <div className="flex items-center gap-3 italic">
                        <Bath
                          size={16}
                          className="text-orange-600 opacity-80"
                        />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600 italic">
                          {apt.specs.bath}
                        </span>
                      </div>
                    )}
                  </div>
                  <button className="w-full py-5 bg-[#0a0a0a] text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-xl group-hover:bg-orange-600 transition-all duration-700 shadow-xl flex items-center justify-center gap-4 uppercase italic italic italic">
                    Ver Detalles <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {renderFooter()}
    </div>
  );

  const renderBlogView = () => (
    <div className="pt-24 min-h-screen bg-[#fcfcfc] animate-fade-in italic">
      <header className="py-20 text-center italic">
        <h2 className="text-4xl md:text-7xl font-serif font-bold uppercase tracking-tighter mb-4 italic">
          Nuestro Blog
        </h2>
        <p className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-black italic">
          Historias de la Montaña y el Mar
        </p>
      </header>
      <section className="container mx-auto px-6 max-w-7xl pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SITE_DATA.blog.map((post) => (
            <div
              key={post.id}
              onClick={() => handleSelectPost(post)}
              className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-100 hover:shadow-2xl transition-all duration-500 flex flex-col italic"
            >
              <div className="h-64 overflow-hidden relative italic">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 italic"
                />
                <div className="absolute top-6 left-6 italic">
                  <span className="bg-orange-600 text-white text-[8px] font-black uppercase px-3 py-1 rounded-full tracking-widest italic">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col italic">
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2 italic">
                  {post.date}
                </span>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-orange-600 transition-colors uppercase italic">
                  {post.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-grow italic">
                  "{post.excerpt}"
                </p>
                <div className="flex items-center gap-3 text-orange-600 font-black text-[9px] uppercase tracking-widest italic">
                  Leer Historia{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {renderFooter()}
    </div>
  );

  const renderBlogPostDetail = (post) => (
    <div className="pt-0 min-h-screen bg-[#fcfcfc] animate-fade-in italic">
      <header className="h-[60vh] relative w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
        <img
          src={post.image}
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 italic"
          alt={post.title}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fcfcfc] italic" />
        <button
          onClick={handleClosePost}
          className="absolute top-10 right-8 md:right-16 z-50 p-4 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-white hover:bg-black/40 transition-all active:scale-95 italic"
        >
          <X size={24} />
        </button>
        <div className="container mx-auto px-6 text-center relative z-10 italic">
          <span className="bg-orange-600 text-white text-[8px] font-black uppercase px-4 py-1.5 rounded-full tracking-[0.3em] mb-6 inline-block italic">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-white uppercase tracking-tighter leading-none italic">
            {post.title}
          </h1>
          <p className="text-stone-300 text-xs md:text-sm uppercase tracking-widest mt-6 font-bold italic">
            {post.date}
          </p>
        </div>
      </header>
      <article className="py-20 container mx-auto px-6 max-w-3xl italic">
        <div className="space-y-8 text-lg text-stone-600 leading-relaxed italic">
          <p className="text-2xl font-serif italic text-stone-900 border-l-4 border-orange-600 pl-8 italic">
            "{post.excerpt}"
          </p>
          <p>{post.content}</p>
          <p>
            Nuestra misión siempre ha sido compartir la esencia de Taganga desde
            una perspectiva consciente. Invitamos a cada lector a ser parte de
            esta historia, no solo como visitantes, sino como guardianes de la
            montaña.
          </p>
        </div>
        <div className="mt-20 pt-10 border-t border-stone-100 flex justify-center italic">
          <button
            onClick={handleClosePost}
            className="flex items-center gap-4 text-stone-400 hover:text-orange-600 transition-colors uppercase text-[10px] font-black tracking-[0.6em] group italic"
          >
            <ChevronLeft
              size={20}
              className="group-hover:-translate-x-2 transition-transform"
            />{" "}
            Volver al Blog
          </button>
        </div>
      </article>
      {renderFooter(handleClosePost)}
    </div>
  );

  const renderDetailView = (apt) => {
    if (!apt) return null;
    return (
      <div className="pt-0 min-h-screen bg-[#fcfcfc] animate-fade-in font-sans text-left italic">
        <section className="relative h-[80vh] md:h-screen w-full overflow-hidden flex items-center justify-center bg-stone-200 shadow-inner italic">
          <img
            src={(apt.images && apt.images[0]) || ""}
            alt={apt.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-105 italic"
          />
          <div className="absolute inset-0 bg-black/5 italic" />
          <button
            onClick={handleCloseDetail}
            className="absolute top-10 right-8 md:right-16 z-50 p-4 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-white hover:bg-black/40 transition-all active:scale-95 italic"
          >
            <X size={24} />
          </button>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 italic">
            <ArrowDown size={24} className="animate-bounce italic" />
          </div>
        </section>
        <section className="py-12 md:py-24 container mx-auto px-6 max-w-7xl text-left italic">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start italic">
            <div className="lg:col-span-8 space-y-10 text-left italic">
              <div>
                <span className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-2 block underline underline-offset-8 decoration-orange-200 italic italic">
                  Alojamiento Premium
                </span>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tighter uppercase italic italic italic italic">
                  {apt.name}
                </h2>
                <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-serif italic border-l-4 border-orange-500 pl-8 py-2 mb-10 italic italic italic italic">
                  "{apt.longDesc}"
                </p>
              </div>
              <div className="pt-20 space-y-20 italic">
                <div className="space-y-10 italic">
                  <div className="text-left border-b border-stone-100 pb-6 italic italic italic italic italic italic italic">
                    <h3 className="text-3xl font-serif italic uppercase tracking-tighter italic italic italic italic italic">
                      La Atmósfera
                    </h3>
                    <p className="text-stone-400 text-sm italic italic italic italic italic italic italic">
                      Siente el espacio en movimiento
                    </p>
                  </div>
                  <div className="relative w-full rounded-[3rem] overflow-hidden shadow-2xl bg-stone-900 aspect-video group italic italic italic italic italic italic italic">
                    <iframe
                      src={`https://www.youtube.com/embed/${apt.video}?autoplay=1&mute=1&loop=1&playlist=${apt.video}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                      className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 pointer-events-none italic italic italic italic italic italic italic italic"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="Atmosfera"
                    />
                  </div>
                </div>
                <div className="space-y-10 italic italic italic italic italic italic italic">
                  <div className="flex justify-between items-end border-b border-stone-100 pb-6 italic italic italic italic italic italic italic italic">
                    <div className="italic text-left italic italic italic italic italic italic italic italic italic">
                      <h3 className="text-3xl font-serif italic uppercase tracking-tighter italic italic italic italic italic italic italic italic italic">
                        Mood Board
                      </h3>
                      <p className="text-stone-400 text-sm italic italic italic italic italic italic italic italic italic italic italic">
                        Curaduría visual del refugio
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setLightbox({
                          open: true,
                          index: 0,
                          images: apt.images,
                        })
                      }
                      className="text-orange-600 font-black text-[9px] uppercase tracking-widest flex items-center gap-3 hover:gap-6 transition-all duration-300 italic italic italic italic italic italic italic italic italic italic italic"
                    >
                      Ver Galería <Maximize2 size={12} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[500px] italic italic italic italic italic italic italic italic italic italic italic italic">
                    <div
                      className="md:col-span-8 relative overflow-hidden rounded-[2.5rem] shadow-xl group cursor-pointer italic italic italic italic italic italic italic italic italic italic italic italic italic italic"
                      onClick={() =>
                        setLightbox({
                          open: true,
                          index: 1,
                          images: apt.images,
                        })
                      }
                    >
                      <img
                        src={apt.images && apt.images[1]}
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 italic italic italic italic italic italic italic italic italic italic italic italic italic italic"
                        alt="Detalle"
                      />
                    </div>
                    <div className="md:col-span-4 grid grid-rows-2 gap-4 italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic">
                      <div
                        className="relative overflow-hidden rounded-[2rem] shadow-lg cursor-pointer group italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic"
                        onClick={() =>
                          setLightbox({
                            open: true,
                            index: 0,
                            images: apt.images,
                          })
                        }
                      >
                        <img
                          src={apt.images && apt.images[0]}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic"
                          alt="Detalle"
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] flex flex-col items-center justify-center p-8 text-center text-white border border-white/5 shadow-xl italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic">
                        <Sparkles
                          className="mb-4 text-orange-600 italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic"
                          size={32}
                        />
                        <p className="font-serif italic text-lg leading-tight italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic italic">
                          "Espacios curados para almas libres."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 sticky top-32 italic italic italic italic italic italic italic italic italic italic">
              <div className="bg-[#0a0a0a] p-10 rounded-[2.5rem] text-white shadow-3xl relative overflow-hidden border border-white/5 italic italic italic italic italic italic italic italic italic italic italic">
                <h3 className="text-xl font-serif mb-6 italic text-center uppercase tracking-widest italic italic italic italic italic italic italic italic italic italic italic italic italic">
                  {actionLabel}
                </h3>
                <button
                  onClick={() =>
                    handleBookingAction(
                      apt.bookingLink || SITE_DATA.general.bookingEngineLink,
                      apt.name
                    )
                  }
                  className="w-full py-5 bg-orange-600 text-white font-bold uppercase text-[10px] tracking-[0.5em] rounded-xl hover:bg-orange-700 transition-all shadow-xl active:scale-95 text-center block uppercase italic italic italic italic italic italic italic italic italic italic italic italic italic italic"
                >
                  {" "}
                  {actionLabel}{" "}
                </button>

                <button
                  onClick={() =>
                    window.open(SITE_DATA.general.youtubeCTA, "_blank")
                  }
                  className="w-full mt-4 py-4 border border-white/20 text-white font-bold uppercase text-[9px] tracking-[0.4em] rounded-xl hover:bg-white/10 transition-all active:scale-95 text-center flex items-center justify-center gap-3 italic italic italic"
                >
                  {" "}
                  <Youtube size={16} className="text-red-600" /> Ver Canal
                  YouTube{" "}
                </button>
              </div>
            </div>
          </div>
        </section>
        {renderFooter(handleCloseDetail)}
      </div>
    );
  };

  const renderContent = () => {
    if (selectedApt) return renderDetailView(selectedApt);
    if (selectedPost) return renderBlogPostDetail(selectedPost);

    switch (activePage) {
      case "home":
        return renderHomeView();
      case "about":
        return (
          <div className="pt-0 min-h-screen bg-[#fcfcfc] animate-fade-in font-sans text-left italic italic">
            <header className="h-[70vh] relative w-full overflow-hidden flex items-center justify-center bg-stone-900">
              <img
                src="https://i.postimg.cc/zBZs5rWs/IMG_6489_EDIT.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-60 italic"
                alt="Nosotros"
              />
              <div className="absolute inset-0 bg-black/20 italic" />
              <h2 className="text-2xl md:text-4xl font-serif font-light italic text-white relative z-10 uppercase tracking-[0.4em] italic italic italic">
                Nuestra Alma
              </h2>
            </header>
            <section className="py-20 md:py-32 container mx-auto px-6 max-w-7xl italic text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24 italic">
                <div className="lg:col-span-4 relative italic">
                  <span className="text-orange-600 font-serif text-[8rem] md:text-[10rem] font-bold opacity-10 absolute -top-16 -left-12 select-none italic italic italic">
                    20
                  </span>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0a0a0a] relative z-10 leading-tight tracking-tighter uppercase mb-8 italic italic italic">
                    Sobre <br /> Nosotros.
                  </h2>
                  <div className="flex items-center gap-4 text-orange-600 pt-4 hidden lg:flex italic">
                    <Heart size={20} className="italic" />{" "}
                    <span className="text-[10px] font-black uppercase tracking-widest italic italic italic">
                      Hecho con Amor y Conciencia
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-8 text-stone-500 leading-relaxed text-lg italic italic italic italic">
                  <p className="text-2xl text-stone-800 font-serif italic border-l-4 border-orange-600 pl-8 py-2 italic italic italic italic italic">
                    "Este lugar no nació como un hotel. Es nuestra casa."
                  </p>
                  <p>
                    Vivimos aquí desde hace <strong>más de 20 años</strong>, en
                    las colinas de Taganga. Durante todo este tiempo, este hogar
                    nos ha enseñado a vivir despacio y a comprender la energía
                    ancestral del territorio.
                  </p>
                </div>
              </div>
              <div className="relative mb-32 max-w-5xl mx-auto italic italic italic italic">
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-[2px] h-full bg-stone-100 z-0 italic italic italic" />
                <div className="space-y-16 relative z-10 italic italic italic italic">
                  {(SITE_DATA.timeline || []).map((item, idx) => (
                    <div
                      key={idx}
                      className={`relative flex flex-col md:flex-row items-center gap-8 ${
                        idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      } italic`}
                    >
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-orange-600 rounded-full shadow-md z-20 italic italic italic" />
                      <div className="w-full md:w-[45%] overflow-hidden rounded-[2.5rem] shadow-lg aspect-video italic italic italic italic">
                        <img
                          src={item.img}
                          className="w-full h-full object-cover"
                          alt={item.year}
                        />
                      </div>
                      <div className="w-full md:w-[45%] text-left p-8 bg-white rounded-[2.5rem] shadow-md border border-stone-50 italic italic italic italic">
                        <span className="text-orange-600 font-serif font-bold text-5xl block mb-2 tracking-tighter uppercase italic italic italic italic italic">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-serif font-bold mb-2 text-[#0a0a0a] uppercase tracking-widest italic italic italic italic italic italic italic">
                          {item.title}
                        </h4>
                        <p className="text-stone-500 text-sm font-light leading-relaxed italic italic italic italic italic italic italic italic">
                          "{item.desc}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {renderFooter()}
          </div>
        );
      case "activities":
        return (
          <div className="pt-0 min-h-screen bg-white animate-fade-in font-sans text-left italic">
            <header className="h-[70vh] relative w-full overflow-hidden flex items-center justify-center bg-stone-900 text-center italic">
              <img
                src="https://i.postimg.cc/zBZs5rWs/IMG_6489_EDIT.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-60 italic"
                alt="Actividades"
              />
              <div className="absolute inset-0 bg-black/30 italic" />
              <div className="container mx-auto px-6 relative z-10 italic italic italic">
                <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block underline italic tracking-widest italic italic italic">
                  Explora el Territorio
                </span>
                <h1 className="text-3xl md:text-6xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-6 italic italic italic italic">
                  🌿 Actividades & Aventuras
                </h1>
              </div>
            </header>
            <section className="py-20 text-center italic italic">
              <div className="container mx-auto px-6 max-w-7xl italic">
                <div className="flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-3 mb-16 pb-4 italic border-b border-stone-100 no-scrollbar italic">
                  {[
                    { id: "mar", label: "🌊 Agua & Viento" },
                    { id: "aventura", label: "🥾 Selva & Selva" },
                    { id: "playas", label: "🏖️ Rutas de Playa" },
                    { id: "cultura", label: "✨ Esencia & Bienestar" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveActivityTab(tab.id)}
                      className={`whitespace-nowrap px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                        activeActivityTab === tab.id
                          ? "bg-orange-600 text-white shadow-xl scale-105"
                          : "bg-stone-100 text-stone-400 hover:bg-stone-200"
                      } italic`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="animate-fade-in text-left italic">
                  <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] mb-16 relative group italic italic">
                    <img
                      src={
                        activeActivityTab === "mar"
                          ? "https://i.postimg.cc/kXL6VZLy/IMG_6805_Original.jpg"
                          : activeActivityTab === "aventura"
                          ? "https://i.postimg.cc/L4VcdGXd/IMG_1945.jpg"
                          : activeActivityTab === "playas"
                          ? "https://i.postimg.cc/P5vVq7tQ/IMG_0452_(1).jpg"
                          : "https://i.postimg.cc/hGbrzWNb/IMG_3151.jpg"
                      }
                      className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-110 italic italic"
                      alt="Actividad"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent italic" />
                    <div className="absolute bottom-12 left-12 italic italic">
                      <h2 className="text-white text-4xl md:text-6xl font-serif italic uppercase tracking-tighter italic italic">
                        Explora la Esencia
                      </h2>
                    </div>
                  </div>
                  {activeActivityTab === "mar" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 italic">
                      <div className="space-y-12 italic">
                        <div className="bg-stone-50 p-10 rounded-[3rem] border border-stone-100 italic italic">
                          <Waves
                            className="text-orange-600 mb-6 italic"
                            size={40}
                          />
                          <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4 italic italic">
                            🐠 Snorkel (Careteo)
                          </h3>
                          <p className="text-stone-500 text-sm italic italic italic">
                            Los mejores puntos: Playa Grande, Sisiguaca, Bahía
                            Concha y Granate. Equipos disponibles en playa.
                          </p>
                        </div>
                        <div className="bg-[#0a0a0a] p-10 rounded-[3rem] text-white italic italic italic">
                          <Anchor
                            className="text-orange-600 mb-6 italic"
                            size={40}
                          />
                          <h3 className="text-2xl font-serif italic mb-4">
                            ⛵ Velero al Atardecer
                          </h3>
                          <p className="text-stone-400 text-sm italic italic italic">
                            Navegar por la Bahía de Santa Marta. Cenas
                            románticas y snorkel en calas privadas.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-12 italic">
                        <div className="bg-white p-10 rounded-[3rem] border border-stone-100 shadow-sm relative overflow-hidden italic italic italic">
                          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 italic italic italic">
                            🤿 Buceo – Taganga
                          </h3>
                          <p className="text-stone-500 text-sm italic italic italic">
                            Instructores PADI certificados. Taganga es el
                            principal centro de buceo del país.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeActivityTab === "aventura" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 italic">
                      <div className="bg-stone-50 p-10 rounded-[3rem] border border-stone-100 italic">
                        <Mountain
                          className="text-orange-600 mb-6 italic"
                          size={48}
                        />
                        <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4 italic italic">
                          🥾 Senderismo Tayrona
                        </h3>
                        <p className="text-stone-500 text-sm leading-relaxed mb-6 italic">
                          Cabo San Juan (2.5h) o ruta ancestral a Pueblito
                          Chairama (4h).
                        </p>
                        <div className="bg-stone-900 p-8 rounded-3xl text-white italic">
                          <h4 className="text-xl font-serif italic mb-4 italic">
                            🏞️ Ciudad Perdida
                          </h4>
                          <p className="text-stone-400 text-sm italic">
                            4 días por la selva profunda hasta la ciudad
                            ancestral indígena.
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#fcfcfc] p-10 rounded-[3rem] border border-stone-100 italic">
                        <Coffee
                          className="text-orange-600 mb-6 italic"
                          size={40}
                        />
                        <h3 className="text-2xl font-serif italic mb-4 italic">
                          🌄 Minca Ecológica
                        </h3>
                        <p className="text-stone-500 text-sm italic">
                          Sierra Nevada (40 min). Cascadas Marinka y fincas
                          cafeteras locales.
                        </p>
                      </div>
                    </div>
                  )}
                  {activeActivityTab === "playas" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 italic">
                      <div className="p-10 bg-stone-50 rounded-[3rem] italic">
                        <h4 className="text-orange-600 font-bold uppercase text-[10px] tracking-widest mb-6 italic italic">
                          Taganga
                        </h4>
                        <ul className="space-y-4 italic text-stone-600 font-serif italic">
                          <li>Bahía de Taganga</li>
                          <li>Playa Grande</li>
                          <li>Sisiguaca</li>
                        </ul>
                      </div>
                      <div className="p-10 bg-white border border-stone-100 rounded-[3rem] shadow-sm italic">
                        <h4 className="text-orange-600 font-bold uppercase text-[10px] tracking-widest mb-6 italic italic">
                          Playas Urbanas
                        </h4>
                        <ul className="space-y-4 italic text-stone-600 font-serif italic">
                          <li>Bahía Santa Marta</li>
                          <li>El Rodadero</li>
                          <li>Playa Blanca</li>
                        </ul>
                      </div>
                      <div className="p-10 bg-stone-900 text-white rounded-[3rem] italic">
                        <h4 className="text-orange-500 font-bold uppercase text-[10px] tracking-widest mb-6 italic italic">
                          Parque Tayrona
                        </h4>
                        <ul className="space-y-4 italic text-stone-400 font-serif italic">
                          <li>Bahía Concha</li>
                          <li>Playa Cristal</li>
                          <li>Cabo San Juan</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {activeActivityTab === "cultura" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 italic">
                      <div className="space-y-10 italic">
                        <h3 className="text-3xl font-serif italic text-stone-900 italic">
                          🏛️ Cultura & Bienestar
                        </h3>
                        <div className="space-y-8 border-l-2 border-orange-100 pl-8 italic">
                          <div>
                            <h5 className="font-bold text-xs uppercase tracking-widest mb-1 italic">
                              Centro Histórico
                            </h5>
                            <p className="text-stone-400 text-sm italic">
                              Arquitectura colonial y Camellón de la Bahía al
                              atardecer.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-bold text-xs uppercase tracking-widest mb-1 italic">
                              Slow Travel
                            </h5>
                            <p className="text-stone-400 text-sm">
                              Yoga al amanecer e integración profunda con la
                              montaña.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
            {renderFooter(() => navigateToPage("home"))}
          </div>
        );
      case "location":
        return (
          <div className="pt-0 min-h-screen bg-[#fcfcfc] animate-fade-in font-sans text-left italic italic">
            <header className="h-[80vh] relative w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
              <img
                src="https://i.postimg.cc/kXL6VZLy/IMG_6805_Original.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110 italic"
                alt="Vista"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fcfcfc] italic" />
              <div className="container mx-auto px-6 text-center relative z-10 italic">
                <div className="inline-flex items-center gap-3 bg-orange-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl animate-bounce italic">
                  <Navigation size={14} /> Posición Privilegiada
                </div>
                <h1 className="text-3xl md:text-6xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-6 italic">
                  Donde el Sol <br />{" "}
                  <span className="text-orange-500 italic">Toca el Mar</span>
                </h1>
                <p className="text-stone-300 text-sm md:text-xl max-w-2xl mx-auto font-light leading-relaxed italic italic">
                  Sobre la carretera principal de Taganga. Transporte en la{" "}
                  <strong>puerta de tu casa</strong>.
                </p>
                <div className="mt-12 flex justify-center italic italic">
                  <button
                    onClick={() =>
                      window.open(SITE_DATA.general.googleMapsLink, "_blank")
                    }
                    className="px-10 py-5 bg-white text-stone-900 text-[10px] font-black uppercase tracking-[0.4em] rounded-2xl hover:bg-orange-600 hover:text-white transition-all shadow-3xl flex items-center gap-4 italic italic"
                  >
                    Ir a Google Maps <MapIcon size={16} />
                  </button>
                </div>
              </div>
            </header>
            <section className="py-24 bg-white italic">
              <div className="container mx-auto px-6 max-w-7xl italic">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center italic">
                  <div className="relative order-2 lg:order-1 text-center italic italic">
                    <div className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] border-2 border-dashed border-orange-200 rounded-full flex items-center justify-center relative animate-spin-slow mx-auto italic italic">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 text-center italic italic">
                        <Sunset
                          className="text-orange-600 mb-2 mx-auto italic"
                          size={32}
                        />
                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 italic">
                          Punto Cero
                        </p>
                        <p className="font-serif font-bold text-stone-900 italic">
                          La Magia
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 italic italic">
                      <span className="text-orange-600 font-serif text-8xl md:text-[14rem] font-bold opacity-10 italic italic">
                        300
                      </span>
                      <div className="bg-white/90 backdrop-blur-md p-8 rounded-[3rem] shadow-2xl border border-orange-50 -mt-10 italic italic">
                        <h3 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mb-2 italic">
                          Metros Lineales
                        </h3>
                        <p className="text-stone-500 text-[10px] uppercase tracking-[0.4em] font-black text-center italic italic">
                          Distancia Al Mar
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-12 order-1 lg:order-2 italic italic">
                    <h2 className="text-4xl md:text-7xl font-serif tracking-tighter uppercase leading-none italic italic">
                      Frente al <br />{" "}
                      <span className="text-stone-300 italic italic">
                        Infinito
                      </span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 italic">
                      <div className="p-8 bg-stone-50 rounded-[2.5rem] border border-stone-100 group hover:bg-orange-600 hover:text-white transition-all duration-500 italic">
                        <Bus
                          className="text-orange-600 group-hover:text-white mb-4 italic"
                          size={32}
                        />
                        <h4 className="font-bold uppercase text-xs tracking-widest mb-2 italic">
                          Transporte en Puerta
                        </h4>
                        <p className="text-stone-400 group-hover:text-orange-50 text-xs italic">
                          Sobre la carretera, acceso inmediato.
                        </p>
                      </div>
                      <div className="p-8 bg-stone-50 rounded-[2.5rem] border border-stone-100 group hover:bg-stone-900 hover:text-white transition-all duration-500 italic">
                        <ShoppingBag
                          className="text-orange-600 group-hover:text-white mb-4 italic"
                          size={32}
                        />
                        <h4 className="font-bold uppercase text-xs tracking-widest mb-2 italic">
                          Todo a 2 Minutos
                        </h4>
                        <p className="text-stone-400 group-hover:text-stone-50 text-xs italic">
                          Restaurantes y comercio a pasos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {renderFooter(() => navigateToPage("home"))}
          </div>
        );
      case "experiences":
        return (
          <div className="pt-0 min-h-screen bg-[#fcfcfc] animate-fade-in font-sans text-left italic">
            <header className="h-[70vh] relative w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
              <img
                src="https://i.postimg.cc/mg9VzDss/13931daa_6d25_4806_8b8b_266595022e61_(1).jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 italic"
                alt="Atardecer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#fcfcfc] italic" />
              <div className="container mx-auto px-6 text-center relative z-10 italic">
                <h1 className="text-3xl md:text-6xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-6 italic italic italic italic">
                  Atardeceres Únicos
                </h1>
                <p className="text-stone-300 text-sm md:text-xl max-w-2xl mx-auto font-light leading-relaxed italic italic">
                  No es solo ver el sol caer; es habitar el momento desde la
                  cima de la montaña.
                </p>
              </div>
            </header>
            <section className="py-24 space-y-32 italic">
              <div className="container mx-auto px-6 max-w-7xl italic">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center italic">
                  <div className="space-y-8 italic">
                    <span className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.4em] italic">
                      Exclusividad
                    </span>
                    <h2 className="text-4xl md:text-7xl font-serif tracking-tighter uppercase leading-none italic">
                      El Portal <br />{" "}
                      <span className="text-stone-300 italic">de la Cima</span>
                    </h2>
                    <p className="text-stone-500 text-lg leading-relaxed italic">
                      Accede a la parte más alta de nuestra propiedad: El
                      Bungaloo Kogi. Una experiencia privada donde el diseño en
                      madera y palma te envuelve mientras el sol se sumerge
                      directamente en el Mar Caribe.
                    </p>
                  </div>
                  <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[500px] italic">
                    <img
                      src="https://i.postimg.cc/mg9VzDss/13931daa_6d25_4806_8b8b_266595022e61_(1).jpg"
                      className="w-full h-full object-cover italic"
                      alt="Bungaloo"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-stone-900 py-32 text-white italic">
                <div className="container mx-auto px-6 max-w-7xl italic">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center italic">
                    <div className="space-y-8 italic">
                      <span className="text-orange-500 font-bold text-[10px] uppercase tracking-[0.4em] italic">
                        Ritual Social
                      </span>
                      <h2 className="text-4xl md:text-7xl font-serif tracking-tighter uppercase leading-none italic">
                        Vistas desde <br />{" "}
                        <span className="text-stone-600 italic">
                          la Terraza
                        </span>
                      </h2>
                      <p className="text-stone-400 text-lg leading-relaxed italic">
                        Nuestras terrazas compartidas son el eje de la vida
                        social consciente. El balcón natural donde el horizonte
                        se vuelve infinito.
                      </p>
                    </div>
                    <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[500px] italic">
                      <img
                        src="https://i.postimg.cc/P5vVq7tQ/IMG_0452_(1).jpg"
                        className="w-full h-full object-cover italic"
                        alt="Terraces"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mx-auto px-6 max-w-7xl italic">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center italic">
                  <div className="space-y-8 italic">
                    <span className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.4em] italic">
                      Contemplación
                    </span>
                    <h2 className="text-4xl md:text-7xl font-serif tracking-tighter uppercase leading-none italic">
                      La Ruta <br />{" "}
                      <span className="text-stone-300 italic">
                        del Silencio
                      </span>
                    </h2>
                    <p className="text-stone-500 text-lg leading-relaxed italic">
                      Diseñamos nuestros miradores para que no tengas prisa.
                      Equipados con hamacas y sofás profundos, te invitamos a
                      contemplar el cambio de luz.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2 rounded-[4rem] overflow-hidden shadow-2xl h-[500px] italic">
                    <img
                      src="https://i.postimg.cc/hGbrzWNb/IMG_3151.jpg"
                      className="w-full h-full object-cover italic"
                      alt="Miradores"
                    />
                  </div>
                </div>
              </div>
            </section>
            {renderFooter(() => navigateToPage("home"))}
          </div>
        );
      case "rent":
        return (
          <div className="pt-0 min-h-screen bg-[#fcfcfc] animate-fade-in font-sans text-left italic">
            <header className="h-[80vh] relative w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
              <img
                src="https://i.postimg.cc/zBZs5rWs/IMG_6489_EDIT.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 italic"
                alt="Corporate"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#fcfcfc] italic" />
              <div className="container mx-auto px-6 text-center relative z-10 italic">
                <div className="inline-flex items-center gap-3 bg-stone-800 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl italic italic">
                  <Building2 size={16} className="text-orange-600" /> Servicios
                  Corporativos para Empresas
                </div>
                <h1 className="text-3xl md:text-6xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-6 italic italic italic">
                  Sede Estratégica <br />{" "}
                  <span className="text-orange-600 italic italic">
                    De tus Grandes Ideas
                  </span>
                </h1>
              </div>
            </header>
            <section className="py-24 bg-white italic">
              <div className="container mx-auto px-6 max-w-7xl italic">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 italic">
                  <div className="p-12 bg-stone-50 rounded-[4rem] border border-stone-100 hover:shadow-2xl transition-all duration-700 italic group">
                    <div className="w-16 h-16 rounded-[2rem] bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-orange-600 transition-colors italic">
                      <Bed
                        className="text-orange-600 group-hover:text-white"
                        size={32}
                      />
                    </div>
                    <h4 className="text-3xl font-serif italic mb-4 italic italic">
                      🏠 Alojamiento <br /> Corporativo
                    </h4>
                    <p className="text-stone-500 text-sm leading-relaxed italic italic italic">
                      Descanso restaurador para un alto rendimiento de tus
                      equipos de trabajo.
                    </p>
                  </div>
                  <div className="p-12 bg-[#0a0a0a] text-white rounded-[4rem] hover:shadow-orange-600/10 hover:shadow-2xl transition-all duration-700 italic group">
                    <div className="w-16 h-16 rounded-[2rem] bg-orange-600 flex items-center justify-center mb-8 shadow-sm italic">
                      <Laptop className="text-white" size={32} />
                    </div>
                    <h4 className="text-3xl font-serif italic mb-4 italic italic">
                      💻 Espacios <br /> de Trabajo
                    </h4>
                    <p className="text-stone-400 text-sm leading-relaxed italic italic italic">
                      Fibra óptica de 300 Mbps y áreas comunes adaptadas para
                      coworking y reuniones.
                    </p>
                  </div>
                  <div className="p-12 bg-stone-50 rounded-[4rem] border border-stone-100 hover:shadow-2xl transition-all duration-700 italic group">
                    <div className="w-16 h-16 rounded-[2rem] bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-orange-600 transition-colors italic">
                      <HeartHandshake
                        className="text-orange-600 group-hover:text-white"
                        size={32}
                      />
                    </div>
                    <h4 className="text-3xl font-serif italic mb-4 italic italic">
                      🤝 Integración <br /> & Bienestar
                    </h4>
                    <div className="space-y-4 pt-6 italic italic">
                      <div className="flex items-start gap-3 italic italic italic">
                        <Check
                          className="text-orange-600 mt-1 flex-shrink-0"
                          size={14}
                        />
                        <div>
                          <p className="text-stone-900 font-bold text-xs uppercase italic italic italic italic">
                            Team Building Estratégico
                          </p>
                          <p className="text-stone-400 text-[10px] italic italic italic italic italic">
                            Resultados: cohesión, confianza, alineación.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 italic italic italic">
                        <Check
                          className="text-orange-600 mt-1 flex-shrink-0"
                          size={14}
                        />
                        <div>
                          <p className="text-stone-900 font-bold text-xs uppercase italic italic italic italic">
                            Entrenamientos y Workshops
                          </p>
                          <p className="text-stone-400 text-[10px] italic italic italic italic italic">
                            Resultados: habilidades, liderazgo, comunicación.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 italic italic italic">
                        <Check
                          className="text-orange-600 mt-1 flex-shrink-0"
                          size={14}
                        />
                        <div>
                          <p className="text-stone-900 font-bold text-xs uppercase italic italic italic italic">
                            Renta de Espacios Corporativos
                          </p>
                          <p className="text-stone-400 text-[10px] italic italic italic italic italic">
                            Resultados: enfoque, productividad, bienestar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-24 bg-stone-50 text-center italic">
              <div className="container mx-auto px-6 max-w-4xl italic">
                <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.6em] mb-8 block italic italic italic">
                  Solo Proporcionamos Alojamiento y Renta de Espacios
                </span>
                <h2 className="text-3xl md:text-6xl font-serif italic mb-12 italic italic italic italic italic">
                  Somos el lienzo de tu{" "}
                  <span className="text-orange-600 italic italic italic italic italic italic">
                    mejor entrenamiento
                  </span>
                </h2>
                <button
                  onClick={() =>
                    handleBookingAction(SITE_DATA.general.bookingEngineLink)
                  }
                  className="px-12 py-6 bg-[#0a0a0a] text-white text-[10px] font-black uppercase tracking-[0.5em] rounded-2xl hover:bg-orange-600 transition-all shadow-3xl italic italic italic italic italic"
                >
                  Solicitar Cotización Corporate
                </button>
              </div>
            </section>
            {renderFooter(() => navigateToPage("home"))}
          </div>
        );
      case "gallery":
        return (
          <div className="pt-24 min-h-screen bg-[#0a0a0a] animate-fade-in font-sans italic italic">
            <div className="container mx-auto px-6 max-w-7xl pb-20 italic italic">
              <div className="mb-20 text-center italic italic">
                <span className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block underline underline-offset-8 decoration-orange-900 italic italic">
                  Stunning View Gallery
                </span>
                <h2 className="text-4xl md:text-8xl font-serif text-white tracking-tighter uppercase leading-none italic italic italic">
                  Atardeceres <br />
                  <span className="text-stone-800 italic italic italic italic">
                    Inolvidables
                  </span>
                </h2>
              </div>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 italic italic italic">
                {(SITE_DATA.viewGallery || []).map((img, i) => (
                  <div
                    key={`view-gal-sc-v-${i}`}
                    className="relative group overflow-hidden rounded-[2rem] cursor-pointer italic italic"
                    onClick={() =>
                      setLightbox({
                        open: true,
                        images: SITE_DATA.viewGallery,
                        index: i,
                      })
                    }
                  >
                    {" "}
                    <img
                      src={img}
                      alt={`Sunset ${i}`}
                      className="w-full h-auto object-cover transition-transform duration-[2000ms] group-hover:scale-110 italic italic"
                    />{" "}
                  </div>
                ))}
              </div>
              <div className="mt-20 text-center italic italic italic">
                <button
                  onClick={() => navigateToPage("home")}
                  className="flex items-center gap-4 text-stone-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.6em] mx-auto group uppercase italic italic"
                >
                  {" "}
                  <Maximize2
                    size={20}
                    className="group-hover:scale-110 transition-transform italic italic"
                  />{" "}
                  Volver al Inicio{" "}
                </button>
              </div>
            </div>
            {renderFooter(() => navigateToPage("home"))}
          </div>
        );
      case "blog":
        return renderBlogView();
      default:
        return renderHomeView();
    }
  };

  return (
    <div className="font-sans text-[#0a0a0a] bg-[#fcfcfc] selection:bg-orange-100 overflow-x-hidden italic">
      {lightbox.open && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox({ ...lightbox, open: false })}
        />
      )}
      <nav
        className={`fixed w-full z-[100] transition-all duration-300 border-b ${
          isScrolled || activePage !== "home" || selectedApt || selectedPost
            ? "bg-white/95 backdrop-blur-md border-stone-200 py-1.5 md:py-2"
            : "bg-transparent border-transparent py-5 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center h-10 md:h-12 w-full italic">
          <div
            className="flex items-center gap-3 md:gap-4 cursor-pointer group italic"
            onClick={() => navigateToPage("home")}
          >
            <Sunset
              className="text-orange-600 group-hover:rotate-12 transition-transform duration-500 shadow-orange-500/20"
              size={26}
            />
            <span
              className={`font-serif font-bold text-xs md:text-sm tracking-[0.2em] uppercase transition-colors ${
                isScrolled ||
                activePage !== "home" ||
                selectedApt ||
                selectedPost
                  ? "text-[#0a0a0a]"
                  : "text-white"
              } italic`}
            >
              {SITE_DATA.general.name}
            </span>
          </div>
          <div className="flex items-center gap-3 md:gap-8 italic">
            <button
              onClick={() =>
                handleBookingAction(SITE_DATA.general.bookingEngineLink)
              }
              className="flex bg-orange-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-orange-700 transition-all shadow-lg active:scale-95 uppercase italic"
            >
              {" "}
              {actionLabel}{" "}
            </button>
            <button
              onClick={() => setIsSideMenuOpen(true)}
              className={`p-1.5 md:p-2 rounded-full transition-colors ${
                isScrolled ||
                activePage !== "home" ||
                selectedApt ||
                selectedPost
                  ? "text-gray-900 hover:bg-stone-100"
                  : "text-white hover:bg-white/20"
              } italic`}
            >
              <Menu size={24} className="italic" />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-[200] ${
          isSideMenuOpen ? "visible" : "invisible"
        } transition-all italic`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${
            isSideMenuOpen ? "opacity-100" : "opacity-0"
          } italic`}
          onClick={() => setIsSideMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-[280px] bg-white shadow-2xl p-8 md:p-10 flex flex-col gap-10 transition-transform duration-700 ease-out ${
            isSideMenuOpen ? "translate-x-0" : "translate-x-full"
          } italic`}
        >
          <button
            onClick={() => setIsSideMenuOpen(false)}
            className="self-end p-2 hover:bg-stone-50 rounded-full transition-transform hover:rotate-90 text-stone-400 hover:text-orange-600 italic"
          >
            <X size={26} className="italic" />
          </button>
          <div className="flex flex-col gap-4 mt-6 italic">
            {[
              "home",
              "about",
              "activities",
              "location",
              "experiences",
              "rent",
              "gallery",
              "blog",
            ].map((id) => {
              const IconComp = MENU_ICONS_MAP[id] || Compass;
              return (
                <button
                  key={id}
                  onClick={() => navigateToPage(id)}
                  className={`group flex items-center gap-4 text-left transition-all duration-300 transform hover:translate-x-2 italic`}
                >
                  <div
                    className={`p-2 rounded-xl transition-colors ${
                      activePage === id
                        ? "bg-orange-50"
                        : "bg-stone-50 group-hover:bg-orange-50"
                    } italic`}
                  >
                    <IconComp
                      size={16}
                      className={
                        activePage === id
                          ? "text-orange-600"
                          : "text-stone-400 group-hover:text-orange-600"
                      }
                    />
                  </div>
                  <span
                    className={`font-serif text-sm md:text-[15px] uppercase tracking-[0.15em] transition-colors ${
                      activePage === id
                        ? "text-orange-600 font-bold"
                        : "text-stone-600 group-hover:text-orange-600"
                    } italic`}
                  >
                    {t.menu[id]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <main className="italic">{renderContent()}</main>
    </div>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
