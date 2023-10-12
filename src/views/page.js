import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Presentation Page</title>
        <meta property="og:title" content="Page - Presentation Page" />
      </Helmet>
    </div>
  )
}

export default Page
