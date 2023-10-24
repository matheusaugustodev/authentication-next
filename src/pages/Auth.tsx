'use client'

import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button";

export default function Auth() {

  const { data: session } = useSession()

    // const router = useRouter();
    // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    
    // if (token) verifyToken(token)
    // else router.push('/')
    
    async function verifyToken(token: String) {
    
      const response = await fetch(`http://localhost:3001/verifytoken/${token}`, {
        method: "GET"
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data);
    
      // if (data) router.push("/");
    };

    return (
      <>
        <div className="text-center">
          <a className="text-white" href="/client">Página de login</a>
          <Button
            onClick={() => signIn('google')}
          >Login</Button>
          <h1 className="text-white">Auth Page</h1>
        </div>
      </>
    )
}