"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {Iconify} from "@/_components/iconify";
import {BaseButton} from "@/_components/common/ui/base-button";
import {SectionHeader} from "@/_components/common/section-header";

const faqs = [
  {
    question: "هوش تجاری (BI) چیست و چه کاربردی دارد؟",
    answer:
        "هوش تجاری مجموعه‌ای از فرآیندها، ابزارها و تکنولوژی‌هایی است که داده‌های خام را به اطلاعات قابل فهم و عملیاتی تبدیل می‌کند. این سیستم به مدیران کمک می‌کند تا تصمیمات بهتر و سریع‌تری بگیرند.",
  },
  {
    question: "چه نوع داشبوردهایی طراحی می‌کنید؟",
    answer:
        "ما داشبوردهای تحلیلی سفارشی برای حوزه‌های مختلف طراحی می‌کنیم: داشبورد مالی، فروش، انبار، تولید، بازاریابی، منابع انسانی و مدیریت ارشد. همه داشبوردها تعاملی، لحظه‌ای و قابل شخصی‌سازی هستند.",
  },
  {
    question: "مدت زمان پیاده‌سازی یک پروژه BI چقدر است؟",
    answer:
        "بسته به پیچیدگی و حجم داده‌ها، زمان پروژه متفاوت است. پروژه‌های کوچک ۲-۴ هفته، پروژه‌های متوسط ۱-۲ ماه و پروژه‌های بزرگ ۳-۶ ماه زمان می‌برند. بعد از جلسه مشاوره، تایم‌لاین دقیق ارائه می‌شود.",
  },
  {
    question: "از چه ابزارها و تکنولوژی‌هایی استفاده می‌کنید؟",
    answer:
        "ما با ابزارهای پیشرفته مانند Power BI، Tableau، SQL Server، Python، R و Excel کار می‌کنیم. همچنین می‌توانیم با سیستم‌های داخلی شما یکپارچه شویم و راهکار سفارشی ارائه دهیم.",
  },
  {
    question: "آیا پس از تحویل پروژه، پشتیبانی ارائه می‌دهید؟",
    answer:
        "بله، ما پس از تحویل پروژه، پشتیبانی کامل ارائه می‌دهیم شامل: آموزش کاربران، رفع مشکلات فنی، آپدیت و بهینه‌سازی. همچنین بسته‌های پشتیبانی ماهانه و سالانه نیز داریم.",
  },
  {
    question: "هزینه پروژه‌های BI چگونه محاسبه می‌شود؟",
    answer:
        "هزینه بر اساس حجم داده‌ها، تعداد داشبوردها، پیچیدگی تحلیل‌ها و مدت زمان پروژه تعیین می‌شود. برای دریافت پیشنهاد قیمت رایگان، می‌توانید فرم مشاوره را پر کنید یا با ما تماس بگیرید.",
  },
  {
    question: "آیا می‌توانید با سیستم‌های موجود ما یکپارچه شوید؟",
    answer:
        "بله، ما با تمام سیستم‌های رایج (ERP، CRM، حسابداری، انبارداری و...) یکپارچه می‌شویم. از طریق API، Database Connection یا فایل‌های Excel/CSV داده‌ها را دریافت و پردازش می‌کنیم.",
  },
  {
    question: "چه تفاوتی با شرکت‌های دیگر دارید؟",
    answer:
        "تخصص در حوزه BI، تیم با تجربه، راهکارهای سفارشی، قیمت مناسب، پشتیبانی عالی و ارائه آموزش کامل به تیم شما. همچنین تمرکز ما بر رشد و موفقیت کسب‌وکار شماست، نه فقط تحویل پروژه.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
      <section id="faq" className="relative section-padding">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-1/2 h-96 bg-gradient-primary-hover opacity-10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <SectionHeader
              icon="fa-circle-question"
              headerLabel="سوالات متداول"
              title="سوالاتی که از ما"
              highlight="می‌پرسید"
              description="پاسخ به رایج‌ترین سوالات درباره خدمات هوش تجاری و تحلیل داده"
          />


          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                    <motion.div
                        key={faq.question}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                      <button
                          type="button"
                          className={`w-full h-full text-right rounded-xl transition-all cursor-pointer bg-card-gradient border ${
                              isOpen
                                  ? "border-card-border-hover shadow-lg shadow-header-shadow"
                                  : "border-header-border hover:border-card-border-hover"
                          }`}
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <div className="p-5 flex items-center justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1">

                            <h3 className="text-sm md:text-base text-right text-text-primary font-semibold">
                              {faq.question}
                            </h3>
                          </div>

                          <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-text-accent flex-shrink-0"
                          >
                            <Iconify
                                faIcon="fa-chevron-down"
                                width={14}
                                className="text-text-accent"
                            />
                          </motion.div>
                        </div>

                        <motion.div
                            initial={false}
                            animate={{
                              height: isOpen ? "auto" : 0,
                              opacity: isOpen ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-sm text-right border-t border-header-border pt-4 leading-8 text-text-secondary">
                            {faq.answer}
                          </div>
                        </motion.div>
                      </button>
                    </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
          >
            <p className="mb-6 text-text-secondary">
              سوال دیگری دارید؟ با ما در ارتباط باشید
            </p>

            <BaseButton
                variant="cta"
                leftIcon={<Iconify faIcon="fa-circle-question" width={16} />}
            >
              مشاوره رایگان
            </BaseButton>
          </motion.div>
        </div>
      </section>
  );
}