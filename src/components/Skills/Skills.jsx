export default function Skills () {
    return (
        <div className="flex flex-col gap-4 w-full mb-5">
        <h2 className="text-4xl font-bold dark:text-[#AEBCCF]">Skills</h2>
        <div className="grid grid-cols-3 w-full">
            <div className="flex flex-col gap-4">
                <div className="text-indigo-700 text-[20px] dark:text-[#B7AAFF]" >Java Script</div>
                <p className="text-[12px] text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat justo enim. Suspendisse ut odio tempus, fermentum ante ac, tempus eros.
               
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-indigo-700 text-[20px] dark:text-[#B7AAFF]" >React.Js</div>
                <p className="text-[12px] text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat justo enim. Suspendisse ut odio tempus, fermentum ante ac, tempus eros. 
               
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-indigo-700 text-[20px] dark:text-[#B7AAFF]" >Node.Js</div>
                <p className="text-[12px] text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat justo enim. Suspendisse ut odio tempus, fermentum ante ac, tempus eros.                
                </p>
            </div>
        </div>
    </div>
    )
};
