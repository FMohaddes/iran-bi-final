"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type ThemeName = "light" | "dark";

const STORAGE_KEY = "themeIranBi";
const COOKIE_KEY = "theme";

function isValidTheme(value: unknown): value is ThemeName {
    return value === "light" || value === "dark";
}

export default function useThemeTailwind() {
    const [theme, setTheme] = useState<ThemeName>("dark");
    const [mounted, setMounted] = useState(false);

    const setThemeChange = (themeName: ThemeName) => {
        document.documentElement.setAttribute("data-theme", themeName);

        document.documentElement.classList.toggle("dark", themeName === "dark");

        localStorage.setItem(STORAGE_KEY, themeName);
        Cookies.set(COOKIE_KEY, themeName, { expires: 365 });

        setTheme(themeName);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        const themeFromCookie = Cookies.get(COOKIE_KEY);

        const initialTheme: ThemeName = isValidTheme(savedTheme)
            ? savedTheme
            : isValidTheme(themeFromCookie)
                ? themeFromCookie
                : "dark";

        setThemeChange(initialTheme);
        setMounted(true);
    }, []);

    return {
        theme,
        mounted,
        setThemeChange,
        toggleTheme: () => setThemeChange(theme === "dark" ? "light" : "dark"),
    };
}