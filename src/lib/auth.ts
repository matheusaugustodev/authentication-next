import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"

export const authOptions : NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET! 
    }),
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email@email.com'},
        password: { label: 'Password', type: 'text', placeholder: 'Password'},
        username: { label: 'Username', type: 'text', placeholder: 'Username'},
      },
      async authorize(credentials, req) : Promise<any>{
        
        console.log("Authorize method:", credentials)
        const user = { email: 'teste@dd101.com', password: '123456', name: 'John' }
        
        return user
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  // pages: {
  //   signIn: "/login"
  // }
}
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}