import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const RiseOfAi = () => {
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
                The Rise of AI: How Artificial Intelligence is Changing Business Operations
            </motion.h1>

            <motion.img
                src="https://cdn.pixabay.com/photo/2023/02/05/01/09/artificial-intelligence-7768524_1280.jpg"
                alt="The Rise of AI"
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


                <p>Artificial Intelligence (AI) is no longer a futuristic concept — it’s here, and it’s transforming how businesses operate across every industry. From automating repetitive tasks to making smarter decisions based on data, AI is redefining efficiency, productivity, and customer experience.</p>

                <h2 className="text-xl font-semibold text-emerald-600">
                    How AI is Reshaping Businesses
                </h2>

                <p>Modern businesses face intense competition, evolving market trends, and demanding customers. AI steps in as a game-changer, enabling companies to analyze vast amounts of data, forecast trends, and personalize customer interactions.</p>
                <p>Chatbots now handle customer queries instantly. Predictive analytics helps leaders make data-backed decisions. AI-powered marketing tools optimize ad spend and drive higher engagement. Whether you’re a start-up or an established enterprise, AI offers the tools to work smarter, not harder.</p>


                <h3 className="text-m font-semibold text-emerald-600">
                    The Coding Side of AI
                </h3>

                <p>Behind AI's magic lies complex programming. Developers use machine learning, natural language processing, and computer vision to build systems that learn and adapt. This involves coding in Python, Java, R, and working with frameworks like TensorFlow or PyTorch. Skilled programmers are the backbone of these innovations — making AI products reliable and intelligent.</p>


                <h3 className="text-m font-semibold text-emerald-600">
                    The Non-Coding Side of AI
                </h3>
                <p>Not everyone needs to be a programmer to benefit from AI. Careers in AI-powered digital marketing, data analysis, project management, and UX design are booming. These roles leverage AI tools to manage campaigns, automate tasks, and deliver a superior customer experience — without touching a single line of code.</p>



                <h2 className="text-xl font-semibold text-emerald-600">
                    Zoro Tech: Leading AI-Driven Innovation
                </h2>
                <p>At Zoro Tech, we are more than an IT company — we are architects of digital transformation. Our mission is simple: combine creativity, technology, and AI to deliver solutions that help businesses grow and stay ahead.</p>

                <h2 className="text-xl font-semibold text-emerald-600">
                    Our expertise spans:
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Website & App Development – sleek, responsive, and AI-ready</li>
                    <li>Digital Marketing & SEO – powered by AI-driven analytics</li>
                    <li>Graphic/UI Design – eye-catching, conversion-focused visuals</li>
                    <li>Billing & Business Software – automating workflows for efficiency</li>
                    <li>AI Solutions – integrating AI into everyday operations</li>
                </ul>

                <p>We’ve partnered with brands like Vikas Aviation Academy, Ahil Fitness Park, and Remy Tattoo Studio, delivering tailor-made solutions that achieve measurable results. Every project we take on reflects our commitment to innovation and excellence.</p>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Artificial Intelligence & Machine Learning</li>
                    <li>Cybersecurity</li>
                    <li>Digital Marketing</li>
                    <li>Full-Stack Development</li>
                </ul>

                <p>Through workshops, internships, and college collaborations, we bridge the gap between learning and industry expectations — creating skilled professionals ready for the digital world.</p>






                <h2 className="text-xl font-semibold text-emerald-600">
                    The Future is AI-Driven
                </h2>
                <p>AI isn’t here to replace humans; it’s here to empower them. Businesses adopting AI early will gain an unbeatable edge, and individuals developing AI skills will be in high demand.</p>

                <p>At Zoro Tech, we’re not just embracing AI — we’re using it to shape the future of businesses and careers. Whether you’re a company looking to scale or a student aiming for a future-proof career, we’re here to make it happen.</p>


                <p style={{ textAlign: "center" }}>Your AI journey starts here — with Zoro Tech.</p>
                <hr className="my-6 border-emerald-300" />

                <h2 className="text-xl font-semibold text-emerald-600">
                    Conclusion
                </h2>


                <p className="font-semibold text-gray-700">
                    AI is not just the future — it’s the present, revolutionizing how businesses operate and how careers evolve. From coding innovations to non-coding applications, its impact spans every industry. Early adopters will lead the market, and with Zoro Tech’s AI-driven solutions and training, both businesses and individuals can stay ahead, work smarter, and shape a future powered by intelligence.
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

export default RiseOfAi