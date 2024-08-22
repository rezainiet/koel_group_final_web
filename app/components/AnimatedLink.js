// components/AnimatedLink.js
import { motion } from "framer-motion";

const AnimatedLink = ({ title }) => {
    const linkVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.3 },
        },
        tap: {
            scale: 0.9,
            transition: { duration: 0.1 },
        },
    };

    return (
        <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={linkVariants}
            className="text-black font-medium"
        >
            {title}
        </motion.div>
    );
};

export default AnimatedLink;
