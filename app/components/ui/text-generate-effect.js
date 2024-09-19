"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    textColor = "white",
    words = "",
    className,
    filter = true,
    duration = 0.5,
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        // Ensure that scope is defined
        if (scope.current) {
            // Reset opacity to 0 and blur effect before animating
            animate(
                scope.current.querySelectorAll("span"),
                {
                    opacity: 0,
                    filter: filter ? "blur(10px)" : "none",
                },
                { duration: 0 } // No transition during reset
            );

            // Animate to the final state
            animate(
                scope.current.querySelectorAll("span"),
                {
                    opacity: 1,
                    filter: filter ? "blur(0px)" : "none",
                },
                {
                    duration: duration,
                    delay: stagger(0.2),
                }
            );
        }
    }, [scope, animate, filter, duration, words]); // Added `words` to dependencies

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={word + idx}
                        className={`text-${textColor} text-4xl md:text-6xl lg:text-7xl font-bold opacity-0`} // Apply color and size here
                        style={{
                            filter: filter ? "blur(10px)" : "none",
                        }}
                    >
                        {word}{" "}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
