import React, { useEffect } from 'react'
import ClarityImg from "../assets/Clarity.png"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import busImg from "../assets/bus.png"


const Automation = () => {

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
              The Future of Business Automation — And Why You Should
Start Now
            </motion.h1>
    
            <motion.img
              src={busImg}
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
              We live in a world where speed, accuracy, and efficiency decide who grows and who
struggles. Every business—whether it’s a startup, a small shop, or a large enterprise—is
looking for ways to do more with less. And this is exactly why business automation is
no longer a luxury. It’s becoming the silent engine behind modern success.
Automation isn’t about replacing people; it’s about removing the tasks that slow them
down. It’s giving your team more time to think creatively, serve customers better, and
focus on meaningful work instead of repetitive routines.
              </p>
    
              <h3 className="text-m font-semibold text-emerald-600">
               If you look around, you’ll see automation already shaping industries:
              </h3>
              <ul className="list-disc pl-6">
                <li>Banks use AI to speed up verification.</li>
                <li>E-commerce platforms use bots to handle 24/7 customer support.</li>
                <li>Manufacturing relies on robotic precision.</li>
                <li>Service companies automate billing, follow-ups, and even social media tasks.</li>
              </ul>
              <p>The next few years will only accelerate this shift. Experts predict that by 2030, most
businesses will run on hybrid teams — humans handling strategy and creativity, and
automation taking care of operations.</p>
<p>In other words: automation won’t replace jobs, but people who use automation will
replace people who don’t.</p>
             
    
             
    
              <h3 className="text-m font-semibold text-emerald-600">
                What You Can Automate Today
              </h3>
    
             <p>You don’t have to wait for futuristic robots. Many everyday tasks can already be
automated:</p>
    
             
            
              <ul className="list-disc pl-6">
                <li>Lead management: Auto-capture, qualify, and route leads.</li>
                <li>Customer service: Chatbots for FAQs, ticket systems, 24/7 replies.</li>
                <li>Marketing: Automated email sequences, social media posting, ad optimization.</li>
                <li>Billing & finance: Auto-invoices, reminders, and payment follow-ups.</li>
                <li>Operations: Project workflows, task assignments, approvals.</li>
              </ul>
              
              <p>These small automations save hours every single week—and when combined, they
transform your business.</p>
    
             
    
              <h3 className="text-m font-semibold text-emerald-600">
                The Real Benefits You Will Feel
              </h3>
              <p>Automation delivers more than speed. It gives you:</p>
              <ul className="list-disc pl-6">
                <li>Consistency: No missed tasks or forgotten follow-ups.</li>
                <li>Accuracy: Fewer human errors.</li>
                <li>Scalability: Handle more customers without hiring more staff immediately.</li>
                <li>Cost savings: Automate what drains time and money.</li>
                <li>Better customer experience: Faster responses, smoother journeys.</li>
              </ul>
              <p className="font-semibold">
              When these benefits stack up, your business becomes leaner, smarter, and future-
ready.
              </p>
    
             
    
              <h2 className="text-xl font-semibold text-emerald-600">
                Why You Should Start Now (Not Later)
              </h2>
              <p className="font-semibold">
                Most businesses delay automation because they think it's expensive or complicated.
But the truth is: starting small is easy—and starting early is powerful.
              </p>
              <p>If you automate before your competitors, you gain:</p>
              <ul className="list-disc pl-6">
                <li>A head start in efficiency</li>
                <li>Faster delivery</li>
                <li>Higher customer satisfaction</li>
                <li>Lower operational costs</li>
                <li>Time to innovate</li>
              </ul>
    
              <p>And once automation becomes the new standard (which it will), early adopters will
already be far ahead.</p>
    
              <h2 className="text-xl font-semibold text-emerald-600">
                The Human Side of Automation
              </h2>
              <p lassName=" font-semibold">People often think automation makes work robotic. But in reality, it frees humans from
robotic tasks.</p>
<p>Your team gets to:</p>
               <ul className="list-disc pl-6">
                <li>spend more time solving real problems</li>
                <li>focus on creativity</li>
                <li>build relationships</li>
                <li>think strategically</li>
                
               </ul>
               <p>Automation is not here to replace humans — it’s here to liberate them from the boring
parts of work.</p>
              
    
            
              <hr className="my-6 border-emerald-300" />
    
              <h2 className="text-xl font-semibold text-emerald-600">
                Final Thought: The Future Is Automated — Your Move Starts Today
              </h2>
    
              <p className="font-semibold text-gray-700">
                The future of business belongs to those who act now. Whether you’re running a shop, a
service business, or a digital brand, automation can help you move faster and smarter.
Start with one small workflow. Then another. You’ll be surprised at how quickly your
business transforms.
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

export default Automation