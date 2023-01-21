import React from 'react';
import Tilt from 'react-parallax-tilt';
import TypeIt from "typeit-react";

export default function About() {


    return (
        <div id="about" className="h-full lg:h-screen pt-10 md:pt-40 pb-10 -mb-0 3xl:-mb-40 bg-white dark:bg-black text-black dark:text-white">
            <div className="px-4 md:px-20">
                <div className="flex flex-col lg:flex-row justify-center">
                    <Tilt>
                        <div className="flex flex-row lg:hidden mb-16 justify-center">
                            <img src="/svg-1.svg" className="w-2/3" />
                        </div>
                    </Tilt>

                    <Tilt>
                        <div className="hidden lg:flex justify-center">
                            <img src="/svg-1.svg" className="w-2/3" />
                        </div>
                    </Tilt>


                    <div className="flex flex-col w-full max-w-xl">
                        <TypeIt options={{speed: 20, waitUntilVisible: true}}>
                            <p className="text-gray-400 text-md md:text-xl">&#60;h1&#62;</p>
                            <h1 className="ml-10 text-black dark:text-white font-semibold text-3xl md:text-4xl lg:text-5xl">Creative, Excited, Hardworking</h1>
                            <p className="text-gray-400 text-md md:text-xl">&#60;/h1&#62;</p>
                            <p className="mt-2 text-gray-400 text-md md:text-xl">&#60;p&#62;</p>
                            <p className="ml-10 text-gray-700 dark:text-gray-300 text-lg md:text-2xl">
                                I am a <b>fun-loving Frontend developer, Designer,</b> and <b>Tech enthusiast</b> rapidly growing in web development skills.
                                I am obsessed with creating <b>beautiful and fully responsive web applications</b>.
                                I bring to the table over <b>3 years of experience</b> with languages such as Javascript, Typescript, Python, html and css. I am also familiar with frameworks and styling libraries such as <b>React.js, Nextjs, and Tailwindcss</b>.
                                I create page layouts and prototype websites in <b>Figma</b>.
                                I love technology and I am creative and innovative. In my free time I love to play ultimate frisbee, do parkour/freerunning,
                                and listen to audiobooks.
                            </p>
                            <p className="text-gray-400 text-md md:text-xl">&#60;/p&#62;</p>
                        </TypeIt>
                    </div>
                </div>
            </div>
        </div>
    )
}