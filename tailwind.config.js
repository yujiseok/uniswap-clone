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
        "uni-gray-6": "#E2E7F6",
        "uni-gray-7": "#EBEEFB",
        "uni-gray-8": "rgb(232, 236, 251)",
        "uni-gray-9": "#8893B6",
        "uni-gray-10": "#98A1C014",
        "uni-pink-1": "rgba(251, 17, 142, 0.12)",
        "uni-pink-2": "rgb(251, 17, 142)",
        "uni-pink-3": "#fb118e",
        "uni-pink-4": "#F7E2EE",
        "uni-search": "rgba(255,255,255,0.4)",
        "uni-search-slash-1": "rgba(173, 188, 255, 0.24)",
        "uni-search-slash-2": "rgb(119, 128, 160)",
        "uni-dropdown-border": "#e8ecfb",
        "ticker-hover": "rgb(210, 217, 238)",
        "uni-modal-overlay": "rgba(13, 17, 28, 0.6)",
        "uni-blue-1": "#5D90FC",
        "uni-blue-2": "#4C82FB",
        "uni-blue-3": "#4C82FB3D",
        "uni-black-1": "#0d111c",
        "uni-green-1": "rgb(64, 182, 107)",
        "uni-red-1": "rgba(250,43,27,0.12)",
        "uni-red-2": "rgb(250,43,27)",
      },
      boxShadow: {
        "uni-dropdown": "0 4px 12px 0 #00000026",
        "uni-pink": "rgb(255, 0, 199) 0px 0px 16px 0px",
        proto: "rgba(51, 53, 72, 0.04) 0px 10px 24px",
        "uni-select": "rgba(0, 0, 0, 0.075) 0px 6px 10px",
        banner:
          "rgba(51, 53, 72, 0.04) 8px 12px 20px, rgba(51, 53, 72, 0.02) 4px 6px 12px, rgba(51, 53, 72, 0.04) 4px 4px 8px",
        "swap-config":
          "rgba(0, 0, 0, 0.01) 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 4px 8px, rgba(0, 0, 0, 0.04) 0px 16px 24px, rgba(0, 0, 0, 0.01) 0px 24px 32px",
        "token-img": "white 0px 0px 1px",
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
        170: "170px",
      },
      keyframes: {
        toggle: {
          "0%": { "margin-left": "0", "margin-right": "28px" },
          "100%": { "margin-left": "28px", "margin-right": "0" },
        },
      },
      animation: {
        toggle: "toggle 0.1s ease-in running",
      },
    },
  },
  plugins: [],
};
