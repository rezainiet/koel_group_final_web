"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import cta1 from "@/public/images/cta/cta1.jpg";
import cta2 from "@/public/images/cta/cta2.webp";

const Hero2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [cta1, cta2];
    const titles = ["We never compromise on our Quality!", "Explore our Best Services"];
    const descriptions = [
        "Stay updated with the latest news, project highlights, and CSR activities.",
        "Discover unparalleled services with top-notch quality and excellence.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Images */}
            <AnimatePresence>
                {images.map((image, index) => (
                    currentIndex === index && (
                        <motion.div
                            key={index}
                            className="absolute inset-0 z-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <Image
                                src={image}
                                alt={`CTA Background ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="opacity-80"
                            />
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="p-4"
                    >
                        <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                            <TextGenerateEffect words={titles[currentIndex]} className="text-class" />
                        </motion.h1>
                        <motion.p className="text-lg md:text-2xl text-white mb-8">
                            {descriptions[currentIndex]}
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
                </AnimatePresence>
            </div>

            {/* Vertical Bullet Point Slider */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero2;
