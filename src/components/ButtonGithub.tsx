'use client'
import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { Icons } from "./ui/icons"

export default async function ButtonGithub() {
    return (
    <Button variant="outline" onClick={() => signIn('github')}>
        <Icons.gitHub className="mr-2 h-4 w-4" />
        Github
    </Button>
    )
}