import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaPalette,
  FaPaintBrush,
  FaBullhorn,
  FaImage,
  FaPenNib,
  FaLayerGroup,
} from "react-icons/fa";

function GraphicDesign() {
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
      q: "Do you provide complete branding packages?",
      a: "Yes. We offer logo design, brand identity systems, typography, and brand guidelines.",
    },
    {
      q: "Can you design marketing materials?",
      a: "Absolutely. We create brochures, posters, social media creatives, ads, and promotional graphics.",
    },
    {
      q: "Do you work with startups and enterprises?",
      a: "Yes. We design for startups, SMEs, and enterprise-level brands.",
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
          Graphic Design Services
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Transform your ideas into visually stunning designs that strengthen
          your brand identity and capture attention.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Start Your Design
          </button>
        </div>
      </motion.section>

      {/* DESIGN SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaPalette className="text-emerald-600 text-3xl mb-4" />,
              title: "Brand Identity Design",
              desc: "Logos, color palettes, typography, and brand systems.",
            },
            {
              icon: <FaPaintBrush className="text-emerald-600 text-3xl mb-4" />,
              title: "Creative Visual Design",
              desc: "Visually compelling graphics tailored to your brand.",
            },
            {
              icon: <FaBullhorn className="text-emerald-600 text-3xl mb-4" />,
              title: "Marketing Materials",
              desc: "Brochures, flyers, posters, and advertising creatives.",
            },
            {
              icon: <FaImage className="text-emerald-600 text-3xl mb-4" />,
              title: "Social Media Graphics",
              desc: "Engaging posts and campaign visuals.",
            },
            {
              icon: <FaPenNib className="text-emerald-600 text-3xl mb-4" />,
              title: "Illustrations & Icons",
              desc: "Custom illustrations to enhance storytelling.",
            },
            {
              icon: <FaLayerGroup className="text-emerald-600 text-3xl mb-4" />,
              title: "Design Systems",
              desc: "Consistent visual systems for scalable branding.",
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

      {/* CREATIVE PROCESS */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Creative Process
          </h2>
          <p className="text-gray-600">
            Strategic creativity combined with brand-driven design thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Research & Concept",
            "Design & Draft",
            "Feedback & Refinement",
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
                Collaborative approach to deliver impactful visuals.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY DESIGN MATTERS */}
      <section className="py-20 bg-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Strong Visual Design Matters
          </h2>
          <p className="text-gray-600 text-lg">
            Good design builds trust, enhances recognition, increases engagement,
            and makes your brand memorable.
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
            Let’s Create Visuals That Make an Impact
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Start Creative Project
          </button>
        </div>
      </section>

    </div>
  );
}

export default GraphicDesign;