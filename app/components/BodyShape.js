import React from 'react';
import body_shape_comp from '@/public/images/cta/body_shape_component.png';
import Image from 'next/image';

const BodyShape = () => {
    return (
        <main className="flex items-center justify-center bg-[#131927] text-white">
            <div className="relative flex flex-col items-start lg:flex-row lg:items-center lg:space-x-8 p-6">
                <div className="flex-shrink-0 lg:w-1/2">
                    <Image
                        src={body_shape_comp}
                        width={500}
                        height={700}
                        alt="Body shape of women"
                        className="object-cover w-full h-auto"
                    />
                </div>
                <div className="mt-6 lg:mt-0 lg:w-1/2 lg:pl-12 text-center lg:text-left">
                    <h1 className="font-semibold text-white text-5xl md:text-6xl lg:text-7xl uppercase">
                        Body shapes
                    </h1>
                    <p className="mt-4 text-lg lg:text-xl">
                        Every woman, in our opinion, ought to feel attractive and secure in her physical appearance. Our clothing and accessories are made to fit the distinctive female body types. Every woman can find clothing and accessories that flatter the distinctive body forms of women thanks to our dedication to doing so.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default BodyShape;
