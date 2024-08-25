"use client"

import React from 'react';

const businesses = [
    { name: 'Anisha Agricultural Industry Ltd.', img: 'https://picsum.photos/seed/agricultural/600/400' },
    { name: 'Majdi - Lifestyle Brand', img: 'https://picsum.photos/seed/lifestyle/600/400' },
    { name: 'Koel Modish Apparels', img: 'https://picsum.photos/seed/modish/600/400' },
    { name: 'Jayqo - Textile and Accessories', img: 'https://picsum.photos/seed/textile/600/400' },
    { name: 'Koel.shop', img: 'https://picsum.photos/seed/ecommerce/600/400' },
    { name: 'Arham - Diagnostic Center', img: 'https://picsum.photos/seed/diagnostic/600/400' },
];

const OurBusiness = () => {
    return (
        <main className="py-44">
            {/* <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5">
                {businesses.map((business, index) => (
                    <div
                        key={index}
                        className="relative  overflow-hidden bg-cover bg-center h-[30rem]"
                        style={{ backgroundImage: `url(${business.img})` }}
                    >
                        <div className="absolute inset-0 flex items-end justify-start bg-black bg-opacity-50 text-white">
                            <h3 className="text-lg md:text-xl font-bold mb-8">{business.name}</h3>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5">
                <div

                    className="relative  overflow-hidden bg-black text-white bg-center h-[30rem]"
                >
                    <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-50 text-white">
                        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold px-5">Our <br />
                            Businesses
                        </h3>
                    </div>
                </div>
                <div

                    className="relative  overflow-hidden bg-cover bg-center h-[30rem]"
                    style={{ backgroundImage: `url(https://picsum.photos/seed/agricultural/600/400` }}
                >
                    <div className="absolute inset-0 flex items-end justify-start bg-black bg-opacity-50 text-white">
                        <h3 className="text-lg md:text-xl font-bold mb-8">Anisha Agricultural Industry Ltd.</h3>
                    </div>
                </div>
                <div

                    className="relative  overflow-hidden bg-cover bg-center h-[30rem]"
                    style={{ backgroundImage: `url(https://picsum.photos/seed/lifestyle/600/400` }}
                >
                    <div className="absolute inset-0 flex items-end justify-start bg-black bg-opacity-50 text-white">
                        <h3 className="text-lg md:text-xl font-bold mb-8">Majdi - Lifestyle Brand.</h3>
                    </div>
                </div>
                <div

                    className="relative  overflow-hidden bg-cover bg-center h-[30rem]"
                    style={{ backgroundImage: `url(https://picsum.photos/seed/modish/600/400` }}
                >
                    <div className="absolute inset-0 flex items-end justify-start bg-black bg-opacity-50 text-white">
                        <h3 className="text-lg md:text-xl font-bold mb-8">Koel Modish Apparels</h3>
                    </div>
                </div>
                <div

                    className="relative  overflow-hidden bg-cover bg-center h-[30rem]"
                    style={{ backgroundImage: `url(https://picsum.photos/seed/textile/600/400` }}
                >
                    <div className="absolute inset-0 flex items-end justify-start bg-black bg-opacity-20 text-white">
                        <h3 className="text-lg md:text-xl font-bold mb-8">Jayqo - Textile and Accessories</h3>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default OurBusiness;
