import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import teamAnim from "../animation/animation3.json";
import cultureAnim from "../animation/animation4.json";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
function About() {
  let navigate=useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const { ref, inView } = useInView({
  triggerOnce: false, // triggers every time it's in view
  threshold: 0.3,      // adjust as needed
});

  return (
    <div className="px-4 mt-20 md:mt-32">
      {/* Intro Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          About Zoro-Tech
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          We boost digital presence for businesses. We provide top-notch digital marketing services that drive results, helping companies grow and succeed online. We build websites, mobile applications, social media profiles, and other online tools to help your business reach customers, gain more followers, get more leads, and more.
        </p>
      </motion.div>

{/* Who We Are Section */}
<section className="py-20" ref={ref}>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.6 }}
    >
      <Lottie animationData={teamAnim} loop autoplay className="h-92" />
    </motion.div>

    <motion.div
      className="text-gray-700"
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Our Approach to Digital Marketing is Centered Around Learning & Growing With Your Users
      </h3>
      <p className="text-gray-500"> <span className="text-black">★</span> We understand the project, we study the competition then submit the ideas and samples. We sit with the clients to understand the business and try to boost it as soon as possible. Our solutions are always value for money. So that more and more business can use the power of the digital media. We do not sell only website, we sell whole concept which comes with self promoting abilities. </p> 
      <p className="text-gray-500"> <span className="text-black">★</span> We don’t just do the same old things — we use the latest technology to ensure you’re reaching customers and prospects in a fresh way. With our team of dedicated professionals, we work hard to get your business noticed online.</p>
      <p className="text-gray-500"> <span className="text-black">★</span> When you work with us, you’ll receive a single point of contact for all of your marketing needs. Whether you want to create a website, launch a mobile app, or build social media accounts, we can help you make the right decisions for your business, and provide the best digital marketing services to help you achieve success.</p>
    </motion.div>
  </div>
</section>



      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Vision & Mission
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We are driven by a purpose — to transform businesses with
              future-ready digital solutions.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-emerald-600 mb-2">
                Our Vision
              </h4>
              <p className="text-gray-600 text-base">
                To be the most trusted digital innovation partner, inspiring
                brands to reimagine what’s possible through cutting-edge tech
                and design.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-emerald-600 mb-2">
                Our Mission
              </h4>
              <p className="text-gray-600 text-base">
                To empower businesses of all sizes with creative, secure, and
                scalable digital solutions — combining strategy, design, and
                technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every project, partnership, and pixel.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Innovation",
              "Integrity",
              "Collaboration",
              "Excellence",
              "Empathy",
              "Sustainability",
            ].map((value, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {value}
                </h4>
                <p className="text-sm text-gray-600">
                  {value === "Innovation"
                    ? "We challenge norms and explore new tech to stay ahead."
                    : value === "Integrity"
                    ? "We operate with honesty, transparency, and trust."
                    : value === "Collaboration"
                    ? "We build better together — across teams and with clients."
                    : value === "Excellence"
                    ? "We take pride in delivering high-quality, reliable work."
                    : value === "Empathy"
                    ? "We understand user needs deeply to craft intuitive solutions."
                    : "We prioritize long-term thinking in our tech and partnerships."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Lottie animationData={cultureAnim} loop autoplay />
          </motion.div>

          <motion.div
            className="text-gray-700 px-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Culture
            </h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Zoro-Tech is where curiosity meets creativity. We foster a remote-first, inclusive culture
              that celebrates diversity, continuous learning, and the freedom to
              take ownership. Every idea matters — every voice is heard.
            </p>
          </motion.div>
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
            Let’s Grow Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto mb-8"
          >
            We’re not just building digital products. We’re building a culture
            of excellence, impact, and growth.
          </motion.p>
          <motion.a
            onClick={()=>{navigate('/contact')}}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Join Our Team
          </motion.a>
        </div>
      </section>
    </div>
  );
}

export default About;