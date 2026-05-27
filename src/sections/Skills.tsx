
import { usePortfolio } from "../context/PortfolioContext";
import {easeInOut, motion} from "framer-motion"

export default function Skills() {

  const {portfolioData} = usePortfolio();
  const skills = portfolioData?.skills;
  // console.log(skills)

  return (
    <div id="skills" className="bg-(--background) text-(--light) flex flex-col justify-center items-center py-10 transition-all">
        <div className="text-4xl sm:text-6xl font-bold w-full text-center p-5">Skills & Technology</div>
        <div className="text-(--secondary) sm:text-(--secondary) text-md sm:text-2xl font-light text-center px-5">My technical toolkit</div>
        <div className="flex w-full p-5 sm:p-20 ">
          <div className="flex justify-center item-center flex-wrap gap-3 sm:gap-5 w-full p-5 sm:p-20 bg-(--dark) select-none">
            {skills?.map((skill)=>
               <motion.div
               whileHover={{
                scale : 1.2,
                rotate :360,
                background:"#6565F1",
                color:"#ffffff"
               }}
               whileTap={{
                scale : 1.2,
                rotate: 360,
                background:"#6565F1",
                color:"#ffffff"
               }}
               transition={{
                ease:easeInOut,
                duration:1,
                type:"spring",
               }}
                key={skill._id}
                className="border border-(--primary)/40 bg-(--background)  rounded-lg px-5 py-2 text-(--primary) cursor-pointer">
                  {skill.name}
                </motion.div>
            )}
          </div>
        </div>
    </div>
  )
}
