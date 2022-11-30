/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                '2xl': {'max': '1535px'},
                // => @media (max-width: 1535px) { ... }
          
                'xl': {'max': '1279px'},
                // => @media (max-width: 1279px) { ... }
          
                'lg': {'max': '1023px'},
                // => @media (max-width: 1023px) { ... }
          
                'md': {'max': '815px'},
                // => @media (max-width: 815px) { ... }
          
                'sm': {'max': '680px'},
                // => @media (max-width: 680px) { ... }
                'hder': '608px'
              },
            height: {
                "10v": "10vh",
                "20v": "20vh",
                "30v": "30vh",
                "40v": "40vh",
                "50v": "50vh",
                "60v": "60vh",
                "70v": "70vh",
                "80v": "80vh",
                "90v": "90vh",
                "100v": "100vh",
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
