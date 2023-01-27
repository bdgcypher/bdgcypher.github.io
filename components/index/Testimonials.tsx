import React from "react";

export default function Testimonials() {
    return (
        <div className="bg-white dark:bg-black">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-4xl font-semibold leading-none tracking-tight text-black dark:text-white sm:text-4xl md:mx-auto">
                        Testimonials
                    </h2>
                    <p className="text-gray-400 text-md md:text-xl">
                        &#47;&#47; Maybe some people I've worked with have some nice things to say...
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="to-animate from-bottom flex">
                        <div>
                            <div className="mb-2">
                                <h1 className="inline-block text-4xl font-bold leading-5 text-black dark:text-white">
                                    Creative and Clever
                                </h1>
                            </div>
                            <p className="mb-5 text-xl text-gray-700 dark:text-gray-300">
                                Ben is a bullet bike of a front end designer and developer. He's a great team player, incredible collaborator, 
                                very creative and clever, and does excellent work. We're really grateful to have him working with us.
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="/ScottRafferty.png"
                                    alt="avatar"
                                    className="object-cover mr-3 w-10 h-10 rounded-full shadow-sm"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-primary">
                                        Scott Rafferty
                                    </p>
                                    <p className="text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                                        Founder, Branch LLC.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="to-animate from-bottom second flex">
                        <div>
                            <div className="mb-2">
                                <h1 className="inline-block text-4xl font-bold leading-5 text-black dark:text-white">
                                    Excellent
                                </h1>
                            </div>
                            <p className="mb-5 text-xl text-gray-700 dark:text-gray-300">
                                Ben  is a clear communicator with the tenacity and confidence to really dig 
                                in to a task and the collaborative mindset that's needed to produce excellent work.
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                    alt="avatar"
                                    className="object-cover mr-3 w-10 h-10 rounded-full shadow-sm"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-primary">
                                        Terral Fox
                                    </p>
                                    <p className="text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                                        Owner, Origins Family Fitness LLC.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="to-animate from-bottom third flex">
                        <div>
                            <div className="mb-2">
                                <h1 className="inline-block text-4xl font-bold leading-5 text-black dark:text-white">
                                    So Awesome
                                </h1>
                            </div>
                            <p className="mb-5 text-xl text-gray-700 dark:text-gray-300">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                    alt="avatar"
                                    className="object-cover mr-3 w-10 h-10 rounded-full shadow-sm"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-primary">
                                        Petru Vîrtos
                                    </p>
                                    <p className="text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                                        Author
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};