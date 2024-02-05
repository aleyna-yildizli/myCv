import { IoToggleSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { theme, languageTr } from '../../store/action';
import useLocalStorage from "../../hook/useLocalStorage";




export default function ModeSwitch () {
    const dispatch = useDispatch();
    const [iStheme, setIsTheme] = useLocalStorage("theme", "light");
    const [isLanguage, setIsLanguage] = useLocalStorage("language", 'EN');


    const toggleTheme = () => {
        setIsTheme(iStheme === "light" ? "dark" : "light");
        dispatch(theme());
    };

    const handleChangeLanguage = () => {
        setIsLanguage(isLanguage === "EN" ? "TR" : "EN");
        dispatch(languageTr());
    }

    return (    
        <div className="media_500 flex items-center justify-between pt-[23px]">
            <div></div>
            <div className="flex items-center gap-4 text-[15px] letter-spacing: 0.1em font-semibold mb-[24px]">
                <div className="text-[#777777] dark:text-gray-300 flex items-center"> <IoToggleSharp onClick={toggleTheme} className="w-[55px] h-[24px]"/>DARK MODE</div>
                |
                <div onClick={handleChangeLanguage}>
                    <span className="text-[#4731D3] dark:text-[#BAB2E7s]">TÜRKÇE</span>
                    <span className="text-[#777777]" >'YE GEÇ</span>
                </div>
            </div>
        </div>
    )
};
