"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import img1 from "@/public/images/corporate-culture/1.jpg"
import img2 from "@/public/images/corporate-culture/2.jpg"
import img3 from "@/public/images/corporate-culture/3.jpg"
import img4 from "@/public/images/corporate-culture/4.jpg"
import img5 from "@/public/images/corporate-culture/5.jpg"
import img6 from "@/public/images/corporate-culture/6.jpg"

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
];

const CorporateCulture = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>Corporate Culture - Koel Group</title>
                <meta name="description" content="Corporate Culture page of Koel Group" />
            </Head>

            {/* Hero Section with background image and text animation */}
            <header
                className="bg-cover bg-center h-96 relative"
                style={{
                    backgroundImage:
                        'url("https://img.freepik.com/free-vector/abstract-black-background_53876-92892.jpg")',
                }}
            >
                <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
                    <motion.h1
                        className="text-5xl font-bold text-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <TextGenerateEffect words="Corporate Culture" />
                    </motion.h1>
                </div>
            </header>

            <section className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        Corporate Responsibility
                    </h2>
                    <div className="flex items-center justify-center gap-1 mb-8">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-12 h-3 rounded-full bg-blue-500"></div>
                    </div>
                    <p className="text-lg leading-relaxed">
                        The Koel Group has a strong commitment to corporate social
                        responsibility, concentrating on environmentally responsible
                        operations, community involvement, and sustainable business
                        methods.
                    </p>
                </div>

                <div className="mb-12 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                        <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                            Employee Goodwill
                        </h2>
                        <p className="text-lg leading-relaxed">
                            At Koel Group, employee morale is of utmost importance. We
                            prioritize well-being, encourage professional development, and a
                            positive work environment.
                        </p>
                    </div>
                    <motion.div
                        className="lg:w-1/2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src={img4}
                            alt="Employee Goodwill"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>

                <div className="mb-12 flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-8">
                        <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                            Community Engagement
                        </h2>
                        <p className="text-lg leading-relaxed">
                            The Koel Group supports involved community involvement. To
                            support social, health, and educational initiatives, we work in
                            partnership with neighborhood communities.
                        </p>
                    </div>
                    <motion.div
                        className="lg:w-1/2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src={img6}
                            alt="Community Engagement"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-8 text-center">
                    Image Gallery
                </h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </main>
    );
};

export default CorporateCulture;
