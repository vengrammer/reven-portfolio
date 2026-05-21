import { FolderOpenDot, ExternalLink } from "lucide-react";
import github from "./assets/github.png";
import capstone from "./assets/capstone.png";
import reviewAi from "./assets/review-ai.png";
function Projects() {
    return (
        <div className="w-full min-h-screen pt-24 px-4 lg:px-20 text-white">
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">

                <div className="flex items-center gap-4">
                    <div className="border rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-[#4a3143] border-[#ff4dc4] shadow-lg">
                        <FolderOpenDot size={22} className="text-[#ff66cc]" />
                    </div>

                    <h1 className="text-2xl lg:text-4xl font-bold">
                        Personal Projects
                    </h1>
                </div>

                <div className="flex w-full flex-col lg:flex-row lg:gap-10 gap-5 lg:h-112.5">
                    <div className="flex-1 flex flex-col border rounded-2xl border-[#244247] overflow-hidden bg-[#1f1f1f]">

                        <div className="flex-1 relative group overflow-hidden">
                            <img
                                src={capstone}
                                alt="Virtual Thesis Archive"
                                className="
                                    w-full h-full object-cover
                                    transition-transform duration-500
                                    group-hover:scale-105
                                "
                            />

                            <div
                                className="
                                    absolute inset-0
                                    flex flex-col justify-between
                                    p-4 lg:p-6
                                    bg-black/0
                                    group-hover:bg-black/50
                                    transition-all duration-500
                                "
                            >

                                <div className="flex flex-wrap gap-2 lg:gap-3">
                                    {[
                                        "React",
                                        "Tailwind CSS",
                                        "Express.js",
                                        "MongoDB",
                                    ].map((tech, index) => (
                                        <p
                                            key={tech}
                                            className="
                                                border border-white/30
                                                px-3 py-1.5
                                                rounded-full
                                                bg-white/20
                                                backdrop-blur-md
                                                text-white
                                                text-xs lg:text-sm
                                                shadow-md

                                                opacity-0
                                                -translate-y-5
                                                group-hover:opacity-100
                                                group-hover:translate-y-0

                                                transition-all duration-500
                                            "
                                            style={{
                                                transitionDelay: `${index * 100}ms`,
                                            }}
                                        >
                                            {tech}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <footer className="w-full bg-[#2e2f2e] p-5">
                            <div className="flex flex-col items-center justify-center gap-4">

                                <p className="text-lg lg:text-xl font-bold text-center">
                                    Virtual Thesis Archive (Capstone Project)
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

                                    <a
                                        href="https://github.com/vengrammer/capstone"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex items-center gap-3
                                            bg-white text-black
                                            hover:bg-gray-300
                                            transition-all duration-300
                                            px-6 py-3
                                            rounded-2xl
                                            shadow-lg
                                            font-semibold
                                            justify-center
                                        "
                                    >
                                        <img
                                            src={github}
                                            alt="github"
                                            className="w-5 h-5"
                                        />

                                        <span>GITHUB</span>
                                    </a>
                                    <a
                                        href="https://cdsga-thesis-vault.me"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex items-center gap-2
                                            bg-[#7ee7ff]
                                            text-black
                                            hover:bg-[#4bc9e5]
                                            transition-all duration-300
                                            px-6 py-3
                                            rounded-2xl
                                            shadow-lg
                                            font-semibold
                                            justify-center
                                        "
                                    >
                                        <ExternalLink size={18} />

                                        <span className="text-nowrap">
                                            Live Demo
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </div>

                    <div className="flex-1 flex flex-col border rounded-2xl border-[#244247] overflow-hidden bg-[#1f1f1f]">

                        <div className="flex-1 relative group overflow-hidden">
                            <img
                                src={reviewAi}
                                alt="review ai"
                                className="
                                    w-full h-full object-cover
                                    transition-transform duration-500
                                    group-hover:scale-105
                                "
                            />
                            <div
                                className="
                                    absolute inset-0
                                    flex flex-col justify-between
                                    p-4 lg:p-6
                                    bg-black/0
                                    group-hover:bg-black/50
                                    transition-all duration-500
                                "
                            >

                                <div className="flex flex-wrap gap-2 lg:gap-3">
                                    {[
                                        "React",
                                        "Tailwind CSS",
                                        "laravel",
                                        "Mysql",
                                    ].map((tech, index) => (
                                        <p
                                            key={tech}
                                            className="
                                                border border-white/30
                                                px-3 py-1.5
                                                rounded-full
                                                bg-white/20
                                                backdrop-blur-md
                                                text-white
                                                text-xs lg:text-sm
                                                shadow-md

                                                opacity-0
                                                -translate-y-5
                                                group-hover:opacity-100
                                                group-hover:translate-y-0

                                                transition-all duration-500
                                            "
                                            style={{
                                                transitionDelay: `${index * 100}ms`,
                                            }}
                                        >
                                            {tech}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <footer className="w-full bg-[#2e2f2e] p-5">
                            <div className="flex  items-center justify-between">

                                <p className="text-lg lg:text-xl font-bold text-center">
                                    Review Genius AI
                                </p>


                                <a
                                    href="https://github.com/vengrammer/review-genius-ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                            flex items-center gap-3
                                            bg-white text-black
                                            hover:bg-gray-300
                                            transition-all duration-300
                                            px-6 py-3
                                            rounded-2xl
                                            shadow-lg
                                            font-semibold
                                            justify-center
                                        "
                                >
                                    <img
                                        src={github}
                                        alt="github"
                                        className="w-5 h-5"
                                    />

                                    <span>GITHUB</span>
                                </a>

                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;