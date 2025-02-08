import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth(
{
    session : {
        strategy : "jwt"
    },
    providers : [
CredentialsProvider({
    credentials : {
        email : { label : "Email", type : "text", required : true, placeholder : "Your Email",},
        password : { label : "Password", type : "password", required : true, placeholder : "Password",},
       
    },
    async authorize(credentials) {
        const {email, password} = credentials;
        if(!credentials){
            return null;
        }
      if(email){
        const currentUser = users.find((user)=> user.email === email)
        if(currentUser){
            if(currentUser.password === password){
                return currentUser
            }
        }
      }
      return currentUser;
    }
}),
    ],

}

)

const users = [
    {
        id : 1,
        name : "Asad",
        email : "asad@gmail.com",
        password : "password"
    },
    {
        id : 2,
        name : "Bokul",
        email : "bokul@gmail.com",
        password : "password"
    },
    {
        id : 3,
        name : "Karim",
        email : "karim@gmail.com",
        password : "password"
    }
]

export {handler as GET, handler as POST}