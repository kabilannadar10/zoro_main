import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Careers() {
 let navigate= useNavigate()
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Header */}
      <motion.div
        className="mt-20 md:mt-32 text-center px-4"
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Careers at Zoro-Tech
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          We’re not just building digital products — we’re shaping the future of
          tech. Come grow with a team that values creativity, learning, and
          impact.
        </p>
      </motion.div>

      {/* Why Work With Us */}
      <section className="py-16 bg-white px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Work With Us?
          </h3>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            At Zoro-Tech, we’re a team of creators, engineers, and innovators.
            We believe in collaboration, learning, and building a better digital
            world.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {["Growth Culture", "Remote Friendly", "Innovative Projects"].map(
            (title, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200"
              >
                <h4 className="text-lg font-semibold text-emerald-600 mb-2">
                  {title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {i === 0
                    ? "We invest in your learning, give ownership, and help you become the best version of yourself."
                    : i === 1
                    ? "Flexibility to work from anywhere — all you need is passion and a laptop."
                    : "Work on AI, full-stack apps, cybersecurity tools, and other cutting-edge technologies."}
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Open Positions
          </h3>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            We’re hiring across multiple roles. Join us and build impactful
            products that shape the digital future.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Frontend Developer",
              type: "Full-time · Remote",
              desc: "Strong knowledge in React.js, Tailwind, and component-based design.",
            },
            {
              title: "Backend Developer",
              type: "Full-time · Remote",
              desc: "Experience in Django, Node.js, or Express with API handling.",
            },
            {
              title: "UI/UX Designer",
              type: "Contract · Remote",
              desc: "Proficient in Figma and Adobe XD with strong visual storytelling.",
            },
          ].map((job, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <h4 className="text-lg font-semibold text-gray-900">
                {job.title}
              </h4>
              <p className="text-sm text-gray-500 mb-2">{job.type}</p>
              <p className="text-sm text-gray-600 mb-4">{job.desc}</p>
              <a
                onClick={()=>{navigate('/contact')}}
                className="inline-block text-sm font-medium text-emerald-600 border border-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-50 transition"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-16 px-4 bg-white">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Perks & Benefits
          </h3>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            We believe great work happens when people feel supported — here’s
            how we support you.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            "Flexible Work Hours",
            "Remote Friendly",
            "Learning Stipends",
            "Paid Time Off",
            "Team Retreats",
            "Health Support",
          ].map((perk, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {perk}
              </h4>
              <p className="text-sm text-gray-600">
                {perk === "Flexible Work Hours"
                  ? "Balance your personal and professional life with freedom and accountability."
                  : perk === "Remote Friendly"
                  ? "Work from anywhere while staying connected with the team."
                  : perk === "Learning Stipends"
                  ? "Get reimbursed for courses, tools, and events that help you grow."
                  : perk === "Paid Time Off"
                  ? "Take the time you need to rest, recharge, and return refreshed."
                  : perk === "Team Retreats"
                  ? "Meet the team in real life during annual retreats and fun meetups."
                  : "Access mental wellness programs and health benefits to stay fit and focused."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-cyan-600 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Your Future Starts Here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto mb-8"
          >
            We're always on the lookout for talented minds. If you're ready to
            build something meaningful, Zoro-Tech is the place to be.
          </motion.p>
          <motion.a
            onClick={()=>{navigate('/contact')}}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Apply Now
          </motion.a>
        </div>
      </section>
    </div>
  );
}

export default Careers;
