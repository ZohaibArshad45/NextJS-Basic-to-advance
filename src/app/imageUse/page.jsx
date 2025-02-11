import React from 'react'
import Image from 'next/image'

const ImageUse = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Learn How to Use Images in Next.js</h1>

            <ol className="list-decimal ml-6 mt-2">
                <li>Import Image from 'next/image'</li>
                <li>Add images in the <code>public</code> folder</li>
                <li>Use the correct path in the <code>src</code> attribute</li>
            </ol>

            {/* Local Image Example */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Using Local Image</h2>
                <Image
                    src="/man.png"  // Public folder image path
                    alt="Local Image"
                    width={300}
                    height={300}
                />
            </div>

            {/* Online Image Example */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-yellow-500">Using Online Image</h2>
                <p>Ensure the domain is added in <code>next.config.js</code></p>
                <Image
                    src="https://images.pexels.com/photos/20259613/pexels-photo-20259613/free-photo-of-model-in-dress-sitting-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="Online Image"
                    width={300}
                    height={300}
                />
            </div>

            {/* Explanation Section */}
            <div className="mt-8 bg-gray-700 p-4 rounded-lg">
                <h2 className="text-xl font-bold">Why Use <code>next/image</code> Instead of &lt;img&gt;?</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Automatic Image Optimization:</strong> Converts images to WebP, reducing size.</li>
                    <li><strong>Lazy Loading:</strong> Loads images only when visible on screen.</li>
                    <li><strong>Responsive Images:</strong> Adjusts images for different screen sizes.</li>
                    <li><strong>Prevents Layout Shift:</strong> Avoids CLS issues by requiring width & height.</li>
                    <li><strong>Next.js Image CDN:</strong> Optimizes and caches images for fast performance.</li>
                </ul>
            </div>
        </div>
    )
}

export default ImageUse
