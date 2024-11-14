import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Contact from '../components/index/Contact';
import { BiArrowBack } from 'react-icons/bi';


export default function TiP() {

    const [darkMode, setDarkMode] = useState(false)

    const setSystemTheme = () => {
        if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }

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
        setSystemTheme();
        const frame = document.getElementById('iframe');
        frame !== null ? (
            frame.addEventListener('load', function () {
                // Get the height of the content
                const height = frame.ownerDocument.body.scrollHeight;

                // Set the height of iframe
                frame.setAttribute('height', `${height}px`);
            })
        ) : (null)

    }, []);

    return (
        <div onLoad={() => { observePage() }}>
            <Head>
                <title>Benjamin Goddard | Frontend Designer and Developer</title>
                <meta name="description" content="Frontend developer, Designer, and Tech enthusiast." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <div id="home" className="pt-4 pl-4 bg-white dark:bg-black">
                    <a href="/projects" aria-label="back button to projects page" className="text-primary  hover:text-secondary text-4xl transition ease-in-out duration-300">
                        <BiArrowBack />
                    </a>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                            <div className="flex flex-col justify-center">
                                <div className="to-animate from-left max-w-xl mb-6">
                                    <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-black dark:text-white md:text-6xl sm:leading-none">
                                        TiP
                                    </h2>
                                    <p className="text-lg text-gray-800 dark:text-gray-300 md:text-xl">
                                        Due to the startup shutting down I was unable to link to TiP's website. Not wanting to have a work reference with nothing to show for it,
                                        here is a copy of the TiP homepage! To view the forked repository of the main project click <a href="https://github.com/bdgcypher/TiP-web" className="underline font-semibold">here.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-2 lg:px-8">
                        <iframe src="TiP-homepage-remake.html" id="iframe" className="h-screen w-full mx-auto mb-60 overflow-hidden rounded-md"></iframe>
                    </div>
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    )
}