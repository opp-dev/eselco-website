import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'mobile': '414px',
        'tablet-v': '768px',     // Tablet (vertical)
        'tablet-h': '1024px',    // Tablet (horizontal)
        'laptop': '1440px',      // Laptop
        'desktop': '1920px',     // Desktop
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
