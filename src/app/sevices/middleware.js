import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import React from 'react';

export const middleware = async (request) => {
//  const token = request.cookies.get('next-auth.session-token')
     const token  = cookies(request).get('next-auth.session-token')
    console.log('token is', token)
    if(!token){
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    return NextResponse.next();
};
export const config = {
    matcher : ['/dashboard', '/current-time']
}

/**@abstract
 * 
 * 
 * 
 * 
 * import { NextResponse } from "next/server"

const user = true;

const coo = 'next js'
export const middleware = (request) =>{
const cookies = request.cookies.get('token')

if(!cookies || cookies.value !== coo ) {
    return NextResponse.redirect(new URL('/login', request.url))
}
return NextResponse.next()


if(!user){
    return NextResponse.redirect(new URL('/login', request.url))    
}

return NextResponse.next()

    if(request.nextUrl.pathname.startsWith('/about')){
        return NextResponse.redirect(new URL('/blogs', request.url))
    }
    //   return NextResponse.redirect(new URL('/blogs', request.url))
    //  return NextResponse.rewrite(new URL('/blogs', request.url))
    // return NextResponse.next()
}

export const config = {
     matcher: ['/dashboards', '/contact']
 */