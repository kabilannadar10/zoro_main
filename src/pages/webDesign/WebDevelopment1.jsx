import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa";

function WebDevelopment1() {
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
      q: "Do you build custom websites?",
      a: "Yes. We build fully custom, scalable, and performance-optimized websites tailored to your business needs.",
    },
    {
      q: "Is your development mobile responsive?",
      a: "Absolutely. Every website we build is fully responsive across mobile, tablet, and desktop devices.",
    },
    {
      q: "Do you provide ongoing maintenance?",
      a: "Yes. We offer maintenance, updates, performance monitoring, and security support.",
    },
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <motion.section
        className="mt-20 md:mt-32 px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
          Web Development Services
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          We build modern, scalable, and high-performance websites that drive
          business growth and deliver exceptional user experiences.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Start Your Project
          </button>
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Zoro-Tech?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine strategy, design, and engineering to deliver powerful digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaRocket className="text-emerald-600 text-3xl mb-4" />,
              title: "Performance First",
              desc: "Optimized for speed, SEO, and user experience.",
            },
            {
              icon: <FaLayerGroup className="text-emerald-600 text-3xl mb-4" />,
              title: "Scalable Architecture",
              desc: "Built to grow with your business needs.",
            },
            {
              icon: <FaServer className="text-emerald-600 text-3xl mb-4" />,
              title: "Secure & Reliable",
              desc: "Enterprise-level security and best practices.",
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

      {/* SERVICES GRID */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaCode className="text-emerald-600 text-3xl mb-4" />,
              title: "Custom Web Apps",
              desc: "Tailored web applications built with modern frameworks.",
            },
            {
              icon: <FaMobileAlt className="text-emerald-600 text-3xl mb-4" />,
              title: "Responsive Websites",
              desc: "Fully optimized across all screen sizes.",
            },
            {
              icon: <FaShoppingCart className="text-emerald-600 text-3xl mb-4" />,
              title: "E-Commerce Development",
              desc: "Secure and scalable online stores.",
            },
            {
              icon: <FaServer className="text-emerald-600 text-3xl mb-4" />,
              title: "Backend Development",
              desc: "Robust APIs and server-side architecture.",
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
              <h4 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Discovery & Planning",
            "UI/UX Design",
            "Development",
            "Launch & Support",
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
                Structured execution ensuring quality and scalability.
              </p>
            </motion.div>
          ))}
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
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-cyan-600 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Exceptional
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Discuss Your Project
          </button>
        </div>
      </section>

    </div>
  );
}

export default WebDevelopment1;