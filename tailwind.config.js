module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      'bleu-1': '#79B6DD',
      'bleu-2': '#275C9B'
    },
    fontFamily: {
      'roboto': ['Roboto', 'Arial', 'sans-serif'],
      'robotoslab': ['Roboto Slab', 'Arial', 'sans-serif']
    },
    fontSize: {
      'h1': ['5.5rem', {
        lineHeight: '6.5rem',
        letterSpacing: '0.1em',
      }],
      'h2': ['3rem', {
        lineHeight: '4rem',
        letterSpacing: '0.1em',
      }],
      'h3': ['2rem', {
        lineHeight: '3rem',
        letterSpacing: '0.1em',
      }],
      'h4': ['1.4rem', {
        lineHeight: '1.4rem',
        letterSpacing: '0.1em',
      }],
      'm': ['2.2rem', '3.2rem'],
      's': ['1.8rem', '2.8rem'],
      'xs': ['1.2rem', '1.8rem'],
      'cta1': ['2rem', '2.3rem'],
      'cta2': ['1.4rem', '1.6rem'],
    },
    extend: {
      maxWidth: {
        '1512px': '151.2rem'
      },
      height: {
        'full-header': 'calc(100vh - 129px)'
      },
      borderRadius: {
        '70px': '7rem'
      }
    }
  }
};