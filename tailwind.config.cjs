/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        sombra: '5px 5px 10px rgba(255,255,255,.5)',
      },
      backgroundImage: {
        linear: 'linear-gradient(236.07deg,#f7ab35 .09%,#e8521e 102.47%)',
        orangeDegradado: 'linear-gradient(225deg, #FBAB7E 0%, #F7CE68 100%)',
        blueDegradado: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
      },
      backgroundColor: {
        orange: '#FBAB7E',
        myBlue: '#0093E9',
      },
    },
  },
  plugins: [],
}
// background-color: #0093E9;
// background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
