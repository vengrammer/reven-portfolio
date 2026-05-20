import profile from "./assets/sampleProfile.jpg"

function About() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 lg:px-20">
      
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full max-w-6xl">

        {/* TEXT SECTION */}
        <div className="text-white flex flex-col gap-5 lg:w-1/2">

          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Hello, I'm
          </p>

          {/* NAME */}
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
              Reven Gerona
            </span>
          </h1>

          {/* ROLE */}
          <h2 className="text-xl lg:text-2xl text-gray-300 font-medium">
            Full Stack Developer
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 leading-relaxed text-sm lg:text-base max-w-xl">
            I’m passionate about coding and building web applications that solve
            real-world problems. I enjoy learning new technologies and
            continuously improving my skills through hands-on development and
            personal projects.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition">
              Contact Me
            </button>

            <button className="px-6 py-2 rounded-full border border-gray-500 text-white hover:border-white transition">
              Download CV
            </button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20 rounded-full scale-110"></div>

          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-3 rounded-2xl shadow-2xl">
            <img
              src={profile}
              alt="profile"
              className="rounded-2xl w-70 h-87.5 object-cover lg:w-95 lg:h-120"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About