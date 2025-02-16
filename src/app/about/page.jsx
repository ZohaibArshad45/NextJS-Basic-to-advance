import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mb-8">
                <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                <p className="mt-3 text-gray-700">
                    Welcome to <span className="font-semibold text-blue-600">YourWebsite</span>,
                    where we create innovative solutions and deliver outstanding digital experiences.
                </p>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold text-blue-600 mb-2">🌟 Our Mission</h2>
                    <p className="text-gray-700">
                        To provide high-quality and user-friendly digital solutions that empower businesses
                        and individuals to achieve their goals efficiently.
                    </p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold text-green-600 mb-2">🚀 Our Vision</h2>
                    <p className="text-gray-700">
                        To be a leader in the tech industry, innovating and shaping the future of web and
                        software development.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="mt-10 max-w-4xl text-center">
                <h2 className="text-2xl font-bold text-gray-800">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {/* Example Team Member */}
                    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                        <Image src="/man.png" alt="Team Member" width={100} height={100} className="rounded-full" />
                        <h3 className="font-semibold text-gray-800 mt-3">Zohaib Arshad</h3>
                        <p className="text-gray-600 text-sm">CEO & Founder</p>
                        <p className="text-gray-600 text-sm">+923402150300</p>
                    </div>
                    {/* Add more team members as needed */}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
