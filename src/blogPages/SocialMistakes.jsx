import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SocialMistakes() {
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
        Social Media Mistakes Indian Businesses Should Avoid
      </motion.h1>

      <motion.img
        src="https://cdn.kickcharge.com/new2023/wp-content/uploads/2023/10/17175618/july-2020-social-media-mistakes-to-avoid-2-1920x512.png"
        alt="Social Media Mistakes"
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
          Indian businesses often make avoidable social media mistakes that hinder their digital success. Here's what to avoid — and how to improve your online presence.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          1. Overlooking Customer Engagement
        </h2>
        <p>
          Treating social media like a one-way broadcast instead of a dialogue leads to poor connection. Businesses must listen, respond, and engage with followers actively.

        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          2. Inconsistent Branding Across Platforms
        </h2>
        <p>
          Without consistent visuals, tone, and message across Facebook, Instagram, LinkedIn, etc., businesses lose credibility. Brand recognition demands a unified look and voice.

        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          3. Ignoring or Mishandling Negative Feedback
        </h2>
        <p>
          Deleting or ignoring complaints worsens your reputation. Instead, address issues transparently and promptly to show customers that their satisfaction matters.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          4. Spreading or Failing to Correct Misinformation
        </h2>
        <p>
          Sharing wrong information — and not correcting it — damages trust. If you make a mistake, disclose it openly and update the content visibly and quickly.

        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          5. Neglecting Local Contexts and Culture
        </h2>
        <p>
          Ignoring India’s rich diversity in language, tradition, and user behavior leads to disconnect. Content must respect and reflect local values for relevance and impact.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          6. Failing to Integrate Multi-Channel Strategies
        </h2>
        <p>
          Relying on one platform limits growth. Combine social media with SMS, email, and other tools to ensure your message reaches the right audience.

        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          7. Not Monitoring or Moderating Content
        </h2>
        <p>
          Spammers, fake news, and toxic comments harm your brand. Businesses must implement strict content moderation to maintain a clean and safe brand environment.
        </p>

        <hr className="my-6 border-emerald-300" />

        <h2 className="text-xl font-semibold text-emerald-600">
          Actionable Best Practices
        </h2>
        <ul className="list-disc pl-6">
          <li>Maintain consistent branding across all platforms.</li>
          <li>Address negative feedback transparently and positively.</li>
          <li>Fact-check before posting; correct errors immediately.</li>
          <li>Adapt messaging to local language, values, and culture.</li>
          <li>Adopt multi-channel outreach strategies.</li>
          <li>Moderate your channels regularly and effectively.</li>
        </ul>

        <p className="font-semibold text-gray-700">
          Final Thought: Social media is a powerful tool — but only when used with intention, empathy, and local relevance. Avoid these mistakes and create content that truly connects.
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

export default SocialMistakes;