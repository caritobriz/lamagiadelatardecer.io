import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Sunset,
  Monitor,
  Menu,
  X,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Check,
  Globe,
  Sparkles,
  Bot,
  Send,
  ArrowLeft,
  Film,
  Maximize2,
  Medal,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Heart,
  Users,
  MapPin,
  Compass,
  Key,
  BookOpen,
  Calendar,
  Anchor, // Para actividades de mar
  Mountain, // Para naturaleza y senderismo (Corregido de importMountain)
  Briefcase, // Para nómadas / eventos corporativos
  BookOpen as Book, // Para Cultura
  Heart as HeartIcon, // Para Romance
  Car, // Para la ubicación
  Plane, // Para la ubicación
} from "lucide-react";

// === DATOS DEL SITIO (CONFIGURACIÓN DE CONTENIDO, SEO Y TRADUCCIONES) ===
const SITE_DATA_FIXED = {
  general: {
    name: "LA MAGIA DEL ATARDECER",
    logoUrl:
      "https://drive.google.com/file/d/1MSEDMVhor6LZ730h0rpFd4fhsalWQ4te/view?usp=sharing",
    location: "Taganga, Colombia",
    phone: "+57 300 321 202 14 48",
    email: "lamagiadelatardecer@gmail.com",
    airbnbLink: "https://www.airbnb.com.co/users/profile/1470174458191076107",
    whatsappLink: "https://wa.me/573003212021448",
    bookingEngineLink: "https://engine.lobbypms.com/la-magia-del-atardecer",
    rating: "4.92",
    reviewsCount: "202",
    socials: {
      instagram: "#",
      facebook: "#",
      youtube: "#",
      tiktok: "#",
    },
  },
  seo: {
    es: {
      title: "La Magia del Atardecer | Hotel de Lujo en Taganga",
      description:
        "Disfruta de las mejores vistas de Taganga. Alojamiento de lujo y co-living.",
    },
    en: {
      title: "The Magic of Sunset | Luxury Hotel in Taganga",
      description:
        "Enjoy the best views in Taganga. Luxury accommodation and co-living.",
    },
    fr: {
      title: "La Magie du Coucher de Soleil | Hôtel de Luxe à Taganga",
      description:
        "Profitez des meilleures vues de Taganga. Hébergement de luxe.",
    },
    de: {
      title: "Der Zauber des Sonnenuntergangs | Luxushotel in Taganga",
      description:
        "Genießen Sie die beste Aussicht in Taganga. Luxusunterkunft.",
    },
  },
  translations: {
    es: {
      menu: {
        home: "Inicio",
        about: "Nosotros",
        activities: "Actividades",
        location: "Ubicación",
        experiences: "Experiencias",
        rent: "Alquiler Total",
        blog: "Blog",
      },
      actions: {
        book: "Reservar",
        consult: "Consultar",
        explore: "Explorar Opciones",
        viewDetails: "Ver Detalles",
        back: "Volver",
        readMore: "Leer Artículo",
        quote: "Cotizar Evento",
      },
      modes: { vacation: "Vacaciones", coliving: "Co-Living" },
      amenities: "Comodidades",
      experience: "La Experiencia",
      videoTour: "Video Tour",
      from: "Desde",
      night: "/ noche",
      socialTitle: "Zonas Sociales",
      testimonialsTitle: "Voces de la Magia",
      footerDesc:
        "Ubicado en las colinas de Taganga, somos un refugio para viajeros conscientes y trabajadores remotos.",
      contact: "Contacto & Social",
      legal: "Legal",
      rights: "Todos los derechos reservados.",
    },
    en: {
      menu: {
        home: "Home",
        about: "About Us",
        activities: "Activities",
        location: "Location",
        experiences: "Experiences",
        rent: "Full Buyout",
        blog: "Blog",
      },
      actions: {
        book: "Book Now",
        consult: "Enquire",
        explore: "Explore Options",
        viewDetails: "View Details",
        back: "Back",
        readMore: "Read Article",
        quote: "Get a Quote",
      },
      modes: { vacation: "Vacation", coliving: "Co-Living" },
      amenities: "Amenities",
      experience: "The Experience",
      videoTour: "Video Tour",
      from: "From",
      night: "/ night",
      socialTitle: "Social Areas",
      testimonialsTitle: "Voices of Magic",
      footerDesc:
        "Located in the hills of Taganga, we are a haven for conscious travelers and remote workers.",
      contact: "Contact & Social",
      legal: "Legal",
      rights: "All rights reserved.",
    },
    fr: {
      menu: {
        home: "Accueil",
        about: "À propos",
        activities: "Activités",
        location: "Lieu",
        experiences: "Experiencias",
        rent: "Privatisation",
        blog: "Blog",
      },
      actions: {
        book: "Réserver",
        consult: "Consulter",
        explore: "Explorer Options",
        viewDetails: "Voir Détails",
        back: "Retour",
        readMore: "Lire l'article",
        quote: "Devis",
      },
      modes: { vacation: "Vacances", coliving: "Co-Living" },
      amenities: "Équipements",
      experience: "L'Expérience",
      videoTour: "Visite Vidéo",
      from: "À partir de",
      night: "/ nuit",
      socialTitle: "Espaces Sociaux",
      testimonialsTitle: "Voix de la Magia",
      footerDesc:
        "Situé sur les collines de Taganga, nous sommes un refuge pour les voyageurs conscients.",
      contact: "Contact & Social",
      legal: "Mentions Légales",
      rights: "Todos los derechos reservados.",
    },
    de: {
      menu: {
        home: "Start",
        about: "Über uns",
        activities: "Aktivitäten",
        location: "Standort",
        experiences: "Erlebnisse",
        rent: "Mieten",
        blog: "Blog",
      },
      actions: {
        book: "Buchen",
        consult: "Anfragen",
        explore: "Suiten entdecken",
        viewDetails: "Details ansehen",
        back: "Zurück",
        readMore: "Artikel lesen",
        quote: "Angebot",
      },
      modes: { vacation: "Urlaub", coliving: "Co-Living" },
      amenities: "Ausstattung",
      experience: "Das Erlebnis",
      videoTour: "Video-Tour",
      from: "Ab",
      night: "/ Nacht",
      socialTitle: "Soziale Bereiche",
      testimonialsTitle: "Stimmen der Magia",
      footerDesc:
        "In den Hügeln von Taganga gelegen, sind wir ein Zufluchtsort für bewusste Reisende.",
      contact: "Kontakt & Soziales",
      legal: "Rechtliches",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  hero: {
    title: {
      es: "¿Y tú, dónde quieres estar?",
      en: "And you, where do you want to be?",
      fr: "Et vous, où voulez-vous être ?",
      de: "Und du, wo möchtest du sein?",
    },
    subtitle: {
      es: "Magia Pura.",
      en: "Pure Magic.",
      fr: "Magie Pure.",
      de: "Reine Magia.",
    },
    images: [
      "https://i.postimg.cc/kXL6VZLy/IMG_6805_Original.jpg" /* URL de imagen de héroe actualizada */,
      "https://i.postimg.cc/zBZs5rWs/IMG_6489_EDIT.jpg",
      "https://i.postimg.cc/L4VcdGXd/IMG_1945.jpg",
      "https://i.postimg.cc/P5vVq7tQ/IMG_0452_(1).jpg",
      "https://i.postimg.cc/2jH07YyF/IMG_1927.jpg",
      "https://i.postimg.cc/hGbrzWNb/IMG_3151.jpg",
    ],
  },
  intro: {
    vacationText: {
      es: "Descubre una propiedad multinivel en Taganga, donde el mar y la naturaleza se fusionan. Un refugio perfecto para desconectar y reconectar.",
      en: "Discover a multi-level property in Taganga, where the sea and nature merge. A perfect refuge to disconnect and reconnect.",
    },
    colivingText: {
      es: "Fibra óptica, comunidad y vistas que inspiran. Tu oficina infinita en el corazón del caribe.",
      en: "Fiber optic, community, and inspiring views. Your infinite office in the heart of the Caribbean.",
    },
  },
  blog: [
    {
      id: 1,
      title: { es: "5 Cafés para Nómadas", en: "5 Cafes for Nomads" },
      date: "Oct 12, 2024",
      img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
      excerpt: {
        es: "Los mejores rincones con buena conexión.",
        en: "Best spots with good connection.",
      },
    },
  ],
  apartments: [
    {
      id: 1,
      name: "Cabaña Campesina Romántica",
      level: { es: "Nivel 2 (Máx 4)", en: "Level 2 (Max 4)" },
      desc: {
        vacation: {
          es: "Balcón con vista parcial al mar y baño externo privado.",
          en: "Balcony with partial sea view and private external bathroom.",
        },
        coliving: {
          es: "Cabaña rústica ideal para nómadas: AC y WiFi 300 Mbps.",
          en: "Rustic cabin ideal for nomads: AC and 300 Mbps WiFi.",
        },
      },
      longDesc: {
        es: "Escapa al paraíso de Taganga en nuestra cabaña campesina...",
        en: "Escape to the paradise of Taganga in our rustic cabin...",
      },
      amenities: [
        "Balcón con Vista",
        "Baño Privado Externo",
        "WiFi 300 Mbps",
        "AC",
      ],
      videoUrl: "https://www.youtube.com/embed/xo2c9JENscc",
      images: [
        "https://i.postimg.cc/HnWb6YR4/00846291_b59e_4789_8091_4df58c329e9b.jpg",
      ],
    },
  ],
  socialAreas: [
    {
      name: { es: "El Bungalow Rooftop", en: "The Bungalow Rooftop" },
      desc: { es: "Meditación y coworking.", en: "Meditation and coworking." },
      images: [
        "https://i.postimg.cc/RhCwgSyn/864401f2_584a_4ebb_895b_253962732917.jpg",
      ],
    },
  ],
  testimonials: [
    {
      name: "Sarah M.",
      country: "USA",
      text: {
        es: "Simplemente increíble. Los mejores atardeceres que he visto.",
        en: "Simply unreal. Best sunset ever.",
        fr: "Tout simplement irréel. Le meilleur coucher de soleil.",
        de: "Einfach unwirklich. Der beste Sonnenuntergang.",
      },
    },
    {
      name: "Carlos R.",
      country: "España",
      text: {
        es: "Internet perfecto para trabajar, paz inestimable. Un verdadero co-living.",
        en: "Perfect internet for work, priceless peace. A true co-living experience.",
        fr: "Internet parfait pour travailler, une paix inestimable.",
        de: "Perfektes Internet zum Arbeiten, unbezahlbare Ruhe.",
      },
    },
    {
      name: "Andrea L.",
      country: "Colombia",
      text: {
        es: "Un sueño hecho realidad. Servicio 10/10.",
        en: "A dream come true. 10/10 service.",
        fr: "Un rêve devenu réalité. Service 10/10.",
        de: "Ein wahr gewordener Traum. 10/10 Service.",
      },
    },
  ],
  pages: {
    about: {
      title: { es: "Nuestra Esencia", en: "Our Essence" },
      text1: {
        es: "Este lugar no nació como un hotel. Es nuestra casa.",
        en: "This place was not born as a hotel. It is our home.",
      },
      text2: {
        es: "Vivimos aquí desde hace más de 20 años...",
        en: "We have lived here for over 20 years...",
      },
      heroImg: "https://i.postimg.cc/P5vVq7tQ/IMG_0452_(1).jpg",
      videoUrl: "https://www.youtube.com/embed/xo2c9JENscc",
      historySteps: [
        {
          year: 2005,
          title: { es: "Raíces", en: "Roots" },
          description: { es: "Llegada a Taganga.", en: "Arrival at Taganga." },
          image:
            "https://i.postimg.cc/2yjn0kMZ/325e56dd_14e6_4913_b4fc_e5ee726f5c85.jpg",
        },
      ],
      secondaryQuote: { es: "Bienvenidos a casa.", en: "Welcome home." },
      locationDetails: [],
    },
    blog: {
      heroImg:
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1920",
      title: { es: "Blog", en: "Blog" },
    },
    activities: {
      title: { es: "Actividades", en: "Activities" },
      heroImg:
        "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&q=80&w=1920",
      introText: { es: "Explora Santa Marta.", en: "Explore Santa Marta." },
    },
    location: {
      title: { es: "Ubicación", en: "Location" },
      heroImg:
        "https://i.postimg.cc/6TJt9qXg/ec3b6d9c_42e2_43ce_af1a_7ac5de9efff3_(2).jpg",
      proximityTitle: { es: "Cerca del Mar", en: "Near the Sea" },
      proximityDetail: { es: "A 300 metros.", en: "300 meters away." },
      nearByItems: [],
    },
    experiences: {
      title: { es: "Experiencias", en: "Experiences" },
      heroImg:
        "https://images.unsplash.com/photo-1512918760513-95f1929c35f1?auto=format&fit=crop&q=80&w=1920",
      introTitle: { es: "Bungalow", en: "Bungalow" },
      introDesc: { es: "Atardeceres.", en: "Sunsets." },
      perfectFor: [],
      commonAreas: {
        title: { es: "Terrazas", en: "Terraces" },
        desc: { es: "Espacios únicos.", en: "Unique spaces." },
        idealFor: [],
      },
      facilities: { title: { es: "Servicios", en: "Services" }, items: [] },
    },
    rent: {
      title: { es: "Alquiler Total", en: "Full Buyout" },
      heroImg:
        "https://images.unsplash.com/photo-1616594039964-40891a909d93?auto=format&fit=crop&q=80&w=1920",
      intro: { es: "Eventos.", en: "Events." },
      eventTypes: [],
      benefits: [],
    },
  },
};

// --- UTILS ---
const processImageUrl = (url) => url;

// --- COMPONENTES ---

const Footer = ({ onNavigate, lang, t, siteData }) => (
  <footer className="bg-black text-white py-16 px-6 border-t border-gray-900 font-sans relative z-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      <div className="flex flex-col items-center md:items-start">
        <span className="font-serif font-bold text-2xl tracking-wider block mb-6 text-white">
          {siteData.general.name}
        </span>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
          {t.footerDesc}
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start">
        <h4 className="font-bold text-sm uppercase tracking-widest text-orange-500 mb-2">
          {t.actions.explore}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
          {[
            "about",
            "activities",
            "location",
            "experiences",
            "rent",
            "blog",
          ].map((id) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className="text-sm text-gray-400 hover:text-white transition-colors text-left flex items-center gap-2 group"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-500">
                •
              </span>
              {t.menu[id]}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start">
        <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-2">
          {t.contact}
        </h4>
        <div className="flex gap-6 mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-orange-500 transition-all"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-orange-500 transition-all"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-orange-500 transition-all"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const ImageCarousel = ({ images, alt, className = "h-64", onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div
      className={`relative w-full overflow-hidden group cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img
        src={images[currentIndex]}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex ? "bg-white w-6" : "bg-white/40 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HomeView = ({
  t,
  mode,
  setMode,
  handleBooking,
  setSelectedApt,
  openLightbox,
  onNavigate,
  getText,
  siteData,
  lang,
}) => (
  <div className="bg-white">
    <header
      className="h-screen relative w-full overflow-hidden cursor-pointer group"
      onClick={() => openLightbox(0)}
    >
      <img
        src={siteData.hero.images[0]}
        alt="Hero"
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
      <div className="absolute bottom-32 md:bottom-48 left-6 md:left-20 text-white z-10">
        <span className="bg-orange-600 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-2 inline-block shadow-lg">
          {siteData.general.location}
        </span>
        <h1 className="text-4xl md:text-7xl font-serif font-bold drop-shadow-lg leading-tight">
          {getText(siteData.hero.title)}
        </h1>
      </div>
      <div className="absolute bottom-10 right-10 text-white z-10 hidden md:flex items-center gap-2 bg-black/30 backdrop-blur px-4 py-2 rounded-full border border-white/30 group-hover:bg-black/50 transition-colors">
        <Maximize2 size={18} />{" "}
        <span className="text-xs font-bold uppercase tracking-widest">
          Ver Galería
        </span>
      </div>
    </header>

    <section className="py-16 md:py-24 bg-white relative z-10">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-stone-50 border border-stone-200 px-5 py-2 rounded-full mb-8">
          <Medal className="text-orange-500 fill-orange-500" size={18} />
          <span className="text-xs font-bold text-gray-900">
            {siteData.general.rating} ★★★★★ ({siteData.general.reviewsCount})
          </span>
        </div>
        <h1 className="text-3xl md:text-6xl font-serif text-gray-900 font-bold mb-6">
          {mode === "vacation"
            ? getText(siteData.hero.subtitle)
            : t.modes.coliving}
        </h1>

        <div className="flex justify-center mb-10">
          <div className="bg-stone-100 p-1 rounded-full flex shadow-inner max-w-xs w-full border border-stone-200">
            <button
              onClick={() => setMode("vacation")}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-bold uppercase transition-all flex items-center justify-center gap-1 ${
                mode === "vacation"
                  ? "bg-orange-600 text-white"
                  : "text-gray-600"
              }`}
            >
              <Sunset size={14} /> {t.modes.vacation}
            </button>
            <button
              onClick={() => setMode("coliving")}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-bold uppercase transition-all flex items-center justify-center gap-1 ${
                mode === "coliving"
                  ? "bg-orange-600 text-white"
                  : "text-gray-600"
              }`}
            >
              <Monitor size={14} /> {t.modes.coliving}
            </button>
          </div>
        </div>

        <button
          onClick={() =>
            document
              .getElementById("opciones")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-10 py-4 bg-orange-600 text-white font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors shadow-xl rounded-full"
        >
          {t.actions.explore}
        </button>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-stone-50" id="opciones">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 text-center mb-12">
          Nuestras Opciones
        </h2>
        {siteData.apartments.map((apt, index) => (
          <div
            key={apt.id}
            className="bg-white rounded-lg overflow-hidden shadow-2xl mb-12"
          >
            <ImageCarousel
              images={apt.images}
              alt={apt.name}
              onClick={() => setSelectedApt(apt)}
            />
            <div className="p-8">
              <span className="text-orange-600 font-bold text-xs uppercase mb-2 block">
                {getText(apt.level)}
              </span>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                {apt.name}
              </h3>
              <button
                onClick={() => setSelectedApt(apt)}
                className="w-full py-4 border-2 border-gray-900 text-gray-900 font-bold uppercase hover:bg-gray-900 hover:text-white transition-all rounded-full"
              >
                {t.actions.viewDetails}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-16 text-center">
          {t.testimonialsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-stone-50 p-8 rounded-lg border border-stone-200"
            >
              <Quote className="text-orange-300 mb-4" size={32} />
              <p className="text-gray-700 italic mb-6">
                "{getText(testimonial.text)}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-xs uppercase text-orange-600">
                  {testimonial.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer onNavigate={onNavigate} lang={lang} t={t} siteData={siteData} />
  </div>
);

const DetailView = ({ apt, t, onNavigate, lang, getText, siteData }) => (
  <div className="pt-24 min-h-screen bg-white">
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => onNavigate("home")}
        className="mb-8 flex items-center gap-2 text-orange-600 font-bold uppercase"
      >
        <ArrowLeft size={16} /> {t.actions.back}
      </button>
      <h1 className="text-4xl font-serif font-bold mb-8">{apt.name}</h1>
      <ImageCarousel
        images={apt.images}
        alt={apt.name}
        className="h-96 rounded-xl mb-12"
      />
      <div className="prose max-w-none">
        <p className="text-xl text-gray-700">{getText(apt.longDesc)}</p>
      </div>
    </div>
    <Footer onNavigate={onNavigate} lang={lang} t={t} siteData={siteData} />
  </div>
);

const PageView = ({ activePage, t, onNavigate, getText, siteData, lang }) => {
  const pageData = siteData.pages[activePage] || {};
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-serif font-bold mb-8">
          {getText(pageData.title)}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Esta sección está siendo actualizada para ofrecerte la mejor
          experiencia.
        </p>
      </div>
      <Footer onNavigate={onNavigate} lang={lang} t={t} siteData={siteData} />
    </div>
  );
};

const App = () => {
  const [siteData] = useState(SITE_DATA_FIXED);
  const [lang, setLang] = useState("es");
  const [mode, setMode] = useState("vacation");
  const [activePage, setActivePage] = useState("home");
  const [selectedApt, setSelectedApt] = useState(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const t = siteData.translations[lang];
  const getText = (obj) => {
    if (!obj) return "";
    return typeof obj === "string" ? obj : obj[lang] || obj["es"] || "";
  };

  const navigateToPage = (id) => {
    setSelectedApt(null);
    setActivePage(id);
    setIsSideMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (selectedApt)
      return (
        <DetailView
          apt={selectedApt}
          t={t}
          onNavigate={navigateToPage}
          lang={lang}
          getText={getText}
          siteData={siteData}
        />
      );

    if (activePage === "home") {
      return (
        <HomeView
          t={t}
          mode={mode}
          setMode={setMode}
          setSelectedApt={setSelectedApt}
          onNavigate={navigateToPage}
          getText={getText}
          siteData={siteData}
          lang={lang}
          openLightbox={() => {}}
        />
      );
    }
    return (
      <PageView
        activePage={activePage}
        t={t}
        onNavigate={navigateToPage}
        getText={getText}
        siteData={siteData}
        lang={lang}
      />
    );
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-stone-200 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigateToPage("home")}
          >
            <Sunset className="text-orange-600" size={32} />
            <span className="font-serif font-bold text-sm tracking-widest uppercase">
              {siteData.general.name}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent font-bold text-xs"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            <button onClick={() => setIsSideMenuOpen(true)} className="p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* SIDE MENU */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsSideMenuOpen(false)}
          />
          <div className="relative w-80 bg-white h-full shadow-2xl p-8 flex flex-col gap-6 animate-fade-in-right">
            <button
              onClick={() => setIsSideMenuOpen(false)}
              className="self-end"
            >
              <X size={24} />
            </button>
            {[
              "home",
              "about",
              "activities",
              "location",
              "experiences",
              "rent",
              "blog",
            ].map((id) => (
              <button
                key={id}
                onClick={() => navigateToPage(id)}
                className="text-left font-serif text-xl uppercase tracking-widest border-b border-stone-100 pb-2"
              >
                {t.menu[id]}
              </button>
            ))}
          </div>
        </div>
      )}

      {renderContent()}
    </div>
  );
};

// Mount the React app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
