import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function WebDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="mt-20 md:mt-32 px-6 py-16 max-w-5xl mx-auto bg-white text-gray-800">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-6 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        Why Every Business Needs a Strong Web Presence in 2025
      </motion.h1>

      <motion.img
        src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg"
        alt="Web Development"
        className="rounded-lg shadow-md mb-10 w-full"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
        loading="lazy"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={2}
        className="space-y-6 text-base sm:text-lg leading-relaxed"
      >
        <p>
          Whether you're a small tea shop or a tech startup, your **website is your online identity**. In 2025, not having a website is like not having a name board — you're invisible to 80% of your audience.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          1. First Impressions Happen Online
        </h2>
        <p>
          7 out of 10 people Google a business before contacting them. A clean, mobile-friendly website builds trust, shows professionalism, and makes customers feel confident in your service.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          2. Your Website Works 24/7
        </h2>
        <p>
          A physical store has closing hours. But your website doesn’t. It helps customers:
        </p>
        <ul className="list-disc pl-6">
          <li>View your services anytime</li>
          <li>Place orders, book appointments</li>
          <li>Contact you through WhatsApp or email</li>
        </ul>

        <h2 className="text-xl font-semibold text-emerald-600">
          3. It's Your Most Affordable Marketing Tool
        </h2>
        <p>
          Compared to paid ads, a well-optimized website can bring **organic leads** from Google every single day. Add a blog, FAQs, or portfolio — and your site becomes your best salesman.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          4. What a Modern Website Must Have in 2025
        </h2>
        <ul className="list-disc pl-6">
          <li>Mobile-first design</li>
          <li>Fast loading speed</li>
          <li>Clear CTAs (Call-To-Actions)</li>
          <li>SEO structure (Google-friendly)</li>
          <li>Contact forms / WhatsApp chat</li>
        </ul>

        <h2 className="text-xl font-semibold text-emerald-600">
          5. Who Should Invest in Web Development?
        </h2>
        <ul className="list-disc pl-6">
          <li>Startups launching their first product</li>
          <li>Local shops going online</li>
          <li>Freelancers building portfolios</li>
          <li>Educational institutes & service providers</li>
        </ul>

        <hr className="my-6 border-emerald-300" />

        <h2 className="text-xl font-semibold text-emerald-600">
          Final Thought
        </h2>
        <p>
          Social media is great, but it’s not yours — algorithms change. Your **website is your home base**, fully in your control. If you're serious about growth, web development isn’t optional — it’s essential.
        </p>

        <p className="font-semibold text-gray-700">
          Need a modern, SEO-ready, fast, and stunning website? Zoro-Tech builds websites that don’t just look good — they perform.
        </p>
      </motion.div>

      <div className="flex justify-center mt-8">
        <Link
          to="/blog"
          className="w-max bg-emerald-500 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-emerald-600 transition"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default WebDevelopment;