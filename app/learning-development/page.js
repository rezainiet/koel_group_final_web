"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

const LearningDevelopment = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>Learning & Development - Koel Group</title>
                <meta name="description" content="Discover how Koel Group promotes excellence in the apparel sector through learning and development, offering structured training and fostering a culture of growth." />
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
                    Learning & Development
                </motion.h1>
            </header>

            {/* Overview Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <div className="mb-16">
                    <h2 className="text-4xl font-semibold text-[#59B8BE] mb-4">Our Commitment to Excellence</h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        The Koel Group is committed to promoting excellence in the apparel sector through learning and development. Our dedication to innovation and skill development enables our workforce to reach new heights. We ensure that our team is prepared to lead in this fast-paced industry by providing structured training and fostering a culture of growth.
                    </p>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-6">
                        The Ready-Made Garment (RMG) industry is a beacon of success and potential. The key to achieving its heights lies in dedicated learning and development. The Koel Group invests in ongoing growth and skill development, ensuring our team is equipped to excel in the global business arena.
                    </p>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="bg-gray-800 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold text-[#59B8BE] mb-8 text-center">Learning & Development Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <div className="relative">
                            <Image
                                src="https://via.placeholder.com/400x300"
                                alt="Learning Image 1"
                                layout="responsive"
                                width={400}
                                height={300}
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="relative">
                            <Image
                                src="https://via.placeholder.com/400x500"
                                alt="Learning Image 2"
                                layout="responsive"
                                width={400}
                                height={500}
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="relative">
                            <Image
                                src="https://via.placeholder.com/400x350"
                                alt="Learning Image 3"
                                layout="responsive"
                                width={400}
                                height={350}
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="relative">
                            <Image
                                src="https://via.placeholder.com/400x450"
                                alt="Learning Image 4"
                                layout="responsive"
                                width={400}
                                height={450}
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="relative">
                            <Image
                                src="https://via.placeholder.com/400x350"
                                alt="Learning Image 5"
                                layout="responsive"
                                width={400}
                                height={350}
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="relative">
                            <Image
                                src="https://via.placeholder.com/400x300"
                                alt="Learning Image 6"
                                layout="responsive"
                                width={400}
                                height={300}
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LearningDevelopment;
