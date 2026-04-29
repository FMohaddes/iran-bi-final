"use client";

import {motion} from "motion/react";
import {Mail, Phone, Send} from "lucide-react";

export function Footer() {
    const quickLinks = [
        {label: "خانه", href: "#home"},
        {label: "راهکارهای تحلیلی", href: "#services"},
        {label: "مراحل فرآیند", href: "#process"},
        {label: "نمونه پروژه‌ها", href: "#case-studies"},
    ];

    const helpLinks = [
        {label: "سوالات متداول", href: "#faq"},
        {label: "وبلاگ", href: "#blog"},
        {label: "درباره ما", href: "#about"},
        {label: "تماس با ما", href: "#contact"},
    ];

    return (
        <footer
            className = "relative border-t border-header-border bg-section-gradient transition-colors duration-500 overflow-hidden" >
            <div className = "container mx-auto px-10 py-16" >
                <div className = "grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12" >
                    <motion.div
                        initial = {{opacity: 0, y: 20}}
                        whileInView = {{opacity: 1, y: 0}}
                        viewport = {{once: true}}
                    >
                        <div className = "flex items-center gap-3 mb-6" >
                            <div
                                className = "w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center" >
                                <span className = "text-white text-xl" >BI</span >
                            </div >

                            <div >
                                <div className = "text-text-primary text-lg font-bold" >ایران بی‌آی</div >
                                <div className = "text-text-accent text-xs" >Business Intelligence</div >
                            </div >
                        </div >

                        <p className = "text-text-secondary text-sm leading-relaxed mb-6" >
                            ایران بی‌آی یکی از ارائه‌دهندگان برتر آموزش‌های تخصصی در حوزه هوش تجاری و تحلیل
                            داده در کشور است که با ارائه جدیدترین و باکیفیت‌ترین آموزش‌ها، توانسته است
                            به عنوان یک مرجع معتبر در این حوزه شناخته شود.
                        </p >

                        <div className = "space-y-3 text-sm" >
                            <div className = "flex items-center gap-2 text-text-secondary" >
                                <Mail size = {16} className = "text-text-accent" />
                                <span className = "text-left" dir = "ltr" >info@iran-bi.com</span >
                            </div >

                            <div className = "flex items-center gap-2 text-text-secondary" >
                                <Phone size = {16} className = "text-text-accent" />
                                <span className = "text-left" dir = "ltr" >+98(935)7893655</span >
                            </div >
                        </div >
                    </motion.div >

                    <motion.div
                        initial = {{opacity: 0, y: 20}}
                        whileInView = {{opacity: 1, y: 0}}
                        viewport = {{once: true}}
                        transition = {{delay: 0.1}}
                    >
                        <h3 className = "text-text-primary text-lg mb-6 font-bold" >لینک‌های سریع</h3 >

                        <ul className = "space-y-3" >
                            {quickLinks.map((link) => (
                                <li key = {link.label} >
                                    <a
                                        href = {link.href}
                                        className = "text-text-secondary hover:text-text-accent transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span
                                            className = "w-1.5 h-1.5 bg-gradient-primary rounded-full group-hover:scale-150 transition-transform" />
                                        {link.label}
                                    </a >
                                </li >
                            ))}
                        </ul >
                    </motion.div >

                    <motion.div
                        initial = {{opacity: 0, y: 20}}
                        whileInView = {{opacity: 1, y: 0}}
                        viewport = {{once: true}}
                        transition = {{delay: 0.2}}
                    >
                        <h3 className = "text-text-primary text-lg mb-6 font-bold" >پشتیبانی</h3 >

                        <ul className = "space-y-3" >
                            {helpLinks.map((link) => (
                                <li key = {link.label} >
                                    <a
                                        href = {link.href}
                                        className = "text-text-secondary hover:text-text-accent transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span
                                            className = "w-1.5 h-1.5 bg-gradient-primary rounded-full group-hover:scale-150 transition-transform" />
                                        {link.label}
                                    </a >
                                </li >
                            ))}
                        </ul >
                    </motion.div >

                    <motion.div
                        initial = {{opacity: 0, y: 20}}
                        whileInView = {{opacity: 1, y: 0}}
                        viewport = {{once: true}}
                        transition = {{delay: 0.3}}
                    >
                        <h3 className = "text-text-primary text-lg mb-6 font-bold" >شبکه‌های اجتماعی</h3 >

                        <div className = "flex flex-wrap gap-3" >
                            {[Mail, Send, Phone].map((Icon, index) => (
                                <motion.a
                                    key = {index}
                                    href = "#"
                                    whileHover = {{scale: 1.1, rotate: 5}}
                                    whileTap = {{scale: 0.95}}
                                    className = "w-12 h-12 bg-nav-hover-bg border border-header-border rounded-xl flex items-center justify-center text-text-accent hover:bg-gradient-primary hover:text-white transition-all"
                                >
                                    <Icon size = {20} />
                                </motion.a >
                            ))}
                        </div >

                        <div className = "mt-8" >
                            <h4 className = "text-text-primary text-sm mb-3 font-bold" >عضویت در خبرنامه</h4 >

                            <div className = "flex gap-2" >
                                <input
                                    type = "email"
                                    placeholder = "ایمیل شما"
                                    className = "flex-1 px-4 py-2 bg-bg-secondary border border-header-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-card-border-hover text-sm"
                                />

                                <button
                                    className = "px-4 py-2 bg-gradient-primary rounded-lg hover:shadow-lg hover:shadow-header-shadow transition-all" >
                                    <Send size = {16} className = "text-white" />
                                </button >
                            </div >
                        </div >
                    </motion.div >
                </div >

                <motion.div
                    initial = {{opacity: 0}}
                    whileInView = {{opacity: 1}}
                    viewport = {{once: true}}
                    className = "pt-8 border-t border-header-border"
                >
                    <div className = "flex flex-col md:flex-row items-center justify-between gap-4" >
                        <p className = "text-text-muted text-sm text-center md:text-right" >
                            © ۱۴۰۲ ایران بی‌آی. تمامی حقوق محفوظ است.
                        </p >

                        <div className = "flex items-center gap-6 text-sm" >
                            {["حریم خصوصی", "قوانین و مقررات", "تماس با ما"].map((item) => (
                                <a
                                    key = {item}
                                    href = "#"
                                    className = "text-text-secondary hover:text-text-accent transition-colors"
                                >
                                    {item}
                                </a >
                            ))}
                        </div >
                    </div >
                </motion.div >
            </div >

            <div
                className = "absolute bottom-0 left-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            <div
                className = "absolute bottom-0 right-0 w-64 h-64 bg-gradient-primary-hover opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </footer >
    );
}