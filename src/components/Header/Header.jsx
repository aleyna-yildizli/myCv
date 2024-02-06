import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <div className="flex items-center justify-between w-full h-[62px]">
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-[#EEEBFF] dark:bg-[#4731D3]">
                    <span className="text-[25px]  rotate-45 text-[#7B61FF] font-semibold dark:text-[#8F88FF]">A</span>
                </div>
                <nav>
                <ul className="flex items-center xl:gap-16 lg:gap-4 md:gap-2 gap-1 xl:text-lg lg:text-base md:text-sm text-xs leading-7 font-medium text-gray-600">
                    <li className="cursor-pointer xl:px-4 xl:py-2 px-2 py-1  text-[#6B7280] "><Link to='/'>Skills</Link></li>
                    <li className="cursor-pointer xl:px-4 xl:py-2 px-2 py-1 text-[#6B7280] ">Projects</li>
                    <li className="cursor-pointer border border-[#3730A3] text-[#3730A3] bg-white px-4 py-2 rounded outline-none ">Hire me</li>
                </ul>
                </nav>
        </div>
    )
};
