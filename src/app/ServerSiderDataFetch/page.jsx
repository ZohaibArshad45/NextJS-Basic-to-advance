import React from 'react'
import Btn from './btn'

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
            <h1 className='text-blue-300 font-bold'>{user.id} {user.name}</h1>
            <h1>{user.body}</h1>

            {/* <Btn data = {user.body}/> // if we want to add button onclick effect, we need make it server side but this is server side data fetch, so we make any file btn and add her refence
            // we can use both server side and client side like this */}
            
          </div>
        ))
      }
    </div>
  )
}

export default ServerSideDataFetch