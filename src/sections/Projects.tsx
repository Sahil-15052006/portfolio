
import { useEffect, useState } from "react";
import ProjectItem from "../components/ProjectItem";
import supabase from "../utils/supabase";

export default function Projects() {

  interface projectType{
  id:string,
  title:string,
  description:string,
  image_url:string,
  github_url:string,
  tags:string[]
  }


const [projects,setProjects]=useState<any[]>([])

  useEffect(()=>{
    fetchProjects()
  },[])

  const fetchProjects = async()=>{

    const {data,error} = await supabase
    .from("project")
    .select("*")

    if(error) {
      console.error(error)
      return
    }

    console.log('projects fetched');
    setProjects(data)
  }

  return (
    <div id="projects" className="bg-(--dark) text-(--light) flex flex-col justify-center items-center py-10 transition-all">
      <div className=" text-4xl sm:text-6xl font-bold w-full text-center p-5 ">Featured Projects</div>
      <div className=" text-(--secondary) sm:text-(--secondary) text-md sm:text-2xl font-light text-center px-5">A showcase of my best work</div>
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full p-5 sm:px-20 sm:py-10 transition duration-300 ">
        {
          projects.map((project:projectType)=>
            <ProjectItem key={project.id} project={project}/>
          )
        }
      </div>
    </div>
  )
}
