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

import Forms from "@/components/auth/signUpForm"

export default function SignUp() {
  return (
    <div className="w-full flex items-center flex-col gap-5 mt-10">
      <Card className="w-4/5 md:w-1/3">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>User your account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Forms />
        </CardContent>
      </Card>
      <Card className="w-4/5 md:w-1/3">
        <CardHeader>
          <CardTitle>Do you have a account?</CardTitle>
          <CardDescription>Joy using your account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <a href="/signin"><Button className="w-full">Sign In</Button></a>
        </CardContent>
      </Card>
    </div>
  );
}
