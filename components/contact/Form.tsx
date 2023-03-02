import React from "react";
import emailjs from "emailjs-com";
import { BiArrowBack } from "react-icons/bi";

export default function Form() {

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_bisd5ko', 'template_6av43zj', e.target, 'user_gnPTqdY8hKecqwUQdpmhB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="h-screen p-4 bg-white dark:bg-black">
            <div className="px-4">
                <a href="/" aria-label="back button" className="text-primary hover:text-secondary text-4xl transition ease-in-out duration-300">
                    <BiArrowBack />
                </a>
                <form onSubmit={sendEmail} className="to-animate from-bottom mx-auto mt-10 flex w-full max-w-xl space-x-3 ">
                    <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-tertiary rounded-lg shadow-xl dark:shadow-gray-900 dark:bg-onyx">
                        <div className="mb-6 text-3xl text-center text-black dark:text-white">
                            Send me a message
                        </div>
                        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <label htmlFor="name" className="ml-2 text-black dark:text-white">Name</label>
                                    <input name="name" type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white dark:bg-onyx text-black dark:text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent invalid:border-red-600" placeholder="john doe" />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <label htmlFor="email" className="ml-2 text-black dark:text-white">Email</label>
                                    <input name="email" type="email" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white dark:bg-onyx text-black dark:text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent invalid:border-red-600" placeholder="you@example.com" />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="message" className="ml-2 text-black dark:text-white">Message</label>
                                <textarea name="message" id="comment" placeholder="enter a message" rows={10} cols={40} className="flex-1 w-full px-4 py-2 text-base text-black dark:text-white placeholder-gray-400 bg-white dark:bg-onyx border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent invalid:border-red-600">
                                </textarea>
                            </div>
                            <p id="messageSent" className="col-span-2 hidden text-center text-gray-400">Message sent. Thanks for reaching out!</p>
                            <div className="col-span-2 text-right">
                                <button onClick={() => {
                                    document.getElementById("messageSent")?.classList.add("block");
                                    document.getElementById("messageSent")?.classList.remove("hidden")
                                }} type="submit" className="py-2 px-4  bg-primary hover:bg-secondary focus:ring-white text-white w-full transition ease-in duration-200 text-center text-xl font-semibold shadow-md rounded-full ">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}