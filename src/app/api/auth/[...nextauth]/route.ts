import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"

const providers= [
    GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
];
export async function GET( req:any,res:any ) {
    return NextAuth(req,res,{providers:providers})
    }
    export async function POST( req:any,res:any ) {
        return NextAuth(req,res,{providers:providers})
        }
