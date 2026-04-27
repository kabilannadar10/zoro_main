import React, { useEffect, useState } from "react";
import {
  FaMobileAlt,
  FaGlobe,
  FaBrain,
  FaLaptopCode,
  FaShieldAlt,
  FaRobot,
  FaPalette,
  FaBullhorn,
  FaNetworkWired,
  FaUser,
  FaChartPie,
  FaSearchDollar,
  FaCopyright,
  FaMailBulk
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.webp";
import Lottie from "lottie-react";
import headerAnim from "../animation/animation1.json";
import service from "../animation/animation.json";
import smiley from "../animation/animation2.json";
import { useNavigate } from "react-router-dom";
function Service() {
  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //service
  const services = [
    {
      title: "Brand Design & Strategy",
      icon: <FaPalette className="text-3xl text-emerald-500" />,
      desc: "Creative and Premium designing for your brand to stand out in the market. ",
    },
    {
      title: "Social Media Management",
      icon: <FaUser className="text-3xl text-emerald-500" />,
      desc: "Social Media Booster for your pages with our detailed insights and tools.",
    },
    {
      title: "Audience Analytics",
      icon: <FaChartPie className="text-3xl text-emerald-500" />,
      desc: "Analytics of your website to focus on best-performing products and pages.",
    },
    {
      title: "SEO",
      icon: <FaSearchDollar className="text-3xl text-emerald-500" />,
      desc: "Search Engine Optimization for your Website & Stores with guaranteed results.",
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn className="text-3xl text-emerald-500" />,
      desc: "Boost your online visibility and ROI with SEO, ads, social media, and data-driven campaigns.",
    },
    {
      title: "App Development",
      icon: <FaMobileAlt className="text-3xl text-emerald-500" />,
      desc: "Custom mobile apps for Android and iOS — intuitive, fast, and scalable for all industries.",
    },
    {
      title: "Web Development",
      icon: <FaGlobe className="text-3xl text-emerald-500" />,
      desc: "Modern websites, e-commerce stores, and dashboards built for performance and design.",
    },
    {
      title: "Artificial Intelligence",
      icon: <FaRobot className="text-3xl text-emerald-500" />,
      desc: "AI-driven automation, chatbots, and data modeling that boost productivity and insights.",
    },
    {
      title: "Machine Learning",
      icon: <FaBrain className="text-3xl text-emerald-500" />,
      desc: "Advanced ML models for predictive analytics, recommendation systems, and personalization.",
    },
    {
      title: "UI/UX Design",
      icon: <FaLaptopCode className="text-3xl text-emerald-500" />,
      desc: "Intuitive interfaces with exceptional user experience that drive engagement and loyalty.",
    },
    {
      title: "Copywriting",
      icon: <FaCopyright className="text-3xl text-emerald-500" />,
      desc: "Unique and creative content writing for your projects and websites.",
    },
    {
      title: "Email Marketing",
      icon: <FaMailBulk className="text-3xl text-emerald-500" />,
      desc: "We design a newsletter and send it to your audience for maximum impact.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  //testimonials
  const testimonials = [
    {
      name: "Remy",
      role: "Tattoo Studio Owner",
      image: client1,
      feedback:
        "Zoro-Tech gave my brand a bold identity and a sleek booking site. Client appointments doubled in 3 months.",
    },
    {
      name: "Akhil",
      role: "Fitness Coach",
      image: client2,
      feedback:
        "My website now converts visitors to sign-ups! The UI is clean, and it connects directly to my class schedules.",
    },
    {
      name: "Selvam",
      role: "Photographer",
      image: client3,
      feedback:
        "The portfolio site loads fast, looks premium, and made client proofing so easy. My leads have gone way up.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  //questions
  const faqs = [
    {
      question: "What services does Zoro-Tech offer?",
      answer:
        "We provide web development, app development, UI/UX design, branding, digital marketing, DevOps, AI & ML solutions, and cybersecurity services.",
    },
    {
      question: "Do you provide custom solutions for startups?",
      answer:
        "Yes! We specialize in helping startups build scalable digital products from scratch based on their unique needs.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "It depends on the project size, but typically a portfolio site takes 1-2 weeks, while e-commerce or custom platforms can take 3-6 weeks.",
    },
    {
      question: "Can I get support after the project is delivered?",
      answer:
        "Absolutely! We offer dedicated post-launch support and maintenance plans tailored to your needs.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  const fadeUp1 = {
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
  return (
    <div>
      {/*Page head section */}
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp1}
        className="mt-22 md:mt-32"
      >
        <h2 className="text-3xl sm:text-2xl font-bold text-gray-900 mb-2 uppercase text-center">
          Let’s Get Started
        </h2>
        <p className=" text-3xl sm:text-4xl  max-w-3xl font-bold mx-auto mb-12 text-center">
          Ready To Make a Real Change? Let’s Build this Thing Together!
        </p>
      </motion.div>
      {/*Service card */}
      <section className="py-8 px-4 bg-white">
        <motion.div
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp1}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            From idea to execution, Zoro-Tech delivers powerful, scalable, and
            beautiful digital solutions tailored to your needs.
          </p>
        </motion.div>
        <div className="flex justify-center pb-4">
          <Lottie
            loop
            autoplay
            className="w-[32rem]"
            animationData={headerAnim}
          />
        </div>
        <motion.div
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp1}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 50 }}
              animate="visible"
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/*testimonials */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Real stories from businesses that grew with Zoro-Tech.
          </p>
        </div>
        <div className="-mt-4">
          <Lottie loop autoplay className="w-[14rem]" animationData={service} />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <p className="text-gray-700 text-sm mb-4 italic">
                “{item.feedback}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/*questions */}
      <section className="py-16 bg-gray-50">
          <motion.div
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp1}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Want to Drive More Traffic To Your Business?
          </h2>
          <p className="text-gray-600 text-base sm:text-m max-w-3xl mx-auto">
           We have services to drive more traffic to your business not any traffic but we drive relevant traffic. From website development to analytics we cover everything. Choose service as per your requirement and then just sit back and relax we will take it from that point and will share the key points to focus.Biggest problem is you always try to cover everything and you try to promote each and every products. Most of the business owner don’t even aware which of their products are doing wonders. So we make sure your focus on right products to the right audience with proper analytics.


          </p>
        </motion.div>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left text-gray-800 font-medium text-lg flex justify-between items-center"
                >
                  {faq.question}
                  <span className="text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*CTA section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-cyan-600 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
           We’ll Show You How It’s Done
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto mb-8"
          >
            We integrate easy to use control panel to keep your website updated. You can use this control panel to add edit delete content. We also integrate SEO tools to promote your website. We integrate tools in such a way that it makes the website a self-promoting website. It will automatically ping Search Engines to crawl for new content on the website. We also integrate tools to create content automagically for your business for better SEO. We provide all the demos to use these tools but still if you want to learn in details then let us know.
          </motion.p>
          <motion.a
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
}

export default Service;
