import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EdgeComputingImg from "../assets/EdgeComputingImg.png";

const EdgeComputing = () => {
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
          Why Edge Computing Is the Next Big Thing in 2025
        </motion.h1>

        <motion.img
          src={EdgeComputingImg}
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
            In the ever-evolving digital world, where speed, efficiency, and
            data intelligence drive success, a silent revolution is taking shape
            — Edge Computing. Once a niche concept, it has now become one of the
            most transformative technologies of 2025. As businesses, cities, and
            everyday devices grow smarter and more connected, edge computing is
            redefining how we process information and power innovation. Simply
            put, edge computing brings data processing closer to where it’s
            generated — the “edge” of the network — rather than relying on
            distant cloud servers. This shift is helping organizations unlock
            faster performance, lower costs, stronger security, and real-time
            decision-making. Let’s explore why edge computing is the next big
            thing in 2025 and how it’s shaping our digital future.
          </p>
          <h2 className="text-xl font-semibold text-emerald-600">
            1. The Speed Revolution: Real-Time Everything
          </h2>
          <p>
            In 2025, milliseconds matter. From autonomous vehicles to smart
            healthcare and industrial IoT, every second counts. Traditional
            cloud systems often struggle with latency — the delay between
            sending and receiving data. Edge computing solves this problem by
            processing data locally, closer to the source. Imagine a
            self-driving car waiting for cloud instructions to avoid an obstacle
            — even a tiny delay could be disastrous. With edge computing, those
            decisions happen instantly, ensuring safety, efficiency, and
            reliability. This speed advantage is why industries are rapidly
            shifting toward edge-based architectures.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            2. Powering the Internet of Things (IoT)
          </h2>
          <p>
            With billions of smart devices now connected — from factory sensors
            to smart home appliances — data generation has exploded. Sending all
            that data to centralized clouds isn’t practical or efficient. Edge
            computing enables IoT devices to analyze and act on data in real
            time, without relying entirely on the internet. In factories, this
            means machines can predict failures before they happen. In
            agriculture, sensors can optimize irrigation instantly. Across
            industries, edge computing transforms raw data into actionable
            intelligence at lightning speed.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            3. Better Data Privacy and Security
          </h2>
          <p>
            In a world where data breaches and cyber threats are constant
            concerns, edge computing offers a major advantage: localized data
            control. Instead of sending sensitive information to remote servers,
            much of it is processed at the source — reducing exposure and
            vulnerability. For businesses handling personal data — such as
            healthcare, finance, or smart cities — this decentralized approach
            enhances security, compliance, and customer trust. In 2025,
            protecting data where it’s created is not just smart — it’s
            essential.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            4. Efficiency That Cuts Costs
          </h2>
          <p>
            By reducing the need for constant cloud communication and bandwidth,
            edge computing significantly cuts operational costs. Companies save
            on data transfer fees, reduce energy consumption, and improve
            overall network efficiency. For startups and enterprises alike, edge
            computing is more than just a technological upgrade — it’s an
            economic advantage. It allows them to scale faster, run leaner, and
            operate more sustainably.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            5. Empowering Artificial Intelligence at the Edge
          </h2>
          <p>
            Artificial Intelligence and Edge Computing are the perfect match. In
            2025, AI at the edge enables devices to learn, predict, and respond
            autonomously without needing a cloud connection. For example, smart
            cameras can detect anomalies instantly, and medical wearables can
            analyze health data in real time. This decentralization of
            intelligence makes systems faster, smarter, and more resilient — a
            huge leap toward the next era of automation and self-learning
            technologies.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            6. The Backbone of Smart Cities and 5G
          </h2>
          <p>
            The rollout of 5G networks across the globe is supercharging edge
            computing adoption. With ultra-low latency and massive data
            throughput, 5G enables seamless communication between edge devices
            and networks. From traffic management to public safety and energy
            optimization, edge computing and 5G together form the digital
            foundation of smart cities. In India and beyond, governments and
            businesses are already integrating edge solutions to enhance urban
            living and sustainability.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            7. Sustainability Through Smarter Computing
          </h2>
          <p>
            Edge computing isn’t just powerful — it’s sustainable. By processing
            data locally, it reduces the energy load on centralized data
            centers, cutting down carbon emissions. Combined with renewable
            energy and smart energy management systems, edge technology plays a
            key role in building an eco-friendly digital economy.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            8. The Human Side of Edge Computing
          </h2>
          <p>
            Behind all the tech jargon, the true power of edge computing lies in
            its human impact. It’s about enabling better healthcare through
            faster diagnoses, safer roads through autonomous systems, and
            smarter industries that reduce waste. Edge computing empowers people
            — from engineers to consumers — by making technology more
            responsive, reliable, and relevant to real-world needs.
          </p>

          <hr className="my-6 border-emerald-300" />

          <h2 className="text-xl font-semibold text-emerald-600">
            Final Thoughts
          </h2>

          <p className="font-semibold text-gray-700">
            As we step deeper into 2025, edge computing is not just an IT trend
            — it’s the next stage of digital transformation. It bridges the gap
            between data and action, cloud and reality, human and machine. The
            future belongs to those who understand that innovation doesn’t only
            happen in distant servers — it happens at the edge, where data meets
            decision, and technology meets life.
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

export default EdgeComputing;
