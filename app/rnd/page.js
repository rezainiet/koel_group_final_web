"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import img1 from "@/public/images/rnd/1.jpg"
import img2 from "@/public/images/rnd/2.jpg"
import img3 from "@/public/images/rnd/3.jpg"
import img4 from "@/public/images/rnd/4.jpg"
import img5 from "@/public/images/rnd/5.jpg"
import img6 from "@/public/images/rnd/6.jpg"
import img7 from "@/public/images/rnd/7.jpg"
import img8 from "@/public/images/rnd/8.jpg"
import img9 from "@/public/images/rnd/9.jpg"
import img10 from "@/public/images/rnd/10.jpg"

const rnd = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>R & D - Koel Group</title>
                <meta name="description" content="Explore Koel Group's commitment to innovation, research, and development in the textile industry, including fabric R&D, innovation R&D, and our design studio." />
            </Head>

            {/* Fabric R&D Section */}
            <section
                className="relative bg-cover bg-center h-auto py-24"
                style={{
                    backgroundImage: `url(${img1})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        className="text-4xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        Fabric R&D
                    </motion.h1>
                    <motion.p
                        className="text-lg leading-relaxed max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        Our Garments Fabric R&D at Koel Group is committed to the constant pursuit of textile innovation. In order to create fabrics that redefine comfort, durability, and style, we investigate cutting-edge materials and methods. By making materials that exceed expectations in both fashion and functionality, we hope to advance the textile industry.
                    </motion.p>
                </div>
            </section>

            {/* Innovation R&D Section */}
            <section className="py-24 bg-gray-800">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-semibold text-[#59B8BE] text-center mb-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        Innovation R&D
                    </motion.h2>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            <Image
                                src={img2}
                                width={600}
                                height={400}
                                alt="Innovation R&D"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="md:w-1/2 mt-8 md:mt-0 md:ml-8"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            <p className="text-lg leading-relaxed">
                                The core of Koel Group&apos;s fashion-forward strategy is our Garments Innovation R&D. Using cutting-edge tools and innovative design ideas, we relentlessly investigate the nexus between art and science. The goal of our team is to provide clothing that embodies innovation, style, and functionality while redefining the apparel business.
                            </p>
                            <p className="text-lg leading-relaxed mt-4">
                                We are innovators in changing how people dress, using anything from sustainable materials to smart textiles. By setting new benchmarks for fashion excellence and pushing the limits of innovation in the apparel business, Koel Group&apos;s Garments Innovation R&D ensures that our collections surpass the constantly changing expectations of our clients.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-gray-900">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        className="text-4xl font-semibold text-[#59B8BE] mb-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        Design Studio
                    </motion.h2>
                    <motion.p
                        className="text-lg leading-relaxed max-w-4xl mx-auto mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        At Koel Group, we understand the synergy between Innovation and Design in meeting the dynamic demands of fast fashion. Our Design Team is a fusion of youthful creativity and seasoned expertise, constantly pushing the boundaries of fashion in our state-of-the-art Design Studio.
                    </motion.p>

                    {/* Masonry-style grid layout */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <div className="h-60">
                            <Image
                                src={img3}
                                alt="Design Studio Image 1"
                                width={300}
                                height={400}
                                className="h-full w-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="h-80">
                            <Image
                                src={img4}
                                alt="Design Studio Image 2"
                                width={300}
                                height={500}
                                className="h-full w-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="h-48">
                            <Image
                                src={img5}
                                alt="Design Studio Image 3"
                                width={300}
                                height={300}
                                className="h-full w-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="h-64">
                            <Image
                                src={img6}
                                alt="Design Studio Image 4"
                                width={300}
                                height={400}
                                className="h-full w-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="h-72">
                            <Image
                                src={img7}
                                alt="Design Studio Image 5"
                                width={300}
                                height={450}
                                className="h-full w-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="h-52">
                            <Image
                                src={img8}
                                alt="Design Studio Image 6"
                                width={300}
                                height={350}
                                className="h-full w-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default rnd;
