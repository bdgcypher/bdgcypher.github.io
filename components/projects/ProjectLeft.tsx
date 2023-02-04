import Skills from "./Skills";

export default function ProjectLeft(
    { title, shortDescription, href, img1, img2, img3, header, longDescription, skillsArray }:
        { title: string, shortDescription: string, href: string, img1: string, img2: string, img3: string, header: string, longDescription: string, skillsArray: Array<string> }
) {


    return (
        <div className="px-4 mx-auto mb-16 lg:mb-20 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
            <div className="max-w-2xl mb-10 ml-0 lg:ml-16 text-left md:mb-12">
                <a target="_blank" href={href} >
                    <h1 className="to-animate from-left max-w-lg mb-6 font-sans text-3xl transition ease-in-out duration-300 hover:-translate-y-2 font-bold leading-none tracking-tight text-black dark:text-white hover:text-primary sm:text-4xl cursor-pointer">
                        {title}
                    </h1>
                </a>
                <p className="to-animate from-left text-lg text-gray-700 dark:text-gray-400 md:text-xl">
                    {shortDescription}
                </p>
            </div>
            <div className="grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="to-animate from-left flex flex-col">
                    <div className="pb-4 mb-4">
                        <h6 className="mb-2 font-semibold text-3xl text-black dark:text-white border-b">
                            {header}
                        </h6>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400">
                            {longDescription}
                        </p>
                    </div>
                    <Skills skillsArray={skillsArray} />
                </div>
                <div className="to-animate from-right grid grid-cols-2 gap-5">
                    {img1 !== "" ? (
                        <img
                            className="object-cover w-full col-span-2 rounded shadow-lg"
                            src={img1}
                            alt=""
                        />
                    ) : (null)}
                    {img2 !== "" ? (
                        <img
                            className="object-cover w-full rounded shadow-lg"
                            src={img2}
                            alt=""
                        />
                    ) : (null)}
                    {img3 !== "" ? (
                        <img
                            className="object-cover w-full rounded shadow-lg"
                            src={img3}
                            alt=""
                        />
                    ) : (null)}
                </div>
            </div>
        </div>
    );
};