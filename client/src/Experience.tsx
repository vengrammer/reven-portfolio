import { Briefcase, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

import ojtLandingPage from "./assets/ojtLandingPage.png"
import ojtMain from "./assets/ojtMain.png"
import github from "./assets/github.png"

function Experience() {
    const images = [ojtLandingPage, ojtMain]

    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full min-h-screen lg:pt-24 px-4 lg:px-20 text-white pt-40">

            <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">


                <div className="flex items-center gap-4">
                    <div className="border rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-[#4a3143] border-[#ff4dc4] shadow-lg">
                        <Briefcase size={22} className="text-[#ff66cc]" />
                    </div>

                    <h1 className="text-2xl lg:text-4xl font-bold">
                        Experience
                    </h1>
                </div>


                <div className="flex flex-col gap-4">

                    <div className="w-full border border-[#244247] py-3 lg:py-4 rounded-2xl bg-[#35575d] flex items-center justify-center shadow-lg">
                        <h1 className="lg:text-3xl text-lg font-bold text-center px-4">
                            Project Management System — OJT Project
                        </h1>
                    </div>


                    <div className="relative group w-full h-87.5 sm:h-112.5 lg:h-162.5 rounded-3xl overflow-hidden border border-[#35575d] shadow-2xl">


                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt="project"
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000
                                
                                ${index === currentImage
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-110"
                                    }
                                `}
                            />
                        ))}

                        <div className="absolute inset-0 bg-black/30 lg:group-hover:bg-black/50 transition duration-500" />

                        <div className="absolute inset-0 flex flex-col justify-between p-4 lg:p-6">


                            <div className="flex flex-wrap gap-2 lg:gap-3">

                                {[
                                    "React.js",
                                    "Tailwind CSS",
                                    "GraphQL",
                                    "Express.js",
                                    "MongoDB",
                                ].map((tech) => (
                                    <p
                                        key={tech}
                                        className="
                                            border border-white/30
                                            px-3 py-1.5
                                            rounded-full
                                            bg-white/20
                                            backdrop-blur-md
                                            text-white
                                            text-xs lg:text-base
                                            shadow-md

                                            lg:opacity-0
                                            lg:-translate-y-5
                                            lg:group-hover:opacity-100
                                            lg:group-hover:translate-y-0
                                            transition-all duration-500
                                        "
                                    >
                                        {tech}
                                    </p>
                                ))}
                            </div>


                            <div
                                className="
                                    flex flex-col sm:flex-row
                                    gap-3
                                    justify-center
                                    items-center

                                    lg:opacity-0
                                    lg:translate-y-5
                                    lg:group-hover:opacity-100
                                    lg:group-hover:translate-y-0

                                    transition-all duration-500
                                "
                            >


                                <a
                                    href="https://github.com/vengrammer/project-management-system"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex items-center gap-3
                                        bg-white text-black
                                        hover:bg-gray-200
                                        transition
                                        px-5 py-3
                                        rounded-2xl
                                        shadow-lg
                                        font-semibold
                                        w-full sm:w-auto
                                        justify-center
                                    "
                                >
                                    <img
                                        src={github}
                                        alt="github"
                                        className="w-5 h-5"
                                    />

                                    <span>
                                        View Code
                                    </span>
                                </a>


                                <a
                                    href="https://pms.bamanagementsolutions.com:4100/landingpage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex items-center gap-2
                                        bg-[#7ee7ff]
                                        text-black
                                        hover:bg-[#9ff0ff]
                                        transition
                                        px-5 py-3
                                        rounded-2xl
                                        shadow-lg
                                        font-semibold
                                        w-full sm:w-auto
                                        justify-center
                                    "
                                >
                                    <ExternalLink size={18} />

                                    <span>
                                        Live Demo
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience