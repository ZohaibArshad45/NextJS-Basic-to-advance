import React from 'react'
import Link from 'next/link'

const EmployeePage = () => {
    return (
        <div>
            <p>learn about dynamic router <br />
                make folder with [ ] <br />
                For Example we now create details page, <br />
                in details page we use params and also make client side (using use client)
            </p> <br />

            <h1 className='text-green-700 font-bold'>EmployeePage</h1>
            <div className=' flex flex-col gap-2 font-bold'>
                <Link href='/employee/arslan'>Arslan</Link>
                <Link href='/employee/shaoib'>Shaoib</Link>
                <Link href='/employee/zohaib'>Zohaib</Link>
                <Link href='/employee/ali'>Ali</Link>
                <Link href='/employee/ahmad'>Ahmad</Link>
                <Link href='/employee/ahtisham'>Ahtisham</Link>
            </div>
        </div>
    )
}

export default EmployeePage