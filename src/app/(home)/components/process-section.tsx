"use client";

import { motion } from "motion/react";
import {
  Search,
  Database,
  Lightbulb,
  Palette,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const processes = [
  {
    number: "01",
    title: "بررسی و شناخت کسب‌وکار",
    icon: Search,
    description: "بررسی وضعیت فعلی، اهداف و چالش‌های کسب‌وکار شما",
    output: "تعریف دقیق مسئله و نیازها",
    gradientClass: "bg-gradient-purple-pink",
  },
  {
    number: "02",
    title: "جمع‌آوری و آماده‌سازی داده‌ها",
    icon: Database,
    description: "دریافت داده‌ها از سیستم‌های مختلف و آماده‌سازی برای تحلیل",
    output: "داده‌های تمیز و قابل تحلیل",
    gradientClass: "bg-gradient-blue",
  },
  {
    number: "03",
    title: "تحلیل داده و کشف بینش‌ها",
    icon: Lightbulb,
    description: "تحلیل داده‌ها برای شناسایی مشکلات، الگوها و فرصت‌ها",
    output: "گزارش تحلیلی و بینش‌های کاربردی",
    gradientClass: "bg-gradient-pink-orange",
  },
  {
    number: "04",
    title: "طراحی راهکار و ابزار",
    icon: Palette,
    description: "طراحی داشبورد، مدل پیش‌بینی یا سیستم تصمیم‌گیری متناسب با نیاز شما",
    output: "ابزار عملی (Excel / Power BI / مدل تحلیلی)",
    gradientClass: "bg-gradient-yellow-green",
  },
  {
    number: "05",
    title: "پیاده‌سازی و بهبود مستمر",
    icon: Rocket,
    description: "اجرای راهکار و بهبود مستمر بر اساس داده‌های جدید",
    output: "بهبود واقعی در عملکرد کسب‌وکار",
    gradientClass: "bg-gradient-orange",
  },
];

export function ProcessSection() {
  return (
      <section id="process" >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-primary-hover opacity-10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-nav-hover-bg border border-header-border rounded-full text-text-accent text-sm mb-4">
              <Rocket size={16} />
              فرآیند همکاری
            </div>

            <h2 className="text-4xl md:text-5xl mb-4 font-bold">
              <span className="text-text-primary">مراحل</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}فرآیند کاری ما
            </span>
            </h2>

            <p className="text-lg max-w-2xl mx-auto text-text-secondary">
              ۵ مرحله استاندارد و حرفه‌ای برای تحول دیجیتال کسب‌وکار شما
            </p>
          </motion.div>

          <div className="hidden md:block  mx-auto">
            <div className="relative pt-2">
              <div className="absolute top-[58px] left-[10%] right-[10%] h-[2px] bg-gradient-primary opacity-25" />

              <div className="grid grid-cols-5 gap-5">
                {processes.map((process, index) => {
                  const Icon = process.icon;

                  return (
                      <motion.div
                          key={process.number}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="relative"
                      >
                        <div className="relative z-10 flex justify-center mb-8">
                          <motion.div
                              whileHover={{ scale: 1.08 }}
                              className={`relative w-24 h-24 rounded-full ${process.gradientClass} flex items-center justify-center shadow-2xl`}
                          >
                            <div className={`absolute inset-0 rounded-full ${process.gradientClass} blur-xl opacity-50`} />
                            <Icon className="text-white relative z-10" size={36} />
                          </motion.div>
                        </div>

                        <motion.div
                            whileHover={{ y: -6 }}
                            className="relative h-80 rounded-2xl border border-card-border bg-card-gradient hover:border-card-border-hover p-5 transition-all overflow-hidden"
                        >
                          <div className={`absolute inset-0 ${process.gradientClass} opacity-[0.05]`} />
                          <div className={`absolute top-0 right-0 left-0 h-1 ${process.gradientClass}`} />

                          <div className="relative text-center mb-4">
                        <span className={`text-4xl font-bold ${process.gradientClass} bg-clip-text text-transparent`}>
                          {process.number}
                        </span>
                          </div>

                          <h3 className="relative text-base font-bold mb-4 text-center text-text-primary">
                            {process.title}
                          </h3>

                          <p className="relative h-20 text-sm leading-7 mb-4 text-text-secondary text-center">
                            {process.description}
                          </p>

                          <div className="relative pt-4 border-t border-header-border">
                            <div className="flex items-start gap-2 justify-center">
                              <CheckCircle2 size={15} className="text-green-400 mt-1 flex-shrink-0" />
                              <p className= {`text-sm text-gray-400 leading-7`}>
                                {process.output}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:hidden max-w-lg mx-auto">
            <div className="relative">
              <div className="absolute right-10 top-0 bottom-0 w-[2px] bg-gradient-primary opacity-25" />

              <div className="space-y-8">
                {processes.map((process, index) => {
                  const Icon = process.icon;

                  return (
                      <motion.div
                          key={process.number}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="relative flex gap-4"
                      >
                        <div className="relative z-10">
                          <motion.div
                              whileHover={{ scale: 1.08 }}
                              className={`w-20 h-20 rounded-full ${process.gradientClass} flex items-center justify-center shadow-lg flex-shrink-0`}
                          >
                            <div className={`absolute inset-0 rounded-full ${process.gradientClass} blur-xl opacity-50`} />
                            <Icon className="text-white relative z-10" size={28} />
                          </motion.div>
                        </div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="relative flex-1 rounded-2xl border border-card-border bg-card-gradient p-5 overflow-hidden"
                        >
                          <div className={`absolute inset-0 ${process.gradientClass} opacity-[0.05]`} />
                          <div className={`absolute top-0 right-0 bottom-0 w-1 ${process.gradientClass}`} />

                          <div className="relative mb-2">
                        <span className={`text-2xl font-bold ${process.gradientClass} bg-clip-text text-transparent`}>
                          {process.number}
                        </span>
                          </div>

                          <h3 className="relative text-base font-bold mb-2 text-text-primary">
                            {process.title}
                          </h3>

                          <p className="relative text-sm mb-3 text-text-secondary leading-7">
                            {process.description}
                          </p>

                          <div className="relative pt-3 border-t border-header-border">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 size={16} className="text-green-400 mt-1 flex-shrink-0" />
                              <p className="text-sm text-green-400 leading-7">
                                <strong>خروجی:</strong> {process.output}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col items-center gap-6 text-center"
          >
            <div className=" px-6 py-4 rounded-2xl bg-nav-hover-bg border border-header-border">
              <p className="text-sm leading-7 text-text-secondary">
                💡 <strong className="text-text-primary">نکته مهم:</strong>{" "}
                در تمام مراحل، ما در کنار شما هستیم و به صورت شفاف گزارش پیشرفت ارائه می‌دهیم.
              </p>
            </div>

            <motion.a
                href="/consultation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-xl hover:shadow-2xl hover:shadow-header-shadow transition-all"
            >
              <Rocket size={20} />
              شروع همکاری
            </motion.a>
          </motion.div>
        </div>
      </section>
  );
}