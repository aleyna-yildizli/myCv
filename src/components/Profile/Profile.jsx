export default function Profile() {
    return (
      <div className="">
        <h2 className="text-4xl font-bold mb-10 dark:text-[#AEBCCF]">Profile</h2>
      <div className="flex gap-4 w-full mb-5  justify-between">
          <div className="flex-none gap-2 ">
            <h3 className="flex text-[30px] text-purple-900 font-semibold dark:text-[#B7AAFF]">Profile</h3>
            <div className="flex flex-row">
            <div className="flex flex-col gap-5 items-start text-[18px] font-semibold dark:text-white ">
              <span>Birth Date</span>
              <span>City</span>
              <span>Education</span>
              <span className="pt-6">Preffered Role</span>
            </div>
            <div className="flex flex-col gap-5  text-[18px] items-start font-normal ml-10 text-[#000000] dark:text-white ">
              <span>06.10.1997</span>
              <span>İzmir</span>
              <span>Ege UNV, Mathematics <br></br> Lisans, 2022</span>
              <span>Frontend, UI</span>
            </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 ml-[56px] w-[48vw] mr-[130px]">
            <h3 className="text-[30px] text-indigo-900 font-semibold dark:text-[#B7AAFF]">About Me</h3>
            <p className="text-[#6B7280] text-[18px] dark:text-white">
            Hello! I'm Aleyna Yıldızlı, passionate about staying updated on the latest trends and technologies in the ever-evolving field of frontend development. My commitment to excellence, teamwork, and continuous improvement makes me excited about contributing to your projects.
            </p>
            <p className="text-[#6B7280] text-[18px] dark:text-white">
            I am currently seeking new opportunities to apply my skills and bring value to a dynamic team. Please feel free to reach out if you have any questions or if you're interested in discussing potential collaborations. I'm looking forward to hearing from you!
            </p>
          </div>
        </div>
        </div>
    );
  }
  