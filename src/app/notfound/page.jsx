'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';




const PageNot = () => {
  let router = useRouter()
  let linkHandle = (nav)=>{
    router.push(nav)
  }
  return (
    <div> For Create Page not Found 404 Error!
      <p>
        for make page not found we make file inside app <br />
        file name not-found.tsx <br />
        be sure file name exact same, and this file you can design or what you need 
      </p>
      <br />
      <Button onClick = {()=>linkHandle('KuchBhi')}>For check</Button>

      <br /><br />
      <p>For specfic route Error we can use catch all like folder name [...kuchbhihai] <br />
      the we make page.jsx and design like error</p>
    </div>

  )
}

export default PageNot