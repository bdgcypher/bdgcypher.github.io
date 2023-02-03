import React from 'react';
import TypeIt from 'typeit-react';

export default function Projects() {

    const startAnimation = () => {
        const elementsToAnimate = document.querySelectorAll(".discover")
        elementsToAnimate.forEach((element) => element.classList.add("animated"));
        console.log(elementsToAnimate)
    }

    return (
        <div id="home" className="bg-tertiary dark:bg-raisin ">
            <div className="px-4 pt-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                <div className="hidden lg:flex flex-col h-20 mb-10">
                    <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}
                    >
                        <p className="text-gray-400 text-md md:text-xl">&#47;&#47; Check out my recent work experience and design prototypes.</p>
                    </TypeIt>
                </div>
                <div className="flex flex-col lg:hidden h-20 mb-10">
                    <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}>
                        <p className="text-gray-400 text-md md:text-xl">&#47;&#47; Check out my recent work experience</p>
                        <p className="text-gray-400 text-md md:text-xl">&#47;&#47; and design prototypes.</p>
                    </TypeIt>
                </div>
                <div className="to-animate from-right grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
                    <div>
                        <a target="_blank" href="https://withbranch.com/" aria-label="View Item" className="h-auto">
                            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-lg dark:shadow-gray-900">
                                <img
                                    className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                    src="/branch.png"
                                    alt=""
                                />
                                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                    <p className="mb-4 text-3xl font-bold text-gray-100">Branch</p>
                                    <p className="text-xl tracking-wide text-gray-300">
                                        Creating a platform for easy Machine Learning integration for every enterprise.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <p className="mt-6 mb-2 text-xl text-black dark:text-white font-bold leading-none sm:text-2xl">
                            Branch
                        </p>
                        <p className="text-gray-700 dark:text-gray-400">
                            Freelance Work
                        </p>
                    </div>
                    <div>
                        <a target="_blank" href="https://tip-web.herokuapp.com/" aria-label="View Item" className="h-auto">
                            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-lg dark:shadow-gray-900">
                                <img
                                    className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                    src="/tip.jpg"
                                    alt=""
                                />
                                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                    <p className="mb-4 text-3xl font-bold text-gray-100">TiP</p>
                                    <p className="text-xl tracking-wide text-gray-300">
                                        Providing Citizens and Elected Officials with a way to communicate on local policies and governance.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <p className="mt-6 mb-2 text-xl text-black dark:text-white font-bold leading-none sm:text-2xl">
                            TiP
                        </p>
                        <p className="text-gray-700 dark:text-gray-400">
                            Paid Internship
                        </p>
                    </div>
                    <div>
                        <a target="_blank" href="https://benjamingoddard.netlify.app/xplore" aria-label="View Item" className="h-auto">
                            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-lg dark:shadow-gray-900">
                                <img
                                    className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                    src="/xplore.jpg"
                                    alt=""
                                />
                                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                    <p className="mb-4 text-3xl font-bold text-gray-100">Xplore</p>
                                    <p className="text-xl tracking-wide text-gray-300">
                                        My own spin on a Full fledged travel agency frontend.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <p className="mt-6 mb-2 text-xl text-black dark:text-white font-bold leading-none sm:text-2xl">
                            Xplore
                        </p>
                        <p className="text-gray-700 dark:text-gray-400">
                            Website design
                        </p>
                    </div>
                    <div>
                        <a target="_blank" href="https://axis-chat.netlify.app/" aria-label="View Item" className="h-auto">
                            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-lg dark:shadow-gray-900">
                                <img
                                    className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                    src="/axis.png"
                                    alt=""
                                />
                                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                    <p className="mb-4 text-3xl font-bold text-gray-100">Axis</p>
                                    <p className="text-xl tracking-wide text-gray-300">
                                        A Discord-esque chat platform with authentication, channels, direct messages and threads. Built using the StreamChat api.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <p className="mt-6 mb-2 text-xl text-black dark:text-white font-bold leading-none sm:text-2xl">
                            Axis
                        </p>
                        <p className="text-gray-700 dark:text-gray-400">
                            Personal project
                        </p>
                    </div>
                    <div>
                        <a target="_blank" href="https://benjamingoddard.me/indigo/" aria-label="View Item" className="h-auto">
                            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-lg dark:shadow-gray-900">
                                <img
                                    className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                    src="/indigo.jpg"
                                    alt=""
                                />
                                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                    <p className="mb-4 text-3xl font-bold text-gray-100">Indigo</p>
                                    <p className="text-xl tracking-wide text-gray-300">
                                        An ecommerce style website to practice Tailwindcss and page layout design.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <p className="mt-6 mb-2 text-xl text-black dark:text-white font-bold leading-none sm:text-2xl">
                            indigo
                        </p>
                        <p className="text-gray-700 dark:text-gray-400">
                            Website design
                        </p>
                    </div>
                    <div>
                        <a target="_blank" href="https://benjamingoddard.me/" aria-label="View Item" className="h-auto">
                            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-lg dark:shadow-gray-900">
                                <img
                                    className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                    src="/bg.jpg"
                                    alt=""
                                />
                                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                    <p className="mb-4 text-3xl font-bold text-gray-100">Portfolio v1</p>
                                    <p className="text-xl tracking-wide text-gray-300">
                                        My first attempt at creating a portfolio website before the current redesign.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <p className="mt-6 mb-2 text-xl text-black dark:text-white font-bold leading-none sm:text-2xl">
                            Portfolio v1
                        </p>
                        <p className="text-gray-700 dark:text-gray-400">
                            Personal website iteration
                        </p>
                    </div>
                </div>
            </div>

            {/* <div id="discoverSection" className="page-section px-4 pb-16 mx-auto -mt-0 lg:-mt-32 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:pb-20">
                <div className="flex flex-col mb-0 justify-left lg:justify-center lg:flex-row md:mb-8">
                    <h2 className="to-animate from-bottom mb-5 font-semibold text-3xl md:text-4xl lg:text-5xl text-black dark:text-white sm:leading-none md:mb-6 group">
                        <span className="inline-block text-center mx-20 md:mx-10">
                            Talk is cheap, let's see some results
                        </span>
                    </h2>
                </div>
                <div className="hidden lg:flex flex-col mb-10">
                    <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true, afterComplete: () => startAnimation()}}
                    >
                        <p className="strikethrough text-gray-400 text-md md:text-xl" >&#47;&#47; TODO:</p>
                        <br/>
                        <p className="strikethrough text-gray-400 text-md md:text-xl">&#47;&#47; Code a cool grid with some recent projects here &#8595;&#8595;&#8595;</p>
                    </TypeIt>
                </div>
                <div className="flex flex-col lg:hidden mb-10">
                    <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true, afterComplete: () => startAnimation()}}>
                        <p className="strikethrough text-gray-400 text-md md:text-xl">&#47;&#47; TODO:</p>
                        <br/>
                        <p className="strikethrough text-gray-400 text-md md:text-xl">&#47;&#47; Code a cool grid with</p>
                        <br/>
                        <p className="strikethrough text-gray-400 text-md md:text-xl">&#47;&#47; some recent projects here &#8595;&#8595;&#8595;</p>
                    </TypeIt>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    <a target="_blank" href="https://withbranch.com/" aria-label="View Item" className="discover from-bottom first h-auto">
                        <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-2xl dark:shadow-gray-900">
                            <img
                                className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                src="/branch.png"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-3xl font-bold text-gray-100">Branch</p>
                                <p className="text-xl tracking-wide text-gray-300">
                                    Creating a platform for easy Machine Learning integration for every enterprise.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a target="_blank" href="https://tip-web.herokuapp.com/" aria-label="View Item" className="discover from-bottom second h-auto">
                        <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-2xl dark:shadow-gray-900">
                            <img
                                className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                src="/tip.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-3xl font-bold text-gray-100">TiP</p>
                                <p className="text-xl tracking-wide text-gray-300">
                                    Providing Citizens and Elected Officials with a way to communicate on local policies and governance.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a target="_blank" href="https://benjamingoddard.netlify.app/xplore" aria-label="View Item" className="discover from-bottom third h-auto">
                        <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-2xl dark:shadow-gray-900">
                            <img
                                className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                src="/xplore.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-3xl font-bold text-gray-100">Xplore</p>
                                <p className="text-xl tracking-wide text-gray-300">
                                    My own spin on a Full fledged travel agency frontend.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="text-center mt-8">
                    <a
                        href="/projects"
                        aria-label=""
                        className="discover from-bottom third inline-flex items-center font-semibold transition-colors duration-200 text-xl text-primary hover:text-secondary"
                    >
                        See more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </a>
                </div>
            </div> */}
        </div >
    )
}