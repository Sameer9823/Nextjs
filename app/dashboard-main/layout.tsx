import React from 'react'


export default function DashboardMainLayout({feed, stats, children}: {feed: React.ReactNode, stats: React.ReactNode, children: React.ReactNode}) {
  return (
    
    <div className="flex gap-4 p-4">
      <aside className="w-1/4 border-r pr-4">
        {feed}
      </aside>
      <main className="w-1/2">
        {stats}
      </main>
      {children}
    </div>
  )
}