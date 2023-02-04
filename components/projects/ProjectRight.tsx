import Skills from "./Skills";

export default function ProjectRight(
    { title, shortDescription, img1, img2, img3, header, longDescription }:
        { title: string, shortDescription: string, img1: string, img2: string, img3: string, header: string, longDescription: string }
) {


    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
            <div className="max-w-2xl mb-10 ml-40 sm:text-left lg:max-w-2xl md:mb-12">
                <h2 className="to-animate from-left max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                    {title}
                </h2>
                <p className="to-animate from-left text-lg text-gray-700 md:text-xl">
                    {shortDescription}
                </p>
            </div>
            <div className="grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="to-animate scale-up grid grid-cols-2 gap-5">
                    <img
                        className="object-cover w-full col-span-2 rounded shadow-lg"
                        src={img1}
                        alt=""
                    />
                    <img
                        className="object-cover w-full h-88 rounded shadow-lg"
                        src={img2}
                        alt=""
                    />
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg"
                        src={img3}
                        alt=""
                    />
                </div>
                <div className="to-animate from-right flex flex-col">
                    <div className="pb-4 mb-4">
                        <h6 className="mb-2 font-semibold text-3xl text-black dark:text-white border-b">
                            {header}
                        </h6>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400">
                            {longDescription}
                        </p>
                    </div>
                    <Skills />
                </div>
            </div>
        </div>
    );
};