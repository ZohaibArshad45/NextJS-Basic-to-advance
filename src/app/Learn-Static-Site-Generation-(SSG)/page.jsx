import Image from 'next/image'
import React from 'react'

const StaticSiteGeneration = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Everything in the public folder is a static file. <br />
        We don’t need to write "public" in the path.
      </h1>

      {/* ✅ Explanation about CSS & Scripts in Public Folder */}
      <p className="mt-6 text-gray-700 text-center max-w-lg">
        In the public folder, we can also store **CSS files and JavaScript files**.
        To include them in **Next.js**, we can link them inside the `Head component
        in `layout.js` or any page.
      </p>
      <br />

      {/* ✅ Benefits & Drawbacks Section */}
      <div className="max-w-2xl bg-white p-4 shadow-md rounded-md">
        <h2 className="text-lg font-semibold text-blue-600 mb-2">✅ Benefits of the Public Folder:</h2>
        <ul className="list-disc ml-5 text-gray-700">
          <li>🔹 Stores static assets like images, styles, and scripts.</li>
          <li>🔹 No need to import files in Next.js, just use direct paths.</li>
          <li>🔹 Faster loading since assets are served as-is (no processing by Webpack).</li>
        </ul>

        <h2 className="text-lg font-semibold text-red-600 mt-4 mb-2">❌ Drawbacks of the Public Folder:</h2>
        <ul className="list-disc ml-5 text-gray-700">
          <li>⚠️ Files are not optimized (unlike `next/image`, which optimizes images automatically).</li>
          <li>⚠️ Public files cannot be imported as modules (e.g., `import` won’t work).</li>
          <li>⚠️ If a file is large, it can slow down page load since it's served directly.</li>
        </ul>
      </div>
      {/* 🔹 Optimized Image */}
      <div className="mt-6">
        <p className="mt-4 text-gray-600">
          This image is served directly from the public folder.
        </p>
        <Image
          src="/man.png" // Image inside the "public" folder
          alt="Illustration of a person"
          width={300}
          height={300}
          priority={true} // Loads image faster
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  )
}

export default StaticSiteGeneration
