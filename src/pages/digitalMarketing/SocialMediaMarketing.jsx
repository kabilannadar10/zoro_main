import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaUsers, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SocialMediaMarketing() {
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
      question: "What is Social Media Marketing?",
      answer:
        "It involves content creation, paid advertising, and audience engagement to grow your brand visibility and generate leads.",
    },
    {
      question: "How soon can we see results?",
      answer:
        "Most businesses start seeing measurable improvements within 1–3 months depending on strategy and industry.",
    },
    {
      question: "Do you run paid ads?",
      answer:
        "Yes. We manage Facebook, Instagram, LinkedIn, and other paid advertising campaigns.",
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
          Social Media Marketing
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Build brand awareness, engage your audience, and drive measurable
          growth through strategic social media campaigns.
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
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We create impactful campaigns tailored to your audience and business goals.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              icon: <FaBullhorn className="text-emerald-600 text-3xl mb-4" />,
              title: "Targeted Campaigns",
              desc: "Reach the right audience with data-driven strategies.",
            },
            {
              icon: <FaUsers className="text-emerald-600 text-3xl mb-4" />,
              title: "Community Growth",
              desc: "Build trust and long-term customer relationships.",
            },
            {
              icon: <FaChartLine className="text-emerald-600 text-3xl mb-4" />,
              title: "Performance Tracking",
              desc: "Track insights and continuously optimize results.",
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

      {/* Enquiry Section */}
      <section className="py-16 px-4 bg-gray-50">
        <motion.div
          className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Send Us an Enquiry
          </h2>

          <form className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="md:col-span-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-emerald-600 text-white font-medium py-3 rounded-lg hover:bg-emerald-700 transition"
            >
              Submit Enquiry
            </button>
          </form>
        </motion.div>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg"
              >
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
            Ready to Grow Your Brand?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto mb-8"
          >
            Let’s build powerful campaigns that drive engagement and real business growth.
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

export default SocialMediaMarketing;