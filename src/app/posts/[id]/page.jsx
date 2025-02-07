import { redirect } from 'next/navigation';
import React from 'react';

    export const generateMetadata = async ({params}) =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        const postData = await res.json()
        return {
            title: {
             absolute:   `${postData.title}`,
            },
            description: postData.body,
            keywords: postData.body.split(' ')
    }
}

const postData = async (id) =>{
   const postDetails = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await postDetails.json()
    console.log(data)
    
    return data
}


const page = async ({params}) => {
 
    const {title, body} = await postData(params.id)
    console.log(title)
    return (
        <div >
            <div className='border-3 border-green-500'>
            <h1>Post Details for id</h1>
            <h6>{title}</h6>
            <p>{body}</p>
            </div>
           
        </div>
    );
};

// this is error resolved during export the project >> npm run export

export async function generateStaticParams() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
   
    return posts.map((post) => ({
      id: post.id.toString(),
    }))
  }
export default page;