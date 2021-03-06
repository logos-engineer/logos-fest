module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/*.js',
    './src/pages/**/*.js',
    './src/components/*.js',
    './src/components/**/*.js',
  ],
  theme: {
    fontFamily: {
      poppins: ['"Poppins"', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1220px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    boxShadow: {
      navbar: '0px 2px 16px rgba(0, 0, 0, 0.06)',
      fest: '0px 41px 170px rgba(18, 18, 18, 0.06), 0px 5.13px 21.29px rgba(18, 18, 18, 0.03)',
      airbnb: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '36px',
      '4xl': '48px',
      '5xl': '64px',
    },
    extend: {
      backgroundImage: (theme) => ({
        'speaker-gradient':
          ' linear-gradient(180deg, rgba(72, 145, 159, 0) 0%, #48919F 100%)',
      }),
      padding: {
        '120px': '7.5rem',
      },
      colors: {
        black: {
          500: '#000000',
          primary: '#121212',
          body: '#313131',
          line: '#D9DBE9',
        },
        pink: {
          50: '#FAC5DC',
          100: '#F8B2D1',
          200: '#F48DBA',
          300: '#F168A3',
          400: '#ED428D',
          500: '#EA1D76',
          600: '#C71261',
          700: '#9D0F4C',
          800: '#730B38',
          900: '#490723',
        },
        yellow: {
          50: '#FCFCE1',
          100: '#FBFACE',
          200: '#F8F5A9',
          300: '#F4F183',
          400: '#F1ED5E',
          500: '#EEE938',
          600: '#E5DF14',
          700: '#BAB610',
          800: '#908C0C',
          900: '#666309',
        },
        blue: {
          50: '#F1FBFC',
          100: '#F1FBFC',
          200: '#CEF0F6',
          300: '#ACE5F0',
          400: '#89DAE9',
          500: '#67CFE3',
          600: '#40C3DC',
          700: '#25AFC9',
          800: '#1E8DA2',
          900: '#176B7C',
        },
        ocean: {
          50: '#67CFE3',
          100: '#5DBACC',
          200: '#52A6B6',
          300: '#48919F',
          400: '#3E7C88',
          500: '#346872',
          600: '#29535B',
          700: '#1F3E44',
        },
      },
      lineHeight: {
        1.4: '1.4',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
