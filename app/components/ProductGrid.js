"use client"

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { TextGenerateEffect } from './ui/text-generate-effect'

const useScrollTransforms = () => {
    const { scrollY } = useScroll()

    // Create transformations for each card based on scroll position
    const transforms = Array.from({ length: 6 }, (_, index) =>
        useTransform(scrollY, [0, 1000], [0, -index * 10])
    )

    // Apply spring animation to each transformation
    const springs = transforms.map(transform => useSpring(transform, { stiffness: 300, damping: 30 }))

    return springs
}

const ProductGrid = () => {
    const [isClient, setIsClient] = useState(false)
    const springs = useScrollTransforms()

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return null
    }

    return (
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
                    {Array(6).fill("").map((_, index) => {
                        return (
                            <motion.div
                                key={index}
                                className='bg-white transition-shadow duration-300 rounded-lg overflow-hidden'
                                style={{ y: springs[index] }}
                                initial={{ opacity: 0, y: 50 }}  // Initial state
                                whileInView={{ opacity: 1, y: 0 }}  // Animate when in view
                                transition={{ duration: 0.8, delay: index * 0.1 }}  // Control the animation timing
                                viewport={{ once: false, amount: 0.5 }}  // Re-trigger animation every time it comes into view
                            >
                                <div className='w-full h-60 bg-black'>
                                    {/* Image placeholder or background */}
                                </div>
                                <h1 className='text-start p-4 text-lg font-semibold'>
                                    Name of the product
                                </h1>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default ProductGrid
