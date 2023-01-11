import React from 'react';

export default function About() {


    return (
        <div id="about" className="h-screen pt-10 md:pt-40 bg-white dark:bg-raisin text-black dark:text-white">
            <div className="px-4 md:px-20">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="flex flex-row md:hidden mb-16 justify-center">
                    <img src="/svg-1.svg" className="w-2/3" />
                </div>

                <div className="hidden md:flex justify-center">
                    <img src="/svg-1.svg" className="w-2/3" />
                </div>

                <div className="flex flex-col max-w-xl">
                    <p className="text-gray-400 text-md md:text-xl">&#60;h1&#62;</p>
                    <h1 className="ml-10 text-black dark:text-white font-bold text-3xl md:text-5xl">Creative, Excited, Hardworking</h1>
                    <p className="text-gray-400 text-md md:text-xl">&#60;/h1&#62;</p>
                    <p className="mt-2 text-gray-400 text-md md:text-xl">&#60;p&#62;</p>
                    <p className="ml-10 text-black dark:text-white text-lg md:text-2xl">
                    I am a Designer and Programmer rapidly growing in web development skills. 
                    I have 3 years of experience with languages such as Javascript, Typescript, Python, html and css. I also am familiar with frameworks and styling libraries such as React.js, Nextjs, and Tailwindcss.  
                    I love technology and I am creative and innovative.
                    </p>
                    <p className="text-gray-400 text-md md:text-xl">&#60;/p&#62;</p>
                </div>
            </div>
            </div>
            <svg className="-mt-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FCFCFC" fillOpacity="1" d="M0,224L360,64L720,288L1080,160L1440,256L1440,320L1080,320L720,320L360,320L0,320Z"></path>
            </svg>
            <div className=" h-0 bg-white"></div>
        </div>
    )
}