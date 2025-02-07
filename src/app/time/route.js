
// export const dynamic = 'force-dynamic' // if we stop from backend, by using 'force-dynamic' we can stop the cashing

export async function GET(){
return Response.json({
    currentTime : new Date().toLocaleTimeString()
})
    
}
