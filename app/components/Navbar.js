"use client";
// components/Navbar.js
import Link from "next/link";
import { useState } from "react";
import AnimatedLink from "./ui/AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import koelGroupLogo from "@/public/images/logo/KOEL_GROUP_logo-01.png"

const navLinks = [
    { title: "About", href: "/about" },
    // { title: "Case studies", href: "/" },
    { title: "Contact", href: "/contact" },
    { title: "Products", href: "/products" },
    { title: "sustainability", href: "/sustainability" },
    { title: "CSR", href: "/csr" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    const menuVars = {
        initial: {
            scaleX: 0,
        },
        animate: {
            scaleX: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    return (
        <header className="text-white top-0 fixed z-50 w-full">
            <nav className="flex justify-between items-center py-8 lg:py-4 px-12 bg-transparent">
                <div className="flex items-center gap-2 md:gap-3">
                    {/* Logo with animation */}
                    <Link href="/">
                        <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1 }} // Slightly enlarge the logo on hover
                            whileTap={{ scale: 0.9 }} // Shrink the logo slightly on tap/click
                            className="relative w-12 h-12 sm:w-30 sm:h-12 lg:w-36 lg:h-10 cursor-pointer"
                            onClick={closeMenu}
                        >
                            <Image
                                src={koelGroupLogo}
                                alt="Logo of koel group!"
                                width={170}
                                objectFit="contain"
                                objectPosition="center"
                            />
                        </motion.div>
                    </Link>
                </div>

                <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} // Enlarge the button on hover
                    whileTap={{ scale: 0.8 }} // Shrink the button on tap/click
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="cursor-pointer lg:text-xl text-md text-white ml-auto bg-sky-400 px-3 py-3 rounded-full"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                        />
                    </svg>
                </motion.div>
            </nav>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-0 top-0 w-full h-screen origin-top bg-[#D3FFFA] text-black p-10"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex justify-between">
                                <Link href="/">
                                    <span className="relative w-6 h-6 sm:w-24 sm:h-8 lg:w-28 lg:h-10 cursor-pointer" onClick={closeMenu}>
                                        <Image
                                            src={koelGroupLogo}
                                            alt="Logo of koel group!"
                                            width={150}
                                            // layout='fill'
                                            objectFit='contain' // Ensures the image fits within the container without cropping
                                            objectPosition='center'
                                        />
                                    </span>
                                </Link>
                                <p
                                    className="cursor-pointer text-md text-black"
                                    onClick={toggleMenu}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </p>
                            </div>
                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col h-full justify-center font-lora items-start md:items-center lg:items-center gap-4"
                            >
                                {navLinks.map((link, index) => (
                                    <div key={index} className="overflow-hidden">
                                        <MobileNavLink
                                            title={link.title}
                                            href={link.href}
                                            closeMenu={closeMenu}  // Pass closeMenu function here
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
};

export default Navbar;

const mobileLinkVars = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    },
    open: {
        y: 0,
        transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
        },
    },
};

const MobileNavLink = ({ title, href, closeMenu }) => {
    return (
        <motion.div
            variants={mobileLinkVars}
            className="text-5xl md:text-7xl mb-3 uppercase text-black"
        >
            <Link href={href} onClick={closeMenu}> {/* Close menu on link click */}
                {title}
            </Link>
        </motion.div>
    );
};
