import React, { useEffect, useState } from 'react';
import { BiSolidHandRight } from "react-icons/bi";
import { useSelector } from 'react-redux';

export default function Footer({ data }) {
  const isDarkMode = useSelector((state) => state.theme);
  const lang = useSelector((state) => state.language);

  const [footerData, setFooterData] = useState({}); 

  const englishFooter = data[0]?.en?.footer; 
  const turkishFooter = data[1]?.tr?.footer; 

  useEffect(() => {
    if (data) {
      setFooterData(lang === 'EN' ? englishFooter : turkishFooter);
    }
  }, [data, lang]);

  if (!footerData) return null; 

  const { text, email, links } = footerData || {};

  return (
    <div className="bg-gray-100 dark:bg-[#141414] ">
      <div className="mx-auto xl:h-[251px] lg:h-[211px] md:h-[181px] h-[150px]">
        <div className="flex flex-col gap-2 justify-center p-[60px]">
          {text && (
            <span className="text-3xl font-semibold dark:text-[#AEBCCF]">
              {text.first} <br />
              {text.second}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between px-[60px]">
          <span className="flex items-center gap-2 dark:text-[#BAB2E7]">
            <BiSolidHandRight className=" text-yellow-600" /> {email}
          </span>
          <ul className="flex items-center gap-4">
            {links &&
              links.map((link, index) => (
                <li
                  key={index}
                  className={`text-[13px] font-semibold cursor-pointer ${
                    isDarkMode === 'dark'
                      ? link.text.dark
                      : link.text.light
                  }`}
                >
                  {link.text.content}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}