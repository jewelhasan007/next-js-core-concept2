import { headers } from "next/headers"

export async function GET() {
   return Response.json(comments, {
    headers : {
            "Set-Cookie" : "theme=dark"
             }
   })
}
export async function POST(request) {
    const newComment = await request.json()
    comments.push({
        id : comments.length + 1,
        text : newComment.text
    })
    return Response.json({
        messag : "new comments added",
        comments
    })
}

const comments = [
    {
        id: 1,
        text : "comment 1"
    },
    {
        id: 2,
        text : "comment 2"
    },
    {
        id: 3,
        text : "comment 3"
    },
]