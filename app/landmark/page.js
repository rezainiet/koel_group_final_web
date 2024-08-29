"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const landmarks = [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400"
];

const Landmark = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>Landmark - Koel Group</title>
                <meta name="description" content="Landmark page of Koel Group showcasing excellence, sustainability, and legacy." />
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
                    className="text-5xl font-bold text-white relative z-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <TextGenerateEffect words="Landmarks" />
                </motion.h1>
            </header>

            {/* Content Sections */}
            <section className="container mx-auto px-4 py-16">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        Our Commitment to Excellence
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                        The assets owned by Koel Group showcase our dedication to excellence and innovation. Our buildings, ranging from state-of-the-art industrial facilities to eco-friendly office spaces, stand as a testament to our commitment to efficiency, environmental responsibility, and cutting-edge design.
                    </p>
                </div>

                <div className="relative mb-16">
                    <motion.div
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="https://via.placeholder.com/1200x600"
                            alt="Sustainability"
                            width={1200}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </motion.div>
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center text-white max-w-2xl bg-black bg-opacity-60 p-6 rounded-lg">
                            <h2 className="text-3xl font-semibold mb-4">
                                Journey Towards Sustainability
                            </h2>
                            <p className="text-lg leading-relaxed">
                                The Koel Group’s path to sustainability is marked by deliberate efforts to reduce our environmental footprint. We embrace green practices, minimize waste, and adopt innovative technologies to foster a sustainable and responsible future for our industry and the planet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-16 flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-8">
                        <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                            Our Legacy
                        </h2>
                        <p className="text-lg leading-relaxed">
                            The Koel Group’s legacy is a rich blend of innovation, integrity, and commitment. Our decades of industry leadership have left an enduring mark on business, technology, and society. Our legacy reflects our dedication to sustainable practices, community empowerment, and talent development.
                        </p>
                    </div>
                    <motion.div
                        className="lg:w-1/2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="https://via.placeholder.com/500x300"
                            alt="Legacy"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>

                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                        Growth & Opportunity
                    </h2>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                        Our assets represent our unwavering commitment to excellence and innovation. Our facilities, from advanced industrial centers to sustainable office environments, embody our focus on efficiency, environmental stewardship, and forward-thinking design.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-8 text-center">
                    Showcase of Our Landmarks
                </h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {landmarks.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src={src}
                                alt={`Landmark Image ${index + 1}`}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg">View Image</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </main>
    );
};

export default Landmark;
