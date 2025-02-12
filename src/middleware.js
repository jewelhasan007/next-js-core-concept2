
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const middleware = async (request) =>{
    // const loginCookie = request.cookies.get('next-auth.session-token')
    // console.log('Direct Cookies ', loginCookie)

    const tokenView = cookies(request).get('next-auth.session-token')
    console.log(tokenView)

    
    if(!tokenView){
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    return NextResponse.next()

}
export const config = {
    matcher : ['/dashboard', '/meals']
}