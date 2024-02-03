import ProjectItem from "./ProjectItem"

export default function Projects () {
    return (
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-4xl font-bold dark:text-[#AEBCCF]">Projects</h2>
          <div className="grid grid-cols-3 gap-5">
            <ProjectItem 
            name="react"
            title="Workintech" 
            description="A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible." 
            image="../public/images/69bb4825e42350e768340fdbec09d78b.png"/>  
            <ProjectItem
            name="redux"
            title="Random Jokes" 
            description="A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible." 
            image="../public/images/2ad18b91bc83b5e0c2524ee319ac4a12.png" /> 
            <ProjectItem 
            name="axios"
            title="Journey" 
            description="A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible." 
            image="../public/images/a9370e031b441737654465d0f374af51.png" />  
           </div> 
        </div>
      )
};
