import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const TopWebDesign = () => {
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
                Top Web Design Trends to Attract More Customers in 2025
            </motion.h1>

            <motion.img
                src="https://www.bbi.co.uk/Portals/0/xBlog/uploads/2024/12/3/WDT-banner.webp"
                alt="Top Web Design"
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

                <p>In the digital age, your website isn’t just an online address — it’s your business’s first impression, 24/7 salesperson, and brand ambassador. A well-designed site doesn’t just look appealing; it attracts, engages, and converts visitors into loyal customers.</p>

                <p>As technology and customer expectations evolve, keeping up with the latest web design trends can make the difference between blending in and standing out. At Zoro Tech, we specialize in creating modern, functional, and high-converting websites for businesses of all sizes. With our blend of creativity, technical expertise, and AI-powered solutions, we help brands leave a lasting digital impression.</p>
                <p>Here are the top web design trends for 2025 that can help your business attract more customers — and how Zoro Tech can make them a reality for you.</p>




                <ul className="list-decimal pl-6 space-y-2">
                    <li><div><strong>Minimalist Design with Bold Typography</strong></div> <br />
                        Clean, clutter-free layouts paired with bold, eye-catching typography are dominating web design in 2025. Minimalism makes navigation easier, while bold fonts direct attention to your core message and CTAs.
                        <br />
                        <br />
                        How Zoro Tech Helps: Our UI/UX designers craft intuitive, visually appealing layouts that highlight your brand’s strengths while keeping the user journey simple and engaging.
                    </li><br />
                    <li><div><strong>AI-Powered Personalization</strong></div> <br />
                        AI is revolutionizing websites by offering visitors personalized content, product suggestions, and offers based on their preferences and behavior.
                        <br />
                        <br />
                        How Zoro Tech Helps: We integrate AI-driven features — from personalized recommendations to predictive analytics — so your website speaks directly to each visitor, boosting engagement and conversions.
                    </li><br />
                    <li><div><strong>Mobile-First & Thumb-Friendly Navigation</strong></div> <br />
                        With most web traffic coming from smartphones, a mobile-first design isn’t optional — it’s essential. This means responsive layouts, large tap areas, and easy scrolling.
                        <br />
                        <br />
                        How Zoro Tech Helps: Our mobile-friendly designs ensure your site looks and works perfectly on all devices, improving user experience and search rankings.
                    </li><br />
                    <li><div><strong>Micro-Animations & Scroll Effects</strong></div> <br />
                        Small animations can make a big impact — guiding the user’s attention, improving engagement, and making browsing more enjoyable.
                        <br />
                        <br />
                        How Zoro Tech Helps: We add subtle yet impactful animations to enhance your website’s interactivity without slowing it down, ensuring visitors stay longer and explore more.
                    </li><br />
                    <li><div><strong>Dark Mode & Vibrant Gradients</strong></div> <br />
                        Dark mode isn’t just a trend — it’s a design choice that adds elegance, reduces eye strain, and pairs beautifully with vibrant gradients to create a high-tech look.
                        <br />
                        <br />
                        How Zoro Tech Helps: Our designers blend colors, gradients, and dark mode styling to give your site a sleek, modern edge that stands out from competitors.
                    </li><br />
                    <li><div><strong>Voice Search & Chatbot Integration</strong></div> <br />
                        From voice assistants to instant chatbots, these tools improve accessibility and give visitors immediate answers — which keeps them engaged.
                        <br />
                        <br />
                        How Zoro Tech Helps: We develop and integrate AI-powered chatbots and voice features, making customer support instant, interactive, and always available.
                    </li><br />
                    <li><div><strong>Authentic, Human-Focused Imagery</strong></div> <br />
                        Real images of your team, customers, and workspace build trust better than generic stock photos.
                        <br />
                        <br />
                        How Zoro Tech Helps: Our design process incorporates authentic visuals, custom graphics, and video elements that reflect your brand’s true personality.
                    </li><br />

                </ul>


                <h2 className="text-xl font-semibold text-emerald-600">
                    Why Choose Zoro Tech for Your Web Design?
                </h2>

                <p>At Zoro Tech, we don’t just follow trends — we set them. Our team offers:</p>


                <ul className="list-disc pl-6 space-y-2">
                    <li>Website & App Development – Functional, high-performing, and user-focused.</li>
                    <li>UI/UX Design – Intuitive, engaging, and visually stunning interfaces.</li>
                    <li>AI Solutions – Personalized, data-driven web experiences.</li>
                    <li>Digital Marketing Integration – Websites built to rank, convert, and sell.</li>
                    <li>Client-Focused Approach - Every project tailored to your brand goals.</li>
                </ul>

                <p>With our track record of success for clients like Vikas Aviation Academy, Ahil Fitness Park, Remy Tattoo Studio, and more, we’ve proven our ability to design websites that not only look great but deliver results.</p>
                <q style={{ textAlign: "center" }}> Partner with Zoro Tech — let’s craft a website that captures attention, builds trust, and drives sales. </q>

                <br/>

                <hr className="my-6 border-emerald-300" />

                <h2 className="text-xl font-semibold text-emerald-600">
                     Final Thoughts
                </h2>


                <p className="font-semibold text-gray-700">
                    In 2025, web design is all about personalized, mobile-first, and visually striking experiences. Whether you’re starting fresh or revamping your existing site, implementing these trends can help you attract more customers and grow your business.
                </p>
                <p style={{textAlign:"center"}}>Contact us today: <a className="text-emerald-600" href="https://www.zoro-tech.com/">www.zoro-tech.com</a></p>
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

export default TopWebDesign