"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

import img1 from "@/public/images/one-step-ahead/one-step-ahead-1.jpg"
import img2 from "@/public/images/one-step-ahead/one-step-ahead-2.jpg"

const OneStepAhead = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>One Step Ahead - Koel Group</title>
                <meta name="description" content="One Step Ahead page of Koel Group showcasing innovation, sustainability, and commitment." />
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
                    <TextGenerateEffect words="One Step Ahead" />
                </motion.h1>
            </header>

            {/* Content Sections */}
            <section className="container mx-auto px-4 py-16">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        Let&apos;s go One Step Ahead
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                        Let&apos;s go One Step Ahead&quot; embodies Koel Group&apos;s ethos. We constantly push boundaries, embracing innovation and sustainability. With unwavering dedication, we lead the industry, leaving a lasting mark. Our commitment to progress drives us to continually redefine what&apos;s possible, shaping a brighter future for all.
                    </p>
                </div>

                <div className="relative mb-16 flex flex-col lg:flex-row items-center">
                    <motion.div
                        className="lg:w-1/2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src={img1}
                            alt="Fast Fashion"
                            width={1200}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </motion.div>
                    <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                        <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                            In the Era of Fast Fashion
                        </h2>
                        <p className="text-lg leading-relaxed">
                            The Koel Group is a shining example of sustainable business practices in the age of fast fashion. We craft goods that last, valuing quality over quantity. Our dedication to moral manufacturing practices and environmental stewardship guarantees that we make lasting, ethical contributions to the industry.
                        </p>
                    </div>
                </div>

                <div className="relative mb-16">
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8">
                        <div className="text-center text-white max-w-2xl">
                            <h2 className="text-3xl font-semibold mb-4">
                                Turning into Possibilities
                            </h2>
                            <p className="text-lg leading-relaxed">
                                The Koel Group’s culture is defined by “sharing and caring,” which promotes cohesion at all levels of our organization. A common vision is shared by executives, board members, and the expert hands running our machinery. We approach obstacles head-on and turn them into opportunities.
                            </p>
                        </div>
                    </div>
                    <motion.div
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src={img2}
                            alt="Possibilities"
                            width={1200}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </motion.div>
                </div>

                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                        Every Individual
                    </h2>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                        We at Koel Group believe that every person has limitless potential. This potential is unlocked on our platform, where creativity and innovation abound. Each employee will be able to stand tall and proudly lead the change for the betterment of our future and the Koel Group. We work as a remarkable leadership team as a group.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default OneStepAhead;
