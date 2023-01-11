import Head from 'next/head'
import { Inter } from '@next/font/google'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Benjamin Goddard</title>
        <meta name="description" content="Frontend developer, Designer, and Tech enthusiast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <Hero />
      <About />

    </>
  )
}
