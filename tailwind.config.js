/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0f172a', // Slate 900 (Dark background)
                secondary: '#1e293b', // Slate 800 (Card background)
                accent: '#f97316', // Orange 500 (Brand accent)
                'accent-hover': '#ea580c', // Orange 600
                purple: {
                    500: '#a855f7', // Purple accent
                    600: '#9333ea',
                    700: '#7c3aed',
                },
                blue: {
                    500: '#3b82f6', // Electric blue
                    600: '#2563eb',
                },
                teal: {
                    500: '#14b8a6',
                    600: '#0d9488',
                },
                text: '#f8fafc', // Slate 50
                'text-muted': '#94a3b8', // Slate 400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
