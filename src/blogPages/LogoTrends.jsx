import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LogoTrends() {
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
        Top Logo Design Trends for 2025
      </motion.h1>

      <motion.img
        src="https://amadine.com/assets/img/articles/logo-design-trends/logo-design-trends-2025@2x.jpg"
        alt="Logo Trends 2025"
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
          In 2025, logo design is no longer about static visuals — it's about
          creating a **brand identity that adapts, speaks, and evolves**. With
          consumer attention at an all-time low, brands must use their logos to
          express clarity, emotion, and modernity.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          1. Neo-Minimalism
        </h2>
        <p>
          Clean lines, fewer strokes, and negative space are the new normal.
          This trend helps your brand look ultra-modern while maintaining brand
          recall.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          2. AI-Powered Refinement
        </h2>
        <p>
          Many designers now use AI to enhance logo proportions, contrast, and
          geometry. The result? A perfect balance between human creativity and
          machine precision.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          3. Responsive + Dynamic Logos
        </h2>
        <p>
          Your logo needs to work on a smartwatch screen *and* a billboard.
          Dynamic variants help logos scale and animate based on screen and
          context.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          4. Vibrant Gradients & Liquid Effects
        </h2>
        <p>
          Gradients are making a big comeback — especially layered, fluid
          gradients that bring energy to flat logos.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          5. Sound-Reactive Logos
        </h2>
        <p>
          Audio branding is rising. Some brands are exploring logos that respond
          to sound or animate to brand theme music in digital environments.
        </p>

        <hr className="my-6 border-emerald-300" />

        <p className="font-semibold text-gray-700">
          Final Thought: If your logo looks the same on every medium, you’re
          behind. In 2025, a good logo isn’t just beautiful — it’s responsive,
          smart, and emotionally resonant.
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

export default LogoTrends;
