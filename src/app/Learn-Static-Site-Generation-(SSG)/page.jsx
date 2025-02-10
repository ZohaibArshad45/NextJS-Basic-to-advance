// // Two Type of Pre-rendering 
// // 1 =>Server Side (jb call krty ha (mean jb click krty tb html ma convert hota h)
// // 2 =>Static Side (call huny sy phly hi (file html ma convert ho kr rakh di jati ha, is lia fast load hota hain )
// // build banty waqt
// // SEO, Fast loading => Static Side Generation

// import React from 'react'
// import getDataAPI from '../../../services/page'
// import Link from 'next/link'

// const StaticSiteGeneration = async () => {
//     const data = await getDataAPI() // getDataAPI function hum ny servers (Src sy baher) ma banaya howa ha

//     return (
//         <>
//             <h1>Learn Static Site Generation (SSG) API</h1>

//             <pre>
//             // Two Type of Pre-rendering 
//             // 1) Server Side (jb call krty ha (mean jb click krty tb html ma convert hota h)
//             // 2) Static Side (call huny sy phly hi (file html ma convert ho kr rakh di jati ha, is lia fast load hota hain )
//             // build banty waqt
//             // SEO, Fast loading = Static Side Generation
//             </pre>


//             {/* {
//       data.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))
//     } */}


//             {
//                 data.map((user, i) => (
//                     <h1 key={i}>
//                         <Link href={`Learn-Static-Site-Generation-(SSG)/${user.id}`} >{user.username}</Link>
//                     </h1>
//                 ))
//             }


//         </>
//     )
// }

// export default StaticSiteGeneration


import React from 'react'

const badmabanahai = () => {
  return (
    <div>badmabanahai</div>
  )
}

export default badmabanahai