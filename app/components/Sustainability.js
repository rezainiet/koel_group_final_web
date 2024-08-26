import React from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect';

const Sustainability = () => {
    return (
        <main className='bg-[#dbf5f8] min-h-screen flex items-center justify-center py-12 px-4 md:py-16 md:px-6 lg:px-12'>
            <div className='max-w-4xl text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6'>
                    Fashion that doesn’t come at an <br className='md:hidden' />
                    <TextGenerateEffect words=' environmental cost.' />
                </h1>
                <p className='text-base md:text-lg lg:text-xl text-gray-600 mb-6 px-4 md:px-0'>
                    We continually strive to achieve global standards in quality, cost, service, and scale of operations.
                    Corporate social and environmental responsibilities are always top of mind as we focus on using innovative processes, technologies, and materials to manufacture the finest products at reasonable costs.
                    The results of our efforts can be seen across the globe, in the quality apparel we design and manufacture for leading retail brands.
                </p>
                <button className='px-5 py-2 md:px-6 md:py-3 bg-black text-white text-base md:text-lg font-semibold rounded shadow-lg transition-transform transform hover:scale-105'>
                    Learn More
                </button>
            </div>
        </main>
    );
};

export default Sustainability;
