import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
           <h1 className='text-red-500'> animals pictures</h1>
           <div className='grid grid-cols-2 gap-10'>
            {
                [1, 2, 3, 4, 5].map((img)=>(
                    
                    <Image key={img} src={`/images/${img}.jpg`} width={250} height={250} alt={img}></Image>
                ))
            }
           </div>
           <img src="/images/4.jpg" alt="" />
           <div>
            <Image src="/images/1.jpg" width={500} height={500}  alt='image'></Image>
           </div>
        </div>
    );
};

export default page;