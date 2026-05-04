/*
Design reminder — Neo-Brutalismo Cartográfico Corporativo: blanco operativo + negro institucional, acentos guinda/rojo derivados de marca, módulos tipo visor, coordenadas, retículas discretas y composición asimétrica de firma premium.
*/

import { ArrowUpRight, Crosshair, Database, Layers3, MapPinned, Menu, Radar, ScanLine, Satellite, ShieldCheck, Sparkles, X } from "lucide-react";
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
  { label: "Impacto", href: "#impacto" },
  { label: "Adquisición de Datos", href: "#adquisicion" },
  { label: "Software", href: "#software" },
  { label: "Nosotros", href: "#nosotros" },
];

const metrics = [
  { value: "20+", label: "años integrando datos geoespaciales" },
  { value: "360°", label: "visión aérea, terrestre y operativa" },
  { value: "LAT 20.6723", label: "LON -103.4524 · Guadalajara" },
];

const acquisition = [
  { title: "LiDAR", detail: "Nubes de puntos para medir, modelar y tomar decisiones con precisión." },
  { title: "Drone", detail: "Levantamientos rápidos para proyectos urbanos, agrícolas e industriales." },
  { title: "Oblix", detail: "Captura oblicua para crear gemelos digitales comprensibles." },
  { title: "Visión 360", detail: "Recorridos inmersivos para documentar activos y procesos." },
];

const sectors = [
  { name: "Catastro", icon: A.iconCatastro, className: "tile-one" },
  { name: "Desarrollo urbano", icon: A.iconUrbanismo, className: "tile-two" },
  { name: "Agricultura", icon: A.iconAgricultura, className: "tile-three" },
  { name: "Minería", icon: A.iconMineria, className: "tile-four" },
];

const impactCards = [
  {
    eyebrow: "Omnidata",
    title: "Adquisición simultánea de información aérea y terrestre.",
    icon: Satellite,
  },
  {
    eyebrow: "Inteligencia",
    title: "Software personalizado a los retos de las áreas y procesos.",
    icon: Database,
  },
  {
    eyebrow: "Profesionalización",
    title: "Transferencia optimizada del conocimiento a procesos transformados.",
    icon: ShieldCheck,
  },
];

function Header() {
  const [open, setOpen] = useState(false);

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
      <button className="menu-button" aria-label="Abrir menú" onClick={() => setOpen(true)}>
        <Menu size={20} />
      </button>
      {open && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Menú móvil">
          <button className="menu-close" aria-label="Cerrar menú" onClick={() => setOpen(false)}><X size={22} /></button>
          <img src={A.logo} alt="CartoData" />
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a className="mobile-cta" href="mailto:contacto@cartodata.com?subject=Proyecto%20CartoData%202026">Iniciar diagnóstico</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <Header />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="section-kicker"><Crosshair size={15} /> Cartografía aplicada a decisiones críticas</p>
          <h1>Inteligencia geoespacial para transformar territorio, procesos y operación.</h1>
          <p>
            CartoData integra adquisición de datos, software geoespacial y profesionalización para convertir el mundo real en información precisa, útil y accionable.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#software">Explorar eCarto <ArrowUpRight size={17} /></a>
            <a className="secondary-link" href="#impacto">Ver impacto</a>
          </div>
        </div>
        <div className="prompt-card" aria-label="Consulta estratégica">
          <div className="prompt-toolbar"><span /> <span /> <span /></div>
          <p>¿Eres un experto en cartografía con un enfoque en software geoespacial y especialidad en reingeniería de procesos, cómo puedo tomar mejores decisiones con mapas?</p>
          <div className="prompt-footer">
            <span>Sonnet 4.5</span>
            <button aria-label="Enviar consulta"><ArrowUpRight size={16} /></button>
          </div>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <img src={A.hero} alt="" />
        <div className="coordinate-chip">LAT 20.6723 · LON -103.4524</div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="dark-section cartomorfosis" id="impacto">
      <div className="section-head center-head">
        <p className="section-kicker light"><ScanLine size={15} /> Cartomorfosis</p>
        <h2>Cartografía que trasciende el mapa, que transforma realidades.</h2>
      </div>
      <div className="feature-stage">
        <img className="stage-image" src={A.collage} alt="Collage geoespacial de territorio, ciudad, agricultura y minería" />
        <div className="stage-overlay">
          <p>Cómo El Salvador está impulsando el crecimiento y la eficiencia con inteligencia territorial.</p>
          <a href="#adquisicion">Conocer más <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="impact-grid">
        {impactCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.eyebrow} className="impact-card">
              <Icon size={22} />
              <p>{card.eyebrow}</p>
              <h3>{card.title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Software() {
  return (
    <section className="software-section" id="software">
      <div className="software-intro">
        <p>Posiciona herramientas todo en un concepto ágil y escalable de información geoespacial.</p>
        <h2>eCarto</h2>
        <a href="mailto:contacto@cartodata.com?subject=Conocer%20eCarto">Conocer más <ArrowUpRight size={15} /></a>
      </div>
      <div className="software-console">
        <img src={A.eCartoStart} alt="Interfaz de acceso de eCarto" />
        <div className="console-frame" />
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
            <p>Operación y consulta de información territorial desde la nube.</p>
            <img className="google-badge" src={A.google} alt="Powered by Google Cloud" />
          </div>
        </article>
      </div>
    </section>
  );
}

function Acquisition() {
  return (
    <section className="acquisition-section" id="adquisicion">
      <div className="section-head split-head">
        <div>
          <p className="section-kicker light"><Radar size={15} /> Adquisición de Datos</p>
          <h2>Del levantamiento al modelo operativo.</h2>
        </div>
        <p>
          Transformamos organizaciones reorganizando sus procesos con nuevos niveles de información por medio de adquisición, análisis y procesamiento de información geoespacial precisa.
        </p>
      </div>
      <div className="acquisition-layout">
        <div className="data-panel">
          <img src={A.panel} alt="Panel técnico de capas geoespaciales y nube de puntos" />
        </div>
        <div className="acquisition-list">
          {acquisition.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section className="sectors-section">
      <div className="sector-bg" aria-hidden="true"><img src={A.sectors} alt="" /></div>
      <div className="section-head center-head compact">
        <p className="section-kicker light"><Layers3 size={15} /> Sectores</p>
        <h2>Información territorial aplicada donde la operación lo exige.</h2>
      </div>
      <div className="sector-grid">
        {sectors.map((sector) => (
          <article key={sector.name} className={`sector-card ${sector.className}`}>
            <img src={sector.icon} alt="" />
            <h3>{sector.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="nosotros">
      <div className="about-panel">
        <div>
          <p className="section-kicker"><MapPinned size={15} /> Nosotros</p>
          <h2>De la representación del mundo real a su gemelo digital.</h2>
        </div>
        <p>
          El logotipo de CartoData representa la Proyección de Mercator, la C de Carto, la D de Data y la cruz central como presencia de trabajo. Esa misma lógica guía este sitio: precisión, tecnología, pertenencia y transformación.
        </p>
      </div>
      <div className="metric-grid">
        {metrics.map((metric) => (
          <article key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
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
          <a href="#impacto">Impacto</a>
          <a href="#adquisicion">Adquisición</a>
          <a href="#software">Software</a>
          <a href="#nosotros">Nosotros</a>
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
      <Acquisition />
      <Sectors />
      <About />
      <Footer />
    </main>
  );
}
