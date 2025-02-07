import React from 'react';

const getTime = async () =>{
    // const res = await fetch("http://localhost:3000/time",{cache: 'no-store'}) // for every refresh new time so use {cache: 'no-store'}
    const res = await fetch("http://localhost:3000/time",{next: {revalidate : 5}}) //caching update after every 5 sec use next: {revalidate : 5}
    const data = await res.json()
    return data.currentTime;
}

const page = async () => {
    const currentTime = await getTime()
    return (
        <div>
            Current Time Page
            <h1 className='text-red-400 text-4xl'>{currentTime}</h1>
        </div>
    );
};

export default page;