# 🌼 Flores Amarillas - Página Web Romántica 🌼

Esta es una página web romántica con flores amarillas en un cielo estrellado, diseñada para mostrar un mensaje especial a una persona querida.

## 📋 Características

- **Pantalla de presentación** con un mensaje inicial y un botón para revelar la sorpresa
- **Cielo estrellado** generado dinámicamente con estrellas parpadeantes
- **Flores amarillas** dibujadas con SVG, con tallos y hojas
- **Corazones flotantes** que suben desde la parte inferior de la pantalla
- **Música de fondo** que acompaña la experiencia
- **Diseño responsivo** que se adapta a diferentes tamaños de pantalla
- **Animaciones suaves** para todos los elementos

## 🚀 Cómo usarlo

1. Simplemente abre el archivo `index.html` en cualquier navegador web moderno
2. Haz clic en el botón "Ver sorpresa" para revelar el contenido principal
3. Disfruta de la experiencia visual y musical
4. Puedes hacer clic en las flores para ver un efecto de brillo y generar más corazones

## ✨ Personalización

Si quieres personalizar esta página para alguien especial, aquí te muestro cómo hacerlo:

### Cambiar los mensajes:

Edita el archivo `index.html` y busca las siguientes secciones:

```html
<!-- Para cambiar el mensaje inicial -->
<h1>Te regalo estas flores por lo hermosa que eres</h1>

<!-- Para cambiar el mensaje principal -->
<h2>Eres la más hermosa que he conocido</h2>

<!-- Para cambiar el subtítulo -->
<p class="subtitulo">Cada flor representa un momento especial contigo</p>

<!-- Para cambiar el mensaje final -->
<p>Con todo mi amor para ti</p>
```

### Cambiar los colores:

Para cambiar los colores de las flores, edita los valores de relleno (`fill`) en el archivo `index.html`:

```html
<!-- Centro de la flor -->
<circle cx="50" cy="50" r="10" fill="#FFA000"/>
<!-- Petalos -->
<g fill="#FFEB3B">
  <!-- ... -->
</g>
```

### Cambiar la música:

Para usar una canción diferente, reemplaza la URL en el elemento `audio`:

```html
<audio id="musica-fondo" loop>
  <source src="TU_NUEVA_URL_AQUI" type="audio/mpeg">
  Tu navegador no soporta audio HTML5.
</audio>
```

### Ajustar la cantidad de efectos:

Para modificar la cantidad de estrellas y corazones, edita estos valores en `script.js`:

```javascript
// Para cambiar el número de estrellas
const numStars = 150;

// Para cambiar la frecuencia de aparición de corazones
corazonesInterval = setInterval(createHeart, 300); // cambia 300 por un valor mayor para menos corazones
```

## 🔧 Tecnologías utilizadas

- HTML5
- CSS3 (con animaciones y transiciones)
- JavaScript (vanilla)
- SVG para las flores

## 🎨 Créditos

Desarrollado con ❤️ para expresar tus sentimientos de la manera más especial. ¡Espero que a esa persona especial le encante!

---

✨ Recuerda que el amor se expresa en detalles ✨ 