import React, { useState } from 'react'
import Head from 'next/head'
import Hero from '../components/index/Hero'
import Navbar from '../components/Navbar'
import About from '../components/index/About'
import Discover from '../components/index/Discover'
import Contact from '../components/index/Contact'
import GetInTouch from '../components/index/GetInTouch'
import Testimonials from '../components/index/Testimonials'
import AnimatedMe from '../components/index/AnimatedMe'
import Footer from '../components/Footer'
import { useMousePosition } from '../components/useMousePosition'
import animateSvg from '../components/index/animateSvg'

export default function Home() {

  const mousePosition = useMousePosition()

  const observePage = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        } else {
          entry.target.classList.remove('animated')
        }
      })
    })

    const elementsToAnimate = document.querySelectorAll('.to-animate')
    console.log(elementsToAnimate)
    elementsToAnimate.forEach((element) => observer.observe(element))
  }

  return (
    <div onLoad={() => {observePage()}}>
      <Head>
        <title>Benjamin Goddard</title>
        <meta name="description" content="Frontend developer, Designer, and Tech enthusiast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div onMouseMove={() => { animateSvg(mousePosition)}}>
        <Navbar />
        <Hero />
        <About />
        <Discover />
        <Contact />
        <Testimonials />
        <AnimatedMe />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  )
}
