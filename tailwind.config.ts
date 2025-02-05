import type { Config } from "tailwindcss";
import { keepTheme } from "keep-react/keepTheme";
import plugin from "tailwindcss/plugin";

const colors = {
  metal: {
    25: "var(--color-blue-action-25)",
    50: "var(--color-blue-action-50)",
    100: "var(--color-blue-action-100)",
    200: "var(--color-blue-action-200)",
    300: "var(--color-blue-action-300)",
    400: "var(--color-blue-action-400)",
    500: "var(--color-blue-action-500)",
    600: "var(--color-blue-action-600)",
    700: "var(--color-blue-action-700)",
    800: "var(--color-blue-action-800)",
    900: "var(--color-blue-action-900)",
  },
  primary: {
    25: "var(--color-blue-action-25)",
    50: "var(--color-blue-action-50)",
    100: "var(--color-blue-action-100)",
    200: "var(--color-blue-action-200)",
    300: "var(--color-blue-action-300)",
    400: "var(--color-blue-action-400)",
    500: "var(--color-blue-action-500)",
    600: "var(--color-blue-action-600)",
    700: "var(--color-blue-action-700)",
    800: "var(--color-blue-action-800)",
    900: "var(--color-blue-action-900)",
  },
  secondary: {
    25: "var(--color-teal-25)",
    50: "var(--color-teal-50)",
    100: "var(--color-teal-100)",
    200: "var(--color-teal-200)",
    300: "var(--color-teal-300)",
    400: "var(--color-teal-400)",
    500: "var(--color-teal-500)",
    600: "var(--color-teal-600)",
    700: "var(--color-teal-700)",
    800: "var(--color-teal-800)",
    900: "var(--color-teal-900)",
  },
  success: {
    25: "var(--color-green-25)",
    50: "var(--color-green-50)",
    100: "var(--color-green-100)",
    200: "var(--color-green-200)",
    300: "var(--color-green-300)",
    400: "var(--color-green-400)",
    500: "var(--color-green-500)",
    600: "var(--color-green-600)",
    700: "var(--color-green-700)",
    800: "var(--color-green-800)",
    900: "var(--color-green-900)",
  },
  warning: {
    25: "var(--color-orange-25)",
    50: "var(--color-orange-50)",
    100: "var(--color-orange-100)",
    200: "var(--color-orange-200)",
    300: "var(--color-orange-300)",
    400: "var(--color-orange-400)",
    500: "var(--color-orange-500)",
    600: "var(--color-orange-600)",
    700: "var(--color-orange-700)",
    800: "var(--color-orange-800)",
    900: "var(--color-orange-900)",
  },
  error: {
    25: "var(--color-red-25)",
    50: "var(--color-red-50)",
    100: "var(--color-red-100)",
    200: "var(--color-red-200)",
    300: "var(--color-red-300)",
    400: "var(--color-red-400)",
    500: "var(--color-red-500)",
    600: "var(--color-red-600)",
    700: "var(--color-red-700)",
    800: "var(--color-red-800)",
    900: "var(--color-red-900)",
  },
  info: {
    25: "var(--color-blue-info-25)",
    50: "var(--color-blue-info-50)",
    100: "var(--color-blue-info-100)",
    200: "var(--color-blue-info-200)",
    300: "var(--color-blue-info-300)",
    400: "var(--color-blue-info-400)",
    500: "var(--color-blue-info-500)",
    600: "var(--color-blue-info-600)",
    700: "var(--color-blue-info-700)",
    800: "var(--color-blue-info-800)",
    900: "var(--color-blue-info-900)",
  },
} as const;






const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // backgroundImage: {
      //   "login-page-background": "var(--login-page-gradient)",
      //   "table-participants-gradient":
      //     "linear-gradient(135deg, #FDE68A, #FCA5A5)",
      // },
      fontFamily: {
        poppins: "var(--font-poppins)",
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
};

export default keepTheme(config, colors);





// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [
//     require("tailwindcss-animate"),
//     plugin(function ({ addUtilities, theme }) {
//       const newUtilities = {
//         ".grid-dashboard-areas": {
//           gridTemplateColumns: `auto 1fr`,
//           gridTemplateRows: "auto 1fr auto",
//           gridTemplateAreas: ` "sidebar header" "sidebar main" "sidebar main" `,
//         },
//         ".header-area": {
//           gridArea: "header",
//         },
//         ".sidebar-area": {
//           gridArea: "sidebar",
//         },
//         ".main-area": {
//           gridArea: "main",
//         },
//       };

//       addUtilities(newUtilities);
//     }),
//   ],
// } satisfies Config;
