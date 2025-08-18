// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Scan all components/pages
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: [
            'BlinkMacSystemFont',
            '-apple-system',
            '"Segoe UI"',
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif'
          ],
        },
      },
    },
    plugins: [],
  };
  