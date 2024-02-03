import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Hero () {
    return (
        <div className="flex flex-col h-[428px] w-full mt-16 border border-solid border-1 border-[#3730A3]">
            <div className="grid grid-cols-2 ">
                <div className="flex flex-col gap-[50px] h-[428px] relative border-2 border-solid border-[#3730A3]">
                    <div className="flex items-center gap-3 ">
                        <div className="w-[100px] h-[1px] bg-gradient-to-r from-[#4338CA] via-[#4338CA] to-[#4338CA] dark:bg-[#BAB2E7]"></div>
                        <div className="text-[20px] font-medium text-[#4338CA] dark:text-[#B7AAFF]">Aleyna Yıldızlı</div>
                    </div>
                    <h1 className="text-6xl font-bold text-[#1F2937] dark:text-[#AEBCCF]">Imaginative Problem Solver | Finding Beauty in Simplicity</h1>
                    <p className="text-[12px] text-[#6B7280] dark:text-white">Hey there! I'm Aleyna, a comprehensive developer passionate about creating excellent user experiences. With extensive experience in both front-end and back-end development, I always aim to design my projects in a strong, scalable, and innovative manner. As an effective communicator within a team, I'm here to make our projects successful together.</p>
                <div className="flex items-center gap-3 absolute bottom-1 left-0 font-semibold">
                    <Link className=" bg-indigo-800 text-white px-5 py-2 rounded dark:text-black dark:bg-[#E1E1FF]" to="/">Hire me</Link>
                    <Link className="flex items-center gap-2  px-5 py-2 rounded border border-indigo-800 text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF]" to="/"><IoLogoGithub className="dark:text-[#BAB2E7]"/> Github</Link>
                    <Link  className="flex items-center gap-2  px-5 py-2 rounded border  border-indigo-800 text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF]" to="/"><FaLinkedinIn className="dark:text-[#BAB2E7]"/> Linkedin</Link>
                </div>
                </div>
                <div className="w-full h-full relative ">
                <img className="w-[476px] h-[375px] object-cover rounded-lg absolute right-0" src="../../images/IMG_3048.jpg" alt=""/>
            </div>
            </div>
        </div>
    )
};

