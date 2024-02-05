import React, { useEffect, useState } from 'react';
import { BiSolidHandRight } from "react-icons/bi";
import useAxios from '../../hook/useAxios';
import { useLanguage } from "../../context/LanguageContext";
import { theme } from '../../store/action';
import { useSelector } from 'react-redux';


export default function Footer () {
    const { language } = useLanguage();
    const url = "https://65bfb6c325a83926ab958094.mockapi.io/api/v1/data";
    const [ data, loading, error ] = useAxios(url);
    const [footerData, setFooterData] = useState({});
    const isDarkMode = useSelector((state) => state.theme);

    const englishFooter = data[0]?.en?.footer[0];
    const turkishFooter = data[1]?.tr?.footer[0];

    useEffect(() => {
        if (data) {
          setFooterData(language === 'en' ? englishFooter : turkishFooter);
        }
      }, [data, language, englishFooter, turkishFooter]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


      const { text, mail, links } = footerData || {};

    return (
        <div className="bg-gray-100 dark:bg-[#141414] ">
            <div className="mx-auto h-[251px]">
                <div className="flex flex-col gap-2 justify-center p-[60px]">
                {text && ( 
                    <span className="text-3xl font-semibold dark:text-[#AEBCCF]">
                    {text.first} <br />
                    {text.second}
                    </span>
                )} 
                </div>
                <div className="flex items-center justify-between px-[60px]">
                    <span className="flex items-center gap-2 dark:text-[#BAB2E7]"> <BiSolidHandRight className=" text-yellow-600" />
                    {mail}
                    </span>
                        <ul className="flex items-center gap-4">
                        {links && links.map((link, index) => (
                            <li key={index} className={`text-[13px] font-semibold cursor-pointer ${isDarkMode ? link.text.darkClass : link.text.lightClass}`}>
                                 {link.text.content}
                             </li>
                        ))}
                        </ul>
                 </div>
            </div>
        </div>
            )}
    
