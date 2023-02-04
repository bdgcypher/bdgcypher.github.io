import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiHtml5, SiReact, SiCss3, SiFigma, SiTailwindcss } from 'react-icons/si'

export default function Skills() {

    return (
        <div className="mb-8">
            <p className="mb-4 text-black dark:text-white text-sm font-bold tracking-widest uppercase">
                Skills used here
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
                            <SiHtml5 className="text-orange-400" />
                        </span>
                        HTML
                    </li>
                    <li className="flex">
                        <span className="mr-2">
                            <SiCss3 className="text-blue-500" />
                        </span>
                        CSS
                    </li>
                    <li className="flex">
                        <span className="mr-2">
                            <SiFigma className="text-black dark:text-white" />
                        </span>
                        Figma
                    </li>
                </ul>
                <ul className="space-y-3">
                    <li className="flex -mt-3 md:-mt-0">
                        <span className="mr-2">
                            <SiReact className="text-blue-300" />
                        </span>
                        React
                    </li>
                    <li className="flex">
                        <span className="mr-2">
                            <SiTailwindcss className="text-cyan-400" />
                        </span>
                        Tailwind
                    </li>
                    <li className="flex">
                        <span className="mr-2">
                            <TbBrandNextjs className="text-black dark:text-white" />
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
    )
}