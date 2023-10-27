import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/session";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Forms from "@/components/auth/signInForm";
import Head from "next/head";
import { redirect } from "next/navigation";
import ButtonGoogle from "@/components/auth/ButtonGoogle";
import ButtonGithub from "@/components/auth/ButtonGithub";


export default async function SignIn() {
  const user: any = await getCurrentUser();

  if (user) redirect("/");

  return (
    <div className="mt-10 flex w-full flex-col items-center gap-5">
      <Head>
        <title>Sign In</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Card className="w-4/5 md:w-1/3">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Enter your personal details and start journey with us
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <ButtonGoogle />
            <ButtonGithub />
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Forms />
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
          <a href="/signup">
            <Button className="w-full">Sign Up</Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
