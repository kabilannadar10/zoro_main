import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaPhotoVideo, FaUsers, FaChartLine } from "react-icons/fa";

function InstagramMarketing() {
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
      q: "Why is Instagram important for business?",
      a: "Instagram helps brands connect visually with audiences, build engagement, and drive sales through content and ads.",
    },
    {
      q: "Do you create reels and stories?",
      a: "Yes. We create engaging posts, reels, and stories optimized for growth and conversions.",
    },
    {
      q: "Can you run Instagram ads?",
      a: "Absolutely. We manage targeted Instagram ad campaigns focused on ROI and audience expansion.",
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
          Instagram Marketing
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create a powerful visual identity and grow your audience with
          data-driven Instagram strategies.
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
            Our Instagram Services
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            {
              icon: <FaInstagram className="text-emerald-600 text-3xl mb-4" />,
              title: "Profile Optimization",
              desc: "Optimized bio, branding, and highlights setup.",
            },
            {
              icon: <FaPhotoVideo className="text-emerald-600 text-3xl mb-4" />,
              title: "Content Creation",
              desc: "Creative posts, reels & story strategies.",
            },
            {
              icon: <FaUsers className="text-emerald-600 text-3xl mb-4" />,
              title: "Audience Growth",
              desc: "Organic and paid follower growth strategies.",
            },
            {
              icon: <FaChartLine className="text-emerald-600 text-3xl mb-4" />,
              title: "Performance Tracking",
              desc: "Analytics-driven optimization for better ROI.",
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

      {/* Strategy */}
      <section className="py-16 bg-gray-50 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Growth Strategy
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
          {[
            "Brand Research",
            "Content Planning",
            "Campaign Execution",
            "Continuous Optimization",
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
                Structured approach to maximize engagement and conversions.
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
            Let’s Grow Your Instagram Presence
          </motion.h2>

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

export default InstagramMarketing;