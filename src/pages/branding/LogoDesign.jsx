import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaPenNib,
  FaPalette,
  FaLightbulb,
  FaLayerGroup,
  FaTrademark,
  FaGem,
} from "react-icons/fa";

function LogoDesign() {
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
      q: "How many logo concepts do you provide?",
      a: "We typically provide multiple unique logo concepts with revisions to ensure the final design matches your brand vision.",
    },
    {
      q: "Do you provide source files?",
      a: "Yes. We deliver vector source files (AI, SVG, PDF) along with PNG and JPG formats.",
    },
    {
      q: "Can you create a full brand identity?",
      a: "Absolutely. We offer complete brand identity packages including logo, color palette, typography, and brand guidelines.",
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
          Professional Logo Design Services
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Craft a powerful brand identity with a custom-designed logo that
          represents your vision, values, and uniqueness.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Create My Logo
          </button>
        </div>
      </motion.section>

      {/* LOGO TYPES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaTrademark className="text-emerald-600 text-3xl mb-4" />,
              title: "Wordmark Logos",
              desc: "Clean typography-focused brand representation.",
            },
            {
              icon: <FaGem className="text-emerald-600 text-3xl mb-4" />,
              title: "Icon & Symbol Logos",
              desc: "Memorable symbols that define your brand identity.",
            },
            {
              icon: <FaLayerGroup className="text-emerald-600 text-3xl mb-4" />,
              title: "Combination Logos",
              desc: "Perfect mix of typography and iconography.",
            },
            {
              icon: <FaPalette className="text-emerald-600 text-3xl mb-4" />,
              title: "Minimalist Logos",
              desc: "Modern, clean, and timeless design approach.",
            },
            {
              icon: <FaPenNib className="text-emerald-600 text-3xl mb-4" />,
              title: "Luxury Brand Logos",
              desc: "Premium designs that communicate exclusivity.",
            },
            {
              icon: <FaLightbulb className="text-emerald-600 text-3xl mb-4" />,
              title: "Creative Concepts",
              desc: "Unique and bold visual identities.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200 text-center"
            >
              {item.icon}
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BRANDING STRATEGY */}
      <section className="py-20 bg-gray-50 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Logo Design Backed by Strategy
          </h2>
          <p className="text-gray-600 text-lg">
            We combine creativity with research and brand positioning to
            design logos that are meaningful, memorable, and market-ready.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Logo Design Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Brand Research",
            "Concept Creation",
            "Design Refinement",
            "Final Delivery",
          ].map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 text-center"
            >
              <h4 className="text-emerald-600 font-semibold mb-2">
                {step}
              </h4>
              <p className="text-sm text-gray-600">
                Strategic approach to deliver a timeless brand identity.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 bg-gray-50 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What You Receive
          </h2>
          <p className="text-gray-600 text-lg">
            High-resolution logo files, vector source files, brand color palette,
            typography guide, and usage guidelines.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-gray-50">
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-cyan-600 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build a Strong Brand Identity?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Start My Logo Project
          </button>
        </div>
      </section>

    </div>
  );
}

export default LogoDesign;