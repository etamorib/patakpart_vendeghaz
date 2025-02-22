const pfx = "/patakpart_vendeghaz";

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
        "gallery-img-1": `url('${pfx}/udvar_front.jpg')`,
        "gallery-img-2": `url('${pfx}/udvar1.jpg')`,
        "gallery-img-3": `url('${pfx}/udvar2.jpg')`,
        "gallery-img-4": `url('${pfx}/udvar3.jpg')`,
        "gallery-img-5": `url('${pfx}/tornac.jpg')`,
        "gallery-img-5_2": `url('${pfx}/tornac2.webp')`,
        "gallery-img-5_3": `url('${pfx}/tornac3.jpg')`,
        "gallery-img-6": `url('${pfx}/virag.jpg')`,
        "gallery-img-7": `url('${pfx}/belso.jpg')`,
        "gallery-img-8": `url('${pfx}/belso2.jpg')`,
        "gallery-img-9": `url('${pfx}/belso3.jpg')`,
        "gallery-img-10": `url('${pfx}/belso4.jpg')`,
        "gallery-img-11": `url('${pfx}/belso5.jpg')`,
        "gallery-img-12": `url('${pfx}/belso7.jpg')`,
        "gallery-img-13": `url('${pfx}/belso8.jpg')`,

        "guide-img-1": `url('${pfx}/mofetta.jpg')`,
        "guide-img-2": `url('${pfx}/siroki-var.jpg')`,
        "guide-img-3": `url('${pfx}/ilona-volgyi-vizeses.jpg')`,
        "guide-img-4": `url('${pfx}/bukkszekfurdo-strand.jpg')`,
        "guide-img-5": `url('${pfx}/csorgo-szurdok.jpg')`,
        "guide-img-6": `url('${pfx}/kekes.jpg')`,
        "guide-img-7": `url('${pfx}/agasvar.jpg')`,
        "guide-img-8": `url('${pfx}/oxygen.jpg')`,

        "bg-img-2": `url('${pfx}/img-2.png')`,
        "feature-bg": `url('${pfx}/feature-bg.svg')`,
        pattern: `url('${pfx}/pattern.png')`,
        "pattern-2": `linear-gradient(to right, rgba(255, 255, 255, 1.0) 5%, transparent 30%), linear-gradient(to bottom, rgba(255, 255, 255, 1.0) 10%, transparent 90%), linear-gradient(to top, rgba(255, 255, 255, 0.2) 1%, transparent 15%), url('${pfx}/udvar1.jpg')`,
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
