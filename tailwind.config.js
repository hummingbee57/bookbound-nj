/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#0b0b10',
        'background': '#f4f4fa',
        'primary': '#4d47c2',
        'secondary': '#ce4dfe',
        'accent': '#e65cc3',
       },
      backgroundImage: {
        'bookshelf': 'url(src/assets/bookshelf.jpg)'
      },
      fontFamily: {
        'display': ['Yeseva One', 'Times New Roman', 'serif'],
        'body': ['Nunito', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

