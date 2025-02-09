import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button";


const BlogPage = () => {
  return (
    <div>
        Blog Page
        <p>For Example : url /blog/post/2/3/2025</p>
        <p>For this we make catch all route</p>
        <p>For catch all we make folder name [...post] like this</p>

        <Button><Link href = '/blog/new/my/4/5/2040'>Catch All Route</Link></Button>

    </div>
  )
}

export default BlogPage