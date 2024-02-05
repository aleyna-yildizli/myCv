import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import useAxios from '../../hook/useAxios';
import { useSelector } from "react-redux";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero () {
    const { language } = useLanguage();
    const url = "https://65bfb6c325a83926ab958094.mockapi.io/api/v1/data";
    const [ data, loading, error ] = useAxios(url);

    const [heroData, setHeroData] = useState({});

    const englishHero = data[0]?.en?.hero[0];
    const turkishHero = data[1]?.tr?.hero[0];

    useEffect(() => {
        if (data && (language === 'en' ? englishHero : turkishHero)) {
            setHeroData(language === 'en' ? englishHero : turkishHero);
        }
    }, [data, language, englishHero, turkishHero]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const { name, presentation, introduction, image } = heroData || {};

    return (
        <div className="flex flex-col h-[428px] w-full mt-16 border border-solid border-1 border-[#3730A3]">
            <div className="grid grid-cols-2 ">
                <div className="flex flex-col gap-[50px] h-[428px] relative border-2 border-solid border-[#3730A3]">
                    <div className="flex items-center gap-3 ">
                        <div className="w-[100px] h-[1px] bg-gradient-to-r from-[#4338CA] via-[#4338CA] to-[#4338CA] dark:bg-[#BAB2E7]"></div>
                        {name && (
                        <div className="text-[20px] font-medium text-[#4338CA] dark:text-[#B7AAFF]">{name}</div>
                        )}
                    </div>
                    {presentation && (
                    <h1 className="text-6xl font-bold text-[#1F2937] dark:text-[#AEBCCF]">{presentation}</h1>
                    )}
                    {introduction && (
                    <p className="text-[12px] text-[#6B7280] dark:text-white">{introduction}</p>
                    )}
                <div className="flex items-center gap-3 absolute bottom-1 left-0 font-semibold">
                    <Link className=" bg-indigo-800 text-white px-5 py-2 rounded dark:text-black dark:bg-[#E1E1FF]" to="/">Hire me</Link>
                    <Link className="flex items-center gap-2  px-5 py-2 rounded border border-indigo-800 text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF]" to="/"><IoLogoGithub className="dark:text-[#BAB2E7]"/> Github</Link>
                    <Link  className="flex items-center gap-2  px-5 py-2 rounded border  border-indigo-800 text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF]" to="/"><FaLinkedinIn className="dark:text-[#BAB2E7]"/> Linkedin</Link>
                </div>
                </div>
                <div className="w-full h-full relative ">
                {image && (
                <img className="w-[476px] h-[375px] object-cover rounded-lg absolute right-0" src={`${image}`} alt="" />
                )}
            </div>
            </div>
        </div>
    )
};

