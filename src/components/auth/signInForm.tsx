"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from 'next/navigation'
import { use, useState } from "react";
import { signIn } from "next-auth/react";

// const createUser = async (user: ObjectParam) => {

//   const response = await fetch("https://chatnext.azurewebsites.net/user/singin", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user)
//   });
//   const data = await response.json();
//   console.log(data);
//   localStorage.setItem('token', data)

//   if (data) router.push('/')
// };

const formSchema = z.object({
  email: z.string().min(10, {
    message: "Invalid email.",
  }),
  password: z.string().min(6, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Forms() {
  
  // async function onSubmit(data: z.infer<typeof formSchema>) {
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    const res = await signIn<'credentials'>('credentials')


    setIsLoading(false)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  // new code
  interface IUser {
    email: String,
    password: String
  }
  const [data, setData] = useState<IUser>({
    email: '',
    password: ''
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleChange = () => {

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
}
