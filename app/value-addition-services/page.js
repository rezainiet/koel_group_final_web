"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import img1 from "@/public/images/value-addition-services/1.jpg"
import img2 from "@/public/images/value-addition-services/2.jpg"

const ValueAdditionServices = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>Value Addition Services - Koel Group</title>
                <meta name="description" content="Explore the unique value addition services provided by Koel Group including testing laboratories, printing, and embroidery." />
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
                    <TextGenerateEffect words="Value Addition Services" />
                </motion.h1>
            </header>

            {/* Testing Laboratory Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-[#59B8BE] mb-4">Testing Laboratory</h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        Our dedication to creating an outstanding laboratory culture is unmatched at Koel Group. We are adamant that having a capable lab can change the game in a number of ways. We are happy to have three different laboratories here at Koel Group, each with its own focus and objectives.
                    </p>
                </div>

                {/* Three Labs Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Formulation and Chemical Management Lab */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-bold text-[#59B8BE] mb-4">Formulation and Chemical Management Lab</h3>
                        <p className="text-lg">
                            At Koel Group, we are extremely proud of the hard-working group that creates season-appropriate color palettes that meet the stringent requirements of our clients. Our knowledgeable team carefully examines the best dyes, weighs cost factors, and guarantees that each color satisfies our exacting quality standards.
                        </p>
                    </div>

                    {/* Confirmation Lab */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-bold text-[#59B8BE] mb-4">Confirmation Lab</h3>
                        <p className="text-lg">
                            The Koel Group places a premium on doing things “Right the First Time,” notably in our Dyeing Section. In this situation, our Confirmation Lab plays a crucial role in assuring accurate color matching for bulk production and flawless reproducibility, ensuring accuracy both in the lab and at the level of bulk manufacturing.
                        </p>
                    </div>

                    {/* Sample Unit */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-bold text-[#59B8BE] mb-4">Sample Unit</h3>
                        <p className="text-lg">
                            The Koel Group’s dedication to innovation and quality is driven by the Sample Unit. Here, we painstakingly create and test prototypes, laying the groundwork for game-changing developments across numerous industries. We guarantee that every sample is a testament to excellence thanks to cutting-edge infrastructure and a committed workforce.
                        </p>
                    </div>
                </div>
            </section>

            {/* Printing Section */}
            <section className="bg-gray-800 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <Image
                            src={img1}
                            alt="Printing"
                            width={800}
                            height={600}
                            className="w-full md:w-1/2 rounded-lg shadow-lg mb-8 md:mb-0"
                        />
                        <div className="md:w-1/2 md:pl-8">
                            <h2 className="text-3xl font-semibold text-[#59B8BE] mb-4">Printing</h2>
                            <p className="text-lg leading-relaxed">
                                With accuracy and innovation, Koel Group revolutionizes the garment printing industry. Our state-of-the-art printing studio turns clothes into wearable pieces of art. We bring designs to life with vivid colors and exquisite details using cutting-edge processes including screen printing, digital printing, and heat transfer.
                                <br /><br />
                                Explore the fascinating world of apparel printing with us as we discover how fashion and creativity collide and where style knows no limitations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Embroidery Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-[#59B8BE] mb-4">Embroidery</h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        The needlework produced by Koel Group is an example of fine artistry. With accuracy and imagination, our talented craftspeople turn cloth into wearable works of art. We imbue clothing with distinctive character and elegance, using everything from elaborate floral motifs to modern styles.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <p className="text-lg leading-relaxed">
                            At Koel Group, embroidery serves as a sign of quality and elegance rather than just being an ornament. We improve collars, hems, and cuffs to give clothing a more upscale appearance. Join us on a trip where history and innovation collide and every stitch reveals the artistry behind it.
                            <br /><br />
                            At Koel Group, we use the craftsmanship of embroidery to build experiences rather than just clothing.
                        </p>
                    </div>
                    <Image
                        src={img2}
                        alt="Embroidery"
                        width={800}
                        height={600}
                        className="w-full md:w-1/2 rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* Garments Capacity Section */}
            <section className="bg-gray-900 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-[#59B8BE] mb-8">In Our Garments</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-[#59B8BE] mb-4">Printing</h3>
                            <p className="text-lg">600,000 pcs per month</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-[#59B8BE] mb-4">Embroidery</h3>
                            <p className="text-lg">80,000 pcs per month</p>
                        </div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-8">
                        The devotion, knowledge, and passion of the people on our current team have made a substantial contribution to the Koel Group’s continuous success. One’s dedication to excellence and desire to be a part of a forward-thinking, important organization within the industry are demonstrated by their decision to join our ranks.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default ValueAdditionServices;
