# CartoData Web 2026

**CartoData Web 2026** es el sitio corporativo y comercial de CartoData para presentar su propuesta de valor en software cartográfico, inteligencia territorial y soluciones GIS. El proyecto está construido como una aplicación web estática con React, TypeScript, Tailwind CSS y componentes de interfaz basados en shadcn/ui.

El diseño se desarrolló a partir de la identidad visual proporcionada para CartoData, con una dirección de arte orientada a una firma de inteligencia de datos geoespaciales: composición premium, lenguaje visual técnico, acentos azules, recursos cartográficos, módulos tipo visor y una presentación institucional sobria.

## Estado del proyecto

| Área | Estado actual |
|---|---|
| Página principal | Implementada con hero, Cartomorfosis, videos, eCarto y Sectores. |
| Página Nosotros | Implementada como ruta independiente en `/nosotros`. |
| Sectores | Las tarjetas enlazan a futuras rutas sectoriales, todavía no implementadas como páginas finales. |
| Assets visuales | Referenciados desde almacenamiento externo y URLs remotas; no están versionados como archivos locales dentro del repositorio. |
| Validación | El proyecto cuenta con scripts para chequeo TypeScript y build de producción. |

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework UI | React 19 |
| Lenguaje | TypeScript |
| Bundler | Vite |
| Estilos | Tailwind CSS 4 |
| Componentes | shadcn/ui y Radix UI |
| Routing | Wouter |
| Notificaciones | Sonner |
| Gestor de paquetes | pnpm |

## Estructura del repositorio

```text
cartodata-web-2026/
  client/
    index.html
    public/
    src/
      components/
      contexts/
      hooks/
      lib/
      pages/
        Home.tsx
        About.tsx
        NotFound.tsx
      App.tsx
      index.css
      main.tsx
  server/
    index.ts
  shared/
    const.ts
  patches/
  package.json
  pnpm-lock.yaml
  tsconfig.json
  vite.config.ts
  README.md
```

La aplicación pública vive principalmente en `client/src`. Las páginas de nivel superior están en `client/src/pages`, la configuración de rutas está en `client/src/App.tsx` y los tokens visuales globales se concentran en `client/src/index.css`.

> **Nota de alcance:** aunque existe un directorio `server/`, este sitio se trabaja como una experiencia frontend estática. No se debe ampliar el backend salvo que el proyecto se migre explícitamente a una arquitectura full-stack.

## Rutas actuales

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `Home.tsx` | Landing principal con propuesta corporativa, Cartomorfosis, eCarto y Sectores. |
| `/nosotros` | `About.tsx` | Página institucional independiente de CartoData. |
| `/404` | `NotFound.tsx` | Página de error. |
| `/sectores/catastro` | Pendiente | Enlace preparado desde la tarjeta de Catastro. |
| `/sectores/desarrollo-urbano` | Pendiente | Enlace preparado desde la tarjeta de Desarrollo Urbano. |
| `/sectores/agricultura` | Pendiente | Enlace preparado desde la tarjeta de Agricultura. |
| `/sectores/mineria` | Pendiente | Enlace preparado desde la tarjeta de Minería. |

## Instalación local

Para ejecutar el proyecto en un entorno local se recomienda usar `pnpm`, ya que el repositorio incluye `pnpm-lock.yaml` y declara este gestor como package manager del proyecto.

```bash
pnpm install
pnpm dev
```

Después de iniciar el servidor de desarrollo, Vite servirá la aplicación en el puerto indicado por la terminal, normalmente `http://localhost:3000` dentro del entorno de desarrollo.

## Scripts disponibles

| Comando | Uso |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo de Vite. |
| `pnpm build` | Genera el build de producción y empaqueta el archivo de servidor de compatibilidad. |
| `pnpm start` | Ejecuta la salida de producción desde `dist/index.js`. |
| `pnpm preview` | Sirve una previsualización local del build generado por Vite. |
| `pnpm check` | Ejecuta validación TypeScript sin emitir archivos. |
| `pnpm format` | Aplica Prettier sobre el repositorio. |

## Assets e imágenes

Las imágenes **no están subidas a Git como archivos locales del repositorio**. La auditoría del proyecto no encontró archivos de imagen versionados en Git ni imágenes locales dentro de `client/`, `server/` o `shared/`. En su lugar, el código consume assets desde rutas de almacenamiento externo y URLs remotas.

| Tipo de asset | Referencia usada | Estado en Git |
|---|---|---|
| Logo CartoData | `/manus-storage/logo-cartodata_fcabaa0f.avif` | No versionado como archivo local. |
| Imágenes eCarto | `/manus-storage/ecarto-banner_1c30cc40.jpg`, `/manus-storage/ecarto-on-premise_b422072a.jpg`, `/manus-storage/ecarto-cloud_363d3406.jpg` | No versionadas como archivos locales. |
| Iconos sectoriales | `/manus-storage/*.svg` | No versionados como archivos locales. |
| Imágenes generadas de hero, paneles y sectores | URLs CloudFront `https://d2xsxph8kpxj0f.cloudfront.net/...` | No versionadas como archivos locales. |
| Miniaturas de YouTube | `https://i.ytimg.com/.../hqdefault.jpg` | No versionadas como archivos locales. |

Esta decisión mantiene el repositorio ligero y evita incluir archivos binarios pesados dentro de Git. Si en el futuro se desea versionar assets en el repositorio, conviene hacerlo de manera controlada y documentar el cambio, evaluando tamaño, licencias, optimización y estrategia de cache.

## Convenciones de desarrollo

El proyecto debe conservar la identidad visual de CartoData como referencia principal. Las modificaciones de color, textura, ilustración o composición deben derivarse del lenguaje ya establecido y no introducir paletas genéricas o estilos ajenos a la marca.

Los placeholders de navegación o llamadas a la acción que aún no tengan funcionalidad final deben mantener una experiencia clara para el usuario, preferentemente mostrando una notificación con Sonner. No se debe incorporar `react-toastify`, ya que el proyecto utiliza `sonner` para notificaciones.

## Despliegue

El proyecto está preparado para compilarse como aplicación web estática mediante Vite. El flujo recomendado antes de publicar cualquier cambio es ejecutar primero la validación TypeScript y después el build de producción.

```bash
pnpm check
pnpm build
```

Para despliegues gestionados dentro de Manus, se debe crear un checkpoint antes de publicar desde la interfaz. Para despliegues externos, es necesario validar que el proveedor elegido sirva correctamente las rutas de cliente de Wouter y respete las referencias externas a `/manus-storage/` y CloudFront.

## Próximos trabajos sugeridos

| Prioridad | Trabajo sugerido |
|---|---|
| Alta | Crear las landing pages sectoriales para Catastro, Desarrollo Urbano, Agricultura y Minería. |
| Media | Reemplazar placeholders visuales de sectores por imágenes finales aprobadas por CartoData. |
| Media | Completar enlaces de CTAs comerciales o conectar formularios si se define una estrategia de contacto. |
| Baja | Añadir pruebas visuales o snapshots para proteger secciones críticas durante iteraciones futuras. |

## Repositorio

Repositorio GitHub: [fmorenor/CArtoDataWeb2026](https://github.com/fmorenor/CArtoDataWeb2026)
