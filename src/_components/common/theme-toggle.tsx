"use client";



import useThemeTailwind from "@/hooks/use-theme-tailwind";

export default function ThemeToggle() {
    const { theme, mounted, setThemeChange } = useThemeTailwind();

    if (!mounted) return null;

    return theme === "light" ? (
        <button
            type="button"
            className="w-7 text-zinc-700 focus:outline-none"
            onClick={() => setThemeChange("dark")}
        >
            Dark
        </button>
    ) : (
        <button
            type="button"
            className="w-7 text-zinc-100 focus:outline-none"
            onClick={() => setThemeChange("light")}
        >
            Light
        </button>
    );
}