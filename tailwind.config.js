/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '0.6rem',
          sm: '0.85rem',
          md: '1rem',
          lg: '2rem',
          xl: '5rem',
          xxl: '4rem'
        },
      },

      colors: {
        'primary': '#1043e6',
        'secondary': '#',
        'app': '#f8f8f8',
        'app-dark': '#010712',
        
      },

      screens: {
        xxs:'320px',
        xs:'360px',
        smm:'520px',
        sm:'640px',
        md:'768px',
        lg:'1024px',
        xl:'1440px',
        xxl :'1600px'
      }
    },
  },
  plugins: [],
}

