# Tetra Dent - Sitio Web Oficial

![Tetra Dent](img/favicon.ico)

**Calidad - Precisión - Seguridad - Salud**

Sitio web institucional de la Clínica Dental Tetra Dent, ubicada en Av. Arequipa 1295, Int. 401, Urb. Santa Beatriz, Lima, Perú.

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Páginas del Sitio](#páginas-del-sitio)
- [Funcionalidades](#funcionalidades)
- [Integraciones](#integraciones)
- [Instalación](#instalación)
- [Contacto](#contacto)

---

## Descripción

Tetra Dent es una página web estática diseñada para展示 la presencia digital de la clínica odontológica. El sitio presenta información sobre los servicios, el equipo médico, la ubicación y permite a los pacientes agendar citas de manera sencilla a través de WhatsApp o el formulario de contacto.

---

## Características

- **Diseño Responsive:** Se adapta a dispositivos móviles, tablets y escritorio
- **Optimización SEO:** Etetas meta y estructura semántica HTML5
- **Rendimiento:** Archivos CSS y JS minimizados para carga rápida
- **Accesibilidad:** Navegación intuitiva y estructura clara
- **Google Analytics:** Seguimiento de tráfico con ID `G-2R5NNYWH60`
- **Formulario de Contacto:** Envío de mensajes vía AJAX con PHP
- **Integración WhatsApp:** Botón flotante y enlaces directos para agendar citas
- **Galería de Casos Clínicos:** Carruseles con imágenes de antes y después
- **Mapa Interactivo:** Integración con Google Maps y Waze

---

## Estructura del Proyecto

```
tetradent-web/
├── index.html              # Página principal
├── doctores.html           # Equipo médico
├── servicios.html          # Servicios odontológicos
├── nosotros.html           # Información de la clínica
├── contacto.html           # Formulario de contacto
├── contact.php             # Backend para envío de emails
├── css/
│   ├── app.min.css         # Estilos principales (minificados)
│   ├── style.css           # Estilos personalizados
│   ├── theme-color1.css    # Variables de color del tema
│   ├── animate.min.css     # Animaciones CSS
│   └── fontawesome.min.css # Iconos Font Awesome
├── js/
│   ├── app.min.js          # Scripts principales (minificados)
│   ├── main.js             # Funciones personalizadas
│   ├── ajax-mail.js        # Envío de formulario vía AJAX
│   └── vscustom-carousel.min.js  # Carruseles personalizados
├── img/
│   ├── favicon.ico         # Ícono del sitio
│   ├── doctores/           # Fotos del equipo médico
│   └── ...                 # Demás imágenes
├── fonts/
│   └── ...                 # Fuentes web y Font Awesome
└── layerslider/
    └── ...                 # Slider principal (LayerSlider)
```

---

## Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica del sitio |
| **CSS3** | Diseño visual, animaciones y responsive |
| **JavaScript** | Interactividad y funcionalidades dinámicas |
| **PHP** | Backend para envío de formularios |
| **Bootstrap 5** | Framework de diseño responsive |
| **Font Awesome** | Iconos vectoriales |
| **jQuery** | Manipulación del DOM |
| **Google Fonts** | Tipografías (Dancing Script, Quicksand, Roboto) |
| **LayerSlider** | Slider principal animado |
| **Google Analytics** | Análisis de tráfico web |

---

## Páginas del Sitio

### 1. Inicio (`index.html`)
- Hero principal con slider animado
- Sección de servicios destacados
- Información de la clínica
- Equipo médico resumido
- Testimonios de pacientes
- Ubicación y contacto

### 2. Doctores (`doctores.html`)
- **Dra. Katherine Fernandez** - Ortodoncia y Odontología General
- **Dr. Carlos Mendoza** - Implantología y Cirugía
- **Dra. Ana López** - Odontopediatría
- **Dr. Roberto Sánchez** - Rehabilitación Oral
- Galería de casos clínicos por doctor
- Enlaces a Doctoralia para reseñas

### 3. Servicios (`servicios.html`)
- Ortodoncia
- Implantes dentales
- Odontopediatría
- Rehabilitación oral
- Blanqueamiento dental
- Odontología estética

### 4. Nosotros (`nosotros.html`)
- Historia de la clínica
- Misión y valores
- Infraestructura e instalaciones

### 5. Contacto (`contacto.html`)
- Formulario de contacto con campos: nombre, email, teléfono, fecha, mensaje
- Mapa de Google Maps
- Datos de contacto
- Widget de DocPlanner

---

## Funcionalidades

### Botón de WhatsApp
Cada doctor cuenta con un botón personalizado para agendar citas:
- **Dra. Katherine:** "Reserva una cita con la Dra. Katherine"
- **Dr. Carlos:** "Reserva una cita con el Dr. Carlos"
- **Dra. Ana:** "Reserva una cita con la Dra. Ana"
- **Dr. Roberto:** "Reserva una cita con el Dr. Roberto"

### Formulario de Contacto
- Validación en cliente y servidor
- Protección contra inyección de headers
- Envío vía AJAX sin recargar la página
- Mensajes enviados a: `informes@tetradent.pe`

### Galería de Casos Clínicos
- Carruseles con imágenes de antes/después
- Badges de identificación
- Navegación táctil en móvil

---

## Integraciones

### Google Analytics
```javascript
// ID de seguimiento: G-2R5NNYWH60
// Instalado en todas las páginas del sitio
```

### WhatsApp Business
- Número: `+51 970 623 615`
- Mensajes predefinidos por doctor
- Botón flotante en todas las páginas

### Google Maps & Waze
- Ubicación: Av. Arequipa 1295, Int. 401, Urb. Santa Beatriz
- Coordenadas: `-12.0775835, -77.0353144`
- Integración directa con ambas plataformas de navegación

### Doctoralia
- Perfil de la Dra. Katherine Fernandez
- Enlace directo a reseñas y comentarios

---

## Instalación

### Requisitos
- Servidor web con soporte PHP (Apache/Nginx)
- PHP 7.0 o superior
- Conexión a internet para cargar recursos externos

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tetradent-web.git
   ```

2. **Copiar los archivos al servidor:**
   ```bash
   cp -r tetradent-web/* /var/www/html/
   ```

3. **Configurar el correo electrónico:**
   - Verificar que `contact.php` apunte al email correcto
   - Actualizar `address_destination` si es necesario

4. **Acceder al sitio:**
   ```
   http://tu-dominio.com/
   ```

### Hosting Recomendado
- **Hostinger** (plan PHP)
- **000WebHost** (gratis)
- **InfinityFree** (gratis)
- **GitHub Pages** (solo HTML, sin PHP)

---

## Personalización

### Cambiar Colores
Editar el archivo `css/theme-color1.css`:
```css
:root {
    --theme-color: #01557A;    /* Color principal */
    --theme-color-2: #38A3A5;  /* Color secundario */
}
```

### Cambiar Información de Contacto
Actualizar en todas las páginas HTML:
- Número de WhatsApp
- Dirección de la clínica
- Enlaces de Google Maps y Waze

### Agregar Contenido
- **Nuevo doctor:** Duplicar la sección en `doctores.html` y actualizar contenido
- **Nuevo servicio:** Agregar tarjeta en `servicios.html`
- **Nueva página:** Crear archivo HTML y agregar enlace en la navegación

---

## Optimización SEO

El sitio incluye:
- Etetas meta description y keywords
- Estructura semántica HTML5
- Imágenes con atributos ALT
- URLs amigables
- Compatible con Google Search Console

---

## Navegación

| Página | Archivo | Descripción |
|--------|---------|-------------|
| Inicio | `index.html` | Página principal |
| Doctores | `doctores.html` | Equipo médico |
| Servicios | `servicios.html` | Servicios odontológicos |
| Nosotros | `nosotros.html` | Información de la clínica |
| Contacto | `contacto.html` | Formulario y ubicación |

---

## Licencia

Este proyecto es propiedad de **Tetra Dent**. Todos los derechos reservados.

---

## Contacto

**Tetra Dent - Clínica Odontológica**
- **Dirección:** Av. Arequipa 1295, Int. 401, Urb. Santa Beatriz, Lima, Perú
- **WhatsApp:** [+51 970 623 615](https://api.whatsapp.com/send?phone=51970623615)
- **Email:** informes@tetradent.pe
- **Sitio Web:** [www.tetradent.pe](http://www.tetradent.pe)

---

*Desarrollado con dedicación para la sonrisa de nuestros pacientes.*
