"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import img1 from "@/public/images/retail-business/1.jpg";

const RetailBusiness = () => {
    return (
        <main className="bg-gray-900 text-gray-100 min-h-screen">
            <Head>
                <title>Retail Business - Koel Group</title>
                <meta name="description" content="Retail Business page showcasing Majdi and Koel Shop with a focus on branding innovation and fashion e-commerce." />
            </Head>

            {/* Hero Section */}
            <header
                className="relative bg-cover bg-center h-96 flex items-center justify-center"
                style={{
                    backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-black-background_53876-92892.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <motion.h1
                    className="text-5xl font-bold text-white relative z-10 text-center p-4 bg-black bg-opacity-50 rounded-lg"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <TextGenerateEffect words="Retail Business" />
                </motion.h1>
            </header>

            {/* Majdi Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-[#6AC9D0] mb-4">
                        Majdi
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-3 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                        <div className="w-12 h-3 rounded-full bg-[#6AC9D0] mx-1"></div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        We are equally dedicated to innovation in our branding initiatives. Koel Couture does more than just market its goods; we also tell tales. Our brand tales are thoughtfully developed to jive with the hopes and goals of our neighborhood, forging a connection that goes beyond the transaction.
                    </p>
                </div>

                {/* Koel Shop Section */}
                <div className="flex flex-col lg:flex-row items-center mb-16">
                    <motion.div
                        className="lg:w-1/2 mb-8 lg:mb-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src={img1}
                            alt="Retail Business"
                            width={1200}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </motion.div>
                    <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                        <h2 className="text-3xl font-semibold text-[#6AC9D0] mb-4">
                            Koel Shop
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Your primary fashion e-commerce site, Koel Shop, is your entryway to a world of grace and style. Discover the newest styles, shop for classic pieces, and easily express your individual sense of style. Koel Shop puts the world of fashion at your fingertips with a wide selection of clothes, accessories, and more. Experience excellent quality, quick shopping, and tailored style advice that suits your preferences. Improve your wardrobe with Koel Shop to remain on top of fashion trends. Here is where your fashion adventure begins. Today, with Koel Shop, discover, shop, and develop your personal style!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RetailBusiness;
