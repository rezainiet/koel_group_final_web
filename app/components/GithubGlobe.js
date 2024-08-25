"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { sampleArcs } from "@/data/sampleArcs";

const World = dynamic(() => import("../components/ui/globe").then((m) => m.World), {
    ssr: false,
});

export function GithubGlobe() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };


    return (
        <div className="flex flex-col md:flex-row text-white items-center justify-center py-10 md:py-20 h-[420px] md:h-screen lg:h-auto dark:bg-black bg-[#000000] relative w-full">
            <div className="max-w-screen-xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="relative z-10"
                >
                    <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white dark:text-white">
                        Connecting Businesses Globally
                    </h2>
                    <p className="text-center text-sm md:text-base lg:text-lg font-normal text-neutral-400 dark:text-neutral-200 max-w-md mt-2 mx-auto">
                        Explore our interactive globe to see how we foster global connections. Our services span across continents, making it easier than ever to reach new markets and enhance your business network.
                    </p>
                </motion.div>
                <div className="absolute w-full bottom-0 inset-x-0 h-20 md:h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-[#000000] z-40" />
                <div className="absolute w-full h-72 md:h-72 lg:h-full z-10">
                    <World data={sampleArcs} globeConfig={globeConfig} />
                </div>
            </div>

            <div className="flex items-center justify-center">
                {/* Add any additional content or elements here */}
            </div>
        </div>


    );
}
