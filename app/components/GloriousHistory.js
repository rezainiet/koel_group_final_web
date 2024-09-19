"use client";

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Building2, Package, Users, Clock } from 'lucide-react';
import { TextGenerateEffect } from './ui/text-generate-effect';

const stats = [
    { icon: <Building2 size={40} />, value: '6+', label: 'Active Concerns', color: 'from-cyan-400 to-blue-500' },
    { icon: <Package size={40} />, value: '50+', label: 'Products', color: 'from-green-400 to-emerald-500' },
    { icon: <Users size={40} />, value: '780+', label: 'Employees', color: 'from-pink-400 to-rose-500' },
    { icon: <Clock size={40} />, value: '14+', label: 'Years of experience', color: 'from-amber-400 to-orange-500' },
];

const StatCard = ({ icon, value, label, color, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // This triggers when the card comes into view
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: false, amount: 0.2 }} // Allow re-triggering
        className={`bg-gradient-to-br ${color} rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out`}
    >
        <div className="flex flex-col items-center text-center">
            <div className="bg-white bg-opacity-20 rounded-full p-4 mb-4">{icon}</div>
            <h3 className="text-5xl font-bold mb-2">{value}</h3>
            <p className="text-lg font-medium opacity-90">{label}</p>
        </div>
    </motion.div>
);

export default function ModernGloriousHistory() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 }); // Allow re-triggering for the section

    return (
        <section className="bg-gray-900 text-white py-20" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }} // This triggers when the section comes into view
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <TextGenerateEffect words="Our Glorious History" textColor='white' />
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-5">
                        Our goal is to rank among Bangladesh&apos;s top exporters and manufacturers of clothing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
