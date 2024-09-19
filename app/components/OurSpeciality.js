"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Palette, Shield, ChevronRight, X } from 'lucide-react';
import { TextGenerateEffect } from './ui/text-generate-effect';

const specialities = [
    {
        icon: <DollarSign size={32} />,
        title: 'Competitive Price',
        description: 'Unbeatable value without compromising quality.',
        details: 'Our pricing strategy involves continuous market analysis and efficient operations, allowing us to offer the best prices while maintaining high-quality standards. We leverage economies of scale and innovative cost-saving techniques to pass the savings on to you.',
    },
    {
        icon: <Palette size={32} />,
        title: 'Sample Production',
        description: 'Bringing your concepts to life with precision.',
        details: 'With state-of-the-art prototyping facilities and a team of skilled designers, we can quickly turn your ideas into tangible samples for review and refinement. Our iterative process ensures that the final product matches your vision perfectly.',
    },
    {
        icon: <Shield size={32} />,
        title: 'Quality Control',
        description: 'Rigorous inspections for unparalleled quality.',
        details: 'Our multi-stage quality control process includes raw material inspection, in-process checks, and final product testing to ensure consistent, high-quality output. We employ advanced technologies and trained experts to catch even the smallest defects.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};

export default function OurSpeciality() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="py-16 bg-slate-800 text-gray-100 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }} // Trigger animation on view
                    transition={{ duration: 0.5 }}
                    className="text-4xl text-start font-bold flex items-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
                >
                    {/* <div className='flex gap-2 items-center justify-center'>
                        <div className='w-3 h-3 rounded-full bg-green-300'></div>
                        <div className='w-3 h-3 rounded-full bg-green-300'></div>
                        <div className='w-3 h-3 rounded-full bg-green-300'></div>
                    </div> */}
                    <TextGenerateEffect words="Our Specialities" textColor="white" />
                </motion.h2>
                <div className="flex flex-col lg:flex-row gap-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible" // Trigger animation on view
                        className="lg:w-1/2 grid gap-4"
                    >
                        {specialities.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible" // Trigger animation on view
                                className={`bg-slate-700 rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 ${selectedIndex === index ? 'ring-2 ring-blue-500' : ''
                                    }`}
                                onClick={() => setSelectedIndex(index)}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-purple-400 bg-opacity-20 rounded-full flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                    <ChevronRight
                                        className={`w-6 h-6 text-blue-400 transform transition-transform duration-300 ${selectedIndex === index ? 'rotate-90' : ''
                                            }`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="lg:w-1/2">
                        <AnimatePresence mode="wait">
                            {selectedIndex !== null && (
                                <motion.div
                                    key={selectedIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-slate-700 rounded-lg p-6 h-full"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-blue-400">
                                            {specialities[selectedIndex].title}
                                        </h3>
                                        <button
                                            onClick={() => setSelectedIndex(null)}
                                            className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
                                            aria-label="Close details"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        {specialities[selectedIndex].details}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
