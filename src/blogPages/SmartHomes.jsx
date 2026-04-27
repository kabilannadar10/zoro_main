import React, { useEffect } from "react";
import SmartHomesImg from "../assets/SmartHomes.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SmartHomes = () => {
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
          IoT + Web3: How Smart Homes Are Getting Smarter in 2025
        </motion.h1>

        <motion.img
          src={SmartHomesImg}
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
            The concept of a “smart home” isn’t new — but in 2025, it’s evolving
            into something extraordinary. What once meant voice-controlled
            lights or app-connected thermostats has now transformed into
            autonomous, intelligent ecosystems powered by two groundbreaking
            technologies: the Internet of Things (IoT) and Web3. Together, IoT
            and Web3 are reshaping how we live, making our homes not only
            connected but also secure, private, and self-sustaining. This
            powerful combination is redefining comfort, convenience, and control
            — all while putting ownership back into the hands of homeowners.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            Understanding the Power of IoT and Web3
          </h2>

          <p className="font-semibold">
            Before diving into how homes are getting smarter, let’s break down
            the two forces driving this change:
          </p>

          <ul className="list-disc pl-6">
            <li>
              <b>IoT (Internet of Things):</b> A network of smart devices —
              sensors, appliances, and systems — that collect and exchange data
              in real time. Your fridge, thermostat, security camera, and
              washing machine all “talk” to each other, automating tasks to make
              life easier.
            </li>
            <li>
              <b>Web3:</b> The next evolution of the internet, powered by
              blockchain technology. It emphasizes decentralization, data
              ownership, and transparency. In a Web3-powered world, users — not
              corporations — control their data and digital identity.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-emerald-600">
            The Smart Home Revolution in 2025
          </h2>

          <p className="font-semibold">
            In 2025, IoT and Web3 have moved beyond convenience — they’ve become
            the foundation for intelligent living. Here’s how:
          </p>

          <h3 className="text-m font-semibold text-emerald-600">
            Decentralized Home Networks
          </h3>
          <p>
            Traditional smart homes rely on centralized servers, meaning your
            data often passes through third-party platforms. Web3 changes that
            by decentralizing control. Using blockchain and peer-to-peer
            systems, devices communicate securely without needing corporate
            intermediaries. Your home, your data — no middlemen.
          </p>
          <h3 className="text-m font-semibold text-emerald-600">
            Enhanced Privacy and Security
          </h3>
          <p>
            Privacy has been one of the biggest challenges in IoT. With Web3,
            devices use encrypted blockchain transactions to exchange data
            safely. Your smart doorbell or camera no longer sends footage to a
            cloud owned by a company — instead, it’s stored securely on
            decentralized networks only you control.
          </p>
          <h3 className="text-m font-semibold text-emerald-600">
            Smart Contracts for Automation
          </h3>
          <p>
            Imagine your smart home automatically paying the electric bill when
            energy consumption hits a set threshold. Smart contracts —
            self-executing code on the blockchain — make this possible. They
            trigger actions when certain conditions are met, automating home
            functions like energy management, maintenance schedules, or even
            renting out unused solar energy.
          </p>

          <h3 className="text-m font-semibold text-emerald-600">
            Energy Efficiency Through Tokenization
          </h3>
          <p>
            Homes in 2025 are not just smart — they’re sustainable. IoT sensors
            track energy usage, while Web3 tokens reward homeowners for
            conserving power. Some neighborhoods even run on decentralized
            energy grids where households trade excess solar energy through
            blockchain-based microtransactions.
          </p>

          <h3 className="text-m font-semibold text-emerald-600">
            Digital Identity for Devices
          </h3>
          <p>
            Every smart device now has a unique, verifiable identity on the
            blockchain. This ensures only authorized users — like you — can
            access and control your devices. It also makes device updates,
            repairs, and replacements far more secure and traceable.
          </p>
          <h3 className="text-m font-semibold text-emerald-600">
            The Human Side of Smart Living
          </h3>
          <p>
            While the tech behind IoT and Web3 sounds futuristic, its real power
            lies in human experience. Homes have become personal assistants,
            energy managers, and guardians — all at once. Imagine waking up to a
            house that already adjusted your room temperature, brewed your
            coffee, and prepared a morning report — all while protecting your
            data from corporate servers.
          </p>

          <ul className="list-disc pl-6">
            <li>More importantly, this technology is empowering people.</li>
            <li>
              Families gain peace of mind knowing their data isn’t being sold.
            </li>
            <li>
              Elderly residents benefit from connected healthcare devices that
              monitor their wellbeing safely.
            </li>
            <li>
              Environmentally conscious homeowners use Web3 tokens to offset
              carbon footprints and promote clean energy use.
            </li>
            <li>
              This is not just technology for comfort — it’s technology for
              care.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-emerald-600">
            Challenges on the Path Forward
          </h2>
          <p>
            Of course, merging IoT and Web3 isn’t without hurdles. Scalability,
            energy consumption of blockchain systems, and user adoption are
            still growing pains. Educating homeowners about managing digital
            wallets, tokens, and decentralized systems remains essential. But as
            infrastructure matures, these challenges are quickly being
            addressed. Lightweight blockchains, improved IoT standards, and
            user-friendly interfaces are making Web3-powered smart homes
            accessible to everyone.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            Looking Ahead: The Future of Connected Living
          </h2>

          <p>
            By 2030, experts predict over 25 billion connected devices worldwide
            — and most will integrate Web3 technologies for secure,
            decentralized communication. Smart homes will operate like digital
            ecosystems — where energy, data, and devices interact seamlessly,
            powered by AI and blockchain automation. The future of connected
            living won’t be controlled by tech giants — it will be owned by you.
          </p>

          <hr className="my-6 border-emerald-300" />

          <h2 className="text-xl font-semibold text-emerald-600">
            Final Thoughts
          </h2>

          <p className="font-semibold text-gray-700">
            The marriage of IoT and Web3 marks the beginning of a new era — one
            where homes don’t just respond, but think, adapt, and protect. In
            2025, your home isn’t just smart; it’s empowered. It knows your
            habits, optimizes your energy, guards your privacy, and rewards your
            sustainability — all while giving you total control.
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

export default SmartHomes;
