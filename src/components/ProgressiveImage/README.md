# ProgressiveImage Component

Eine React-Komponente für progressives Laden von Bildern mit Blur-up Effekt und Loading-Zustand.

## Features

- ✅ **Progressive Loading**: Bilder laden sanft mit Fade-in Effekt
- ✅ **Loading Indicator**: Zeigt einen Spinner während des Ladens
- ✅ **Error Handling**: Zeigt Fehlermeldung bei Ladeproblemen
- ✅ **Lazy Loading**: Nutzt native `loading="lazy"` API
- ✅ **Placeholder**: Farbiger Hintergrund während des Ladens
- ✅ **Responsive**: Passt sich an Container-Größe an

## Usage

```jsx
import ProgressiveImage from '../components/ProgressiveImage/ProgressiveImage';

// Einfaches Beispiel
<ProgressiveImage
  src="/path/to/image.jpg"
  alt="Beschreibung"
  style={{ height: '250px', width: '100%', objectFit: 'cover' }}
/>

// Mit onClick Handler
<ProgressiveImage
  src={project.image}
  alt={project.title}
  style={{ height: '250px', objectFit: 'cover' }}
  onClick={() => handleImageClick(project)}
/>

// Mit Custom Placeholder Color
<ProgressiveImage
  src="/image.jpg"
  alt="Bild"
  placeholderColor="#1a1a1a"
  style={{ height: '400px' }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | **required** | Bild-URL |
| `alt` | string | **required** | Alt-Text für Accessibility |
| `className` | string | `''` | CSS Klasse für Wrapper |
| `style` | object | `{}` | Inline Styles |
| `onClick` | function | `undefined` | Click Handler |
| `placeholderColor` | string | `'#2a2a2a'` | Hintergrundfarbe während Laden |

## Styling

Die Komponente kommt mit eigenen Styles (`ProgressiveImage.css`), die du bei Bedarf überschreiben kannst:

```css
/* Custom Spinner */
.progressive-image-spinner {
  /* deine Styles */
}

/* Custom Error Message */
.progressive-image-error {
  /* deine Styles */
}
```

## Wie es funktioniert

1. **Initial**: Zeigt Placeholder mit Spinner
2. **Loading**: Bild wird im Hintergrund geladen
3. **Loaded**: Fade-in Animation (0.5s)
4. **Error**: Zeigt Fehlermeldung bei Ladeproblemen

## Performance Tips

- Kombiniere mit Bildkomprimierung (TinyPNG, Squoosh)
- Verwende WebP Format für moderne Browser
- Optimale Bildgrößen für verschiedene Viewports
- Nutze CDN für schnellere Auslieferung

## Browser Support

- ✅ Chrome/Edge (aktuell)
- ✅ Firefox (aktuell)
- ✅ Safari (aktuell)
- ⚠️ IE11 (funktioniert, aber ohne lazy loading)
