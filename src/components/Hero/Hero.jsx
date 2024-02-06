import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { useSelector } from "react-redux";
import "./style.css"
;
export default function Hero ({data}) {
    const [heroData, setHeroData] = useState({});
    const lang = useSelector((state) => state.language);

    const englishHero = data[0]?.en?.hero[0];
    const turkishHero = data[1]?.tr?.hero[0];

    useEffect(() => {
        if (data && (lang === 'EN' ? englishHero : turkishHero)) {
            setHeroData(lang === 'EN' ? englishHero : turkishHero);
        }
    }, [data, lang]);

    const { name, presentation, introduction, image } = heroData || {};

    return (
        <div className="flex flex-col  w-full xl:mt-16 lg:mt-10 md:mt-6 mt-3 ">
            <div className="flex ">
                <div className="flex flex-col xl:gap-[50px] lg:gap-[30px] md:gap-[20px] gap-[10px] relative">
                    <div className="flex items-center xl:gap-3 gap-1 ">
                        <div className="w-[100px] h-[1px] bg-gradient-to-r from-[#4338CA] via-[#4338CA] to-[#4338CA] dark:bg-[#BAB2E7]"></div>
                        {name && (
                        <div className="text-[20px] font-medium text-[#4338CA] dark:text-[#B7AAFF]">{name}</div>
                        )}
                    </div>
                    {presentation && (
                    <h1 className="xl:text-6xl lg:text-4xl md:text-2xl text-xl font-bold text-[#1F2937] dark:text-[#AEBCCF]">{presentation}</h1>
                    )}
                    {introduction && (
                    <p className="hero_description xl:text-[18px] lg:text-[14px] text-[12px] text-[#6B7280] dark:text-white">{introduction}</p>
                    )}
                <div className="flex items-center gap-3 bottom-1 left-0 font-semibold">
                    <Link className=" bg-indigo-800 text-white px-5 py-2 rounded dark:text-black dark:bg-[#E1E1FF]" to="/">Hire me</Link>
                    <Link className="flex items-center gap-2  px-5 py-2 rounded border border-indigo-800 text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF]" to="/"><IoLogoGithub className="dark:text-[#BAB2E7]"/> Github</Link>
                    <Link  className="flex items-center gap-2  px-5 py-2 rounded border  border-indigo-800 text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF]" to="/"><FaLinkedinIn className="dark:text-[#BAB2E7]"/> Linkedin</Link>
                </div>
                </div>
                <div className="hero_image_card w-full h-full relative ">
                {image && (
                <img className="hero_image xl:w-[476px] xl:h-[375px] lg:w-[426px] lg:h-[335px] md:w-[206px] md:h-[105px] display-none object-cover rounded-[18px] absolute right-0" src={`${image}`} alt="" />
                )}
            </div>
            </div>
        </div>
    )
};

