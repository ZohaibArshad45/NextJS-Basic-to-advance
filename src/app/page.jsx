'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navLink = (nav)=>{
    router.push(nav)
  }


  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-2">
      <h1 className="font-extrabold text-blue-700 text-4xl mb-8 drop-shadow-md">
        🚀 Home Page
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
        <Button asChild className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          <Link href="/learnEventFunctionStates">Learn Event & State</Link>
        </Button>

        <Button asChild className="bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          <Link href="/learnLinkNavigation">Learn Navigation</Link>
        </Button>

        <Button asChild className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          <Link href="/profile">Profile Page (Nested Routing)</Link>
        </Button>

        <Button onClick={() => router.push('/employee')} className="bg-red-500 hover:bg-red-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Dynamic Routes
        </Button>

        <Button onClick={() => router.push('/blog')} className="bg-orange-500 hover:bg-orange-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Catch All Routing
        </Button>

        <Button onClick={() => router.push('/notfound')} className="bg-gray-500 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          404 Error
        </Button>

        <Button onClick={() => router.push('/middle')} className="bg-yellow-500 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Middleware
        </Button>

        <Button onClick={() => router.push('/clientSideDataFetch')} className="bg-teal-500 hover:bg-teal-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Client-Side API Fetch
        </Button>

        <Button onClick={() => navLink('/ServerSiderDataFetch')} className="bg-indigo-500 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Server-Side API Fetch
        </Button>


        <Button onClick={() => navLink('/imageUse')} className="bg-cyan-500 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Image Optimization
        </Button>

        <Button onClick={() => navLink('/font-optomization')} className="bg-lime-500 hover:bg-lime-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Font Optimization
        </Button>

        <Button onClick={() => navLink('/development-production')} className="bg-rose-500 hover:bg-rose-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Development vs Production
        </Button>

        <Button onClick={() => navLink('/dynamic-metadata')} className="bg-violet-500 hover:bg-violet-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Dynamic Metadata
        </Button>

        <Button onClick={() => navLink('/script-components')} className="bg-emerald-500 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Script Components
        </Button>

        <Button onClick={() => navLink('/loader-withAPI')} className="bg-blue-700 hover:bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md transition">
          Loader | Show loading
        </Button>

        <Button onClick={() => navLink('/Static-Assets')} className="bg-pink-500 hover:bg-pink-700 text-white py-3 px-6 rounded-lg shadow-md transition">
        Static-Assets
        </Button>

      </div>
    </div>
  );
}
