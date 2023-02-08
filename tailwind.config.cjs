/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                axiforma: ["'Axiforma'", "sans-serif"],
            },
            colors: {
                primary: {
                    100: "#181B32",
                    200: "#524FD5",
                    300: "#413DD1",
                },
                secondary: "#FFF5F1",
                body: "#666680",
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
