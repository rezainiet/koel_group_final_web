"use client"

import React from 'react'
import { TextGenerateEffect } from '../components/ui/text-generate-effect'

const ContactSection = () => {
    return (
        <main className='bg-black py-20'>
            <div className='px-12 md:px-44 my-5'>
                <TextGenerateEffect words='Contact Us.' />
            </div>
            <section className="text-gray-400  body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    {/* Google Map Section */}
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="absolute inset-0"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no"

                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.0319963317215!2d90.38559039089178!3d23.871458687612648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1724674005753!5m2!1sen!2sbd"
                            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.7)' }}
                        ></iframe>
                        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="text-white text-xs tracking-widest">ADDRESS</h2>
                                <p className="mt-1">House 31, Road 17, Sector 13, Uttara, Dhaka 1230</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="text-white text-xs tracking-widest">EMAIL</h2>
                                <a className="text-indigo-400 leading-relaxed">koel200278@gmail.com <br /> info@koelgroupbd.com</a>
                                <h2 className="text-white text-xs tracking-widest mt-4">PHONE</h2>
                                <p className="leading-relaxed">+880 1790 493357</p>
                            </div>
                        </div>
                    </div>

                    {/* Feedback Form Section */}
                    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-white text-2xl mb-1 font-semibold">Fill the form</h2>
                        {/* <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
                        <div className="relative mb-4">
                            <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="text-white bg-indigo-200 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-300 rounded text-lg" disabled>Send us a message!</button>
                        <p className="text-xs text-gray-400 text-opacity-90 mt-3">Just fill up the form and let us know what you want to say!</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactSection
