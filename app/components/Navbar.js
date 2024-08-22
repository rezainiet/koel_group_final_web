"use client";
// components/Navbar.js
import Link from "next/link";
import { useState } from "react";
import AnimatedLink from "./ui/AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { title: "What we do", href: "/" },
    { title: "How it works", href: "/" },
    { title: "Case studies", href: "/" },
    { title: "About", href: "/" },
    { title: "Contact", href: "/" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
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
        <header className="text-white top-0 fixed z-10 w-full">
            <nav className="flex justify-between items-center py-8 lg:py-4 px-12 bg-transparent">
                <div className="flex items-center gap-[1ch]">
                    <div className="w-5 h-5 bg-[#D3FFFA] rounded-full" />
                    <span className="text-xl font-semibold tracking-widest">
                        KOEL SHOP
                    </span>
                </div>
                <div
                    className="cursor-pointer lg:text-xl text-md text-white ml-auto"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </div>
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
                                <h1 className="text-xl text-black">KOEL SHOP</h1>
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
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
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

const MobileNavLink = ({ title, href }) => {
    return (
        <motion.div
            variants={mobileLinkVars}
            className="text-5xl md:text-7xl mb-3 uppercase text-black"
        >
            <Link href={href}>
                {title}
            </Link>
        </motion.div>
    );
};
