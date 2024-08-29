"use client";

import { motion } from "framer-motion";
import Head from "next/head";

const Statistics = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>Our Business Statistics - Koel Group</title>
                <meta name="description" content="Explore the global business statistics of Koel Group, including market distribution and garment production capacity." />
            </Head>

            {/* Hero Section */}
            <header
                className="relative bg-cover bg-center h-96 flex items-center justify-center"
                style={{
                    backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-black-background_53876-92892.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <motion.h1
                    className="text-5xl font-bold text-white relative z-10 text-center p-4 bg-black bg-opacity-50 rounded-lg"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    Our Business Statistics
                </motion.h1>
            </header>

            {/* Statistics Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-[#59B8BE] mb-4">Global Market Distribution</h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        Explore our global presence and business distribution across various regions. Our expertise spans multiple continents, ensuring a strong market foothold in Europe, Asia, America, Africa, and Australia.
                    </p>
                </div>

                {/* Region Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Europe */}
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-3xl font-bold text-[#59B8BE] mb-4">Europe: 84%</h3>
                        <p className="text-lg mb-2">Germany: 21%</p>
                        <p className="text-lg mb-2">UK: 20%</p>
                        <p className="text-lg mb-2">Other Countries: 59%</p>
                        <p className="text-lg">Sweden, Netherlands, France, Italy, Belgium, Austria, Spain, Switzerland, Poland, Norway, Denmark, Croatia, Serbia, Slovakia.</p>
                    </motion.div>

                    {/* Africa */}
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-3xl font-bold text-[#59B8BE] mb-4">Africa: 1%</h3>
                        <p className="text-lg">South Africa</p>
                    </motion.div>

                    {/* Australia */}
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-3xl font-bold text-[#59B8BE] mb-4">Australia: 6%</h3>
                        <p className="text-lg mb-2">Australia: 5%</p>
                        <p className="text-lg">New Zealand: 1%</p>
                    </motion.div>

                    {/* Asia */}
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-3xl font-bold text-[#59B8BE] mb-4">Asia: 5%</h3>
                        <p className="text-lg">
                            Malaysia, India, China, Japan, UAE, Hong Kong, Russia, Indonesia, Lebanon, Turkey, Thailand, Philippines, Saudi Arabia, Korea, Taiwan, Vietnam.
                        </p>
                    </motion.div>

                    {/* America */}
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-3xl font-bold text-[#59B8BE] mb-4">America: 4%</h3>
                        <p className="text-lg mb-2">USA: 3%</p>
                        <p className="text-lg">Other Countries: 1%</p>
                        <p className="text-lg">Mexico, Canada, Chile, Peru, Colombia, Uruguay.</p>
                    </motion.div>
                </div>
            </section>

            {/* Overall Capacity Section */}
            <section className="bg-gray-800 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-[#59B8BE] mb-8">Overall Capacity</h2>
                    <motion.div
                        className="text-5xl font-bold mb-8"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Garments: 450,000 Pcs
                    </motion.div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        The Koel Group&apos;s ability to produce 450,000 garments each month is evidence of our commitment to excellence and innovation. We are pushing the envelope in the fashion sector by utilizing cutting-edge technologies and a forward-thinking attitude.
                    </p>
                </div>
            </section>

            {/* Capability Section */}
            <section className="container mx-auto px-4 py-16 bg-white rounded-3xl text-black mt-12">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold text-black mb-4">Capability to Look Into the Future</h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        Koel Group continually maintains a forward-looking mindset and takes preventative action to get ready for the future in order to grab opportunities as they arise. A noteworthy prediction is that the market for ready-made clothing will experience significant growth in the years to come. By adopting effective and ethical sourcing methods, Koel Group is positioning itself to lead the market while maintaining its social and environmental obligations with unwavering commitment.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Statistics;
