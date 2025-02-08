'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const LearnEventFunctionStats = () => {

  // function without parameter
  const handleClick = () => {
    alert("Learn About Function")
  }

  // function with parameter
  const handleClick2 = (name) => {
    alert("Learn About Function with parameter : " + name)
  }

  // States
  const [number, setnumber] = useState(0)
  const handleClick3 = () => {
    setnumber(number + 1)
  }
  const handleClick4 = () => {
    setnumber(number - 1)
  }


  return (
    <div className='flex flex-col items-center justify-center pt-6 gap-2'>
      <h1 className=' font-bold'>Learn Event Function and State</h1>
      <p>Learn how to create event functions and state in this Page.</p>

      {/* Event == use krny ky lia use client likhna pary ga (sb se upper)*/}
      <Button onClick={() => alert("hello")}>Event</Button>

      {/* function == without parameter */}
      <Button onClick={handleClick}>Function without parameter</Button> <br />

      {/* function == with parameter (we need to function her also)*/}
      <Button onClick={() => { handleClick2('Zohaib') }}>Function with parameter</Button>

      {/* State == is like a variable but not same */}
      <p>{number}</p>
      <div className='flex items-center justify-center gap-2'>
        {/* <button onClick={()=>{setnumber(number+1)}}>Stats</button> */}
        <Button onClick={handleClick3}>Increase</Button>
        <Button onClick={handleClick4}>Decrease</Button>
      </div>



    </div>

  )
}

export default LearnEventFunctionStats