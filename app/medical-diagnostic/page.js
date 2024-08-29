"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const ArhamDiagnosticCenter = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>ARHAM Diagnostic Center - Koel Group</title>
                <meta name="description" content="ARHAM Diagnostic Center page showcasing high-quality diagnostic services from Koel Group." />
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
                    <TextGenerateEffect words="ARHAM Diagnostic Center" />
                </motion.h1>
            </header>

            {/* ARHAM Diagnostic Center Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-[#6AC9D0] mb-4">
                        ARHAM Diagnostic Center
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        The Koel Group company ARHAM Diagnostic Center is committed to raising the standard of medical care. We are dedicated to providing accurate and timely diagnostic services and are equipped with state-of-the-art technology and a staff of highly qualified professionals.
                        <br /><br />
                        Our persistent commitment to precision and patient welfare guarantees that patients obtain top-notch medical diagnostics. At ARHAM, we are committed to offering healthcare solutions that enable people to make educated choices about their health.
                        <br /><br />
                        We are pioneering improvements in diagnostic services with the steadfast backing of the Koel Group, fostering a healthier and more promising future for all. Excellence is our trademark at ARHAM Diagnostic Center, where healthcare and innovation converge.
                    </p>
                </div>

                {/* Doctor Consultation Section */}
                <div className="relative flex flex-col lg:flex-row items-center bg-gray-900 rounded-lg overflow-hidden">
                    <Image
                        src="https://via.placeholder.com/1200x600"
                        alt="Doctor Consultation"
                        width={1200}
                        height={600}
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-8">
                        <div className="text-center text-white max-w-lg">
                            <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                                Doctor Consultation
                            </h2>
                            <p className="text-lg leading-relaxed">
                                We at Koel Group recognize the critical nature of your health. We provide thorough and easily accessible doctor consultation services as a result. Our team of skilled and compassionate medical professionals is committed to giving you the highest quality care.
                                <br /><br />
                                Whether you need a general checkup or specific medical guidance, our experts are available to listen to you, make an accurate diagnosis, and direct you toward optimum health. Your health is our top priority, and we provide telemedicine choices for your convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="bg-gray-800 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">
                        Diagnostic Gallery
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="relative h-64">
                            <Image
                                src="https://via.placeholder.com/400x300"
                                alt="Diagnostic Service 1"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative h-64">
                            <Image
                                src="https://via.placeholder.com/400x300"
                                alt="Diagnostic Service 2"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative h-64">
                            <Image
                                src="https://via.placeholder.com/400x300"
                                alt="Diagnostic Service 3"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative h-64">
                            <Image
                                src="https://via.placeholder.com/400x300"
                                alt="Diagnostic Service 4"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative h-64">
                            <Image
                                src="https://via.placeholder.com/400x300"
                                alt="Diagnostic Service 5"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative h-64">
                            <Image
                                src="https://via.placeholder.com/400x300"
                                alt="Diagnostic Service 6"
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

export default ArhamDiagnosticCenter;
