import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaChartLine, FaSearchDollar, FaBullseye } from "react-icons/fa";

function GoogleAds() {
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

  const faqs = [
    {
      q: "What are Google Ads?",
      a: "Google Ads is a paid advertising platform that allows businesses to appear on Google search results, YouTube, and partner websites.",
    },
    {
      q: "How quickly can I see results?",
      a: "Google Ads can generate traffic almost immediately after campaign launch, depending on targeting and budget.",
    },
    {
      q: "Do you manage ad optimization?",
      a: "Yes. We continuously monitor, test, and optimize campaigns to improve conversions and reduce cost per click.",
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
          Google Ads Management
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Drive instant traffic, high-quality leads, and measurable ROI with
          expertly managed Google Ads campaigns.
        </p>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 bg-white px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Google Ads Services
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            {
              icon: <FaSearchDollar className="text-emerald-600 text-3xl mb-4" />,
              title: "Search Ads",
              desc: "Appear at the top of Google search results.",
            },
            {
              icon: <FaGoogle className="text-emerald-600 text-3xl mb-4" />,
              title: "Display Ads",
              desc: "Reach audiences across millions of websites.",
            },
            {
              icon: <FaBullseye className="text-emerald-600 text-3xl mb-4" />,
              title: "Remarketing",
              desc: "Reconnect with users who visited your website.",
            },
            {
              icon: <FaChartLine className="text-emerald-600 text-3xl mb-4" />,
              title: "Performance Tracking",
              desc: "Continuous optimization for maximum ROI.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 text-center"
            >
              {item.icon}
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Google Ads Process
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
          {[
            "Account Audit",
            "Campaign Setup",
            "Ad Optimization",
            "Reporting & Scaling",
          ].map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center"
            >
              <h4 className="text-emerald-600 font-semibold mb-2">
                {step}
              </h4>
              <p className="text-sm text-gray-600">
                Structured strategy to maximize performance and conversions.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900"
                >
                  {item.q}
                  <span className="text-emerald-600 text-xl">
                    {activeFAQ === index ? "-" : "+"}
                  </span>
                </button>

                {activeFAQ === index && (
                  <div className="p-4 pt-0 text-sm text-gray-600">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-cyan-600 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Ready to Launch High-Performing Google Ads?
          </motion.h2>

          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Start Advertising Today
          </motion.button>
        </div>
      </section>

    </div>
  );
}

export default GoogleAds;