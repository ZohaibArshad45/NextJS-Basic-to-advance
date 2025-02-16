'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
    const router = useRouter();

    // Function to handle navigation
    const navLink = (path) => {
        router.push(path);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600">🚀 Understanding Nested Routes in Next.js</h1>

            <p className="text-gray-700 mt-2">
                In **Next.js**, a **nested route** is created by placing a folder inside another folder.
            </p>

            <h2 className="text-lg font-semibold text-green-700 mt-4">📌 Example of Nested Routes</h2>

            <p className="text-gray-700">
                If we create a folder named **profile**, and inside it, we create individual pages like **shoaib.tsx**, **zohaib.tsx**, and **arslan.tsx**,  
                then their routes will be:
            </p>

            <ul className="list-disc ml-6 mt-2 text-gray-800">
                <li><strong>/profile/shoaib</strong></li>
                <li><strong>/profile/zohaib</strong></li>
                <li><strong>/profile/arslan</strong></li>
            </ul>

            <div className="flex gap-3 mt-4">
                <Button onClick={() => navLink('/profile/shoaib')}>Shoaib</Button>
                <Button onClick={() => navLink('/profile/zohaib')}>Zohaib</Button>
                <Button onClick={() => navLink('/profile/arslan')}>Arslan</Button>
            </div>

            <br />

            <h2 className="text-lg font-semibold text-purple-600">🖌 Using Layout for Nested Routes</h2>
            <p className="text-gray-700 mt-2">
                If we need **common styles, functions, or UI components** for all pages inside the **profile** folder,  
                we can create a **layout.tsx** file inside the **profile** directory.
            </p>

            <p className="text-gray-700 mt-2">
                This layout will wrap all the pages inside the **profile** folder, keeping them consistent.
            </p>
        </div>
    );
};

export default ProfilePage;
