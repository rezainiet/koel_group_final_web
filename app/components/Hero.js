"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import static_logo from "@/public/images/cta/cta_image_1.jpg";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Home() {
    return (
        <main className="bg-black text-white -mt-16">
            <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen gap-6 md:gap-0 px-4 md:px-8 py-12 md:py-16">
                {/* Text Section */}
                <motion.div
                    className="md:w-1/2 w-full bg-black flex flex-col items-start pl-6 md:pl-12 pr-6 md:pr-5 py-6 md:py-16"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <motion.h1 className="my-10">
                        <TextGenerateEffect words="We never compromise on our Quality!" className="text-class" />
                    </motion.h1>
                    <motion.p
                        className="text-base md:text-lg lg:text-xl mb-6 md:mb-12 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Stay updated with the latest news, project highlights, and CSR activities.
                    </motion.p>
                    <motion.button
                        className="px-6 py-3 font-semibold rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Explore Now
                    </motion.button>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="md:w-1/2 w-full h-80 md:h-[750px] flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.3,
                        ease: [0.68, -0.55, 0.27, 1.55], // Bezier curve
                    }}
                >
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-black opacity-10 z-9"></div>

                    {/* Image */}
                    <Image
                        src={static_logo}
                        alt="Koel Group Logo"
                        className="rounded-lg object-contain z-9"
                        width="100%"
                        height="100%"
                    />

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 h-32 w-32 bg-white bg-opacity-10 rounded-full z-0"></div>
                    <div className="absolute bottom-0 left-0 h-24 w-24 bg-white bg-opacity-20 rounded-full z-0"></div>
                </motion.div>
            </div>
        </main>
    );
}
