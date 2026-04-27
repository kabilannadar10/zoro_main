import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function GoogleVsMeta() {
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
        Google Ads vs Meta Ads: What Works Better in India?
      </motion.h1>

      <motion.img
        src="https://digitalwheel.in/wp-content/uploads/2025/04/DIGITAL-WHEEL-2.jpg"
        alt="Google Ads vs Meta Ads"
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
          Advertising is no longer a one-size-fits-all game. In the Indian
          digital space, **Google Ads** and **Meta Ads (Facebook & Instagram)**
          both dominate, but they serve different objectives.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
           Google Ads = High Intent
        </h2>
        <p>
          Google Ads capture users when they actively search for something
          (like “buy AC online”). This makes it perfect for **bottom-funnel
          buyers** and high-conversion services like real estate, software, or
          local businesses.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
           Meta Ads = Disruption & Awareness
        </h2>
        <p>
          Meta Ads show up while users scroll Instagram or Facebook. It’s
          **interruption-based**, so it's best for **impulse-driven products**
          like fashion, beauty, food delivery, etc.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
           Tier 2 & 3 Cities: Meta Wins
        </h2>
        <p>
          In smaller Indian cities, users scroll more and search less.
          Instagram Reels + Facebook feed ads convert better here than Google
          search ads.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
           Budget Split Tip
        </h2>
        <p>
          Combine both. Spend **60% on Meta** for reach + **40% on Google** for
          bottom-funnel leads. For service-based industries, reverse the ratio.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
           Which Has Better ROI?
        </h2>
        <p>
          Depends on your goal. Google gives better **lead quality**, Meta gives
          better **volume** and **brand engagement**. Test for 30 days and
          compare CPC, CTR, and conversion cost.
        </p>

        <hr className="my-6 border-emerald-300" />

        <p className="font-semibold text-gray-700">
          Want expert help to run ads that convert? Zoro-Tech runs both Meta and
          Google ad campaigns for maximum ROI.
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

export default GoogleVsMeta;