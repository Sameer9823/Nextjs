import Link from 'next/link';
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link href={"/dashboard/reports"}>View Reports</Link>
        <br />
        <Link href={"/profile"}>View Profile</Link>
    </div>

  )
}

export default Dashboard;