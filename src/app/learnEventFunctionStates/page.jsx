'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const LearnEventFunctionStats = () => {
  // Function without parameter
  const handleClick = () => {
    alert("Learn About Function")
  }

  // Function with parameter
  const handleClick2 = (name) => {
    alert("Learn About Function with parameter: " + name)
  }

  // State
  const [number, setNumber] = useState(0)

  return (
    <div className='flex flex-col items-center py-5 gap-4 bg-gray-100 min-h-screen'>
      <h1 className='text-2xl font-bold text-blue-700'>🚀 Learn Event Function and State</h1>
      <p className="text-gray-600">📌 Learn how to create event functions and use state in this page.</p>

      {/* Event */}
      <Button onClick={() => alert("Hello!")} className="bg-blue-600 hover:bg-blue-800 text-white">Event</Button>

      {/* Function without parameter */}
      <Button onClick={handleClick} className="bg-green-600 hover:bg-green-800 text-white">Function without parameter</Button> 

      {/* Function with parameter */}
      <Button onClick={() => handleClick2('Zohaib')} className="bg-purple-600 hover:bg-purple-800 text-white">Function with parameter</Button>

      {/* State Display */}
      <p className="text-xl font-semibold">{number}</p>

      {/* State Buttons */}
      <div className='flex items-center justify-center gap-3'>
        <Button onClick={() => setNumber(number + 1)} className="bg-teal-600 hover:bg-teal-800 text-white">Increase</Button>
        <Button onClick={() => setNumber(number - 1)} className="bg-red-600 hover:bg-red-800 text-white">Decrease</Button>
      </div>
    </div>
  )
}

export default LearnEventFunctionStats
