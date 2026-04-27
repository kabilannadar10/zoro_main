import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaMobileAlt,
  FaRocket,
  FaCode,
  FaLayerGroup,
  FaCloudUploadAlt,
  FaCogs,
} from "react-icons/fa";

function Flutter() {
  const navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const faqs = [
    {
      q: "Why choose Flutter for app development?",
      a: "Flutter allows building high-performance apps for both Android and iOS from a single codebase, reducing development time and cost.",
    },
    {
      q: "Can you develop enterprise-level apps?",
      a: "Yes. We build scalable, secure, and production-ready applications for startups and enterprises.",
    },
    {
      q: "Do you provide app store deployment?",
      a: "Absolutely. We handle Play Store and App Store deployment along with optimization.",
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
          Flutter App Development
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Build fast, beautiful, and scalable cross-platform mobile apps
          with a single codebase powered by Flutter.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Start My App
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl hover:bg-emerald-50 transition"
          >
            Get Free Consultation
          </button>
        </div>
      </motion.section>

      {/* WHY FLUTTER */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <FaLayerGroup className="text-emerald-600 text-3xl mb-4" />,
              title: "Single Codebase",
              desc: "Build Android & iOS apps with one unified codebase.",
            },
            {
              icon: <FaRocket className="text-emerald-600 text-3xl mb-4" />,
              title: "High Performance",
              desc: "Native-like performance with smooth UI rendering.",
            },
            {
              icon: <FaMobileAlt className="text-emerald-600 text-3xl mb-4" />,
              title: "Beautiful UI",
              desc: "Customizable and pixel-perfect interface design.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200"
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

      {/* OUR SERVICES */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCode className="text-emerald-600 text-3xl mb-4" />,
              title: "Custom App Development",
              desc: "Tailored mobile apps for startups and enterprises.",
            },
            {
              icon: <FaCloudUploadAlt className="text-emerald-600 text-3xl mb-4" />,
              title: "API & Backend Integration",
              desc: "Secure backend connectivity and cloud deployment.",
            },
            {
              icon: <FaCogs className="text-emerald-600 text-3xl mb-4" />,
              title: "App Maintenance & Support",
              desc: "Continuous updates and performance optimization.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 text-center"
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

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our App Development Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Requirement Analysis",
            "UI/UX Design",
            "Development",
            "Launch & Scaling",
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
                Structured workflow ensuring quality and scalability.
              </p>
            </motion.div>
          ))}
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
            Ready to Build Your Flutter App?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Launch My Mobile App
          </button>
        </div>
      </section>

    </div>
  );
}

export default Flutter;