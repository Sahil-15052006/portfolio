import { Github } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  _id: string;
  imageURL: string;
  title: string;
  description: string;
  githubURL: string;
  tags: string;
  demoURL: string;
  createdAt: string;
  updatedAt: string;
  owner: string;
};

export default function ProjectItem({ project }: { project: Project }) {
  // const tagsArr=project.tags.split(',')
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [open]);

  return (
    <motion.div
      layout
      animate={{
        position : open ? 'fixed' : 'relative',
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={`
    bg-(--background) backdrop-blur-md overflow-hidden border border-(--secondary)/20
    ${
      open
        ? "fixed inset-0 z-50 flex flex-col lg:flex-row rounded-lg"
        : "relative flex flex-col w-[20rem] sm:w-[24rem] h-104 rounded-lg hover:border-(--primary)/40"
    }
  `}
    >

      <div
        className={`
      overflow-hidden flex justify-center items-center bg-(--dark)
      ${
        open
          ? "w-full h-[40vh] md:px-20 md:py-10 lg:w-1/2 lg:h-full lg:px-0 lg:py-0"
          : "w-full h-[65%]"
      }
    `}
      >
        <img
          src={project.imageURL}
          alt="project image"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className={`
      relative flex flex-col justify-between text-(--light)
      ${open ? "flex-1 p-5 sm:p-8 overflow-y-auto" : "h-[35%] p-4"}
    `}
      >
        <div className="space-y-3">

          <h1 className={`${open ? "text-2xl sm:text-4xl" : "text-lg"} font-bold`}>
            {project.title}
          </h1>

          {open && (
            <p className="text-(--secondary) text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          )}

          {open && (
            <div className="flex flex-wrap gap-2">
              {project.tags.split(",").map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs border border-(--primary)/30 bg-(--primary)/10 text-(--primary)"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-5">

          <a
            href={project.demoURL}
            target="_blank"
            className="text-sm flex justify-center items-center text-(--primary) border border-(--primary)/30 bg-(--primary)/10 hover:bg-(--primary)/20 transition-all duration-300 rounded-lg px-3 py-1.5"
          >
            Live Demo
          </a>


          {open && (
            <a
              href={project.githubURL}
              target="_blank"
              className="text-sm flex justify-center items-center text-(--primary) border border-(--primary)/30 bg-(--primary)/10 hover:bg-(--primary)/20 transition-all duration-300 rounded-lg px-3 py-1.5"
            >
              <Github/>
            </a>
          )}


          <button
            onClick={() => setOpen(!open)}
            className="text-sm bg-(--background)/30 border border-(--primary) text-(--primary) hover:bg-(--primary)/10 transition-all duration-300 rounded-lg px-3 py-1.5"
          >
            {open ? "Less" : "More"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
