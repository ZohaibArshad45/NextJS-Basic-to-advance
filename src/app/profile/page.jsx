'use client'
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const ProfilePage = () => {
    let router = useRouter()

    let navLink = (nav) => {
        router.push(nav)
    }

    return (
        <div className=''>
            ProfilePage
            <p>here we learn about nested route</p>
            <p>Nested folder ky ander folder bany gy wo route nested route ho</p>
            <p>For Example</p>
            <Button onClick={() => { navLink('/profile/shoaib') }}>Shoaib</Button>
            <Button onClick={() => { navLink('/profile/zohaib') }}>Zohaib</Button>
            <Button onClick={() => { navLink('/profile/arslan') }}>Arslan</Button>

            <br /><br />

            <p>And we make layout for this folder also == if we need <br />
            common style function and anthing for this folder we can make layout for this </p>
            <p>this is another concept</p>


        </div>
    )
}

export default ProfilePage