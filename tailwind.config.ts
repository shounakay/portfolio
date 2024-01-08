import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-firaCode)", ...fontFamily.sans],
      },
      screens: {
        xss: "360px",
        xs: "460px",
      },
      colors: {
        shark: {
          "50": "#f6f7f9",
          "100": "#edeef1",
          "200": "#d6dae1",
          "300": "#b3bcc6",
          "400": "#8a97a6",
          "500": "#6b7a8c",
          "600": "#566273",
          "700": "#464f5e",
          "800": "#3d454f",
          "900": "#363c44",
          "950": "#282c33",
        },
        lavender: {
          "50": "#fbf6fd",
          "100": "#f7ecfb",
          "200": "#edd8f6",
          "300": "#e1b9ee",
          "400": "#c778dd",
          "500": "#ba63d2",
          "600": "#9f44b5",
          "700": "#853596",
          "800": "#6e2d7b",
          "900": "#5d2a65",
          "950": "#3b1141",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
