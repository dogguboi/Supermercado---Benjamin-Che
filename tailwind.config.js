/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Paleta del proyecto (tomada de la imagen entregada)
      colors: {
        tinto:    { DEFAULT: '#AC0F16', dark: '#860B11', light: '#F9E3E4' }, // acción principal y precios
        naranja:  { DEFAULT: '#F1792F', dark: '#9A4210', light: '#FDE7D6' }, // acentos y alertas
        crema:    { DEFAULT: '#EDE5D7', light: '#FBF8F3' },                  // fondo y superficies
        turquesa: { DEFAULT: '#2EAFC6', dark: '#166A7D', light: '#D9F0F5' }, // enlaces y estados "ok"
        carbon:   { DEFAULT: '#2A2726', soft: '#5A5656' },                   // texto y barra superior
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
