'use client'
import React from 'react'

const CatchAll = ({ params }) => {
    const posts = params?.posts || [] // Ensure it's always an array

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600">Catch All Route Page</h1>
            <p className="text-gray-700 mt-2">Check the URL parameters below:</p>

            <div className="mt-4 p-4 border rounded-md bg-gray-100">
                <p className="text-lg font-semibold">URL Parameters:</p>
                {/* <h2>📝 Blog Name: <span className="text-blue-500">{params.posts[0] || "N/A"}</span></h2> */}
                <h2>📝 Blog Name: <span className="text-blue-500">{posts[0] || "N/A"}</span></h2>
                <h2>👤 Blog Owner: <span className="text-blue-500">{posts[1] || "N/A"}</span></h2>
                <h2>📅 Date: <span className="text-blue-500">{posts[2] || "N/A"}</span></h2>
                <h2>📆 Month: <span className="text-blue-500">{posts[3] || "N/A"}</span></h2>
                <h2>📅 Year: <span className="text-blue-500">{posts[4] || "N/A"}</span></h2>
                <h2>📅 more: <span className="text-blue-500">{posts[5] || "N/A"}</span></h2>
            </div>
        </div>
    )
}

export default CatchAll
