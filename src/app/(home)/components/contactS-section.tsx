"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  AlertCircle,
  Building2,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const services = [
    { value: "foundation", label: "تحلیل داده‌های کسب‌وکار (Foundation)" },
    { value: "bi-core", label: "طراحی داشبورد مدیریتی (BI Core)" },
    { value: "predictive", label: "پیش‌بینی و مدل‌سازی (Predictive)" },
    { value: "optimization", label: "بهینه‌سازی و بهبود فرآیند (Optimization)" },
    { value: "data-systems", label: "طراحی سیستم‌های داده (Data Systems)" },
    { value: "business-focus", label: "مشاوره و پیاده‌سازی هوش تجاری (Business Focus)" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "تلفن تماس",
      value: "+98 (935) 789-3655",
      link: "tel:+989357893655",
      gradientClass: "bg-gradient-blue",
    },
    {
      icon: Mail,
      title: "ایمیل",
      value: "info@iran-bi.com",
      link: "mailto:info@iran-bi.com",
      gradientClass: "bg-gradient-purple-pink",
    },
    {
      icon: MapPin,
      title: "آدرس دفتر",
      value: "تهران، خیابان ولیعصر، پلاک ۱۲۳۴",
      link: "#",
      gradientClass: "bg-gradient-orange",
    },
  ];

  const benefits = [
    { icon: CheckCircle, text: "مشاوره رایگان و بدون تعهد" },
    { icon: Clock, text: "پاسخگویی در کمتر از ۲۴ ساعت" },
    { icon: User, text: "تیم متخصص با ۱۰+ سال تجربه" },
    { icon: Building2, text: "خدمات سفارشی برای کسب‌وکار شما" },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const inputClass =
      "w-full px-4 py-3 rounded-xl bg-bg-secondary border border-header-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all";

  return (
      <section id="contact">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-primary opacity-20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-primary-hover opacity-20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-nav-hover-bg border border-header-border rounded-full text-text-accent text-sm mb-6">
              <MessageSquare size={16} />
              تماس با ما
            </div>

            <h2 className="text-4xl md:text-5xl mb-4 font-bold">
              <span className="text-text-primary">مشاوره رایگان</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}دریافت کنید
            </span>
            </h2>

            <p className="text-lg max-w-2xl mx-auto text-text-secondary">
              تیم متخصص ما آماده است تا در کنار شما باشد و اولین قدم را برای تحول دیجیتال سازمان‌تان بردارید
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                  <motion.a
                      key={info.title}
                      href={info.link}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="block p-6 rounded-2xl bg-card-gradient border border-header-border hover:border-card-border-hover hover:shadow-xl hover:shadow-header-shadow transition-all"
                  >
                    <div
                        className={`w-14 h-14 rounded-xl ${info.gradientClass} flex items-center justify-center mb-4`}
                    >
                      <info.icon className="text-white" size={24} />
                    </div>

                    <div className="text-sm mb-2 text-text-secondary">{info.title}</div>

                    <div
                        className="font-semibold text-text-primary"
                        dir={info.title === "ایمیل" || info.title === "تلفن تماس" ? "ltr" : "rtl"}
                    >
                      {info.value}
                    </div>
                  </motion.a>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-1"
              >
                <div className="rounded-2xl p-8 h-full bg-nav-hover-bg border border-header-border">
                  <h3 className="text-2xl mb-6 font-bold text-text-primary">
                    چرا با ما همکاری کنید؟
                  </h3>

                  <div className="space-y-4">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={item.text}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                        >
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-card-gradient border border-header-border">
                            <item.icon className="text-text-accent" size={20} />
                          </div>

                          <p className="text-sm leading-relaxed mt-2 text-text-primary">
                            {item.text}
                          </p>
                        </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-header-border">
                    <div className="text-sm mb-3 text-text-secondary">ساعات کاری</div>

                    <div className="font-semibold text-text-primary">
                      شنبه تا پنج‌شنبه: ۹:۰۰ - ۱۸:۰۰
                    </div>

                    <div className="text-sm mt-2 text-text-secondary">
                      پاسخگویی ۲۴/۷ از طریق ایمیل
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2"
              >
                <div className="rounded-2xl p-8 bg-card-gradient border border-header-border">
                  <h3 className="text-2xl mb-2 font-bold text-text-primary">
                    فرم درخواست مشاوره
                  </h3>

                  <p className="text-sm mb-8 text-text-secondary">
                    اطلاعات خود را وارد کنید تا تیم ما در اسرع وقت با شما تماس بگیرد
                  </p>

                  <AnimatePresence mode="wait">
                    {submitStatus === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="text-center py-12"
                        >
                          <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", duration: 0.5 }}
                              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                          >
                            <CheckCircle className="text-white" size={40} />
                          </motion.div>

                          <h4 className="text-2xl mb-2 font-bold text-text-primary">
                            درخواست شما ارسال شد!
                          </h4>

                          <p className="text-text-secondary">
                            تیم ما در اسرع وقت با شما تماس خواهد گرفت.
                          </p>

                          <motion.button
                              type="button"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setSubmitStatus("idle")}
                              className="mt-6 px-6 py-3 bg-gradient-primary text-white rounded-xl"
                          >
                            ارسال درخواست جدید
                          </motion.button>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="text-sm mb-2 text-text-primary flex items-center gap-2">
                                <User size={16} className="text-text-accent" />
                                نام و نام خانوادگی *
                              </label>

                              <input
                                  type="text"
                                  required
                                  value={formData.name}
                                  onChange={(event) =>
                                      setFormData({ ...formData, name: event.target.value })
                                  }
                                  className={inputClass}
                                  placeholder="نام خود را وارد کنید"
                              />
                            </div>

                            <div>
                              <label className="text-sm mb-2 text-text-primary flex items-center gap-2">
                                <Building2 size={16} className="text-text-accent" />
                                نام سازمان *
                              </label>

                              <input
                                  type="text"
                                  required
                                  value={formData.company}
                                  onChange={(event) =>
                                      setFormData({ ...formData, company: event.target.value })
                                  }
                                  className={inputClass}
                                  placeholder="نام شرکت/سازمان"
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="text-sm mb-2 text-text-primary flex items-center gap-2">
                                <Mail size={16} className="text-text-accent" />
                                ایمیل *
                              </label>

                              <input
                                  type="email"
                                  required
                                  value={formData.email}
                                  onChange={(event) =>
                                      setFormData({ ...formData, email: event.target.value })
                                  }
                                  className={inputClass}
                                  placeholder="example@company.com"
                                  dir="ltr"
                              />
                            </div>

                            <div>
                              <label className="text-sm mb-2 text-text-primary flex items-center gap-2">
                                <Phone size={16} className="text-text-accent" />
                                شماره تماس *
                              </label>

                              <input
                                  type="tel"
                                  required
                                  value={formData.phone}
                                  onChange={(event) =>
                                      setFormData({ ...formData, phone: event.target.value })
                                  }
                                  className={inputClass}
                                  placeholder="09XX XXX XXXX"
                                  dir="ltr"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm mb-2 text-text-primary">
                              خدمات مورد نیاز *
                            </label>

                            <select
                                required
                                value={formData.service}
                                onChange={(event) =>
                                    setFormData({ ...formData, service: event.target.value })
                                }
                                className={inputClass}
                            >
                              <option value="">انتخاب کنید</option>
                              {services.map((service) => (
                                  <option key={service.value} value={service.value}>
                                    {service.label}
                                  </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="text-sm mb-2 text-text-primary flex items-center gap-2">
                              <MessageSquare size={16} className="text-text-accent" />
                              توضیحات پروژه
                            </label>

                            <textarea
                                value={formData.message}
                                onChange={(event) =>
                                    setFormData({ ...formData, message: event.target.value })
                                }
                                rows={5}
                                className={`${inputClass} resize-none`}
                                placeholder="توضیحات بیشتر درباره نیاز خود را بنویسید..."
                            />
                          </div>

                          <motion.button
                              type="submit"
                              disabled={isSubmitting}
                              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                              className={`w-full px-8 py-4 bg-gradient-primary text-white rounded-xl hover:shadow-xl hover:shadow-header-shadow transition-all flex items-center justify-center gap-2 relative overflow-hidden ${
                                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                              }`}
                          >
                            {isSubmitting ? (
                                <>
                                  <motion.div
                                      animate={{ rotate: 360 }}
                                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                  />
                                  در حال ارسال...
                                </>
                            ) : (
                                <>
                                  <Send size={20} />
                                  ارسال درخواست مشاوره
                                </>
                            )}
                          </motion.button>

                          <p className="text-xs text-center text-text-secondary">
                            با ارسال این فرم، تیم ما در کمتر از ۲۴ ساعت با شما تماس خواهد گرفت
                          </p>
                        </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
}