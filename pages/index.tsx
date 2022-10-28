import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        test
      </div>
    </Layout>
  )
}

export default Home
