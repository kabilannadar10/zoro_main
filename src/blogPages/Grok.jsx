import React, { useEffect } from "react";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";
import GrokImg from '../assets/Grok.jpg'

function Grok() {

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
                         Grok AI in 2025: Your Smart, Friendly Digital Companion
                       </motion.h1>
                 
                       <motion.img
                         src={GrokImg}
                         alt="Why Your Business Needs a Mobile App in 2025"
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
        
                        <h2 className="text-xl font-semibold text-emerald-600">
                            What is Nano Banana? Is Nano Banana Free to Use?
                         </h2>
                         <p>Artificial Intelligence is no longer something we only read about in tech news—it’s part of everyday life. From chatbots that answer customer questions to apps that suggest what we should watch or read, AI is everywhere. Among the many tools making headlines, one of the most talked about is Grok AI, created by xAI, a company started by Elon Musk.So, what exactly is Grok AI? And how are people using it in 2025? Let’s keep things simple and easy to follow.</p>
            
                         <h2 className="text-xl font-semibold text-emerald-600">
                            What is Grok AI?
                         </h2>
                         <p>By 2025, Grok AI has become a go-to assistant for many people. Here’s how it’s being used today:</p>

                           <ol className="list-decimal pl-6">
                                <li><strong> Learning Made Easy :</strong> Students use Grok to break down tough topics into simple explanations. Whether it’s physics, coding, or history, Grok explains it in plain language that’s easy to understand.</li>
                                <li><strong>Getting Work Done Faster :</strong>Professionals use Grok to draft emails, summarize reports, create outlines, or brainstorm ideas. It saves valuable time and helps people stay productive.</li>
                                <li><strong>Staying Updated :</strong>Because it’s connected to X, Grok can tell you what’s trending right now. This makes it especially helpful for journalists, marketers, and content creators who need the latest information.</li>
                                <li><strong>Everyday Help :</strong> Grok can also act like a personal assistant—helping with to-do lists, reminders, travel suggestions, or even recipe ideas. It’s like having a digital helper that’s always available.</li>
                                <li><strong>Fun and Creativity :</strong>Not everything has to be serious. Grok can write a funny story, share a joke, or create a poem. Many people simply use it for casual conversations and entertainment.</li>
                            </ol>

                      
                          <h3 className="text-m font-semibold text-emerald-600">
                            Why Grok AI Matters in 2025
                         </h3>

                         <p>With so many AI tools available, you might wonder why Grok is special. Here’s why:</p>

                         <ul className="list-disc pl-6">
                            <li>It feels human-like – The tone is natural and friendly, not stiff.</li>
                            <li>It’s always current – Thanks to its link with X, Grok shares real-time updates.</li>
                            <li>It’s easy to use – You don’t need to be a tech expert to benefit from it.</li>

                         </ul>

                             <hr className="my-6 border-emerald-300" />
                     
                     <h2 className="text-xl font-semibold text-emerald-600">
                        Final Thoughts
                     </h2>
                     <p>In 2025, Grok AI has become much more than a chatbot. It’s a learning buddy, a work assistant, a news source, and even a source of entertainment—all rolled into one. In simple words: Grok AI is your digital companion—helpful, smart, and ready to chat whenever you need it.</p>
        
                          
                  
                         <p className="font-semibold text-gray-700" style={{textAlign:'center'}}></p>
        
        
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

export default Grok