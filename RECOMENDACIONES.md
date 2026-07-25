# Recomendaciones - Tetra Dent Website

## 1. Barra de Promociones (Header)

### Actual
- Texto rotativo sin imágenes
- Funcional pero limitada visualmente

### Recomendado
- **Promociones con imagen de fondo** en la sección principal (no en la barra del header)
- La barra del header debe mantenerse limpia y solo con texto
- Las imágenes van en la sección de promociones del body, no en el header

---

## 2. Sección de Promociones (index.html)

### Estructura recomendada
```
┌─────────────────────────────────────────────────┐
│           PROMOCIONES DEL MES                   │
├─────────────┬─────────────┬─────────────────────┤
│  [IMG 20%]  │  [IMG 2x1]  │  [IMG 30% OFF]     │
│  Brackets   │  Profilaxis │  Blanqueamiento     │
│  $12,999    │  $899        │  $3,999             │
│  [Reservar] │  [Reservar] │  [Reservar]         │
└─────────────┴─────────────┴─────────────────────┘
```

### Características
- Grid de 3 tarjetas con imagen real del servicio
- Badge con descuento (ej: "20% OFF")
- Precio original tachado + precio con descuento
- Botón CTA "Reservar ahora"
- Hover con efecto zoom suave en la imagen
- Mobile: scroll horizontal o stack vertical

---

## 3. Secciones Recomendadas para Agregar

### 3.1 Tour Virtual / Galería
- Fotos del consultorio, recepción, equipo
- Genera confianza antes de visitar
- Usar slider o grid de imágenes

### 3.2 Antes y Después
- Casos reales de pacientes (con consentimiento)
- Slider comparativoBefore/After
- Muestra resultados concretos
- Generacredibilidad y confianza

### 3.3 Testimonios / Reseñas
- Google Reviews integrado
- Videos cortos de pacientes
- Estrellas + nombre + tratamiento realizado
- Widget de Google My Business

### 3.4 Preguntas Frecuentes (FAQ)
- Acordeón con preguntas comunes
- "¿Duele el tratamiento?"
- "¿Cuánto cuesta?"
- "¿Aceptan seguros?"
- "¿Cuánto dura una consulta?"

### 3.5 Blog / Artículos
- "Cuidados después de una limpieza"
- "¿Cuándo cambiar tu cepillo?"
- "Beneficios del blanqueamiento"
- SEO + autoridad + contenido valioso

### 3.6 Calculadora de Pagos
- Input: tratamiento seleccionado
- Output: precio con opciones de financiamiento
- "Desde $XXX mensuales"
- Reduce fricción en la conversión

### 3.7 Ubicación / Mapa
- Mapa de Google Maps integrado
- Dirección + referencias
- Horarios claros
- Cómo llegar (transporte público, estacionamiento)

---

## 4. Páginas Nuevas Recomendadas

### 4.1 Tratamientos (catálogo completo)
- Página dedicada por cada tratamiento
- Imágenes, precios, duración, recuperación
- SEO específico por servicio

### 4.2 Promociones (/promociones)
- Todas las ofertas vigentes en un solo lugar
- Grid con imágenes reales
- Filtro por tipo de tratamiento
- Formulario de reservación directa

### 4.3 Blog (/blog)
- Artículos de salud dental
- Mejora SEO orgánico
- Posiciona a la clínica como experta

### 4.4 financieración (/financiación)
- Opciones de pago
- Aliados financieros
- Calculadora de cuotas
- "Paga en 12 meses sin intereses"

---

## 5. Elementos Flotantes Recomendados

### 5.1 Botón de WhatsApp (ya existe)
- Mantener fijo en esquina inferior derecha
- Agregar badge de "Escríbenos"
- Sonido sutil al recibir respuesta

### 5.2 Banner de Cookies
- Obligatorio en México (LFPDPPP)
- Aceptar / Rechazar / Configurar
- Link a política de privacidad

### 5.3 Pop-up de Primera Visita
- Descuento especial para nuevos pacientes
- "Primera consulta GRATIS" (o cortesía)
- Formulario rápido: nombre + teléfono
- Aparece después de 30 segundos
- Se cierra y no vuelve a mostrar (cookie)

### 5.4 Barra de Progreso de Scroll
- Indicador visual de cuánto ha scroll el usuario
- Sutil, en la parte superior
- Da sensación de navegación completa

### 5.5 Botón "Volver Arriba"
- Aparece al hacer scroll hacia abajo
- Smooth scroll al top
- Icono flecha hacia arriba

---

## 6. Mejoras de UX/UI

### 6.1 Velocidad de Carga
- Optimizar imágenes (WebP)
- Lazy loading en imágenes
- Minificar CSS/JS
- CDN para assets estáticos

### 6.2 Conversión
- Formulario de reservación en cada página
- Botón CTA visible siempre (WhatsApp o formulario)
- Número de teléfono clickeable (tel:)
- Horarios claros en el header

### 6.3 Confianza
- Sello de protección de datos
- Logotipos de seguros aceptados
- Certificaciones del equipo médico
- Registro Federal de Contribuyentes

### 6.4 Accesibilidad
- Contraste WCAG 2.1 AA
- Texto alternativo en todas las imágenes
- Navegación por teclado
- Formularios con labels correctos

---

## 7. SEO Local (Muy importante para clínicas)

### Google My Business
- Perfil completo y verificado
- Fotos del consultorio
- Reseñas de pacientes
- Posts semanales con ofertas

### Schema Markup
- LocalBusiness schema
- MedicalClinic schema
- FAQ schema
- Review schema

### Directorios Locales
- Doctoralia
- Yelp
- Facebook Business
- directorios médicos mexicanos

---

## 8. Prioridad de Implementación

| Prioridad | Elemento | Impacto | Esfuerzo |
|-----------|----------|---------|----------|
| 1 | Promociones con imagen | Alto | Medio |
| 2 | Testimonios/Reseñas | Alto | Bajo |
| 3 | FAQ interactivo | Medio | Bajo |
| 4 | Pop-up bienvenida | Alto | Bajo |
| 5 | Blog | Alto | Alto |
| 6 | Tour virtual | Medio | Medio |
| 7 | Calculadora pagos | Medio | Alto |
| 8 | Antes/Después | Alto | Medio |

---

## 9. Tecnologías Sugeridas

- **Slider de imágenes**: Swiper.js o Glide.js
- **Before/After**: TwentyTwenty.js
- **FAQ Acordeón**: CSS puro o Alpine.js
- **Pop-up**: Vanilla JS (sin librería)
- **Mapa**: Google Maps Embed API
- **Formularios**: Formspree o Netlify Forms
- **Analytics**: Google Analytics 4 + Google Tag Manager

---

## 10. Métricas a Monitorear

- Tasa de rebote
- Tiempo en página
- Clicks en WhatsApp
- Formularios enviados
- Llamadas telefónicas (con tracking)
- Páginas más visitadas
- Dispositivos (móvil vs desktop)

---

*Documento generado para Tetra Dent - Clínica Dental*
*Fecha: Julio 2026*
