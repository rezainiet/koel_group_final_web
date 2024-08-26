"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Array of businesses with random colors for background
const businesses = [
    { name: 'Properties', color: '#FF5733' },
    { name: 'Hospitality', color: '#33FF57' },
    { name: 'Finance', color: '#3357FF' },
    { name: 'B2B', color: '#FF33A6' },
    { name: 'Retail', color: '#FFC733' },
    { name: 'Healthcare', color: '#33FFF3' },
];

const OurBusiness = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= businesses.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? businesses.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full">
            {/* Static Text Section */}
            <div className="bg-black/70 text-white flex items-center justify-center w-full md:w-1/4 h-[20rem] md:h-auto p-8">
                <h2 className="text-3xl font-bold">Other Businesses</h2>
            </div>

            {/* Carousel Section */}
            <div className="relative w-full md:w-3/4 overflow-hidden">
                <motion.div
                    className="flex"
                    initial={{ x: 0 }}
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    {businesses.map((business, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-full h-[30rem] md:h-[40rem] lg:h-[50rem] flex items-center justify-center overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105"
                            style={{ backgroundColor: business.color }}
                        >
                            {/* Overlay for text */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white transition-transform duration-500 ease-in-out hover:translate-y-[-10px] p-4">
                                <h3 className="text-lg md:text-xl font-bold text-center">
                                    {business.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Navigation Buttons */}
                <div className="absolute bottom-4 w-full flex justify-between px-4">
                    <button
                        onClick={handlePrev}
                        className="px-4 py-2 bg-black text-white rounded"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-black text-white rounded"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurBusiness;
