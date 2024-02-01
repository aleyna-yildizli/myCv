import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <div className="flex items-center justify-between w-full h-[62px]">
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-[#EEEBFF]">
                    <span className="text-[25px] rotate-45 text-[#7B61FF] font-semibold">A</span>
                </div>
                <nav>
                <ul className="flex items-center gap-16 text-lg leading-7 font-medium text-gray-600">
                    <li className="cursor-pointer px-4 py-2  text-[#6B7280] "><Link to='/'>Skills</Link></li>
                    <li className="cursor-pointer px-4 py-2 text-[#6B7280] ">Projects</li>
                    <li className="cursor-pointer border border-[#3730A3] text-[#3730A3] px-4 py-2 rounded outline-none ">Hire me</li>
                </ul>
                </nav>
        </div>
    )
};
