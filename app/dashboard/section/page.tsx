import Link from 'next/link'
import React from 'react'

function SectionPage() {
  return (
    <div>
        <h1 className="text-3xl font-bold">Section Page</h1>
        <Link href={'/settings'}>Go to setting</Link>
        <br />
        <Link href={'/admin'}>Go to Admin</Link>
    </div>
  )
}

export default SectionPage