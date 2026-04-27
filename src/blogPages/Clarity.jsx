import React, { useEffect } from 'react'
import ClarityImg from "../assets/Clarity.png"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";



const Clarity = () => {
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
          Microsoft Clarity: The Free Tool That Shows You What Your
Users Really Do
        </motion.h1>

        <motion.img
          src={ClarityImg}
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
           If you’ve ever wondered why visitors land on your website but don’t convert, you’re not
alone. Every business owner faces this question at some point. The good news? You
don’t need expensive analytics tools to get real answers. That’s exactly where Microsoft
Clarity steps in — a completely free, powerful behavior analytics tool that helps you
understand how people actually use your website.
Clarity doesn’t just show numbers; it shows stories. It reveals the tiny actions,
struggles, hesitations, and moments of confusion your users experience as they
navigate your site.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            What Makes Microsoft Clarity Special?
          </h2>
          <p>
           Most analytics tools give you data. Clarity gives you understanding.
And it does that through three core features:
          </p>

         

          <h3 className="text-m font-semibold text-emerald-600">
            1. Session Recordings
          </h3>

         <p>Imagine watching a replay of your visitor’s journey — where they move, what they click,
where they get stuck, and when they drop off.
Clarity offers unlimited session recordings for free. You can see real mouse movements,
scrolling behavior, rage clicks, and even hesitation. This helps you spot UX problems
instantly.</p>

         
          <h3 className="text-m font-semibold text-emerald-600">
            2. Heatmaps That Make Patterns Visible
          </h3>
          <p>Heatmaps highlight where users click, scroll, and focus their attention:</p>

          <ul className="list-disc pl-6">
           <li>Click Heatmaps show what people actually interact with.  </li>
           <li>Scroll Heatmaps tell you how far people scroll before losing interest.</li>
           <li>Area Heatmaps help you compare engagement across different parts of a page.</li>
          </ul>
          <p>Seeing these patterns helps you understand which content works and which content
silently fails.</p>

         

          <h3 className="text-m font-semibold text-emerald-600">
            You don’t have to configure complicated dashboards. Clarity automatically identifies:
          </h3>
          <ul className="list-disc pl-6">
            <li>rage clicks</li>
            <li>dead clicks</li>
            <li>quick backs</li>
            <li>excessive scrolling</li>
            <li>JavaScript errors</li>
            <li>slow page loads</li>
          </ul>
          <p className="font-semibold">
           These “insights” save hours of guesswork and point you directly to what’s hurting user
experience.
          </p>

         

          <h2 className="text-xl font-semibold text-emerald-600">
            Why Businesses Love Clarity
          </h2>
          <p className="font-semibold">
            Because it is:
          </p>
          <ul className="list-disc pl-6">
            <li>100% free, forever</li>
            <li>Fast, lightweight & GDPR compliant</li>
            <li>Easy to install (just copy-paste a script)</li>
            <li>Compatible with Google Analytics</li>
            <li>Capable of handling high-traffic websites</li>
          </ul>

          <p>For small businesses, agencies, bloggers, or e-commerce stores, this means you get
premium-level insights without touching your budget.</p>

          <h2 className="text-xl font-semibold text-emerald-600">
            Real-World Examples of What Clarity Helps You Find
          </h2>
           <ul className="list-disc pl-6">
            <li>Users trying to click non-clickable text → fix confusing design</li>
            <li>People dropping off before seeing an important CTA → move the CTA above the fold</li>
            <li>Mobile users struggling with small buttons → adjust responsiveness</li>
            <li>Repeated rage clicks → fix broken or slow elements</li>
            <li>Users ignoring a banner you think is important → redesign or reposition it</li>
           </ul>
           <p>Each of these insights leads to smarter decisions — which leads to better conversions.</p>
          

        
          <hr className="my-6 border-emerald-300" />

          <h2 className="text-xl font-semibold text-emerald-600">
            Final Thoughts
          </h2>

          <p className="font-semibold text-gray-700">
            In today’s online world, data alone isn’t enough. You need real visibility into what your
visitors feel, struggle with, and try to do on your website. Microsoft Clarity gives you
that superpower without charging a single rupee.
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
  )
}

export default Clarity