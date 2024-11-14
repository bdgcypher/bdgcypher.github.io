import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Hero from '../components/index/Hero'
import Navbar from '../components/Navbar'
import About from '../components/index/About'
import Projects from '../components/index/Projects'
import Testimonials from '../components/index/Testimonials'
import AnimatedMe from '../components/index/AnimatedMe'
import Footer from '../components/Footer'
import { useMousePosition } from '../components/useMousePosition'
import animateSvg from '../components/index/animateSvg'
import GetInTouch from '../components/index/GetInTouch'
import Contact from '../components/index/Contact'

export default function Home() {

  const mousePosition = useMousePosition()

  const observePage = () => {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        } else {
          // entry.target.classList.remove('animated')
          null
        }
      })
    })

    const elementsToAnimate = document.querySelectorAll('.to-animate')
    console.log(elementsToAnimate)
    elementsToAnimate.forEach((element) => animationObserver.observe(element))
  }

  useEffect(() => {
    observePage();
  }, []);

  return (
    <div onLoadStart={() => { observePage() }}>
      <Head>
        <title>Benjamin Goddard | Frontend Designer and Developer</title>
        <meta name="description" content="Frontend developer, Designer, and Tech enthusiast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div onMouseMove={() => { animateSvg(mousePosition) }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <GetInTouch />
        <Testimonials />
        <AnimatedMe />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
