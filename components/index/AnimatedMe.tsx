import React from "react";

export default function AnimatedMe() {
    return (
        <div className="bg-white dark:bg-black">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold leading-none tracking-tight text-black dark:text-white sm:text-4xl md:mx-auto">
                        Testimonials
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 md:text-lg">
                        Some people I've worked with have some nice things to say...
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="flex">
                        <div>
                            <div className="mb-2">
                                <h1 className="inline-block text-2xl font-bold leading-5 text-black dark:text-white">
                                    So Awesome
                                </h1>
                            </div>
                            <p className="mb-5 text-gray-700 dark:text-gray-300">
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
                    <div className="flex">
                        <div>
                            <div className="mb-2">
                                <h1 className="inline-block text-2xl font-bold leading-5 text-black dark:text-white">
                                    So Awesome
                                </h1>
                            </div>
                            <p className="mb-5 text-gray-700 dark:text-gray-300">
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
                    <div className="flex">
                        <div>
                            <div className="mb-2">
                                <h1 className="inline-block text-2xl font-bold leading-5 text-black dark:text-white">
                                    So Awesome
                                </h1>
                            </div>
                            <p className="mb-5 text-gray-700 dark:text-gray-300">
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