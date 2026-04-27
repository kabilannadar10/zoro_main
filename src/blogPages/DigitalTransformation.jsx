import React, { useEffect } from "react";
import DigitalTransformationImg from "../assets/DigitalTransformation.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DigitalTransformation = () => {
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
    <>
      <div className="mt-20 md:mt-32 px-6 py-16 max-w-5xl mx-auto bg-white text-gray-800">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-6 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          5G to 6G: The Next Leap in Digital Transformation
        </motion.h1>

        <motion.img
          src={DigitalTransformationImg}
          alt="Google Gemini"
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
            As the world continues to race toward digital excellence, one
            innovation stands out as a true game-changer — the evolution from 5G
            to 6G. While 5G has already transformed industries with
            lightning-fast connectivity and low latency, 6G promises to push the
            boundaries of what’s possible, creating an era of hyperconnectivity,
            intelligence, and immersive digital experiences. The transition
            isn’t just about speed — it’s about redefining how humans, machines,
            and data interact. In 2025 and beyond, 6G is set to revolutionize
            communication, business, healthcare, and the very fabric of everyday
            life.
          </p>
          <h2 className="text-xl font-semibold text-emerald-600">
            1. From 5G to 6G: What’s Changing?
          </h2>
          <p>
            5G introduced us to faster downloads, real-time streaming, and
            powerful IoT integration. But 6G takes things further — it’s
            expected to be up to 100 times faster than 5G, with data rates
            reaching 1 terabit per second (Tbps) and latency as low as 1
            microsecond. What does that mean in simple terms? Imagine
            downloading an entire 4K movie in less than a second, or controlling
            a self- driving car with zero delay. 6G won’t just connect devices —
            it will connect intelligence, enabling real-time communication
            between people, machines, and digital environments.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            2. The Rise of the Intelligent Internet
          </h2>
          <p>
            6G will integrate artificial intelligence (AI) and machine learning
            (ML) directly into its infrastructure. Instead of just carrying
            data, 6G networks will analyze, optimize, and make decisions in real
            time. For businesses, this means a network that doesn’t just connect
            — it thinks. Manufacturing systems will self-correct based on data
            patterns, healthcare devices will predict issues before they occur,
            and logistics systems will reroute deliveries instantly to avoid
            delays. In short, 6G will make the Internet context-aware, driving
            automation to unprecedented levels.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            3. Holographic Communication and the Metaverse
          </h2>
          <p>
            If 5G made video calls seamless, 6G will make holographic
            communication a reality. With ultra-high bandwidth and low latency,
            6G will enable real-time 3D interactions, allowing people to appear
            virtually anywhere — not as flat screens, but as lifelike holograms.
            This technology will also power the next generation of the
            Metaverse, where virtual and physical realities merge seamlessly.
            From remote surgery and immersive education to global business
            meetings conducted in fully virtual environments, 6G will make
            “distance” irrelevant.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            4. Expanding the Edge: Ultra-Connected IoT
          </h2>
          <p>
            The Internet of Things (IoT) will expand exponentially under 6G.
            With faster connectivity and improved efficiency, billions of
            sensors, wearables, drones, and machines will work together in real
            time. For industries, this means smarter factories, predictive
            maintenance, and hyper- personalized customer experiences. Cities
            will evolve into smart ecosystems, where traffic, energy, and public
            safety systems interact intelligently to improve urban living. 6G’s
            massive machine-type communication will be the foundation of a truly
            connected planet.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            5. Sustainable and Energy-Efficient Networks
          </h2>
          <p>
            Sustainability is a key focus for 6G development. Future networks
            aim to reduce energy consumption through AI-driven resource
            management and energy-efficient antennas. As data demand grows, so
            does the environmental impact of network infrastructure. 6G seeks to
            balance digital growth with green innovation — using smart power
            allocation and renewable energy integration to ensure a cleaner,
            more responsible digital future.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            6. Challenges and Opportunities Ahead
          </h2>
          <p>
            The road to 6G won’t be without hurdles. Building this
            next-generation infrastructure requires massive investment, global
            cooperation, and new security frameworks. Privacy, data management,
            and equitable access will remain pressing concerns. However, the
            opportunities are extraordinary. Countries and companies investing
            in 6G research today are shaping the backbone of tomorrow’s digital
            economy — one where AI, quantum computing, and real-time data drive
            innovation.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            7. The Human Impact: Beyond Technology
          </h2>
          <p>
            At its core, the leap from 5G to 6G isn’t just about faster speeds —
            it’s about empowerment. It’s about creating technologies that
            enhance human capabilities, foster inclusivity, and bridge the
            digital divide. Education, healthcare, and communication will reach
            even the most remote corners of the world. Farmers will access smart
            analytics in rural areas, students will learn through immersive VR
            classrooms, and patients will receive expert care regardless of
            geography.
          </p>

          <hr className="my-6 border-emerald-300" />

          <h2 className="text-xl font-semibold text-emerald-600">
            Final Thoughts
          </h2>

          <p className="font-semibold text-gray-700">
            The transition from 5G to 6G marks not just an upgrade in
            connectivity but a revolution in human progress. As the lines
            between the physical and digital worlds blur, 6G will unlock
            possibilities once limited to science fiction — intelligent systems,
            holographic worlds, and global collaboration beyond barriers.
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
    </>
  );
};

export default DigitalTransformation;
