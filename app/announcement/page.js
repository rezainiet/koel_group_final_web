'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function AnnouncementPage() {
    const [activeSection, setActiveSection] = useState('md-message')

    const sections = {
        'md-message': {
            title: "MD's Message",
            image: "https://koelgroupbd.com/wp-content/uploads/elementor/thumbs/221504418_897960147454972_9200474401827080808_n-qenwkzgt0ut22a9bslppaq8tqodny7j6lu62nop8uo.png",
            content: `I would like to thank you first for visiting our official website. I also thank our customers, buyers and business associates for their continuous support and confidence in Koel Group and our staff for their tenacity, dedication and hard work.

Koel Group is a quality and customer-oriented company with a long-term vision. Our team does their utmost to present high quality products and thus achieve new levels of growth. As one of the emerging private equity companies in Bangladesh, Koel Group has been striving to achieve the highest level of excellence through hard work and relentless effort to improve our products and services in the RMG sector for about a decade.

Although, we started our formal journey as a group of companies in 2016, the Group began to materialize its plan nearly a decade ago and our progress is quite satisfactory so far. We have already been able to earn an excellent reputation in the RMG sector including, fabric knitting, dyeing, sewing, cutting and packing.

We have also diversified our investment in various sectors including land development, RMG products-based e-commerce business, recycling yarn and manufacture of agriculture, livestock and fisheries products etc. Various business ventures have already been launched under the company within a short span of time.

I feel proud to tell our customers that we remain upbeat about our prospects in the coming years. And, we will continue to execute our growth plans for the coming years.`
        },
        'our-goal': {
            title: "What's Our Goal",
            subsections: [
                {
                    title: "Our Mission",
                    image: "https://koelgroupbd.com/wp-content/uploads/2023/11/jean-philippe-delberghe-660138-unsplash.jpg",
                    content: "To create a brand that is known for its unique products and uncompromising quality as well as achieve highest growth through satisfying our consumers, buyers and partners in the context of twenty first century's demands and challenges."
                },
                {
                    title: "Our Value",
                    image: "https://koelgroupbd.com/wp-content/uploads/2023/11/textile-02-1.jpg",
                    content: "TRUST: Believing in each other\nRESPECT: Appreciating others\nEMPATHY: Being considerate\nCOMPETENCY: Continuous learning and training\nTEAMWORK: Commitment and open communication\nLOYALTY: Valuing each other\nCARE: Being responsible"
                },
                {
                    title: "Our Vision",
                    image: "https://koelgroupbd.com/wp-content/uploads/2023/11/rawpixel-557123-unsplash.jpg",
                    content: "The vision of Koel Group is to become one of the leading apparel manufacturers and exporters of Bangladesh and diversify its operation, investment and business in other sectors adopting inclusive growth and sustainable development policies. With an eye to attaining consumers' satisfaction, Koel Group trusts in manufacturing best commodities in an eco-friendly way and ensuring best favourable environment for workers' safety."
                }
            ]
        },
        'trust-worthiness': {
            title: "The Signature of Trust Worthiness",
            images: [
                "https://koelgroupbd.com/wp-content/uploads/2023/09/105-591x1024.jpg",
                "https://koelgroupbd.com/wp-content/uploads/2023/09/107-1024x681.jpg",
                "https://koelgroupbd.com/wp-content/uploads/2023/09/106-591x1024.jpg"
            ],
            content: `The Koel Group is divided into the Factory and Corporate sectors, each of which is run by a separate management committee (MANCOM). Both sectors are supervised and managed by MANCOM, which also has the critical duty of developing and overseeing the implementation of strategic plans. They set the highest standards for morality, ethics, and corporate leadership, acting as a lighthouse for all members of the organization.

Within the scope of its several operations, the Koel Group has evolved as a distinctive lifestyle brand with steadfast dedication. Although it started out as a little organization, it distinguished itself by tenaciously seeking excellence in all areas of its operations. Koel Group has broadened its views to include sustainable techniques in both production processes and energy usage while remaining steadfastly committed to accuracy and quality.

The Koel Group is positioned to reach new levels of sustainability as it stands at the beginning of its next stage of development. We ensure that we not only meet but also surpass global standards through our unrelenting pursuit of excellence and environmental responsibility. We achieve this with unflinching bravery and unflinching constancy, constantly aligning ourselves with the expanding requirements and aspirations of our esteemed partners and discriminating customers.`
        }
    }

    return (
        <div className="min-h-screen pt-20 bg-gray-900 text-gray-200">
            <header className="bg-gray-800 shadow-md">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-100">Koel Group Announcement</h1>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-6">
                    <nav className="lg:w-1/4">
                        <ul className="space-y-2">
                            {Object.keys(sections).map((key) => (
                                <li key={key}>
                                    <button
                                        onClick={() => setActiveSection(key)}
                                        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeSection === key
                                            ? 'bg-gray-700 text-gray-100'
                                            : 'text-gray-300 hover:bg-gray-800'
                                            }`}
                                    >
                                        {sections[key].title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeSection === 'our-goal' ? (
                                    <div className="space-y-8">
                                        {sections['our-goal'].subsections.map((subsection, index) => (
                                            <div key={index} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                                                <div className="relative h-48 sm:h-64">
                                                    <Image
                                                        src={subsection.image}
                                                        alt={subsection.title}
                                                        layout="fill"
                                                        objectFit="cover"
                                                    />
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-xl font-semibold mb-4 text-gray-100">{subsection.title}</h3>
                                                    <p className="text-gray-300 whitespace-pre-line">{subsection.content}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                                        {activeSection === 'md-message' ? (
                                            <div className="flex flex-col md:flex-row">
                                                <div className="md:w-1/2"> {/* Adjusted width */}
                                                    <div className="w-full"> {/* Removed h-96 and md:h-auto */}
                                                        <Image
                                                            src={sections[activeSection].image}
                                                            alt="Shahriar Alam Koel"
                                                            width={500}  // Specify width
                                                            height={500} // Specify height (adjust to your image aspect ratio)
                                                            objectFit="contain"  // Ensures the full image is displayed without cropping
                                                            className="rounded-lg shadow-md" // Optional: rounded corners and shadow
                                                        />
                                                    </div>
                                                </div>
                                                <div className="md:w-1/2 p-6"> {/* Adjusted width to accommodate content */}
                                                    <h2 className="text-2xl font-bold mb-1 text-gray-100">{sections[activeSection].title}</h2>
                                                    <h3 className="text-sm font-medium mb-4 text-gray-400">Shahriar Alam Koel, Managing Director</h3>
                                                    <div className="prose prose-invert max-w-none">
                                                        {sections[activeSection].content.split('\n\n').map((paragraph, index) => (
                                                            <p key={index} className="mb-4">{paragraph}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                        ) : activeSection === 'trust-worthiness' ? (
                                            <>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
                                                    {sections['trust-worthiness'].images.map((image, index) => (
                                                        <div key={index} className="relative h-32 sm:h-48">
                                                            <Image
                                                                src={image}
                                                                alt={`Trust Worthiness ${index + 1}`}
                                                                layout="fill"
                                                                objectFit="cover"
                                                                className="rounded-md"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="p-6">
                                                    <h2 className="text-2xl font-bold mb-4 text-gray-100">{sections[activeSection].title}</h2>
                                                    <div className="prose prose-invert max-w-none">
                                                        {sections[activeSection].content.split('\n\n').map((paragraph, index) => (
                                                            <p key={index} className="mb-4">{paragraph}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    )
}