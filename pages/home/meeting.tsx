import Head from 'next/head'

import HomeLayout from '@/layouts/home'

export default function Meeting() {
  return (
    <>
    <Head>
      <title>ERP | Meeting</title>
    </Head>

    <div>meeting</div>
    </>
  )
}

Meeting.PageLayout = HomeLayout