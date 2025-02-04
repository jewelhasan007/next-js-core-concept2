import React from 'react';

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
        <div>
            <h1>Post Details for id</h1>
            <h6>{title}</h6>
            <p>{body}</p>
        </div>
    );
};

export default page;