import React from "react";

export default function AnimatedMe() {
    return (
        <div className="bg-tertiary dark:bg-raisin h-screen flex flex-col text-center pb-0 lg:pb-20">
            <svg className="block dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FCFCFC" fillOpacity="1" d="M0,192L40,176C80,160,160,128,240,117.3C320,107,400,117,480,154.7C560,192,640,256,720,234.7C800,213,880,107,960,58.7C1040,11,1120,21,1200,32C1280,43,1360,53,1400,58.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <svg className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1E1F1F" fillOpacity="1" d="M0,192L40,176C80,160,160,128,240,117.3C320,107,400,117,480,154.7C560,192,640,256,720,234.7C800,213,880,107,960,58.7C1040,11,1120,21,1200,32C1280,43,1360,53,1400,58.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <img src="/me.svg" alt="" className="h-2/3 -mt-10 md:-mt-20 lg:-mt-40" />
            <div className="text-gray-400 text-md md:text-xl -mt-10">
                <p>&#47;&#47; Hmmm... is this too creepy to put on my website?</p>
            </div>
        </div>
    );
};