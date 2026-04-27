import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PowerBI() {
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
        Power BI: Your Smart Dashboard for Business Success
      </motion.h1>

      <motion.img
        src="https://imgs.search.brave.com/ZlrSudiD14xcpxDwMJybb5nD9w1hoZzxs3eLnO0f8Rk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvUG93/ZXItQmktTG9nby1Q/TkcucG5n"
        alt="Power BI Visualization"
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
          Business decisions shouldn't be based on guesswork. Whether you're running a startup or managing a large enterprise, you need clear, real-time insights to grow. That’s exactly what <strong>Power BI</strong> delivers — powerful data visualization with zero code hassle.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          1. What Is Power BI?
        </h2>
        <p>
          Power BI is a business intelligence tool by Microsoft that transforms complex data into interactive dashboards, charts, and reports. With just a few clicks, you can track sales, monitor performance, and uncover trends — all on one screen.
        </p>

        <h2 className="text-xl font-semibold text-emerald-600">
          2. Why Every Business Should Use Power BI
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Real-Time Reports:</strong> Stop waiting for monthly Excel updates. Get live insights as your data changes.
          </li>
          <li>
            <strong>Connect Everything:</strong> From Excel sheets to cloud databases like Azure, Power BI connects to 100+ data sources.
          </li>
          <li>
            <strong>Zero Coding:</strong> Use drag-and-drop tools and ready-made visuals. No programming needed.
          </li>
          <li>
            <strong>Team Collaboration:</strong> Share dashboards with your team, apply user-level permissions, and work securely from anywhere.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-emerald-600">
          3. Example Use Cases
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Retail:</strong> Track daily sales by store, region, or product in real time.</li>
          <li><strong>Finance:</strong> Monitor profit margins, expenses, and forecasts visually.</li>
          <li><strong>Marketing:</strong> Analyze campaign performance, traffic sources, and conversion rates.</li>
          <li><strong>HR:</strong> View employee turnover, department performance, and hiring pipeline at a glance.</li>
        </ul>

        <h2 className="text-xl font-semibold text-emerald-600">
          4. How to Get Started in 5 Minutes
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Download <strong>Power BI Desktop</strong> from Microsoft’s website.</li>
          <li>Click “Get Data” and choose Excel, web, or your database.</li>
          <li>Use Power Query to clean and organize your data (remove blanks, split columns, etc.).</li>
          <li>Drag and drop visuals (bar charts, tables, KPIs) to build your dashboard.</li>
          <li>Publish your report to the Power BI cloud and share it with your team.</li>
        </ol>

        <hr className="my-6 border-emerald-300" />

        <h2 className="text-xl font-semibold text-emerald-600">
          Final Takeaway
        </h2>
        <p>
          You don’t need to be a data scientist to understand your business numbers. Power BI gives you the tools to turn raw data into clear decisions — fast, secure, and scalable.
        </p>

        <p className="font-semibold text-gray-700">
          Want to make your data work for you? Get started with Power BI — and let your dashboard do the thinking.
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
  );
}

export default PowerBI;