import ProjectItem from "./ProjectItem"

export default function Projects () {
    return (
        <div className="flex flex-col gap-4 w-full mb-7 h-[400px]">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="grid grid-cols-3 gap-5">
            <ProjectItem 
            name="react"
            title="Workintech" 
            description="Lorem Ipsum has been the industry's standard dummy text ever 
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into" 
            image="../public/images/69bb4825e42350e768340fdbec09d78b.png"
            />  
              <ProjectItem
              name="redux"
              title="Random Jokes" description="Lorem Ipsum has been the industry's standard dummy text ever 
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into" 
            image="../public/images/2ad18b91bc83b5e0c2524ee319ac4a12.png"
           /> 
              <ProjectItem 
              name="axios"
              title="Journey" description="Lorem Ipsum has been the industry's standard dummy text ever 
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into." 
            image="../public/images/a9370e031b441737654465d0f374af51.png"
            />  
        </div> 
       </div>
      )
};
