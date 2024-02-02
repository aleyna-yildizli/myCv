import { BiSolidHandRight } from "react-icons/bi";


export default function Footer () {
    return (
        <div className="w-full h-[309px] bg-slate-100 ">
            <div className="mx-auto w-full container ">
                <div className="flex flex-col gap-2 justify-center p-[60px]">
                    <span className="text-3xl font-semibold">Let's work together on</span>
                    <span className="text-3xl font-semibold">your next product.</span>
                </div>
                <div className="flex items-center justify-between px-[60px]">
                    <span className="flex items-center gap-2"> <BiSolidHandRight className=" text-yellow-600" />aleynayildizli@gmail.com</span>
                        <ul className="flex items-center gap-4">
                            <li className="text-[13px] font-semibold text-black cursor-pointer">Personel Blog</li>
                            <li className="text-[13px] font-semibold text-green-700 cursor-pointer">Github</li>
                            <li className="text-[13px] font-semibold text-blue-700 cursor-pointer">Linkedin</li>
                        </ul>
                </div>
            </div>
        </div>
            )
}
    
