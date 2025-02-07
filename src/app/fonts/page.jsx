import { Titillium_Web } from 'next/font/google';
import React from 'react';

const fontStyle = Titillium_Web({ 
    weight: ['400', '700'], 
    subsets: ['latin'],
})

const page = () => {
    return (
        <div className={fontStyle.className}>

            <h1 className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos animi quia magnam quidem asperiores eaque dolores quaerat exercitationem vitae doloremque esse facere, culpa illum praesentium, perspiciatis eum, minima est nihil.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, modi quidem voluptas maiores incidunt eum ipsam minus? Voluptates expedita, labore sequi, asperiores perferendis aspernatur, obcaecati aperiam animi modi ut ipsa.</p>
        </div>
    );
};

export default page;