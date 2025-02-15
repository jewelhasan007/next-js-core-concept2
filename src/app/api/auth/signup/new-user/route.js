import connectDB from "@/lib/connectDB"

export const POST = async (request) => {
try{
const db = await connectDB();
const userCollection = db.collection('users')
const newUser = await request.json();
const res = await userCollection.insertOne(newUser)

        const filter = { name: newUser.name }; // Find the user by username
        const update = { $set: { password: newUser.password } }; // Add the password field

        const result = await userCollection.updateOne(filter, update);

return Response.json({message: "new user created"})

}
catch(error){
    console.log('error message is=', error.message)
return Response.json({message: "something went wrong"})
}
}