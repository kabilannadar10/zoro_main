import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import vespa from "../assets/vespa.webp";
import honda from "../assets/hondaLogo.png";
import logo1 from "../assets/akhilFitness.png";
import logo2 from "../assets/almight logo.png";
import logo3 from "../assets/ARKONA-LOGO.png";
import logo4 from "../assets/hotel poineer.png";
import logo5 from "../assets/kumari spring.png";
import logo6 from "../assets/naturals.png";
import logo7 from "../assets/neelakandan.png";
import logo8 from "../assets/pattinam.png";
import logo9 from "../assets/ram property.png";
import logo11 from "../assets/selvam photo.png";
import logo13 from "../assets/logo13.jpg";
import logo14 from "../assets/logo14.png";
import logo15 from "../assets/logo15.jpg";
import logo16 from "../assets/logo16.png";
import logo17 from "../assets/logo17.png";
import logo12 from "../assets/vikas logo.png";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.webp";
import { FaHandshake } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo18 from "../assets/Ysconstruction.webp";
import logo19 from "../assets/thanuhospital.webp";
import logo20 from "../assets/vibirealtors.webp";
import logo21 from "../assets/eccacademylogo.webp";
import ClientsSection from "./ClientSection";
import office1 from "../assets/office1.png";
import office2 from "../assets/office2.png";
import office3 from "../assets/office3.png";
import office4 from "../assets/office4.png";
import office5 from "../assets/office5.png";
import { FaStar } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import emailjs from "@emailjs/browser";
import newLogo2 from "../assets/new-2.png"
import newLogo3 from "../assets/new-3.jpeg"
import newLogo4 from "../assets/new-4.jpeg"
import newLogo5 from "../assets/new-6.png"
import newLogo6 from "../assets/new-7.png"
import newLogo7 from "../assets/new-8.png"
import newLogo8 from "../assets/new-10.png"
import newLogo9 from "../assets/new-11.png"
import newLogo10 from "../assets/new-12.png"
import newLogo11 from "../assets/new-14.png"
function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //initial templates
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  //circle animation
  const circleRef = useRef(null);
  useEffect(() => {
    if (!loading && circleRef.current) {
      gsap.to(circleRef.current, {
        repeat: -1,
        ease: "none",
        duration: 6,
        keyframes: [
          { x: 50, y: -50 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 0 },
        ],
      });
    }
  }, [loading]);
  //brand animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const letterAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const heading = "Our most valued partners";
  const logos = [
    vespa,
    honda,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    newLogo2,
    newLogo3,
    newLogo4,
    newLogo5,
    newLogo6,
    newLogo7,
    newLogo8,
    newLogo9,
    newLogo10,
    newLogo11,

  ];
  //content animation
  const wordControls = useAnimation();
  const [wordRef, wordInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (wordInView) {
      wordControls.start("visible");
    }
  }, [wordInView, wordControls]);

  const words = [
    "We",
    "Make",
    "it",
    "Easy",
    "to",
    "Connect",
    "With ",
    "Users",
    "On",
    "Every",
    "Platform",
  ];
  //next content
  const stepControls = useAnimation();
  const [stepRef, stepInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (stepInView) stepControls.start("visible");
  }, [stepInView, stepControls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };
  //next content
  const floatingRef = useRef(null);
  const isFloatingInView = useInView(floatingRef, {
    once: true,
    threshold: 0.3,
  });

  const bounce = (delay = 0) => ({
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 2 + delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  });
  //next content
  const [inspireRef, isInspireVisible] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  //next content
  const fade = {
    hidden: { opacity: 0, y: 40 },
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
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const cards = [
    {
      title: "Ahil Fitness Park",
      desc: `Delivered a performance-driven website with live class scheduling, membership plans, and integrated social proof — attracting 3x more gym sign-ups.`,
      image: client2,
    },
    {
      title: "Selvam Photography",
      desc: `Designed a clean, elegant portfolio with fast-loading galleries and client proofing tools, elevating brand image and doubling client inquiries.`,
      image: client3,
    },
  ];
  //next content
  const fade1 = {
    hidden: { opacity: 0, y: 40 },
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
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
  const features = [
    {
      title: "Creative + Tech",
      desc: "We fuse modern design with cutting edge technology to craft digital experiences and captivate & convert.",
    },
    {
      title: "Client-Centric Approach",
      desc: "Our solutions are tailored around your business goals — not just features.",
    },
    {
      title: "Reliable Support",
      desc: "From planning to post-launch support, we stay with you every step of the way to ensure success.",
    },
  ];

  //Email JS
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a6q2gos", // your service id
        "template_8l72tga", // your template id
        form.current,
        {
          publicKey: "1FZyQg0KxkmK4YuZ6",
        }, // your public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message.");
        },
      );
  };

  if (loading) {
    return (
      <div className="h-[100vh] w-full bg-black flex items-center justify-center">
        <div className="relative flex items-center justify-center w-24 h-24">
          <div className="absolute w-full h-full rounded-full border-4 border-t-transparent border-emerald-500 animate-spin"></div>
          <div className="text-emerald-300 text-sm font-semibold tracking-wider uppercase">
            Loading
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      {/* Hero section */}
      <div className="relative w-full min-h-screen bg-black flex flex-col justify-between overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://ik.imagekit.io/zorotech/Zoro-tech/17087-278405152.mp4"
              type="video/mp4"
            />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-20 flex flex-col justify-center flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-12 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight max-w-4xl">
            Empowering Brands to Lead in the Digital World
          </h1>

          <p className="mt-4 md:mt-6 text-gray-200 text-base md:text-lg max-w-2xl leading-relaxed">
            We build performance-driven digital solutions that combine
            strategy, creativity, and technology.
          </p>

          <div className="mt-6 md:mt-8">
            <button className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-medium shadow-lg hover:bg-gray-200 transition">
              Explore Our Portfolio
            </button>
          </div>

          {/* Google Badges */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-12">
            {/* Rating */}
            <div className="flex items-center gap-3 sm:gap-4 border border-white/40 rounded-lg px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-md w-full sm:w-auto">
              <div className="text-4xl text-[#4285F4]">
                <img
                  src="/google.png"
                  alt="Google Partner"
                  className="h-10 md:h-12 w-auto"
                />
              </div>
              <div>
                <h5 className="text-sm md:text-base text-white">Google Rating</h5>
                <div className="flex items-center gap-2 mt-0.5 md:mt-1">
                  <span className="text-white font-bold text-sm md:text-base">4.9</span>
                  <div className="flex text-yellow-400 text-sm md:text-base">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Partner */}
            <div className="flex items-center gap-3 sm:gap-4 border border-white/40 rounded-lg px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-md w-full sm:w-auto">
              <div className="text-4xl text-[#4285F4]">
                <img
                  src="/google.png"
                  alt="Google Partner"
                  className="h-10 md:h-12 w-auto"
                />
              </div>
              <div>
                <h4 className="text-sm md:text-base text-white">Certified</h4>
                <p className="text-white text-xs md:text-sm tracking-wide">PARTNER</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Brands - Bottom Section */}
        <div className="relative z-20 w-full px-6 md:px-12 pb-10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl text-white flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3">
              <span className="Daryr text-5xl md:text-7xl">Trusted by </span>
              <span className="text-red-500 font-medium">Leading Brands</span>
            </h2>

            <div className="grid grid-cols-3 gap-4 md:gap-8 items-center justify-center mt-6">
              <img
                src="https://ik.imagekit.io/zorotech/Zoro-tech/kola-google.png"
                alt="Google Logo"
                className="h-6 sm:h-8 md:h-10 mx-auto object-contain"
              />
              <img
                src="https://ik.imagekit.io/zorotech/Zoro-tech/linkedinlogo.png"
                alt="LinkedIn Logo"
                className="h-6 sm:h-8 md:h-10 mx-auto object-contain"
              />
              <img
                src="https://ik.imagekit.io/zorotech/Zoro-tech/logo_nsdc-removebg-preview.png"
                alt="NSDC Logo"
                className="h-10 sm:h-12 md:h-16 mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Leading brands */}
      <div className="w-full bg-gray-200 py-10 px-4 md:px-6 flex justify-center">
        <div className="max-w-6xl w-full bg-gray-800 rounded-2xl p-4 md:p-6 grid md:grid-cols-2 gap-6">
          {/* Left Card */}
          <div className="bg-gray-100 rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-md">
            <p className="text-gray-600 text-base md:text-lg">Leads Generated</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">104,585+</h2>

            <p className="text-gray-500 mt-3 italic text-sm md:text-base">From</p>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 text-gray-700 font-medium text-sm md:text-base">
              <span className="px-3 py-1 bg-gray-200 rounded-md">Meta</span>
              <span className="px-3 py-1 bg-gray-200 rounded-md">LinkedIn</span>
              <span className="px-3 py-1 bg-gray-200 rounded-md">Google</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-100 rounded-xl p-5 md:p-6 shadow-md">
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm md:text-base"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone No"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm md:text-base"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm md:text-base"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm md:text-base"
              />

              <button
                type="submit"
                className="w-full bg-gray-700 hover:bg-gray-900 text-white font-semibold py-3 rounded-lg transition text-sm md:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Brand section */}
      <div>
        <a ref={ref} className="mt-16 flex justify-center">
          <h2 className="text-center text-4xl leading-tight font-medium">
            {heading.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate={controls}
                variants={letterAnimation}
                className={char === " " ? "inline-block w-2" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </a>

        <div className="overflow-hidden py-10 w-[90%] md:w-[80%] mx-auto">
          <motion.div
            className="flex gap-10 md:gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                className="w-24 md:w-28 h-24 md:h-28 flex items-center justify-center rounded-xl border border-gray-300 bg-white/10 backdrop-blur-md opacity-50 hover:opacity-100 transition-opacity duration-500 shadow-md"
                whileHover={{ scale: 1.1 }}
                style={{
                  transform: `perspective(800px) rotateX(360deg) rotateY(${
                    index % 2 === 0 ? 5 : -5
                  }deg)`,
                }}
              >
                <img
                  src={logo}
                  alt={`brand-${index}`}
                  className="w-full h-[50px] md:h-[55px] object-contain"
                  // loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-16 mx-auto flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            <FaHandshake className="text-xl md:text-2xl" />
            Become Our Partner
          </motion.button>
        </div>
      </div>

      {/* Content section */}
      <section
        ref={wordRef}
        className="py-14 px-4 md:px-6 bg-white text-center overflow-hidden"
      >
        {/* Word-by-word heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold r leading-tight mb-6 text-gray-900 flex flex-wrap justify-center gap-2">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial="hidden"
              animate={wordControls}
              custom={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.07,
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                  },
                }),
              }}
            >
              <h2> {word}</h2>
            </motion.span>
          ))}
        </h2>

        {/* Paragraph */}
        <motion.p
          className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={wordControls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: words.length * 0.07 + 0.2,
                type: "spring",
                stiffness: 70,
                damping: 10,
              },
            },
          }}
        >
          We strictly follow the responsiveness rule and make your website 100%
          responsive to use on all the platforms available and accessible to all
          your clients. Looking for a new website, let us show you designs
          first. No Contract.
        </motion.p>
      </section>

      <section
        ref={stepRef}
        className="bg-gray-50 py-14 px-4 md:px-6 text-center"
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          variants={fadeUp}
          initial="hidden"
          animate={stepControls}
          custom={0}
        >
          <h2>We Boost Digital Presence</h2>
        </motion.h2>
        <p className=" text-l sm:text-xl  max-w-3xl  mx-auto mb-12 text-center">
          We provide top-notch digital marketing services that drive results,
          helping companies grow and succeed online. We build websites, mobile
          applications, social media profiles, and other online tools to help
          your business reach customers, gain more followers, get more leads,
          and more business.
        </p>

        {/* Step Cards */}
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((step, i) => (
            <motion.div
              key={step}
              className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-200"
              variants={fadeUp}
              initial="hidden"
              animate={stepControls}
              custom={i + 1}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-lime-600 text-emerald-500 rounded-full text-lg font-semibold">
                  <h3>{step}</h3>
                </span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                {step === 1 && "Choose a layout that fits your brand"}
                {step === 2 &&
                  "Customize content, visuals, and components effortlessly"}
                {step === 3 &&
                  "Connect your domain and launch your site instantly"}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        ref={floatingRef}
        className="py-14 px-4 md:px-6 bg-white overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isFloatingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10"
        >
          {/* Left Image with floating cards */}
          <div className="relative w-full md:w-[600px] h-[280px] sm:h-[320px] md:h-[380px] bg-gray-100 rounded-t-2xl shadow-lg border border-gray-300 overflow-hidden">
            <div className="bg-white px-4 py-2 border-b border-gray-300 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>

            <img
              src={office4}
              alt="Website Screenshot"
              className="w-full h-full object-cover"
              // loading="lazy"
            />

            {/* Floating Card 1 */}
            <motion.div
              style={{ willChange: "transform" }}
              {...bounce(0)}
              className="absolute top-6 left-4 sm:left-8 w-40 sm:w-52 h-32 bg-white shadow-md rounded-lg p-2 z-10"
            >
              <h3 className="text-sm font-semibold">Section-1</h3>
              <img
                src={office3}
                alt="Section Visual"
                className="mt-2 h-20 w-full object-cover rounded"
                // loading="lazy"
              />
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              style={{ willChange: "transform" }}
              {...bounce(0.5)}
              className="absolute top-24 sm:top-28 left-40 sm:left-60 w-40 sm:w-52 h-32 bg-white shadow-md rounded-lg p-2 z-20"
            >
              <p className="text-sm font-semibold">Pay on the Go</p>
              <img
                src={office2}
                alt="Section Visual"
                className="mt-2 h-20 w-full object-cover rounded"
                // loading="lazy"
              />
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              style={{ willChange: "transform" }}
              {...bounce(1)}
              className="absolute bottom-6 left-12 sm:left-20 w-40 sm:w-52 h-32 bg-white shadow-md rounded-lg p-2 z-10"
            >
              <p className="text-sm font-semibold">Tech Features</p>
              <img
                src={office1}
                alt="Section Visual"
                className="mt-2 h-20 w-full object-cover rounded"
                // loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isFloatingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Sections
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Choose from 190+ professionaly crofted template-our signature
              sections-to instantly give your website,a stunning look
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section
        ref={inspireRef}
        className="py-14 px-4 md:px-6 bg-gray-50 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInspireVisible ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            }}
            className="max-w-md text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Built for Impact, Designed to Inspire
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Every pixel we craft serves a purpose — to elevate your digital
              presence. Whether it’s a sleek portfolio, dynamic dashboard, or an
              engaging e-commerce site, Zoro-Tech empowers you with experiences
              that drive results.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInspireVisible ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            }}
            className="w-full md:w-[580px] h-[320px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <img
              src={office5}
              alt="Zoro-Tech Teamwork"
              className="w-full h-full object-cover"
              // loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* <ClientsSection /> */}

      <section
        ref={ref2}
        className="bg-gradient-to-b from-white to-emerald-50 py-16 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={fade1}
            custom={0}
          >
            <h2>Why Choose Zoro-Tech?</h2>
          </motion.h2>
          <motion.p
            className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto mb-12"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fade1}
            custom={1}
          >
            We're not just a tech team — we're your digital growth partner. From
            startups to enterprise-level businesses, we deliver scalable,
            custom-built solutions that focus on performance, brand identity,
            and future-readiness.
          </motion.p>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-md p-6 rounded-xl border border-gray-200"
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={fade1}
                custom={i + 2}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-emerald-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
