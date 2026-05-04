# Todo — ajuste sección eCarto

- [ ] Revisar la estructura actual de eCarto para ubicar el bloque principal, carrusel y tarjetas inferiores.
- [ ] Ajustar la sección a un bloque oscuro compacto como la referencia, con título eCarto, subtítulo y CTA centrados.
- [ ] Convertir únicamente la imagen azul principal de eCarto en carrusel visual, con flechas laterales y puntos inferiores.
- [ ] Conservar las tarjetas inferiores de eCarto on premise y CartoData Cloud, manteniendo sus imágenes actuales.
- [ ] Validar TypeScript/build, revisar visualmente la sección y guardar checkpoint final.

## Ajuste Sectores — íconos grandes y enlaces

- [x] Convertir cada tarjeta de la sección Sectores en un enlace preparado para futuras landing pages sectoriales.
- [x] Incrementar la escala visual de los íconos de Catastro, Desarrollo urbano, Agricultura y Minería para acercarlos a la referencia.
- [x] Ajustar composición, contraste y responsive de las tarjetas sin cambiar las imágenes de fondo actuales, ya que el usuario podrá sustituirlas después.
- [x] Validar TypeScript/build y revisar visualmente la sección Sectores antes de guardar checkpoint.

## Separar Nosotros en página independiente

- [x] Crear una página `/nosotros` con el contenido actual de la sección Nosotros.
- [x] Eliminar el bloque Nosotros de la página principal para que deje de aparecer en el home.
- [x] Actualizar el enlace del menú principal y del footer para que apunten a la nueva página independiente.
- [x] Validar TypeScript/build y revisar navegación desde el menú hacia Nosotros antes de guardar checkpoint.

## Eliminar bloque Cartografía aplicada a decisiones críticas

- [x] Localizar y retirar del home el bloque identificado como `Cartografía aplicada a decisiones críticas`.
- [x] Revisar si la eliminación requiere ajustes de espaciado para que la transición entre secciones se mantenga natural.
- [x] Validar TypeScript/build y revisar visualmente la página principal antes de guardar checkpoint.

## Actualizar GitHub — CArtoDataWeb2026

- [x] Revisar estado de Git local y confirmar si existe remoto configurado para `https://github.com/fmorenor/CArtoDataWeb2026`.
- [x] Preparar commit con los cambios actuales del proyecto CartoData Web 2026.
- [x] Enviar la rama actual al repositorio de GitHub indicado y verificar que el push finalice correctamente.

## Reintento GitHub tras cambio de permisos

- [x] Revalidar el estado local y los permisos del repositorio después del cambio realizado por el usuario.
- [x] Reintentar el envío de `main` al remoto `fmorenor/CArtoDataWeb2026`.
- [x] Verificar en GitHub que el commit remoto apunte a la versión actual enviada.

## Revisar imágenes y crear README

- [x] Auditar si existen imágenes versionadas dentro del repositorio y cómo están referenciadas en el código.
- [x] Crear un README.md profesional con descripción, instalación, estructura, scripts y notas de assets.
- [x] Commit y push del README al repositorio `fmorenor/CArtoDataWeb2026`.
- [x] Informar claramente si las imágenes están en Git o si se consumen desde URLs/almacenamiento externo.

## Separar Adquisición de Datos en página independiente

- [x] Localizar el bloque actual de Adquisición de Datos en el home y sus estilos asociados.
- [x] Crear una página independiente accesible desde el menú para Adquisición de Datos con el contenido existente.
- [x] Actualizar rutas y navegación principal para apuntar a la nueva página.
- [x] Retirar el bloque de Adquisición de Datos del home y revisar continuidad visual entre secciones.
- [x] Validar TypeScript/build, guardar checkpoint y sincronizar GitHub.

## Crear skill reutilizable del proceso aplicado

- [x] Revisar patrones de creación de skills para workflows reutilizables.
- [x] Inicializar una nueva skill con el generador oficial.
- [x] Redactar SKILL.md con el proceso de separación de secciones en páginas independientes.
- [x] Validar la skill con el validador oficial y corregir errores.
- [x] Entregar la skill al usuario como archivo instalable.

## Verificación tipográfica Urbanist y Poppins

- [x] Revisar `client/index.html` para confirmar preconnect y enlace de Google Fonts.
- [x] Revisar `client/src/index.css` para confirmar uso de Poppins y Urbanist.
- [x] Comparar la implementación contra el código de incrustación y clases CSS indicado.
- [x] Informar si cumple exactamente, parcialmente o no cumple.

## Ajuste de menú móvil iPhone

- [x] Revisar la estructura actual del panel móvil y sus clases CSS.
- [x] Rediseñar el menú móvil como panel translúcido menos invasivo con separación visual del fondo.
- [x] Ajustar tamaños, espaciado y jerarquía tipográfica para evitar solapamientos.
- [x] Validar TypeScript/build y guardar checkpoint del ajuste.
- [ ] Entregar resumen del cambio y recomendaciones de revisión móvil.
