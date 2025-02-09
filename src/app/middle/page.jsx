import React from 'react';

const LearnMiddleWare = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600">Learn Middleware</h1>
            <p className="text-gray-700 mt-2">
                Middleware is used to process requests between the client and the server.
            </p>

            <div className="mt-4 p-4 border rounded-md bg-gray-100">
                <p className="text-lg font-semibold">How to Create Middleware in Next.js:</p>
                <ul className="list-disc list-inside text-gray-800 mt-2">
                    <li>1️⃣ Create a <code>middleware.js</code> file inside the <code>src</code> folder (outside the <code>app</code> folder).</li>
                    <li>2️⃣ The file name must be <strong>middleware.js</strong>.</li>
                    <li>3️⃣ Inside this file, define the function:</li>
                    <pre className="bg-black text-white p-2 rounded-md mt-2">
                        {`export function middleware() {
  console.log('Middleware triggered');
}`}
                    </pre>
                    <li>4️⃣ Middleware runs before the request is completed and can be used for redirection, authentication checks, etc.</li>
                </ul>
            </div>

            <div className="mt-4 p-4 border rounded-md bg-gray-100">
                <p className="text-lg font-semibold">Example Use Case:</p>
                <p className="text-gray-800 mt-2">
                    Middleware can be used to check if a user is logged in. If not, it redirects them to a login page.
                </p>

                <p>For more details Check Middleware file</p>
                <p className='font-bold text-red-500'>Youtube aur chatGPT py isy aur axhy se dakho... beta</p>
            </div>
        </div>
    );
};

export default LearnMiddleWare;
