import React, { useEffect } from "react";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";
import NanoBananaImg from '../assets/nano-banana-cover.jpg'


function NanoBanana() {
    

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
                     Nano Banana Made Simple: Features, Benefits, and Free Options
                   </motion.h1>
             
                   <motion.img
                     src={NanoBananaImg}
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
                     <p>If you’ve heard the name Nano Banana, your first thought might be of a tiny fruit but it’s actually something very different. Nano Banana is a simple, lightweight digital tool designed to help people with writing, editing, and polishing their text.</p>
                    <p>It’s becoming popular among students, researchers, teachers, and writers because it makes the process of creating clear, error-free content much easier.</p>
        
                     <h2 className="text-xl font-semibold text-emerald-600">
                        What Exactly is Nano Banana? 
                     </h2>
        
                    <p>Nano Banana is a writing and proofreading assistant. Instead of worrying about grammar slips, confusing sentences, or formatting mistakes, you can use Nano Banana to check your work quickly.</p>
                  
                      <h3 className="text-m font-semibold text-emerald-600">
                          Here’s what it usually helps with:
                     </h3>
    
                        <ul className="list-disc pl-6">
                            <li>Spotting grammar and spelling errors</li>
                            <li>Suggesting smoother sentence structures</li>
                            <li>Checking style and readability</li>
                            <li>Helping with simple formatting</li>
                            <li>In short, it’s like having a friendly editor sitting beside you while you write.</li>
                        </ul>
                    
                     
                     <h2 className="text-xl font-semibold text-emerald-600">
                       Is Nano Banana Free to Use?
                     </h2>
                     <p>The big question! Yes, Nano Banana has a free version.That means you can use it for basic editing and proofreading without paying anything.</p>
                    <p>But like many online tools, it also comes with premium options. The free version is great for everyday needs like assignments, blog writing, or simple reports. If you’re working on something more serious—like a research paper or thesis—you might find the premium version helpful. It usually includes:</p>
                   
                    <ul className="list-disc pl-6">
                        <li>Advanced plagiarism checking</li>
                        <li>Deeper grammar and style analysis</li>
                        <li>Professional-level formatting support</li>
                        <li>So, whether it’s fully free or not depends on how much you need from it.</li>
                    </ul>
                   
                   
                    <h2 className="text-xl font-semibold text-emerald-600">
                   Why Use Tools Like Nano Banana?
                    </h2>
                    <p>We all make little mistakes while writing—it’s natural. But in academics or professional work, even small errors can leave a big impact. A tool like Nano Banana helps you:</p>
                    
                        <ul className="list-disc pl-6">
                            <li>Save time on editing</li>
                            <li>Improve clarity in your ideas</li>
                            <li>Feel more confident before submitting your work</li>
                            <li>It doesn’t replace your own thinking—it just makes your writing cleaner and more polished.</li>
                        </ul>
    
    
    
          
                     <hr className="my-6 border-emerald-300" />
                     
                     <h2 className="text-xl font-semibold text-emerald-600">
                        Final Thoughts
                     </h2>
                     
             
                     <p className="font-semibold text-gray-700" style={{textAlign:'center'}}>
                        Nano Banana may sound playful, but it’s actually a serious helper for writers. Whether you’re a student, a researcher, or just someone who wants their writing to be error-free, Nano Banana can make your work easier.And yes—it’s free to start using, with the option to upgrade if you need advanced features. At the end of the day, Nano Banana is all about one thing: helping you express your ideas clearly, without the stress of small mistakes.</p>
    
    
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

export default NanoBanana