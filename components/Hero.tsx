import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function Hero() {


    return (
        <div className="h-full pt-10 md:pt-40 bg-tertiary dark:bg-raisin text-black dark:text-white">
            <div className="px-4 md:px-20">
                <div className="flex flex-col md:flex-row justify-center">
                    <Tilt>
                        <div className="flex flex-row md:hidden mb-16 justify-center">
                            <img src="/manOnTable.svg" className="w-3/4" />
                        </div>
                    </Tilt>

                    <div className="flex flex-col max-w-xl">
                        <p className="text-gray-400 text-md md:text-xl">&#60;h1&#62;</p>
                        <h1 className="ml-10 text-black dark:text-white font-bold text-3xl md:text-5xl">Hello, World! I'm Ben</h1>
                        <p className="text-gray-400 text-md md:text-xl">&#60;/h1&#62;</p>
                        <p className="mt-2 text-gray-400 text-md md:text-xl">&#60;p&#62;</p>
                        <p className="ml-10 text-black dark:text-white text-lg md:text-2xl">
                           I {}
                        </p>
                        <p className="text-gray-400 text-md md:text-xl">&#60;/p&#62;</p>
                    </div>
                    <Tilt>
                        <div className="hidden md:flex justify-center">
                            <img src="/manOnTable.svg" className="w-2/3" />
                        </div>
                    </Tilt>

                </div>
            </div>
            <svg className="-mt-0 md:-mt-10 lg:-mt20 block dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FCFCFC" fillOpacity="1" d="M0,224L360,64L720,288L1080,160L1440,256L1440,320L1080,320L720,320L360,320L0,320Z"></path>
            </svg>
            <svg className="-mt-0 md:-mt-10 lg:-mt20 hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#1E1F1F" fillOpacity="1" d="M0,224L360,64L720,288L1080,160L1440,256L1440,320L1080,320L720,320L360,320L0,320Z"></path>
            </svg>
            <div className=" h-0 bg-white"></div>
        </div>
    )
}