import { IoToggleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { darkMode } from '../../store/action';

export default function ModeSwitch () {
    const dispatch = useDispatch();
    const toggleDarkMode = () => {
        dispatch(darkMode());
      };

    


    return (
        <div className="media_500 flex items-center justify-between pt-[23px]">
            <div></div>
            <div className="flex items-center gap-4 text-[15px] letter-spacing: 0.1em font-semibold mb-[24px]">
                <div className="text-[#777777] dark:text-gray-300 flex items-center"> <IoToggleSharp onClick={toggleDarkMode} className="w-[55px] h-[24px]"/>DARK MODE</div>
                |
                <div>
                    <span className="text-[#4731D3] dark:text-[#BAB2E7s]">TÜRKÇE</span>
                    <span className="text-[#777777]" >'YE GEÇ</span>
                </div>
            </div>
        </div>
    )
};
