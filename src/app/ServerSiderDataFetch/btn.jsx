// if we want to add button onclick effect, we need make it server side but this is server side data fetch, so we make any file btn and add her refence
'use client'
import React from 'react'
import { Button } from "@/components/ui/button";


const Btn = ({ data }) => {
    return (
        <div className='m-2'>
            <Button onClick={() => alert(data)}>More</Button>


        </div>
    )
}

export default Btn