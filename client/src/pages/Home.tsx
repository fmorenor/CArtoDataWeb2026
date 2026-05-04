/*
Design reminder — Neo-Brutalismo Cartográfico Corporativo: blanco operativo + negro institucional, acentos guinda/rojo derivados de marca, módulos tipo visor, coordenadas, retículas discretas y composición asimétrica de firma premium.
*/

import { ArrowUpRight, ChevronLeft, ChevronRight, Clock, Layers3, Menu, Play, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const A = {
  logo: "/manus-storage/logo-cartodata_fcabaa0f.avif",
  eCartoBanner: "/manus-storage/ecarto-banner_1c30cc40.jpg",
  eCartoStart: "/manus-storage/IMGS_CartoData_home_TEMP_INICIO_18925b04.jpg",
  onPremise: "/manus-storage/ecarto-on-premise_b422072a.jpg",
  cloud: "/manus-storage/ecarto-cloud_363d3406.jpg",
  google: "/manus-storage/powered-by-google_e4755f74.png",
  servQuick: "/manus-storage/ServQuick_c96b72e1.png",
  iconCatastro: "/manus-storage/CD_icons_home__catastro_aaae18bd.svg",
  iconUrbanismo: "/manus-storage/icon-desarrollo-urbano_15102b8d.svg",
  iconAgricultura: "/manus-storage/CD_icons_home__agricultura_53ae9cce.svg",
  iconMineria: "/manus-storage/CD_icons_home__mineria_e3c1bab8.svg",
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663312934670/bmDp83xoRBDnTemiRDaBEw/cartodata-hero-orbital-command-3JF57LR9wCckcXBBdy64Cn.webp",
  panel: "https://d2xsxph8kpxj0f.cloudfront.net/310519663312934670/bmDp83xoRBDnTemiRDaBEw/cartodata-data-layer-panel-iHf2NeGjT3eMeQXxvhpSdL.webp",
  collage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663312934670/bmDp83xoRBDnTemiRDaBEw/cartodata-cartomorfosis-collage-oESFFq7nWvcRLVJahDJnZn.webp",
  sectors: "https://d2xsxph8kpxj0f.cloudfront.net/310519663312934670/bmDp83xoRBDnTemiRDaBEw/cartodata-sector-observation-tiles-YacNjcohgPnSFi9creYDfz.webp",
};

const navItems = [
  { label: "Impacto", href: "/#impacto" },
  { label: "Adquisición de Datos", href: "/adquisicion" },
  { label: "Software", href: "/#software" },
  { label: "Nosotros", href: "/nosotros" },
];

const sectors = [
  { name: "Catastro", icon: A.iconCatastro, className: "tile-one", href: "/sectores/catastro" },
  { name: "Desarrollo urbano", icon: A.iconUrbanismo, className: "tile-two", href: "/sectores/desarrollo-urbano" },
  { name: "Agricultura", icon: A.iconAgricultura, className: "tile-three", href: "/sectores/agricultura" },
  { name: "Minería", icon: A.iconMineria, className: "tile-four", href: "/sectores/mineria" },
];

const cartomorphosisSlides = [
  {
    eyebrow: "Cartomorfosis",
    title: "Cómo El Salvador está impulsando el crecimiento y la eficiencia",
    image: A.collage,
    href: "/adquisicion",
  },
  {
    eyebrow: "Omnidata",
    title: "Adquisición simultánea de información aérea y terrestre",
    image: A.panel,
    href: "/adquisicion",
  },
  {
    eyebrow: "Inteligencia",
    title: "Software personalizado a los retos de las áreas y procesos",
    image: A.eCartoBanner,
    href: "#software",
  },
  {
    eyebrow: "Profesionalización",
    title: "Transferencia optimizada del conocimiento a procesos transformados",
    image: A.sectors,
    href: "/nosotros",
  },
];

const eCartoSlides = [
  { image: A.eCartoStart, alt: "Pantalla de acceso azul de eCarto Cloud Services" },
  { image: A.eCartoBanner, alt: "Vista de producto eCarto para información geoespacial" },
];

const cartomorphosisVideos = [
  {
    title: "Martín Guzmán · Talpa de Allende",
    episode: "E06T01",
    duration: "1:04:23",
    href: "https://www.youtube.com/watch?v=klikWgJSn88",
    image: "https://i.ytimg.com/vi/klikWgJSn88/hqdefault.jpg",
  },
  {
    title: "Rodolfo González · Catastro Jalisco",
    episode: "E05T01",
    duration: "1:04:48",
    href: "https://www.youtube.com/watch?v=qHNvsfGMGjg",
    image: "https://i.ytimg.com/vi/qHNvsfGMGjg/hqdefault.jpg",
  },
  {
    title: "Sandra Tovar · Guadalajara",
    episode: "E04T01",
    duration: "1:05:13",
    href: "https://www.youtube.com/watch?v=3uLXVuX4IBM",
    image: "https://i.ytimg.com/vi/3uLXVuX4IBM/hqdefault.jpg",
  },
  {
    title: "Guillermo Hernández · Tlajomulco",
    episode: "E03T01",
    duration: "1:04:06",
    href: "https://www.youtube.com/watch?v=aBGitpfN_KQ",
    image: "https://i.ytimg.com/vi/aBGitpfN_KQ/hqdefault.jpg",
  },
  {
    title: "Juan Carlos González · Transformación digital",
    episode: "E02T01",
    duration: "44:53",
    href: "https://www.youtube.com/watch?v=v9eDa7PPj38",
    image: "https://i.ytimg.com/vi/v9eDa7PPj38/hqdefault.jpg",
  },
  {
    title: "José Luis Flores · INDETEC Brecha",
    episode: "E07T01",
    duration: "55:02",
    href: "https://www.youtube.com/watch?v=L4WI0iW8B2k",
    image: "https://i.ytimg.com/vi/L4WI0iW8B2k/hqdefault.jpg",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const openMenu = () => {
    setClosing(false);
    setOpen(true);
  };

  const closeMenu = () => {
    if (!open || closing) return;
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 320);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header" aria-label="Navegación principal">
      <a className="brand-mark" href="#top" aria-label="CartoData inicio">
        <img src={A.logo} alt="CartoData" />
      </a>
      <nav className="desktop-nav" aria-label="Secciones">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <a className="nav-cta" href="mailto:contacto@cartodata.com?subject=Proyecto%20CartoData%202026">Conversemos</a>
      <button className="menu-button" aria-label="Abrir menú" onClick={openMenu}>
        <Menu size={20} />
      </button>
      {open && (
        <div className={`mobile-panel ${closing ? "mobile-panel--closing" : ""}`} role="dialog" aria-modal="true" aria-label="Menú móvil">
          <button className="menu-close" aria-label="Cerrar menú" onClick={closeMenu}><X size={22} /></button>
          <img src={A.logo} alt="CartoData" />
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="mobile-cta" href="mailto:contacto@cartodata.com?subject=Proyecto%20CartoData%202026" onClick={closeMenu}>Iniciar diagnóstico</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <Header />
      <div className="hero-video-placeholder" aria-label="Video simulado de prompt CartoIA 1.0">
        <div className="prompt-card video-prompt" aria-label="Consulta estratégica a CartoIA">
          <p>¿Eres un experto en cartografía, con un enfoque en software geoespacial y especialidad en reingeniería de procesos, cómo puedo tomar mejores decisiones con mapas?</p>
          <div className="prompt-footer">
            <span>+</span>
            <span className="model-name">CartoIA 1.0</span>
            <button aria-label="Enviar consulta"><ArrowUpRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = cartomorphosisSlides[activeSlide];
  const previousSlide = cartomorphosisSlides[(activeSlide - 1 + cartomorphosisSlides.length) % cartomorphosisSlides.length];
  const nextSlide = cartomorphosisSlides[(activeSlide + 1) % cartomorphosisSlides.length];

  const goToPrevious = () => setActiveSlide((index) => (index - 1 + cartomorphosisSlides.length) % cartomorphosisSlides.length);
  const goToNext = () => setActiveSlide((index) => (index + 1) % cartomorphosisSlides.length);

  return (
    <section className="dark-section cartomorfosis" id="impacto">
      <div className="cartomorfosis-title">
        <h2><strong>Cartomorfosis:</strong><br />Cartografía que trasciende el mapa, que transforma realidades.</h2>
      </div>
      <div className="cartomorfosis-carousel" aria-label="Carrusel Cartomorfosis">
        <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious} aria-label="Ver caso anterior">
          <ChevronLeft size={32} />
        </button>
        <article className="carousel-side carousel-side-left" aria-hidden="true">
          <img src={previousSlide.image} alt="" />
        </article>
        <article className="feature-stage carousel-main" aria-live="polite">
          <img className="stage-image" src={currentSlide.image} alt={currentSlide.title} />
          <div className="stage-overlay">
            <div>
              <span>{currentSlide.eyebrow}</span>
              <p>{currentSlide.title}</p>
            </div>
            <a href={currentSlide.href}>Conocer más <ArrowUpRight size={16} /></a>
          </div>
        </article>
        <article className="carousel-side carousel-side-right" aria-hidden="true">
          <img src={nextSlide.image} alt="" />
        </article>
        <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Ver caso siguiente">
          <ChevronRight size={32} />
        </button>
      </div>
      <div className="carousel-dots" aria-label="Seleccionar slide de Cartomorfosis">
        {cartomorphosisSlides.map((slide, index) => (
          <button
            key={slide.eyebrow}
            className={index === activeSlide ? "is-active" : ""}
            onClick={() => setActiveSlide(index)}
            aria-label={`Ver ${slide.eyebrow}`}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>
      <div className="video-pleca" aria-label="Historias de Cartomorfosis en CartoDataTV">
        {cartomorphosisVideos.map((video) => (
          <a className="video-tile" key={video.href} href={video.href} target="_blank" rel="noreferrer" aria-label={`Ver ${video.title} en YouTube`}>
            <img src={video.image} alt={video.title} loading="lazy" />
            <span className="video-duration"><Clock size={12} />{video.duration}</span>
            <span className="video-play"><Play size={16} fill="currentColor" /></span>
            <span className="video-copy">
              <strong>{video.title}</strong>
              <em>Historias de cartomorfosis · {video.episode}</em>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Software() {
  const [activeEcartoSlide, setActiveEcartoSlide] = useState(0);
  const currentEcartoSlide = eCartoSlides[activeEcartoSlide];
  const goToPrevious = () => setActiveEcartoSlide((index) => (index - 1 + eCartoSlides.length) % eCartoSlides.length);
  const goToNext = () => setActiveEcartoSlide((index) => (index + 1) % eCartoSlides.length);

  return (
    <section className="software-section" id="software">
      <div className="software-panel">
        <div className="software-intro">
          <p>Poderosa herramienta todo en uno: compila, edita y accede a información geoespacial.</p>
          <h2>eCarto</h2>
          <a href="mailto:contacto@cartodata.com?subject=Conocer%20eCarto">Conocer más <ArrowUpRight size={15} /></a>
        </div>
        <div className="software-console" aria-label="Carrusel de pantallas eCarto">
          <button className="software-arrow software-arrow-left" onClick={goToPrevious} aria-label="Ver pantalla anterior de eCarto">
            <ChevronLeft size={22} />
          </button>
          <img src={currentEcartoSlide.image} alt={currentEcartoSlide.alt} />
          <button className="software-arrow software-arrow-right" onClick={goToNext} aria-label="Ver pantalla siguiente de eCarto">
            <ChevronRight size={22} />
          </button>
          <div className="console-frame" />
        </div>
        <div className="software-dots" aria-label="Seleccionar pantalla de eCarto">
          {eCartoSlides.map((slide, index) => (
            <button
              key={slide.image}
              className={index === activeEcartoSlide ? "is-active" : ""}
              onClick={() => setActiveEcartoSlide(index)}
              aria-label={`Ver pantalla ${index + 1} de eCarto`}
              aria-current={index === activeEcartoSlide ? "true" : undefined}
            />
          ))}
        </div>
      </div>
      <div className="software-products">
        <article>
          <img src={A.onPremise} alt="Infraestructura local para eCarto on premise" />
          <div>
            <h3>eCarto on premise</h3>
            <p>Compra e implementa tu red de datos geográficos en sitio.</p>
          </div>
        </article>
        <article>
          <img src={A.cloud} alt="eCarto Cloud sobre infraestructura de nube" />
          <div>
            <h3>CartoData Cloud</h3>
            <p>Tu operación donde la necesites desde la nube.</p>
            <img className="google-badge" src={A.google} alt="Powered by Google Cloud" />
          </div>
        </article>
      </div>
      <p className="software-closing">Transformamos organizaciones reorganizando sus procesos con nuevos niveles de información por medio de la adquisición, análisis y procesamiento de información geoespacial precisa.</p>
    </section>
  );
}

function Sectors() {
  return (
    <section className="sectors-section" id="sectores">
      <div className="sector-bg" aria-hidden="true"><img src={A.sectors} alt="" /></div>
      <div className="section-head center-head compact">
        <p className="section-kicker light"><Layers3 size={15} /> Sectores</p>
        <h2>Información territorial aplicada donde la operación lo exige.</h2>
      </div>
      <div className="sector-grid">
        {sectors.map((sector) => (
          <a key={sector.name} href={sector.href} className={`sector-card ${sector.className}`} aria-label={`Ir a landing page de ${sector.name}`}>
            <img src={sector.icon} alt="" />
            <h3>{sector.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <img src={A.logo} alt="CartoData" />
        <div className="footer-nav">
          <a href="/#impacto">Impacto</a>
          <a href="/adquisicion">Adquisición</a>
          <a href="/#software">Software</a>
          <a href="/nosotros">Nosotros</a>
        </div>
        <div className="footer-address">
          <strong>LAT 20.6723<br />LON -103.4524</strong>
          <p>Circunvalación Ote. 689 | Ciudad Granja<br />Zapopan, Jalisco, México | C.P. 45010</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Todos los derechos reservados © CartoData</span>
        <a href="mailto:contacto@cartodata.com">contacto@cartodata.com</a>
        <span>2026</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="cartodata-site">
      <Hero />
      <Impact />
      <Software />
      <Sectors />
      <Footer />
    </main>
  );
}
