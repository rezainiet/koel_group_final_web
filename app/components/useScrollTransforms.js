import { useTransform, useSpring, useScroll } from "framer-motion";

export const useScrollTransforms = () => {
    const { scrollY } = useScroll();

    // Create an array to hold the springs
    const springs = Array.from({ length: 6 }, (_, index) => {
        // Define the transform and spring for each index
        const transform = useTransform(scrollY, [0, 1000], [0, -index * 10]);
        return useSpring(transform, { stiffness: 300, damping: 30 });
    });

    return springs;
}
