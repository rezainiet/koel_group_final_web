/* eslint-disable react-hooks/rules-of-hooks */
import { useTransform, useSpring, useScroll } from "framer-motion";
import { useMemo } from "react";

export const useScrollTransforms = () => {
    const { scrollY } = useScroll();

    // Use a memoized array of transformations and springs
    const springs = useMemo(() => {
        // Initialize the transformations and springs array
        const transforms = [];
        const springArray = [];

        for (let index = 0; index < 6; index++) {
            const transform = useTransform(scrollY, [0, 1000], [0, -index * 10]);
            transforms.push(transform);
        }

        // Initialize springs for each transform
        transforms.forEach(transform => {
            springArray.push(useSpring(transform, { stiffness: 300, damping: 30 }));
        });

        return springArray;
    }, [scrollY]);

    return springs;
};
