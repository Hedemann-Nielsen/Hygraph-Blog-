/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#DBc2AD",
				secondary: "#D1B7A1",
				dark: "#A18167",
				light: "#F2E5D9",
				error: "#FF0000",
			},
		},
	},
	plugins: [],
};
