import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PostQuantumImg from "../assets/PostQuantum.png";

const PostQuantum = () => {
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
          Post-Quantum Computing: Is Your Business Ready for the Next Cyber
          Shift?
        </motion.h1>

        <motion.img
          src={PostQuantumImg}
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
            As we step deeper into 2025, the world of technology is standing on
            the edge of a monumental transformation — Post-Quantum Computing.
            While artificial intelligence and cloud computing have defined the
            last decade, the next one will be shaped by quantum power — a new
            era of computing that can solve problems beyond the reach of even
            the fastest supercomputers today. But with great power comes great
            responsibility. Quantum computing promises breakthroughs in science,
            finance, logistics, and medicine — yet it also poses a massive
            threat to cybersecurity as we know it. The question is no longer if
            this shift will happen, but whether your business is ready for it.
          </p>
          <h2 className="text-xl font-semibold text-emerald-600">
            1. The Quantum Leap Explained
          </h2>
          <p>
            Traditional computers, no matter how advanced, process data in bits
            — 0s and 1s. Quantum computers use qubits, which can exist as 0 and
            1 simultaneously thanks to the principles of quantum mechanics. This
            means they can perform incredibly complex calculations exponentially
            faster than classical machines. In simple terms, problems that would
            take current supercomputers years to solve could be cracked by a
            quantum system in mere minutes. This opens doors to innovations like
            faster drug discovery, advanced climate modeling, and
            hyper-efficient financial forecasting — but it also opens Pandora’s
            box for data security.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            2. The Cybersecurity Challenge: Breaking the Unbreakable
          </h2>
          <p>
            The encryption systems that protect your business today — from
            emails to banking transactions — rely on mathematical problems that
            are nearly impossible for current computers to solve. However, a
            powerful quantum computer could potentially break these encryptions
            in seconds. This shift is known as the “quantum threat.” Once
            quantum computing becomes mainstream, today’s standard encryption
            methods — RSA, ECC, and others — could become obsolete, exposing
            sensitive business data, financial systems, and even government
            networks to unprecedented risks.This is why the race toward
            post-quantum security has already begun.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            3. What Is Post-Quantum Computing?
          </h2>
          <p>
            Post-Quantum Computing refers to developing systems and
            cryptographic methods that can withstand attacks from quantum
            computers. It’s about building a cyber framework that’s
            quantum-resilient — ensuring data remains safe even in a future
            dominated by quantum processing. Leading organizations like NIST
            (National Institute of Standards and Technology) are already
            developing new encryption algorithms to protect against quantum
            attacks. In 2025, forward-thinking companies are beginning to adopt
            these “quantum-safe” systems — long before the quantum revolution
            fully arrives.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            4. How Businesses Are Preparing Today
          </h2>
          <h3 className="text-m font-semibold text-emerald-600">
            Smart businesses know that cybersecurity isn’t a switch — it’s a
            journey. In 2025, many are taking proactive steps toward quantum
            readiness:
          </h3>

          <ul className="list-disc pl-6">
            <li>
              Auditing current encryption systems to identify vulnerabilities.
            </li>
            <li>
              Adopting hybrid cryptography — combining classical and
              quantum-safe algorithms for layered protection.
            </li>
            <li>
              Training IT and cybersecurity teams on quantum-era risks and
              strategies.
            </li>
            <li>
              Partnering with cybersecurity firms specializing in quantum-safe
              technologies.
            </li>
            <li>
              These steps might sound futuristic, but they’re becoming essential
              for businesses that value trust, compliance, and long-term data
              security.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-emerald-600">
            5. The Business Benefits of Quantum Readiness
          </h2>
          <p>
            Preparing for post-quantum security isn’t just about defense — it’s
            about leadership. Companies that embrace this shift early gain a
            competitive edge in compliance, customer trust, and innovation
            readiness. Quantum preparedness signals that a business is
            forward-thinking, tech-resilient, and committed to safeguarding the
            future — qualities that matter deeply to clients and investors
            alike.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            6. The Human Element in a Quantum World
          </h2>
          <p>
            Beyond algorithms and encryption, there’s a human story here.
            Technology evolves, but trust remains the foundation of every
            business relationship. The transition to quantum computing isn’t
            about fear — it’s about foresight. It’s about leaders recognizing
            that innovation and responsibility must grow hand in hand. As one
            tech CEO put it, “Quantum computing won’t destroy security — it will
            redefine it.”
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            7. The Road Ahead: Adapt or Be Exposed
          </h2>
          <p>
            Quantum computing will not arrive overnight — but the clock is
            ticking. Experts predict that by the early 2030s, quantum computers
            capable of breaking current cryptography could become reality.
            Businesses that wait until then to act will find themselves
            dangerously exposed. The future will belong to those who prepare
            today — by adopting quantum-safe security, rethinking digital
            infrastructure, and building a culture of technological resilience.
          </p>

          <hr className="my-6 border-emerald-300" />

          <h2 className="text-xl font-semibold text-emerald-600">
            Final Thoughts
          </h2>

          <p className="font-semibold text-gray-700">
            Post-Quantum Computing is not just the next step in technology —
            it’s the next test of trust. It will separate businesses that adapt
            from those that collapse under the weight of change.
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

export default PostQuantum;
