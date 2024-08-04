/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '1-0-0': '1 0 0'
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(267deg, #1F78DE -17.45%, #6BCC3D 108.49%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        h1: '68px',
        h2: '40px',
        h3: '28px',
        h4: '24px',
        h5: '20px',
        h6: '16px',
        pf: '14px',
        label: '12px'
      },
      spacing: {
        '100': '100px',
      },
      padding: {
        desktop: '155px',
        tablet: '24px',
      }
    },
  },
  plugins: [],
}