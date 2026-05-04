# QA visual — CartoData Web 2026

La vista previa inicial carga correctamente en el servidor de desarrollo. El encabezado, la navegación, el hero tipográfico y la tarjeta tipo prompt son visibles en el primer viewport. Se corrigió el contraste del logotipo sobre fondo claro aplicando inversión de color en el header; el resultado visible coincide mejor con la referencia proporcionada. El contenido extraído confirma presencia de las secciones: Impacto, Adquisición de Datos, Software, Sectores, Nosotros y Footer.

Pendiente de la revisión final: validar scroll completo, comportamiento responsive básico y crear checkpoint único al terminar, según la regla de no exponer checkpoints intermedios antes de la primera entrega.

## Revisión de scroll intermedio

Tras desplazarse por la página, el hero visual generado se presenta como un visor geoespacial oscuro de alto contraste, alineado con la dirección premium. La transición hacia la sección Cartomorfosis funciona visualmente: el bloque oscuro, el titular y la pieza tipo collage conservan continuidad de marca con acentos rojos y retícula cartográfica. Los cards de Omnidata, Inteligencia y Profesionalización mantienen contraste legible y estructura corporativa.

## Revisión de eCarto

La sección eCarto conserva la jerarquía visual y el lenguaje de producto; sin embargo, durante la vista previa se detectaron imágenes de módulos de producto que mostraban texto alternativo, indicio de rutas con espacios sin codificar en URLs de almacenamiento. Se corregirán las rutas usando codificación `%20` para garantizar carga correcta en navegador y publicación.

## Corrección de assets web-safe

Se generaron copias con nombres seguros para web de los assets con espacios, se subieron al almacenamiento persistente del proyecto y se actualizó el código para usar las nuevas rutas. La recarga de la sección Software mostró correctamente las imágenes de eCarto on premise y CartoData Cloud en lugar de texto alternativo, por lo que el problema de carga quedó resuelto. La compilación de producción y la verificación TypeScript fueron exitosas; únicamente aparece una advertencia de tamaño de chunk propia del paquete de interfaz, no bloqueante para publicación.

## Revisión de cierre y footer

La sección Nosotros mantiene un cierre sobrio sobre fondo claro, con métricas corporativas, coordenadas y narrativa de marca basada en el manual de identidad. El footer conserva el contraste oscuro de la referencia, usa el logotipo en blanco, navegación compacta y bloque de dirección con latitud/longitud. Se validó que el sitio alcanza correctamente el final de página y que los enlaces principales están presentes.

## Ajuste de header CartoIA 1.0

Se reemplazó el primer hero por un placeholder visual de video/prompt de modelo de lenguaje. El primer viewport conserva fondo claro, retícula cartográfica muy sutil, tarjeta de prompt centrada y etiqueta de modelo **CartoIA 1.0**. La navegación permanece visible y el manifiesto principal de inteligencia geoespacial queda inmediatamente debajo, de modo que el bloque superior puede sustituirse más adelante por un video real sin reestructurar el resto de la página.

## Revisión Cartomorfosis — carrusel

La sección Cartomorfosis ahora muestra un título centrado sobre fondo oscuro, con imagen principal grande, slides laterales visibles, flechas de navegación y puntos de selección. Los bloques separados de Omnidata, Inteligencia y Profesionalización fueron eliminados y ahora forman parte del carrusel como slides visuales. La validación técnica con `pnpm check` y `pnpm build` fue exitosa; la revisión visual confirmó que el CTA “Conocer más” ya usa formato pill y mantiene buena legibilidad sobre el fondo fotográfico.
