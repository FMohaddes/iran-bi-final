import defaultTheme from "tailwindcss/defaultTheme";

export default {
    theme: {
        extend: {
            screens: {
                xs: "360px",
                ...defaultTheme.screens,
                "3xl": "1600px",
                "4xl": "1920px",
                "5xl": "2560px",
                "6xl": "3840px",
            },
        },
    },
};