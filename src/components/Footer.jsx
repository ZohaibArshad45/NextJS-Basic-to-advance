import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='pl-10 pb-5 font-bold text-2xl bg-gray-100'>
            <Link href='/'>Back</Link>
            
        </div>
    )
}

export default Header