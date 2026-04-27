import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CyberSecurity2025 = () => {

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
                Cybersecurity Trends in 2025: What Businesses Must Know
            </motion.h1>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
                className="space-y-6 text-base sm:text-lg leading-relaxed"
            >
                <p>
                    As technology becomes more integrated into everyday business operations, the threat landscape grows more complex. In 2025, cybersecurity is no longer a background IT function — it is a core business priority. From small startups to global enterprises, companies must strengthen their defenses, adapt to new digital risks, and build a culture of security awareness. Understanding the latest cybersecurity trends is the first step toward protecting your data, customers, and reputation.
                </p>

                <h2 className="text-xl font-semibold text-emerald-600">1. AI-Powered Cyberattacks Are Becoming Smarter</h2>
                <p>
                    Artificial Intelligence is transforming industries — but cybercriminals are using it too. Hackers now rely on AI to automate attacks, create convincing phishing emails, scan for vulnerabilities, and even break passwords faster.
                </p>
                <p><strong>What Businesses Should Do:</strong> Invest in AI-driven security tools, anomaly detection systems, and continuous monitoring to stay one step ahead.</p>

                <h2 className="text-xl font-semibold text-emerald-600">2. Zero Trust Security Will Become the Standard</h2>
                <p>
                    Traditional firewall-based security is no longer enough. Zero Trust means “Never trust, always verify” — every user, device, and app must prove its authenticity.
                </p>
                <p><strong>Why It Matters:</strong> As remote work continues, Zero Trust reduces the risk of internal breaches and unauthorized access.</p>

                <h2 className="text-xl font-semibold text-emerald-600">3. Ransomware Attacks Will Increase</h2>
                <p>
                    Ransomware remains one of the biggest threats. Criminals encrypt company files and demand payment to unlock them. In 2025, attacks will target cloud platforms, healthcare, finance, and government systems.
                </p>
                <p><strong>How Businesses Can Respond:</strong></p>
                <ul className="list-disc pl-6">
                    <li>Maintain offline backups</li>
                    <li>Use multi-factor authentication (MFA)</li>
                    <li>Train employees to detect phishing attempts</li>
                </ul>

                <h2 className="text-xl font-semibold text-emerald-600">4. Rise of Quantum-Safe Encryption</h2>
                <p>
                    Quantum computing is advancing, and once it matures, it could break many existing encryption algorithms. This means businesses must begin transitioning to quantum-resistant encryption in the coming years.
                </p>
                <p><strong>Businesses Need to Start Preparing Now</strong> to avoid future vulnerabilities.</p>

                <h2 className="text-xl font-semibold text-emerald-600">5. Human Error Still Causes Most Breaches</h2>
                <p>
                    Despite advanced technologies, the human element remains the weakest link. Employees accidentally click malicious links, use weak passwords, or mishandle data.
                </p>
                <p><strong>Effective Solution:</strong> Conduct regular cybersecurity training, run phishing simulations, and implement strict access controls.</p>

                <h2 className="text-xl font-semibold text-emerald-600">6. Cloud Security Will Demand More Attention</h2>
                <p>
                    With more businesses moving to cloud platforms, misconfigurations and weak access control have become leading causes of breaches. Cloud environments need specialized monitoring and well-defined policies.
                </p>

                <h2 className="text-xl font-semibold text-emerald-600">7. Cyber Insurance Will Become a Business Essential</h2>
                <p>
                    As attacks rise, many companies are turning to cyber insurance for financial protection. However, insurers now require companies to follow strict security standards before approval.
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

export default CyberSecurity2025;
