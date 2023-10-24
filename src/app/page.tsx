import Auth from "@/pages/Auth";
import Homepage from "@/pages/Homepage";
import Login from "@/pages/Login";

import { getCurrentUser } from "@/lib/session";

const verifyToken = async (token: String) => {

  const response = await fetch(
    `http://localhost:3001/verifytoken/${token}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  );
  const data = await response.json();
  console.log(data);
  localStorage.setItem("data", data);

  // if (data) router.push("/");
};

export default async function Home() {

  const user = await getCurrentUser()

  // const socket = io('http://localhost:3001')
  // const socket = new WebSocket('wss://chatnext.azurewebsites.net')
  
  return (
    <>
      <h1 className="text-white">{JSON.stringify(user)}</h1>
      {/* <Homepage /> */}
    </>
  );
}
