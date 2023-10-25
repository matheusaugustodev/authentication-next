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
import Head from "next/head";

export default function SignIn() {
  return (
    <div className="w-full flex items-center flex-col gap-5 mt-10">
      <Head>
        <title>Sign In</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Card className="w-4/5 md:w-1/3">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>User your account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Forms></Forms>
        </CardContent>
      </Card>
      <Card className="w-4/5 md:w-1/3">
        <CardHeader>
          <CardTitle>Hello, Friend!</CardTitle>
          <CardDescription>
            Enter your personal details and start journey with us
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <a href="/signup"><Button className="w-full">Sign Up</Button></a>
        </CardContent>
      </Card>
    </div>
  );
}
