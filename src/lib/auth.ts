import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db as prisma } from "@/lib/db"
import bcrypt from 'bcrypt'

export const authOptions : NextAuthOptions = {
  adapter: PrismaAdapter(prisma as any),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email@email.com'},
        password: { label: 'Password', type: 'text', placeholder: 'Password'},
        username: { label: 'Username', type: 'text', placeholder: 'Username'},
      },
      async authorize(credentials, req) : Promise<any>{
        
        if (!credentials?.email || !credentials?.password) throw new Error('Dados de login necessarios')

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email
          }
        })

        if (!user || !user.hashedPassword) {
          throw new Error("User don't registered at credentials!")
        }

        const matchPassword = await bcrypt.compare(credentials?.password, user.hashedPassword)
        if(!matchPassword) throw new Error("Incorrect password!")

        return user
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }): Promise<boolean> {
      console.log(user)
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(token)
      return token
    }
  }
}
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}