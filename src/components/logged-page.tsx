'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";


  interface User {
    name: string;
    email: string;
  }
  
  interface LoggedPageProps {
    user: User;
  }
  
  
  export default function LoggedPage({ user }: LoggedPageProps) {
      const loggedOut = async () => {
        signOut()
        toast({
            title: "Oooops...",
            description: "You are quited with success!"
        })
      }
        const { name, email } = user
      return (
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Welcome, {name}!</CardTitle>
              <CardDescription>
                You are logged on this page!
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Button onClick={loggedOut}>Sign Out</Button>
                </div>
            </CardContent>
          </Card>
        )
  }