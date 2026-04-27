import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBullhorn,
  FaPrint,
  FaPalette,
  FaRocket,
  FaImage,
  FaLayerGroup,
} from "react-icons/fa";

function FlyerDesign() {
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
      q: "Do you design event flyers?",
      a: "Yes. We design event, promotional, business, and marketing flyers tailored to your campaign goals.",
    },
    {
      q: "Can flyers be used for social media?",
      a: "Absolutely. We design flyers optimized for both print and digital platforms.",
    },
    {
      q: "Do you provide print-ready formats?",
      a: "Yes. We deliver high-resolution, print-ready files suitable for commercial printing.",
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
          Flyer Design Services
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Eye-catching flyer designs that grab attention, promote your message,
          and drive action instantly.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Create My Flyer
          </button>
        </div>
      </motion.section>

      {/* FLYER SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaBullhorn className="text-emerald-600 text-3xl mb-4" />,
              title: "Promotional Flyers",
              desc: "Boost product launches and special offers.",
            },
            {
              icon: <FaRocket className="text-emerald-600 text-3xl mb-4" />,
              title: "Event Flyers",
              desc: "Promote events, concerts, and business launches.",
            },
            {
              icon: <FaImage className="text-emerald-600 text-3xl mb-4" />,
              title: "Digital Flyers",
              desc: "Optimized for social media and online campaigns.",
            },
            {
              icon: <FaPrint className="text-emerald-600 text-3xl mb-4" />,
              title: "Print-Ready Designs",
              desc: "High-quality files ready for professional printing.",
            },
            {
              icon: <FaPalette className="text-emerald-600 text-3xl mb-4" />,
              title: "Creative Layouts",
              desc: "Bold, modern, and visually engaging compositions.",
            },
            {
              icon: <FaLayerGroup className="text-emerald-600 text-3xl mb-4" />,
              title: "Brand-Aligned Visuals",
              desc: "Consistent with your company identity and style.",
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
            Our Flyer Design Process
          </h2>
          <p className="text-gray-600">
            Fast, creative, and campaign-focused workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Campaign Brief",
            "Concept & Layout",
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
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center"
            >
              <h4 className="text-emerald-600 font-semibold mb-2">
                {step}
              </h4>
              <p className="text-sm text-gray-600">
                Designed to maximize impact and engagement.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY FLYERS WORK */}
      <section className="py-20 bg-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Flyers Still Work
          </h2>
          <p className="text-gray-600 text-lg">
            Flyers are powerful marketing tools for local promotions,
            events, product launches, and targeted campaigns.
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
            Ready to Create a High-Impact Flyer?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Start Your Flyer Design
          </button>
        </div>
      </section>

    </div>
  );
}

export default FlyerDesign;