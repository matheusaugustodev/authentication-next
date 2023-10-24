'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'

export default function Client() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect: "/login?callbackurl=/client"
        }
    })

    return <h1>Client</h1>
}