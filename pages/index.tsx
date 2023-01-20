import Head from 'next/head'
import { Inter } from '@next/font/google'
import Hero from '../components/index/Hero'
import Navbar from '../components/Navbar'
import About from '../components/index/About'
import Discover from '../components/index/Discover'
import Contact from '../components/index/Contact'
import GetInTouch from '../components/index/GetInTouch'
import { Testimonials } from '../components/index/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Benjamin Goddard</title>
        <meta name="description" content="Frontend developer, Designer, and Tech enthusiast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Discover />
      <Contact />
      <Testimonials />
      {/* <GetInTouch /> */}

    </>
  )
}
