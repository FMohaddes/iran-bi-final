"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo.svg";
import useThemeTailwind from "@/hooks/use-theme-tailwind";
import Link from "next/link";
import { Iconify } from "../iconify";
import {BaseButton} from "@/_components/common/ui/base-button";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const { scrollY } = useScroll();
    const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);

    const { theme, setThemeChange } = useThemeTailwind();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const solutionsMenu = [
        { label: "راهکار تولید", href: "#industry-solutions" },
        { label: "راهکار مالی", href: "#industry-solutions" },
        { label: "راهکار فروش", href: "#industry-solutions" },
        { label: "راهکار انبار و لجستیک", href: "#industry-solutions" },
    ];

    const servicesMenu = [
        { label: "تحلیل داده‌های کسب‌وکار", href: "#services" },
        { label: "طراحی داشبورد مدیریتی", href: "#services" },
        { label: "پیش‌بینی و مدل‌سازی", href: "#services" },
        { label: "بهینه‌سازی و بهبود فرآیند", href: "#services" },
        { label: "طراحی سیستم‌های داده", href: "#services" },
        { label: "مشاوره و پیاده‌سازی هوش تجاری", href: "#services" },
    ];

    const menuItems = [
        { label: "خانه", href: "/" },
        { label: "راهکار", hasDropdown: true, menu: solutionsMenu },
        { label: "خدمات", hasDropdown: true, menu: servicesMenu },
        { label: "نمونه کارها", href: "/portfolio" },
        { label: "مشاوره", href: "/consultation" },
        { label: "بلاگ", href: "/blog" },
        { label: "درباره ما", href: "/about" },
    ];

    const navItemClass =
        "px-4 py-2 transition-all rounded-lg hover:bg-nav-hover-bg relative group text-text-secondary hover:text-text-primary";

    const dropdownItemClass =
        "block px-4 py-3 transition-all hover:bg-nav-hover-bg text-text-secondary hover:text-text-primary";

    const mobileItemClass =
        "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all text-text-secondary hover:text-text-primary hover:bg-nav-hover-bg-strong";

    const mobileSubItemClass =
        "block px-4 py-2 text-sm rounded-lg transition-all text-text-muted hover:text-text-primary hover:bg-nav-hover-bg";

    return (
        <motion.header
            style={{ opacity: headerOpacity }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-header-bg backdrop-blur-xl border-b border-header-border shadow-lg shadow-header-shadow"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-10 py-2">
                <div className="flex items-center justify-between ">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                            <div className=" w-20 h-16 aspect-square">
                                <Link href="/">
                                    <Logo />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    <nav className="hidden lg:flex items-center gap-1">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                                onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                            >
                                {item.hasDropdown ? (
                                    <>
                                        <motion.button
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`${navItemClass} flex items-center gap-1`}
                                        >
                                            {item.label}

                                            <Iconify
                                                faIcon="fa-chevron-down"
                                                width={12}
                                                className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                                            />

                                            <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary hover:bg-gradient-primary-hover origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                                        </motion.button>

                                        <AnimatePresence>
                                            {openDropdown === item.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 mt-2 min-w-60
                                                    rounded-xl shadow-2xl overflow-hidden bg-dropdown-bg
                                                    border border-dropdown-border backdrop-blur-xl"
                                                >
                                                    {item.menu?.map((subItem, idx) => (
                                                        <motion.a
                                                            key={idx}
                                                            href={subItem.href}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.05 }}
                                                            className={dropdownItemClass}
                                                            onClick={() => setOpenDropdown(null)}
                                                        >
                                                            {subItem.label}
                                                        </motion.a>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <motion.a
                                        href={item.href}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className={navItemClass}
                                    >
                                        {item.label}

                                        <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary hover:bg-gradient-primary-hover origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                                    </motion.a>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setThemeChange(theme === "dark" ? "light" : "dark")}
                            className="p-3 bg-nav-hover-bg hover:bg-nav-hover-bg-strong backdrop-blur-sm rounded-xl transition-all group relative overflow-hidden"
                        >
                            <motion.div
                                initial={false}
                                animate={{
                                    rotate: theme === "dark" ? 0 : 180,
                                    scale: theme === "dark" ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {/*<Moon size={20} className="text-purple-400" />*/}
                                <Iconify width={18} faIcon="fa-moon" variant="light" className="text-text-accent" />

                            </motion.div>

                            <motion.div
                                initial={false}
                                animate={{
                                    rotate: theme === "light" ? 0 : -180,
                                    scale: theme === "light" ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <Iconify width={18} faIcon="fa-sun" variant="light" className="text-text-accent" />
                            </motion.div>

                            <div className="opacity-0">
                                <Iconify width={18} faIcon="fa-sun" variant="light" className="text-text-accent" />

                            </div>
                        </motion.button>

                        <motion.a
                            href="/consultation"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-primary hover:bg-gradient-primary-hover text-text-on-brand rounded-xl hover:shadow-xl hover:shadow-header-shadow transition-all relative overflow-hidden group"
                        >
                            <span className="relative z-10">مشاوره رایگان</span>
                            <motion.div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    </div>

                    <div className="lg:hidden flex items-center gap-2">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setThemeChange(theme === "dark" ? "light" : "dark")}
                            className="p-2 hover:bg-nav-hover-bg-strong rounded-lg transition-colors text-icon-theme"
                        >
                            {theme === "dark" ? (
                                <Iconify faIcon="fa-sun" width={20} className="text-text-accent" />
                            ) : (
                                <Iconify faIcon="fa-moon" width={20} className="text-text-accent" />
                            )}
                        </motion.button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 hover:bg-nav-hover-bg-strong rounded-lg transition-colors text-icon-theme"
                        >
                            {isOpen ? (
                                <Iconify faIcon="fa-xmark" width={20} className="text-text-accent" />
                            ) : (
                                <Iconify faIcon="fa-bars" width={20} className="text-text-accent" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                className="lg:hidden overflow-hidden backdrop-blur-xl border-t bg-mobile-menu-bg border-mobile-menu-border"
            >
                <div className="container mx-auto px-4 py-6 space-y-2">
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            {item.hasDropdown ? (
                                <>
                                    <button
                                        onClick={() =>
                                            setOpenDropdown(openDropdown === item.label ? null : item.label)
                                        }
                                        className={mobileItemClass}
                                    >
                                        {item.label}


                                        <Iconify
                                            faIcon="fa-chevron-down"
                                            width={16}
                                            className={`transition-transform ${
                                                openDropdown === item.label ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>

                                    {openDropdown === item.label && (
                                        <div className="pr-4 space-y-1 mt-1">
                                            {item.menu?.map((subItem, idx) => (
                                                <a
                                                    key={idx}
                                                    href={subItem.href}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setOpenDropdown(null);
                                                    }}
                                                    className={mobileSubItemClass}
                                                >
                                                    {subItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <a
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-lg transition-all text-text-secondary hover:text-text-primary hover:bg-nav-hover-bg-strong"
                                >
                                    {item.label}
                                </a>
                            )}
                        </div>
                    ))}

                    <BaseButton href="/consultation">
                        مشاوره رایگان
                    </BaseButton>
                </div>
            </motion.div>
        </motion.header>
    );
}