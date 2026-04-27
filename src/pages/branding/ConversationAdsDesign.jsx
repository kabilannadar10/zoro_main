import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaComments,
  FaBullhorn,
  FaMobileAlt,
  FaChartLine,
  FaRobot,
  FaPaperPlane,
} from "react-icons/fa";

function ConversationAdsDesign() {
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
      q: "What are conversation ads?",
      a: "Conversation ads are interactive advertisements that open direct messaging chats with potential customers through platforms like Facebook Messenger, Instagram, or WhatsApp.",
    },
    {
      q: "Do you integrate chat automation?",
      a: "Yes. We integrate chatbots and automated responses to qualify leads and improve response time.",
    },
    {
      q: "Can conversation ads increase lead generation?",
      a: "Absolutely. They create direct engagement, reduce friction, and significantly improve conversion rates.",
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
          Conversation Ads Design
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Turn clicks into conversations. Engage your audience instantly with
          interactive messaging ads designed to convert.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Launch Conversation Campaign
          </button>
        </div>
      </motion.section>

      {/* SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaComments className="text-emerald-600 text-3xl mb-4" />,
              title: "Messenger Ads Design",
              desc: "Engaging ads that open direct chats instantly.",
            },
            {
              icon: <FaMobileAlt className="text-emerald-600 text-3xl mb-4" />,
              title: "WhatsApp Campaign Setup",
              desc: "Drive direct customer communication via WhatsApp.",
            },
            {
              icon: <FaBullhorn className="text-emerald-600 text-3xl mb-4" />,
              title: "Instagram DM Ads",
              desc: "Convert Instagram engagement into real conversations.",
            },
            {
              icon: <FaRobot className="text-emerald-600 text-3xl mb-4" />,
              title: "Chatbot Integration",
              desc: "Automate replies and lead qualification.",
            },
            {
              icon: <FaPaperPlane className="text-emerald-600 text-3xl mb-4" />,
              title: "Lead Capture Flow",
              desc: "Structured chat sequences that collect user data.",
            },
            {
              icon: <FaChartLine className="text-emerald-600 text-3xl mb-4" />,
              title: "Performance Tracking",
              desc: "Monitor conversations, responses, and conversions.",
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

      {/* WHY CONVERSATION ADS WORK */}
      <section className="py-20 bg-gray-50 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Conversation Ads Work
          </h2>
          <p className="text-gray-600 text-lg">
            Direct messaging creates personal engagement, builds trust faster,
            and significantly improves lead conversion compared to traditional ads.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Campaign Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Audience Targeting",
            "Ad Creative Design",
            "Chat Flow Setup",
            "Optimization & Scaling",
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
                Strategic execution focused on engagement and ROI.
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
            Ready to Turn Ads Into Conversations?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Start My Conversation Campaign
          </button>
        </div>
      </section>

    </div>
  );
}

export default ConversationAdsDesign;