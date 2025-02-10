import React from 'react'

let getData = async function(){
  let data = await fetch('https://jsonplaceholder.typicode.com/comments')
  let currectData = await data.json()
  return currectData
}

const ServerSideDataFetch = async() => {
   let mainData = await getData()

  return (
    <div>
      <h1>Server Side Data Fetch</h1>
      
      {
        mainData.map((user)=>(
          <div key={user.id} className='bg-gray-700 mb-3 p-3'>
            <li >{user.name}</li>
            <h2>{user.body}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default ServerSideDataFetch