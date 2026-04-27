import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaCogs,
  FaEnvelopeOpenText,
  FaChartLine,
  FaDatabase,
  FaSyncAlt,
} from "react-icons/fa";

function WebsiteAutomation() {
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
      q: "What is website automation?",
      a: "Website automation involves integrating systems that automatically handle tasks like lead capture, email responses, CRM updates, and data processing.",
    },
    {
      q: "Can you automate lead generation?",
      a: "Yes. We automate lead capture, email follow-ups, CRM integration, and funnel management.",
    },
    {
      q: "Is automation secure?",
      a: "Absolutely. We implement secure APIs, encrypted data transfer, and proper access controls.",
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
          Website Automation Solutions
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Automate workflows, streamline operations, and turn your website
          into a smart system that works for you 24/7.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Automate Your Website
          </button>
        </div>
      </motion.section>

      {/* AUTOMATION SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaRobot className="text-emerald-600 text-3xl mb-4" />,
              title: "AI Chatbot Integration",
              desc: "24/7 automated customer support and lead capture.",
            },
            {
              icon: <FaEnvelopeOpenText className="text-emerald-600 text-3xl mb-4" />,
              title: "Email Automation",
              desc: "Automated follow-ups and drip campaigns.",
            },
            {
              icon: <FaDatabase className="text-emerald-600 text-3xl mb-4" />,
              title: "CRM Integration",
              desc: "Sync leads directly into your CRM system.",
            },
            {
              icon: <FaSyncAlt className="text-emerald-600 text-3xl mb-4" />,
              title: "Workflow Automation",
              desc: "Automate repetitive tasks and internal processes.",
            },
            {
              icon: <FaCogs className="text-emerald-600 text-3xl mb-4" />,
              title: "API Integrations",
              desc: "Connect third-party tools seamlessly.",
            },
            {
              icon: <FaChartLine className="text-emerald-600 text-3xl mb-4" />,
              title: "Analytics & Tracking",
              desc: "Automated data reporting and insights.",
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

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-gray-50 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Automate Your Website?
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Automation reduces manual workload, improves customer experience,
            and increases conversion efficiency.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Save Time",
              "Reduce Human Errors",
              "Increase Conversions",
              "Improve Customer Experience",
            ].map((benefit, i) => (
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
                  {benefit}
                </h4>
                <p className="text-sm text-gray-600">
                  Smart systems that optimize your business workflow.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Automation Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Requirement Analysis",
            "Automation Strategy",
            "Integration & Testing",
            "Optimization & Monitoring",
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
                Strategic execution for seamless system automation.
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
            Ready to Turn Your Website Into a Smart System?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Start Automation
          </button>
        </div>
      </section>

    </div>
  );
}

export default WebsiteAutomation;