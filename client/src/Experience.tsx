import { Briefcase } from "lucide-react"

function Experience() {

    return (
        <div className="flex w-full  ">


            <div className="h-full  p-5 flex lg:flex-col flex-row items-center   justify-center w-full    ">
                <div className="w-full gap-2 flex items-center  lg:pl-100">
                    <div className="border rounded-full p-2 bg-[#4a3143] border-[#a70378] ">
                        <Briefcase size={20} className="text-[#cd0594]"  />
                    </div>
                    <p className="text-4xl font-bold">Experience</p>
                </div>

                <div className=" text-white flex flex-col  justify-center">
                    <p>Good Day</p>
                    <h1 className="text-6xl">I'm Reven Gerona </h1>
                    <p>Web Developer</p>
                    <p>I'm a web developer from Philippines </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a provident. Quibusdam, modi ratione impedit nisi dolore voluptatum eos culpa dolorem repellendus, obcaecati magnam, fuga exercitationem eum aspernatur maiores. Fugiat!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, atque minus culpa voluptatum labore magnam! Placeat esse maxime doloremque quae optio velit earum obcaecati aliquam, nobis rerum veritatis saepe molestias?</p>
                    <button className="">dfhsjdf</button>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ipsam obcaecati ex enim. Nisi quo, voluptates nobis doloremque eum ex repellat eligendi accusantium eveniet dolor sunt sit quas iusto ipsum.</p>
                </div>
            </div>
        </div>
    )
}
export default Experience;