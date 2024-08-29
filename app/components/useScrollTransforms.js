import { useTransform, useSpring, useScroll } from "framer-motion";
import { useMemo } from "react";

export const useScrollTransforms = () => {
    const { scrollY } = useScroll();

    // Create a memoized array of transforms
    const transforms = useMemo(() => {
        // Generate transformations based on scrollY
        return Array.from({ length: 6 }, (_, index) =>
            useTransform(scrollY, [0, 1000], [0, -index * 10])
        );
    }, [scrollY]);

    // Create a memoized array of springs based on transforms
    const springs = useMemo(() => {
        return transforms.map(transform =>
            useSpring(transform, { stiffness: 300, damping: 30 })
        );
    }, [transforms]);

    return springs;
};
