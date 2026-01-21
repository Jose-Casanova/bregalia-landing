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
                    DEFAULT: "#93278f", // Brand Purple
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#678e9b", // Brand Muted Teal
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#F59E0B", // Amber 500 (Keeping as accent for warnings/highlights)
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
