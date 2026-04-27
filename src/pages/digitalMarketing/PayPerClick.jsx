import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaMousePointer, FaChartLine, FaBullseye, FaSearchDollar } from "react-icons/fa";

function PayPerClick() {
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
      q: "What is Pay-Per-Click (PPC)?",
      a: "PPC is a paid advertising model where you pay only when someone clicks your ad, helping drive targeted traffic instantly.",
    },
    {
      q: "Which platforms do you manage?",
      a: "We manage Google Ads, Bing Ads, Facebook Ads, Instagram Ads, and other PPC platforms.",
    },
    {
      q: "How do you optimize campaigns?",
      a: "We continuously test ad creatives, keywords, bidding strategies, and landing pages to improve ROI.",
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
          Pay-Per-Click Advertising
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Drive immediate traffic, generate qualified leads, and maximize ROI
          with expertly managed PPC campaigns.
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
            Our PPC Services
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            {
              icon: <FaSearchDollar className="text-emerald-600 text-3xl mb-4" />,
              title: "Search Ads",
              desc: "Appear at the top of search results instantly.",
            },
            {
              icon: <FaBullseye className="text-emerald-600 text-3xl mb-4" />,
              title: "Display Campaigns",
              desc: "Reach targeted audiences across networks.",
            },
            {
              icon: <FaMousePointer className="text-emerald-600 text-3xl mb-4" />,
              title: "Remarketing Ads",
              desc: "Reconnect with visitors who showed interest.",
            },
            {
              icon: <FaChartLine className="text-emerald-600 text-3xl mb-4" />,
              title: "Conversion Optimization",
              desc: "Improve click-through rates and ROI.",
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
            Our PPC Process
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
          {[
            "Campaign Research",
            "Ad Creation",
            "Launch & Monitor",
            "Optimize & Scale",
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
                Data-driven steps to ensure performance and profitability.
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
            Ready to Scale with PPC Advertising?
          </motion.h2>

          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Launch Your Campaign
          </motion.button>
        </div>
      </section>

    </div>
  );
}

export default PayPerClick;