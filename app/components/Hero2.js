'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { ChevronDown, Calendar, Gift, Mail, Bell } from 'lucide-react'

const businesses = [
    { name: 'Jayqo Textile & Accessories', image: 'https://placehold.co/600x400/png', color: 'from-purple-500 via-indigo-500 to-blue-500' },
    { name: 'Koel Modish Apparels', image: 'https://placehold.co/600x400/png', color: 'from-pink-500 via-red-500 to-yellow-500' },
    { name: 'Anisha Agricultural Industry', image: 'https://placehold.co/600x400/png', color: 'from-green-500 via-emerald-500 to-teal-500' },
    { name: 'Arham Diagnostic Center', image: 'https://placehold.co/600x400/png', color: 'from-blue-500 via-cyan-500 to-sky-500' },
    { name: 'Majdi - T-Shirt Brand', image: 'https://placehold.co/600x400/png', color: 'from-yellow-500 via-amber-500 to-orange-500' },
    { name: 'Koel Shop - e-Commerce', image: 'https://placehold.co/600x400/png', color: 'from-red-500 via-rose-500 to-pink-500' },
]

export default function BentoGridHero() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const opacitySection = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

    return (
        <motion.section
            ref={containerRef}
            style={{ opacity: opacitySection, scale }}
            className="relative min-h-screen w-full overflow-hidden bg-gray-900 py-16"
        >
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 opacity-60" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMTMxMzEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12 text-center"
                >
                    <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                        Innovating Across
                        <span className="block mt-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                            Industries
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
                        From textiles to agriculture, healthcare to e-commerce, we're shaping the future of diverse sectors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <BusinessCard business={businesses[0]} index={0} className="md:col-span-2 lg:col-span-2 row-span-2" />
                    <BusinessCard business={businesses[1]} index={1} className="md:col-span-1 lg:col-span-2" />
                    <BusinessCard business={businesses[2]} index={2} className="md:col-span-1 lg:col-span-1" />
                    <BusinessCard business={businesses[3]} index={3} className="md:col-span-1 lg:col-span-1" />
                    <BusinessCard business={businesses[4]} index={4} className="md:col-span-2 lg:col-span-3" />
                    <BusinessCard business={businesses[5]} index={5} className="md:col-span-1 lg:col-span-1" />
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown className="w-8 h-8 text-white opacity-50" />
                </motion.div>
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                >
                    <a
                        href="#more"
                        className="inline-block px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-full hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Explore Our Universe
                    </a>
                </motion.div>
            </div>
        </motion.section>
    )
}

function BusinessCard({ business, index, className }) {
    const [isHovered, setIsHovered] = useState(false)
    const cardRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1])
    const y = useTransform(scrollYProgress, [0, 1], ['20%', '0%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    const icons = [Calendar, Gift, Mail, Bell, Gift, Mail]
    const Icon = icons[index]

    return (
        <motion.div
            ref={cardRef}
            style={{ scale, y, opacity }}
            className={`group relative overflow-hidden rounded-3xl bg-opacity-80 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${business.color} opacity-80`} />
            <div className="relative z-10 p-6 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-2">{business.name}</h3>
                <div className="flex-grow flex items-center justify-center">
                    <Icon className="w-16 h-16 text-white opacity-80" />
                </div>
                <motion.div
                    initial={false}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20,
                    }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-white text-opacity-90"
                >
                    <p>Explore our innovative solutions in {business.name.split(' ')[0]}</p>
                </motion.div>
            </div>
        </motion.div>
    )
}