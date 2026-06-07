/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "colors": {
              "primary-container": "#1a1a1a",
              "surface": "#ffffff",
              "on-error": "#690005",
              "background": "#ffffff",
              "secondary": "#6b6b6b",
              "surface-container-high": "#f0f0ee",
              "on-secondary-container": "#6b6b6b",
              "on-tertiary-container": "#6b6b6b",
              "on-background": "#1a1a1a",
              "tertiary": "#999999",
              "surface-container": "#f8f8f6",
              "surface-bright": "#ffffff",
              "outline-variant": "#e0e0e0",
              "outline": "#999999",
              "on-primary": "#ffffff",
              "surface-variant": "#f8f8f6",
              "on-primary-container": "#ffffff",
              "inverse-surface": "#1a1a1a",
              "surface-container-lowest": "#ffffff",
              "inverse-on-surface": "#ffffff",
              "on-surface-variant": "#6b6b6b",
              "on-surface": "#1a1a1a",
              "primary": "#1a1a1a",
              "surface-dim": "#f0f0ee",
              "surface-container-low": "#fafafa",
              "surface-container-highest": "#e8e8e6",
              "error": "#ba1a1a",
              "error-container": "#ffdad6"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "unit": "4px",
              "container-max": "1440px",
              "gutter": "24px",
              "margin": "48px"
      },
      "fontFamily": {
              "data-point": ["Space Grotesk"],
              "headline-md": ["Space Grotesk"],
              "body-lg": ["Inter"],
              "body-md": ["Inter"],
              "mono-label": ["Space Grotesk"],
              "headline-xl": ["Space Grotesk"]
      },
      "fontSize": {
              "data-point": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "400"}],
              "headline-md": ["24px", {"lineHeight": "1.2", "letterSpacing": "0.02em", "fontWeight": "600"}],
              "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
              "body-md": ["16px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400"}],
              "mono-label": ["12px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "500"}],
              "headline-xl": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}]
      }
    },
  },
  plugins: [],
};
