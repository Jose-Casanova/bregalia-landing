import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#3B82F6", // Blue 500
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#1E293B", // Slate 800
                    foreground: "#F8FAFC", // Slate 50
                },
                accent: {
                    DEFAULT: "#F59E0B", // Amber 500
                    foreground: "#FFFFFF",
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-outfit)"],
            },
        },
    },
    plugins: [],
} satisfies Config;
