export default function Profile() {
    return (
      <div className="border border-solid border-1 border-[#3730A3]">
        <h2 className="text-4xl font-bold mb-10 dark:text-[#AEBCCF]">Profile</h2>
      <div className="flex gap-4 w-full mb-5 border border-solid border-1 border-black">
          <div className="flex-none gap-2 border border-solid border-1 border-[#3730A3]">
            <h3 className="flex text-2xl text-purple-900 font-semibold dark:text-[#B7AAFF]">Profile</h3>
            <div className="flex flex-row">
            <div className="flex flex-col gap-5 items-start font-semibold dark:text-white border border-solid border-1 border-[#3730A3]">
              <span>Birth Date</span>
              <span>City</span>
              <span>Education</span>
              <span className="pt-6">Preffered Role</span>
            </div>
            <div className="flex flex-col gap-5 items-start font-normal ml-10 text-black dark:text-white border border-solid border-1 border-[#3730A3]">
              <span>06.10.1997</span>
              <span>İzmir</span>
              <span>Ege UNV, Mathematics <br></br> Lisans, 2023</span>
              <span>Frontend, UI</span>
            </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[576px] h-[182px] ml-[56px] border border-solid border-1 border-[#3730A3]">
            <h3 className="text-2xl text-indigo-900 font-semibold dark:text-[#B7AAFF]">About Me</h3>
            <p className="text-gray-800 text-[13px] dark:text-white">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! 
            </p>
          </div>
        </div>
        </div>
    );
  }
  