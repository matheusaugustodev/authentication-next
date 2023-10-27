import { getCurrentUser } from "@/lib/session";
import NotLogged from "@/components/notlogged-page";
import { redirect } from "next/navigation";
import LoggedPage from "@/components/logged-page";

export default async function Home() {

  const user: any = await getCurrentUser()
  
  if (!user) redirect('/signin')

  return (
    <div className="flex justify-center">
      <div className="p-20">
        { user ? <LoggedPage user={user} /> : <NotLogged />}
      </div>
    </div>
  );
}
