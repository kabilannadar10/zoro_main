import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AIinTrading() {
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
        How AI is Transforming the Share Market & Trading
      </motion.h1>

      <motion.img
        src="https://imgs.search.brave.com/uIn7nJ5mnQzeihvvfOLmE5GX_vmN5sYwXAnMftNBL7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/eHMuY29tL3N0b3Jh/Z2UvYmxvZ3MvN2Uw/MjczZmMtYWQ0Yy00/OWI2LWFjZTctYTI1/OTZkMThmYjNkL2Fp/LXRyYWRpbmcud2Vi/cA"
        alt="AI in Stock Market"
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
          The Indian share market is no longer just about news tips and gut feelings. Today, <strong>Artificial Intelligence (AI)</strong> is playing a major role in how investors and traders make decisions — faster, smarter, and more accurately.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          1. What is AI Trading?
        </h2>
        <p>
          AI trading refers to using machine learning algorithms to analyze market data, identify patterns, and execute trades — often faster than any human can. It’s widely used in global stock markets, and Indian traders are catching up fast.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          2. How AI Helps in Stock Market Trading
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Predictive Analysis:</strong> AI models can predict stock trends by learning from years of data.</li>
          <li><strong>Sentiment Analysis:</strong> AI reads news, tweets, and public opinion to judge market mood.</li>
          <li><strong>High-Frequency Trading (HFT):</strong> Algorithms place multiple trades within milliseconds for micro-profits.</li>
          <li><strong>Portfolio Optimization:</strong> AI suggests how to diversify your investments for better returns and lower risks.</li>
        </ul>

        <h2 className="text-xl font-semibold text-emerald-600">
          3. Real-Life Use Cases
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Retail Traders:</strong> Use AI-powered apps like Upstox Pro or Zerodha Streak to create auto-trading strategies.</li>
          <li><strong>Brokerage Firms:</strong> Rely on AI for technical analysis, risk evaluation, and customer service bots.</li>
          <li><strong>Mutual Funds:</strong> Use machine learning to adjust fund performance in volatile markets.</li>
        </ul>

        <h2 className="text-xl font-semibold text-emerald-600">
          4. Benefits of AI in Trading
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reduces human bias and emotion-driven trades.</li>
          <li>Improves speed and accuracy of analysis.</li>
          <li>Can analyze massive data (news, price charts, indicators) instantly.</li>
          <li>Back-tests strategies before live trading.</li>
        </ul>

        <h2 className="text-xl font-semibold text-emerald-600">
          5. Caution: AI ≠ Guaranteed Profits
        </h2>
        <p>
          While AI improves efficiency, no system can predict markets with 100% accuracy. It's a powerful assistant, not a fortune teller. Traders must combine AI tools with knowledge, discipline, and proper risk management.
        </p>

        <hr className="my-6 border-emerald-300" />

        <h2 className="text-xl font-semibold text-emerald-600">
          Final Thought
        </h2>
        <p>
          The future of trading is smart, fast, and AI-driven. Indian investors who understand and adopt these tools early can gain a big edge — whether you're a full-time trader or part-time investor.
        </p>

        <p className="font-semibold text-gray-700">
          Curious to explore AI-based trading tools for your business or investments? Zoro-Tech can help you integrate smart solutions into your financial workflow.
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

export default AIinTrading;