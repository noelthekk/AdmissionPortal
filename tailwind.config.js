
module.exports = {
  
    content: [
      // Example content paths...
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],

  theme: {
      
      extend: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            grey:{
              DEFAULT: 'rgb(203 213 225)'
            },
            white: {
                DEFAULT: '#ffffff',
            },
            green: {
                light: '#6fcf97',
                DEFAULT: '#27AE60',
                dark: '#219653',
                darker: '#1e874b',
                succ:'#34D399',
            },
            red: {
                light: '#FFEAEA',
                DEFAULT: '#EB5757',
                dark: '#C20D0D',
            },
            orange: {
                light: '#FFEBDA',
                DEFAULT: '#F66A0A',
                dark: '#A04100',
            },
            primary: {
                DEFAULT: '#24292E',
            },
            warning: {
                DEFAULT: '#D1711C',
            }
        },
          boxShadow: {
              default: '0px 10px 20px rgba(150, 150, 187, 0.1)',
          },
          fontSize: {
              '2rem': '2rem',
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
};
