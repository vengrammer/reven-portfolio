import logo from "./assets/logo.png"
import About from "./About"
import CustomCursor from "./CustomCursor"
import Experience from "./Experience"
import { motion } from "framer-motion"
import React, { useRef, useEffect, useState } from "react"

function App() {
  const [activeSection, setActiveSection] = useState("about")
  const containerRef = useRef<HTMLDivElement | null>(null)

  // refs
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const experienceRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)
  const techRef = useRef<HTMLDivElement | null>(null)
  const educationRef = useRef<HTMLDivElement | null>(null)

  // scroll to section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  ref.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

  // detect active section
  const handleScroll = () => {
    const container = containerRef.current
    if (!container) return

    const scrollY = container.scrollTop
   
    const experience = experienceRef.current?.offsetTop || 0
    const projects = projectsRef.current?.offsetTop || 0
    const tech = techRef.current?.offsetTop || 0
    const education = educationRef.current?.offsetTop || 0

   if (scrollY >= education - 150) {
      setActiveSection("education")
    } else if (scrollY >= tech - 150) {
      setActiveSection("tech")
    } else if (scrollY >= projects - 150) {
      setActiveSection("projects")
    } else if (scrollY >= experience - 150) {
      setActiveSection("experience")
    } else {
      setActiveSection("about")
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("scroll", handleScroll)

    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  // navbar button component (with underline)
  const NavItem = ({
    label,
    section,
    refObj,
  }: {
    label: string
    section: string
    refObj: React.RefObject<HTMLDivElement | null>
  }) => (
    <button
      onClick={() => scrollToSection(refObj)}
      className="relative px-2 py-1 text-sm transition-all"
    >
      {label}

      {/* underline */}
      <span
        className={`
          absolute left-0 -bottom-1 h-0.5 w-full bg-white
          transition-transform duration-300 origin-left
          ${activeSection === section ? "scale-x-100" : "scale-x-0"}
        `}
      />
    </button>
  )

  return (
    <div ref={containerRef} className="w-screen h-screen flex flex-col overflow-y-auto bg-[#1e1f20] text-white">
      <CustomCursor />

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-[#0e0f10]">
        <div className="flex w-full items-center gap-19 justify-center px-10 py-4">
          {/* LOGO */}
          <img src={logo} className="w-10 h-10  rounded-full" />

          {/* NAVBAR */}
          <div className="flex gap-8 opacity-80 lg:items-start">
            <NavItem label="About" section="about" refObj={aboutRef} />
            <NavItem label="Experience" section="experience" refObj={experienceRef} />
            <NavItem label="Projects" section="projects" refObj={projectsRef} />
            <NavItem label="Tech Stack" section="tech" refObj={techRef} />
            <NavItem label="Education" section="education" refObj={educationRef} />
          </div>
        </div>
      </div>

      {/* SECTIONS */}

      <motion.div
        ref={aboutRef}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="min-h-screen flex items-center top-10 justify-center"
      >
        <About />
      </motion.div>

      <motion.div
        ref={experienceRef}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="min-h-screen flex  "
      >
        <Experience />
      </motion.div>

      <div ref={projectsRef} className="min-h-screen flex items-center">
        Projects Section
      </div>

      <div ref={techRef} className="min-h-screen flex items-center">
        Tech Stack Section
      </div>

      <div ref={educationRef} className="min-h-screen flex items-center">
        Education Section
      </div>
    </div>
  )
}

export default App