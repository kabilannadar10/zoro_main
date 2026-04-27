import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaServer,
  FaDatabase,
  FaShoppingCart,
  FaCreditCard,
  FaCloud,
  FaCogs,
} from "react-icons/fa";

function EcommerceDevelopment() {
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
      q: "Do you build custom eCommerce platforms?",
      a: "Yes. We build fully custom scalable eCommerce systems using modern frameworks and backend technologies.",
    },
    {
      q: "Can you integrate third-party tools?",
      a: "Absolutely. We integrate CRM, ERP, shipping APIs, payment gateways, analytics, and marketing tools.",
    },
    {
      q: "Is the system scalable for high traffic?",
      a: "Yes. We design architecture to handle high traffic, large product catalogs, and global audiences.",
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
          E-Commerce Development
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Build powerful, scalable, and secure eCommerce platforms engineered
          for performance, automation, and long-term growth.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Start Development
          </button>
        </div>
      </motion.section>

      {/* CORE DEVELOPMENT SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaServer className="text-emerald-600 text-3xl mb-4" />,
              title: "Custom Backend Systems",
              desc: "Robust architecture built for scalability and performance.",
            },
            {
              icon: <FaDatabase className="text-emerald-600 text-3xl mb-4" />,
              title: "Database Optimization",
              desc: "Efficient product, order, and user data management.",
            },
            {
              icon: <FaShoppingCart className="text-emerald-600 text-3xl mb-4" />,
              title: "Advanced Cart Systems",
              desc: "Smart cart logic with automation & upsell capabilities.",
            },
            {
              icon: <FaCreditCard className="text-emerald-600 text-3xl mb-4" />,
              title: "Payment Integrations",
              desc: "Secure multi-gateway payment processing.",
            },
            {
              icon: <FaCloud className="text-emerald-600 text-3xl mb-4" />,
              title: "Cloud Deployment",
              desc: "High-availability hosting with cloud scalability.",
            },
            {
              icon: <FaCogs className="text-emerald-600 text-3xl mb-4" />,
              title: "API & System Integrations",
              desc: "ERP, CRM, shipping, and marketing integrations.",
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

      {/* ENTERPRISE FEATURES */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Capabilities
          </h2>
          <p className="text-gray-600">
            Engineered for serious online businesses and high-growth brands.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Multi-Vendor Marketplace",
            "Inventory Automation",
            "Multi-Currency & Global Support",
            "Role-Based Admin Dashboard",
          ].map((feature, i) => (
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
                {feature}
              </h4>
              <p className="text-sm text-gray-600">
                Built to handle complexity and scale effortlessly.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Development Workflow
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Requirement Analysis",
            "System Architecture Design",
            "Development & Testing",
            "Deployment & Optimization",
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
                Structured engineering approach for scalable solutions.
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-cyan-600 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build a Scalable E-Commerce Platform?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Let’s Build Your Platform
          </button>
        </div>
      </section>

    </div>
  );
}

export default EcommerceDevelopment;