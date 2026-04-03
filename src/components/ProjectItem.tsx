import { Github, LinkIcon} from "lucide-react";
import gsap from "gsap";
import {useRef, useState } from "react";

interface projectType{
  _id:string,
  title:string,
  description:string,
  imageURL:string,
  githubURL:string,
  demoURL:string,
  tags:string,
}

export default function ProjectItem({project}:{project:projectType}) {

  const tagsArr=project.tags.split(',')
  const [open,setOpen]=useState(false)
  const cardRef=useRef(null)
  const imgRef=useRef(null)

  const toggleCard=()=>{
    const card = cardRef.current;
    const img = imgRef.current;

    if(!open){
      gsap.to(card,{
        position:"fixed",
        zIndex:50,
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        duration:0.4,
        padding:5,
        ease:"power1.in",
      }),

      gsap.to(img,{
        width:"100%",
        height:()=>window.length >= 1024 ? "70%" : "100%" ,
        padding:10
      }),

      document.body.style.overflow = "hidden";
    } else {
      gsap.to(card,{
        position:"relative",
        duration:0.4,
        width:400,
        height:500,
        padding:0,
        zIndex:0,
        ease:"power1.out",
      }),

      gsap.to(img,{
        width:"100%",
        height:"100%",
        padding:0,
      }),
      document.body.style.overflow = "auto";
    }
    setOpen(!open);
  }

  return (
        <div 
        // onClick={toggleCard}
        ref={cardRef}
        className={`border border-(--secondary) hover:border-(--primary) bg-(--dark) flex w-100 h-125 overflow-hidden 
                    ${open ? "flex-col lg:flex-row border-none " : "flex-col rounded" } `}>
            <div className={`${open? "w-full h-full flex justify-center items-start" : "w-full h-[50vh]"} relative  overflow-hidden rounded-t items-center justify-center flex`}>
              <img ref={imgRef} src={project.imageURL} className={`${open? "w-full h-fit object-cover" : "w-full h-[50vh]"} transition duration-300 object-cover`}/>
            </div>
            <div className="relative flex flex-col justify-start h-fit items-start space-y-3 p-5 pr-10">

              <div className="text-xl sm:text-2xl font-bold">{project.title}</div>

              <div className={`${open ? "flex" : "hidden" } text-sm sm:text-lg text-(--secondary) font-light`}>{project.description}</div>

              <div className={`${open ? "flex" : "hidden" } text-(--secondary) space-x-2 space-y-2`}>
                {
                  tagsArr.map((tag)=>
                   <span key={tag} className="flex border border-(--primary) bg-(--primary)/20 text-xs sm:text-sm
                          font-light rounded p-1 w-fit h-fit items-center">{tag}</span> 
                  )
                }
              </div>
              
              <div className={`${open ? "flex" : "hidden" } flex-row justify-center items-center`}>
                <div className=" text-(--secondary) text-sm items-center"><Github className="p-1"/></div>
                <a 
                  href={project.githubURL}
                  target="_blank"
                  className="flex flex-col justify-start items-center hover:text-(--primary) p-1 text-(--secondary) duration-300 ">
                  <div className="text-sm ">{project.githubURL}</div>
                </a>
              </div>
              
              <div className="flex flex-row  justify-center items-center">
                <div className="text-(--secondary) text-sm items-center"><LinkIcon className="p-1"/></div>
                <a 
                  href={project.demoURL}
                  target="_blank"
                  className="flex flex-col justify-start items-center hover:text-(--primary) p-1 text-(--secondary) duration-300 ">
                  <div className="text-sm ">{project.demoURL}</div>
                </a>
              </div>   


            </div>
              <div className={` absolute bottom-2 right-2 font-mono text-[#ffffff] flex w-full h-fit justify-end`}>
                  <button 
                    onClick={toggleCard}
                    className={` bg-(--primary) px-2 py-1 rounded hover:bg-(--primary)/50 text-sm `}>{open ? "back" : "open" }</button>
              </div>
        </div>
  )
}
