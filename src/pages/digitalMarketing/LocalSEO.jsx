import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaSearch, FaStar, FaChartLine } from "react-icons/fa";

function LocalSEO() {
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
      q: "What is Local SEO?",
      a: "Local SEO helps your business appear in local search results and Google Maps when customers search for nearby services.",
    },
    {
      q: "Do you optimize Google Business Profile?",
      a: "Yes. We fully optimize your Google Business Profile to improve visibility and attract local customers.",
    },
    {
      q: "How long does Local SEO take?",
      a: "Results typically begin within 1–3 months depending on competition and current online presence.",
    },
  ];

  return (
    <div>

      {/* Hero */}
      <motion.section
        className="mt-20 md:mt-32 text-center px-4"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Local SEO Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get discovered by customers near you. Improve your local search rankings,
          attract more foot traffic, and dominate your area.
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
            Our Local SEO Services
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            {
              icon: <FaMapMarkerAlt className="text-emerald-600 text-3xl mb-4" />,
              title: "Google Business Optimization",
              desc: "Optimize your profile for better local visibility.",
            },
            {
              icon: <FaSearch className="text-emerald-600 text-3xl mb-4" />,
              title: "Local Keyword Targeting",
              desc: "Rank for location-based search terms.",
            },
            {
              icon: <FaStar className="text-emerald-600 text-3xl mb-4" />,
              title: "Review Management",
              desc: "Build trust with positive customer reviews.",
            },
            {
              icon: <FaChartLine className="text-emerald-600 text-3xl mb-4" />,
              title: "Local Performance Tracking",
              desc: "Monitor rankings and optimize continuously.",
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

      {/* Process */}
      <section className="py-16 bg-gray-50 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Local SEO Process
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
          {[
            "Local Audit",
            "Profile & Website Optimization",
            "Citation & Review Building",
            "Monitoring & Growth",
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
                A structured strategy to boost local rankings and drive traffic.
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
            Ready to Dominate Your Local Market?
          </motion.h2>

          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Boost Local Rankings
          </motion.button>
        </div>
      </section>

    </div>
  );
}

export default LocalSEO;