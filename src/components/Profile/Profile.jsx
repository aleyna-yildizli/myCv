import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export default function Profile({data}) {

  const [profileData, setProfileData] = useState([]);
  const lang = useSelector((state) => state.language);

  const englishProfile = data[0]?.en?.profile;
  const turkishProfile = data[1]?.tr?.profile;



  useEffect(() => {
      if (data) {
        setProfileData(lang === 'EN' ? englishProfile : turkishProfile);
      }
    }, [data, lang]);

    const { aboutMe, content} = profileData || [];


    return (
      <div className="mt-10 mb-20">
         {aboutMe && (
        <h2 className="text-4xl font-bold mb-10 dark:text-[#AEBCCF]">{aboutMe.oneTitle}</h2>
        )}
      <div className="flex gap-4 w-full mb-5  justify-between">
          <div className="flex-none gap-2 ">
          {aboutMe && (
            <h3 className="flex text-[30px] text-[#4338CA] dark:text-[#B7AAFF] mb-5">{aboutMe.oneTitle}</h3>
            )}
            <div className="flex flex-row">
            <div className="flex flex-col gap-5 items-start text-[18px] font-semibold dark:text-white ">
            {content && content.map((item, index) => (
              <span key={index}>{item.first}</span>
            ))}
            </div>
            <div className="flex flex-col gap-5  text-[18px] items-start font-normal ml-10 text-[#000000] dark:text-white ">
            {content && content.map((item, index) => (
               <span key={index}>{item.second}</span>
              ))}
            </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 ml-[56px] w-[48vw] mr-[130px]">
          {aboutMe && (
            <h3 className="text-[30px] text-[#4338CA] dark:text-[#B7AAFF]">{aboutMe.title}</h3>
            )}
            {aboutMe && (
              <>
            <p className="text-[#6B7280] text-[18px] dark:text-white">
          {aboutMe.first}
            </p>
            <p className="text-[#6B7280] text-[18px] dark:text-white">
          {aboutMe.second}
            </p>
            </>
          )}
          </div>
        </div>
        </div>
    );
  }
  