import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBoxOpen,
  FaPalette,
  FaShoppingBag,
  FaLeaf,
  FaCubes,
  FaStar,
} from "react-icons/fa";

function PackagingDesignAgency() {
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
      q: "Do you design packaging for retail products?",
      a: "Yes. We design packaging for retail shelves, eCommerce shipping, and premium product launches.",
    },
    {
      q: "Can you create eco-friendly packaging designs?",
      a: "Absolutely. We offer sustainable and eco-conscious packaging solutions.",
    },
    {
      q: "Do you provide print-ready packaging files?",
      a: "Yes. We deliver print-ready dielines and production-ready files.",
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
          Packaging Design Agency
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Create packaging that attracts attention, builds brand recognition,
          and enhances customer experience from shelf to unboxing.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Design My Packaging
          </button>
        </div>
      </motion.section>

      {/* PACKAGING SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaBoxOpen className="text-emerald-600 text-3xl mb-4" />,
              title: "Product Box Design",
              desc: "Eye-catching retail packaging with strong shelf impact.",
            },
            {
              icon: <FaShoppingBag className="text-emerald-600 text-3xl mb-4" />,
              title: "E-Commerce Packaging",
              desc: "Unboxing experiences that delight customers.",
            },
            {
              icon: <FaPalette className="text-emerald-600 text-3xl mb-4" />,
              title: "Brand-Focused Design",
              desc: "Packaging aligned with your visual identity.",
            },
            {
              icon: <FaLeaf className="text-emerald-600 text-3xl mb-4" />,
              title: "Eco-Friendly Packaging",
              desc: "Sustainable packaging concepts for modern brands.",
            },
            {
              icon: <FaCubes className="text-emerald-600 text-3xl mb-4" />,
              title: "Custom Dieline Design",
              desc: "Precise structural packaging layouts.",
            },
            {
              icon: <FaStar className="text-emerald-600 text-3xl mb-4" />,
              title: "Luxury Packaging",
              desc: "Premium materials and finishes for high-end brands.",
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

      {/* WHY PACKAGING MATTERS */}
      <section className="py-20 bg-gray-50 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Great Packaging Matters
          </h2>
          <p className="text-gray-600 text-lg">
            Strong packaging design increases product appeal, enhances perceived value,
            and influences purchasing decisions.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Packaging Design Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Market Research",
            "Concept Development",
            "Design & Visualization",
            "Print & Production Support",
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
                From concept to production-ready packaging.
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
            Ready to Elevate Your Product with Premium Packaging?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Start My Packaging Design
          </button>
        </div>
      </section>

    </div>
  );
}

export default PackagingDesignAgency;