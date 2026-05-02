"use client";

import { motion } from "motion/react";
import {Iconify} from "@/_components/iconify";
import { SectionHeader } from "@/_components/common/section-header";

const benefits = [
  {
    icon: "fa-shield-halved",
    title: "امنیت و قابلیت اطمینان",
    description: "پروتکل‌های امنیتی پیشرفته و رعایت استانداردهای بین‌المللی",
  },
  {
    icon: "fa-bolt",
    title: "سرعت و کارایی",
    description: "داشبوردهای با عملکرد بالا و پاسخ‌دهی لحظه‌ای",
  },
  {
    icon: "fa-users",
    title: "تیم متخصص",
    description: "کار با متخصصان با تجربه در حوزه BI و Data Science",
  },
  {
    icon: "fa-headphones",
    title: "پشتیبانی ۲۴/۷",
    description: "پشتیبانی فنی مستمر و آموزش کاربران",
  },
  {
    icon: "fa-award",
    title: "کیفیت تضمین شده",
    description: "استفاده از بهترین روش‌ها و ابزارهای روز دنیا",
  },
  {
    icon: "fa-bullseye",
    title: "راهکار سفارشی",
    description: "طراحی متناسب با نیازهای واقعی کسب‌وکار شما",
  },
];

export function WhyUsSection() {
  return (
      <section className="relative overflow-hidden section-padding bg-card-gradient">
        <div className="absolute inset-0 opacity-5">
          <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                    'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }}
          />
        </div>

        <div className="relative z-10">
          <SectionHeader
              title="چرا ایران بی‌آی؟"
              highlight=""
              description="مزایای همکاری با ما برای تحول دیجیتال سازمان شما"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                  <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                  >
                    <div className="relative rounded-2xl  p-6 transition-all h-full bg-card-gradient border border-card-border hover:border-card-border-hover hover:shadow-xl hover:shadow-header-shadow overflow-hidden">
                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-header-shadow transition-all"
                        >
                          <Iconify
                              faIcon={benefit.icon}
                              variant="duotoneLight"
                              width={28}
                              className="text-text-on-brand"
                          />

                        </motion.div>

                        <div className="flex-1">
                          <h3 className="text-lg mb-2 font-bold text-text-primary">
                            {benefit.title}
                          </h3>

                          <p className="text-sm leading-relaxed text-text-secondary">
                            {benefit.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-bl-full" />
                    </div>
                  </motion.div>
              );
            })}
          </div>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 rounded-2xl p-12 bg-nav-hover-bg border border-header-border transition-colors duration-500"
          >
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "+۱۰۰", label: "پروژه موفق" },
                { value: "+۵۰", label: "مشتری سازمانی" },
                { value: "۹۸٪", label: "رضایت مشتریان" },
                { value: "۱۰+", label: "سال تجربه" },
              ].map((item, index) => (
                  <div key={item.label}>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-5xl mb-2"
                    >
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {item.value}
                  </span>
                    </motion.div>

                    <div className="text-text-secondary">{item.label}</div>
                  </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
}