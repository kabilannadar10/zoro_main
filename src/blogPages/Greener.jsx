import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GreenerImg from "../assets/Greener.png";

const Greener = () => {
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
          Future of CleanTech: How India Is Powering a Greener Tomorrow
        </motion.h1>

        <motion.img
          src={GreenerImg}
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
            As the world races to combat climate change, India stands at a
            crucial turning point — where sustainability meets innovation. The
            rise of CleanTech (clean technology) in India is not just a trend;
            it’s a powerful movement shaping a greener, more responsible future.
            In 2025 and beyond, CleanTech is transforming the way India produces
            energy, manages waste, and powers industries — driving growth that’s
            both sustainable and inclusive.
          </p>
          <h2 className="text-xl font-semibold text-emerald-600">
            1. CleanTech: The New Engine of Growth
          </h2>
          <p>
            India’s CleanTech revolution isn’t just about protecting the planet
            — it’s about building an economy that thrives on sustainability.
            From renewable energy startups to green manufacturing and electric
            mobility, CleanTech is becoming one of India’s most promising
            sectors. The government’s “Mission LiFE (Lifestyle for Environment)”
            and ambitious goals of achieving net-zero emissions by 2070 are
            accelerating this change. Today, India ranks among the world’s top
            three renewable energy producers — a clear signal that green growth
            is no longer a distant dream but a developing reality.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            2. Solar Power: Lighting Up a Billion Lives
          </h2>
          <p>
            If there’s one area where India has truly shined, it’s solar energy.
            With vast sunlight availability, India has become a global leader in
            solar capacity, especially through initiatives like the National
            Solar Mission. Cities, villages, and industries are rapidly adopting
            rooftop panels and solar farms to reduce reliance on fossil fuels.
            What’s inspiring is that solar isn’t just reducing carbon footprints
            — it’s empowering communities. Rural households are gaining energy
            independence, small farmers are running irrigation pumps with solar
            power, and businesses are cutting operational costs.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            3. Wind and Hybrid Energy: Harnessing Nature’s Power
          </h2>
          <p>
            Beyond solar, India’s western and southern regions are now hubs for
            wind energy innovation. The integration of hybrid systems —
            combining wind and solar — ensures a continuous power supply even in
            variable weather conditions. These advancements are not only
            reducing emissions but also ensuring a stable and affordable energy
            future for millions.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            4. Electric Mobility: The Road to Zero Emissions
          </h2>
          <p>
            In 2025, the Indian streets are witnessing a silent revolution — the
            EV boom. From twowheelers to heavy transport, electric mobility is
            reshaping urban transportation. Backed by government incentives like
            the FAME II scheme and expanding charging infrastructure, EV
            adoption is skyrocketing. CleanTech in mobility goes beyond just
            vehicles — it’s driving innovation in battery recycling, green
            hydrogen, and smart grid integration. India’s automotive industry is
            fast becoming a global hub for clean transportation technologies.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            5. Waste to Wealth: Rethinking Sustainability
          </h2>
          <p>
            Innovation in CleanTech isn’t limited to energy. Indian startups are
            pioneering waste-toenergy technologies that turn plastic, food, and
            agricultural waste into usable fuel and electricity. Cities like
            Indore and Pune are setting global examples in efficient waste
            management — transforming what was once a problem into a valuable
            resource. This shift toward a circular economy — where nothing goes
            to waste — is helping India reduce pollution, conserve resources,
            and create green jobs across sectors.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            6. Green Startups and Tech Entrepreneurs: India’s New Climate
            Champions
          </h2>
          <p>
            Across India, a new generation of entrepreneurs is leading the green
            revolution. From AIdriven smart grids to water purification systems
            and biofuel innovations, Indian CleanTech startups are solving
            real-world problems with cutting-edge ideas. These innovators aren’t
            just creating products — they’re building a mindset of
            sustainability. Their vision is clear: a future where technology and
            ecology go hand in hand.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            7. Policy Support and Global Partnerships
          </h2>
          <p>
            India’s CleanTech rise is strongly supported by proactive government
            policies and international collaboration. Investments through the
            International Solar Alliance (ISA), public-private partnerships, and
            green financing initiatives are accelerating innovation and
            adoption.Global investors now see India as a CleanTech powerhouse —
            where economic growth and environmental responsibility coexist
            harmoniously.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            8. The Road Ahead: Toward a Sustainable Tomorrow
          </h2>
          <p>
            As India moves toward becoming a $5 trillion economy, the path
            forward is unmistakably green. The future of CleanTech lies in
            collaboration — between government, industry, and citizens. Every
            solar panel installed, every electric vehicle sold, and every ton of
            waste recycled brings India one step closer to its sustainable
            dream.
          </p>

          <hr className="my-6 border-emerald-300" />

          <h2 className="text-xl font-semibold text-emerald-600">
            Final Thoughts
          </h2>

          <p className="font-semibold text-gray-700">
            India’s CleanTech journey is a story of resilience, innovation, and
            hope. It’s about a nation that’s choosing progress without
            pollution, prosperity without compromise. The technologies being
            developed today will power not just India’s growth — but also its
            commitment to protecting the planet for generations to come.
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

export default Greener;
