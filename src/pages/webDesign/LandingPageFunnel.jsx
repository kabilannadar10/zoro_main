import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBullseye,
  FaFilter,
  FaChartLine,
  FaEnvelopeOpenText,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa";

function LandingPageFunnel() {
  const navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
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
      q: "What is a landing page funnel?",
      a: "A landing page funnel is a structured conversion system designed to guide visitors toward a specific action like booking, purchasing, or subscribing.",
    },
    {
      q: "Do you create sales funnels for ads?",
      a: "Yes. We design funnels optimized for Google Ads, Facebook Ads, and other paid traffic campaigns.",
    },
    {
      q: "Do you provide A/B testing?",
      a: "Absolutely. We implement A/B testing strategies to continuously improve conversion rates.",
    },
  ];

  return (
    <div>

      {/* HERO */}
      <motion.section
        className="mt-20 md:mt-32 px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
          Landing Page & Funnel Development
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Turn visitors into leads and customers with strategically designed,
          high-converting landing pages and sales funnels.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Build My Funnel
          </button>
        </div>
      </motion.section>

      {/* FUNNEL STAGES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Funnel Strategy
          </h2>
          <p className="text-gray-600">
            Designed to move users seamlessly from awareness to conversion.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <FaBullseye />, title: "Attract", desc: "Drive targeted traffic through ads & SEO." },
            { icon: <FaFilter />, title: "Engage", desc: "Capture attention with compelling content." },
            { icon: <FaEnvelopeOpenText />, title: "Convert", desc: "Lead capture forms & strong CTAs." },
            { icon: <FaRocket />, title: "Scale", desc: "Optimize & retarget for maximum ROI." },
          ].map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200 text-center"
            >
              <div className="text-emerald-600 text-3xl mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONVERSION FEATURES */}
      <section className="py-20 bg-gray-50 px-4 text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built for Maximum Conversions
          </h2>
          <p className="text-gray-600">
            Every element is crafted with psychology and data-backed strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "High-Converting Copywriting",
            "Strategic CTA Placement",
            "Trust Signals & Social Proof",
            "Speed Optimized Design",
          ].map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <h4 className="text-emerald-600 font-semibold mb-2">
                {feature}
              </h4>
              <p className="text-sm text-gray-600">
                Designed to boost engagement and reduce bounce rates.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* A/B TESTING SECTION */}
      <section className="py-20 bg-white px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <FaLayerGroup className="text-emerald-600 text-4xl mb-6 mx-auto" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Continuous Optimization
          </h2>
          <p className="text-gray-600 text-lg">
            We implement A/B testing, heatmaps, and performance analytics
            to continuously improve your funnel performance.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-white">
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
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-cyan-600 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build a High-Converting Funnel?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Start My Funnel Strategy
          </button>
        </div>
      </section>

    </div>
  );
}

export default LandingPageFunnel;