import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function DigitalVsTraditional() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

      const fadeIn = {
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
        <div className="mt-20 md:mt-32 px-4 py-16 max-w-5xl mx-auto">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Digital vs Traditional Marketing in Tier 2 Indian Cities
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        With the rise of mobile internet, even Tier 2 cities in India are embracing digital
        marketing — but traditional methods still have their place. Here's how smart
        businesses blend both for powerful results.
      </motion.p>

      <motion.div
        className="space-y-8 text-base text-gray-600 leading-relaxed"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <section>
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">
             Why Digital Is Booming in Tier 2 Cities
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Mobile & Internet Penetration:</strong> Affordable smartphones and data plans have made digital access easy for everyone.
            </li>
            <li>
              <strong>Changing Behaviors:</strong> Users are increasingly active on Instagram, Facebook, and YouTube — a goldmine for marketers.
            </li>
            <li>
              <strong>Cost-Efficient & Measurable:</strong> Unlike print ads, you can track, test, and optimize digital campaigns in real-time.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">
             Traditional Marketing Still Works
          </h2>
          <p>
            Despite digital growth, print ads, local events, and outdoor banners remain influential, especially among less digitally-savvy audiences or where internet infrastructure is weak.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">
             The Hybrid Approach Wins
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use print ads to send users to your website or social media page.</li>
            <li>Promote local events using both flyers and Instagram Reels.</li>
            <li>Combine radio ads with WhatsApp/SMS follow-ups.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">
             Unique Challenges & Big Opportunities
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Opportunities:</strong> Local influencers, regional content, and fresh audiences who are new to online shopping.
            </li>
            <li>
              <strong>Challenges:</strong> Poor internet speed, low digital literacy, and data privacy concerns.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">
             What’s Next in Marketing?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>AR/VR marketing & holographic ads are emerging trends.</li>
            <li>AI-based analytics and personalized offers will dominate.</li>
            <li>Smart city integrations will bring marketing closer to everyday life.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">
             Final Tips for Businesses
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Start small with platforms your local audience uses.</li>
            <li>Use regional languages and local influencers.</li>
            <li>Track performance and adjust constantly.</li>
            <li>Educate your audience using short videos or infographics.</li>
            <li>Always blend traditional and digital channels for reach + trust.</li>
          </ol>
        </section>

        <div className="pt-10 text-center">
          <p className="text-emerald-700 font-semibold">
            In Tier 2 cities, success lies in combining tradition with innovation.
            Digital builds speed. Traditional builds trust. Together, they build success.
          </p>
        </div>
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
  )
}

export default DigitalVsTraditional