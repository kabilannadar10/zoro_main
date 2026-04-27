import React, { useEffect } from "react";
import CybersecurityStrategiesImg from "../assets/CybersecurityStrategies.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CybersecurityStrategies = () => {
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
          Cybersecurity in 2025: 7 Strategies to Keep Your Business Protected
        </motion.h1>

        <motion.img
          src={CybersecurityStrategiesImg}
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
            In 2025, cybersecurity is no longer just a technical issue—it’s a
            business survival strategy. As organizations continue to embrace
            digital transformation, the attack surface expands dramatically.
            Cybercriminals are evolving faster than ever, using AI, automation,
            and social engineering to exploit even the smallest vulnerabilities.
            Whether you’re running a startup or a global enterprise, one fact
            remains clear: your business is a target. To stay ahead in this
            digital battlefield, companies must take a proactive, layered
            approach to cybersecurity. Here are 7 powerful strategies to protect
            your business in 2025 and beyond.
          </p>
          <h2 className="text-xl font-semibold text-emerald-600">
            1. Strengthen Identity and Access Management (IAM)
          </h2>
          <p>
            In the age of remote and hybrid work, controlling who accesses your
            data is critical. Implementing multi-factor authentication (MFA),
            biometric verification, and zero-trust frameworks ensures that only
            verified users can access sensitive systems. Gone are the days when
            a simple password could keep hackers out—today, identity is the new
            perimeter. Pro Tip: Regularly review access privileges and remove
            inactive or unnecessary accounts.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            2. Embrace AI-Powered Threat Detection
          </h2>
          <p>
            Cyber threats are becoming more sophisticated and frequent. Human
            monitoring alone can’t keep up. That’s where AI-driven cybersecurity
            tools come in. These systems use machine learning to detect unusual
            behavior, analyze massive amounts of data, and respond to threats in
            real time. For instance, AI can spot a phishing email that looks 99%
            legitimate or detect ransomware activity before it spreads. By
            combining human expertise with AI intelligence, businesses gain a
            24/7 digital guardian.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            3. Educate and Empower Employees
          </h2>
          <p>
            A company’s greatest vulnerability often lies within its people.
            Phishing attacks and social engineering schemes target employees who
            unknowingly give away access credentials. In 2025, cyber awareness
            training isn’t optional—it’s essential. Regular workshops, phishing
            simulations, and role-based training can turn your staff from
            potential risks into your first line of defense. Remember,
            cybersecurity culture starts with education.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            4. Secure Cloud Environments
          </h2>
          <p>
            The cloud has become the backbone of modern business, but it also
            introduces new risks. Misconfigured cloud storage, weak encryption,
            or unsecured APIs can expose sensitive data. To stay secure, ensure
            end-to-end encryption, regular configuration audits, and strong
            compliance monitoring across all cloud services. Work closely with
            your cloud provider to understand shared responsibility
            models—because data protection is a joint effort.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            5. Implement Zero Trust Architecture
          </h2>
          <p>
            The “trust but verify” model is outdated. In 2025, businesses are
            moving toward Zero Trust, where every user, device, and application
            must continuously prove its legitimacy before gaining access. This
            model minimizes insider threats and limits lateral movement within
            networks. Zero Trust isn’t just a buzzword—it’s a mindset that
            ensures every interaction is authenticated, authorized, and
            encrypted.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            6. Backup and Recovery Planning
          </h2>
          <p>
            Cyber resilience means preparing for the worst. Even with strong
            defenses, data breaches or ransomware attacks can happen. A solid
            backup and disaster recovery strategy ensures your business can
            bounce back quickly. Use automated daily backups, store data in
            multiple locations, and test your recovery process regularly. The
            faster you can restore operations, the less damage an attack can
            cause.
          </p>

          <h2 className="text-xl font-semibold text-emerald-600">
            7. Stay Compliant and Continuously Updated
          </h2>
          <p>
            Cybersecurity isn’t a one-time setup—it’s an ongoing process.
            Regulations like GDPR, HIPAA, and new data protection laws emerging
            in 2025 demand continuous compliance. Keep your systems patched,
            software updated, and policies reviewed regularly. Outdated software
            is one of the easiest ways for hackers to get in. Pro Tip: Conduct
            quarterly vulnerability assessments and annual penetration testing.
          </p>

          <hr className="my-6 border-emerald-300" />

          <h2 className="text-xl font-semibold text-emerald-600">
            Final Thoughts
          </h2>

          <p className="font-semibold text-gray-700">
            In 2025, cybersecurity is as much about people and processes as it
            is about technology. Threats will continue to evolve, but so can
            your defenses. The key is to stay proactive, informed, and
            resilient.
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
  );
};

export default CybersecurityStrategies;
