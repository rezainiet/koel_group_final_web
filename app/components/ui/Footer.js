import Image from "next/image";
import Link from "next/link";
import React from "react";
import koelGroupLogo from "@/public/images/logo/KOEL_GROUP_logo-01.png"

const Footer = () => {
    const thisYear = new Date().getFullYear();
    return (
        <footer className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    {/* First Column */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                            The Koel Group
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-400 hover:text-white">Corporate Culture</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Landmarks</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">One Step Ahead</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">People Engagement</a>
                            </li>
                        </nav>
                    </div>
                    {/* Second Column */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                            Our Concern
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-400 hover:text-white">Garments</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Retail Business</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Agro</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Construction</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Medical & Diagnostic</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Value Addition & Services</a>
                            </li>
                        </nav>
                    </div>
                    {/* Third Column */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                            Our CLARIFICATION
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-400 hover:text-white">Statistics</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Compliance</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">R & D</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Learning & Development</a>
                            </li>
                        </nav>
                    </div>
                    {/* Fourth Column */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                            SUBSCRIBE
                        </h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label
                                    htmlFor="footer-field"
                                    className="leading-7 text-sm text-gray-400"
                                >
                                    Enter your email
                                </label>
                                <input
                                    type="text"
                                    id="footer-field"
                                    name="footer-field"
                                    className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-[#D3FFFA] focus:border-[#D3FFFA] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#6AC9D0] border-0 py-2 px-6 focus:outline-none hover:bg-[#59b8be] rounded">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                            Subscribe to get
                            <br className="lg:block hidden" />
                            Our latest updates
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 bg-opacity-75">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href="/">
                        <span className="relative w-6 h-6 sm:w-24 sm:h-8 lg:w-28 lg:h-10 cursor-pointer">
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
                    <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
                        © {thisYear} KoelGroup —
                        <a
                            href="https://twitter.com/koelgroup"
                            className="text-gray-500 ml-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @koelgroup
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-400">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;