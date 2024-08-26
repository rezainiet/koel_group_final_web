"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';

const Sustainability = () => {
    return (
        <div className="bg-gray-900 text-gray-300 py-44 px-6 lg:px-24">
            <div className="max-w-screen-xl mx-auto space-y-24">
                {/* Header Section */}
                <motion.div
                    className="text-start"
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <TextGenerateEffect words='Sustainability at the Core of Our Mission' />
                </motion.div>

                {/* Introduction Section with Image */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                >
                    <motion.div className="space-y-8"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-white">Our Commitment to Sustainability</h2>
                        <p className="text-lg leading-relaxed">
                            At Koel Group, we prioritize sustainability in all our operations. From innovative recycling methods to eco-friendly practices, our goal is to minimize environmental impact while maximizing positive social contributions. We are dedicated to leading by example and driving change through responsible practices.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Our commitment extends beyond just words; it is ingrained in our processes and culture. We invest in sustainable technologies and strive to create a positive ripple effect across industries.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        style={{ originY: 0 }}
                    >
                        <Image
                            src="http://via.placeholder.com/1280x720"
                            alt="Sustainability"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </motion.div>

                {/* Sustainable Practices Section */}
                <motion.div
                    className="space-y-16"
                >
                    {/* Practice 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ scaleY: 0, opacity: 0, scale: 0.9 }}
                            whileInView={{ scaleY: 1, opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <Image
                                src="http://via.placeholder.com/1280x720"
                                alt="Sustainable Practice 1"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-white">Eco-Friendly Manufacturing</h2>
                            <p className="text-lg leading-relaxed">
                                We use state-of-the-art technology to reduce waste and energy consumption in our manufacturing processes. Our facilities are designed to operate with minimal environmental impact, and we continuously seek ways to improve our sustainability practices.
                            </p>
                        </motion.div>
                    </div>

                    {/* Practice 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="order-2 lg:order-1 space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-white">Sustainable Sourcing</h2>
                            <p className="text-lg leading-relaxed">
                                Our materials are sourced from suppliers who adhere to sustainable practices. We prioritize partnerships with those committed to reducing their environmental footprint and ensuring fair labor practices.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                            className="order-1 lg:order-2"
                        >
                            <Image
                                src="http://via.placeholder.com/1280x720"
                                alt="Sustainable Sourcing"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>

                    {/* Practice 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                        >
                            <Image
                                src="http://via.placeholder.com/1280x720"
                                alt="Sustainable Practice 3"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-white">Community Engagement</h2>
                            <p className="text-lg leading-relaxed">
                                We are actively involved in community initiatives aimed at promoting environmental conservation and social responsibility. Our efforts include educational programs, community clean-up events, and partnerships with local organizations.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Conclusion Section */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-400">
                        Our commitment to sustainability is reflected in everything we do. By prioritizing eco-friendly practices and engaging with our community, we aim to create a more sustainable future for generations to come.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Sustainability;
