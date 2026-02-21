import { Github} from "lucide-react";

interface projectType{
  id:string,
  title:string,
  description:string,
  image_url:string,
  github_url:string,
  tags:string[]
}

export default function ProjectItem({project}:{project:projectType}) {
  return (
        <div className="group border border-(--secondary) w-full h-full rounded-2xl flex flex-col hover:-translate-y-5 hover:border-(--primary) transition duration-300 hover:bg-(--primary)/10 shadow-xl">
            <div className=" relative w-full h-fit overflow-hidden rounded-t-2xl items-center justify-center flex ">
              <img src={project.image_url}  className="h-70 w-full group-hover:scale-105 transition duration-300 object-cover " />
            </div>

            <div className="flex flex-col justify-start h-fit items-start space-y-3 p-5">
              <div className="text-xl sm:text-2xl font-bold">{project.title}</div>
              <div className="text-sm sm:text-lg text-(--secondary) font-light">{project.description}</div>
              <div>
                <div className="flex flex-row text-(--secondary) text-sm items-center"><Github className="p-1"/>Github Link</div>
                <a 
                  href={project.github_url}
                  className="flex flex-col justify-start items-center hover:text-(--primary) p-1 rounded-lg text-(--secondary) duration-300 ">
                  <div className="text-sm ">{project.github_url}</div>
                </a>
              </div>
              <div className=" flex flex-rows text-(--secondary) flex-wrap space-x-2 space-y-2">
                {
                  project.tags.map((tag)=>
                   <span key={tag} className="flex border border-(--secondary) text-xs sm:text-sm
                          font-light rounded-lg p-1 w-fit h-fit items-center">{tag}</span> 
                  )
                }
              </div>
            </div>
        </div>
  )
}
