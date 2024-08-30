"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import img1 from "@/public/images/agro/1.jpg"
import img2 from "@/public/images/agro/2.jpg"
import img3 from "@/public/images/agro/3.jpg"
import img4 from "@/public/images/agro/4.jpg"
import img5 from "@/public/images/agro/5.jpg"
import img6 from "@/public/images/agro/6.jpg"
import img7 from "@/public/images/agro/7.jpg"

const Agro = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>Agro - Anisha Agriculture Industries</title>
                <meta name="description" content="Agro page showcasing Anisha Agriculture Industries with a focus on sustainable farming practices." />
            </Head>

            {/* Hero Section */}
            <header
                className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
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
                    <TextGenerateEffect words="Anisha Agriculture Industries" />
                </motion.h1>
            </header>

            {/* Anisha Agriculture Industry Ltd Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-[#6AC9D0] mb-4">
                        Anisha Agriculture Industry Ltd
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        We at Anisha Agriculture Industry, a proud subsidiary of the Koel Group, are dedicated to utilizing the potential of agriculture to support long-term development. We have a long history of success in agro-based enterprises and have earned a reputation for quality. We create high-quality crops and agricultural goods because we are passionate about protecting the environment.
                    </p>
                </div>

                {/* Sustainable Farming Section */}
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <Image
                            src={img1}
                            alt="Sustainable Farming"
                            width={1200}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 lg:pl-8">
                        <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                            Sustainable Farming
                        </h2>
                        <p className="text-lg leading-relaxed">
                            The Koel Group is deeply committed to using sustainable agricultural methods and is at the forefront of the modernizing of agriculture. Our goal is to balance agriculture and the environment. We use cutting-edge methods to minimize resource use and cut carbon footprints.
                            <br /><br />
                            Our practices, which range from organic farming to precision agriculture, put the welfare of the environment first. We use cutting-edge technology and green alternatives to increase agricultural yields while protecting the biodiversity and health of the land.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="bg-gray-800 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-8 text-center">
                        Image Gallery
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="relative h-64">
                            <Image
                                src={img2}
                                alt="Gallery Image 1"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative h-64">
                            <Image
                                src={img3}
                                alt="Gallery Image 2"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative h-64">
                            <Image
                                src={img4}
                                alt="Gallery Image 3"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative h-64">
                            <Image
                                src={img5}
                                alt="Gallery Image 4"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative h-64">
                            <Image
                                src={img6}
                                alt="Gallery Image 5"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative h-64">
                            <Image
                                src={img7}
                                alt="Gallery Image 6"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Agro;
