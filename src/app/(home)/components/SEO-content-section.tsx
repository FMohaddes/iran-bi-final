"use client";

import { motion } from "motion/react";

export function SEOContentSection() {
  return (
      <section
          id="seo-content"
          className=""
      >
        <div className="">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto rounded-2xl p-8 md:p-12 bg-card-glass border border-card-glass-border shadow-xl" >
            {/* HEADER */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 font-bold text-text-primary">
                راهکارهای هوش تجاری و تحلیل داده در ایران
              </h2>

              <p className="text-lg text-text-secondary">
                ایران بی‌آی | پیشرو در Business Intelligence
              </p>
            </div>

            {/* CONTENT */}
            <div className="space-y-10 text-text-secondary leading-8">

              {/* SECTION */}
              <div>
                <h3 className="text-2xl mb-4 font-semibold text-text-primary">
                  هوش تجاری چیست؟
                </h3>

                <p>
                <span className="text-text-accent font-semibold">
                  هوش تجاری (BI)
                </span>{" "}
                  داده‌های خام را به تصمیم‌های قابل اجرا تبدیل می‌کند.
                </p>
              </div>

              {/* CARDS */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "داشبورد مدیریتی",
                  "تحلیل داده",
                  "مدل‌سازی",
                  "سیستم داده",
                ].map((item, i) => (
                    <div
                        key={i}
                        className="p-5 rounded-xl bg-card-gradient border border-header-border"
                    >
                      <h4 className="text-lg font-semibold mb-2 text-text-primary">
                        {item}
                      </h4>

                      <p className="text-sm">
                        توضیحات مربوط به {item}
                      </p>
                    </div>
                ))}
              </div>

              {/* LIST */}
              <ul className="space-y-3">
                {[
                  "صنایع تولیدی",
                  "مالی و بانکی",
                  "فروش و بازاریابی",
                ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-text-accent">•</span>
                      <span>{item}</span>
                    </li>
                ))}
              </ul>

              {/* TECH */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Power BI", "Python", "SQL", "Tableau"].map((tech, i) => (
                    <div
                        key={i}
                        className="text-center py-3 px-4 rounded-lg bg-nav-hover-bg text-text-accent border border-header-border"
                    >
                      {tech}
                    </div>
                ))}
              </div>

              {/* PROCESS */}
              <div className="space-y-3">
                {["مشاوره", "تحلیل", "پیاده‌سازی", "پشتیبانی"].map((item, i) => (
                    <div
                        key={i}
                        className="flex gap-4 p-4 rounded-lg bg-card-gradient border border-header-border"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                        {i + 1}
                      </div>

                      <div>
                        <h4 className="font-semibold text-text-primary">
                          {item}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          توضیح مرحله {item}
                        </p>
                      </div>
                    </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 p-8 rounded-2xl text-center bg-nav-hover-bg border border-header-border">
                <h3 className="text-2xl mb-3 font-bold text-text-primary">
                  آماده شروع هستید؟
                </h3>

                <p className="mb-6 text-text-secondary">
                  همین حالا درخواست مشاوره بده
                </p>

                <motion.a
                    href="/consultation"
                    whileHover={{ scale: 1.05 }}
                    className="px-10 py-4 bg-gradient-primary text-white rounded-xl"
                >
                  مشاوره رایگان
                </motion.a>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-8 pt-6 border-t border-header-border text-center">
              <p className="text-xs text-text-muted leading-relaxed">
                هوش تجاری | تحلیل داده | BI | داشبورد مدیریتی
              </p>
            </div>
          </motion.div>
        </div>
      </section>
  );
}