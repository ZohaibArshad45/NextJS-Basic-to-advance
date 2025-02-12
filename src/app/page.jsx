'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Home() {

  const linkrouter = useRouter()

  const navLink = (nav)=>{
    linkrouter.push(nav)
  }


  return (
    <div className="main flex flex-col items-center justify-center pt-6">
      <h1 className="font-bold text-red-800 text-2xl m-3">Home Page</h1>
      <div className="links flex flex-col gap-3">
        <Button><Link href="/learnEventFunctionStates">Learn Event Function and State</Link></Button>
        <Button><Link href="/learnLinkNavigation">Learn about Link and Navigation</Link></Button>
        <Button><Link href="/profile">Profile Page Nested Routing</Link></Button>
        <Button onClick={()=> navLink('/employee')}>Learn About Dynamic Routes</Button>
        <Button onClick={()=> navLink('/blog')}>Learn Catch All Page</Button>
        <Button onClick={()=> navLink('/notfound')}>Learn about 404 Error </Button>
        <Button onClick={()=> navLink('/middle')}>Learn about middleware </Button>
        <Button onClick={()=> navLink('/clientSideDataFetch')}>Learn Client Side Data Fetch API </Button>
        <Button onClick={()=> navLink('/ServerSiderDataFetch')}>Learn Server Side Data Fetch API </Button>
        <Button onClick={()=> navLink('/Learn-Static-Site-Generation-(SSG)')}>Learn-Static-Site-Generation-(SSG)</Button>
        <Button onClick={()=> navLink('/imageUse')}>Learn How we use IMG </Button>
        <Button onClick={()=> navLink('/font-optomization')}>Learn font optomization </Button>
        <Button onClick={()=> navLink('/development-production')}>Learn about Development and Production </Button>

      </div>

    </div>
  );
}
