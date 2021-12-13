import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Forward Communications Agent</title>
        <meta property="og:title" content="Forward Communications Agent" />
      </Helmet>
    </div>
  )
}

export default Home
