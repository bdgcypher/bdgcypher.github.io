import React from 'react';
import Tilt from 'react-parallax-tilt';
import { BiArrowBack } from "react-icons/bi";
import { SiJavascript, SiTypescript } from 'react-icons/si'

export default function ProjectsHero() {
  return (
    <div className="pt-4 pl-4 bg-white dark:bg-black">
      <a href="/" className="text-primary hover:text-secondary text-4xl transition ease-in-out duration-300">
        <BiArrowBack />
      </a>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="to-animate from-left max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-black dark:text-white md:text-6xl sm:leading-none">
                Projects
              </h2>
              <p className="text-lg text-gray-800 dark:text-gray-300 md:text-xl">
                Check out my recent work experience and design case studies.
              </p>
            </div>
            <div className="to-animate from-bottom mb-8">
              <p className="mb-4 text-black dark:text-white text-sm font-bold tracking-widest uppercase">
                Skills
              </p>
              <div className="grid space-y-3 sm:gap-2 grid-cols-2 lg:grid-cols-3 sm:space-y-0 text-gray-700 dark:text-gray-400">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-2">
                      <SiJavascript className="text-yellow-400" />
                    </span>
                    JavaScript
                  </li>
                  <li className="flex">
                    <span className="mr-2">
                      <SiJavascript className="text-yellow-400" />
                    </span>
                    HTML
                  </li>
                  <li className="flex">
                    <span className="mr-2">
                      <SiJavascript className="text-yellow-400" />
                    </span>
                    CSS
                  </li>
                  <li className="flex">
                    <span className="mr-2">
                      <SiJavascript className="text-yellow-400" />
                    </span>
                    Figma
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex -mt-3 md:-mt-0">
                    <span className="mr-2">
                      <SiJavascript className="text-yellow-400" />
                    </span>
                    React
                  </li>
                  <li className="flex">
                    <span className="mr-2">
                      <SiJavascript className="text-yellow-400" />
                    </span>
                    Tailwind
                  </li>
                  <li className="flex">
                    <span className="mr-2">
                      <SiJavascript className="text-yellow-400" />
                    </span>
                    Nextjs
                  </li>
                  <li className="flex">
                    <span className="mr-2">
                      <SiTypescript className="text-blue-400" />
                    </span>
                    TypeScript
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div>
            <Tilt>
              <div className="to-animate scale-up hidden lg:flex justify-center">
                <img src="/svg-7.svg" className="w-2/3" />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};