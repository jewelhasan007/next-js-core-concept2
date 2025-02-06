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

export default page;