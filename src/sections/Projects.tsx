
import ProjectItem from "../components/ProjectItem";
import { usePortfolio } from "../context/PortfolioContext";

export default function Projects() {



  const {portfolioData} =  usePortfolio();
  const projects = portfolioData?.projects

  return (
    <div id="projects" className="bg-(--dark) text-(--light) flex flex-col justify-center items-center py-10 transition-all ">
      <div className=" text-4xl sm:text-6xl font-bold w-full text-center p-5 ">Featured Projects</div>
      <div className=" text-(--secondary) sm:text-(--secondary) text-md sm:text-2xl font-light text-center px-5">A showcase of my work</div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-2 w-full p-5 sm:px-16 sm:py-10 transition duration-300 ">
            {
              projects?.map((project)=>
              <div className="flex justify-center items-center ">
                <ProjectItem key={project._id} project={project}/>
              </div>
              )
            }
      </div>
    </div>
  )
}
