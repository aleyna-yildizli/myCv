import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export default function Skills ({data}) {
    const [skillsData, setSkillsData] = useState([]);
    const lang = useSelector((state) => state.language);



    const englishSkills = data[0]?.en?.skills;
    const turkishSkills = data[1]?.tr?.skills;
  


    useEffect(() => {
        if (data) {
            setSkillsData(lang === 'EN' ? englishSkills : turkishSkills);
        }
      }, [data, lang]);


      const { title, description} = skillsData || [];

      return (
        <div className="flex flex-col xl:gap-4 md:gap-2 gap-1 w-full xl:mt-20 xl:mb-20 lg:mt-6 lg:mb-6 md:mt-3 md:mb-3 mt-2 mb-1">
        <h2 className="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px]  font-bold dark:text-[#AEBCCF]">Skills</h2>
        <div className="flex justify-between w-full">
        {skillsData && skillsData.map((skill, index) => (
                    <div key={index} className="flex flex-col gap-4 w-[300px]">
                        <div className="text-indigo-700 xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] dark:text-[#B7AAFF]">{skill.title}</div>
                        <p className="xl:text-[14px] text-[12px] text-[#6B7280] dark:text-white">{skill.description}</p>
                    </div>
                ))}
        </div>
    </div>
    )
};
