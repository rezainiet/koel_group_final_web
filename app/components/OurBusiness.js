"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import jayqoo from '@/public/images/homepage/jayqoo_textile_an.jpg'
import koel_modish_apparels from '@/public/images/homepage/koel_modish.jpg'
import agriculture_02 from '@/public/images/about_page/agriculture_02.jpg'
import arham_diagnostic from '@/public/images/homepage/arham_diagnostic.jpg'
import eCommerce from '@/public/images/homepage/e-commerce.jpg'


// Array of businesses with images
const businesses = [
    { name: 'Jayqo Textile & Accessories Limited', image: jayqoo },
    { name: 'Koel Modish Apparels Limited', image: koel_modish_apparels },
    { name: 'Anisha Agricultural Industry Limited', image: agriculture_02 },
    { name: 'Arham Diagnostic Center', image: arham_diagnostic },
    { name: 'Majdi - T-Shirt Brand', image: 'https://koelgroupbd.com/wp-content/uploads/2023/12/7-1-1.jpg' },
    { name: 'Koel Shop - e-Commerce', image: eCommerce },
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
        <div className="flex flex-col md:flex-row w-full">
            {/* Static Text Section */}
            <div className="bg-black/70 text-white flex items-center justify-center w-full md:w-1/4 h-[20rem] md:h-auto p-8">
                <h2 className="text-3xl font-bold">Other Businesses</h2>
            </div>

            {/* Carousel Section */}
            <div className="relative w-full h-full md:w-3/4 overflow-hidden">
                <motion.div
                    className="flex"
                    initial={{ x: 0 }}
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    {businesses.map((business, index) => (
                        <motion.div
                            key={index}
                            className="relative flex-shrink-0 w-full h-[30rem] md:h-[40rem] lg:h-[50rem] flex items-center justify-center overflow-hidden"
                            whileHover={{ scale: 1.05 }} // Scale the entire card on hover
                            transition={{ duration: 0.6, ease: 'easeInOut' }}

                        >
                            {/* Image background */}
                            <Image
                                src={business.image}
                                alt={business.name}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className="z-[-1] grayscale" // Send image to background
                            />

                            {/* Overlay for text */}
                            <motion.div
                                className="absolute inset-0 flex items-end justify-start bg-black bg-opacity-10 text-white p-4"
                                // whileHover={{ scale: 1.1 }} // Scale the text on hover
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <div className='bg-black bg-opacity-200 px-6 py-3'>
                                    <h3 className="text-lg md:text-xl font-bold text-start">
                                        {business.name}
                                    </h3>
                                </div>
                            </motion.div>

                        </motion.div>
                    ))}
                </motion.div>

                {/* Navigation Buttons */}
                {/* <div className="absolute bottom-4 w-full flex justify-between px-4">
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
                </div> */}
            </div>
        </div>
    );
};

export default OurBusiness;
