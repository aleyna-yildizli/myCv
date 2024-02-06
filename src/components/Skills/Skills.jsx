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
