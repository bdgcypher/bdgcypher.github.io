import React from 'react';
import TypeIt from 'typeit-react';
import ProjectRight from './ProjectRight';

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
                <div>
                    <ProjectRight title="Branch" shortDescription="Creating a platform for easy Machine Learning integration for every enterprise." img1="branch.png" img2="branch2.png" img3="branch3.png" header="Idea &#8594; design &#8594; code" longDescription="hello" />
                </div>
                {/* <div className="to-animate from-right grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
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
                            Frontend Design and implementation
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
                </div> */}
            </div>
        </div >
    )
}