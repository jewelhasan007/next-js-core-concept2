import Link from 'next/link';
import React from 'react';

const page = async () => {
const  data = await fetch('https://jsonplaceholder.typicode.com/posts')
const posts = await data.json()
    return (
        <div >
       <h1 className='text-red-300 underline'>All Posts:</h1>
       <div className='grid grid-cols-4 gap-10 border-3 border-green-400' >
       {
    posts.map((post) =>(
        <div key={post.id} className='border-2 border-gray-400 rounded text-center' >
            <h2 className='font-bold'>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`}><button className=' bg-green-400 p-3'>Details</button></Link>
        </div>
    ))
}
       </div>

           
        </div>
    );
};

export default page;