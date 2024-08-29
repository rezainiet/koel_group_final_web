"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const Compliance = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>Compliance - Koel Group</title>
                <meta name="description" content="Learn about Koel Group's unwavering dedication to the highest standards of compliance in the clothing industry, including certifications and awards." />
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
                    Compliance
                </motion.h1>
            </header>

            {/* Compliance Overview Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-[#59B8BE] mb-4">Our Commitment to Compliance</h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#59B8BE] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        The Koel Group is unwaveringly dedicated to fulfilling the strictest requirements for clothing compliance. We place a high priority on the health of our employees, follow strict environmental rules, and conduct business ethically. Beyond adherence, our dedication to compliance forms the foundation of our business identity.
                    </p>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-6">
                        We make ongoing investments to guarantee secure and environmentally friendly production procedures while maintaining a work environment that respects honesty, equality, and openness. The Koel Group&apos;s unrelenting commitment to compliance underlines our commitment to providing products of excellent quality and integrity to our esteemed clients as well as our responsibilities to society and the environment.                    </p>
                </div>
            </section>

            {/* Certification and Awards Section */}
            <section className="bg-gray-800 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-semibold text-[#59B8BE] mb-8">Certifications and Awards</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        {/* Certification 1 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image
                                width={300}
                                height={200}
                                src="https://via.placeholder.com/300x200"
                                alt="ISO 9001:2015 Certification"
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h3 className="text-2xl font-bold text-[#59B8BE] mb-4">ISO 9001:2015</h3>
                            <p className="text-lg leading-relaxed">
                                Certification in Quality Management Systems demonstrating our commitment to consistent quality and customer satisfaction.
                            </p>
                        </div>

                        {/* Certification 2 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image
                                width={300}
                                height={200}
                                src="https://via.placeholder.com/300x200"
                                alt="OEKO-TEX® Standard 100"
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h3 className="text-2xl font-bold text-[#59B8BE] mb-4">OEKO-TEX® Standard 100</h3>
                            <p className="text-lg leading-relaxed">
                                Recognition for producing textiles that are safe for human health, free from harmful substances, and sustainable.
                            </p>
                        </div>

                        {/* Certification 3 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image
                                width={300}
                                height={200}
                                src="https://via.placeholder.com/300x200"
                                alt="Sedex SMETA"
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h3 className="text-2xl font-bold text-[#59B8BE] mb-4">Sedex SMETA</h3>
                            <p className="text-lg leading-relaxed">
                                Compliance with ethical standards in labor, health and safety, environmental practices, and business ethics.
                            </p>
                        </div>

                        {/* Award 1 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image
                                width={300}
                                height={200}
                                src="https://via.placeholder.com/300x200"
                                alt="Best Ethical Manufacturer 2023"
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h3 className="text-2xl font-bold text-[#59B8BE] mb-4">Best Ethical Manufacturer 2023</h3>
                            <p className="text-lg leading-relaxed">
                                Awarded for our commitment to ethical manufacturing practices and promoting a safe work environment.
                            </p>
                        </div>

                        {/* Award 2 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image
                                width={300}
                                height={200}
                                src="https://via.placeholder.com/300x200"
                                alt="Green Factory Award 2022"
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h3 className="text-2xl font-bold text-[#59B8BE] mb-4">Green Factory Award 2022</h3>
                            <p className="text-lg leading-relaxed">
                                Recognized for our environmental initiatives, including sustainable production and reduced carbon footprint.
                            </p>
                        </div>

                        {/* Award 3 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image
                                width={300}
                                height={200}
                                src="https://via.placeholder.com/300x200"
                                alt="Social Compliance Excellence"
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h3 className="text-2xl font-bold text-[#59B8BE] mb-4">Social Compliance Excellence</h3>
                            <p className="text-lg leading-relaxed">
                                Awarded for outstanding efforts in upholding social compliance, including fair labor practices and community support.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Compliance;
