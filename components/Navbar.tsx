import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { SlMenu } from 'react-icons/sl'
import { TfiClose } from 'react-icons/tfi'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function Navbar() {

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

    const switchTheme = () => {
        if (darkMode === true) {
            localStorage.setItem('color-theme', 'light');
            document.documentElement.classList.remove('dark');
        } else {
            localStorage.setItem('color-theme', 'dark');
            document.documentElement.classList.add('dark');
        }
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        setSystemTheme();
    }, []);


    return (
        <>
            <Popover as="header" className="inset-x-1 z-100">
                <div id="home" className="bg-tertiary dark:bg-raisin pt-4">
                    <h1 className="absolute top-6 left-10 text-primary text-3xl md:text-4xl">
                        BG
                    </h1>
                    <nav
                        className="relative ml-10 mx-auto flex items-center justify-around px-6 lg:px-2"
                        aria-label="Global"
                    >
                        <div className="flex flex-row items-center">
                            <div className="flex items-center w-screen md:w-auto">
                                <div className=" justify-self-end hidden lg:flex flex-row gap-16 px-20 py-3 bg-white dark:bg-black text-black dark:text-white text-lg font-bold rounded-full shadow-xl">
                                    <a href="#home" className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300">Home</a>
                                    <a href="#about" className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300">About</a>
                                    <a href="#discover" className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300">Discover</a>
                                    <a href="#services" className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300">Services</a>
                                    <a href="#contact" className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300">Contact</a>
                                </div>
                                <div className="absolute top-1 right-10 -mr-2 flex items-center md:hidden">
                                    <Popover.Button className="z-100 bg-tertiary dark:bg-raisin rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-secondary transform duration-300 rotate-0 hover:rotate-180">
                                        <span className="sr-only">Open main menu</span>
                                        <SlMenu className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div onClick={() => { switchTheme() }} className="absolute top-6 right-10 hidden md:block text-black dark:text-white text-2xl md:text-3xl hover:text-primary dark:hover:text-primary hover:-translate-y-1 ease-in-out duration-300">
                        {
                            darkMode === true ? (
                                <FiMoon />
                            ) : (
                                <FiSun />
                            )
                        }
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute z-20 top-0 inset-x-0 w-screen p-4 transition transform origin-top md:hidden">
                        <div className="rounded-lg shadow-md bg-snow dark:bg-onyx overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div onClick={() => { switchTheme() }} className="absolute top-8 left-10 block md:hidden text-black dark:text-white text-3xl hover:text-primary hover:-translate-y-1 ease-in-out duration-300">
                                    {
                                        darkMode === true ? (
                                            <FiMoon />
                                        ) : (
                                            <FiSun />
                                        )
                                    }
                                </div>
                                <div className="absolute top-6 right-8 -mr-2 outline-none">
                                    <Popover.Button className="bg-snow dark:bg-onyx rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-secondary transform duration-300 rotate-0 hover:-rotate-180 outline-none">
                                        <span className="sr-only">Close menu</span>
                                        <TfiClose className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                                <div className="flex lg:hidden flex-col gap-16 mx-auto pt-10 pl-2 text-black dark:text-white text-lg font-bold">
                                    <a className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300">Home</a>
                                    <a className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300">About</a>
                                    <a className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300">Discover</a>
                                    <a className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300">Services</a>
                                </div>
                            </div>
                            <div className="pt-5 pb-6 justify-center items-center">
                                <div className="mt-6 px-5">
                                    <a
                                        href="#GetInTouch"
                                        className="block text-center w-full py-3 px-4 rounded-md shadow bg-primary text-white font-medium hover:secondary"
                                    >
                                        Get in touch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    )
}