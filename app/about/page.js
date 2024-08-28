"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { TextGenerateEffect } from '../components/ui/text-generate-effect'
import ourJourney from '@/public/images/about_page/our_journey.jpg'
import recycling from '@/public/images/about_page/recycling.jpg'
import agriculture_02 from '@/public/images/about_page/agriculture_02.jpg'
import e_commerce from '@/public/images/about_page/e-commerce.jpg'
import construction from '@/public/images/about_page/construction.jpg'

const About = () => {
    return (
        <div className="bg-gray-900 text-gray-300 py-44 px-6 lg:px-24">
            <div className="max-w-screen-xl mx-auto space-y-24">
                {/* Header Section */}
                <motion.div
                    className="text-start"
                    // initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    {/* <TextGenerateEffect words='About Koel Group' /> */}
                    <div className='mt-12'></div>
                    <TextGenerateEffect words='Empowering industries, driving innovation, and sustaining growth.' />

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
                        <h2 className="text-3xl font-bold text-white">Our Journey</h2>
                        <p className="text-lg leading-relaxed">
                            Koel Group is one of the emerging apparel manufacturers and exporters in Bangladesh. The company launched its operation as a buying house — Koel Modish Apparel — under the dynamic and visionary leadership of our mentor Shaharier Alam in 2016. The Group is engaged in manufacturing all kinds of knitted garments and exporting them to various countries of Asia, Europe, and America. We have been able to gain the confidence of both local and international buyers since the commencement of our journey.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Inspired by the initial success, the company has invested in new sectors. More enterprises have been established, covering diverse activities like land development, garments waste recycling, agricultural production, and e-commerce.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        style={{ originY: 0 }}
                    >
                        <Image
                            src={ourJourney}
                            alt="Koel Group Journey"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </motion.div>

                {/* Business Units Section */}
                <motion.div
                    className="space-y-16"

                >
                    {/* Jayqo Textile & Accessories */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ scaleY: 0, opacity: 0, scale: 0.9 }}
                            whileInView={{ scaleY: 1, opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <Image
                                src={recycling}
                                alt="Jayqo Textile"
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
                            <h2 className="text-2xl font-semibold text-white">Jayqo Textile & Accessories (BD) Limited</h2>
                            <p className="text-lg leading-relaxed">
                                Jayqo Textile & Accessories (BD) Limited is engaged in recycling textile waste to ensure green development and a sustainable environment for future generations. We turn RMG waste into recyclable cotton and yarn, and produce garments trims and accessories for both local and international markets.
                            </p>
                        </motion.div>
                    </div>

                    {/* Anisha Agricultural Industry Ltd */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="order-2 lg:order-1 space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-white">Anisha Agricultural Industry Ltd</h2>
                            <p className="text-lg leading-relaxed">
                                Anisha Agricultural Industry Ltd has brought a new dimension to agriculture, livestock, and fisheries sectors. The company is committed to producing and delivering fresh and healthy food and feed products to meet the growing demand from local and global consumers.
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
                                src={agriculture_02}
                                alt="Anisha Agricultural"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>

                    {/* Koel.shop */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                        >
                            <Image
                                src={e_commerce}
                                alt="Koel.shop"
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
                            <h2 className="text-2xl font-semibold text-white">Koel.shop</h2>
                            <p className="text-lg leading-relaxed">
                                We have recently launched an e-commerce business, Koel.shop, to bring about an innovative change in smart marketing systems for RMG-based products. The platform meets the increasing demands of our valued customers and buyers.
                            </p>
                        </motion.div>
                    </div>

                    {/* Quest Developers and Construction */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="order-2 lg:order-1 space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-white">Quest Developers and Construction</h2>
                            <p className="text-lg leading-relaxed">
                                Quest Developers and Construction operates under our group to open new dimensions in the land development and real estate sectors, as well as the supply chain of raw construction materials in the country.
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
                                src={construction}
                                alt="Quest Developers"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
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
                        With continuous investment in new sectors and unwavering dedication to quality, Koel Group is committed to making a positive impact on the economy and society, ensuring sustainable growth for future generations.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About
