/*
Design reminder — Neo-Brutalismo Cartográfico Corporativo para página Nosotros: blanco operativo + negro institucional, acentos guinda/rojo de marca, retículas discretas, coordenadas y composición editorial asimétrica con lectura premium.
*/

import { ArrowUpRight, Crosshair, MapPinned, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const A = {
  logo: "/manus-storage/logo-cartodata_fcabaa0f.avif",
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663312934670/bmDp83xoRBDnTemiRDaBEw/cartodata-hero-orbital-command-3JF57LR9wCckcXBBdy64Cn.webp",
  panel: "https://d2xsxph8kpxj0f.cloudfront.net/310519663312934670/bmDp83xoRBDnTemiRDaBEw/cartodata-data-layer-panel-iHf2NeGjT3eMeQXxvhpSdL.webp",
};

const navItems = [
  { label: "Impacto", href: "/#impacto" },
  { label: "Adquisición de Datos", href: "/#adquisicion" },
  { label: "Software", href: "/#software" },
  { label: "Nosotros", href: "/nosotros" },
];

const metrics = [
  { value: "20+", label: "años integrando datos geoespaciales" },
  { value: "360°", label: "visión aérea, terrestre y operativa" },
  { value: "LAT 20.6723", label: "LON -103.4524 · Guadalajara" },
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
      <a className="brand-mark" href="/" aria-label="CartoData inicio">
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <img src={A.logo} alt="CartoData" />
        <div className="footer-nav">
          <a href="/#impacto">Impacto</a>
          <a href="/#adquisicion">Adquisición</a>
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

export default function About() {
  return (
    <main className="cartodata-site about-page">
      <Header />
      <section className="about-hero-page" id="nosotros">
        <div className="about-hero-copy">
          <p className="section-kicker"><MapPinned size={15} /> Nosotros</p>
          <h1>De la representación del mundo real a su gemelo digital.</h1>
          <p>
            El logotipo de CartoData representa la Proyección de Mercator, la C de Carto, la D de Data y la cruz central como presencia de trabajo. Esa misma lógica guía nuestro enfoque: precisión, tecnología, pertenencia y transformación territorial.
          </p>
          <a className="primary-link" href="mailto:contacto@cartodata.com?subject=Conocer%20CartoData">Conversemos <ArrowUpRight size={17} /></a>
        </div>
        <div className="about-hero-visual" aria-hidden="true">
          <img src={A.hero} alt="" />
          <div className="coordinate-chip">CARTODATA · GUADALAJARA</div>
        </div>
      </section>
      <section className="about-section standalone-about">
        <div className="about-panel">
          <div>
            <p className="section-kicker"><Crosshair size={15} /> Identidad territorial</p>
            <h2>Precisión técnica, lectura estratégica y operación geoespacial.</h2>
          </div>
          <p>
            CartoData integra datos, cartografía, software y procesos para convertir activos territoriales en información útil para organizaciones que requieren trazabilidad, control operativo y mejores decisiones. La marca se sostiene sobre una visualidad sobria: negro institucional, blanco operativo, acento guinda y una retícula que recuerda que cada decisión ocurre sobre territorio medible.
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
      <section className="about-map-panel" aria-label="Sistema operativo CartoData">
        <img src={A.panel} alt="Panel técnico de datos geoespaciales" />
        <div>
          <span>Cartografía aplicada</span>
          <h2>Del dato levantado al proceso transformado.</h2>
          <p>
            La operación combina adquisición, análisis, procesamiento y software para crear una continuidad entre el mundo físico, el modelo digital y la decisión institucional.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
