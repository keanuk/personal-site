# Dark Mode Implementation

This document describes the dark mode implementation for the personal portfolio website.

## Features

- **System Theme Detection**: Automatically follows the user's system theme preference by default
- **Manual Theme Toggle**: Users can explicitly choose between Light, Dark, or System themes
- **Persistent Preferences**: Theme selection is saved in localStorage and persists across sessions
- **Smooth Transitions**: CSS transitions provide smooth theme switching animations
- **No Flash of Unstyled Content (FOUC)**: Theme is applied before page render to prevent flickering
- **Theme-Aware Assets**: Logos and icons automatically adapt to the current theme

## Architecture

### Theme Store (`src/lib/stores/theme.js`)

A Svelte store that manages the theme state with three possible values:
- `'light'` - Light theme
- `'dark'` - Dark theme  
- `'system'` - Follow system preference

Key features:
- Persists theme preference in localStorage
- Automatically applies theme to DOM via `data-theme` attribute
- Listens for system theme changes when in 'system' mode

### CSS Variables (`src/app.css`)

Uses CSS custom properties for theming:

```css
:root {
  /* Light theme variables */
  --primary-color: #7700ff;
  --text-color: #333;
  --background-color: #ffffff;
  /* ... more variables */
}

[data-theme='dark'] {
  /* Dark theme overrides */
  --primary-color: #9f4fff;
  --text-color: #e0e0e0;
  --background-color: #121212;
  /* ... more variables */
}
```

### Theme Toggle Component (`src/lib/components/ThemeToggle.svelte`)

A dropdown component that allows users to:
- View current theme selection
- Switch between Light, Dark, and System themes
- Positioned in the footer as requested

### Theme-Aware Assets (`src/lib/components/ThemedAsset.svelte`)

Automatically handles theme-appropriate logos and icons using two strategies:

1. **CSS Filter Inversion**: For monochrome icons (GitHub, Email, Attachment)
   - Uses `filter: invert(1)` in dark mode
   - Maintains original file, just inverts colors

2. **File Switching**: For brand logos (LinkedIn)
   - Switches between `/black.png` and `/white.png` versions
   - Preserves brand colors and guidelines

### Theme Utilities (`src/lib/utils/theme.js`)

Helper functions for:
- Detecting current effective theme
- Determining which assets should use inversion vs file switching
- Getting appropriate asset paths based on theme

## Preventing FOUC

Theme is applied immediately in `src/app.html` before the main application loads:

```javascript
// Inline script in <head>
(function () {
  const stored = localStorage.getItem('theme-preference');
  const theme = stored || 'system';
  
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
})();
```

## Asset Organization

```
static/
├── icons/
│   ├── Email/
│   │   ├── black.svg (inverted in dark mode)
│   │   └── white.svg
│   └── Attachment/
│       ├── black.svg (inverted in dark mode)
│       └── white.svg
└── logo/
    ├── GitHub/
    │   ├── black.svg (inverted in dark mode)
    │   └── white.svg
    ├── LinkedIn/
    │   ├── black.png (switched in dark mode)
    │   └── white.png
    └── GitLab/
        ├── black.svg (inverted in dark mode)
        └── white.svg
```

## Usage

### Using the Theme Store

```javascript
import { theme } from '$lib/stores/theme';

// Set theme
theme.set('dark');

// Subscribe to changes
theme.subscribe(currentTheme => {
  console.log('Theme changed to:', currentTheme);
});

// Initialize (call once in layout)
theme.init();
```

### Using Theme-Aware Assets

```svelte
<script>
  import ThemedAsset from '$lib/components/ThemedAsset.svelte';
</script>

<ThemedAsset 
  src="/logo/GitHub/black.svg" 
  alt="GitHub" 
  className="icon" 
/>
```

### Manual CSS Theming

```css
.my-component {
  background: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--footer-border);
}

/* Theme-specific overrides if needed */
[data-theme='dark'] .special-element {
  /* Dark mode specific styles */
}
```

## Browser Support

- **Modern Browsers**: Full support including smooth transitions
- **Legacy Browsers**: Graceful fallback to light theme
- **JavaScript Disabled**: Falls back to light theme
- **localStorage Unavailable**: Falls back to system theme

## Performance Considerations

- Theme detection runs synchronously in `<head>` to prevent FOUC
- CSS custom properties provide efficient theme switching
- Asset switching uses MutationObserver for optimal performance
- Minimal JavaScript footprint (~2KB for theme system)

## Accessibility

- Respects user's system theme preference by default
- High contrast maintained in both themes
- Keyboard navigation support for theme toggle
- Screen reader friendly theme toggle labels
- Smooth transitions avoid jarring theme switches

## Future Enhancements

Potential improvements for the theme system:

1. **Additional Themes**: Add more color schemes (e.g., high contrast, sepia)
2. **Time-Based Switching**: Automatic light/dark based on time of day
3. **Custom Theme Colors**: Allow users to customize accent colors
4. **Reduced Motion**: Respect `prefers-reduced-motion` for transitions
5. **Theme Preview**: Show theme preview before applying