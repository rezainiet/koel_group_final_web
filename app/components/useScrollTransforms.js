// import { useTransform, useScroll } from "framer-motion";
// import { useMemo } from "react";

// export const useScrollTransforms = () => {
//     const { scrollY } = useScroll();

//     // Create a memoized array of transforms
//     const transforms = useMemo(() => {
//         // Generate transformations based on scrollY
//         return Array.from({ length: 6 }, (_, index) =>
//             useTransform(scrollY, [0, 1000], [0, -index * 10])
//         );
//     }, [scrollY]);

//     return transforms;
// };
