"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ErrorBoundary from '../components/ErrorBoundary';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';

const Products = () => {
    const [isClient, setIsClient] = useState(false);
    const categories = {
        Knitting: [
            { name: "Product 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/kids-02-qh35n18ejl2xgkg3k9t1t2gwmhz8030t7zymt783d8.jpg" },
            { name: "Product 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/kids-02-qh35n18ejl2xgkg3k9t1t2gwmhz8030t7zymt783d8.jpg" },
            { name: "Product 11", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/kids-02-qh35n18ejl2xgkg3k9t1t2gwmhz8030t7zymt783d8.jpg" },
            { name: "Product 12", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/kids-02-qh35n18ejl2xgkg3k9t1t2gwmhz8030t7zymt783d8.jpg" },
            { name: "Product 13", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/kids-02-qh35n18ejl2xgkg3k9t1t2gwmhz8030t7zymt783d8.jpg" },
            { name: "Product 14", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/kids-02-qh35n18ejl2xgkg3k9t1t2gwmhz8030t7zymt783d8.jpg" },
            { name: "Product 15", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/kids-02-qh35n18ejl2xgkg3k9t1t2gwmhz8030t7zymt783d8.jpg" }
        ],
        Woven: [
            { name: "Product 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/man-05-1-qh35t2d4ebc5yhopcdnvb1odui90e5yt1unso4a5fw.jpg" },
            { name: "Product 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/man-05-1-qh35t2d4ebc5yhopcdnvb1odui90e5yt1unso4a5fw.jpg" }
        ],
        Sweater: [
            { name: "Product 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/man-03-qh35vjnsfkqelg2zuy9fdx56a40vpetb24mx9elr0s.jpg" },
            { name: "Product 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/man-03-qh35vjnsfkqelg2zuy9fdx56a40vpetb24mx9elr0s.jpg" }
        ],
        Jacket: [
            { name: "Product 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/woman-04-qh35x6vme4zgwvoz95ux9077pdx06ccea9qihu5y4s.jpg" },
            { name: "Product 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/woman-04-qh35x6vme4zgwvoz95ux9077pdx06ccea9qihu5y4s.jpg" }
        ],
        Leather: [
            { name: "Product 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/man-06-1-qh35yfzvi6p8e5vfxpd0kotc7vqmftbigh1tj4b1u4.jpg" },
            { name: "Product 10", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/man-06-1-qh35yfzvi6p8e5vfxpd0kotc7vqmftbigh1tj4b1u4.jpg" }
        ],
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <ErrorBoundary>
            <main className="p-8 bg-gray-200">
                <section className="max-w-7xl mx-auto my-12">
                    <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
                        <TextGenerateEffect words='Explore Our Products' textColor="black" />
                    </h1>

                    {Object.entries(categories).map(([category, products], index) => (
                        <section key={index} className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">{category}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {products.map((product, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeInOut",
                                            delay: idx * 0.2,
                                        }}
                                        className="relative overflow-hidden shadow-lg rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300"
                                    >
                                        <div className="relative w-full h-80">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                layout="fill"
                                                objectFit="cover"
                                                className="transition-transform transform hover:scale-105 duration-500"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-gray-800">{product?.name}</h3>
                                            <p className="text-gray-500 mt-2">
                                                {product?.description}
                                            </p>
                                            <button className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300">View Details</button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    ))}
                </section>
            </main>
        </ErrorBoundary>
    );
};

export default Products;
