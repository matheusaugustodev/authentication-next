'use client'
import { signIn } from "next-auth/react"
import { Button } from "../ui/button"
import { Icons } from "../ui/icons"

export default async function ButtonGoogle() {
    return (
        <Button variant="outline" onClick={() => signIn('google')}>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
        </Button>
    )
}