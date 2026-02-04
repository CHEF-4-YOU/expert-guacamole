# 🌍 Language Selector - Documentación

## Implementación del Selector de Idiomas con Banderas

### Archivos Creados

1. **language-selector.js** - Lógica de JavaScript para manejar el cambio de idioma
2. **language-selector.css** - Estilos CSS con animaciones y efectos hover
3. **welcome.html** - Actualizado con el selector integrado
4. **index.html** - Actualizado con el selector integrado  
5. **menu verano.html** - Actualizado con el selector integrado

### Características

✨ **Diseño Elegante**
- Selector flotante con banderas (México 🇲🇽, UK 🇬🇧, Francia 🇫🇷)
- Tamaño: 24-30px de banderas
- Botones redondeados con efectos hover
- Animaciones suaves y transiciones

🎨 **Efectos Visuales**
- Hover: Elevación (+2px), cambio de borde, sombra dorada
- Click: Gradiente dorado, scaling 1.1x
- Animación de bandera: Rotación 3D al cambiar idioma
- Responsive: Posición fija en móvil (esquina inferior derecha)

🌐 **Funcionalidades**
- Integración con Google Translate API
- Almacenamiento de preferencia en localStorage
- Cambio automático del atributo `lang` del documento
- Dispatch de eventos personalizados (`languageChanged`)
- Soporte para dark mode
- Respeta preferencias de movimiento reducido

### Cómo Usar

#### En tu HTML:

```html
<!-- En el head, después de Tailwind -->
<link rel="stylesheet" href="language-selector.css">

<!-- Google Translate API -->
<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<!-- Al final del body -->
<div id="google_translate_element" style="display: none;"></div>

<script src="language-selector.js"></script>

<script>
  function googleTranslateElementInit() {
    // Requerida por Google Translate
  }
</script>
```

### Opciones de Personalización

#### Cambiar colores en language-selector.css:

```css
/* Color activo (línea 30) */
background: linear-gradient(135deg, #d69e2e 0%, #c67c22 100%);

/* Color hover (línea 27) */
border-color: #d69e2e;
```

#### Agregar más idiomas en language-selector.js:

```javascript
this.languages = {
  es: { name: 'Español', flag: '🇲🇽', code: 'es' },
  en: { name: 'English', flag: '🇬🇧', code: 'en' },
  fr: { name: 'Français', flag: '🇫🇷', code: 'fr' },
  de: { name: 'Deutsch', flag: '🇩🇪', code: 'de' }, // Nuevo idioma
};
```

### Estructura del Selector

```
┌─────────────────────────────┐
│  🇲🇽 ES  │  🇬🇧 EN  │  🇫🇷 FR  │
└─────────────────────────────┘
  Active (color dorado)
  Hover (elevado, borde dorado)
```

### Responsive Behavior

**Desktop (≥640px):**
- Posición: Integrado en header
- Orientación: Horizontal
- Muestra: Flag + código del idioma

**Mobile (<640px):**
- Posición: Esquina inferior derecha (fixed)
- Orientación: Vertical
- Muestra: Solo flag
- Scroll: Se oculta parcialmente

### Integración con Google Translate

El selector funciona de tres formas:

1. **Google Translate API** (preferido)
   - Traducción automática completa del sitio
   - Requiere cargar `//translate.google.com/translate_a/element.js`

2. **Traducción Manual**
   - Usar atributo `data-i18n` en elementos
   - Cargar archivo JSON de traducciones

3. **Híbrido**
   - Google Translate para contenido dinámico
   - JSON para interfaz estática

### Testing

Para verificar que funciona:

1. Abre `welcome.html` en tu navegador
2. Haz click en una bandera
3. Verifica:
   - El selector cambia de color (activo)
   - Aparece animación de rotación
   - La página se traduce (requiere tiempo de Google)
   - El idioma se guarda en localStorage

### Browsers Soportados

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Notas Importantes

⚠️ **Google Translate Delay**
- Primera carga: 1-3 segundos
- Las cargas subsecuentes son más rápidas
- Si no se carga, verifica la conexión a internet

⚠️ **Límites de Google Translate**
- 500,000 caracteres/mes (gratuito)
- Para producción, considera Google Cloud Translation API

⚠️ **CORS**
- Google Translate funciona en todos los dominios
- No hay restricciones de CORS

### Troubleshooting

**El selector no aparece:**
- Verifica que `language-selector.css` y `language-selector.js` están en la misma carpeta
- Abre la consola del navegador y busca errores

**No traduce al cambiar idioma:**
- Verifica que `//translate.google.com/translate_a/element.js` está siendo cargado
- Espera 2-3 segundos después de hacer click
- Revisa que no hay adblockers bloqueando Google Translate

**El CSS no se aplica:**
- Verifica que `language-selector.css` se carga antes del cierre de `</head>`
- Busca conflictos con otros estilos (Tailwind CSS puede sobrescribir)

### Screenshots esperados

1. **Desktop - Selector inactivo**: Banderas grises/oscuras
2. **Desktop - Hover**: Banderas con borde dorado, elevadas
3. **Desktop - Activo**: Bandera con fondo dorado, escala mayor
4. **Mobile - Posición fija**: Esquina inferior derecha
5. **Tras traducción**: Contenido en el idioma seleccionado

---

**Creado para Chef Franko Salgado · Chef4You**
**Últimas actualizaciones: Enero 2026**
