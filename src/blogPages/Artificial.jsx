import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArtificialImg from "../assets/image.png"


const Artificial = () => {
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
        How Artificial Intelligence Is Redefining Innovation in 2025
      </motion.h1>

      <motion.img
        src={ArtificialImg}
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
          In 2025, Artificial Intelligence (AI) is no longer a futuristic
          concept or a tech luxury — it has become the driving force behind
          global innovation. From startups to global enterprises, AI is
          reshaping how ideas are born, developed, and brought to life. It’s
          transforming industries, creating new opportunities, and redefining
          what it means to innovate. But this shift isn’t just about technology;
          it’s about empowering people to think, create, and solve problems in
          ways we never imagined before.{" "}
        </p>
        <h2 className="text-xl font-semibold text-emerald-600">
          1. From Automation to Imagination{" "}
        </h2>
        <p>
          The earliest uses of AI focused mainly on automation — doing
          repetitive tasks faster and cheaper. But in 2025, AI has evolved far
          beyond that. It’s now a creative collaborator. Businesses are using AI
          tools that can generate new product ideas, design marketing campaigns,
          compose music, write code, and even suggest business strategies. This
          blend of human creativity and machine intelligence is unlocking a new
          era of cocreation. AI doesn’t replace imagination; it amplifies it. It
          gives innovators the power to test, prototype, and refine ideas at
          unprecedented speed — turning what once took months into a matter of
          hours.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          2. Smarter Decision-Making at Every Level
        </h2>
        <p>
          One of AI’s most powerful abilities lies in data-driven insight. In
          2025, organizations are drowning in data — from customer behavior to
          market trends. AI systems can now analyze these massive datasets in
          real time, uncovering patterns that humans could easily miss. Imagine
          a business that knows exactly what its customers want — even before
          they do. That’s the kind of predictive intelligence AI delivers today.
          It’s helping companies reduce risks, improve product performance, and
          make more confident strategic decisions. In short, AI has become the
          brain behind business innovation.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          3. Revolutionizing Research and Development (R&D)
        </h2>
        <p>
          AI is accelerating research in ways that were once unimaginable.
          Pharmaceutical companies are using AI to identify new drug compounds
          in weeks rather than years. Engineers are designing smarter, more
          sustainable products using AI-driven simulations. Even in fields like
          agriculture and energy, AI is helping researchers find ecofriendly
          solutions faster than traditional R&D ever could. By turning complex
          data into actionable insights, AI shortens the innovation cycle —
          enabling continuous improvement and experimentation.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          4. Personalization as the New Innovation Frontier
        </h2>
        <p>
          Today’s consumers expect experiences tailored uniquely to them — and
          AI makes that possible. From personalized e-commerce recommendations
          to adaptive learning platforms and AI-powered marketing, customization
          is driving customer loyalty and engagement. In 2025, personalization
          isn’t just a marketing tactic; it’s a strategic innovation. Businesses
          that understand their customers deeply through AI insights are
          creating products and services that truly fit individual needs —
          setting a new benchmark for customer experience.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          5. Empowering Human Creativity
        </h2>
        <p>
          Contrary to the fear that AI will “replace humans,” it’s actually
          empowering them. By taking over repetitive tasks, AI frees human minds
          to focus on higher-level thinking, creativity, and empathy — the very
          qualities that make innovation truly meaningful. Teams that combine
          human emotion with machine precision are discovering new ways to solve
          old problems. Whether it’s in design, storytelling, or strategy, AI
          acts as an intelligent partner — one that never tires, always learns,
          and constantly inspires.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          6. Challenges and Ethical Reflections
        </h2>
        <p>
          Of course, with great innovation comes great responsibility. As AI
          becomes more influential, questions about ethics, transparency, and
          data privacy are taking center stage. Businesses in 2025 are not just
          racing to innovate — they’re also striving to innovate responsibly.
          True innovation today means building technology that benefits
          humanity, fosters trust, and promotes fairness. Companies leading the
          AI revolution are those that prioritize ethics as much as efficiency.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          7. The Future of Innovation Is Human + AI
        </h2>
        <p>
          AI is no longer about replacing human intelligence — it’s about
          augmenting it. The most successful organizations of 2025 are the ones
          that blend human creativity with AI precision. Together, they form a
          synergy that sparks ideas faster, executes them smarter, and delivers
          impact deeper than ever before. As we move forward, innovation will
          not be about what technology can do, but about what humans and
          machines can achieve together.
        </p>

        <hr className="my-6 border-emerald-300" />

        <h2 className="text-xl font-semibold text-emerald-600">
          Final Thoughts
        </h2>

        <p className="font-semibold text-gray-700">
          Artificial Intelligence is redefining the boundaries of innovation in
          2025. It’s helping businesses think smarter, act faster, and dream
          bigger. But the real magic happens when humans and AI collaborate —
          when creativity meets computation, and imagination meets intelligence.
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
};

export default Artificial;
