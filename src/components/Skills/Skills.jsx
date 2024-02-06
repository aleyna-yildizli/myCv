import React, { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import { useLanguage } from "../../context/LanguageContext";


export default function Skills () {

    const url = "https://65bfb6c325a83926ab958094.mockapi.io/api/v1/data";
    const [ data, loading, error ] = useAxios(url);
    const [skillsData, setSkillsData] = useState([]);
    const { language } = useLanguage();



    const englishSkills = data[0]?.en?.skills;
    const turkishSkills = data[1]?.tr?.skills;
  


    useEffect(() => {
        if (data) {
            setSkillsData(language === 'en' ? englishSkills : turkishSkills);
        }
      }, [data, language, englishSkills, turkishSkills]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    


      const { title, description} = skillsData || [];

    return (
        <div className="flex flex-col gap-4 w-full mt-20 mb-20">
        <h2 className="text-[48px] font-bold dark:text-[#AEBCCF]">Skills</h2>
        <div className="flex justify-between w-full">
        {skillsData && skillsData.map((skill, index) => (
                    <div key={index} className="flex flex-col gap-4 w-[300px]">
                        <div className="text-indigo-700 text-[30px] dark:text-[#B7AAFF]">{skill.title}</div>
                        <p className="text-[12px] text-[#6B7280] dark:text-white">{skill.description}</p>
                    </div>
                ))}
        </div>
    </div>
    )
};
