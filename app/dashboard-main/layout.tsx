import Link from 'next/link'
import React from 'react'


export default function DashboardMainLayout({feed, stats, tab1, tab2, children}: {feed: React.ReactNode, stats: React.ReactNode, tab1: React.ReactNode, tab2: React.ReactNode, children: React.ReactNode}) {
  return (
    
    <div className="flex gap-4 p-4">
      <nav className="w-1/4 border-r pr-4">
        <Link href="/dashboard-main/@tab1"><h1>Tab1</h1></Link>
        <Link href="/dashboard-main/@tab2"><h1>Tab2</h1></Link>
      </nav>

      <div>
        {tab1}
        {tab2}
      </div>

      {/* <aside className="w-1/4 border-r pr-4">
        {feed}
      </aside>
      <main className="w-1/2">
        {stats}
      </main> */}
      {children}
    </div>
  )
}