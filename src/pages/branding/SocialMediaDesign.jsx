import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPalette,
  FaBullhorn,
  FaChartLine,
} from "react-icons/fa";

function SocialMediaDesign() {
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
      q: "Do you design posts for all platforms?",
      a: "Yes. We design creatives optimized for Instagram, Facebook, LinkedIn, and other social media platforms.",
    },
    {
      q: "Can you create ad creatives?",
      a: "Absolutely. We design high-converting ad creatives for paid campaigns.",
    },
    {
      q: "Do you offer monthly design packages?",
      a: "Yes. We provide ongoing monthly social media design support.",
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
          Social Media Design Services
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Scroll-stopping visuals that increase engagement, build brand awareness,
          and drive measurable growth across social platforms.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Boost My Social Presence
          </button>
        </div>
      </motion.section>

      {/* DESIGN SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaInstagram className="text-emerald-600 text-3xl mb-4" />,
              title: "Instagram Post Design",
              desc: "Creative posts, reels covers, and story templates.",
            },
            {
              icon: <FaFacebook className="text-emerald-600 text-3xl mb-4" />,
              title: "Facebook Creatives",
              desc: "Engaging visuals tailored for campaigns and engagement.",
            },
            {
              icon: <FaLinkedin className="text-emerald-600 text-3xl mb-4" />,
              title: "LinkedIn Graphics",
              desc: "Professional visuals for B2B and corporate branding.",
            },
            {
              icon: <FaPalette className="text-emerald-600 text-3xl mb-4" />,
              title: "Brand-Aligned Templates",
              desc: "Consistent design style across all platforms.",
            },
            {
              icon: <FaBullhorn className="text-emerald-600 text-3xl mb-4" />,
              title: "Ad Creatives",
              desc: "High-converting social media ad visuals.",
            },
            {
              icon: <FaChartLine className="text-emerald-600 text-3xl mb-4" />,
              title: "Engagement Optimization",
              desc: "Designs crafted to increase likes, shares, and comments.",
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

      {/* WHY GOOD SOCIAL DESIGN MATTERS */}
      <section className="py-20 bg-gray-50 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Social Media Design Matters
          </h2>
          <p className="text-gray-600 text-lg">
            Strong visuals increase engagement, improve brand recognition,
            and enhance your overall marketing performance.
          </p>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Creative Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Brand Understanding",
            "Content Planning",
            "Creative Design",
            "Optimization & Delivery",
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
                Strategic and creative execution to maximize engagement.
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
            Ready to Elevate Your Social Media Presence?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Start My Social Media Design
          </button>
        </div>
      </section>

    </div>
  );
}

export default SocialMediaDesign;