"use client";

import { motion } from "motion/react";
import {SectionHeader} from "@/_components/common/section-header";

export function SEOContentSection() {
  return (
      <section id="seo-content" className="relative section-padding">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 bg-card-glass border border-card-glass-border shadow-xl"
        >
          {/* HEADER */}
          <SectionHeader
              title="راهکارهای هوش تجاری و تحلیل داده در ایران"
              highlight=""
              description="ایران بی‌آی | پیشرو در ارائه خدمات Business Intelligence و Data Analytics"
          />

          {/* CONTENT */}
          <div className="space-y-10 text-text-secondary leading-8">
            {/* INTRO */}
            <div>
              <h3 className="text-2xl mb-4 font-semibold text-text-primary">
                هوش تجاری (Business Intelligence) چیست؟
              </h3>

              <p className="leading-relaxed mb-4">
                <strong className="text-text-accent">هوش تجاری</strong> یا <strong className="text-text-accent">Business Intelligence (BI)</strong> مجموعه‌ای از فرآیندها، ابزارها و تکنولوژی‌هایی است که داده‌های خام کسب‌وکار را به اطلاعات قابل فهم و عملیاتی تبدیل می‌کند. در دنیای امروز که داده به عنوان ارزشمندترین دارایی شرکت‌ها شناخته می‌شود، استفاده از <strong className="text-text-accent">سیستم‌های BI</strong> برای تصمیم‌گیری‌های استراتژیک ضروری است.
              </p>
              <p className="leading-relaxed">
                ایران بی‌آی با بیش از ۱۰ سال تجربه در زمینه <strong className="text-text-accent">تحلیل داده</strong> و <strong className="text-text-accent">طراحی داشبورد</strong>، راهکارهای هوشمند و سفارشی برای کسب‌وکارهای مختلف ارائه می‌دهد. از صنایع تولیدی و شرکت‌های خدماتی گرفته تا سازمان‌های دولتی و استارتاپ‌ها، ما به همه کمک می‌کنیم تا از قدرت داده‌های خود بهره‌برداری کنند.
              </p>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-2xl mb-4 font-semibold text-text-primary">
                خدمات تخصصی هوش تجاری
              </h3>
              <p className="leading-relaxed mb-4">
                ما طیف کاملی از خدمات <strong className="text-text-accent">Business Intelligence</strong> را ارائه می‌دهیم:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                {[
                  {
                    title: "۱. طراحی داشبورد مدیریتی",
                    desc: (
                        <>
                          <strong className="text-text-accent">داشبورد مدیریتی</strong> یا <strong className="text-text-accent">Executive Dashboard</strong> ابزاری است که KPIها و شاخص‌های کلیدی عملکرد را به صورت بصری و قابل فهم نمایش می‌دهد. ما داشبوردهایی برای حوزه‌های <strong>فروش</strong>، <strong>مالی</strong>، <strong>تولید</strong>، <strong>انبار</strong>، <strong>منابع انسانی</strong> و <strong>بازاریابی</strong> طراحی می‌کنیم.
                        </>
                    ),
                  },
                  {
                    title: "۲. تحلیل داده و Data Analytics",
                    desc: (
                        <>
                          تیم <strong className="text-text-accent">تحلیلگران داده</strong> ما با استفاده از ابزارهای پیشرفته مانند <strong>Python</strong>، <strong>R</strong>، <strong>SQL</strong> و <strong>Power BI</strong>، داده‌های شما را تحلیل کرده و الگوها، روندها و بینش‌های عملیاتی را کشف می‌کنند.
                        </>
                    ),
                  },
                  {
                    title: "۳. پیش‌بینی و مدل‌سازی",
                    desc: (
                        <>
                          با استفاده از <strong className="text-text-accent">مدل‌های پیش‌بینی</strong> و <strong className="text-text-accent">یادگیری ماشین</strong>، روندهای آینده فروش، تقاضا و بازار را پیش‌بینی می‌کنیم. این مدل‌ها به شما کمک می‌کنند تا برنامه‌ریزی دقیق‌تر و تصمیمات بهتری بگیرید.
                        </>
                    ),
                  },
                  {
                    title: "۴. طراحی سیستم‌های داده",
                    desc: (
                        <>
                          ساخت <strong className="text-text-accent">Data Warehouse</strong>، <strong className="text-text-accent">ETL Pipeline</strong> و <strong className="text-text-accent">Data Lake</strong> برای مدیریت و ذخیره‌سازی حجم بالای داده‌ها. معماری داده ما مقیاس‌پذیر، امن و بهینه است.
                        </>
                    ),
                  },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="p-5 rounded-xl bg-card-glass border border-card-glass-border"
                    >
                      <h4 className="text-lg font-semibold mb-2 text-text-primary">
                        {item.title}
                      </h4>

                      <p className="text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
              </div>

            </div>

            {/* INDUSTRIES */}
            <div>
              <h3 className="text-2xl mb-4 font-semibold text-text-primary">
                راهکارهای BI برای صنایع مختلف
              </h3>
              <p className="leading-relaxed mb-4">
                ما راهکارهای تخصصی برای صنایع مختلف ارائه می‌دهیم:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-text-accent text-xl mt-1">•</span>
                  <div>
                    <strong className="text-text-primary">صنایع تولیدی:</strong> مانیتورینگ خطوط تولید، کنترل کیفیت، کاهش ضایعات، بهینه‌سازی فرآیند تولید و مدیریت زنجیره تأمین
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-text-accent text-xl mt-1">•</span>
                  <div>
                    <strong className="text-text-primary">خدمات مالی و بانکی:</strong> تحلیل ریسک، پیش‌بینی نقدینگی، گزارش‌های مالی، شناسایی تقلب و تحلیل سودآوری مشتریان
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-text-accent text-xl mt-1">•</span>
                  <div>
                    <strong className="text-text-primary">فروش و بازاریابی:</strong> تحلیل عملکرد فروش، شناسایی مشتریان پرسود، پیش‌بینی فروش، بهینه‌سازی کمپین‌ها و تحلیل رفتار مشتری
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-text-accent text-xl mt-1">•</span>
                  <div>
                    <strong className="text-text-primary">انبارداری و لجستیک:</strong> مدیریت موجودی، بهینه‌سازی مسیرهای حمل، کاهش هزینه‌های انبارداری و پیش‌بینی تقاضا
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-text-accent text-xl mt-1">•</span>
                  <div>
                    <strong className="text-text-primary">بهداشت و درمان:</strong> تحلیل عملکرد بیمارستان، مدیریت منابع، پیش‌بینی تقاضای بیماران و بهینه‌سازی زمان‌بندی
                  </div>
                </li>
              </ul>
            </div>

            {/* TECHNOLOGIES */}
            <div>
              <h3 className="text-2xl mb-4 font-semibold text-text-primary">
                ابزارها و تکنولوژی‌ها
              </h3>
              <p className="leading-relaxed mb-4">
                تیم ایران بی‌آی با جدیدترین و قدرتمندترین ابزارهای دنیا کار می‌کند:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Power BI",
                  "Tableau",
                  "SQL Server",
                  "Python",
                  "R",
                  "Google Analytics",
                  "Excel",
                  "Apache Spark",
                ].map((tech, i) => (
                    <div
                        key={i}
                        className="text-center py-3 px-4 font-bold rounded-lg bg-nav-hover-bg text-text-accent border border-header-border"
                    >
                      {tech}
                    </div>
                ))}
              </div>
            </div>

            {/* WHY US */}
            <div>
              <h3 className={`text-2xl mb-4 font-semibold `}>
                چرا ایران بی‌آی را انتخاب کنیم؟
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className={`p-4 rounded-xl border-r-4 border-purple-500 bg-card-glass`}>
                  <h4 className={`text-lg mb-2 font-semibold `}>
                    تجربه و تخصص
                  </h4>
                  <p className="text-sm">بیش از ۱۰ سال سابقه در پروژه‌های BI و تحلیل داده با تیمی متشکل از کارشناسان و متخصصان برتر</p>
                </div>
                <div className={`p-4 rounded-xl border-r-4 border-pink-500 bg-card-glass`}>
                  <h4 className={`text-lg mb-2 font-semibold `}>
                    راهکارهای سفارشی
                  </h4>
                  <p className="text-sm">هر کسب‌وکار منحصر به فرد است. ما راهکارهای کاملاً سفارشی و متناسب با نیازهای شما طراحی می‌کنیم</p>
                </div>
                <div className={`p-4 rounded-xl border-r-4 border-orange-500 bg-card-glass`}>
                  <h4 className={`text-lg mb-2 font-semibold `}>
                    پشتیبانی مستمر
                  </h4>
                  <p className="text-sm">پشتیبانی ۲۴/۷، آموزش کاربران، بروزرسانی و بهینه‌سازی مستمر سیستم‌های BI شما</p>
                </div>
              </div>
            </div>

            {/* PROCESS */}
            <div>
              <h3 className="text-2xl mb-4 font-semibold text-text-primary">
                فرآیند همکاری
              </h3>

              <div className="space-y-3">
                {[
                  { step: "۱", title: "مشاوره رایگان", desc: "تحلیل نیازها و بررسی چالش‌های کسب‌وکار شما" },
                  { step: "۲", title: "جمع‌آوری داده", desc: "اتصال به منابع داده و جمع‌آوری اطلاعات مورد نیاز" },
                  { step: "۳", title: "تحلیل و طراحی", desc: "تحلیل داده‌ها و طراحی داشبوردها و مدل‌های تحلیلی" },
                  { step: "۴", title: "پیاده‌سازی", desc: "اجرای پروژه، تست و آموزش کاربران" },
                  { step: "۵", title: "پشتیبانی", desc: "پشتیبانی مستمر، بهبود و بهینه‌سازی" }
                ].map((item, i) => (
                    <div
                        key={i}
                        className="flex gap-4 p-4 rounded-lg bg-card-glass"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1`}>{item.title}</h4>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 p-8 rounded-2xl text-center bg-nav-hover-bg border border-header-border">
              <h3 className="text-2xl mb-3 font-bold text-text-primary">
                آماده تحول دیجیتال کسب‌وکار خود هستید؟
              </h3>

              <p className="mb-6 text-text-secondary">
                با مشاوره رایگان ایران بی‌آی اولین قدم را بردارید.
              </p>

              <motion.a
                  href="/consultation"
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-4 bg-gradient-primary text-text-on-brand rounded-xl inline-block"
              >
                درخواست مشاوره رایگان
              </motion.a>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-8 pt-6 border-t border-header-border text-center">
            <p className="text-xs text-text-muted leading-relaxed">
              هوش تجاری | تحلیل داده | BI | داشبورد مدیریتی | Power BI |
              Data Analytics | Predictive Analytics
            </p>
          </div>
        </motion.div>
      </section>
  );
}