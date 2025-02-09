'use client'
import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


const LearnLinkNavigation = () => {

    const router = useRouter();

    const NavigationLinks = (nav) => {
        router.push(nav);
    };


    return (
        <div className='flex flex-col items-center justify-center pt-6 gap-2'>
            <h1>Learn Link Navigation</h1>

            {/* ======== Next/Link =========== */}
            <p>✅ 1. Using Link for Client-Side Navigation </p>
            <p>next/link is the best way to navigate between pages in Next.js without reloading the page.</p>
            <p>import Link from "next/link"</p>
            <p>Why use Link? <br />
                Faster than a tag because it preloads the page. <br />
                No full-page reloads, keeping the app smooth.</p>
            <Button><Link href={'/'}>Home</Link></Button>

            {/* ================= */}
            <p>✅ 2. Programmatic Navigation with useRouter()</p>
            <p>If you want to navigate dynamically (e.g., after a button click), use useRouter()</p>
            {/* <Button onClick= {()=>  router.push('/dsd')}>Home</Button> */}
            <Button onClick={() => NavigationLinks('/')}>Home</Button> {/* best way make its function, pass paremeters */}
            <Button onClick={() => NavigationLinks('/about')}>About</Button> {/* best way make its function, pass paremeters */}
            <p>🔹 router.push("/page") → Navigate to a new page. <br />
                🔹 router.replace("/page") → Navigate without going back in history. <br />
                🔹 router.back() → Go back to the previous page.</p>

            {/*  */}
            <p>===================</p>
            <p>✅ 3. Navigating with Query Parameters (/page?name=John)            </p>
            <Button> <Link href={{ pathname: "/profile", query: { name: "Zohaib" } }}>Profile </Link></Button>
        </div>
    )
}

export default LearnLinkNavigation