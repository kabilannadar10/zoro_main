import React, { useEffect } from "react";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";
import MobileAppImg from "../assets/MobileApp.png";

const MobileApp = () => {

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
                 Why Your Business Needs a Mobile App in 2025
               </motion.h1>
         
               <motion.img
                 src={MobileAppImg}
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

                <p>Let’s be honest — in 2025, if your business doesn’t have a mobile app, you’re missing out on a huge opportunity. Customers today live on their phones. Whether it’s ordering food, booking a service, shopping online, or checking the latest deals, they want everything fast, easy, and right at their fingertips.</p>

                <p>That’s where a mobile app steps in — it’s not just another tech trend, it’s a powerful tool to connect with your audience, build loyalty, and grow your business.</p>

                <p>At Zoro Tech, we’ve helped brands turn simple ideas into high-performing apps that customers love using every day. Here’s why your business needs one too.</p>
                
                <h2 className="text-xl font-semibold text-emerald-600">
                    Your Customers Are Already on Mobile
                 </h2>

                 <p>Think about it — when was the last time you went an entire day without checking your phone? Exactly. A mobile app keeps your business just one tap away from your customers, making it easier for them to reach you, shop, or book your services.</p>
                <p><strong>How Zoro Tech helps:</strong> We design apps that are fast, simple to use, and look great on any device.</p>
    
                 <h2 className="text-xl font-semibold text-emerald-600">
                     Stay Connected & Build Loyalty 
                 </h2>
                 <p>An app lets you send push notifications, offer exclusive discounts, and share updates instantly — no waiting for customers to find you. This kind of direct connection keeps them coming back.</p>
                <p><strong>How Zoro Tech helps:</strong> We add smart features and personalized recommendations so your app feels like it was made just for them.</p>
    
                <h2 className="text-xl font-semibold text-emerald-600">
                    Boost Your Sales
                </h2>
                <p>When buying is quick and easy, people spend more. Mobile apps with smooth checkouts, saved payment options, and instant offers can seriously increase sales.</p>
                <p><strong>How Zoro Tech helps:</strong> We create apps that guide customers from “just browsing” to “order placed” in a few clicks.</p>

                  <h3 className="text-m font-semibold text-emerald-600">
                      Learn What Your Customers Want   
                 </h3>
                 <p>Your app isn’t just for them — it’s for you too. The data it collects can show what people like, what they’re buying, and how they’re using your services.</p>
                 <p><strong>How Zoro Tech helps:</strong> We give you easy-to-read dashboards so you can make smart decisions based on real customer behavior.</p>
                
                 
                 <h2 className="text-xl font-semibold text-emerald-600">
                   Stand Out from the Competition
                 </h2>
                 <p>In 2025, not having a mobile app can make your business look outdated. An app shows you’re modern, professional, and ready to meet your customers where they are.</p>
                 <p><strong>How Zoro Tech helps:</strong> We combine app development, UI/UX design, and AI tools to make sure your app isn’t just functional — it’s impressive.</p>

                <h2 className="text-xl">
                Why Choose Zoro Tech?
                </h2>

                <p className="font-semibold">We’re not just another IT company. At Zoro Tech, we:</p>

                    <ul className="list-disc pl-6">
                        <li>Build apps for iOS, Android, and cross-platform.</li>
                        <li>Add AI-powered features like chatbots and smart suggestions.</li>
                        <li>Focus on beautiful, user-friendly designs.</li>
                        <li>Integrate marketing so your app gets downloads and engagement.</li>
                        <li>Provide long-term support so your app stays future-ready.</li>
                    </ul>

                    <p>We’ve worked with businesses like Vikas Aviation Academy, Ahil Fitness Park, Remy Tattoo Studio, and Naturals, helping them reach bigger audiences and get real results.</p>

                    <p style={{ textAlign: "center" }}> Ready to launch your app? Let’s make it happen. Visit <a className="text-emerald-600" href="https://www.zoro-tech.com/">www.zoro-tech.com</a> or reach out to the Zoro Tech team today.</p>

      
                 <hr className="my-6 border-emerald-300" />
                 
                 <h2 className="text-xl font-semibold text-emerald-600">
                    Conclusion
                 </h2>
                 
         
                 <p className="font-semibold text-gray-700">
                    A mobile app in 2025 isn’t “nice to have” — it’s a must-have. It keeps your customers closer, makes buying easier, and puts your brand in their pocket 24/7.
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

export default MobileApp