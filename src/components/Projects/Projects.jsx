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

  const links = [
    {
      github: "https://github.com/aleyna-yildizli/pizza-adv",
      view: "https://pizza-adv.vercel.app/",
    },
    {
      github: "https://github.com/aleyna-yildizli/hellokedy-pro",
      view: "https://hellokedy-pro.vercel.app/",
    },
    {
      github: "https://github.com/aleyna-yildizli/aleyna-ecommerce",
      view: "https://piggybank.aleynayildizli.com/",
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col gap-4  w-full xl:mt-20 xl:mb-40 lg:mt-10 lg:mb-20 md:mt-5 md:mb-10 mt-2 mb-5"
    >
      <h2 className="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px]  font-bold dark:text-[#AEBCCF] xl:mb-5 lg:mb-3 md:mb-2 mb-1">
        Projects
      </h2>
      <div className="flex flex-wrap justify-between gap-20 sm:gap-2">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col xl:w-[23%] lg:w-[30%] md:w-[45%] w-full"
          >
            <img
              className="h-[250px] w-full object-cover"
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
            <div className="flex flex-row flex-wrap items-center gap-1 xl:my-5 lg:my-3 md:my-2 my-1 xl:text-base md:text-sm text-xs">
              {project.tags.map((tag, tagIndex) => (
                <button
                  key={tagIndex}
                  className="p-1.5 border border-[#3730A3] rounded text-[#3730A3] dark:text-[#8F88FF] dark:border-[#383838]"
                  to="/"
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              {links[index].github && (
                <a
                  href={links[index].github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="font-medium flex-1 underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base md:text-sm text-xs">
                    {project.github}
                  </button>
                </a>
              )}
              {links[index].view && (
                <a
                  href={links[index].view}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="font-medium flex underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base md:text-sm text-xs">
                    {project.view}
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
