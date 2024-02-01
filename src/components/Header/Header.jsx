export default function Header () {
    return (
        <div className="flex items-center justify-between w-full h-[62px]">
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-[#EEEBFF]">
                    <span className="text-[25px] rotate-45 text-[#7B61FF] font-semibold">A</span>
                </div>
                <ul className="flex items-center gap-16 text-[15px] text-gray-600">
                    <li className="cursor-pointer px-4 py-2 ">Skills</li>
                    <li className="cursor-pointer px-4 py-2 ">Projects</li>
                    <li className="cursor-pointer border border-[#3730A3] text-[#3730A3] px-4 py-2 rounded outline-none ">Hire me</li>
                </ul>
        </div>
    )
};
