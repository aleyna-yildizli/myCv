import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

export default function ProjectItem({ data }) {
  const isDarkMode = useSelector((state) => state.theme);

  const [projectData, setProjectData] = useState([]);
  const lang = useSelector((state) => state.language);

  const englishProject = data[0]?.en?.projects || [];
  const turkishProject = data[1]?.tr?.projects || [];

  useEffect(() => {
    if (data) {
      setProjectData(lang === "EN" ? englishProject : turkishProject);
    }
  }, [data, lang]);

  return (
    <div
      id="projects"
      className="flex flex-col gap-4 w-full xl:mt-20 xl:mb-40 lg:mt-10 lg:mb-20 md:mt-5 md:mb-10 mt-2 mb-5"
    >
      <h2 className="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px]  font-bold dark:text-[#AEBCCF] xl:mb-5 lg:mb-3 md:mb-2 mb-1">
        Projects
      </h2>
      <div className="flex justify-between xl:gap-5 lg:gap-3 md:gap-2 gap-1">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col xl:w-[23vw] lg:w-[20vw] md:w-[25vw] w-[27vw]"
          >
            <img
              className="h-[250px] w-[500px] object-cover"
              src={`${project.image}`}
              alt=""
            />
            {project.title && (
              <h3 className="xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] font-medium leading-7 text-[#4338CA] xl:my-5 lg:my-3 md:my-2 my-1 dark:text-[#CFCBFF]">
                {project.title}
              </h3>
            )}
            {project.info && (
              <p className="text-[14px]  text-gray-800 dark:text-white">
                {project.info}
              </p>
            )}
            <div className="flex flex-row items-center gap-2 xl:my-5 lg:my-3 md:my-2 my-1 xl:text-base md:text-sm text-xs">
              {project.tags.map((tag, tagIndex) => (
                <Link
                  key={tagIndex}
                  className="project_tag border border-[#3730A3] rounded text-[#3730A3] dark:text-[#8F88FF] dark:border-[#383838]"
                  to="/"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <div className="flex justify-between">
              {project.github && (
                <Link to={"/"}>
                  <button className="font-medium flex-1 underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base md:text-sm text-xs">
                    {project.github}
                  </button>
                </Link>
              )}
              {project.view && (
                <Link to={"/"}>
                  <button className="font-medium flex underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base md:text-sm text-xs">
                    {project.view}
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
