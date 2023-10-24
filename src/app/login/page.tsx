"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import SignIn from "../components/signin/SignIn";
import { useState } from "react";


export default async function Login() {
    
    const [ showSign, setShowSign ] = useState(false)
    
    const AcessSign = () => {
        if (showSign) setShowSign(false)
        else setShowSign(true) 
    }

  return (
    <>
        <SignIn AcessSign={() => AcessSign()} />
        <div className="text-center">
            <Button onClick={() => signIn("google")}>Login</Button>
            <h1 className="text-white">Login Page</h1>
        </div>
    </>
  );
}
