import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./slices/**/*.{vue,ts,js,json}",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    ".nuxt.config.ts",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      dark: "#454241",
      gray: "#E9E8E8",
    },
    screens: {
      sm: "650px",
      lg: [
        {
          min: "1024px",
        },
        {
          raw: "(orientation: landscape)",
        },
      ],
      xl: [
        {
          min: "1280px",
        },
        {
          raw: "(orientation: landscape)",
        },
      ],
      tight: {
        raw: "(max-height: 800px) and (orientation: landscape)",
      },
      mouse: [
        {
          raw: "(pointer:fine) and (hover:hover)",
        },
        {
          raw: "(pointer:coarse) and (hover:hover)",
        },
      ],
      tap: {
        raw: "(hover: none)",
      },
      "2xl": "1536px",
    },
    fontSize: {
      12: "0.75rem",
      13: "0.8125rem",
      14: "0.875rem",
      15: "0.9375rem",
      16: "1rem",
      17: "1.0625rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      23: "1.4375rem",
      24: "1.5rem",
      25: "1.5625rem",
      26: "1.625rem",
      28: "1.75rem",
      30: "1.875rem",
      32: "2rem",
      34: "2.125rem",
      35: "2.1875rem",
      38: "2.375rem",
      40: "2.5rem",
      45: "2.8125rem",
      55: "3.4375rem",
      "vw-mobile": "3.86vw",
      "vw-sm": "2.083vw",
      "vw-lg": "1.562vw",
      "vw-xl": "1.11vw",
      "vw-xxl": "0.9vw",
    },
    extend: {
      spacing: {
        7.5: "1.875rem",
        unset: "unset",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--reka-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--reka-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    transitionProperty: {
      "underline-anim": "width, opacity, transform",
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "collapsible-down": "collapsible-down 0.2s ease-in-out",
      "collapsible-up": "collapsible-up 0.2s ease-in-out",
      "fade-in": "fade 0.3s ease-out",
      "fade-out": "fade 0.3s ease-out reverse",
      "slide-infinite": "slide-infinite 40s linear infinite",
    },
    keyframes: {
      fade: {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },
      "accordion-down": {
        from: {
          height: 0,
        },
        to: {
          height: "var(--radix-accordion-content-height)",
        },
      },
      "accordion-up": {
        from: {
          height: "var(--radix-accordion-content-height)",
        },
        to: {
          height: 0,
        },
      },
      "collapsible-down": {
        from: {
          height: 0,
        },
        to: {
          height: "var(--radix-collapsible-content-height)",
        },
      },
      "collapsible-up": {
        from: {
          height: "var(--radix-collapsible-content-height)",
        },
        to: {
          height: 0,
        },
      },
      "tab-change": {
        from: {
          height: "var(--tm-tab-content-height-from)",
        },
        to: {
          height: "var(--tm-tab-content-height-to)",
        },
      },
      "slide-infinite": {
        from: {
          transform: "translateX(0)",
        },
        to: {
          transform: "translateX(-100%)",
        },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("active-class", [".active &", "&.active"]);
    }),
    require("tailwindcss-animate"),
  ],
};
