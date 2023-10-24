import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import React from "react";
import { redirect } from "next/navigation";

const Server = async () => {
    const session = await getServerSession(authOptions)
    console.log(session)
    if (!session) redirect("/login?callbackUrl=/server")
  return (
    <div>Server</div>
  )
}

export default Server