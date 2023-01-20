import React, { useState } from "react";
import { FaHandshake } from "react-icons/fa";

export default function GetInTouch() {

    return (
        <>

            <div className="bg-white dark:bg-black pb-24">
                <div className="relative sm:py-16">
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="relative -mt-40 rounded-2xl px-6 py-10 bg-tertiary dark:bg-onyx overflow-hidden shadow-xl sm:px-12 sm:pt-20">
                            <div className=" flex flex-col lg:flex-row sm:text-center">
                                <h2 className="text-3xl font-extrabold text-black dark:text-white tracking-tight sm:text-4xl">
                                    Looking to start a project?
                                </h2>
                                <p className="mt-4 mb-10 lg:mt-0 w-full lg:w-1/4 mx-auto max-w-2xl text-xl text-gray-400">
                                    Schedule a time to meet. I can't wait to hear your idea!
                                </p>
                                <a href="/contact" className="h-10 ml-0 px-8 pt-1 bg-primary hover:bg-secondary transform ease-in-out duration-300 hover:-translate-y-1 text-white text-xl rounded-full shadow-xl">
                                    Let's do this!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}