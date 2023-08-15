/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode : ["class"],
    theme: {
      extend: {
        colors: {
          primary: "#6178F1",
          youtube: "#FF0000",
          twitter: "#1DA1F2",
          discord: "#5865F2",
          github: "#181717",
        },
        boxShadow: {
          grid: "0px 4px 10px 0px rgba(0, 0, 0, 0.05);",
        },
        fontFamily: {
          sans: ["var(--font-sfpro)"],
        },
      },
    },
    plugins: [],
};