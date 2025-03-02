import React from 'react';
import TypeIt from 'typeit-react';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';

export default function ProjectDetails() {

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
                        <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; Check out my recent work experience and design prototypes.</p>
                        <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; To view some source code click <a href="https://github.com/bdgcypher" target="_blank" className="underline font-medium hover:text-primary  transition duration-300 ease-in-out">here.</a></p>
                    </TypeIt>
                </div>
                <div className="flex flex-col lg:hidden h-20 mb-20 lg:mb-10">
                    <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}>
                        <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; Check out my recent work experience</p>
                        <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; and design prototypes.</p>
                        <br/>
                        <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; To view some source code click
                            <a href="https://github.com/bdgcypher" target="_blank" className="ml-2 underline font-medium hover:text-primary  transition duration-300 ease-in-out">here.</a>
                        </p>
                    </TypeIt>
                </div>
                <div>
                    <ProjectLeft
                        title="Southern Utah University"
                        shortDescription="Empowering students for growth and success."
                        siteLink="https://www.suu.edu/"
                        sourceCodeLink="#"
                        designLink={null}
                        img1="suu.webp"
                        img2="suu2.webp"
                        img3="suu3.webp"
                        imgAlt1="Southern Utah University website homepage"
                        imgAlt2="Section of an SUU webpage with images and text"
                        imgAlt3="Section of an SUU webpage with with icons and navigation links"
                        header="Quality, Accessibility, Usability"
                        longDescription="With 8000+ pages, documents, and various integrations, working for SUU has kept me busy! As a Web Developer at a university dedicated to student success 
                        and quality information, I design and prototype web components and pages, manage the rollout of new features, bug fixes, and updates to the JavaScript and SCSS codebase. 
                        I ensure seamless integration between the HTML/CSS frontend and Cascade CMS, with a strong focus on SEO, Quality Assurance, and WCAG Web Accessibility compliance. 
                        Collaborating closely with various departments across campus through the Jira ticketing system, I address content needs and develop new pages and components. My accomplishments 
                        include building new pages by gathering requirements, creating mockups, iterating, and deploying. I am also highly involved in revamping outdated components and pages to 
                        enhance UI/UX design, promote acessibility and usability, and ensure a quality experience for all users. I am proud to be part of an organization that is centered around helping 
                        their students learn, grow, and succeed in their future careers."
                        skillsArray={["JavaScript", "HTML", "CSS", "WCAG", "Jira"]}
                    />
                </div>
                <div>
                    <ProjectRight
                        title="Branch Dashboard Prototype"
                        shortDescription="Creating a platform for easy Machine Learning integration for every enterprise."
                        siteLink="https://branch-dashboard-prototype.netlify.app/"
                        sourceCodeLink="https://github.com/with-branch/dashboard-prototype/"
                        designLink="https://www.figma.com/design/mla9ykXDcYsNiSLjgSBhF9/Labeler-Mock-Up?node-id=0-1&t=xEv6QOUqs1vLHuqC-1"
                        img1="branch1.webp"
                        img2="branch2.webp"
                        img3="branch3.webp"
                        imgAlt1="Branch homepage"
                        imgAlt2="A User Interface displaying Machine Learning training data"
                        imgAlt3="A data dashboard showing graphs and charts"
                        header="Idea &#8594; design &#8594; code"
                        longDescription="Branch is an up and coming start-up focused on bringing machine learning to the masses. 
                            Although currently in the beta phase, they hope to launch soon. For the last year and a half I worked as a frontend UI/UX designer and react developer for Branch. 
                            From brainstorming product ideas and sketching potential designs to full page prototypes and responsive react components.
                            I created page layouts and component designs in figma, collaborating with the founders and other team members to create a functional, fully responsive and eye-pleasing application.
                            I used technologies such as Next.js and Graphql to implement fast and responsive pages and styled them with Tailwind. 
                            All and all this work pushed me to grow and helped me get my feet firmly planted in the world of tech! This project was initially developed as a prototype for Branch's 
                            Data monitoring dashboard. I also worked on a dataset labeler for sorting and labeling datasets meant to train our machine learning models. The figma design is linked above."
                        skillsArray={["JavaScript", "HTML", "CSS", "Figma", "React", "Tailwind", "Nextjs", "TypeScript"]}
                    />
                </div>
                <div>
                    <ProjectLeft
                        title="TiP"
                        shortDescription="Providing Citizens and Elected Officials with a way to communicate on local policies and governance."
                        siteLink="/tip"
                        sourceCodeLink="https://github.com/bdgcypher/TiP-web"
                        designLink={null}
                        img1="tip.webp"
                        img2=""
                        img3=""
                        imgAlt1="TiP homepage with text and an image of a hand holding a microphone"
                        imgAlt2=""
                        imgAlt3=""
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
                        siteLink="https://benjamingoddard.netlify.app/xplore"
                        sourceCodeLink="https://github.com/bdgcypher/xplore"
                        designLink="https://www.figma.com/design/pkXDVmv33Z6iKM43rF0cqT/Xplore?node-id=0-1&t=PzNa87UzdqlskWxi-1"
                        img1="xplore.webp"
                        img2="xplore2.webp"
                        img3="xplore3.webp"
                        imgAlt1="Xplore homepage with mountains in the background"
                        imgAlt2="Travel website page with images of pyramids and treehouses"
                        imgAlt3="Webpage with content cards and an image of a woman looking at a map"
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
                        siteLink="https://axis-chat.netlify.app"
                        sourceCodeLink="https://github.com/bdgcypher/Axis"
                        designLink={null}
                        img1="axis.webp"
                        img2="axis2.webp"
                        img3="axis3.webp"
                        imgAlt1="Illustrations of people sitting inside of chat bubbles"
                        imgAlt2="User interface showing chat channels and options"
                        imgAlt3="Chat interface with messages and images"
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
                        siteLink="https://shop-indigo.netlify.app/"
                        sourceCodeLink="https://github.com/bdgcypher/indigo"
                        designLink="https://www.figma.com/design/2UlObTHpRVSisoQklbAzqJ/Indigo-%26-Shallow-Roots?node-id=0-1&t=ud7VK7IBDRgItZbH-1"
                        img1="indigo.webp"
                        img2="indigo2.webp"
                        img3=""
                        imgAlt1="Ecommerce website with images of clothing models"
                        imgAlt2="Merchandise page showcasine products such as bottles, desk accessories, and clothing"
                        imgAlt3=""
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
                        siteLink="https://ben-portfolio-v1.netlify.app/"
                        sourceCodeLink="https://github.com/bdgcypher/portfolio-v1"
                        designLink={null}
                        img1="bg.webp"
                        img2="bg3.webp"
                        img3="bg2.webp"
                        imgAlt1="Website homepage with magenta data points floating in the background"
                        imgAlt2="Projects page with illustrations of a laptop and a smartphone"
                        imgAlt3="Webpapage with images of different developer projects"
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
                        siteLink="https://traverse-web.netlify.app/"
                        sourceCodeLink="https://github.com/bdgcypher/traverse-web"
                        designLink={null}
                        img1="traverse.webp"
                        img2="traverse2.webp"
                        img3=""
                        imgAlt1="Travel website homepage with a starry sky and mountains in the background"
                        imgAlt2="A user interface showcasing different vacation trips and locations"
                        imgAlt3=""
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