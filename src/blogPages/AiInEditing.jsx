import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AIinEditing() {
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
        How AI is Changing the Game in Video & Photo Editing
      </motion.h1>

      <motion.img
        src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
        alt="AI in Editing"
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
          In the fast-paced world of content creation, <strong>AI is the new creative partner</strong>. Whether you're editing YouTube videos, making Instagram Reels, or creating professional photo shoots — AI-powered tools are now leading the trend.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          1. What Is AI Editing?
        </h2>
        <p>
          AI editing refers to using machine learning algorithms to automatically enhance, cut, stabilize, animate, or stylize media content — saving creators time and improving quality without needing complex skills.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          2. Popular AI Tools for Creators
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>CapCut AI:</strong> Auto-cuts, filters, and syncs music with reels or shorts in seconds.</li>
          <li><strong>Runway ML:</strong> Green screen removal, motion tracking, and AI-generated visuals.</li>
          <li><strong>Remove.bg:</strong> Instantly deletes backgrounds from photos with one click.</li>
          <li><strong>Descript:</strong> Turns text edits into video cuts — like editing a doc file.</li>
          <li><strong>Canva AI:</strong> Auto-suggests templates, styles, and AI-generated captions for Instagram posts and stories.</li>
        </ul>

        <h2 className="text-xl font-semibold text-emerald-600">
          3. Why AI Editing Is Trending in 2025
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Speed:</strong> Creators can produce more content, faster.</li>
          <li><strong>Accessibility:</strong> No need to master Adobe tools or complex software.</li>
          <li><strong>Cost-Saving:</strong> Reduces need for large editing teams or freelance editors.</li>
          <li><strong>Consistency:</strong> AI ensures uniform style and quality across platforms.</li>
        </ul>

        <h2 className="text-xl font-semibold text-emerald-600">
          4. Who Should Use AI Editing?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Instagram Influencers:</strong> To create quick reels with viral potential.</li>
          <li><strong>Startups & Brands:</strong> For promo videos and visual ads at scale.</li>
          <li><strong>Wedding & Event Photographers:</strong> For batch editing & skin smoothing.</li>
          <li><strong>Educators:</strong> To convert lectures into engaging video lessons.</li>
        </ul>

        <hr className="my-6 border-emerald-300" />

        <h2 className="text-xl font-semibold text-emerald-600">
          Final Thought
        </h2>
        <p>
          AI isn’t here to replace creativity — it’s here to enhance it. For creators and businesses alike, AI editing tools open the door to faster workflows, higher-quality content, and more creative freedom.
        </p>

        <p className="font-semibold text-gray-700">
          Want to create trending videos or stunning posts without hours of editing? Explore AI editing — and let your creativity focus on the idea, not the tools.
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

export default AIinEditing;