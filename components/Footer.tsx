import React from "react";
import { HiOutlineMail } from "react-icons/hi"
import { BsFillArrowUpCircleFill, BsInstagram, BsLinkedin } from 'react-icons/bs'
import TypeIt from "typeit-react";


const scrollPageTo = (id: string) => {
    const element: any = document.getElementById(id)
    element.scrollIntoView()
}

const navigation = [
    {
        name: 'GitHub',
        href: 'https://github.com/bdgcypher',
        target: '_blank',
        icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/benjamin-goddard-31a11873/',
        target: '_blank',
        icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
            <BsLinkedin className="text-2xl" />
        ),
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/ben_jammin.pk/?hl=en',
        target: '_blank',
        icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
            <BsInstagram className="text-2xl" />
        ),
    },
    {
        name: 'Email',
        href: 'mailto:bdgcypher@gmail.com',
        icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
            <HiOutlineMail className="text-2xl" />
        ),
    },
    {
        name: 'Up',
        href: '#',
        icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
            <BsFillArrowUpCircleFill className="text-2xl" />
        ),
        onClick: () => { scrollPageTo("home") },
    },
]

export default function Footer() {


    return (
        <footer className="bg-white dark:bg-black">
            <TypeIt options={{ speed: 10, waitUntilVisible: true }}>
                <div className="h-20 text-center mx-auto w-3/4 md:w-full">
                    <p className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl">Each day is a chance to <span className="text-primary ">Level Up</span>!</p>
                    <div className="mt-2 text-gray-400 text-md md:text-xl">
                        <p>&#47;&#47; So make it count.</p>
                    </div>
                </div>
            </TypeIt>

            <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="mt-10 flex justify-center space-x-6 md:order-2">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} target={item.target} onClick={item.onClick} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="hidden md:block text-center text-lg leading-5 text-gray-600 dark:text-gray-400">
                        Benajamin Goddard &copy; {new Date().getFullYear()}. All rights reserved.
                    </p>
                    <p className="block md:hidden text-center text-lg leading-5 text-gray-600 dark:text-gray-400">
                        Benajamin Goddard &copy; {new Date().getFullYear()}. <br />All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
