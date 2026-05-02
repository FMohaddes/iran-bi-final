"use client";

import { motion } from "motion/react";
import { HeroHeader } from "@/app/(home)/components/hero-header";
import { SectionHeader } from "@/_components/common/section-header";
import { Iconify } from "@/_components/iconify";
import ContainerLayout from "@/_components/common/layout/container-layout";

const stats = [
    { number: "۱۵۰+", label: "پروژه موفق", icon: "fa-award" },
    { number: "۸۰+", label: "مشتری راضی", icon: "fa-users" },
    { number: "۹۵٪", label: "رضایت مشتریان", icon: "fa-heart" },
    { number: "۵+", label: "سال تجربه", icon: "fa-arrow-trend-up" },
];

const values = [
    {
        icon: "fa-bullseye",
        title: "تمرکز بر نتیجه",
        description: "ما نه فقط ابزار، بلکه نتایج واقعی برای کسب‌وکار شما ایجاد می‌کنیم",
        gradient: "bg-gradient-purple",
    },
    {
        icon: "fa-lightbulb",
        title: "نوآوری مداوم",
        description: "استفاده از جدیدترین تکنولوژی‌ها و روش‌های تحلیل داده",
        gradient: "bg-gradient-blue",
    },
    {
        icon: "fa-shield-halved",
        title: "امنیت و اعتماد",
        description: "حفاظت کامل از داده‌ها و رازداری اطلاعات کسب‌وکار شما",
        gradient: "bg-gradient-orange",
    },
    {
        icon: "fa-bolt",
        title: "سرعت و چابکی",
        description: "اجرای سریع پروژه‌ها با کیفیت بالا و پشتیبانی مستمر",
        gradient: "bg-gradient-green",
    },
];

const team = [
    {
        name: "دکتر امیر محمدی",
        role: "مدیرعامل و موسس",
        expertise: "PhD in Data Science",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        gradient: "bg-gradient-purple",
    },
    {
        name: "مهندس سارا احمدی",
        role: "مدیر فنی",
        expertise: "Senior BI Consultant",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        gradient: "bg-gradient-blue",
    },
    {
        name: "دکتر رضا کریمی",
        role: "رئیس تیم تحلیل داده",
        expertise: "Data Analytics Expert",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        gradient: "bg-gradient-orange",
    },
    {
        name: "مهندس مریم رضایی",
        role: "رئیس تیم توسعه",
        expertise: "BI Solutions Architect",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        gradient: "bg-gradient-green",
    },
];

export function AboutView() {
    return (
        <ContainerLayout>
            <section className="relative overflow-hidden bg-section-gradient section-padding">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-text-accent/20 blur-3xl" />
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-status-error/20 blur-3xl" />
                </div>

                <div className="relative z-10 mt-4">
                    <HeroHeader
                        align="center"
                        badgeIcon="fa-sparkles"
                        badgeText="درباره ایران بی‌آی"
                        title="ما داده‌ها را به"
                        highlight="تصمیمات هوشمند"
                        afterHighlight="تبدیل می‌کنیم"
                        description={
                            <>
                                ایران بی‌آی با تیمی از متخصصان با تجربه در حوزه هوش تجاری، تحلیل داده و علم داده،
                                به کسب‌وکارها کمک می‌کند تا با استفاده از قدرت داده‌ها، تصمیمات بهتری بگیرند و
                                عملکرد خود را بهبود بخشند.
                            </>
                        }
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className=" mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 "
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-card-glass-border bg-card-glass p-6 text-center backdrop-blur-xl"
                            >
                                <div className="mb-3 flex justify-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                                        <Iconify
                                            faIcon={stat.icon}
                                            variant="duotoneLight"
                                            width={24}
                                            className="text-text-on-brand"
                                        />
                                    </div>
                                </div>

                                <div className="mb-2 bg-gradient-primary bg-clip-text text-3xl font-bold text-transparent">
                                    {stat.number}
                                </div>

                                <div className="text-sm text-text-secondary">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-section-gradient section-padding">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-text-accent/10 blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-status-error/10 blur-3xl" />
                </div>

                <div className=" relative z-10 ">
                    <SectionHeader
                        title="ماموریت و"
                        highlight="چشم‌انداز ما"
                        description="رویایی که ما را به جلو می‌راند و هدفی که هر روز برای آن تلاش می‌کنیم"
                    />

                    <div className="grid gap-12 lg:grid-cols-2 ">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-3xl border border-card-glass-border bg-card-glass p-12 backdrop-blur-xl transition-all hover:border-text-accent/40"
                        >
                            <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

                            <div className="relative z-10">
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-purple shadow-2xl shadow-header-shadow"
                                >
                                    <Iconify
                                        faIcon="fa-bullseye"
                                        variant="duotoneLight"
                                        width={44}
                                        className="text-text-on-brand"
                                    />
                                </motion.div>

                                <h3 className="mb-6 text-3xl font-bold text-text-primary">
                                    ماموریت ما
                                </h3>

                                <div className="space-y-4">
                                    <p className="text-lg leading-relaxed text-text-secondary">
                                        ما در ایران بی‌آی بر این باوریم که{" "}
                                        <strong className="text-text-accent">داده، نفت قرن ۲۱</strong>{" "}
                                        است. ماموریت ما این است که کسب‌وکارهای ایرانی را به قدرت واقعی
                                        داده‌هایشان متصل کنیم.
                                    </p>

                                    <p className="text-lg leading-relaxed text-text-secondary">
                                        ما می‌خواهیم هر سازمانی، از استارتاپ کوچک تا شرکت‌های بزرگ،
                                        بتواند با{" "}
                                        <strong className="text-text-accent">تصمیمات مبتنی بر داده</strong>{" "}
                                        به مزیت رقابتی دست یابد و در دنیای رقابتی امروز، گام‌های محکم‌تر
                                        بردارد.
                                    </p>

                                    <div className="mt-6 border-t border-header-border pt-6">
                                        <p className="text-sm italic text-text-muted">
                                            "داده بدون تحلیل، فقط یک عدد است. ما آن را به بینش تبدیل می‌کنیم."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-text-accent/20 blur-3xl transition-transform duration-500 group-hover:scale-150" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-3xl border border-card-glass-border bg-card-glass p-12 backdrop-blur-xl transition-all hover:border-status-info/40"
                        >
                            <div className="absolute inset-0 bg-gradient-blue opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

                            <div className="relative z-10">
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-blue shadow-2xl shadow-header-shadow"
                                >
                                    <Iconify
                                        faIcon="fa-globe"
                                        variant="duotoneLight"
                                        width={44}
                                        className="text-text-on-brand"
                                    />
                                </motion.div>

                                <h3 className="mb-6 text-3xl font-bold text-text-primary">
                                    چشم‌انداز ما
                                </h3>

                                <div className="space-y-4">
                                    <p className="text-lg leading-relaxed text-text-secondary">
                                        رویای ما ساختن{" "}
                                        <strong className="text-status-info">ایرانی هوشمندتر</strong>{" "}
                                        است؛ جایی که هر تصمیم کسب‌وکاری با اطمینان، داده‌محوری و دقت علمی
                                        گرفته می‌شود.
                                    </p>

                                    <p className="text-lg leading-relaxed text-text-secondary">
                                        ما می‌خواهیم{" "}
                                        <strong className="text-status-info">پیشرو هوش تجاری در منطقه</strong>{" "}
                                        باشیم و پلی محکم بین داده‌های خام و موفقیت واقعی کسب‌وکار بسازیم.
                                        هدف ما تنها ابزار ارائه دادن نیست، بلکه ایجاد{" "}
                                        <strong className="text-status-info">تحول در فرهنگ سازمانی</strong>{" "}
                                        است.
                                    </p>

                                    <div className="mt-6 border-t border-header-border pt-6">
                                        <p className="text-sm italic text-text-muted">
                                            "ما نه فقط داده را تحلیل می‌کنیم، بلکه آینده کسب‌وکار شما را می‌سازیم."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-status-info/20 blur-3xl transition-transform duration-500 group-hover:scale-150" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-16 max-w-4xl rounded-2xl border border-header-border bg-nav-hover-bg p-8 text-center backdrop-blur-xl"
                    >
                        <p className="mb-3 text-2xl font-bold text-text-primary">
                            💡 باور اصلی ما
                        </p>

                        <p className="text-lg text-text-secondary">
                            "هر سازمان، صرف‌نظر از اندازه‌اش، شایسته دسترسی به{" "}
                            <span className="font-bold text-text-accent">قدرت داده</span>{" "}
                            است. ما اینجا هستیم تا این حق را به شما برگردانیم."
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-section-gradient section-padding">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="ارزش‌های"
                        highlight="محوری ما"
                        description="اصولی که ما بر اساس آن‌ها کار می‌کنیم و به کمک آن‌ها برای مشتریان ارزش واقعی ایجاد می‌کنیم"
                    />

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group rounded-2xl border border-card-glass-border bg-card-glass p-6 backdrop-blur-xl transition-all hover:border-text-accent/40"
                            >
                                <div
                                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${value.gradient} transition-transform group-hover:scale-110`}
                                >
                                    <Iconify
                                        faIcon={value.icon}
                                        variant="duotoneLight"
                                        width={28}
                                        className="text-text-on-brand"
                                    />
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-text-primary">
                                    {value.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-text-secondary">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-section-gradient py-24">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="تیم"
                        highlight="حرفه‌ای ما"
                        description="متخصصان با تجربه و متعهد به موفقیت شما"
                    />

                    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group overflow-hidden rounded-2xl border border-card-glass-border bg-card-glass backdrop-blur-xl transition-all hover:border-text-accent/40"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    <div
                                        className={`absolute inset-0 ${member.gradient} opacity-0 transition-opacity group-hover:opacity-30`}
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="mb-1 text-xl font-bold text-text-primary">
                                        {member.name}
                                    </h3>

                                    <p className="mb-2 text-sm text-text-accent">
                                        {member.role}
                                    </p>

                                    <p className="text-xs text-text-secondary">
                                        {member.expertise}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-section-gradient py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-4xl rounded-3xl border border-header-border bg-nav-hover-bg p-12 text-center backdrop-blur-xl"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-text-primary">
                            آماده شروع همکاری هستید؟
                        </h2>

                        <p className="mb-8 text-lg text-text-secondary">
                            با ما تماس بگیرید و اولین قدم را برای تحول دیجیتال کسب‌وکارتان بردارید
                        </p>

                        <motion.a
                            href="/consultation"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-8 py-4 text-text-on-brand transition-all hover:shadow-2xl hover:shadow-header-shadow"
                        >
                            <Iconify
                                faIcon="fa-sparkles"
                                variant="duotoneLight"
                                width={20}
                                className="text-text-on-brand"
                            />
                            درخواست مشاوره رایگان
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </ContainerLayout>
    );
}