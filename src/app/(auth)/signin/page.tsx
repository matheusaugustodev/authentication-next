"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Forms from "@/components/auth/signInForm"

interface SignInProps {
  AcessSign: () => void;
}

export default function SignIn({ AcessSign }: SignInProps) {
  return (
    <>
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>User your account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Forms></Forms>
        </CardContent>
      </Card>
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Hello, Friend!</CardTitle>
          <CardDescription>
            Enter your personal details and start journey with us
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <a href="/signup"><Button>Sign Up</Button></a>
        </CardContent>
      </Card>
    </>
  );
}
