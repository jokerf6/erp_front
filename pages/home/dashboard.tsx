import React from 'react'

// Layout
import HomeLayout from '@/layouts/home'
import Head from 'next/head'

export default function Dashboard() {
  return (
    <>
    <Head>
      <title>ERP | Dashboard</title>
    </Head>
    
    <div>Dashboard</div>
    </>
  )
}

Dashboard.PageLayout = HomeLayout