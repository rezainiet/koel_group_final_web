"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import img1 from "@/public/images/construction/1.jpg";
import img2 from "@/public/images/construction/2.jpg";
import img3 from "@/public/images/construction/3.jpg";
import img4 from "@/public/images/construction/4.jpg";
import img5 from "@/public/images/construction/5.jpg";
import img6 from "@/public/images/construction/6.jpg";
import img7 from "@/public/images/construction/7.jpg";

const Construction = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>Construction - Quest</title>
                <meta name="description" content="Construction page showcasing Quest Construction Company with a focus on sustainable building practices." />
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
                    <TextGenerateEffect words="Construction" />
                </motion.h1>
            </header>

            {/* Quest Construction Company Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-[#6AC9D0] mb-4">
                        Quest
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        A proud member of the Koel Group, Quest Construction Company is a leader in the construction sector. We set out on a mission to design structures that will shape the future with an unrelenting dedication to excellence, creativity, and sustainability.
                        <br /><br />
                        To provide solutions that go above and beyond expectations, our committed team combines knowledge with cutting-edge technology. We take pride in our varied portfolio, which includes infrastructure built sustainably as well as imposing buildings.
                    </p>
                </div>

                {/* Sustainable Building Section */}
                <div className="relative flex flex-col lg:flex-row items-center bg-gray-900 rounded-lg overflow-hidden">
                    <Image
                        src={img1}
                        alt="Sustainable Building"
                        width={1200}
                        height={600}
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-8">
                        <div className="text-center text-white max-w-lg">
                            <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                                Sustainable Building
                            </h2>
                            <p className="text-lg leading-relaxed">
                                With a dedication to environmental responsibility, Koel Group is redefining the construction industry as a leader in sustainable building methods. Our strategy blends cutting-edge architectural design with environmentally friendly technologies to produce buildings that blend in with the environment.
                                <br /><br />
                                Without sacrificing style or use, we prioritize sustainability through the use of eco-friendly materials and energy-efficient designs. Our work exemplifies the durable, intelligent, and green construction of the future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="bg-gray-800 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-8 text-center">
                        Project Gallery
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

export default Construction;
