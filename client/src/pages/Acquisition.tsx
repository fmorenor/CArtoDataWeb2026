/*
Design reminder — Neo-Brutalismo Cartográfico Corporativo para Adquisición de Datos: blanco operativo + negro institucional, acentos guinda/rojo derivados de marca, módulos tipo visor, retículas discretas y composición editorial técnica de alta precisión.
*/

import { ArrowUpRight, Menu, Radar, ScanLine, X } from "lucide-react";
import { useEffect, useState } from "react";

const A = {
  logo: "/manus-storage/logo-cartodata_fcabaa0f.avif",
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663312934670/bmDp83xoRBDnTemiRDaBEw/cartodata-hero-orbital-command-3JF57LR9wCckcXBBdy64Cn.webp",
  panel: "https://d2xsxph8kpxj0f.cloudfront.net/310519663312934670/bmDp83xoRBDnTemiRDaBEw/cartodata-data-layer-panel-iHf2NeGjT3eMeQXxvhpSdL.webp",
};

const navItems = [
  { label: "Impacto", href: "/#impacto" },
  { label: "Adquisición de Datos", href: "/adquisicion" },
  { label: "Software", href: "/#software" },
  { label: "Nosotros", href: "/nosotros" },
];

const acquisition = [
  { title: "LiDAR", detail: "Nubes de puntos para medir, modelar y tomar decisiones con precisión." },
  { title: "Drone", detail: "Levantamientos rápidos para proyectos urbanos, agrícolas e industriales." },
  { title: "Oblix", detail: "Captura oblicua para crear gemelos digitales comprensibles." },
  { title: "Visión 360", detail: "Recorridos inmersivos para documentar activos y procesos." },
];

const acquisitionMetrics = [
  { value: "01", label: "Captura territorial con sensores aéreos, terrestres y fotogramétricos." },
  { value: "02", label: "Procesamiento técnico para convertir levantamientos en capas y modelos útiles." },
  { value: "03", label: "Entrega operativa para alimentar decisiones, software y procesos institucionales." },
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
      <a className="brand-mark" href="/" aria-label="CartoData inicio">
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

export default function AcquisitionPage() {
  return (
    <main className="cartodata-site about-page acquisition-page">
      <Header />
      <section className="about-hero-page acquisition-hero-page" id="adquisicion">
        <div className="about-hero-copy">
          <p className="section-kicker"><Radar size={15} /> Adquisición de Datos</p>
          <h1>Del levantamiento al modelo operativo.</h1>
          <p>
            Transformamos organizaciones reorganizando sus procesos con nuevos niveles de información por medio de adquisición, análisis y procesamiento de información geoespacial precisa.
          </p>
          <a className="primary-link" href="mailto:contacto@cartodata.com?subject=Adquisici%C3%B3n%20de%20Datos%20CartoData">Conversemos <ArrowUpRight size={17} /></a>
        </div>
        <div className="about-hero-visual" aria-hidden="true">
          <img src={A.hero} alt="" />
          <div className="coordinate-chip">OMNIDATA · LIDAR · DRONE · 360</div>
        </div>
      </section>
      <section className="acquisition-section acquisition-standalone-detail" aria-label="Tecnologías de adquisición de datos">
        <div className="section-head split-head">
          <div>
            <p className="section-kicker light"><ScanLine size={15} /> Continuidad operativa</p>
            <h2>Captura, procesa y convierte el territorio en información accionable.</h2>
          </div>
          <p>
            La adquisición de datos conecta campo, sensores, procesamiento y software para crear un flujo técnico que sirve a catastro, desarrollo urbano, agricultura, minería e infraestructura crítica.
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
      <section className="about-section standalone-about acquisition-method">
        <div className="about-panel">
          <div>
            <p className="section-kicker"><Radar size={15} /> Método CartoData</p>
            <h2>Un dato confiable no termina en la captura: se integra al proceso.</h2>
          </div>
          <p>
            Cada levantamiento debe producir información verificable, trazable y lista para alimentar decisiones. Por eso la adquisición se diseña como parte de un sistema mayor: sensores, control de calidad, procesamiento, software y adopción operativa.
          </p>
        </div>
        <div className="metric-grid">
          {acquisitionMetrics.map((metric) => (
            <article key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
