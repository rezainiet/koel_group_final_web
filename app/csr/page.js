"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import csr from "@/public/images/CSR/csr.jpg"
import education from "@/public/images/CSR/education.jpg"
import environment from "@/public/images/CSR/environment.jpg"
import community from "@/public/images/CSR/community.jpg"
import health from "@/public/images/CSR/health.jpg"
import joy from "@/public/images/CSR/joy.jpg"
import Textile from "@/public/images/CSR/Textile.jpg"

const CSR = () => {
    return (
        <div className="bg-gray-900 text-gray-300 py-44 px-6 lg:px-24">
            <div className="max-w-screen-xl mx-auto space-y-24">
                {/* Header Section */}
                <motion.div
                    className="text-start"
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <div className='mt-12'></div>
                    <TextGenerateEffect words='Commitment to Ethical Growth and Community Wellbeing' />
                </motion.div>

                {/* Introduction Section with Image */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center"
                >
                    <motion.div className="space-y-8"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-white">Our CSR Commitment</h2>
                        <p className="text-lg leading-relaxed">
                            Koel Group is firmly committed to ethical business practices, respecting our employees, affected communities, and the environment. Our efforts focus on improving living standards and contributing to sustainable development policies in the country. We believe that the welfare of our workforce is crucial for organizational success and societal progress.
                        </p>
                        <p className="text-lg leading-relaxed">
                            We have established a dedicated CSR department to formulate and implement policies under the guidance of experts. Annually, we invest a portion of our profits in corporate governance, labor rights, workplace safety, equal treatment, community development, and environmental management.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        style={{ originY: 0 }}
                    >
                        <Image
                            src={csr}
                            alt="CSR Initiatives"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </motion.div>

                {/* CSR Initiatives Section */}
                <motion.div
                    className="space-y-16"
                >
                    {/* Education */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ scaleY: 0, opacity: 0, scale: 0.9 }}
                            whileInView={{ scaleY: 1, opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <Image
                                src={education}
                                alt="Education"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-white">Education</h2>
                            <p className="text-lg leading-relaxed">
                                Our education initiatives focus on enhancing educational opportunities for underprivileged communities. We provide scholarships, build schools, and support educational programs to foster learning and development.
                            </p>
                        </motion.div>
                    </div>

                    {/* Environment */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="order-2 lg:order-1 space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-white">Environment</h2>
                            <p className="text-lg leading-relaxed">
                                We are committed to environmental preservation through various sustainability practices, including waste reduction, recycling programs, and energy-efficient operations. Our goal is to minimize our ecological footprint and promote a healthier planet.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                            className="order-1 lg:order-2"
                        >
                            <Image
                                src={environment}
                                alt="Environment"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>

                    {/* Community Development */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                        >
                            <Image
                                src={community}
                                alt="Community Development"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-white">Community Development</h2>
                            <p className="text-lg leading-relaxed">
                                We engage in various community development programs aimed at improving living conditions and providing support to underserved communities. Our initiatives include healthcare access, housing projects, and vocational training.
                            </p>
                        </motion.div>
                    </div>

                    {/* Good Health & Wellbeing */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="order-2 lg:order-1 space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-white">Good Health & Wellbeing</h2>
                            <p className="text-lg leading-relaxed">
                                We prioritize the health and well-being of our employees and communities by supporting healthcare initiatives, wellness programs, and access to medical services. Our efforts aim to promote a healthier and happier society.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                            className="order-1 lg:order-2"
                        >
                            <Image
                                src={health}
                                alt="Good Health"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>

                    {/* Project Joy of Giving */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="order-2 lg:order-1 space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-white">Project Joy of Giving</h2>
                            <p className="text-lg leading-relaxed">
                                Our Project Joy of Giving focuses on spreading joy through various charitable activities, including donations, volunteer work, and community outreach programs. We aim to bring positive change and uplift those in need.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                            className="order-1 lg:order-2"
                        >
                            <Image
                                src={joy}
                                alt="Joy of Giving"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>

                    {/* Textile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ scaleY: 0, opacity: 0, scale: 0.9 }}
                            whileInView={{ scaleY: 1, opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                        >
                            <Image
                                src={Textile}
                                alt="Textile"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-white">Textile</h2>
                            <p className="text-lg leading-relaxed">
                                Our textile initiatives focus on promoting sustainable practices in the textile industry. We support ethical manufacturing processes, fair labor practices, and environmentally friendly materials to contribute to a responsible industry.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Footer Section */}
                <motion.div
                    className="text-center"
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h3 className="text-xl font-semibold text-white">Koel Group&apos;s Commitment to CSR</h3>
                    <p className="text-lg mt-4">
                        Recognizing the critical role CSR plays in establishing a brighter future, Koel Group is dedicated to making a positive impact through its programs. We strive to uplift communities, promote sustainability, and ensure ethical practices in all aspects of our business.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default CSR
