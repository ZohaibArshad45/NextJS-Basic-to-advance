import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button";


const Header = () => {
  return (
    <div className='p-8'>
        <Button><Link href={'/'}>Home</Link></Button>
    </div>
  )
}

export default Header