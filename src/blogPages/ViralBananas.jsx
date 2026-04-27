import ViralBananasImg from '../assets/ViralBananas.jpg'
import React, { useEffect } from "react";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";



const ViralBananas = () => {


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
                  Gemini AI 2025: From Viral Bananas to Smarter Thinking
              </motion.h1>
  
              <motion.img
                  src={ViralBananasImg}
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
                      Gemini AI Trending:
                  </h2>

                  <p> Nano Banana Craze, Crochet Art, and a Smarter AI Brain
Artificial Intelligence has been growing at lightning speed, and 2025 feels like the year when AI stopped being just a tool and became a real trendsetter. While many AI platforms are competing for attention, Google’s Gemini AI has captured the spotlight in some of the most unexpected and exciting ways. From quirky internet crazes like the Nano Banana to eye-catching crochet-style art and advanced reasoning abilities, Gemini is showing the world that AI can be fun, creative, and incredibly smart.
So, what exactly is making Gemini AI trend this year? Let’s explore.
</p>

  
  
                  <h2 className="text-xl font-semibold text-emerald-600">
                    The Nano Banana Craze 
                  </h2>
                  <p>It all started with a playful experiment. Users discovered they could use Gemini AI to generate images of tiny bananas—affectionately called “Nano Bananas.” These miniature, cartoon-like creations quickly went viral, spreading across social media platforms as memes, collectibles, and even merchandise ideas.</p>
                    <p>The Nano Banana craze highlights a bigger truth: AI isn’t just for serious tasks like coding or research—it can also bring people joy. In a world full of stress, something as simple as a digital banana sparked laughter, creativity, and community.</p>
  
                 
  
  
                  <h2 className="text-xl font-semibold text-emerald-600">
                    Crochet-Style Art 
                  </h2>
                  <p>If Nano Bananas were the quirky side of Gemini, crochet-inspired visuals became its artistic crown. Gemini’s ability to turn text prompts into detailed, yarn-like images caught the attention of designers, craft lovers, and content creators. From cute animals that look handmade to fashion-inspired crochet concepts, the results are both stunning and unique.</p>
                  <p>What’s powerful here is how Gemini blends technology and tradition. Crochet is an age-old craft, but now it’s being reimagined in digital form. This not only fuels creativity but also inspires real-world projects, from art exhibitions to clothing designs.</p>
                  
                  <h2 className="text-xl font-semibold text-emerald-600">
                    A Smarter AI Brain 
                  </h2>
                  <p>While the fun trends make headlines, Gemini’s real power lies in its smarter reasoning abilities. The latest Gemini 2.5 version can break down complex topics step by step, provide more accurate answers, and even handle multi-layered problems. For students, this means clearer explanations. For professionals, it’s a reliable brainstorming partner. And for everyday users, it makes difficult tasks—like summarizing reports or analyzing information—feel much easier.</p>
                 <p>Gemini’s brain isn’t just about knowledge, though—it’s about understanding context and offering thoughtful responses, something older AI models often struggled with.</p>


                <h2 className="text-xl font-semibold text-emerald-600">Why These Trends Matter</h2>
                <p>Together, these three trends show us something important: AI is evolving into a tool that’s both practical and playful. It helps us work smarter while also giving us new ways to express creativity and have fun.</p>
                <p>The Nano Banana craze reflects our love for humor and community. Crochet-style art bridges tradition with digital innovation. And the smarter Gemini brain proves AI can support real learning and problem-solving.</p>
              
                <h2 className="text-xl font-semibold text-emerald-600">
                    Final Thoughts
                </h2>



                <p className="font-semibold text-gray-700" style={{ textAlign: 'center' }}>
                    In 2025, Gemini AI is more than just another chatbot—it’s a cultural phenomenon. From bananas that make us laugh to crochet visuals that inspire, and a reasoning engine that makes life easier, Gemini is reshaping how we see technology. The big picture? AI isn’t only about efficiency anymore—it’s about creativity, connection, and culture. And Gemini AI is leading the way.
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

export default ViralBananas