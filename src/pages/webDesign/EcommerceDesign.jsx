import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaCreditCard,
  FaChartLine,
  FaShieldAlt,
  FaStore,
} from "react-icons/fa";

function EcommerceDesign() {
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
      q: "Which platforms do you build on?",
      a: "We build on Shopify, WooCommerce, custom React stacks, and scalable backend solutions depending on your business needs.",
    },
    {
      q: "Is the store mobile optimized?",
      a: "Yes. Every eCommerce store we build is fully responsive and optimized for mobile shopping experiences.",
    },
    {
      q: "Do you integrate payment gateways?",
      a: "Absolutely. We integrate secure payment gateways like Stripe, Razorpay, PayPal, and more.",
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
          E-Commerce Design & Development
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Build high-converting online stores that deliver seamless shopping
          experiences and drive real revenue growth.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Launch Your Online Store
          </button>
        </div>
      </motion.section>

      {/* CORE SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaStore className="text-emerald-600 text-3xl mb-4" />,
              title: "Custom Store Design",
              desc: "Modern, user-focused layouts that enhance conversions.",
            },
            {
              icon: <FaShoppingCart className="text-emerald-600 text-3xl mb-4" />,
              title: "Shopping Cart & Checkout",
              desc: "Optimized checkout flow to reduce cart abandonment.",
            },
            {
              icon: <FaCreditCard className="text-emerald-600 text-3xl mb-4" />,
              title: "Secure Payment Integration",
              desc: "Safe and reliable payment gateway setup.",
            },
            {
              icon: <FaMobileAlt className="text-emerald-600 text-3xl mb-4" />,
              title: "Mobile Optimization",
              desc: "Smooth shopping experience across all devices.",
            },
            {
              icon: <FaChartLine className="text-emerald-600 text-3xl mb-4" />,
              title: "Conversion Optimization",
              desc: "Strategies to increase sales and customer retention.",
            },
            {
              icon: <FaShieldAlt className="text-emerald-600 text-3xl mb-4" />,
              title: "Security & Performance",
              desc: "Fast loading, secure, and scalable infrastructure.",
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

      {/* SALES FEATURES SECTION */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built to Maximize Revenue
          </h2>
          <p className="text-gray-600">
            Every feature we build focuses on improving conversions and customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Product Filters & Search",
            "Inventory Management",
            "Discount & Coupon System",
            "Analytics Integration",
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
                Designed to improve user experience and boost conversions.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our E-Commerce Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Business Analysis",
            "Design & UI",
            "Development & Integration",
            "Launch & Growth Support",
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
                Structured workflow to build scalable and high-performing stores.
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
            Ready to Build a High-Converting Online Store?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Let’s Build Your Store
          </button>
        </div>
      </section>

    </div>
  );
}

export default EcommerceDesign;