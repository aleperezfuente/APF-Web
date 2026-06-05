/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        accent: "var(--accent)",
        "text-primary": "var(--text-primary)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
}