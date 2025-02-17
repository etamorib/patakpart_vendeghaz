/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          70: "#021639",
        },
        yellow: {
          50: "#FEC601",
        },
      },
      backgroundImage: {
        "gallery-img-1": "url('/udvar_front.jpg')",
        "gallery-img-2": "url('/udvar1.jpg')",
        "gallery-img-3": "url('/udvar2.jpg')",
        "gallery-img-4": "url('/udvar3.jpg')",
        "gallery-img-5": "url('/tornac.jpg')",
        "gallery-img-5_2": "url('/tornac2.webp')",
        "gallery-img-6": "url('/virag.jpg')",
        "gallery-img-7": "url('/belso.jpg')",
        "gallery-img-8": "url('/belso2.jpg')",
        "gallery-img-9": "url('/belso3.jpg')",
        "gallery-img-10": "url('/belso4.jpg')",
        "gallery-img-11": "url('/belso5.jpg')",
        "gallery-img-12": "url('/belso6.jpg')",
        "gallery-img-13": "url('/belso7.jpg')",
        "gallery-img-14": "url('/belso8.jpg')",
        "gallery-img-15": "url('/belso9.jpg')",
        "gallery-img-16": "url('/belso10.jpg')",
        "gallery-img-17": "url('/belso11.jpg')",
        "gallery-img-18": "url('/belso12.jpg')",

        "guide-img-1": "url('/mofetta.jpg')",
        "guide-img-2": "url('/siroki-var.jpg')",
        "guide-img-3": "url('/ilona-volgyi-vizeses.jpg')",
        "guide-img-4": "url('/bukkszekfurdo-strand.jpg')",
        "guide-img-5": "url('/csorgo-szurdok.jpg')",
        "guide-img-6": "url('/kekes.jpg')",
        "guide-img-7": "url('/agasvar.jpg')",
        "guide-img-8": "url('/oxygen.jpg')",

        "bg-img-2": "url('/img-2.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2":
          "linear-gradient(to right, rgba(255, 255, 255, 1.0) 5%, transparent 30%), linear-gradient(to bottom, rgba(255, 255, 255, 1.0) 10%, transparent 90%), linear-gradient(to top, rgba(255, 255, 255, 0.2) 1%, transparent 15%) ,url('/udvar1.jpg')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
  purge: {
    options: {
      safelist: [{ pattern: /bg-gallery-img./ }, { pattern: /bg-guide-img./ }],
    },
  },
};
