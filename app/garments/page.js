"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const Garments = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>Garments - Koel Group</title>
                <meta name="description" content="Garments page showcasing Jayqo Textile & Accessories (BD) Ltd's commitment to sustainable practices, knitting, finishing, and overall production capabilities." />
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
                    <TextGenerateEffect words="Garments" />
                </motion.h1>
            </header>

            {/* Jayqo Textile Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-[#6AC9D0] mb-4">
                        Jayqo Textile (BD) Ltd
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        At Jayqo Textile & Accessories (BD) Ltd, we are committed to promoting green development and a sustainable environment for future generations through our garment waste recycling efforts. Our mission is to produce the best quality jackets for our customers while minimizing our environmental impact.
                        <br /><br />
                        We understand the importance of sustainable practices and the impact of the textile industry on the environment. That’s why we have implemented a garment waste recycling program, which enables us to recycle and repurpose materials to create new products, reducing waste and conserving natural resources.
                    </p>
                </div>

                {/* Knitting Section */}
                <div className="mb-16 flex flex-col lg:flex-row items-center">
                    <motion.div
                        className="lg:w-1/2 mb-8 lg:mb-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="https://via.placeholder.com/1200x600"
                            alt="Knitting"
                            width={1200}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </motion.div>
                    <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                        <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                            Knitting
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Fabric versatility is the cornerstone of success in the textile industry, and the ability to manufacture a wide range of fabrics and designs is key to unlocking future opportunities. At Koel Group, we are committed to staying one step ahead of our competitors to seize these opportunities. Currently, we boast a state-of-the-art facility with 200 circular-knit machines and 75 flat-knit machines, enabling us to produce an extensive array of fabrics, including Single Jersey, Double Jersey, Jacquard, Engineering Stripe fabrics, as well as Semi-Jacquard and Jacquard design collars & cuffs. Our dedication lies in being the frontrunner in delivering diversified quality using the latest technology, spanning from coarser to super-fine weft-knitted fabrics.
                        </p>
                    </div>
                </div>

                {/* Finishing Section */}
                <div className="relative mb-16 h-auto">
                    <motion.div
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="https://koelgroupbd.com/wp-content/uploads/2023/09/69-1024x681.jpg"
                            alt="Finishing"
                            width={1200}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center px-8 py-12">
                        <div className="text-center text-white max-w-2xl py-12">
                            <h2 className="text-3xl font-semibold mb-4">
                                Finishing
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Finishing is the foundation of value addition in our production process, according to Koel Group. Our production line isn’t your typical setup; it stands as a monument to originality and effectiveness. With the ultimate aim of raising our fabrics to previously unheard-of levels of quality in both physical and technical characteristics, over the years, our unrelenting commitment to innovation has led us to incorporate the most recent technological breakthroughs in our finishing processes.
                                <br /><br />
                                Our finishing facility, which has not one, not two, but an amazing five “Open-Setting Finishing” lines, is a blank canvas for creativity. Our cutting-edge “Compacting Finishing” line, an ultra-modern marvel that is nothing short of unique, is what truly sets us apart in the textile industry.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Production Capacity Section */}
                <div className="text-center mb-16 bg-gray-800 py-8 rounded-lg">
                    <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                        Production Capacity
                    </h2>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                        The Koel Group is a key participant in fostering economic expansion and the backbone of our country’s economy. In fact, the efforts of the Koel Group are essential to the entire nation. Our progress has been largely attributed to our talented and motivated employees, unwavering devotion to developing new products and designs, and unwavering commitment to upholding the highest standards.
                        <br /><br />
                        A firm dedication to quality and punctuality, fully in line with the demands of our esteemed clients and partners, is at the core of Koel Group’s success. As we advance, we are steadfast in our commitment to provide top-notch goods and services that will set the standard for excellence in our sector.
                        <br /><br />
                        <strong>Sewing Capacity:</strong> 450,000 pcs per month
                        <br />
                        <strong>Work Stations:</strong> 780
                        <br />
                        <strong>Lines:</strong> 10
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Garments;
