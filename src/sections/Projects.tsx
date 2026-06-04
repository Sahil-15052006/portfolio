
import { MoveRight } from "lucide-react";
import ProjectItem from "../components/ProjectItem";
import { usePortfolio } from "../context/PortfolioContext";
import { motion } from "framer-motion";

export default function Projects() {

  const {portfolioData} =  usePortfolio();
  const projects = portfolioData?.projects

  return (
    <div id="projects" className="bg-(--dark) text-(--light) flex flex-col justify-center items-center py-10 transition-all ">
      <div className=" text-4xl sm:text-6xl font-bold w-full text-center p-5 ">Featured Projects</div>

      <div className=" text-(--secondary) sm:text-(--secondary) text-md sm:text-2xl font-light text-center px-5">A showcase of my work</div>

      <motion.div
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex flex-row overflow-x-auto overflow-visible no-scrollbar gap-5 sm:gap-1 w-full py-5 sm:py-10 transition ">
            {
              projects?.map((project)=>
              <div
              key={project._id}
              className="min-w-100 sm:min-w-100 lg:min-w-120 flex justify-center items-center transition-all duration-500 ">
                <ProjectItem project={project}/>
              </div>
              )
            }
      </motion.div>

      <div className="flex justify-center items-center gap-5 text-(--secondary) sm:text-(--secondary) text-md sm:text-2xl font-light text-center px-5"> <MoveRight/>  </div>
    </div>
  )
}
