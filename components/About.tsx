import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function About() {


    return (
        <div id="about" className="h-screen pt-10 md:pt-40 bg-white dark:bg-black text-black dark:text-white">
            <div className="px-4 lg:px-20">
                <div className="flex flex-col md:flex-row justify-center">
                    <Tilt>
                        <div className="flex flex-row md:hidden mb-16 justify-center">
                            <img src="/svg-1.svg" className="w-2/3" />
                        </div>
                    </Tilt>

                    <Tilt>
                        <div className="hidden md:flex justify-center">
                            <img src="/svg-1.svg" className="w-2/3" />
                        </div>
                    </Tilt>


                    <div className="flex flex-col w-full max-w-xl">
                        <p className="text-gray-400 text-md md:text-xl">&#60;h1&#62;</p>
                        <h1 className="ml-10 text-black dark:text-white font-bold text-3xl md:text-5xl">Creative, Excited, Hardworking</h1>
                        <p className="text-gray-400 text-md md:text-xl">&#60;/h1&#62;</p>
                        <p className="mt-2 text-gray-400 text-md md:text-xl">&#60;p&#62;</p>
                        <p className="ml-10 text-black dark:text-white text-lg md:text-2xl">
                            I am a <b>fun-loving Frontend developer, Designer,</b> and <b>Tech enthusiast</b> rapidly growing in web development skills.
                            I bring to the table over <b>3 years of experience</b> with languages such as Javascript, Typescript, Python, html and css. I also am familiar with frameworks and styling libraries such as <b>React.js, Nextjs, and Tailwindcss</b>.
                            I create page layouts and prototype websites in <b>Figma</b>.
                            I love technology and I am creative and innovative.
                        </p>
                        <p className="text-gray-400 text-md md:text-xl">&#60;/p&#62;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}