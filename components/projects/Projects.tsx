import React from 'react';
import TypeIt from 'typeit-react';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';

export default function Projects() {

    const startAnimation = () => {
        const elementsToAnimate = document.querySelectorAll(".discover")
        elementsToAnimate.forEach((element) => element.classList.add("animated"));
        console.log(elementsToAnimate)
    }

    return (
        <div id="home" className="bg-tertiary dark:bg-raisin ">
            <div className="px-4 pt-10 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-32">
                <div className="hidden lg:flex flex-col h-20 mb-10">
                    <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}
                    >
                        <p className="text-gray-400 text-md md:text-xl">&#47;&#47; Check out my recent work experience and design prototypes.</p>
                        <p className="text-gray-400 text-md md:text-xl">&#47;&#47; To view some source code click <a href="https://github.com/bdgcypher" target="_blank" className="underline font-medium hover:text-primary transition duration-300 ease-in-out">here.</a></p>
                    </TypeIt>
                </div>
                <div className="flex flex-col lg:hidden h-20 mb-20 lg:mb-10">
                    <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}>
                        <p className="text-gray-400 text-md md:text-xl">&#47;&#47; Check out my recent work experience</p>
                        <p className="text-gray-400 text-md md:text-xl">&#47;&#47; and design prototypes.</p>
                        <br/>
                        <p className="text-gray-400 text-md md:text-xl">&#47;&#47; To view some source code click
                            <a href="https://github.com/bdgcypher" target="_blank" className="ml-2 underline font-medium hover:text-primary transition duration-300 ease-in-out">here.</a>
                        </p>
                    </TypeIt>
                </div>
                <div>
                    <ProjectRight
                        title="Branch"
                        shortDescription="Creating a platform for easy Machine Learning integration for every enterprise."
                        href="https://withbranch.com/"
                        img1="branch.png"
                        img2="branch2.png"
                        img3="branch3.png"
                        header="Idea &#8594; design &#8594; code"
                        longDescription="Branch is an up and coming start-up focused on bringing machine learning to the masses. 
                            Although currently in the beta phase, they hope to launch soon.
                            For the last year and a half I worked as a frontend UI/UX designer and react developer for Branch. 
                            From brainstorming product ideas and sketching potential designs to full page prototypes and responsive react components.
                            I created page layouts and component designs in figma, collaborating with the founders and other team members to create a functional, fully responsive and eye-pleasing application.
                            I used technologies such as Next.js and Graphql to implement fast and responsive pages and styled them with Tailwind. 
                            All and all this work pushed me to grow and helped me get my feet firmly planted in the world of tech!"
                        skillsArray={["JavaScript", "HTML", "CSS", "Figma", "React", "Tailwind", "Nextjs", "TypeScript"]}
                    />
                </div>
                <div>
                    <ProjectLeft
                        title="TiP"
                        shortDescription="Providing Citizens and Elected Officials with a way to communicate on local policies and governance."
                        href="/tip"
                        img1="tip.jpg"
                        img2=""
                        img3=""
                        header="Breaking into the tech world"
                        longDescription="I spent the majority of 2021 as a paid intern at TiP (Transparency in Politics) building their web app with Python, Django, HTML5, and CSS.
                            This was my first professional position in the developer world and helped jumpstart my love of all things tech!
                            My work included all frontend design and integration, animations, and transition effects. Although I don't claim to be a full-stack engineer, 
                            I was also fairly involved in the backend. From processing data and writing user-handling logic to database integration with SQLite. 
                            Sadly I had to stop work with TiP when the componay lost funding."
                        skillsArray={["JavaScript", "HTML", "CSS", "Python", "Django"]}
                    />
                </div>
                <div>
                    <ProjectRight
                        title="Xplore"
                        shortDescription="My own spin on a Full fledged travel agency frontend."
                        href="https://benjamingoddard.netlify.app/xplore"
                        img1="xplore.jpg"
                        img2="xplore2.png"
                        img3="xplore3.png"
                        header="Looking professional"
                        longDescription="Xplore is an impressive travel website frontend comprised of 11 pages, loads of animations and effects, 
                        beautiful design elements and color scheming, and lots of work to make this 'practice' project as close to industry standard as you can get.
                        This project forced me to expand my abilities as a designer and developer and push for excellence."
                        skillsArray={["JavaScript", "HTML", "CSS", "Figma", "React", "Tailwind"]}
                    />
                </div>
                <div>
                    <ProjectLeft
                        title="Axis"
                        shortDescription="A Discord-esque chat platform for me and my friends."
                        href="https://axis-chat.netlify.app"
                        img1="axis.png"
                        img2="axis2.png"
                        img3="axis3.png"
                        header="Login with username and password: 'guest'"
                        longDescription="A personal project I have been working on to improve my  knowledge of React Hooks and connect with my friends! 
                        A full fledged web application including authentication, channels, direct messages and threads. Fully capable of sending images, videos, gifs and emojis.
                        This is admittedly not the most beautiful design scheme, but the focus was on functionality not front-facing design. Built using the getstream api, react useContext, localStorage, and much more."
                        skillsArray={["JavaScript", "HTML", "CSS", "React", "Tailwind"]}
                    />
                </div>
                <div>
                    <ProjectRight
                        title="indigo"
                        shortDescription="An ecommerce style website to practice Tailwindcss and page layout design."
                        href="https://shop-indigo.netlify.app/"
                        img1="indigo.jpg"
                        img2="indigo2.png"
                        img3=""
                        header="Would you buy this design on Amazon?"
                        longDescription="Indigo is an ecommerce based frontend web application created to familiarize myself with and 
                        demonstrate use of TailwindUI template elements and is built on the React.js framework. 
                        I was introduced to tailwind by a friend and wanted to check it out. 
                        I spent a few hours making this site and I loved it! For anyone who doesn't use tailwind in their projects, you should!"
                        skillsArray={["JavaScript", "HTML", "CSS", "Figma", "React", "Tailwind"]}
                    />
                </div>
                <div>
                    <ProjectLeft
                        title="Portfolio v1"
                        shortDescription="My first iteration at a personal website before the current redesign."
                        href="https://ben-portfolio-v1.netlify.app/"
                        img1="bg.jpg"
                        img2="bg3.png"
                        img3="bg2.png"
                        header="Let me introduce myself"
                        longDescription="This webpage was my initial portfolio. It domonstrates knowledge in React.js, 
                        web-hooks, HTML, CSS, Scroll Effects, multiple page integration, and decent Web-Design. 
                        Obviously the look and feel of this site didn't feel quite right because I redesigned it to what you see now! 
                        Do you think I improved on anything?"
                        skillsArray={["JavaScript", "HTML", "CSS", "React"]}
                    />
                </div>
                <div>
                    <ProjectRight
                        title="TRAVRSE"
                        shortDescription="My first website design!"
                        href="https://traverse-web.netlify.app/"
                        img1="traverse.jpg"
                        img2="traverse2.png"
                        img3=""
                        header="Get the ball rolling"
                        longDescription="Traverse is a travel-guide type website frontend with clean-cut cards, 
                        fantastic footers, and creative content. Built with React.js, Traverse is a simple, yet elegant beginner javascript Web Project.
                        This was my first ever React project. Watching youtube tutorials, scrolling stack overflow, and learning how everything worked. 
                        This was my start to a promising career as a frontend developer."
                        skillsArray={["JavaScript", "HTML", "CSS", "React"]}
                    />
                </div>
            </div>
        </div >
    )
}