import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import contactAnim from "../animation/animation4.json";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Initialize EmailJS
    emailjs.init("Enu8rzZawvmP5dJ9D");
  }, []);

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_a6q2gos",
    "template_8l72tga",
    form.current,
    {
      publicKey: "1FZyQg0KxkmK4YuZ6",
    }
  )
  .then(() => {
    alert("Message Sent Successfully!");
    form.current.reset();
  })
  .catch((error) => {
    console.error(error);
  });
};

  return (
    <div className="px-4 mt-20 md:mt-32">
      {/* Intro */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Let’s Connect
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Want to connect? Our team is always here to listen and help.
        </p>
      </motion.div>

      {/* Lottie + Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Lottie */}
        <motion.div
          className="w-full"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <Lottie animationData={contactAnim} loop autoplay className="h-96" />
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Enquiry Form
          </h3>

          {messageSent && (
            <p className="text-green-600 mb-4 text-sm font-medium">
              ✅ Your message was sent successfully!
            </p>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Enquiry Type
            </label>
            <select
              name="enquiry_type"
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select Type</option>
              <option value="General Enquiry">General Enquiry</option>
              <option value="Support">Support</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us how we can help you..."
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
        </motion.form>
      </div>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center mb-20">
        {[
          {
            icon: <FaPhoneAlt className="text-2xl text-emerald-500 mb-2 mx-auto" />,
            title: "Phone",
            content: "+91 7358780562",
          },
          {
            icon: <FaEnvelope className="text-2xl text-emerald-500 mb-2 mx-auto" />,
            title: "Email",
            content: "info@zoro-tech.com",
          },
          {
            icon: (
              <FaMapMarkerAlt className="text-2xl text-emerald-500 mb-2 mx-auto" />
            ),
            title: "Address",
            content:
              "102A, 14-4C, 1E, Thattan Villai Rd, Ramanputhur North Konam, Nagercoil, Tamilnadu",
          },
        ].map((info, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md border"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={i + 3}
          >
            {info.icon}
            <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
            <p className="text-gray-600 text-sm">{info.content}</p>
          </motion.div>
        ))}
      </section>

      {/* Google Map */}
      <motion.div
        className="max-w-6xl mx-auto overflow-hidden rounded-xl border shadow-md my-8"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={6}
      >
        <iframe
          title="Zoro-Tech Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2941091855546!2d77.42409737532017!3d8.173096601798429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1c18dc8cc03%3A0x2a8c9869d1ef6c0c!2sZoro%20tech%20Nagercoil!5e0!3m2!1sen!2sin!4v1752073237386!5m2!1sen!2sin"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
}

export default Contact;