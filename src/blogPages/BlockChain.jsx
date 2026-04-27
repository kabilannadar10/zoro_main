import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlockChain = () => {

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
                Blockchain Beyond Cryptocurrency: Real-World Use Cases
            </motion.h1>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
                className="space-y-6 text-base sm:text-lg leading-relaxed"
            >
                <p>
                    When most people hear the word blockchain, their minds immediately jump to cryptocurrency—especially Bitcoin. And yes, blockchain is the technology that powers digital currencies. But today, blockchain has grown far beyond crypto. It has evolved into a powerful foundation for trust, transparency, and security, capable of transforming many industries that depend on accurate records and safe data sharing.
                </p>

                <p>
                    To understand blockchain simply: it is a digital ledger where information is recorded in blocks and linked in a secure chain. Once data is added, it cannot be easily changed, hacked, or hidden. This transparency is what makes blockchain so valuable in the real world.
                </p>

                <h2 className="text-xl font-semibold text-emerald-600">1. Supply Chain Transparency</h2>
                <p>
                    From food to fashion, supply chains involve many steps and people. Mistakes, fraud, and fake products are common issues. Blockchain allows every stage of a product’s journey—from raw materials to final delivery—to be recorded and verified.
                </p>
                <ul className="list-disc pl-6">
                    <li>Consumers can scan a product and know exactly where it came from</li>
                    <li>Companies can detect and prevent counterfeit goods</li>
                    <li>Farmers and manufacturers are paid fairly</li>
                </ul>
                <p>Brands like Walmart and Nestlé are already using blockchain to track food safety and origins.</p>

                <h2 className="text-xl font-semibold text-emerald-600">2. Smart Contracts</h2>
                <p>
                    A smart contract is a self-executing digital agreement stored on the blockchain. No lawyer or third party is needed. Once the conditions are met, the contract automatically completes the transaction.
                </p>
                <ul className="list-disc pl-6">
                    <li>Freelancers getting paid on time</li>
                    <li>Property rentals and sales</li>
                    <li>Automated insurance claims</li>
                </ul>
                <p>
                    Smart contracts reduce disputes, delays, and fraud—making business relationships smoother and transparent.
                </p>

                <h2 className="text-xl font-semibold text-emerald-600">3. Healthcare Data Security</h2>
                <p>
                    Healthcare relies heavily on sensitive patient data. Traditionally, this data is stored in centralized systems that are vulnerable to hacking or loss. Blockchain helps secure medical records, ensuring:
                </p>
                <ul className="list-disc pl-6">
                    <li>Patient data is private and tamper-proof</li>
                    <li>Doctors can access accurate history quickly</li>
                    <li>Patients have control over who sees their information</li>
                </ul>
                <p>This leads to better treatment and improved trust.</p>

                <h2 className="text-xl font-semibold text-emerald-600">4. Voting & Digital Identity</h2>
                <p>
                    Blockchain-based voting systems can prevent election fraud by making every vote traceable and verifiable—but still anonymous. Similarly, blockchain can support secure digital identity, reducing identity theft and making online authentication faster and safer.
                </p>

                <h2 className="text-xl font-semibold text-emerald-600">5. Creative Ownership & Royalties</h2>
                <p>
                    Artists, musicians, and content creators often struggle with piracy and unfair distribution of earnings. Blockchain enables them to:
                </p>
                <ul className="list-disc pl-6">
                    <li>Prove ownership of their work</li>
                    <li>Sell digital art or music directly to fans</li>
                    <li>Receive automatic royalty payments through smart contracts</li>
                </ul>
                <p>NFTs, though sometimes misunderstood, are an important part of this movement.</p>

                <h2 className="text-xl font-semibold text-emerald-600">A Technology Rooted in Trust</h2>
                <p>
                    The biggest benefit of blockchain is simple: trust. We live in a world where data can be edited, manipulated, or hidden. Blockchain brings honesty back into systems. It ensures that records are real, actions are traceable, and accountability is built in.
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

export default BlockChain;
