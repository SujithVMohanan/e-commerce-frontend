/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Surfaces & Backgrounds
        "surface": "#faf8ff",
        "surface-dim": "#d2d9f4",
        "surface-bright": "#faf8ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f3ff",
        "surface-container": "#eaedff",
        "surface-container-high": "#e2e7ff",
        "surface-container-highest": "#dae2fd",
        "on-surface": "#131b2e",
        "on-surface-variant": "#444653",
        "inverse-surface": "#283044",
        "inverse-on-surface": "#eef0ff",

        // Primary Brand Tier (Deep Royal Blue)
        "primary": "#00288e",
        "on-primary": "#ffffff",
        "primary-container": "#1e40af",
        "on-primary-container": "#a8b8ff",
        "primary-fixed": "#dde1ff",
        "primary-fixed-dim": "#b8c4ff",
        "on-primary-fixed": "#001453",
        "on-primary-fixed-variant": "#173bab",

        // Secondary Accent Tier (Cyan / Blue)
        "secondary": "#006398",
        "on-secondary": "#ffffff",
        "secondary-container": "#5bb8fe",
        "on-secondary-container": "#00476e",
        "secondary-fixed": "#cce5ff",
        "secondary-fixed-dim": "#93ccff",
        "on-secondary-fixed": "#001d31",
        "on-secondary-fixed-variant": "#004b73",

        // Tertiary (Warm Accents & Highlights)
        "tertiary": "#4c2e00",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#6b4200",
        "on-tertiary-container": "#ffa929",
        "tertiary-fixed": "#ffddb8",
        "tertiary-fixed-dim": "#ffb95f",

        // Status & Alerts
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        // Borders & Outlines
        "outline": "#757684",
        "outline-variant": "#c4c5d5",
        "surface-tint": "#3755c3",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        headline: ["Plus Jakarta Sans", "sans-serif"],
        "display-xl": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
        "price-display": ["Plus Jakarta Sans", "sans-serif"],
      },
      spacing: {
        "space-xs": "0.25rem",  // 4px
        "space-sm": "0.5rem",   // 8px
        "space-md": "1rem",     // 16px
        "space-lg": "1.5rem",   // 24px
        "space-xl": "2.5rem",   // 40px
        "gutter-sm": "1rem",    // 16px
        "gutter": "1.5rem",     // 24px
        "gutter-lg": "2rem",    // 32px
        "margin-sm": "1rem",    // 16px
        "margin": "1.5rem",     // 24px
        "margin-lg": "3rem",    // 48px
      },
      borderRadius: {
        sm: "0.5rem",
        DEFAULT: "1rem",        // 16px
        md: "1.5rem",
        lg: "2rem",             // 32px
        xl: "3rem",             // 48px
        full: "9999px",
      },
    },
  },
  plugins: [],
};
