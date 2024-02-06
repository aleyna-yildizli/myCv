import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxios from '../../hook/useAxios';
import { useLanguage } from "../../context/LanguageContext";
import { theme } from '../../store/action';
import { useSelector } from 'react-redux';
import "./style.css";


export default function ProjectItem() {

  const { language } = useLanguage();
  const url = "https://65bfb6c325a83926ab958094.mockapi.io/api/v1/data";
  const [ data, loading, error ] = useAxios(url);
  const [projectData, setProjectData] = useState([]);
  const isDarkMode = useSelector((state) => state.theme);

  const englishProject = data[0]?.en?.projects || [];
  const turkishProject = data[1]?.tr?.projects || [];

  useEffect(() => {
    if (data && (language === 'en' ? englishProject : turkishProject)) {
      setProjectData(language === 'en' ? englishProject : turkishProject);
    }
}, [data, language, englishProject, turkishProject]);

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }


    const { title, image, info, tags, github, view } = projectData || [];

    return (
      <div className="flex flex-col gap-4 w-full mt-20 mb-40">
      <h2 className="text-4xl font-bold dark:text-[#AEBCCF] mb-5">Projects</h2>
      <div className="flex justify-between gap-5">
        
      {projectData.map((project, index) => (
        <div key={index} className='flex flex-col w-[23vw]'>
          <img className='h-[180px] object-cover' src={`${project.image}`} alt="" />
          {project.title && (
            <h3 className='text-[30px] font-medium leading-7 text-[#4338CA] my-5 dark:text-[#CFCBFF]'>{project.title}</h3>
          )}
          {project.info && (
            <p className='text-[14px]  text-gray-800 dark:text-white'>{project.info}</p>
          )}
          <div className='flex flex-row items-center gap-2 my-5'>
            {project.tags.map((tag, tagIndex) => (
              <Link key={tagIndex} className='project_tag border border-[#3730A3] rounded text-[#3730A3] dark:text-[#8F88FF] dark:border-[#383838]' to="/">
                {tag}
              </Link>
            ))}
          </div>
          <div className="flex justify-between">
            {project.github && (
              <Link to={"/"}>
                <button className="font-medium flex-1 underline dark:text-[#E1E1FF] text-[#3730A3] text-base">{project.github}</button>
              </Link>
            )}
            {project.view && (
              <Link to={"/"}>
                <button className="font-medium flex underline dark:text-[#E1E1FF] text-[#3730A3] text-base">view</button>
              </Link>
            )}
          </div>
        </div>
      ))}
      
      </div>
    </div>
      )
}
