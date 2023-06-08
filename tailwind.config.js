/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "Arial", "sans-serif"],
      },
      colors: {
        "uni-gray-1": "#5d6785",
        "uni-gray-2": "#7780a0",
        "uni-gray-3": "#99a1bd14",
        "uni-gray-4": "#98a1c0",
        "uni-gray-5": "#F5F6FC",
        "uni-pink-1": "rgba(251, 17, 142, 0.12)",
        "uni-pink-2": "rgb(251, 17, 142)",
        "uni-pink-3": "#fb118e",
        "uni-search": "rgba(255,255,255,0.4)",
        "uni-search-slash-1": "rgba(173, 188, 255, 0.24)",
        "uni-search-slash-2": "rgb(119, 128, 160)",
        "uni-dropdown-border": "#e8ecfb",
        "ticker-hover": "rgb(210, 217, 238)",
      },
      boxShadow: {
        "uni-dropdown": "0 4px 12px 0 #00000026",
        "uni-pink": "rgb(255, 0, 199) 0px 0px 16px 0px",
        proto: "rgba(51, 53, 72, 0.04) 0px 10px 24px",
      },
      backgroundImage: {
        "swap-card": "url(/src/assets/swapCard.png)",
        "nft-card": "url(/src/assets/nftCard.png)",
      },
      backgroundPosition: {
        "right-center": "right center",
      },
      backgroundSize: {
        "auto-100": "auto 100%",
      },
    },
  },
  plugins: [],
};
