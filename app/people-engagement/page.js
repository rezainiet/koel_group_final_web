"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const PeopleEngagement = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>People Engagement - Koel Group</title>
                <meta name="description" content="People Engagement page of Koel Group showcasing dedication to HR, empowerment, and organizational culture." />
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
                    className="text-5xl font-bold text-white relative z-10 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <TextGenerateEffect words="People Engagement" />
                </motion.h1>
            </header>

            {/* Content Sections */}
            <section className="container mx-auto px-4 py-16">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        The Major Driving Force
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                        The Koel Group is extremely proud of its outstanding HR team. They are the ones who work tirelessly to recruit, train, and keep top talent; they are the builders of our workforce's success. They create a vibrant organizational culture with their unrelenting dedication, ensuring that our employees continue to be our most important resource and driving force.
                    </p>
                </div>

                <div className="relative mb-16 flex flex-col lg:flex-row items-center">
                    <motion.div
                        className="lg:w-1/2 mb-8 lg:mb-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="https://via.placeholder.com/1200x600"
                            alt="Joy of Life"
                            width={1200}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </motion.div>
                    <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                        <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                            The Joy of Life
                        </h2>
                        <p className="text-lg leading-relaxed">
                            It’s a thrilling experience to work for Koel Group. The shift between personal fulfillment and unwavering dedication is seamless for our personnel, who genuinely like what they do. Our office pulsates with life and exudes unlimited energy, reflecting our vibrant culture and the enthusiasm of our devoted team members.
                        </p>
                    </div>
                </div>

                <div className="relative mb-16">
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8">
                        <div className="text-center text-white max-w-2xl">
                            <h2 className="text-3xl font-semibold mb-4">
                                Empowerment
                            </h2>
                            <p className="text-lg leading-relaxed">
                                In order to create effective collaboration among all levels of our business, trust is a cornerstone at Koel Group. It has a direct impact on achieving our corporate goals. In their contacts with coworkers and subordinates, our managers’ key responsibilities include fostering a culture of trust. Additionally, we place a strong emphasis on employee empowerment as a crucial management strategy that effectively inspires and guides our team members toward shared achievement.
                            </p>
                        </div>
                    </div>
                    <motion.div
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="https://via.placeholder.com/1200x600"
                            alt="Empowerment"
                            width={1200}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </motion.div>
                </div>

                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                        Value to the People
                    </h2>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                        Koel Group’s corporate culture is the cornerstone of our identity. It encompasses our fundamental principles, assumptions, and behaviors, determining our brand positioning and strategy. Employees, stockholders, and                         stakeholders all find it appealing. Our physical environment, HR procedures, and unwavering dedication to innovation, collaboration, social engagement, and community involvement are all examples of how our culture is expressed.
                    </p>
                </div>

                <div className="relative mb-16">
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8">
                        <div className="text-center text-white max-w-2xl">
                            <h2 className="text-3xl font-semibold mb-4">
                                Leadership Without Rank
                            </h2>
                            <p className="text-lg leading-relaxed">
                                The Koel Group acts as a platform for personal growth, developing each person’s potential and making aspirations come true. We place a high priority on developing our people capital, which includes both hard and soft abilities. Our employees are empowered by our customized training programs, which encourage leadership at every level and enable man and machine to work together for maximum efficiency.
                            </p>
                        </div>
                    </div>
                    <motion.div
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="https://via.placeholder.com/1200x600"
                            alt="Leadership Without Rank"
                            width={1200}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default PeopleEngagement;
