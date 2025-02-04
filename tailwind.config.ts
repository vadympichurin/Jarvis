import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".grid-dashboard-areas": {
          gridTemplateColumns: `auto 1fr`,
          gridTemplateRows: "auto 1fr auto",
          gridTemplateAreas: ` "sidebar header" "sidebar main" "sidebar main" `,
        },
        ".header-area": {
          gridArea: "header",
        },
        ".sidebar-area": {
          gridArea: "sidebar",
        },
        ".main-area": {
          gridArea: "main",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
} satisfies Config;
