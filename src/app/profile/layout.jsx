import Link from 'next/link'
import React from 'react'

const layout = ({ children }) => {
    return (
    <div>
        {children}
        <Link href='/profile'><span className='bg-red-900 px-2 rounded-lg  border-4 text-white'>Profile Page</span>This come from layout page</Link>
    </div>
    )
}

export default layout