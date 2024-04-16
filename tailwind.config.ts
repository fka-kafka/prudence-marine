/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'raisin-black': '#1A192B',
        'aureolin': '#FDE428',
        'onyx': '#403F4A',
        'old-gold': '#A59B34',
        'moss-green': '#585422',
      },
      fontFamily: {
        poppins: "Poppins, ui-serif",
        playfair: "Playfair display, ui-serif",
      },
    },
    plugins: [],
  },
};
