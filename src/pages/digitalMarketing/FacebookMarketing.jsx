import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaBullhorn, FaUsers, FaChartLine, FaAd } from "react-icons/fa";

function FacebookMarketing() {
  const navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const faqData = [
    {
      question: "Why choose Facebook for marketing?",
      answer:
        "Facebook offers powerful targeting options, detailed analytics, and access to billions of active users worldwide.",
    },
    {
      question: "Do you manage Facebook Ads?",
      answer:
        "Yes. We handle full ad campaign setup, targeting, optimization, and performance tracking.",
    },
    {
      question: "How much budget is required?",
      answer:
        "Budget depends on your goals, industry, and competition. We help define the best strategy within your budget.",
    },
  ];

  return (
    <div>

      {/* Hero Section */}
      <motion.section
        className="mt-20 md:mt-32 text-center px-4"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Facebook Marketing Services
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Grow your brand, generate quality leads, and increase conversions
          through strategic Facebook campaigns.
        </p>
      </motion.section>

      {/* Services */}
      <section className="py-16 bg-white px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Facebook Marketing Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Data-driven strategies designed to maximize ROI and engagement.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            {
              icon: <FaAd className="text-emerald-600 text-3xl mb-4" />,
              title: "Facebook Ads",
              desc: "Targeted ad campaigns to reach your ideal audience.",
            },
            {
              icon: <FaUsers className="text-emerald-600 text-3xl mb-4" />,
              title: "Audience Targeting",
              desc: "Precise demographic and interest-based targeting.",
            },
            {
              icon: <FaBullhorn className="text-emerald-600 text-3xl mb-4" />,
              title: "Content Strategy",
              desc: "Engaging creatives and copy that convert.",
            },
            {
              icon: <FaChartLine className="text-emerald-600 text-3xl mb-4" />,
              title: "Performance Analytics",
              desc: "Continuous optimization for maximum ROI.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 text-center"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategy Process */}
      <section className="py-16 bg-gray-50 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            How We Deliver Results
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
          {[
            "Market Research",
            "Campaign Setup",
            "Optimization",
            "Scaling & Reporting",
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center"
            >
              <h4 className="text-lg font-semibold text-emerald-600 mb-2">
                {step}
              </h4>
              <p className="text-sm text-gray-600">
                Structured approach to maximize campaign performance.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900"
                >
                  {faq.question}
                  <span className="text-emerald-600 text-xl">
                    {activeFAQ === index ? "-" : "+"}
                  </span>
                </button>

                {activeFAQ === index && (
                  <div className="p-4 pt-0 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-cyan-600 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Ready to Scale with Facebook?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto mb-8"
          >
            Let’s build high-performing Facebook campaigns that drive real business growth.
          </motion.p>

          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </motion.button>
        </div>
      </section>

    </div>
  );
}

export default FacebookMarketing;