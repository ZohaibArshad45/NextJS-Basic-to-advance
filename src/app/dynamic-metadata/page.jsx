import React from 'react'

const DynamicMetaData = () => {
    return (
        <div>
            {/* its is the wrong way its show to title on console */}
            {/* <title>New Title</title> */}
            <h1>Dynamic MetaData</h1>
            <pre>✅ Dynamic Metadata Benefits <br />
                ✔ SEO Friendly – Improves Google ranking. <br />
                ✔ Dynamic Content – No need to hardcode titles. <br />
                ✔ Social Media Optimization – Enhances link previews.
            </pre>
            <br /> <br />
            <pre>✅ How We Use Dynamic Metadata in Next.js <br />
                1️⃣ Define `generateMetadata`** inside your page file. <br />
                2️⃣ Return an object** with title, description, and Open Graph metadata. <br />
                3️⃣ Next.js automatically applies it** to the page header. <br />
                4️⃣ No need for `title` tags inside JSX!
            </pre>
        </div>
    )
}
export default DynamicMetaData

export function generateMetadata() {  // ✅ Fix: Correct spelling
    return {
        title: "My first Project",
        description: " this is description"
    }
}