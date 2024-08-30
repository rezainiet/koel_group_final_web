"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import bgmea from "@/public/images/compliance/bgmea.jpg";
import eCab from "@/public/images/compliance/e-cab.jpg";
import award from "@/public/images/compliance/award.jpg";

const Compliance = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>Compliance - Koel Group</title>
                <meta
                    name="description"
                    content="Learn about Koel Group's unwavering dedication to the highest standards of compliance in the clothing industry, including certifications and awards."
                />
            </Head>

            {/* Hero Section */}
            <header
                className="relative bg-cover bg-center h-96 flex items-center justify-center"
                style={{
                    backgroundImage:
                        'url("https://img.freepik.com/free-vector/abstract-black-background_53876-92892.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <motion.h1
                    className="text-5xl font-bold text-white relative z-10 text-center p-4 bg-black bg-opacity-50 rounded-lg"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    Compliance
                </motion.h1>
            </header>

            {/* Compliance Overview Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        Our Commitment to Compliance
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        The Koel Group is unwaveringly dedicated to fulfilling the
                        strictest requirements for clothing compliance. We place a high
                        priority on the health of our employees, follow strict
                        environmental rules, and conduct business ethically. Beyond
                        adherence, our dedication to compliance forms the foundation of
                        our business identity.
                    </p>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-6">
                        We make ongoing investments to guarantee secure and
                        environmentally friendly production procedures while maintaining
                        a work environment that respects honesty, equality, and
                        openness. The Koel Group&apos;s unrelenting commitment to
                        compliance underlines our commitment to providing products of
                        excellent quality and integrity to our esteemed clients as well
                        as our responsibilities to society and the environment.
                    </p>
                </div>
            </section>

            {/* Certification and Awards Section */}
            <section className="bg-gray-800 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-semibold text-white mb-8">
                        Certifications and Awards
                    </h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        {/* Certification 1 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image
                                src={bgmea}
                                alt="BGMEA"
                                className="w-full h-auto object-cover mb-4 rounded"
                            />
                            <h3 className="text-2xl font-bold text-white mb-4">BGMEA</h3>
                        </div>

                        {/* Certification 2 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image
                                src={eCab}
                                alt="E-Cab"
                                className="w-full h-auto object-cover mb-4 rounded"
                            />
                            <h3 className="text-2xl font-bold text-white mb-4">E-Cab</h3>
                        </div>

                        {/* Award 1 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image
                                src={award}
                                alt="Award of Shahriar Ahmed Koel"
                                className="w-full h-auto object-cover mb-4 rounded"
                            />
                            <h3 className="text-2xl font-bold text-white mb-4">AWARD</h3>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Compliance;
