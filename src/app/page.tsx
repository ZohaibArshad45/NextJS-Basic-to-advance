import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
  return (
    <div className="main flex flex-col items-center justify-center pt-6">
      <h1>Home Page</h1>
      <div className="links flex flex-col gap-3">
        <Button><Link href="/learnEventFunctionStates">Learn Event Function and State</Link></Button>
        <Button><Link href="/learnLinkNavigation">Learn about Link and Navigation</Link></Button>
        <Button><Link href="/profile">Profile Page</Link></Button>

      </div>

    </div>
  );
}
