import Head from 'next/head'
import React from 'react'
import HomePage from '../components/HomePage';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>TeenSym</title>
        <meta name="description" content="Simulator For Teensy Boards" />        
      </Head>
      <HomePage />
    </React.Fragment>
  )
}
