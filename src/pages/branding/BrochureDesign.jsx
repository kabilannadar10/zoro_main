import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaLayerGroup,
  FaPrint,
  FaPenNib,
  FaFileAlt,
  FaPalette,
} from "react-icons/fa";

function BrochureDesign() {
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
      q: "Do you design corporate brochures?",
      a: "Yes, we design professional corporate brochures tailored to your brand identity and business objectives.",
    },
    {
      q: "Can you provide print-ready files?",
      a: "Absolutely. We deliver high-resolution, print-ready files suitable for commercial printing.",
    },
    {
      q: "Do you offer content writing for brochures?",
      a: "Yes, we can assist with professional copywriting to make your brochure persuasive and impactful.",
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
          Brochure Design Services
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Professionally crafted brochures that communicate your brand story,
          highlight your services, and build trust with your audience.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Design My Brochure
          </button>
        </div>
      </motion.section>

      {/* SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaBookOpen className="text-emerald-600 text-3xl mb-4" />,
              title: "Corporate Brochures",
              desc: "Professional layouts designed for business presentations.",
            },
            {
              icon: <FaFileAlt className="text-emerald-600 text-3xl mb-4" />,
              title: "Product Catalogs",
              desc: "Visually engaging catalogs showcasing your products.",
            },
            {
              icon: <FaLayerGroup className="text-emerald-600 text-3xl mb-4" />,
              title: "Company Profiles",
              desc: "Detailed company portfolios that build credibility.",
            },
            {
              icon: <FaPrint className="text-emerald-600 text-3xl mb-4" />,
              title: "Print-Ready Designs",
              desc: "High-resolution files optimized for professional printing.",
            },
            {
              icon: <FaPenNib className="text-emerald-600 text-3xl mb-4" />,
              title: "Content Structuring",
              desc: "Clear messaging with persuasive layout flow.",
            },
            {
              icon: <FaPalette className="text-emerald-600 text-3xl mb-4" />,
              title: "Brand-Aligned Design",
              desc: "Consistent colors, typography, and visual identity.",
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
            Our Brochure Design Process
          </h2>
          <p className="text-gray-600">
            A structured approach to create impactful and persuasive brochures.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Requirement Analysis",
            "Content Structuring",
            "Creative Design",
            "Final Print Delivery",
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
                Ensuring clarity, professionalism, and visual appeal.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY BROCHURES MATTER */}
      <section className="py-20 bg-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Professional Brochures Matter
          </h2>
          <p className="text-gray-600 text-lg">
            A well-designed brochure enhances credibility, supports sales efforts,
            and communicates your brand message effectively in both print and digital formats.
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
            Ready to Elevate Your Brand with a Professional Brochure?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Get Started Today
          </button>
        </div>
      </section>

    </div>
  );
}

export default BrochureDesign;