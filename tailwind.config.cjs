/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{ts,tsx}', './src/**/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        small: '4px',
        mid: '10px'
      },
      fontFamily: {
        inter: ['Inter'],
        noto: ['NotoSansKR'],
        open: ['OpenSans']
      },
      boxShadow: {
        common: '0px 0px 32px rgba(136, 152, 170, 0.15)'
      },
      colors: {
        mainColor: '#00127f',
        disabledColor: '#A3A5AE',
        whiteColor: '#ffff',
        blackColor: '#000000de',
        headTable: '#797979',
        gradientClFirst: '#46C0EA',
        gradientClSecond: '#3A59FF',
        lightGray: '#F5F6F7',
        borderColor: '#C4C6CD',
        headColor: '#626576',
        blackColor: '#090a0b'
      }
    }
  },
  plugins: []
};
