import { db as prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {

    try {
        const data = await request.json()
    
        const { name, email, password } = data
    
        if (!name || !email || !password) return NextResponse.json('Invalid data!', { status: 400})
    
        const isUseExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (isUseExists) return NextResponse.json({ error: 'Email is already exist!'}, { status: 400 })
    
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: { name, email, hashedPassword }
        })
        
        return NextResponse.json(user)

    } catch(error) {
        return NextResponse.json({ error })
    }
}