'use client'
import React from 'react'
// import { useParams } from 'next/navigation' // Alternative way to get params


const DetailsPage = ({ params }) => {
  // console.log(params)

  // Alternative: Use useParams() if you prefer
  // const DetailsPage = () => { // her we does not need to write params in ()
  // const dynamicParams = useParams();

  return (
    <div>
      <p>
        we make it client side <br />
        then we use params, for get url <br />
        then we use params.folder name which is dynamic
      </p>
      <h2 className='font-bold text-yellow-700'>DetailsPage</h2>
      <h2>Employee Name : <span className='font-bold text-red-500 capitalize'>{params.details}</span></h2>
      {/* Alternative: {dynamicParams.details} if using useParams() */}

    </div>
  )
}

export default DetailsPage