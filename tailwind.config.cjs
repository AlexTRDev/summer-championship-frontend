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
        blueDegradado: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
        linear1: 'linear-gradient(220.55deg, #6495ed 0%, #467fa6 100%)',
        linear2: 'linear-gradient(220.55deg, #e8175b 0%, #ff3c7b 100%)',
        linear3: 'linear-gradient(220.55deg, #565656 0%, #767676 100%)',
        linear4: 'linear-gradient(220.55deg, #998416 0%, #daa520 100%)',
        linear5: 'linear-gradient(220.55deg, #834e99 0%, #da70d6 100%)',
        linear6: 'linear-gradient(220.55deg, #adff2f 0%, #84b321 100%)',
      },
      colors: {
        color1: '#6495ed',
        color2: '#467fa6',
        color3: '#e8175b',
        color4: '#ff3c7b',
        color5: '#565656',
        color6: '#767676',
        color7: '#998416',
        color8: '#daa520',
        color9: '#834e99',
        color10: '#da70d6',
        color11: '#adff2f',
        color12: '#84b321',
      },
    },
  },
  plugins: [],
}
// background-color: #0093E9
// background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)
