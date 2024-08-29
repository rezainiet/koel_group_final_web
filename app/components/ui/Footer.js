import Image from "next/image";
import Link from "next/link";
import React from "react";
import koelGroupLogo from "@/public/images/logo/KOEL_GROUP_logo-01.png";

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
                                <Link href="/corporate-culture" className="text-gray-400 hover:text-white">
                                    Corporate Culture
                                </Link>
                            </li>
                            <li>
                                <Link href="/landmark" className="text-gray-400 hover:text-white">
                                    Landmarks
                                </Link>
                            </li>
                            <li>
                                <Link href="/one-step-ahead" className="text-gray-400 hover:text-white">
                                    One Step Ahead
                                </Link>
                            </li>
                            <li>
                                <Link href="/people-engagement" className="text-gray-400 hover:text-white">
                                    People Engagement
                                </Link>
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
                                <Link href="/garments" className="text-gray-400 hover:text-white">
                                    Garments
                                </Link>
                            </li>
                            <li>
                                <Link href="/retail-business" className="text-gray-400 hover:text-white">
                                    Retail Business
                                </Link>
                            </li>
                            <li>
                                <Link href="/agro" className="text-gray-400 hover:text-white">
                                    Agro
                                </Link>
                            </li>
                            <li>
                                <Link href="/construction" className="text-gray-400 hover:text-white">
                                    Construction
                                </Link>
                            </li>
                            <li>
                                <Link href="/medical-diagnostic" className="text-gray-400 hover:text-white">
                                    Medical & Diagnostic
                                </Link>
                            </li>
                            <li>
                                <Link href="/value-addition-services" className="text-gray-400 hover:text-white">
                                    Value Addition & Services
                                </Link>
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
                                <Link href="/statistics" className="text-gray-400 hover:text-white">
                                    Statistics
                                </Link>
                            </li>
                            <li>
                                <Link href="/compliance" className="text-gray-400 hover:text-white">
                                    Compliance
                                </Link>
                            </li>
                            <li>
                                <Link href="/rnd" className="text-gray-400 hover:text-white">
                                    R & D
                                </Link>
                            </li>
                            <li>
                                <Link href="/learning-development" className="text-gray-400 hover:text-white">
                                    Learning & Development
                                </Link>
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
                        <div className="relative w-6 h-6 sm:w-24 sm:h-8 lg:w-28 lg:h-10 cursor-pointer">
                            <Image
                                src={koelGroupLogo}
                                alt="Logo of koel group!"
                                width={150}
                                objectFit='contain'
                                objectPosition='center'
                            />
                        </div>
                    </Link>
                    <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
                        © {thisYear} Koel Group —
                        <Link href="https://twitter.com/koelgroup" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">
                            @koelgroup
                        </Link>
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
                                <path d="M16 12h-6M12 16v-6"></path>
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
                                <path d="M21 8a6 6 0 00-9.27-4.84A6 6 0 005 8a6 6 0 006 6h5a6 6 0 005-6z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
