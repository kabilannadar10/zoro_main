import React, { useEffect } from "react";
import SpatialComputingImg from "../assets/SpatialComputingImg.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SpatialComputing = () => {
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
          What Is Spatial Computing and Why Everyone’s Talking About It in 2025
        </motion.h1>

        <motion.img
          src={SpatialComputingImg}
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
            Technology has always reshaped how we interact with the world — from
            touchscreens to voice assistants, and now, spatial computing is
            taking us into the next era. In 2025, spatial computing has become
            one of the most transformative trends, blurring the boundaries
            between the digital and physical worlds. But what exactly is it, and
            why is everyone talking about it?
          </p>
          <h2 className="text-xl font-semibold text-emerald-600">
            Understanding Spatial Computing
          </h2>
          <p>
            Spatial computing is the seamless integration of the physical and
            digital worlds through advanced technologies like augmented reality
            (AR), virtual reality (VR), mixed reality (MR), sensors, and
            artificial intelligence (AI). It allows computers to “understand”
            the space around us — including objects, movement, and even human
            gestures — to interact naturally within real environments. Think of
            it as computing that doesn’t live on your screen anymore. Instead,
            it surrounds you. It’s when your AR glasses overlay directions on
            the real road, your virtual meeting feels like everyone’s sitting at
            the same table, or your architect designs a building you can walk
            through before it’s even built.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            Why Spatial Computing Matters in 2025
          </h2>
          <p>
            In 2025, spatial computing isn’t just a buzzword — it’s a
            foundational technology driving innovation across industries. Major
            players like Apple, Meta, Microsoft, and Google have invested
            billions into developing spatial platforms, while startups are
            creating tools that redefine digital experiences.
          </p>
          <p className="font-semibold">
            Here’s why the world is paying attention:
          </p>
          <h3 className="text-m font-semibold text-emerald-600">
            1. The Rise of Spatial Devices:
          </h3>
          <p>
            Apple Vision Pro and other spatial headsets have transformed how
            people work, play, and create. These devices allow users to interact
            with 3D digital environments using their hands, eyes, and voice — no
            screens required.
          </p>
          <h3 className="text-m font-semibold text-emerald-600">
            2. A New Era for Work and Collaboration:
          </h3>
          <p>
            Remote and hybrid work are evolving beyond video calls. Spatial
            computing enables immersive virtual offices where coworkers can
            collaborate in shared 3D spaces, brainstorm on virtual whiteboards,
            and interact with realistic avatars.
          </p>
          <h3 className="text-m font-semibold text-emerald-600">
            3. Revolutionizing Industries:
          </h3>
          <ul className="list-disc pl-6">
            <li>
              <b>Healthcare:</b> Surgeons use 3D holographic models for
              precision surgeries.
            </li>
            <li>
              <b>Education:</b> Students explore the solar system or human
              anatomy in immersive 3D.
            </li>
            <li>
              <b>Retail:</b> Customers “try before they buy” in virtual stores.
            </li>
            <li>
              <b>Real Estate:</b> Buyers tour properties virtually with
              real-world accuracy.
            </li>
          </ul>

          <h3 className="text-m font-semibold text-emerald-600">
            4. A Gateway to the Metaverse and Beyond:
          </h3>
          <p>
            While the “metaverse” buzz has cooled, spatial computing is quietly
            powering its evolution. It enables persistent, shared environments
            where digital and physical realities coexist — a practical,
            business-focused version of the metaverse.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            How It Works Behind the Scenes
          </h2>
          <p className="font-semibold">
            Spatial computing relies on a combination of cutting-edge
            technologies:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Sensors and Cameras:</strong> Capture real-world data like
              depth, movement, and gestures.
            </li>
            <li>
              <strong>AI and Machine Learning:</strong> Interpret that data to
              understand human behavior and spatial relationships.
            </li>
            <li>
              3D Mapping and Rendering: Create lifelike digital environments
              that align with physical space.
            </li>
            <li>
              <strong>Cloud Computing:</strong> Stores and processes vast
              spatial data in real time.
            </li>
          </ul>
          <p>
            This ecosystem transforms static computing into context-aware
            experiences that adapt to your environment.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            The Human Impact
          </h2>

          <p>
            What makes spatial computing so powerful isn’t just the technology —
            it’s the human experience. It changes how we feel technology.
            Instead of staring at a screen, we interact with data naturally — by
            looking, touching, and moving. It’s intuitive, emotional, and
            immersive. Imagine designing a product in mid-air, attending a
            concert from your living room, or learning history by walking
            through ancient civilizations. These experiences are no longer
            sci-fi; they’re everyday possibilities.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            Looking Ahead
          </h2>
          <p>
            By 2030, spatial computing could become as common as smartphones
            today. As hardware becomes lighter and more affordable, and as 5G
            and edge computing mature, spatial computing will redefine how we
            work, learn, and connect. In essence, spatial computing is not about
            replacing reality — it’s about enhancing it. It’s where the digital
            world meets the human experience, creating a future where technology
            truly feels alive around us.
          </p>

          <hr className="my-6 border-emerald-300" />

          <h2 className="text-xl font-semibold text-emerald-600">
            Final Thoughts
          </h2>

          <p className="font-semibold text-gray-700">
            Spatial computing represents a major leap forward — one that turns
            imagination into interaction. In 2025, it’s not just about what we
            see on a screen, but what surrounds us, moves with us, and responds
            to us. The future is not just digital — it’s spatial.
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

export default SpatialComputing;
