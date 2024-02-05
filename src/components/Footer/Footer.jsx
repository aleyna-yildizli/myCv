import { BiSolidHandRight } from "react-icons/bi";
import useAxios from '../../hook/useAxios';


export default function Footer () {

    const url = "https://65bfb6c325a83926ab958094.mockapi.io/api/v1/cvData";
    const [ cvData, loading, error ] = useAxios(url);


    return (
        <div className="bg-gray-100 dark:bg-[#141414] ">
            <div className="mx-auto h-[251px]">
                <div className="flex flex-col gap-2 justify-center p-[60px]">
                    <span className="text-3xl font-semibold dark:text-[#AEBCCF]">
                        Let's work together on <br />
                        your next product.
                    </span>
                </div>
                <div className="flex items-center justify-between px-[60px]">
                    <span className="flex items-center gap-2 dark:text-[#BAB2E7]"> <BiSolidHandRight className=" text-yellow-600" />aleynayildizli@gmail.com</span>
                        <ul className="flex items-center gap-4">
                            <li className="text-[13px] font-semibold text-black cursor-pointer dark:text-[#E1E1FF]">Personel Blog</li>
                            <li className="text-[13px] font-semibold text-green-700 cursor-pointer dark:text-[#17D18B]">Github</li>
                            <li className="text-[13px] font-semibold text-blue-700 cursor-pointer dark:text-[#0BA6F6]">Linkedin</li>
                        </ul>
                </div>
            </div>
        </div>
            )
}
    
