export async function PATCH(request, {params}) {
    const body = request.json()
    const index = comments.findIndex((c) => c.id === parseInt(params.id))
   comments[index] = {
    text : body.text
   }
    return Response.json({    
        message: "New Comments added from PATCH ROUTE API",
        comments
    })
}

export async function DELETE(request, {params}) {
    const newComments = comments.filter((c)=> c.id !== parseInt(params.id))

    return Response.json({    
        message: "comments delete",
        newComments
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