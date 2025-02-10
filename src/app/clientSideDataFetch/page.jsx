'use client'
import React, { useEffect, useState } from 'react'

const ClientSideDataFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getuser() {
            const urlData = await fetch('https://jsonplaceholder.typicode.com/users')
            setData(await urlData.json())
            // const newdata  =await Data.json()
            // setposts(newdata)
        }
        getuser()
    }), [] // Missing dependency array in useEffect() → Without [], the effect runs on every render, leading to an infinite loop.

    return (
        <div>
            <h1>ClientSideDataFetch</h1>
            <pre>
                1) First we made it client side by 'use Client' <br />
                2) import useState  <br />
                3) useEffect == ek call back lata ha == <br />
                    phr is ky andr ek function bana data Fetch krny ky lia <br />
                4) phr next map use kr ky data Render kr lo <br /><br /><br />
                

            </pre>
            {
                data.map((user) => (
                    <div key={user.id} className='bg-gray-700 mb-4'>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div>{user.address.street}</div>
                    </div>
                )
                )
            }
        </div>
    )
}
export default ClientSideDataFetch

// // ===========================================================
// 'use client'
// import { useEffect, useState } from "react"

// async function getData() {
//     let Data = await fetch('https://jsonplaceholder.typicode.com/albums')
//     let newdata = await Data.json()
//     return newdata //data return krna pary ga yaha
// }

// const ClientSideDataFetch = () => {
//     const [posts, setposts] = useState([]);

//     useEffect(() => {
//         const fetchdata = async ()=>{
//             let fetchdataUser = await getData()
//             setposts(fetchdataUser)

//             //// asy edr hi function bana sakhty ha, but hum upper bany gy
//             // let Data = await fetch('https://jsonplaceholder.typicode.com/albums')
//             // let newdata = await Data.json()
//             // setposts(newdata)

//         }
//         fetchdata()
//     }, [])


//     return (
//         <>
//             <h1 className="flex flex-col  items-center m-10 text-yellow-500">Client Side Fetch Data | API</h1>
//             {
//                 posts.map((post) =>
//                     <li key={post.id}>{post.title}</li>
//                 )
//             }
//         </>
//     )
// }

// export default ClientSideDataFetch