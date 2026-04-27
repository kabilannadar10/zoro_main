import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Technology from "../assets/Top-10-New-Technology-Inventions-Shaping-the-Future-in-2025.jpg"


const Etech = () => {
 
 
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
                Top 10 Emerging Technologies Revolutionizing Businesses in 2025 
             </motion.h1>
 
             <motion.img
                 src={Technology}
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
                    The world of business in 2025 is evolving at lightning speed — faster than ever before. Innovation isn’t just a buzzword anymore; it’s the foundation of growth, efficiency, and competitive advantage. From artificial intelligence to quantum computing, today’s technologies are reshaping industries, redefining customer experiences, and revolutionizing how organizations operate. Let’s explore the Top 10 Emerging Technologies that are changing the face of business in 2025. 
                </p>
                 <h2 className="text-xl font-semibold text-emerald-600">
                    1.	Artificial Intelligence (AI) Everywhere 
                 </h2>
                 <p>AI is no longer a futuristic dream — it’s the present reality. From predictive analytics in marketing to AI-powered automation in customer service, businesses are using AI to improve decision-making, reduce costs, and personalize experiences. In 2025, even small businesses are leveraging AI tools for daily operations, making it one of the most democratized technologies ever. </p>
 
                 
 
                 <h2 className="text-xl font-semibold text-emerald-600">
                    2.	Generative AI & Automation 
                 </h2>
                 <p>Beyond traditional AI, Generative AI tools like ChatGPT, Midjourney, and others are transforming content creation, design, and even coding. Businesses are automating repetitive creative tasks, speeding up workflows, and unlocking new forms of innovation. What once took hours of human effort can now be done in minutes — without compromising creativity. </p>

 
                 
 
                 <h2 className="text-xl font-semibold text-emerald-600">
                    3.	Quantum Computing 
                 </h2>
                 <p>Quantum computing is breaking through barriers of processing power, enabling calculations that were once impossible for classical computers. In 2025, industries like finance, logistics, and pharmaceuticals are experimenting with quantum models to optimize risk assessment, simulate molecules, and predict supply chain disruptions faster than ever. </p>
 
                 
 
                 <h2 className="text-xl font-semibold text-emerald-600">
                    4.	Internet of Things (IoT) & Smart Ecosystems 
                 </h2>
                 <p>IoT continues to expand its footprint — connecting homes, factories, vehicles, and cities. Businesses are using smart sensors and connected devices to collect realtime data that drives smarter decisions. Imagine a supply chain that tracks every shipment live or a factory that predicts machine breakdowns before they happen — that’s the power of IoT in action. </p>
 
                 
 
                 <h2 className="text-xl font-semibold text-emerald-600">
                    5.	Edge Computing 
                 </h2>
                 <p>As IoT grows, so does the need for faster data processing. Enter Edge Computing. Instead of sending all data to distant cloud servers, edge computing processes it locally — reducing latency and improving performance. For businesses that rely on instant analytics (like autonomous vehicles or retail checkout systems), edge computing is a game-changer. </p>
 
                 
 
                 <h2 className="text-xl font-semibold text-emerald-600">
                    6.	Blockchain Beyond Cryptocurrency 
                 </h2>
                 <p>While blockchain began with Bitcoin, it’s evolved into something far greater. In 2025, businesses use blockchain to ensure transparency, traceability, and security across operations — from verifying product authenticity to managing decentralized supply chains. It’s helping companies build trust in a digital-first world. </p>
 
                 
 
                 <h2 className="text-xl font-semibold text-emerald-600">
                    7.	5G & Next-Gen Connectivity 
                 </h2>
                 <p>Speed is power. With 5G, businesses can now transfer massive amounts of data almost instantly. The result? Real-time collaboration, smoother IoT communication, and ultra-fast remote work. 5G is enabling everything from smart factories to immersive AR/VR customer experiences — setting the stage for a hyperconnected business world. </p>
 
                 
 
                 <h2 className="text-xl font-semibold text-emerald-600">
                    8.	Augmented Reality (AR) & Virtual Reality (VR) 
                 </h2>
                 <p>The line between physical and digital is blurring. Retailers are using AR to let customers “try before they buy,” while VR is revolutionizing training and remote collaboration. In 2025, these technologies are helping brands tell richer stories, engage customers more deeply, and create memorable experiences that drive loyalty. </p>
 
                 
 
                 <h2 className="text-xl font-semibold text-emerald-600">
                    9.	Sustainable Tech & Green Innovation 
                 </h2>
                 <p>Sustainability is no longer optional — it’s a business imperative. From AI-driven energy optimization to carbon-tracking software, green technologies are helping companies minimize waste and meet global sustainability goals. Eco-innovation is now seen not just as good ethics but as good business strategy. </p>
 
                 
 
                 <h2 className="text-xl font-semibold text-emerald-600">
                    10.	Cybersecurity Powered by AI 
                 </h2>
                 <p>With great technology comes great responsibility. As businesses become more digital, cyber threats are growing more complex. AI-powered cybersecurity systems can now detect and neutralize threats in real time, ensuring data integrity and trust. In 2025, cybersecurity isn’t just a department — it’s a strategic backbone for every digital business. </p>
 
                
 
                 <hr className="my-6 border-emerald-300" />
 
                 <h2 className="text-xl font-semibold text-emerald-600">
                     Final Thoughts 
                 </h2>
 
 
                 <p className="font-semibold text-gray-700">
                    2025 marks a defining moment in the evolution of business technology. The organizations thriving today aren’t just adopting these tools — they’re integrating them into every layer of their operations, culture, and strategy. The future belongs to those who innovate fearlessly, adapt rapidly, and see technology not as a challenge but as an opportunity to grow, connect, and lead. 
In this age of digital transformation, one truth stands strong — technology is no longer just powering businesses; it’s becoming their heartbeat. 

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
     )
}

export default Etech