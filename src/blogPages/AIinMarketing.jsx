import React, { useEffect } from "react";
import AIinMarketingImg from "../assets/AIinMarketingImg.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AIinMarketing = () => {
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
          AI in Marketing: How Smart Tools Are Changing the Game in 2025
        </motion.h1>

        <motion.img
          src={AIinMarketingImg}
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
            In 2025, AI has officially moved from “future tech” to an everyday
            marketing partner. Brands across every industry—small shops,
            startups, agencies, and global companies—are leaning on AI to work
            smarter, move faster, and understand customers on a deeper, more
            human level. But the real magic isn’t just automation. It’s the way
            AI is helping marketers think clearer, create better, and connect
            with audiences in a more personalised, respectful way.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            Today’s marketing landscape is noisy:
          </h2>
          <p>
            Attention spans are shrinking, platforms are crowded, and content
            fatigue is real. That’s exactly where AI steps in. Modern AI tools
            don’t just crunch data—they interpret behaviour, predict trends, and
            help businesses make decisions backed by real insights. For example,
            instead of guessing what your audience wants to see, AI analyses
            browsing habits, past behavior, and engagement patterns to suggest
            exactly what content, offer, or message will work best. This shift
            means brands spend less time on trial-and-error and more time
            executing strategies that actually convert.
          </p>

          <h3 className="text-m font-semibold text-emerald-600">
            1. Creativity has also been redefined:
          </h3>

          <p>
            AI isn’t replacing creators—it’s boosting them. Tools now generate
            content outlines, caption ideas, blog drafts, ad variations, and
            even video concepts in seconds. For marketers, this removes the
            “blank page struggle” and frees up more time for refining,
            storytelling, and adding personality. In fact, humanised creativity
            backed by AI data is becoming the winning formula in 2025. The most
            successful brands are the ones who use AI for speed but keep the
            human touch for connection.
          </p>

          <h3 className="text-m font-semibold text-emerald-600">
            2. Personalisation has reached new heights too:
          </h3>
          <p>
            {" "}
            Customers expect brands to understand their preferences without
            being intrusive. AI enables this balance. From dynamic website
            content to personalised email flows to AI-powered chatbots that
            sound more like friendly assistants than robots, the experience is
            becoming smoother and more relevant. When done right, this builds
            trust—something money can’t buy.
          </p>

          <h3 className="text-m font-semibold text-emerald-600">
            3. Performance optimisation is another area where AI shines:
          </h3>
          <p>
            {" "}
            Tools now monitor campaigns in real time, automatically adjusting
            bids, creatives, and targeting. If an ad is underperforming, AI
            fixes it before budgets are wasted. If a keyword trend spikes, AI
            alerts marketers instantly. This agility makes campaigns more
            profitable and marketing teams more confident.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            4. But the biggest advantage? AI makes marketing accessible:
          </h2>
          <p>
            {" "}
            Small businesses—who once struggled with limited budgets—can now
            compete with bigger brands. With affordable AI tools for design,
            SEO, analytics, and social media, even a one-person business can
            create professional-level marketing.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            5. Still, AI is not a magic button:
          </h2>
          <p>
            {" "}
            The brands winning in 2025 are the ones who blend technology with
            empathy. They use AI to understand people—but still tell authentic
            stories. They use automation—but still maintain a human voice. They
            scale operations—but still build genuine relationships.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            6. As we move deeper into 2025, one thing is clear:
          </h2>
          <p>
            {" "}
            AI isn’t replacing marketers. It’s empowering them. It’s giving them
            superpowers—speed, insight, and precision—while keeping creativity
            and emotion in human hands. And for any business ready to adapt, AI
            isn’t just a trend; it’s the competitive edge that will define the
            next generation of marketing success.
          </p>

          <hr className="my-6 border-emerald-300" />

          <h2 className="text-xl font-semibold text-emerald-600">
            Final Thoughts
          </h2>

          <p className="font-semibold text-gray-700">
            AI is no longer the “future” — it’s a real marketing partner today.
            It helps brands think clearer, move faster, and understand people
            more deeply. But its real strength goes far beyond automation or
            efficiency.
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

export default AIinMarketing;
