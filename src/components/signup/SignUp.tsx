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
import { Label } from "@/components/ui/label";

import Forms from "./Forms";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50, {
      message: "Username must be at least 50 characters.",
    }),
});

interface SignInProps {
  AcessSign: () => void;
}

export default function SignUp({ AcessSign }: SignInProps) {
  return (
    <>
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>User your account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Forms />
        </CardContent>
      </Card>
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Do you have a account?</CardTitle>
          <CardDescription>Joy using your account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button onClick={AcessSign}>Sign In</Button>
        </CardContent>
      </Card>
    </>
  );
}
