// // 📌 Static Site Generation (SSG) Example in Next.js
// import React from 'react'
// import getDataAPI from '../../../services/page' // ✅ Ensure this function correctly fetches data
// import Link from 'next/link'

// const StaticSiteGeneration = async () => {
//     try {
//         const data = await getDataAPI(); // ✅ Fetch data at build time

//         return (
//             <>
//                 <h1 className="text-2xl font-bold">🚀 Learn Static Site Generation (SSG) API</h1>

//                 <pre className="bg-gray-900 text-white p-4 rounded-md text-sm">
// {`
// 📌 Two Types of Pre-Rendering:
// 1️⃣ Server-Side Rendering (SSR) → Generates HTML when a request is made.
// 2️⃣ Static Site Generation (SSG) → Pre-renders HTML at build time (Fast & SEO-friendly).
// `}
//                 </pre>

//                 {/* ✅ Display API Data */}
//                 {data.length > 0 ? (
//                     data.map((user) => (
//                         <h2 key={user.id} className="text-lg font-semibold text-blue-500 mt-2">
//                             <Link href={`/Learn-Static-Site-Generation/${user.id}`}>
//                                 {user.username}
//                             </Link>
//                         </h2>
//                     ))
//                 ) : (
//                     <p className="text-red-500">⚠️ No data available!</p>
//                 )}
//             </>
//         )
//     } catch (error) {
//         console.error("❌ Error fetching data:", error)
//         return <p className="text-red-500">❌ Failed to load data. Please try again later.</p>
//     }
// }

// export default StaticSiteGeneration


// =====================================================
import React from 'react'

const ComingSoon = () => {
  return (
    <div className="text-center text-gray-700 text-xl font-semibold">
      🚧 Page Under Construction 🚧
    </div>
  )
}

export default ComingSoon
