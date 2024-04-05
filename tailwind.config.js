/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                exo: ['"Exo 2"', "sans-serif"],
                outfit: ['"Outfit"', "sans-serif"],
                Montserrat: ['"Montserrat"', "sans-serif"],
            },
            animation: {
                backtoTop: "backtoTop 2s linear infinite",
                postionImg: "postionImg 3s linear infinite",
            },
            keyframes: {
                backtoTop: {
                    "0%": {
                        transform: "translatey(0) scale(.998)",
                    },

                    "50%": {
                        transform: " translatey(-7px) scale(1.1023)",
                    },
                    "100%": {
                        transform: "translatey(0) scale(.998)",
                    },
                },
                postionImg: {
                    "0%": {
                        transform: "rotatey(0)",
                    },

                    "50%": {
                        transform: "rotate(25deg)",
                    },
                    "100%": {
                        transform: "rotatey(0)",
                    },
                },
            },
        },
    },
    plugins: [],
};