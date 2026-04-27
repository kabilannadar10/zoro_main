import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MobileAppImg from "../assets/MobileApp.png"
import DigitalMarketing from "../assets/Digital-Marketing-vs-Traditional-Marketing.webp"
import NanoBananaImg from '../assets/nano-banana-cover.jpg'
import GrokImg from '../assets/Grok.jpg'
import GeminiAI2025Img from '../assets/GeminiAI2025.jpg'
import ViralBananasImg from '../assets/ViralBananas.jpg'
import CowBoyAiImg from "../assets/CowBoyAi.png";
import GoogleTagManagerImg from "../assets/GoogleTagManager.jpg"
import ArtificialImg from "../assets/image.png"
import BlockChain from "../blogPages/BlockChain";
import Technology from "../assets/Top-10-New-Technology-Inventions-Shaping-the-Future-in-2025.jpg"
import GreenerImg from "../assets/Greener.png";
import EdgeComputingImg from "../assets/EdgeComputingImg.png";
import PostQuantumImg from "../assets/PostQuantum.png";
import CybersecurityStrategiesImg from "../assets/CybersecurityStrategies.png";
import DigitalTransformationImg from "../assets/DigitalTransformation.png";
import SpatialComputingImg from "../assets/SpatialComputingImg.png";
import RemoteImg from "../assets/RemoteImg.png";
import NoCodeAppImg from "../assets/NoCodeAppImg.png";
import LLMImg from "../assets/LLMImg.png"
import SmartHomesImg from "../assets/SmartHomes.png"
import ClarityImg from "../assets/Clarity.png"
import busImg from "../assets/bus.png"
import AIinMarketingImg from "../assets/AIinMarketingImg.png"

function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      title: "Top Logo Design Trends for 2025",
      excerpt:
        "In 2025, logos are no longer static. Discover trends like neo-minimalism, AI-refined branding, sound-responsive designs, and bold gradients that make your brand unforgettable.",
      image:
        "https://amadine.com/assets/img/articles/logo-design-trends/logo-design-trends-2025@2x.jpg",
      link: "/blogs/logo-trends-2025",
    },
    {
      title: "Google Ads vs Meta Ads: What Works Better in India",
      excerpt:
        "Explore how Google Ads targets high-intent searchers while Meta Ads drive impulse buys, especially in Tier 2/3 markets. Learn how to split budgets and optimize for ROI.",
      image:
        "https://digitalwheel.in/wp-content/uploads/2025/04/DIGITAL-WHEEL-2.jpg",
      link: "/blogs/google-vs-meta",
    },
    {
      title: "Digital vs Traditional Marketing in Tier 2 Indian Cities",
      excerpt:
        "Tier 2 cities are shifting fast. Discover why blending traditional with digital—like using print ads and influencers with social media—works best.",
      image:
        DigitalMarketing,
      link: "/blogs/digital-vs-traditional",
    },
    {
      title: "Social Media Mistakes Indian Businesses Should Avoid",
      excerpt:
        "Inconsistent branding, ignoring feedback, and not adapting to local culture can ruin your online presence. Learn actionable steps for social media success.",
      image:
        "https://cdn.kickcharge.com/new2023/wp-content/uploads/2023/10/17175618/july-2020-social-media-mistakes-to-avoid-2-1920x512.png",
      link: "/blogs/social-mistakes",
    },
    {
      title: "Unlocking Business Intelligence with Power BI",
      excerpt:
        "Discover how Power BI transforms raw data into actionable insights through interactive dashboards, seamless integration, and smart analytics — all without writing code.",
      image:
        "https://imgs.search.brave.com/ZlrSudiD14xcpxDwMJybb5nD9w1hoZzxs3eLnO0f8Rk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvUG93/ZXItQmktTG9nby1Q/TkcucG5n",
      link: "/blogs/power-bi",
    },
    {
      title: "How AI is Transforming the Share Market & Trading",
      excerpt:
        "From predictive algorithms to automated bots, explore how AI is changing the way Indian investors trade in the stock market.",
      image:
        "https://imgs.search.brave.com/uIn7nJ5mnQzeihvvfOLmE5GX_vmN5sYwXAnMftNBL7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/eHMuY29tL3N0b3Jh/Z2UvYmxvZ3MvN2Uw/MjczZmMtYWQ0Yy00/OWI2LWFjZTctYTI1/OTZkMThmYjNkL2Fp/LXRyYWRpbmcud2Vi/cA",
      link: "/blogs/ai-in-trading",
    },
    {
      title: "How AI is Changing the Game in Video & Photo Editing",
      excerpt:
        "Explore the rise of AI-powered editing tools like CapCut, Canva, and Runway ML — and how they're revolutionizing content creation for influencers and brands.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      link: "/blogs/ai-in-editing",
    },
    {
      title: "Why Every Business Needs a Strong Web Presence in 2025",
      excerpt:
        "From local stores to startups, a website builds trust, drives leads, and works 24/7. Discover what a modern business site must include.",
      image:
        "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg",
      link: "/blogs/web-development",
    },
    {
      title:"The Power of Prompt Engineering in AI",
      excerpt:"Prompt engineering is becoming key in unlocking the full potential of AI tools. From healthcare and research to education and media, it helps shape how we interact with large language models in a smart, ethical, and effective way.",
      image:
        "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      link:"/blogs/PromptEng",
    },
    {
      title:"The Generative AI Revolution in Video",
      excerpt:"AI is transforming video editing — making it faster, smarter, and more creative. From automating repetitive tasks to enabling new styles of storytelling, generative AI is reshaping how videos are made.",
      image:"https://t3.ftcdn.net/jpg/12/15/57/10/240_F_1215571096_BaR28UyYxDYbGu2ZH9sBDZA9JgNBLA5j.jpg",
      link:"/blogs/GenerativeAiVideo",
    },
    {
      title:"Google Gemini ",
      excerpt:"Google Gemini, formerly known as Bard, marks a major advancement in conversational AI. Developed by Google DeepMind, Gemini elevates digital interaction by providing personalized, context-aware responses and intelligent content recommendations. This next-generation AI is redefining how users access and engage with information across industries.",
      image:"https://storage.googleapis.com/gweb-uniblog-publish-prod/images/IO24_WhatsInAName_SocialShare_S96SOzG.width-1300.png",
      link:"/blogs/Gemini"
    },
    {
      title:"ChatGPT",
      excerpt:"ChatGPT is an advanced AI developed by OpenAI that can understand and respond in a way that feels natural—almost like talking to a real person. Whether you need help writing, answering questions, or just having a conversation, ChatGPT is built to assist across many topics",
      image:"https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/64148ed756708f9b82464c96_image-of-hand-holding-an-ai-face-looking-at-the-words-chatgpt-openai.webp",
      link:"/blogs/ChatGpt"
    },
    {
      title:"Social Media Monetization ",
      excerpt:"Social media is no longer just about staying in touch—it’s now a major opportunity for creators to earn money. With billions of users online, there’s huge potential to turn content into income. In this post, we’ll look at real strategies, platforms, and tips to help creators start monetizing their content.",
      image:"https://danlok.com/wp-content/uploads/2024/11/BlogPost_Monetize-Social-Media.jpg",
      link:"/blogs/SocialMediaMonetion"
    },
    {
      title:"Google Veo 3  ",
      excerpt:"Google Veo 3, unveiled in December 2024, marks a major advancement in generative AI—especially in the field of text-to-video (T2V) technology. Alongside platforms like Sora Turbo, it allows users to generate high-quality video content from simple text prompts. This breakthrough holds transformative potential across various industries, with healthcare emerging as one of the most promising—and complex—areas for its application.",
      image:"https://i.pinimg.com/1200x/d5/90/6e/d5906e7fa6b2fecf7cb7714c23bbd4d3.jpg",
      link:"/blogs/GoogleVeo3"
    },
    {
      title:"THREADS vs X (TWITTER)",  
      excerpt:"As the social media world rapidly shifts, two major players—Threads by Meta and X (formerly Twitter)—are battling for the top spot in the microblogging arena. This blog dives into a side-by-side comparison of both platforms, exploring their features, user experience, and growth trajectories to understand which one might take the lead in the digital conversation space.",
      image:"https://wolfpackadvising.com/wp-content/uploads/2024/09/Threads-vs-X-The-Smart-Brands-Guide-to-Social-Media.png",
      link:"/blogs/ThreadsVsX"
    },
    {
      title:"Python programming languages",  
      excerpt:"Python has taken the tech world by storm—and it’s easy to see why. With its clean syntax, powerful libraries, and broad range of applications, Python appeals to both newcomers and experienced developers. In this blog, we’ll explore what makes Python so special, how it’s used across industries, and why it continues to dominate the programming landscape.",
      image:"https://i.pinimg.com/1200x/b5/a7/fd/b5a7fd58773704f9a16f1c8a12eda322.jpg",
      link:"/blogs/PythonPro"
    },
    {
      title:"Java Programming ",  
      excerpt:"Java is a versatile and powerful programming language that has remained relevant for decades. Celebrated for its portability, robustness, and user-friendly syntax, Java continues to be a go-to choice for developers worldwide. In this blog post, we'll dive into Java’s core features, examine its wide-ranging applications, and uncover the reasons behind its enduring popularity among programmers.",
      image:"https://i.pinimg.com/1200x/9a/0d/e9/9a0de9dbec57e313f9bd5014fd085ced.jpg",
      link:"/blogs/JavaPro"
    },
    {
      title:"The Rise of AI: How Artificial Intelligence is Changing Business Operations",  
      excerpt:"Artificial Intelligence (AI) is no longer a futuristic idea — it is a present reality transforming businesses across industries. By automating repetitive tasks and enabling smarter, data-driven decisions, AI is redefining efficiency, boosting productivity, and enhancing customer experiences.",
      image:"https://cdn.pixabay.com/photo/2023/02/05/01/09/artificial-intelligence-7768524_1280.jpg",
      link:"/blogs/RiseOfAi"
    },
    {
      title:"Top Web Design Trends to Attract More Customers in 2025",  
      excerpt:"In today’s digital world, your website is your brand’s first impression and 24/7 salesperson. At Zoro Tech, we design modern, high-converting sites that attract, engage, and convert — blending creativity, technical skill, and AI to make your brand stand out.",
      image:"https://www.bbi.co.uk/Portals/0/xBlog/uploads/2024/12/3/WDT-banner.webp",
      link:"/blogs/TopWebDesign"
    },
    {
      title:"Why Your Business Needs a Mobile App in 2025",  
      excerpt:"In 2025, if your business doesn’t have a mobile app, you’re missing a huge opportunity. People live on their phones—ordering, booking, shopping, and grabbing deals—wanting everything quick and easy, right at their fingertips.",
      image:MobileAppImg,
      link:"/blogs/MobileApp"
    },
    {
      title:"Nano Banana Made Simple: Features, Benefits, and Free Options",  
      excerpt:"Nano Banana is all about keeping things simple. It’s packed with features that help you get work done faster without any steep learning curve. The main benefits? It saves you time, it’s easy to use, and it works smoothly across different devices. The best part—there are free options you can try out, so you don’t have to spend anything to see if it’s the right fit for you.",
      image:NanoBananaImg,
      link:"/blogs/NanoBanana"
    },
    {
      title:"Grok AI in 2025: Your Smart, Friendly Digital Companion",
      excerpt:'Artificial Intelligence is no longer just a buzzword—it’s woven into our daily lives. From chatbots that handle customer service to apps that recommend movies and books, AI is everywhere. One of the latest names making waves is Grok AI, developed by xAI, Elon Musk’s company. But what exactly is Grok AI, and how are people using it in 2025? Let’s break it down simply.',  
      image:GrokImg,
      link:"/blogs/Grok"
    },
    {
      title:"Gemini AI 2025: The Friendly AI That’s Changing the Game",
      excerpt:'AI is no longer just for tech experts—it’s part of everyday life. In 2025, Google’s Gemini AI has become a go-to tool for everyone, from students seeking homework help to creators chasing viral trends. What makes it stand out? It’s smarter, faster, and more approachable than most AI tools today.',  
      image:GeminiAI2025Img,
      link:"/blogs/GeminiAI2025"
    },
    {
      title:"Gemini AI 2025: From Viral Bananas to Smarter Thinking",
      excerpt:'In 2025, AI isn’t just a tool—it’s a trendsetter. Google’s Gemini AI is making headlines in unexpected ways, from fueling the quirky Nano Banana craze to inspiring crochet-style art and showcasing advanced reasoning. Fun, creative, and intelligent, Gemini proves that AI can shape culture as much as technology.',  
      image:ViralBananasImg,
      link:"/blogs/ViralBananas"
    },
    {
      title:"Why Everyone Is Talking About Cowboy AI in 2025",
      excerpt:'AI in 2025 is all about efficiency and innovation. Cowboy AI is emerging as a standout tool, built to simplify workflows and boost productivity. But what makes it unique—and why should you consider using it this year? Let’s find out.',  
      image:CowBoyAiImg,
      link:"/blogs/CowBoyAi"
    },
    {
      title:"Google Tag Manager 2025: Track Smarter, Not Harder",
      excerpt:'n today’s fast-moving digital world, knowing how users interact with your website is key to growth. Tools like Google Tag Manager (GTM) and Google Search Console (GSC) help track behavior, conversions, and performance. But what is GTM, who should use it, and how is it different from Search Console? Let’s break it down simply.',  
      image:GoogleTagManagerImg,
      link:"/blogs/GoogleTagManager"
    },
    {
      title:"Blockchain Beyond Crypto: 5 Real-World Uses Changing Industries",
      excerpt:'When most people hear the word blockchain, their minds immediately jump to cryptocurrency—especially Bitcoin.',  
      image:"https://imgs.search.brave.com/5pgw1YP3DPMaOjvmQwZ833zVeHopJzAVnYE-Uvrhhdc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ibG9ja2NoYWlu/LWhvbG9ncmFtLWls/bHVzdHJhdGlvbi1j/b25jZXB0LWNyeXB0/b2N1cnJlbmN5LWRp/Z2l0YWwtbW9uZXkt/M2QtcmVuZGVyaW5n/XzI2OTY0OC0xLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA",
      link:"/blogs/block-chain"
    },
    {
      title:"Cybersecurity trends in 2025: What Businesses Must Know",
      excerpt:'As technology becomes more integrated into everyday business operations, the threat landscape grows more complex',  
      image:"https://imgs.search.brave.com/fbQEfkhMXUOUhjVQQmeFeaKovxzffiGOdi0ZFyUY-YQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/eWJlcnNlY3VyaXR5/LWRhdGEtcHJvdGVj/dGlvbi1jb25jZXB0/LWZ1dHVyaXN0aWMt/c2hpZWxkLWxvY2tf/MjMtMjE1MTk5ODQ5/Mi5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA",
      link:"/blogs/cyber-security"
    },
    {
      title:"Top 10 Emerging Technologies Revolutionizing Businesses in 2025 ",
      excerpt:'In 2025, the business world is transforming faster than ever before. Innovation has become the cornerstone of growth, efficiency, and competitiveness. Technologies like artificial intelligence and quantum computing are no longer futuristic concepts—they’re actively reshaping industries, redefining customer experiences, and revolutionizing how organizations operate.',  
      image:Technology,
      link:"/blogs/Etech"
    },
  
    {
      title:"How Artificial Intelligence Is Redefining Innovation in 2025 ",
      excerpt:"By 2025, Artificial Intelligence (AI) has evolved from a futuristic idea into the core engine of global innovation. Across startups and major enterprises alike, AI is transforming how ideas are created, developed, and realized.",  
      image:ArtificialImg,
      link:"/blogs/Artificial"
    },

    {
      title:" Future of CleanTech: How India Is Powering a Greener Tomorrow ",
      excerpt:"As India tackles the challenges of climate change, CleanTech is emerging as a powerful force for sustainable growth. In 2025 and beyond, this fusion of sustainability and innovation is transforming how the nation produces energy, manages waste, and powers its industries—paving the way for a greener, more inclusive future.",  
      image:GreenerImg,
      link:"/blogs/Greener"
    },
    {
      title:"Why Edge Computing Is the Next Big Thing in 2025",
      excerpt:"In today’s fast-paced digital era, Edge Computing has emerged from a niche concept into one of 2025’s most transformative technologies. As businesses, cities, and devices become increasingly intelligent and connected, edge computing is revolutionizing how data is processed—bringing speed, efficiency, and innovation closer to where it’s needed most.",  
      image:EdgeComputingImg,
      link:"/blogs/EdgeComputing"
    },
    {
      title:"Post-Quantum Computing: Is Your Business Ready for the Next Cyber Shift?",
      excerpt:"In 2025, technology is entering a new frontier with the rise of Post-Quantum Computing. After a decade dominated by AI and cloud computing, quantum power is poised to redefine what’s possible—ushering in an era where machines can solve problems far beyond the capabilities of today’s fastest supercomputers.",  
      image:PostQuantumImg,
      link:"/blogs/PostQuantum"
    },
    {
      title:"Cybersecurity in 2025: 7 Strategies to Keep Your Business Protected",
      excerpt:"By 2025, cybersecurity has become a cornerstone of business survival rather than just a technical concern. As digital transformation accelerates, the threat landscape widens, and cybercriminals grow more sophisticated—leveraging AI, automation, and social engineering to exploit every weakness. In this new era, no business, big or small, is beyond their reach.",  
      image:CybersecurityStrategiesImg,
      link:"/blogs/CybersecurityStrategies"
    },
    {
      title:"5G to 6G: The Next Leap in Digital Transformation",
      excerpt:"As the digital world accelerates, the shift from 5G to 6G is emerging as a revolutionary leap forward. While 5G redefined connectivity with speed and low latency, 6G is set to usher in an era of hyperconnectivity, intelligence, and immersive digital experiences—pushing the limits of what technology can achieve.",  
      image:DigitalTransformationImg,
      link:"/blogs/DigitalTransformation"
    },
    {
      title:"What Is Spatial Computing and Why Everyone’s Talking About It in 2025",
      excerpt:"In 2025, spatial computing is redefining how humans interact with technology—blending the digital and physical worlds like never before. Evolving beyond touchscreens and voice assistants, it stands as one of the year’s most transformative trends, ushering in a new era of immersive, intuitive digital experiences.",  
      image:SpatialComputingImg,
      link:"/blogs/SpatialComputing"
    },
    {
      title:"The Rise of Remote Teams: How Cloud-Native Development Drives Success",
      excerpt:"By 2025, cloud-native development has become the foundation of modern work. As remote teams drive innovation from every corner of the globe, the cloud connects them—enabling agility, collaboration, and seamless productivity. No longer just a trend, this approach defines how businesses build and succeed in the new digital workplace.",  
      image:RemoteImg ,
      link:"/blogs/Remote"
    },

    {
      title:"No-Code Platforms: The Fastest Way to Build Apps in 2025",
      excerpt:"In 2025, the rise of no-code platforms is fueling a digital renaissance where creativity outweighs coding expertise. Innovation is now accessible to everyone—from entrepreneurs to educators—empowering them to build powerful applications quickly and effortlessly, without needing to master complex programming languages.",  
      image:NoCodeAppImg,
      link:"/blogs/NoCodeApp"
    },
    {
      title:"Large Language Models and AI Governance: The Tech Power Duo of 2025",
      excerpt:"In 2025, Artificial Intelligence has become an integral part of everyday life, powering everything from personalized learning to predictive healthcare. At the core of this revolution are Large Language Models (LLMs) — advanced systems that can understand, reason, and generate human-like text, redefining the boundaries of what machines can achieve.",  
      image:LLMImg,
      link:"/blogs/LLM"
    },
    {
      title:"IoT + Web3: How Smart Homes Are Getting Smarter in 2025",
      excerpt:"In 2025, the smart home has evolved far beyond simple voice commands and app-controlled devices. Powered by the convergence of IoT and Web3, homes are transforming into autonomous, intelligent ecosystems—creating seamless, secure, and personalized living experiences like never before.",  
      image:SmartHomesImg,
      link:"/blogs/SmartHomes"
    },
    {
      title:"Microsoft Clarity: The Free Tool That Shows You What Your Users Really Do",
      excerpt:"If you’ve ever wondered why visitors land on your site but don’t convert, you’re not alone. Every business owner deals with this challenge. The good news is you don’t need costly analytics tools to understand what’s happening. That’s where Microsoft Clarity comes in — a free, powerful behavior analytics tool that shows how users truly interact with your website.",  
      image:ClarityImg,
      link:"/blogs/Clarity"
    },
    {
      title:"The Future of Business Automation — And Why You Should Start Now",
      excerpt:"We live in a world where speed, accuracy, and efficiency decide who grows and who struggles. Every business—whether it’s a startup, a small shop, or a large enterprise—is looking for ways to do more with less. And this is exactly why business automation is no longer a luxury. It’s becoming the silent engine behind modern success. Automation isn’t about replacing people; it’s about removing the tasks that slow them down. It’s giving your team more time to think creatively, serve customers better, and focus on meaningful work instead of repetitive routines.",  
      image:busImg,
      link:"/blogs/Automation"
    },
    {
      title:"AI in Marketing: How Smart Tools Are Changing the Game in 2025",
      excerpt:"In 2025, AI has officially shifted from “future tech” to an everyday marketing partner. Brands of all sizes—small businesses, startups, agencies, and global companies—now rely on AI to work smarter, move faster, and understand customers on a deeper, more human level. But the real transformation goes beyond automation. AI is helping marketers think more clearly, create more effectively, and connect with audiences in a personalised and respectful way.",  
      image:AIinMarketingImg,
      link:"/blogs/AIinMarketing"
    },
    // {
    //   title:"",
    //   excerpt:"",  
    //   image:PostQuantumImg,
    //   link:"/blogs/"
    // },
  
    

  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="mt-10 md:mt-18 px-4 py-16 bg-gradient-to-br from-white via-emerald-50 to-white min-h-screen">
      {/* Heading */}
      <motion.div
        initial="hidden"
        animate="visible"
        // variants={fadeUp}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 relative inline-block">
          Zoro-Tech Blogs
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full"></span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-2">
          Insights, strategy, and ideas from the digital frontlines.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* First Blog - Full Width */}
        <motion.div
          // variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative grid md:grid-cols-2 bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          <div className="overflow-hidden h-[280px] md:h-full">
            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent mb-4">
              {blogs[0].title}
            </h3>
            <p className="text-gray-700 text-sm mb-6">{blogs[0].excerpt}</p>
            <Link
              to={blogs[0].link}
              className="w-max bg-emerald-500 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-emerald-600 transition"
            >
              Read More →
            </Link>
          </div>
        </motion.div>

        {/* Remaining Blogs in Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(1).map((blog, i) => (
            <motion.div
              key={i}
              // variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="bg-white/30 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  // loading="lazy"
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {blog.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <Link
                  to={blog.link}
                  className="text-emerald-600 text-sm font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
