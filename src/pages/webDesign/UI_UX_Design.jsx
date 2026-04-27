import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaPalette,
  FaUserCheck,
  FaMobileAlt,
  FaProjectDiagram,
  FaDesktop,
  FaLightbulb,
} from "react-icons/fa";

function UI_UX_Design() {
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
      q: "What is the difference between UI and UX?",
      a: "UX focuses on user experience and usability, while UI focuses on the visual interface and design aesthetics.",
    },
    {
      q: "Do you design for both web and mobile apps?",
      a: "Yes. We design intuitive experiences for websites, web apps, and mobile applications.",
    },
    {
      q: "Do you provide prototypes before development?",
      a: "Absolutely. We provide wireframes, interactive prototypes, and design systems before development begins.",
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
          UI / UX Design Services
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          We craft intuitive, engaging, and conversion-focused digital
          experiences that delight users and drive business growth.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Start Your Design Project
          </button>
        </div>
      </motion.section>

      {/* DESIGN SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaProjectDiagram className="text-emerald-600 text-3xl mb-4" />,
              title: "Wireframing & Prototyping",
              desc: "Low & high fidelity prototypes to visualize user journeys.",
            },
            {
              icon: <FaPalette className="text-emerald-600 text-3xl mb-4" />,
              title: "UI Design",
              desc: "Modern, clean, and brand-aligned visual interfaces.",
            },
            {
              icon: <FaUserCheck className="text-emerald-600 text-3xl mb-4" />,
              title: "User Research",
              desc: "Research-driven insights to improve usability.",
            },
            {
              icon: <FaMobileAlt className="text-emerald-600 text-3xl mb-4" />,
              title: "Mobile App Design",
              desc: "Intuitive app interfaces optimized for engagement.",
            },
            {
              icon: <FaDesktop className="text-emerald-600 text-3xl mb-4" />,
              title: "Web App Design",
              desc: "High-performance and user-friendly web applications.",
            },
            {
              icon: <FaLightbulb className="text-emerald-600 text-3xl mb-4" />,
              title: "Design Systems",
              desc: "Scalable component libraries for consistent branding.",
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

      {/* DESIGN PROCESS */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Design Process
          </h2>
          <p className="text-gray-600">
            Human-centered design approach focused on usability and impact.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Research & Discovery",
            "User Flow Mapping",
            "UI Design & Prototyping",
            "Testing & Refinement",
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
                Structured design execution ensuring intuitive experiences.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY GOOD UX MATTERS */}
      <section className="py-20 bg-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Great UX Matters
          </h2>
          <p className="text-gray-600 text-lg">
            Great user experience increases customer satisfaction, improves
            retention, boosts conversions, and strengthens your brand identity.
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-cyan-600 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Design an Exceptional User Experience
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Discuss Your Design Vision
          </button>
        </div>
      </section>

    </div>
  );
}

export default UI_UX_Design;