"use client";

import React, { useState, useEffect } from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect';
import Image from 'next/image';
import ErrorBoundary from './ErrorBoundary';
import { motion } from 'framer-motion';

const ProductGrid = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    // List of product names
    const products = [
        { name: "Knitting", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/kids-02-qh35n18ejl2xgkg3k9t1t2gwmhz8030t7zymt783d8.jpg" },
        { name: "Woven", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/man-05-1-qh35t2d4ebc5yhopcdnvb1odui90e5yt1unso4a5fw.jpg" },
        { name: "Sweater", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/man-03-qh35vjnsfkqelg2zuy9fdx56a40vpetb24mx9elr0s.jpg" },
        { name: "Jacket", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/woman-04-qh35x6vme4zgwvoz95ux9077pdx06ccea9qihu5y4s.jpg" },
        { name: "Leather", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/man-06-1-qh35yfzvi6p8e5vfxpd0kotc7vqmftbigh1tj4b1u4.jpg" }
    ];

    return (
        <ErrorBoundary>
            <main>
                <div>
                    <h1 className='text-3xl font-semibold m-12'>
                        Offering a diverse range of <br />
                        <span className='bg-grey-700 px-5 py-3'>
                            <TextGenerateEffect words='products.' textColor='yellow-200' />
                        </span>
                    </h1>
                </div>
                <div className='p-6'>
                    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2'>
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }} // Reduced y-axis translation for smoother motion
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1, // Slightly longer duration for smoothness
                                    ease: "easeInOut", // Smooth easing function
                                    delay: index * 0.2 + 0.3, // Increased delay slightly
                                }}
                                viewport={{ once: false, amount: 0.2 }} // Trigger only once and slightly earlier
                                className='bg-white transition-shadow duration-300 rounded-lg overflow-hidden'
                            >
                                <div className='relative w-full h-60'>
                                    <Image
                                        src={product?.image}
                                        alt={product?.name}
                                        layout='fill'
                                        objectFit='cover'
                                        objectPosition='center'
                                    />
                                </div>
                                <h1 className='text-start p-4 text-lg font-semibold'>
                                    {product?.name}
                                </h1>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </ErrorBoundary>
    );
};

export default ProductGrid;
