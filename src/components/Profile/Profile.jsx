export default function Profile() {
    return (
      <div className="border border-solid border-1 border-[#3730A3]">
        <h2 className="text-4xl font-bold mb-10">Profile</h2>
      <div className="flex gap-4 w-full mb-5 border border-solid border-1 border-black">
          <div className="flex-none gap-2 border border-solid border-1 border-[#3730A3]">
            <h3 className="flex text-2xl text-purple-900 font-semibold">Profile</h3>
            <div className="flex flex-row">
            <div className="flex flex-col gap-5 items-start font-semibold border border-solid border-1 border-[#3730A3]">
              <span>Doğum Tarihi</span>
              <span>İkamet Şehri</span>
              <span>Eğitim Durumu</span>
              <span className="pt-6">Tercih Ettiği Rol</span>
            </div>
            <div className="flex flex-col gap-5 items-start font-normal ml-10 text-black border border-solid border-1 border-[#3730A3]">
              <span>06.10.1997</span>
              <span>İzmir</span>
              <span>Ege ÜNV. Matematik <br></br> Lisans, 2023</span>
              <span>Frontend, UI</span>
            </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border border-solid border-1 border-[#3730A3]">
            <h3 className="text-2xl text-purple-900 font-semibold">About Me</h3>
            <p className="text-gray-800 text-[13px]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
               Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! 
            </p>
          </div>
        </div>
        </div>
    );
  }
  